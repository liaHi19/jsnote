import React, { FC, useRef, useEffect } from "react";

import "./preview.scss";

interface IPreview {
  code: string;
  status: string;
}

const html = `
  <html>
  <head>
  <style>
  html {background-color: white;}
  </style>
  </head>
  <body>
  <div id="root"></div>
  <script>
  const handleError = (err) => {
    const root = document.querySelector("#root");
    root.innerHTML = "<div style='color: red;'> <h4>Runtime Error</h4>" + err + "</div>"
    throw err;
  }

  window.addEventListener("error", (event) => {
    event.preventDefault();
    handleError(event.error)
  });

  window.addEventListener("message", (event) => {
    try{
      eval(event.data)
    } catch(err){
      handleError(err);
    }

  }, false)
  </script>
  </body>
  </html>
  `;
const Preview: FC<IPreview> = ({ code, status }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, "*");
    }, 50);
  }, [code]);
  return (
    <div className="preview-wrapper">
      <iframe
        title="preview"
        ref={iframe}
        sandbox="allow-scripts"
        srcDoc={html}
      />
      {status && <div className="preview-error">{status}</div>}
    </div>
  );
};

export default Preview;

import React, { FC, useState, useEffect, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";

import "./textEditor.scss";

const TextEditor: FC = () => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState("# Header");
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (
        editorRef &&
        e.target &&
        editorRef.current?.contains(e.target as Node)
      ) {
        return;
      }
      setEditing(false);
    };
    document.addEventListener("click", listener, { capture: true });
    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, []);

  const showEditing = () => {
    setEditing(true);
  };
  return (
    <>
      {editing ? (
        <div className="text-editor" ref={editorRef}>
          <MDEditor
            value={value}
            onChange={(v) => {
              setValue(v || "");
            }}
          />
        </div>
      ) : (
        <div className="text-editor card" onClick={showEditing}>
          <div className="card-content">
            <MDEditor.Markdown source={value} />
          </div>
        </div>
      )}
    </>
  );
};

export default TextEditor;

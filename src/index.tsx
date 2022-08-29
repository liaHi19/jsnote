import ReactDOM from "react-dom/client";

import TextEditor from "./components/textEditor/TextEditor";

import "bulmaswatch/superhero/bulmaswatch.min.css";

const App = () => {
  return (
    <>
      <TextEditor />
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

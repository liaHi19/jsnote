import ReactDOM from "react-dom/client";

import CodeCell from "./components/CodeCell";

import "bulmaswatch/superhero/bulmaswatch.min.css";

const App = () => {
  return (
    <>
      <CodeCell />
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

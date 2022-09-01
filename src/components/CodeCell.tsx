import { useState, useEffect, FC } from "react";

import { bundle } from "../bundler";
import { useActions } from "../hooks/use-actions";
import { Cell } from "../state";

import CodeEditor from "./codeEditor/CodeEditor";
import Preview from "./preview/Preview";
import Resizable from "./resizable/Resizable";

interface ICodeCell {
  cell: Cell;
}

const CodeCell: FC<ICodeCell> = ({ cell }) => {
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");

  const { updateCell } = useActions();

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(cell.content);
      setCode(output.code);
      setErr(output.err);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content]);

  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: "calc(100% - 10px)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => {
              updateCell(cell.id, value);
            }}
          />
        </Resizable>
        <Preview code={code} status={err} />
      </div>
    </Resizable>
  );
};

export default CodeCell;

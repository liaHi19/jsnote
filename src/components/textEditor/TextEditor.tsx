import React, { FC, useState, useEffect, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";

import { Cell } from "../../state";
import { useActions } from "../../hooks/use-actions";

import "./textEditor.scss";

interface ITextEditor {
  cell: Cell;
}

const TextEditor: FC<ITextEditor> = ({ cell }) => {
  const [editing, setEditing] = useState(false);
  const editorRef = useRef<HTMLDivElement | null>(null);
  const { updateCell } = useActions();

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
            value={cell.content}
            onChange={(v) => {
              updateCell(cell.id, v || "");
            }}
          />
        </div>
      ) : (
        <div className="text-editor card" onClick={showEditing}>
          <div className="card-content">
            <MDEditor.Markdown source={cell.content || "Click to edit"} />
          </div>
        </div>
      )}
    </>
  );
};

export default TextEditor;

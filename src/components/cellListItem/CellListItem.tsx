import React, { FC } from "react";
import { Cell } from "../../state";

import TextEditor from "../textEditor/TextEditor";
import CodeCell from "../CodeCell";
import ActionBar from "../actionBar/ActionBar";

import "./cellListItem.scss";

interface ICellListItem {
  cell: Cell;
}

const CellListItem: FC<ICellListItem> = ({ cell }) => {
  return (
    <div className="cell-list-item">
      {cell.type === "code" ? (
        <>
          <div className="action-bar-wrapper">
            <ActionBar id={cell.id} />
          </div>
          <CodeCell cell={cell} />
        </>
      ) : (
        <>
          <TextEditor cell={cell} />
          <ActionBar id={cell.id} />
        </>
      )}
    </div>
  );
};

export default CellListItem;

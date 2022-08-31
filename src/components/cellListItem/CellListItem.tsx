import React, { FC } from "react";
import { Cell } from "../../state";

import TextEditor from "../textEditor/TextEditor";
import CodeCell from "../CodeCell";

interface ICellListItem {
  cell: Cell;
}

const CellListItem: FC<ICellListItem> = ({ cell }) => {
  return (
    <div>
      {cell.type === "code" ? (
        <CodeCell cell={cell} />
      ) : (
        <TextEditor cell={cell} />
      )}
    </div>
  );
};

export default CellListItem;

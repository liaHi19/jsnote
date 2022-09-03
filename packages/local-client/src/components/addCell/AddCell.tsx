import React, { FC } from "react";

import { useActions } from "../../hooks/use-actions";
import AddCellButton from "./AddCellButton";

import "./addCell.scss";

interface IAddCell {
  previousCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: FC<IAddCell> = ({ previousCellId, forceVisible }) => {
  const { insertCellAfter } = useActions();

  return (
    <div className={`add-cell ${forceVisible && "force-visible"}`}>
      <div className="add-buttons">
        <AddCellButton
          onClick={() => insertCellAfter(previousCellId, "code")}
          content="Code"
        />
        <AddCellButton
          onClick={() => insertCellAfter(previousCellId, "text")}
          content="Text"
        />
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;

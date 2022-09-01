import React, { FC } from "react";

import { useActions } from "../../hooks/use-actions";
import AddCellButton from "./AddCellButton";

import "./addCell.scss";

interface IAddCell {
  nextCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: FC<IAddCell> = ({ nextCellId, forceVisible }) => {
  const { insertCellBefore } = useActions();

  return (
    <div className={`add-cell ${forceVisible && "force-visible"}`}>
      <div className="add-buttons">
        <AddCellButton
          onClick={() => insertCellBefore(nextCellId, "code")}
          content="Code"
        />
        <AddCellButton
          onClick={() => insertCellBefore(nextCellId, "text")}
          content="Text"
        />
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;

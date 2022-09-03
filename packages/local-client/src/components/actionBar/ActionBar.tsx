import React, { FC } from "react";
import { useActions } from "../../hooks/use-actions";

import ActionButton from "./ActionButton";

import "./actionBar.scss";

interface IActionBar {
  id: string;
}

const ActionBar: FC<IActionBar> = ({ id }) => {
  const { deleteCell, moveCell } = useActions();

  return (
    <div className="action-bar">
      <ActionButton
        onClick={() => {
          moveCell(id, "up");
        }}
        icon={"fa-arrow-up"}
      />
      <ActionButton
        onClick={() => {
          moveCell(id, "down");
        }}
        icon={"fa-arrow-down"}
      />
      <ActionButton
        onClick={() => {
          deleteCell(id);
        }}
        icon={"fa-times"}
      />
    </div>
  );
};

export default ActionBar;

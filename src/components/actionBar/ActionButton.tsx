import React, { FC } from "react";

interface IActionButton {
  icon: string;
  onClick: () => void;
}

const ActionButton: FC<IActionButton> = ({ icon, onClick }) => {
  return (
    <button
      className="button is-primary is-small action-button"
      onClick={onClick}
    >
      <span className="icon">
        <i className={`fas ${icon}`}></i>
      </span>
    </button>
  );
};

export default ActionButton;

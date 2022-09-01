import React, { FC } from "react";

interface IAddCellButton {
  content: string;
  onClick: () => void;
}

const AddCellButton: FC<IAddCellButton> = ({ content, onClick }) => {
  return (
    <button
      className="button is-primary is-rounded is-small add-button"
      onClick={onClick}
    >
      <span className="icon is-small">
        <i className="fas fa-plus" />
      </span>
      <span>{content}</span>
    </button>
  );
};

export default AddCellButton;

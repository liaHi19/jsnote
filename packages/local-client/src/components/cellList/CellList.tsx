import React, { Fragment, FC, useEffect } from "react";
import { useTypedSelector } from "../../hooks/use-typed-selector";

import { useActions } from "../../hooks/use-actions";

import CellListItem from "../cellListItem/CellListItem";
import AddCell from "../addCell/AddCell";

import "./cellList.scss";

const CellList: FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );
  const { fetchCells } = useActions();

  useEffect(() => {
    fetchCells();
  }, []);

  return (
    <div className="cell-list">
      <AddCell forceVisible={cells.length === 0} previousCellId={null} />
      {cells?.map((cell) => (
        <Fragment key={cell.id}>
          <CellListItem cell={cell} />
          <AddCell previousCellId={cell.id} />
        </Fragment>
      ))}
    </div>
  );
};

export default CellList;

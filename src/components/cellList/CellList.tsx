import React from "react";
import { useTypedSelector } from "../../hooks/use-typed-selector";

import CellListItem from "../cellListItem/CellListItem";

const CellList = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );
  return (
    <div>
      {cells?.map((cell) => (
        <CellListItem key={cell.id} cell={cell} />
      ))}
    </div>
  );
};

export default CellList;

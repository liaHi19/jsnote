import { ActionType } from "../action-types";
import {
  MoveCellAction,
  DeleteCellAction,
  UpdateCellAction,
  InsertCellBeforeAction,
  Direction,
} from "../actions";

import { CellTypes } from "../cell";

export const moveCell = (id: string, direction: Direction): MoveCellAction => ({
  type: ActionType.MOVE_CELL,
  payload: {
    id,
    direction,
  },
});

export const deleteCell = (id: string): DeleteCellAction => ({
  type: ActionType.DELETE_CELL,
  payload: id,
});

export const updateCell = (id: string, content: string): UpdateCellAction => ({
  type: ActionType.UPDATE_CELL,
  payload: {
    id,
    content,
  },
});

export const insertCellBefore = (
  id: string,
  type: CellTypes
): InsertCellBeforeAction => ({
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {
    id,
    type,
  },
});

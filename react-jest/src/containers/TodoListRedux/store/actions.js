import { CHANGE_INPUT_VALUE, ADD_UNDO_ITEM } from "./constants";

export const changeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

export const addUndoItem = (value) => ({
  type: ADD_UNDO_ITEM,
  value,
});

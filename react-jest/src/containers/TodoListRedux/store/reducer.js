import { CHANGE_INPUT_VALUE, ADD_UNDO_ITEM } from "./constants";

const initialState = {
  inputValue: "",
  undoList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return { ...state, inputValue: action.value };
    case ADD_UNDO_ITEM:
      return {
        inputValue: "",
        undoList: [...state.undoList, { status: "div", value: action.value }],
      };
    default:
      return state;
  }
};

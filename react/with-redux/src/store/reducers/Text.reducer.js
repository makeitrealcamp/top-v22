export const CHANGE_TEXT = "CHANGE_TEXT";

//action creator
export function changeText(value) {
  return {
    type: CHANGE_TEXT,
    payload: value,
  };
}

const initialState = {
  text: "John Doe",
};

const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};

export default textReducer;

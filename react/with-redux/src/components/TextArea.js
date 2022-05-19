import { useSelector, useDispatch } from "react-redux";
//import { CHANGE_TEXT } from "../store/reducers/Text.reducer";
import { changeText } from "../store/reducers/Text.reducer";

const TextArea = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.textReducer.text);

  return (
    <textarea
      onChange={(event) =>
        //dispatch({ type: CHANGE_TEXT, payload: event.target.value })
        dispatch(changeText(event.target.value))
      }
      value={text}
    />
  );
};

export default TextArea;

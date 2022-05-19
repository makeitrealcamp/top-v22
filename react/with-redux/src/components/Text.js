import { useSelector } from "react-redux";

const Text = () => {
  //const state = useSelector((state) => console.log(state));
  //const state = useSelector((state) => ({text: state.text}));
  const text = useSelector((state) => state.textReducer.text);
  //const state = useSelector(({ text }) => ({ text }));
  return <h2>{text}</h2>;
};

export default Text;

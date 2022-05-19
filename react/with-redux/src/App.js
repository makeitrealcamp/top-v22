import "./App.css";
import { connect } from "react-redux";
import Theory from "./components/Theory";
import Counter from "./components/Counter";
import Button from "./components/Button";
import TextArea from "./components/TextArea";
import Text from "./components/Text";
import { INCREMENT, DECREMENT } from "./store/reducers/Count.reducer";

//Principios
//    Almacenamiento
//    Inmutable
//    centralizado

//Cuando
// Aplicaciones grandes
// Compartir información
// Manejar estados y no formatos

function App({ increment, decrement }) {
  return (
    <div className="App">
      <TextArea />
      <Text />
      <Theory />
      <Counter />
      <Button event={decrement}>Decrementar</Button>
      <Button event={increment}>Incrementar</Button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: INCREMENT }),
    decrement: () => dispatch({ type: DECREMENT }),
  };
}

export default connect(null, mapDispatchToProps)(App);

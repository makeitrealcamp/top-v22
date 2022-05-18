import "./App.css";
import { connect } from "react-redux";
import Theory from "./components/Theory";
import Counter from "./components/Counter";
import Button from "./components/Button";
import { INCREMENT, DECREMENT } from "./store";

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

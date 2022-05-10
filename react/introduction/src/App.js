import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

const Title = ({ text }) => {
  return <h1>{`${text}`}</h1>;
};

const Button = ({ renderH2, render }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        renderH2(render ? false : true);
      }}
    >
      Presioname!
    </button>
  );
};

function App() {
  //JSX => JavaScript y XML
  //Todas las etiquetas deben cerrarse
  //Un componente siempre debe retornar un elemento de JSX
  //HTML se cambia a JSX y retornamos atributos
  // -> cambiar class por className
  // -> for por htmlFor

  const [view, setView] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Title
          text="Hola mundo soy react"
          color="red"
          isTrue={true}
          isNumber={355}
        />
        {view === false && <h2>Esto se puede mostrar si o no</h2>}
        <Button renderH2={setView} render={view} />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

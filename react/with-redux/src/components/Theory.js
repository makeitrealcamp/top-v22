import reduxFlux from "../images/grafico-redux.png";

const Theory = () => {
  return (
    <>
      <h1>REDUX</h1>
      <p>
        <strong>Store,</strong> Contiene todo el state (uno por proyecto)
      </p>
      <p>
        <strong>Dispatch</strong> Ejecuta una acción que actualiza el state
      </p>
      <p>
        <strong>Action</strong> Objeto JS con dos propiedades: (type, payload)
      </p>
      <p>
        <strong>Subscribe</strong> Es un manejador de eventos del state
      </p>
      <p>
        <strong>Reducers</strong> Son funciones que gestion actions reciben dos
        parametros(current state, action)
      </p>
      <img src={reduxFlux} alt="Flujo de trabajo con redux" />
    </>
  );
};

export default Theory;

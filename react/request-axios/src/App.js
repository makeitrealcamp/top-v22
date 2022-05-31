import "./App.css";
import axios from "axios";

//GET--> https://api-airbnbclon.com/bookings ---> pedir todas las reservas
//GET--> https://api-airbnbclon.com/bookings/:id ---> pedir un sola reserva
//POST-> https://api-airbnbclon.com/bookings ---> para crear una sola reserva
//PUT-> https://api-airbnbclon.com/bookings/:id ---> para actulizar una sola reserva
//DELETE-> https://api-airbnbclon.com/bookings/:id ---> Eliminar una sola reserva

function App() {
  //axios
  //GET
  //pedir muchos recursos
  //pedir un recursos especifico (id)
  axios
    .get(`${process.env.REACT_APP_HTTP_POST}posts`)
    .then((response) => {
      // entra si el status es entre 100 - 399
      // console.log(response.data);
    })
    .catch((error) => {
      // entra si el status es 400 - 599
      console.log(error);
    })
    .finally(() => {
      console.log("Proceso finalizado");
    });

  // en fecth entra al then si esta entre 100 y 599

  //POST
  //crear un recurso por primera vez

  axios
    .post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "sergio",
        body: "mentor",
        userId: 1,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
    .then((response) => {
      console.log("response", response.data);
    });

  //PUT

  //DELETE

  return (
    <div className="App">
      <h1>clase de request con axios</h1>
    </div>
  );
}

export default App;

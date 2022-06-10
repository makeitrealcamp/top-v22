import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { findByPlaceholderText } from "@testing-library/react";

const handler = window.ePayco.checkout.configure({
  key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
  test: true,
});

const Payment = () => {
  function handleClick() {
    handler.open({
      external: "true",

      //Parametros compra (obligatorio)
      name: "Collar para perro tamaño mediano",
      description:
        "Collar rojo, con bolsa para cargar los elementos de tu mascota",
      invoice: "785236",
      currency: "cop",
      amount: "50000",
      tax_base: "0",
      tax: "0",
      country: "co",
      lang: "es",

      //Atributos opcionales
      extra1: "extra1",
      extra2: "extra2",
      extra3: "extra3",

      response: `${process.env.REACT_APP_BASE_URL}/response`,

      //Atributos cliente
      name_billing: "Jhon Doe",
      address_billing: "Calle false #1-2-3",
      type_doc_billing: "cc",
      mobilephone_billing: "3050000000",
      number_doc_billing: "100000000",

      //atributo deshabilitación metodo de pago
      methodsDisable: ["PSE"],
    });
  }

  return (
    <button type="button" onClick={handleClick}>
      Pagar
    </button>
  );
};

//?ref_payco=49c998aecddcc5b204995eaa

const queryString = (query) => {
  const res = {};
  query
    .replace("?", "")
    .split("&")
    .forEach((q) => {
      const [key, value] = q.split("=");
      res[key] = value;
    });
  return res;
};

const Response = () => {
  /*   const params = window.location.search.replace("?ref_payco=", "");
  useEffect(() => {
    axios
      .get(`https://secure.epayco.co/validation/v1/reference/${params}`)
      .then(({ data }) => {
        console.log("Respuesta ePayco:", data);
      });
  }, []); */

  return <p>Respuesta de la transacción</p>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Payment />} />
        <Route path="/response" element={<Response />}>
          <Route path=":redirect" component={<Response />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

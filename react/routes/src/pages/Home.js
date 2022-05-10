import { useLocation } from "react-router-dom";

const Home = () => {
  console.log("Location", useLocation());

  return <h1>Estamos en el home</h1>;
};

export default Home;

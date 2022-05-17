import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

const Header = () => {
  const authData = useContext(AuthContext);

  return <h1>Hola {authData.user}</h1>;
};

export default Header;

import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

const Button = () => {
  const auth = useContext(AuthContext);

  return <button onClick={auth.handleLogin}>Login</button>;
};

export default Button;

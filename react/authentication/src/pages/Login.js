import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    const res = await axios.post("http://localhost:8080/users/signin", {
      email: email,
      password: password,
    });

    localStorage.setItem("token", res.data.token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={handleChange}
        value={user.email}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
        value={user.password}
      />
      <button>Login</button>
    </form>
  );
};

export default Login;

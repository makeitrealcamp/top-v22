import "./App.css";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Private from "./pages/Private";

function App() {
  const token = localStorage.getItem("token");
  // localStorage.setItem("name", "John Doe");
  // localStorage.setItem("age", 100);
  // localStorage.setItem("working", true);
  // localStorage.setItem("services", JSON.stringify(["Programming", "testing"]));
  // localStorage.setItem("Object", JSON.stringify({ name: "Cristian" }));

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/private">Private</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/private"
          element={token !== "" ? <Private /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

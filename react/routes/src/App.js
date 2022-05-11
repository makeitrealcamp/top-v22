import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Navigate,
  //useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Vehicles from "./pages/vehicles";
import Profile from "./pages/Profile";
// URL
// Protocolo - dominio - :puerto - path - slug - query/search (opt) / hash (opt)
// https://  dev.to :3000 / docs /   v6 / ?name=pepito&age=8

function App() {
  const token = "";

  return (
    <BrowserRouter>
      {window.location.path === "about" ? null : (
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      )}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/vehicles" element={<Vehicles />}>
          <Route path=":branchId" element={<Vehicles />} />
        </Route>
        <Route
          path="profile"
          element={token !== "" ? <Profile /> : <Navigate to="/" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

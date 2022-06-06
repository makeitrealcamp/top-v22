import { useEffect, useRef } from "react";
import io from "socket.io-client";
import "./App.css";

function App() {
  const ref = useRef();

  useEffect(() => {
    //const socket = io("http://localhost:8000");
    ref.current = io("http://localhost:8000");

    ref.current.on("welcome", (data) => {
      console.log(data.message);
    });

    ref.current.on("broadcast", (data) => {
      console.log(data);
    });

    ref.current.on("private", (data) => {
      console.log(data);
    });

    return () => {
      ref.current.close();
      ref.current.removeAllListeners();
    };
  }, []);

  const handleEmit = () => {
    // const newMessage = {
    //   message: "Hola a todos",
    //   email: localStorage.getItem("email")
    // }
    ref.current.emit("message", "Hola a todos");
  };

  const joinRoom = () => {
    ref.current.emit("join room");
  };

  return (
    <div className="App">
      <button type="button" onClick={handleEmit}>
        Enviar
      </button>
      <button type="button" onClick={joinRoom}>
        Unirme
      </button>
    </div>
  );
}

export default App;

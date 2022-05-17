import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [view, setView] = useState(false);
  const [scroll, setScroll] = useState(0);

  //1. Los hooks solo se pueden utilizar dentro de otros hooks o componentes de react
  //2. Los hooks siempre se deben ejecutar en el mismo orden
  //3. Los hooks siempre se deben ejecutar en el primer nivel de la función (componente)
  //4. Los hooks siempre se nombran con el prefijo de use

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(({ data }) => {
      setPosts([...posts, ...data]);
    });
  });

  //useEffect(callback)

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <button onClick={() => handleClick()}>Contador</button>
      <h1>{count}</h1>
      {posts.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;

import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [image, setImage] = useState(null); //capturamos para mostrar base64

  const [username, setUsername] = useState(""); //capturamos nombre usuario
  const [file, setFile] = useState(null); //capturamos archivo para enviar obj

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("username", username);
    data.append("file", file);

    const response = await axios.post("http://localhost:8080", {
      data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response);
  };

  const readFile = (file) => {
    const reader = new FileReader();

    //reader.onload = (e) => console.log(e.target.result);
    reader.onload = (e) => setImage(e.target.result);

    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    console.dir(e.target.files);
    readFile(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  console.log("userName", username);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nombre de usuario</label>
        <input
          type="text"
          value={username}
          id="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="file">Imagen</label>
        <input
          type="file"
          id="file"
          name="file"
          accept="image/*"
          multiple
          onChange={handleChange}
        />
        <button>Enviar</button>
      </form>
      {!!image && <img src={image} alt="upload review" loading="lazy" />}
    </div>
  );
}

export default App;

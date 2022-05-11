const Head = () => {
  const head_container = {
    padding: "20px 0",
    width: "900px",
  };

  const head_container_title = {
    color: "#76D436 ",
    fontSize: "30px",
    textAlign: "center",
  };

  return (
    <div style={head_container}>
      <h1 style={head_container_title} className="primary-color">
        Este es el titulo de la aplicación
      </h1>
      <p style={{ color: "#958380 " }}>Este es el subtitulo de la aplicación</p>
    </div>
  );
};

export default Head;

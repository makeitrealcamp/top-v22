import "./App.css";
import React from "react";
import axios from "axios";

class App extends React.Component {
  //mount
  //X componentWillmount -->  UNSAFE_ComponentWillMount()
  //render()
  // componentDidMount()  ---------------------

  //update
  //shouldComponentUpdate
  //X componentWillUpdate --> UNSAFE_componentWillUpdate()
  //render()
  //componentDidUpdate

  //unmount
  //componentWillUnmount --> Terminar peticiones y procesos

  state = {
    posts: [],
    loading: true,
    error: null,
  };

  //Client side render

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => {
        this.setState({
          posts: data,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          ...this.state,
          error: err,
          loading: false,
        });
      });
  }

  render() {
    const { posts, loading, error } = this.state;

    if (loading) {
      return <h1>Loading...</h1>;
    }
    if (error) {
      return <h1>Ups! ocurrió algo intentalo más tarde {error}</h1>;
    }

    return (
      <div className="App">
        <h1>Clase de ciclos de vida de un componente</h1>
        {posts.length < 0 &&
          posts.map((item) => {
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
}

export default App;

import React, { useState } from "react";
import Paragrahp from "./components/Paragrahp";
import Head from "./components/Head";
import Card from "./components/Card";
import SideBar from "./components/SideBar";

function App() {
  const propsString = "";
  const [sideBar, setSideBar] = useState(false);
  const [thread, setThread] = useState(true);

  return (
    <div className="App">
      {/*       {sideBar && (
        <div>
          <SideBar />
        </div>
      )} */}
      {/* <div className={sideBar ? "container-sideBar" : "d-none"}>
        <SideBar />
      </div> */}

      {thread ? (
        <div>
          <h1>Conversación</h1>
        </div>
      ) : (
        <div>
          <h1>Menú de ayuda</h1>
        </div>
      )}
      <div>
        <button
          onClick={() => {
            thread ? setThread(false) : setThread(true);
          }}
        >
          Menú
        </button>
        <Head />
        <Paragrahp />
        <Card />
      </div>
    </div>
  );
}

export default App;

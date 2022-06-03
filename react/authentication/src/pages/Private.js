import { useState, useEffect } from "react";
import axios from "axios";

const Private = () => {
  const [data, setData] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("/", {
        header: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        localStorage.setItem("token");
      });
  }, []);

  return <h1>Access {data.statusText === "OK" ? "granted" : "denied"}</h1>;
};

export default Private;

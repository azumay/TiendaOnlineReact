import React, { useState, useEffect } from "react";
import "./App.css";
import PropTypes from "prop-types";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";

import UnstyledButtonCustom from "../Botones/BotonArticle";

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("cataleg.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <article className="boxPortatil">
            <div className="capProduct">
              <h1>{item.marca}</h1>
              <h3>{item.model}</h3>
            </div>
            <img src={"pccomp/" + item.imatge} style={{ width: 350 }} />
            <p>
              <b> {item.preu} €</b>
            </p>

            <UnstyledButtonCustom />
          </article>
        ))}
      ,
    </div>
  );
}

export default App;

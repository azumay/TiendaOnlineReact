import React, { useState, useEffect, useContext } from "react";
import "./../../App.css";
import { fetchData } from "../helpers/fetch";
import ProductContext from "./../../context/ProductContext";
import FilterContext from "./../../context/FilterContext";
import Aside from "./Aside";

import BasicAlerts from '../Alertas/AlertCompra';

export default function Productos() {
  const { carreto, setCarreto } = useContext(ProductContext);
  const { filter, setFilter } = useContext(FilterContext);
  const miLocalStorage = window.localStorage;

  const [data, setData] = useState([]);
  miLocalStorage.setItem('carrito', JSON.stringify(carreto));
  const getData = () => {
    fetchData(
      "http://localhost/p3cataleg2.php",

      {
        method: "POST",
        body: JSON.stringify(filter),
      }
    ).then(function (myJson) {
      setData(myJson);
    });
  };

  useEffect(() => {
    getData();
  }, [filter]);
  return (
    <div className="boxProductos">
      <Aside />
      <div id="cataleg">
        {data && data.length > 0 && data.map((item) => (
            <article key={item.model} className="boxPortatil">
              <div className="capProduct">
                <h1>{item.marca}</h1>
                <p>{item.model}</p>
              </div>
              <img src={"pccomp/" + item.imatge} style={{ width: 150 }} />
              <p>
                {item.processador}/{item.ram}/{item.emmagatzematge}/
                {item.polzades}
              </p>
              <p>
                <b> {item.preu} €</b>
              </p>

              <button
                className="button-29"
                role="button"
                onClick={() => {
                  if (carreto.every((actual) => actual.pid !== item.pid)) {
                    item.qty = 1;
                    setCarreto([...carreto, item]);
                    BasicAlerts(item.model);
                    
                  }
                }}
              >
                Comprar
              </button>
            </article>
          ))}
      </div>
    </div>
  );
}

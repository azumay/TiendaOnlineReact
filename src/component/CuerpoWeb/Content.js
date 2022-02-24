import React, { useState, useEffect, useContext } from "react";
import "./../../App.css";
import { fetchData } from "../helpers/fetch";
import ProductContext from "./../../context/ProductContext";


export default function Productos() {
  const { carreto, setCarreto } = useContext(ProductContext);
  const [data, setData] = useState([]);
  const getData = () => {
    fetchData("http://localhost/p3cataleg2.php")
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
          <article key={item.model} className="boxPortatil">
            <div className="capProduct">
              <h1>{item.marca}</h1>
              <p>{item.model}</p>
             
            </div>
            <img src={"pccomp/" + item.imatge} style={{ width: 150 }} />
            <p>{item.processador}/{item.ram}/{item.emmagatzematge}/{item.polzades}</p>
            <p>
              <b> {item.preu} €</b>
            </p>
           

            <button onClick={()=>{
              if(carreto.every((actual)=>actual.pid !==item.pid)){
                setCarreto([...carreto, item])
              }  
            }}>Comprar</button>
          </article>
        ))}
    </div>
  );
}



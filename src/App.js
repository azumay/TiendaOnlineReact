import "./App.css";
import React, { useState } from "react";
import ProductContext from "./context/ProductContext";
import FilterContext from "./context/FilterContext";
import Productos from "./component/CuerpoWeb/Content";
import PrimarySearchAppBar from "./component/CuerpoWeb/Header";
import PieDePaginagina from "./component/CuerpoWeb/Footer";
import FullCart from "./component/Cart/FullCart";

function App() {
  const [carreto, setCarreto] = useState([]);
  const [filter, setFilter] = useState([]);
  return (
    
    <ProductContext.Provider value={{ carreto, setCarreto }}>
      <FilterContext.Provider value={{ filter, setFilter }}>
        <div id="App">
          <PrimarySearchAppBar />
          <div id="filtros">
       
            <Productos />
          </div>
        
        </div>
        <PieDePaginagina />
      </FilterContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;

import './App.css';
import React, { useState }from 'react';
import ProductContext from "./context/ProductContext";
import Productos from './component/CuerpoWeb/Content';
import PrimarySearchAppBar from './component/CuerpoWeb/Header';
import PieDePaginagina from './component/CuerpoWeb/Footer';

function App() {
  const [carreto, setCarreto] = useState([]);
  return (
   <ProductContext.Provider value={{carreto, setCarreto}}>
    <div className="App">
     <PrimarySearchAppBar />
       <Productos />
    </div>
    <PieDePaginagina />
   </ProductContext.Provider>
  );
}

export default App;

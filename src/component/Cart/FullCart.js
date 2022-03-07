import React, { useContext, useState } from "react";
import ProductContext from "./../../context/ProductContext";

export default function FullCart() {
    // Carregar el context
    const { carreto, setCarreto } = useContext(ProductContext);
    
    
    // Calculamos el importe total

    const totalCart = carreto.reduce((total, product) =>{
        return total+=parseFloat(product.preu)*product.qty;
    },0).toFixed(2);

    return (    
       
        <table id="carrito"> 
        <h3>Artículo en tu cesta: </h3>
         <tr className="cabecera_cart">
            <th>Ref.</th>
            <th>Imatge</th>
            <th>Descripció</th>
            <th>Quantitat</th>
            <th>Preu</th>
            <th>Import</th>
         </tr>
            {carreto && carreto.length > 0 && carreto.map((product) => ( 
             <tr>
                <td>{product.pid}</td>
                <td><img src={"pccomp/" + product.imatge} style={{ width: 50 }} /></td>
                <td>{product.marca} {product.model} {product.processador}/{product.ram}/{product.emmagatzematge}/</td>
              
                <td>  <input  type="number" 
                              className="qty"
                              min="0" 
                              value={product.qty}
                              onChange={(e) => {
                              
                                // 1r Cogemos la cantidad de ese producto y le asignamos el nuevo valor
                              setCarreto([...carreto], product.qty =  e.target.value);
                            
                              // 2n Eliminamos del carrito los elementos con qty menor a 0
                                setCarreto( carreto.filter(product => product.qty > 0))
            
                                  }}         
                              />
                              
                              
                              </td> 
                <td>{product.preu}€</td> 
                <td>{(product.preu * product.qty).toFixed(2)}€</td>   
             
            </tr>
           
            
        ))}
        <div className="tiquet">
            <p className="subtotal">Subtotal  <b className="total">{totalCart}€</b> </p>     
            </div>
        
</table>
    );
            }
           

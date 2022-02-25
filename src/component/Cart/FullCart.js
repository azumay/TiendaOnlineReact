import React, { useContext } from "react";
import ProductContext from "./../../context/ProductContext";

export default function FullCart() {
    // Carregar el context
    const { carreto, setCarreto } = useContext(ProductContext);
    console.log(carreto)
    // Calculamos el importe total
   
    const totalCart = carreto.reduce((total, product) =>{
        return total+=parseFloat(product.preu)*product.qty;
    },0);

    return (    
        <table id="carrito"> 
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
              
                <td>  <input  type="number" min="0" value={product.qty}/> </td> 
                <td>{product.preu}</td> 
                <td>{product.preu}</td>   
             
            </tr>
           
            
        ))}
        <p>Total {totalCart}</p>   
</table>
    );
            }
           

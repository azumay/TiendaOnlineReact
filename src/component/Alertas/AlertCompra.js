
import React from "react";
import swal from 'sweetalert';


export default function BasicAlerts (){
   
    swal({
        title: `Producto agregado al carrito `,
        icon: "success",
        button: "Acceptar",
        timer: "3000"
    });
    
   
  }
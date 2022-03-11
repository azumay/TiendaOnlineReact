import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import FullCart from "../Cart/FullCart";
import ProductContext from "./../../context/ProductContext";

//Modulo PayPal
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const style = {
  position: "absolute",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const { carreto, setCarreto } = useContext(ProductContext);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  function vaciarCarro (){
    setCarreto([])
    handleClose()
  }

  return (
    <div>

      <ShoppingCart
        onClick={() => {
          if (carreto.length > 0) {
            setOpen(true);
          }
          else{
            setOpen(false);
          }
        }}
      />

      <Modal
        open={carreto.length!=0 ? open : false}
        onClose= {handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FullCart />
          <button className="volver" role="button" onClick={handleClose}>
            Seguir comprando 🛒
          </button>
          <button className="volver" role="button" onClick={vaciarCarro}>
            Vaciar
          </button>

          <div className="paypal" style={{ width: "30%", margin: "0 auto" }}>
            <PayPalScriptProvider options={{ "client-id": "test" }}>
              <PayPalButtons
                style={{
                  layout: "horizontal",
                  label: "pay",
                  shape: "rect",
                  tagline: false,
                }}
              />
            </PayPalScriptProvider>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

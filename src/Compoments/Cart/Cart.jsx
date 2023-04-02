import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { isElementOfType } from "react-dom/test-utils";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const precioTotal = getTotalPrice();

  const clear = () => {
    Swal.fire({
      title: "Estas seguro que quieres vaciar el carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Estoy seguro",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado");
      }
    });
  };

  if (orderId) {
    return (
      <div>
        <h2>Thanks for your purchase</h2>
        <h4>Your ticket id is: {orderId}</h4>
        <Link to="/">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div>
      {!showForm ? (
        <div>
          {cart.map((elemento) => {
            return (
              <div style={{ border: "2px solid black" }} key={elemento.id}>
                <h2> {elemento.title} </h2>
                <img src={elemento.img} alt="" style={{ width: "200px" }} />
                <h3>Cantidad: {elemento.quantity}</h3>
                <h3>$ {elemento.price}</h3>

                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => deleteProductById(elemento.id)}
                >
                  Delete
                </Button>
              </div>
            );
          })}
          <h1>Total Price: {precioTotal}</h1>
          {cart.length > 0 && (
            <div>
              <button onClick={() => setShowForm(true)}>
                {" "}
                Checkout{" "}
              </button>
              <button onClick={clear}>Clean cart </button>
            </div>
          )}
          ;
        </div>
      ) : (
        <FormCheckout
          cart={cart}
          precioTotal={precioTotal}
          setOrderId={setOrderId}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Cart;

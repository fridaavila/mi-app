import React, { useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const FormCheckout = ({cart, precioTotal, setOrderId, clearCart}) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let total = precioTotal;

    let order = {
      buyer: userData,
      items: cart,
      total,
    };

    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id)
        clearCart()
      })
      .catch((err) => console.log(err));

      cart.map( (product)=> {
        let refDoc =doc(db, "products", product.id)
        updateDoc(refDoc, {stock: product.stock - product.quantity})
      })
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />
        <button type="submit"> Buy </button>
      </form>
    </div>
  );
};

export default FormCheckout;

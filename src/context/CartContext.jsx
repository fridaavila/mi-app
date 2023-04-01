import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //AGREGAR
  const agregarAlCarrito = (producto) => {
    let existe = isInCart(producto.id);

    if (existe) {
      let newCart = cart.map((elemento) => {
        if (elemento.id === producto.id) {
          return {
            ...elemento,
            quantity: producto.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, producto]);
    }
  };

  const isInCart = (id) => {
    const existe = cart.some((elemento) => elemento.id === id);
    return existe;
  };
  // ELIMINAR TODO
  const clearCart = () => {
    setCart([]);
  };
  //ELIMINAR 1 PRODUCTO
  const deleteProductById = (id)=>{
    const newCart = cart.filter((element)=> element.id !== id)
    setCart(newCart)
  }
  // TOTAL DE LAS CANTIDADES EN EL CARRITO
  const getTotalQuantity = () => {
    const total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);

    return total;
  };
  //TOTAL DEL PRECIO DEL CARRITO
  const getTotalPrice = () => {
    let precioTotal = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);

    return precioTotal;
  };

  const getQuantityById = (id)=>{
    const productSelected = cart.find((element)=> element.id === id)
    return productSelected?.quantity
  }

  let data = {
    cart,
    agregarAlCarrito,
    clearCart,
    getTotalQuantity,
    getTotalPrice,
    deleteProductById,
    getQuantityById
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;

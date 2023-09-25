import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const cartInicial = JSON.parse(localStorage.getItem("cart")) || [];

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(cartInicial);

  const longitud = cart.length;
  console.log(longitud);

  const agregarAlCarrito = (item, cantidad) => {
    const agregarItemProducto = { ...item, cantidad };

    const nuevoCart = [...cart];

    const productosEnCarrito = nuevoCart.find(
      (producto) => producto.id === agregarItemProducto.id
    );

    if (productosEnCarrito) {
      productosEnCarrito.cantidad = productosEnCarrito.cantidad + cantidad;
      setCart(nuevoCart);
    } else {
      console.log("No se agrego ningun producto al Carrito");
    }

    setCart([...cart, agregarItemProducto]);
  };

  const cantidadEnCarrito = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const cantidadTotalCarrito = () => {
    return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };
  const vaciarCarrito = () => {
    setCart([]);
  };

useEffect(()=>{

  localStorage.setItem("cart",JSON.stringify(cart))
},[cart])



  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        longitud,
        vaciarCarrito,
        cantidadEnCarrito,
        cantidadTotalCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

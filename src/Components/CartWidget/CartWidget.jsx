// import { useContext } from "react"
// import { CartContext} from "../../Context/cartContext"



// const CartWidget = () => {

// const {cart,setCart,longitud } = useContext (CartContext)

//   return (
//     <div>
// <p> {cart} </p>
// <button onClick={()=> setCart("Nuevo Valor") } >Cambiar Valor</button>
// <p>{longitud}</p>
//     </div>
//   )
// }

// export default CartWidget
import React, { useContext } from 'react'
import carrito from '../assets/cart.png'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import "./CartWidget.css"





const CartWidget = () => {


  const {cantidadEnCarrito}= useContext(CartContext)
  return (
    <div>
    <img  src={carrito} alt="imagen carrito" />

      {cantidadEnCarrito()}
  
    </div>
  )
  }

export default CartWidget
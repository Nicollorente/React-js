import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import "./Cart.css"
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Cart = () => {

const {cart,cantidadTotalCarrito,vaciarCarrito}=useContext(CartContext)
const vaciar = ()=>{
vaciarCarrito()

}

  return (
    <div className='container'>
<h1>Carrito</h1>
<br />
{cart.map((prod)=>(
<div key={prod.id}>
  <br />
<h3>{prod.name}</h3>
<p>Precio Unitario ${prod.precio}</p>
<p>Precio Total $ {prod.precio * prod.cantidad}</p>
<p>Cantidad Total: {prod.cantidad}</p>
</div>
))}

{cart.length > 0 ?
<>



<h2>Compra en Total: ${cantidadTotalCarrito()}</h2>
<br />
<Button onClick={vaciar} variant="solid" colorScheme="red">Vaciar</Button>
<Link to={`/checkout`}> <Button variant="solid" colorScheme="green">Finalizar Compra</Button> </Link>
</>  : 

<h2>El carrito esta vacio 🥺</h2>
}

    </div>
  )
}

export default Cart
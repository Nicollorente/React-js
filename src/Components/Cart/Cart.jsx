import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";
import { Button, Center, HStack } from "@chakra-ui/react";
import {Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Card,Image,Stack,CardBody,Heading,Text,CardFooter } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
const Cart = () => {
  const { cart, cantidadTotalCarrito, vaciarCarrito,removerDelCarrito } = useContext(CartContext);
  const HandleBorrar=(productId)=>{
    removerDelCarrito(productId)
  }
  const vaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container">
      <h1>Carrito</h1>
      <br />
      {cart.map((prod) => (
        // <div key={prod.id}>
        //   <br />
        //   <img src={prod.image} alt="Imagen del producto" />
        //   <h3>{prod.name}</h3>
        //   <p>Precio Unitario ${prod.precio}</p>
        //   <p>Precio Total $ {prod.precio * prod.cantidad}</p>
        //   <p>Cantidad Total: {prod.cantidad}</p>
        // </div>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  w={600}
>

  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={prod.image}
    alt={prod.name}
  />
  <Stack>
    <CardBody>
      <Heading size='md'>{prod.name}</Heading>

      <div className="info-productos">
      <Text py='2'>Precio Unitario: ${prod.precio}</Text>
      <Text py='2'>Cantidad Total: {prod.cantidad}</Text>
      <Text py='2'>Precio Total: ${prod.precio * prod.cantidad}</Text>
      </div>
    </CardBody>
  </Stack>
  <Button className="button-icon" bg={"white"}>
  <HStack className="icon"> 
  <Icon as={DeleteIcon} onClick={()=>HandleBorrar(prod.id)} />
  </HStack>
  </Button>
</Card>


      ))}

      {cart.length > 0 ? (
        <>
          <h2>Compra en Total: ${cantidadTotalCarrito()}</h2>
          <br />
          <div className="buttons">
          <Button onClick={vaciar} variant="solid" colorScheme="red">
            Vaciar
          </Button>
          <Link to={`/checkout`}>
            {" "}
            <Button variant="solid" colorScheme="green">
              Finalizar Compra
            </Button>{" "}
          </Link>
          </div>
        </>
      ) : (
        <h2>El carrito esta vacio 🥺</h2>
      )}
    </div>
  );
};

export default Cart;

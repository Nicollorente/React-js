import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import "./ItemDetail.css";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";


const ItemDetail = ({ item,}) => {
  const [cantidad,setCantidad]=useState(1)


  const {cart,agregarAlCarrito} = useContext(CartContext)
  console.log(cart)


const restarNumero =()=>{
cantidad > 1 && setCantidad (cantidad - 1 )
}

const agregarNumero =()=>{

  cantidad < item.stock && setCantidad(cantidad + 1)

}



  return (
    <div className="card">
      <Card maxW="sm">
        <CardBody>
          <Image src={item.image} />
          <Stack mt="6" spacing="3">
            <Heading textAlign='center' size="md">
              {" "}
              {item.name} ({item.stock})
            </Heading>
            <Text color="blue.600" textAlign='Center' fontSize="2xl">
              ${item.precio}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
          <Button onClick={restarNumero} variant="solid" colorScheme="green">
              -
            </Button>
            <Text color="blue.600" fontSize="2xl">{cantidad}</Text>

            <Button onClick={agregarNumero} variant="solid" colorScheme="green">
              +
            </Button>
            
            <Button onClick={()=>{agregarAlCarrito(item,cantidad)}} variant="solid" colorScheme="pink">
              Agregar al carrito 
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemDetail;

import { Card,CardBody,Image,Stack,Heading,Text,Divider,CardFooter,ButtonGroup,Button } from "@chakra-ui/react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"

const Item = ({producto}) => {


return (
    <>
    <div>
<Card textAlign='center' maxW='sm'>
  <CardBody>
    <Image src= {producto.image}/>
    <Stack mt='6' spacing='3'>
      <Heading size='md'> {producto.name} ({producto.stock})</Heading>
      <Link to={`/item/${producto.id}`}>
      <Button  variant='solid' colorScheme='orange'>
      Detalles
      </Button>
      </Link>
      <Text > Categoria: {producto.category} </Text>
      <Text color='blue.600' fontSize='2xl'>
        $ {producto.precio}
      </Text>
    </Stack>
  </CardBody>
  {/* <Divider />
  <CardFooter>
  <ButtonGroup spacing='2'>
            <Button  variant="solid" colorScheme="green">
              Comprar
            </Button>
      <Button  variant='solid' colorScheme='pink'>
        Agregar al carrito 
      </Button>
    
    </ButtonGroup>
  </CardFooter> */}
</Card>
</div>
    </>
  )
}

export default Item
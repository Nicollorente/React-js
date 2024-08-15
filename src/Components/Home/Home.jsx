import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  StackDivider,
  Box,
  Text,
  Center,
} from "@chakra-ui/react";
import { Stack, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Home.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <>
      <div className="card">
        <Card className="content" >
          <CardBody className="card-body">
            <Image 
              src="https://cdn2.notco.com/uploads/_3600x1560_fit_center-center_90_none/337997/Nov-NotBurger-Desktop-1.webp"
              alt="Comidas"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Link to={'/category/comidas'}>
                <Button variant="solid" colorScheme="blue">
                  Comidas
                </Button>
              </Link>
            </Stack>
          </CardBody>
        </Card>

        <Card   className="content">
          <CardBody className="card-body">
            <Image
              src="https://img.lagaceta.com.ar/fotos/notas/2016/06/16/686488_20160616134901.jpg"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Link to='/category/bebidas'>
                <Button variant="solid" colorScheme="blue">
                  Bebidas
                </Button>
              </Link>
            </Stack>
          </CardBody>
        </Card>

        <Card   className="content" >
          <CardBody className="card-body" >
            <Image
              src="https://imgs.search.brave.com/c5VmWEI7KY0Ew2O5tUYoC2T-mUhi2C5WrXA5uqbv53A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF84/MjgyNDUtTUxBNDIw/NzkwOTg2NTRfMDYy/MDIwLU8ud2VicA"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Link to='/category/postres'>
                <Button variant="solid" colorScheme="blue">
                  Postres
                </Button>
              </Link>
            </Stack>
          </CardBody>
        </Card>

        <Card   className="content" >
          <CardBody className="card-body">
            <Image
              src="https://i.ytimg.com/vi/g6cj21JvU9c/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBEgWyhyMA8=&rs=AOn4CLDFVuwsRxNk_dEp1Em-qJCnf8cDMA"
              alt="Leches"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Link to={'/category/leches'}>
                <Button variant="solid" colorScheme="blue" >
                  Leches
                </Button>
              </Link>
            </Stack>
          </CardBody>
        </Card>
      </div>
      <ItemListContainer className="itemListContainer"/>
    </>
  );
};

export default Home;

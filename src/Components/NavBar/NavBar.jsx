// import React from 'react'
// import CartWidget from '../CartWidget/CartWidget'
// import './NavBar.css'
// const NavBar = () => {
//   return (
//     <header>

// <h1>Good Food Maker</h1>
// <nav>
//     <ul>
//         <li>Comidas</li>
//         <li>Bebidas</li>
//         <li>Postres</li>
//         <li>Leches</li>
//     </ul>

// </nav>
// <CartWidget />
//     </header> )
// }

// export default NavBar

// import React from "react";
// import { MenuButton, MenuList, MenuItem, Menu } from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icons";
// import { IconButton } from "@chakra-ui/react";
// import { Grid, GridItem } from "@chakra-ui/react";
// import CartWidget from "../CartWidget/CartWidget";

// const Navbar = () => {
//   return (
//     <Grid templateColumns="repeat(2, 1fr)" gap={4}>
//       <Menu>
//         <div>
//           <MenuButton
//             m="2"
//             as={IconButton}
//             aria-label="Options"
//             icon={<HamburgerIcon />}
//             variant="outline"
//           />
//           <MenuList>
//             <MenuItem command="🍔">Comidas</MenuItem>
//             <MenuItem command="🥤">Bebidas</MenuItem>
//             <MenuItem command="🍰">Postres</MenuItem>
//             <MenuItem command="🍶">Leches</MenuItem>
//           </MenuList>
//         </div>

//         <div>
//           <GridItem colStart={2} colEnd={4} w="50" h="10" />
//           <h1>Good Food Maker </h1>
//         </div>

//         <div>
//         <GridItem colStart={2} colEnd={6} w="50" h="10" />
//         <CartWidget/>
//         </div>
//       </Menu>
//     </Grid>
//   );
// };

// export default Navbar;

import React from "react";
import { MenuButton, MenuList, MenuItem, Menu } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import CartWidget from "../CartWidget/CartWidget";
import { Grid, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./NavBar.css";


const Navbar = () => {
  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Box m="2">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <Link to={`/category/comidas`}>
                <MenuItem command="🍔">Comidas</MenuItem>
              </Link>
              <Link to={`/category/bebidas`}>
                <MenuItem command="🥤">Bebidas</MenuItem>
              </Link>

              <Link to={`/category/postres`}>
                <MenuItem command="🍰">Postres</MenuItem>
              </Link>
              <Link to={`/category/leches`}>
                <MenuItem command="🍶">Leches</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>

        <Box>
          <Link to={"/"}>
            <h1>Good Food Maker </h1>
          </Link>
        </Box>

        <Box className="cart">
          <Link to={`/carrito`}>
            <CartWidget />
          </Link>
        </Box>
      </Grid>

    
    </>
  );
};

export default Navbar;

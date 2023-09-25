import Navbar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import CartWidget from './Components/CartWidget/CartWidget';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartContext from './Context/CartContext'
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';




function App() {
  return (

 <CartContext>

<BrowserRouter>

<Navbar/>
<Routes>
<Route exact path='/' element={<Home/>}/>
<Route exact path='/carrito' element= {<Cart/>}/>
<Route exact path='/checkout' element= {<Checkout/>}/>
<Route exact path='/category/:category' element={<ItemListContainer/>}/>
<Route exact path='/item/:id' element= {<ItemDetailContainer/>}/>
</Routes> 
</BrowserRouter>
</CartContext> 



);
}

export default App;



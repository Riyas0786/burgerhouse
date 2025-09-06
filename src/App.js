import './App.css';
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Branch from './Components/Branch';
import Career from './Components/Career';
import Account from './Components/Accout';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import { CartProvider } from './Components/Cartprovider';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <CartProvider>
             <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/branch' element={<Branch/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </CartProvider>
      </BrowserRouter>
      
    
    </>
  );
}

export default App;

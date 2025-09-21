import './App.css';
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {  Route, Routes, useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Branch from './Components/Branch';
import Career from './Components/Career';
import Account from './Components/Account';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import Login from './Components/login';
import { CartProvider } from './Components/Cartprovider';
import Loading from './Components/Loading';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




function AppContent() {
  const location = useLocation();

  // Pages where footer should NOT be visible
  const hideFooterRoutes = ["/account", "/cart", "/login"];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
    const [loading, setLoading] = useState(true);
    

  useEffect(() => {
    // simulate API or page load
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>

      <CartProvider>
        
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </CartProvider>
      


      {!shouldHideFooter && <Footer />}
      
    </>
  );
}


function App() {
  return (
              <>
      <AppContent />
       <ToastContainer position="top-center" autoClose={2000} 
       hideProgressBar={true}/>
      </>
  );
}

export default App;

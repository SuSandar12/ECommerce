import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import react, {useState} from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Confirmation from "./pages/Confirmation";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

function App() {
  const [isCartOpen, setCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Navbar onCartClick={() => setCartOpen(true)} 
        />
      <CartDrawer isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

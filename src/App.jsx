import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import Landing from "./pages/landing/Landing";
import Register from "./pages/auth/Register";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/products/productDetails/ProductDetails";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;

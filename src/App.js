import './App.css';
import Signin from "./Components/UserRoutes/Signin";
import Addproduct from "./Components/ProductRoutes/Addproduct";
import ForgotPassword from "./Components/UserRoutes/ForgotPassword";
import ResetPassword from "./Components/UserRoutes/ResetPassword";
import ProductList from "./Components/ProductRoutes/ProductList";
import Updateproduct from "./Components/ProductRoutes/Updateproduct";
import { Route, Routes } from "react-router-dom";
import Signout from "./Components/UserRoutes/Signout";
import Signup from "./Components/UserRoutes/Signup";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react';
import ProductDetails from './Components/ProductRoutes/ProductDetails';
import Productcard from './Components/ProductRoutes/Productcard';
import Cart from './Components/ProductRoutes/Cart';



export default function App() {
  const [cartItems, setCartItems] = useState([])
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/" element={<Productcard  />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/edit-product" element={<Dashboard />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/signout" element={<Signout />} />
          <Route path="/products-list" element={<ProductList />} />
          <Route path="/add-product" element={<Addproduct />} />
          <Route path="/edit/:id" element={<Updateproduct />} />

        </Routes>

      </Router>

    </div>

  )
}
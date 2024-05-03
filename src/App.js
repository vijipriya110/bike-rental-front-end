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
// import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import Calendar from './Components/Calender';
// import CartItems from './Components/CartItems';



export default function App() {
  return (
      <div>
        <Router>
          <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/edit-product" element={<Dashboard/>} />
        <Route path="/login" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
        <Route path="/signout" element={<Signout/>} />
        <Route path="/products-list" element={<ProductList/>} />
        <Route path="/add-product" element={<Addproduct/>} />
        <Route path="/edit/:id" element={<Updateproduct/>} />
          
         

         {/* <Route path="/login">
         <Signin/>
         </Route> */}

         {/* <Route path="/signup">
         <Signup/>
         </Route> */}

         {/* <Route path="/forgotpassword">
         <ForgotPassword/>
         </Route> */}

         {/* <Route path="/resetpassword">
         <ResetPassword/>
         </Route> */}

         {/* <Route path="/signout">
         <Signout/>
         </Route> */}

         {/* <Route path="/products-list">
         <ProductList/>
         </Route> */}

         {/* <Route path="/add-product">
         <Addproduct/>
         </Route> */}

         {/* <Route path="/edit/:id">
         <Updateproduct/>
         </Route> */}

         </Routes>
         
         </Router>

      </div>
    
  )
}
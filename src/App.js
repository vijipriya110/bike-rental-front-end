import Signin from "./Components/UserRoutes/Signin";
import Addproduct from "./Components/ProductRoutes/Addproduct";
import ForgotPassword from "./Components/UserRoutes/ForgotPassword";
import ResetPassword from "./Components/UserRoutes/ResetPassword";
import ProductList from "./Components/ProductRoutes/ProductList";
import Updateproduct from "./Components/ProductRoutes/Updateproduct";
import { Route } from "react-router-dom";
import Signout from "./Components/UserRoutes/Signout";
import Signup from "./Components/UserRoutes/Signup";
import Dashboard from "./Components/Dashboard";
import { Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
      <div>
        <Switch>
         <Route exact path="/">
         <Dashboard/>
         </Route>

         <Route path="/login">
         <Signin/>
         </Route>

         <Route path="/signup">
         <Signup/>
         </Route>

         <Route path="/forgotpassword">
         <ForgotPassword/>
         </Route>

         <Route path="/resetpassword">
         <ResetPassword/>
         </Route>

         <Route path="/signout">
         <Signout/>
         </Route>

         <Route path="/products-list">
         <ProductList/>
         </Route>

         <Route path="/add-product">
         <Addproduct/>
         </Route>

         <Route path="/edit/:id">
         <Updateproduct/>
         </Route>
      
         </Switch>

      </div>
    
  )
}
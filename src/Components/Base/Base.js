
import React from "react";
// import { useHistory } from 'react-router-dom'
import Signout from "../UserRoutes/Signout";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Base({title, description, children}) {
  const navigate = useNavigate();
 
     
  return (
    <div className="App">
      <div className="App-container">
        <div className="lay-out">
          <div className="head">
            <header>
            <ToastContainer theme='dark' position='top-center'/>
              <h1>BIKE RENTAL PORTAL</h1>
            </header>
          </div>
          <hr></hr>
          <div className="lay-container">
            <div className="nav">
              <div><button className="sb" onClick={() => navigate("/")}>Products</button></div>
              <hr></hr>
              {/* <div><button className="sb" onClick={() => navigate("/edit-product")}>Edit-Products</button></div>
              <hr></hr>
              <div><button className="sb" onClick={() => navigate("/add-product")}>Add-Products</button></div>
              <hr></hr> */}
              <div><button className="sb" onClick={() => navigate("/signup")}>Signup</button></div>
              <hr></hr>
              <div><button className="sb" onClick={() => navigate("/login")}>Sigin</button></div>
              <hr></hr>
              <div><b><Signout/></b></div>
              

            </div>
            <div className="dis">
              
              <div className="top1">
                <h1 className="title">{title}</h1>
              </div>
              <div>
                <h3>{description}</h3>
              </div>
              <div>
                {children}
              </div>

            </div>
          </div>
          <div>
            
          </div>
          <div className="footer">
          <p className="text-center text-white mt-1 ">
                Bike-Rentl - 2023-2024, All Rights Reserved
            </p>
          </div>
        
        </div>
      </div>
           
    </div>

     )
}

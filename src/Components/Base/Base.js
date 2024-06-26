import React, { useState } from "react";
import Signout from "../UserRoutes/Signout";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Base({ title, description, children }) {
  const navigate = useNavigate();
  

  return (
    <div className="App">
      <div className="App-container">
        <div className="lay-out">
          <div className="head">
            <header>
              <ToastContainer theme='dark' position='top-center' />
              <h1>BIKE RENTAL PORTAL</h1>
            </header>
          </div>
          <div className="lay-container">
            <div className="nav">
              <div><button className="sb" onClick={() => navigate("/")}>Products</button></div>
              <hr></hr>
              <div>
                <div><button className="sb" onClick={() => navigate("/signup")}>Signup</button></div>
              </div>
              <hr></hr>
              <div><b><Signout /></b></div>
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
        </div>
      </div>
    </div>
  )
}

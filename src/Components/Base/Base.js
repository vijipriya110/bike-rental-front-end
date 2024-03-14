
import React from "react";
import { useHistory } from 'react-router-dom'
import Signout from "../UserRoutes/Signout";



export default function Base({title, description, children}) {
  const history = useHistory();
 
     
  return (
    <div className="App">
      <div className="App-container">
        <div className="lay-out">
          <div className="head">
            <button><i className="fa fa-long-arrow-left fa-1x" aria-hidden="true"></i>Overview Page</button>
            <div>
              
              <button><i className="fa fa-download fa-1x" aria-hidden="true"></i>Free Download</button>
            </div>
          </div>
          <hr></hr>
          <div className="lay-container">
            <div className="nav">
              <div><button className="sb" onClick={() => history.push("/")}>Products</button></div>
              <hr></hr>
              <div><button className="sb" onClick={() => history.push("/edit-product")}>Edit-Products</button></div>
              <hr></hr>
              <div><button className="sb" onClick={() => history.push("/add-product")}>Add-Products</button></div>
              <hr></hr>
              <div><button className="sb" onClick={() => history.push("/signup")}>Signup</button></div>
              <hr></hr>
              <div><button className="sb" onClick={() => history.push("/login")}>Sigin</button></div>
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
        
        </div>
      </div>
     
    </div>

     )
}

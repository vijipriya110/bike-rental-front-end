import React, { useContext, useEffect, useState } from 'react'
// import { MyContext } from './MyContext';
import {  useNavigate } from 'react-router-dom';
import Base from './Base/Base';


  
function Dashboard() {
  
  // const { products, setProducts} = useContext(MyContext);
  const navigate = useNavigate();
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`https://bike-rental-portal.vercel.app/bike/all-product`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token")
        }
      });
      const products = await response.json();
      console.log(products.products)
      setProducts(products.products)
      if (!localStorage.getItem("token")) {
        navigate("/signup")
      }
    }
    getProducts();

  },[])

  const deleteStudent = async (prodId)=>{
      
    const response = await fetch(`https://bike-rental-portal.vercel.app/bike/product/delete/${prodId}`, {
       method:"DELETE",
       headers:{
        "x-auth-token" : localStorage.getItem("token")
       }
       
    });

    const data = await response.json()
    console.log(data)
   if(data){
     const remainingStudents = 
     products.filter((prod, idx)=> prod._id !== prodId)
     setProducts(remainingStudents)
   }
  }
  return (
    <Base
    title={"Product List"}
    >
     <div className='card-box-container'>
            {products.map((prod, idx)=>(
                     <div className='card-box' key={idx}>
                        <div className='content-box'>
                     <h3>{`BrandName : ${prod.brandname}`}</h3>
                     <p><b>{`Model : ${prod.model}`}</b></p>
                     <p><b>{`Condition : ${prod.condition}`}</b></p>
                     <p><b>{`Price : ${prod.price}`}</b></p>
                     <p><b>{`Quantity : ${prod.quantity}`}</b></p>
                     <p><b>{`Image : ${prod.Image}`}</b></p>
                     </div>

                     <div className='control-btn'>
                     <button onClick={()=>navigate(`/edit/${prod._id}`)}>Edit</button> {" "}
                     <button onClick={()=>deleteStudent(prod._id)}>Delete</button>
                     </div>
                    </div>
            ))}
     </div>


    </Base>
  )
}

export default Dashboard
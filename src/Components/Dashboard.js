import React, { useContext } from 'react'
import { MyContext } from './MyContext';
import { useHistory } from 'react-router-dom';
import Base from './Base/Base';


  
function Dashboard() {
  
  const { products, setProducts} = useContext(MyContext);
  const history  = useHistory()

  const deleteStudent = async (prodId)=>{
      
    const response = await fetch(`https://bike-rental-portal.vercel.app/bike/product/delete/${prodId}`, {
       method:"DELETE",
       headers:{
        "x-auth-token" : localStorage.getItem("token")
       }
       
    });

    const data = await response.json()
    // console.log(data)
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
                     <button onClick={()=>history.push(`/edit/${prod._id}`)}>Edit</button> {" "}
                     <button onClick={()=>deleteStudent(prod._id)}>Delete</button>
                     </div>
                    </div>
            ))}
     </div>


    </Base>
  )
}

export default Dashboard
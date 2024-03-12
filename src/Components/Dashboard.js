import React, { useContext } from 'react'
import Example from './Base/Base'
import { MyContext } from './MyContext';
import { useHistory } from 'react-router-dom';


  
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
    <Example
    title={"Product List"}
    >
     <div className='card-container'>
            {products.map((prod, idx)=>(
                     <div className='card' key={idx}>
                        <div className='content'>
                     <h3>{prod.username}</h3>
                     <p>{prod.model}</p>
                     <p>{prod.price}</p>
                     <p>{prod.quantity}</p>
                     </div>

                     <div className='control'>
                     <button onClick={()=>history.push(`/edit/${prod._id}`)}>Edit</button> {" "}
                     <button onClick={()=>deleteStudent(prod._id)}>Delete</button>
                     </div>
                    </div>
            ))}
     </div>


    </Example>
  )
}

export default Dashboard
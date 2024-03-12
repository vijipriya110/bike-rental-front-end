import React, { useContext } from 'react'
import Example from '../Base/Base'
import { MyContext } from '../MyContext';
import { useHistory } from 'react-router-dom';


  
function Addproduct() {
  const history = useHistory()
  const { products, setProducts, brandname, setBrandname, model, setModel, price, setPrice, condition, setCondition, Image, 
    setImage, quantity, setQuantity } = useContext(MyContext);

  const handleCreate = async()=>{
    const userInfo = {
       brandname,
       model,
       condition,
       price,
       quantity,
       Image
    }

    const res = await fetch (`https://bike-rental-portal.vercel.app/bike/add-product`, {
    method :"POST",
    body : JSON.stringify(userInfo),
    headers:{
        "Content-Type":"application/json",
        "x-auth-token" : localStorage.getItem("token")
    }
   });
   const data = await res.json();
   console.log(data)
   setProducts([...products, data.data])
  history.push("/products-list")

  }
  return (
    
    <Example
    title={"Add new product"}
    >
     <div className="user">
       <input
        placeholder='Enter Brand Name'
        type ="text"
        value = {brandname}
        onChange={(e)=>setBrandname(e.target.value)}
        /><br></br>
        
        <input
        placeholder='Enter Model'
        type ="text"
        value = {model}
        onChange={(e)=>setModel(e.target.value)}
        /><br></br>

        <input
        placeholder='Enter Condition'
        type ="text"
        value = {condition}
        onChange={(e)=>setCondition(e.target.value)}
        /><br></br>

        <input
        placeholder='Enter Price'
        type ="number"
        value = {price}
        onChange={(e)=>setPrice(e.target.value)}
        /><br></br>

        <input
        placeholder='Enter Quantity'
        type ="number"
        value = {quantity}
        onChange={(e)=>setQuantity(e.target.value)}
        /><br></br>

        <input
        placeholder='Enter Image link'
        type ="text"
        value = {Image}
        onChange={(e)=>setImage(e.target.value)}
        /><br></br>
        
        <button type='submit' onClick={handleCreate}>Submit</button><br></br>

        {/* <button onClick={()=>history.push("/forgotpassword")}>Forget Password?</button><br/><br/> */}

        </div>
    </Example>
  )
}

export default Addproduct
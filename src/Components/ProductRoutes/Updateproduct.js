import React, { useContext, useEffect } from 'react'
import Example from '../Base/Base'
import { useParams } from 'react-router-dom';
import { MyContext } from '../MyContext';
import { useHistory } from 'react-router-dom';

function Updateproduct() {
  const history = useHistory()
  const { products, setProducts, brandname, setBrandname, model, setModel, price, setPrice, condition, setCondition, Image, 
    setImage, quantity, setQuantity } = useContext(MyContext);

    const {id} = useParams()

    const prod = products.find((prod)=>prod._id === id)

    useEffect(()=>{
      setBrandname(prod.brandname)
      setModel(prod.model)
      setCondition(prod.condition)
      setPrice(prod.price)
      setQuantity(prod.quantity)
      setImage(prod.Image)
   }, [prod])

   async function handleCreate (){
    const updatedObject = {
       brandname,
       model,
       condition,
       price,
       quantity,
       Image
    }
const response = await fetch(`https://bike-rental-portal.vercel.app/bike/product/edit/${prod._id}`, {
 method:"PUT",
 body:JSON.stringify(updatedObject),
 headers:{
   "Content-Type":"application/json",
   "x-auth-token" : localStorage.getItem("token")
 }
})

const data = await response.json()
console.log(data)
const prodIndex = products.findIndex((prod)=>prod._id === id);
     if(data){
         console.log(updatedObject)
         products[prodIndex] = updatedObject;
         setProducts([...products])
         history.push("/products-list")
     }
    
   }

  return (
       
    <Example
    title={"Edit product"}
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

export default Updateproduct
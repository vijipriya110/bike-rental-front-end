import React, { useContext } from 'react'
import { MyContext } from '../MyContext';
import { useNavigate } from 'react-router-dom';
import Base from '../Base/Base';



function Addproduct() {
  const navigate = useNavigate()
  const { products, setProducts, brandname, setBrandname, model, setModel, price, setPrice, condition, setCondition, Image,
    setImage, quantity, setQuantity } = useContext(MyContext);

  const handleCreate = async () => {
    try {
      const userInfo = {
        brandname,
        model,
        condition,
        price,
        quantity,
        Image
      }

      const res = await fetch(`https://bike-rental-portal.vercel.app/bike/add-product`, {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token")
        }
      });
      const data = await res.json();
      //  console.log(data)
      setProducts([...products, data.data])
      navigate("/products-list")
      alert(data.message)
    } catch (error) {
      alert(error.message)
    }

  }
  return (

    <Base
      title={"Add new product"}
      description={"Here can Add the new rent Products"}
    >
      <div className="user">
        <input
          placeholder='Enter Brand Name'
          type="text"
          value={brandname}
          onChange={(e) => setBrandname(e.target.value)}
        /><br></br>

        <input
          placeholder='Enter Model'
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        /><br></br>

        <input
          placeholder='Enter Condition'
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        /><br></br>

        <input
          placeholder='Enter Price'
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        /><br></br>

        <input
          placeholder='Enter Quantity'
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        /><br></br>

        <input
          placeholder='Enter Image link'
          type="text"
          value={Image}
          onChange={(e) => setImage(e.target.value)}
        /><br></br>

        <button type='submit' onClick={handleCreate}>Submit</button><br></br>


      </div>
    </Base>
  )
}

export default Addproduct
import React, { useEffect, useState } from 'react'
// import { MyContext } from '../MyContext';
import { useNavigate } from 'react-router-dom';
import Base from '../Base/Base';
import Productcard from './Productcard';


function ProductList() {
  // const { products, setProducts } = useContext(MyContext);
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


  return (
    <Base
      title={"Welcome to Bike Rental portal"}>

      <section id="products" className="container mt-5">
        <div className="row">
          {products.map(product => <Productcard product={product} />)}

        </div>
      </section>
    </Base>
  )

}

export default ProductList
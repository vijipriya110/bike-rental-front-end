import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Base from '../Base/Base';
import Productcard from './Productcard';
import { ClipLoader } from 'react-spinners';


function ProductList() {
  
  const navigate = useNavigate();
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },500)
  })



  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(`https://bike-rental-portal.vercel.app/bike/all-product`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token")
          }
        });
        const products = await response.json();
         setProducts(products.products)
        if (!localStorage.getItem("token")) {
          navigate("/signup")
          alert(products.message)
        }
      } catch (error) {
        alert(error.message)
      }
    }
    getProducts();

  }, [])


  return (
    <Base
      title={"Welcome to Bike Rental portal"}
      className='spinner'
    >
      {
        loading ?
          <ClipLoader
            color={"#36d7b7"}
            loading={loading}

            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />

          : <section id="products" className="container mt-5">
            <div className="row">
              {products.map(product => <Productcard product={product} />)}

            </div>
          </section>
      }


    </Base>
  )

}

export default ProductList
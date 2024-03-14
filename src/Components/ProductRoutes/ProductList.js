import React, { useContext, useEffect} from 'react'
import { MyContext } from '../MyContext';
import { useHistory } from 'react-router-dom';
import Base from '../Base/Base';



function ProductList() {
  const { products, setProducts, count, setCount,  setCart} = useContext(MyContext);
  const history = useHistory();
   

  useEffect(()=>{
    const getProducts = async () =>{
        const response = await fetch(`https://bike-rental-portal.vercel.app/bike/all-product`, {
          method:"GET",
          headers : {
            "x-auth-token" : localStorage.getItem("token")
          }
        }); 
        const products = await response.json();
        console.log(products.products)
          setProducts(products.products)
        }
        if(!localStorage.getItem("token")){
          history.push("/login")
        }else{
          getProducts()
        }
           
  },[])

  const addcart = async(prodId)=>{ 
    
    const res = await fetch (`https://bike-rental-portal.vercel.app/bike/product/${prodId}`, {
    method :"GET",
        headers:{
        "Content-Type":"application/json",
        "x-auth-token" : localStorage.getItem("token")
    }
   });
   const data = await res.json();
  //  console.log(data.product)
      
  setCart(data.product)
  
  setCount(count+1);
        
  }

  const removecart = async(prodId)=>{ 
    
    const res = await fetch (`https://bike-rental-portal.vercel.app/bike/product/${prodId}`, {
    method :"GET",
        headers:{
        "Content-Type":"application/json",
        "x-auth-token" : localStorage.getItem("token")
    }
   });
   const data = await res.json();
  //  console.log(data)
   setCart(data.product)
   setCount(count-1);
    
  }
  return (

    <Base
    title={"Welcome to Bike Rental portal"}
    >
     <div className='bg'>
     <b>{`cart :${count}`} </b>
           
        

      </div>
           
           <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Welcome to Bike Rental portal</h2> */}

        <div className='card-box-container'>
          {products.map((product) => (
            <div key={product._id} className="card-box">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.Image}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {`Brand Name : ${product.brandname}`}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{`Model : ${product.model}`}</p>
                  <p className="mt-1 text-sm text-gray-500">{`Quantity : ${product.quantity}`}</p>
                  <p className="mt-1 text-sm text-gray-500">{`Condition : ${product.condition}`}</p>
                  <p className="text-sm font-medium text-gray-900">{`Price : ${product.price}`}</p>
                  
                </div>
                <div>
       
                  <button variant="primary"
                  onClick={()=>addcart(product._id)}
                  >Add to cart</button>
          
          
                  <button variant="danger"
                  onClick={()=>removecart(product._id)}
                  >Remove cart</button>
          
               </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    </Base>
  )
}

export default ProductList
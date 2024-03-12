import React, { useContext, useEffect } from 'react'
import Example from '../Base/Base'
import { MyContext } from '../MyContext';
import { useHistory } from 'react-router-dom';


function ProductList() {
  const { products, setProducts} = useContext(MyContext);
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
        
    
  }, [])

  return (
    <Example
    title={"Product List"}
    >
     
           <div>
           <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Badge</span>
           </div>
           <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product._id} className="group relative">
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
    <button
      type="submit"
      className="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      buy now
    </button>
  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    </Example>
  )
}

export default ProductList
import React from 'react'
import { Link } from 'react-router-dom'

function Productcard({ product }) {
    return (


        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                <div className='card-box-container'>

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
                            <Link to={"/product/" + product._id} id="view_btn" className="btn btn-block">View Details</Link>




                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Productcard
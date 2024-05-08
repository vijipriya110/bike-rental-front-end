import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Link, useParams } from 'react-router-dom';
import Base from '../Base/Base';
// import { MyContext } from '../MyContext';

function ProductDetails({ cartItems, setCartItems }) {
    // const { count } = useContext(MyContext);

    const [product, setProduct] = useState(null)
    const [qty, setQty] = useState(1)
    const { id } = useParams();

    useEffect(() => {
        const getproduct = async () => {
            try {
                const response = await fetch("https://bike-rental-portal.vercel.app/bike/product/" + id, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "x-auth-token": localStorage.getItem("token")
                    }
                });
                const product = await response.json();
                console.log(product.product)
                setProduct(product.product)
                alert(product.message)
            } catch (error) {
                alert(error.message)
            }

        }
        getproduct();

    })

    //Add to cart

    function addToCart() {
        const itemExits = cartItems.find((item) => item.product._id === product._id)
        if (!itemExits) {
            const newItem = { product, qty }
            setCartItems((state) => [...state, newItem])
            toast.success('Cart Itemes added sucessfully.!')

        }
    }
    //increase qty
    function increaseQty() {
        if (product.quantity === qty) {
            return;
        }
        setQty((state) => state + 1)

    }
    //decrease qty
    function decreaseQty() {
        if (qty > 1) {
            setQty((state) => state - 1)
        }
    }


    return (


        product && <Base
            title={"Welcome to Bike Rental portal"}
        >
            <div className='bg'>
                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <Link to={"/cart"}>
                        <span id="cart" className="ml-3">Cart</span>
                        <span className="ml-1" id="cart_count">{cartItems.length}</span>
                    </Link>

                </div>

            </div>

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
                                <div className="stockCounter d-inline">
                                    <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>
                                    <hr />

                                    <input type="number" className="form-control count d-inline" value={qty} readOnly />
                                    <hr />

                                    <span className="btn btn-primary plus" onClick={increaseQty} >+</span>
                                </div>
                                <hr />

                                <button type="button" onClick={addToCart} disabled={product.quantity === 0} id="cart_btn" className="btn btn-primary d-inline ml-4">Add to Cart</button>

                                <hr />

                                <p>Status: <span id="stock_status" className={product.quantity > 0 ? 'text-success' : 'text-danger'} >{product.quantity > 0 ? 'In Stock' : 'Out of Stock'}</span></p>

                                <hr />

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </Base>

    )

}

export default ProductDetails
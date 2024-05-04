import { createContext, useState } from "react";

export const MyContext = createContext();


export const MyProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const [contact, setContact] = useState();
    const [brandname, setBrandname] = useState();
    const [model, setModel] = useState();
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [Image, setImage] = useState();
    const [condition, setCondition] = useState();
    const [complete, setComplete] = useState(false)
    // const [cart, setCart] = useState([])

  
   return (
    <MyContext.Provider
      value ={{
        products,
        setProducts,
        email,
        setEmail,
        password,
        setPassword,
        username,
        setUsername, 
        contact, 
        setContact,
        brandname,
        setBrandname,
        model,
        setModel,
        price,
        setPrice,
        condition, 
        setCondition,
        Image, 
        setImage,
        quantity,
        setQuantity,
        complete,
        setComplete
        // count,
        // setCount,
        // cart,
        // setCart

      }}
      
      >
        {children}

      </MyContext.Provider>
    
   );
 };
 

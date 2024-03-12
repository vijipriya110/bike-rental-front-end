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
    const [quantity, setQuantity] = useState(0);
    const [Image, setImage] = useState();
    const [condition, setCondition] = useState();

    

//    const handleMarkDownChange = (newMarkDown) => {
//      setMarkDown(newMarkDown);
//    };
 
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
        setQuantity

        
      }}
      
      >
        {children}

      </MyContext.Provider>

    //  <MarkDownContext.Provider value={{MarkDown, handleMarkDownChange}}>
    //    {children}
    //  </MarkDownContext.Provider>
   );
 };
 
//  export const useMarkDown = () => useContext(MarkDownContext);
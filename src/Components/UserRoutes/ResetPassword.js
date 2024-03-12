import React, { useContext } from 'react'
import Example from '../Base/Base'
import { useHistory } from 'react-router-dom';
import { MyContext } from '../MyContext';

function ResetPassword() {
  const history = useHistory();
  const { password, setPassword} = useContext(MyContext);
   const handleLogin = async()=>{
    const userInfo = {
       
        password
        
    }

    const res = await fetch(`https://urlshortner-back-end.vercel.app/url/reset-new-password/:token`, {
    method :"POST",
    body : JSON.stringify(userInfo),
    headers:{
        "Content-Type":"application/json",
        
    }
   });
   const data = await res.json();
   console.log(data)
   history.push("/login")
        
   }

  return (
    <Example
    title={"Signin Page"}
    
    >
        <div className="us-container">
        <div className="img">
          <img src="https://www.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg" alt="Login"/>
        </div>
        <div className="user">
       
        
        <input
        placeholder='Enter Password'
        type ="password"
        value = {password}
        onChange={(e)=>setPassword(e.target.value)}
        /><br></br>

        
        
        <button type='submit' onClick={handleLogin}>Submit</button><br></br>

        </div>
        </div>

    </Example>
  )
}

export default ResetPassword
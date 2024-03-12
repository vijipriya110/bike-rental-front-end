import React, { useContext } from 'react'
import Example from '../Base/Base'
import { useHistory } from 'react-router-dom';
import { MyContext } from '../MyContext';

function ForgotPassword() {
  const history = useHistory()
  const { email, setEmail} = useContext(MyContext);
  const sendResetCode = async()=>{
    const userInfo = {
      email
          }
  const response = await fetch("https://bike-rental-portal.vercel.app/bike/forgotpassword", {
  method:"POST",
  body:JSON.stringify(userInfo),
  headers :{
    "Content-Type":"application/json"
  },
})
const data = await response.json()
console.log(data)

// localStorage.setItem("OTP", data.OTP)

history.push("/resetpassword")
  
  }

  return (
    <Example
    title={"Fogot Password"}
    
    >
        <div className="App">
      <h3>WELCOME BACK..!</h3>
      <div className="us-container">
        
        <div className="img">
          <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702944000&semt=ais" alt="Signup"/>
        </div>
        <div className="user">
       
        <input
        placeholder='Enter Email'
        type ="email"
        value = {email}
        onChange={(e)=>setEmail(e.target.value)}
        /><br></br>
        <button type='submit' onClick={sendResetCode}>Send reset code</button><br></br>
         </div>
      </div>
    </div>
 
    </Example>
  )
}

export default ForgotPassword
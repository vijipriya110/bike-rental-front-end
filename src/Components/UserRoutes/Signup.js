import React, { useContext } from 'react'
import { MyContext } from '../MyContext';
import { useHistory } from 'react-router-dom';
import Base from '../Base/Base';

function Signup() {
  const history = useHistory();
  const { email, setEmail, password, setPassword, username, setUsername, contact, setContact} = useContext(MyContext);

  const handleSignup = async()=>{
    const userInfo = {
      username,
      email,
      password, 
      contact

    }
  const response = await fetch("https://bike-rental-portal.vercel.app/bike/signup", {
  method:"POST",
  body:JSON.stringify(userInfo),
  headers :{
    "Content-Type":"application/json"
  },
})
const data = await response.json()
console.log(data)
localStorage.setItem("token", data.token)
  history.push("/login")

  }
  return (
    <Base
    title={"Signup Page"}
    
    >
        <div className="App">
      <h3>WELCOME BACK..!</h3>
      <div className="us-container">
        
        <div className="img">
          <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702944000&semt=ais" alt="Signup"/>
        </div>
        <div className="user">
          
       <input
        placeholder='Enter Name'
        type ="text"
        value = {username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        <br></br>

        <input
        placeholder='Enter Email'
        type ="email"
        value = {email}
        onChange={(e)=>setEmail(e.target.value)}
        /><br></br>

        <input
        placeholder='Enter Password'
        type ="password"
        value = {password}
        onChange={(e)=>setPassword(e.target.value)}
        /><br></br>

        <input
        
        placeholder='Enter contact number'
        type ="number"
        value = {contact}
        onChange={(e)=>setContact(e.target.value)}
        /><br></br>
        
        <button type='submit' onClick={handleSignup}>Register</button><br></br>

        <button onClick={()=>history.push("/login")}>Already have account?sing in</button><br/><br/>

         </div>

      </div>
    </div>

    </Base>
  )
}

export default Signup
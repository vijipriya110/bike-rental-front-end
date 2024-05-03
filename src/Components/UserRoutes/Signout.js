import React from 'react'
import { useNavigate } from 'react-router-dom';

function Signout() {
  const navigate = useNavigate();

    const handleLogout = async()=>{
        

    const res = await fetch(`https://bike-rental-portal.vercel.app/bike/logout`, {
        method :"GET",
        headers:{
            "Content-Type":"application/json",
            
        }
   });
   const data = await res.json();
   console.log(data)
  //  if(!localStorage.getItem("token")){
  //   history.push("/login")
  //  }else{
  //   localStorage.clear()
  //  }

   localStorage.clear()
 
   navigate("/login")
    
   }
  return (
    <div>
    <button
      type="submit"
      onClick={handleLogout}
    >
      Signout
    </button>
  </div>
  )
}

export default Signout
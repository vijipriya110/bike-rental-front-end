import React from 'react'
import { useNavigate } from 'react-router-dom';

function Signout() {
  const navigate = useNavigate();

  const handleLogout = async () => {


    try {
      const res = await fetch(`https://bike-rental-portal.vercel.app/bike/logout`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",

        }
      });
      const data = await res.json();
      //  console.log(data)

      localStorage.clear()

      navigate("/login")
      alert(data.message)
    } catch (error) {
      alert(error.message)
    }

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
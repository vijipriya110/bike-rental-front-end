import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../MyContext';
import Base from '../Base/Base';

function ResetPassword() {
  const navigate = useNavigate();
  const { password, setPassword } = useContext(MyContext);

  const handleLogin = async () => {
    try {
      const userInfo = {

        password

      }

      const res = await fetch(`https://urlshortner-back-end.vercel.app/url/reset-new-password/:token`, {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json",

        }
      });
      const data = await res.json();
      //  console.log(data)
      navigate("/login")
      alert(data.message)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <Base
      title={"Signin Page"}

    >
      <div className="us-container">
        <div className="img">
          <img src="https://www.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg" alt="Login" />
        </div>
        <div className="user">


          <input
            placeholder='Enter Password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br></br>



          <button type='submit' onClick={handleLogin}>Submit</button><br></br>

        </div>
      </div>

    </Base>
  )
}

export default ResetPassword
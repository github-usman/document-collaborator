import React, { useState } from 'react'
import "./style/JoinRoom.css";
import { Link } from 'react-router-dom';


const Login = () => {
  const [uuidVal, setUuidVal] = useState("");
  const [username, setUsername] = useState("");



  return (
    <div className='container-form '>
      <div className='entry-card'>
        <form action='http://localhost:5000/login' method='post'  className='join-form' >
          <div>
          <label>Enter Username</label>
          <input type='text' value={uuidVal}  onChange={(e)=>setUuidVal(e.target.value)} placeholder='Enter Username' name='username' required/>
          <label>Enter Password</label>
          <input type='password'  placeholder='Enter Your Password' name='password' value={username} onChange={(e)=>setUsername(e.target.value)} required/>
          </div>
           <button  type='submit'>Login</button>
           <p>If you don't have an account then create<Link to={'/signup'}> <span className='create-new' >new account</span></Link></p>
           </form>
      </div>
    </div>
  )
}

export default Login;
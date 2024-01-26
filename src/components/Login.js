import React, { useState } from 'react'
import "./style/JoinRoom.css";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const [uuidVal, setUuidVal] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit =(e)=>{
    e.preventDefault();
    navigate('/join-room');
    toast.success('Logged In Successfully');
  }
  return (
    <div className='container-form '>
      <div className='entry-card'>
        <form  className='join-form' onSubmit={handleSubmit}>
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
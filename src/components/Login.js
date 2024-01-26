import React, { useState } from 'react'
import "./style/JoinRoom.css";
import {v4 as uuid} from "uuid";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Login = () => {
  const [uuidVal, setUuidVal] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
    const handleCreateNew =()=>{
    const id = uuid();
    setUuidVal(id);
  }

  const handleSubmit =(e)=>{
 
    e.preventDefault();    
    if(uuidVal && username){
      navigate(`../../editor/${uuidVal}`,{
        state:{
          username
        }
      });
    }else{
      alert("Please Enter room ID and password")
    }
  }
  return (
    <div className='container-form '>
      <div className='entry-card'>
        <form  className='join-form'>
          <div>
          <label>Enter Username</label>
          <input type='text' value={uuidVal}  onChange={(e)=>setUuidVal(e.target.value)} placeholder='Enter Username' name='roomId' required/>
          <label>Enter Password</label>
          <input type='text'  placeholder='Enter Your Password' name='username' value={username} onChange={(e)=>setUsername(e.target.value)} required/>
          </div>
           <button  onClick={handleSubmit}>Login</button>
           <p>If you don't have an account then create<Link to={'/signup'}> <span className='create-new' >new account</span></Link></p>
           </form>
      </div>
    </div>
  )
}

export default Login;
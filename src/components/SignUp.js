import React, { useState } from 'react'
import "./style/JoinRoom.css";
import {v4 as uuid} from "uuid";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


const SignUP = () => {
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
          <input type='text' value={uuidVal}  onChange={(e)=>setUuidVal(e.target.value)} placeholder='Enter Username' name='roomId'/>
          <label>Enter Password</label>
          <input type='text'  placeholder='Enter YourPassword' name='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
          <br></br>
           <label>Confirm Password</label>
          <input type='text'  placeholder='Confirm Your Password' name='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
          </div>
           <button  onClick={handleSubmit}>Sign Up</button>
           <p>If you  have already an account then please<Link to={'/login'}><span className='create-new' > Login</span></Link> </p>
           </form>
      </div>
    </div>
  )
}

export default SignUP;
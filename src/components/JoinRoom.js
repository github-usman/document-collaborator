import React, { useState } from 'react'
import "./style/JoinRoom.css";
import {v4 as uuid} from "uuid";
import { useNavigate } from 'react-router';


const JoinRoom = () => {
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
          <label>Enter Join ID</label>
          <input type='text' value={uuidVal}  onChange={(e)=>setUuidVal(e.target.value)} placeholder='Enter Room Join ID' name='roomId'/>
          <label>Enter User</label>
          <input type='text'  placeholder='Enter User Name' name='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
          </div>
           <button  onClick={handleSubmit}>Join Room</button>
           <p>If you don't have an invite then create <span className='create-new' onClick={handleCreateNew}>create new document</span></p>
           </form>
      </div>
    </div>
  )
}

export default JoinRoom;
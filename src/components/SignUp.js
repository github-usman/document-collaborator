import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const SignUP = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    cpassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData,  [e.target.name]: e.target.value, });
  };


  const handleSubmit = (e) => {
    toast.success('Account created Successfully');
  };

  return (
    <div className='container-form '>
      <div className='entry-card'>
        <form action='http://localhost:5000/signup' method='post' className='join-form'>
          <div>
            <label>Enter Your Name</label>
            <input type='text' onChange={handleChange} placeholder='Enter Your Name' name='name' required />
            <label>Enter Username</label>
            <input type='text' onChange={handleChange} placeholder='Enter Username' name='username' required/>
            <label>Enter New Password</label>
            <input type='password' placeholder='Enter new Password' name='password' onChange={handleChange} required/>
            <br></br>
            <label>Confirm New Password</label>
            <input type='password' placeholder='Confirm Your new Password' name='cpassword' onChange={handleChange} required/>
          </div>
          <button type='submit' onClick={handleSubmit} >Sign Up</button>
          <p>
            If you have already an account then please<Link to={'/login'}><span className='create-new'> Login</span></Link>{' '}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUP;
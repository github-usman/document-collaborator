import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
    toast.success('Account created Successfully');
  };

  return (
    <div className='container-form '>
      <div className='entry-card'>
        <form className='join-form' onSubmit={handleSubmit}>
          <div>
            <label>Enter Your Name</label>
            <input type='text' onChange={handleChange} placeholder='Enter Your Name' name='name' />
            <label>Enter Username</label>
            <input type='text' onChange={handleChange} placeholder='Enter Username' name='username' />
            <label>Enter Password</label>
            <input type='password' placeholder='Enter Your Password' name='password' onChange={handleChange} />
            <br></br>
            <label>Confirm Password</label>
            <input type='password' placeholder='Confirm Your Password' name='cpassword' onChange={handleChange} />
          </div>
          <button type='submit' >Sign Up</button>
          <p>
            If you have already an account then please<Link to={'/login'}><span className='create-new'> Login</span></Link>{' '}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUP;
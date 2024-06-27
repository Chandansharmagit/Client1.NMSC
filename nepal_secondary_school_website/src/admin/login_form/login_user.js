import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../login_form/loginn.css';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Accordian from '../../component/new/footer';
import Cookies from 'js-cookie';

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send POST request to /userLogin endpoint with email and password
      const response = await axios.post('https://backend.nepalmodelsecondaryschool.com/userLogin', { email, password });

      // Check if login was successful
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        const expirationTime = 1 / 24 / 60; // 1 hour in days
        Cookies.set('auth', JSON.stringify({ email, password }), { expires: expirationTime });
        navigate("/drawer");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Please enter correct email and password');
      toast.error("Login failed");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='login_form'>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required id='password-pregination' />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit"className='logins'>Login</button>
        <span className='login'><Link to='/admin/panel/login/forgot-password-link'><button  >Forgot Password</button></Link></span>
      </form>
      <Accordian />
    </>
  );
};

export default LoginForm;

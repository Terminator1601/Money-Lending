import React, { useState } from 'react';
import './LoginSignup.css';
import axios from 'axios'; // Add axios for HTTP requests

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({ username: '', password: '', role: 'client' });

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignup) {
      try {
        const response = await axios.post('http://localhost:5000/signup', formData);
        alert(response.data.message);
      } catch (error) {
        alert('Error: ' + (error.response?.data?.message || 'Signup failed'));
      }
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <button className="toggle-btn" onClick={toggleForm}>
          {isSignup ? 'Switch to Login' : 'Switch to Signup'}
        </button>
        {isSignup ? (
          <form className="form" onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <select name="role" onChange={handleChange}>
              <option value="client">Client</option>
              <option value="merchant">Merchant</option>
            </select>
            <button type="submit">Sign Up</button>
          </form>
        ) : (
          <form className="form">
            <h2>Login</h2>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;

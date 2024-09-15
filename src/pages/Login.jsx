import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Import jwt-decode package

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3216/api/auth/login', { email, password });

      if (response.data && response.data.token) {
        localStorage.setItem('jwtToken', response.data.token); // Store JWT token
        localStorage.setItem('refreshToken', response.data.refreshToken); // Store refresh token

        // Decode the JWT token to get user information if needed
        const decodedToken = jwtDecode(response.data.token);
        localStorage.setItem('userData', JSON.stringify(decodedToken)); // Store user data

        setError('');
        window.location.replace("/"); // Redirect to home page
      } else {
        setError('Unexpected response format');
      }
    } catch (error) {
      console.error('Error details:', error.response ? error.response.data : error.message);
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p className='text-ascent-2 text-sm text-center'>
          Don't have an account?
          <Link
            to='/register'
            className='text-[#D00000] font-semibold ml-2 cursor-pointer'
          >
            Create Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;

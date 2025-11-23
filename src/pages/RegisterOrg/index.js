// frontend/src/pages/RegisterOrg/index.js
import React, { useState } from 'react';
import './index.css';
import { registerOrg } from '../../services/api';
import { useNavigate } from 'react-router-dom';

function RegisterOrg() {
  const [name, setName] = useState('');
  const [orgName, setOrgName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerOrg({ name, orgName, email, password });
      navigate('/'); // redirect to login after registration
    } catch (err) {
      console.error('Registration error:', err.response || err);
      alert('Registration failed! Try again.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register Organization</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Organization Name"
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
        <div className="login-link">
          <span>Already have an account?</span>
          <button onClick={() => navigate('/')}>Login Here</button>
        </div>
      </div>
    </div>
  );
}

export default RegisterOrg;

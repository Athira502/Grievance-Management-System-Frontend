import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';


export default function HomePage() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (loginData.email === 'user@gmail.com' && loginData.password === 'userpassword') {
      navigate('/GrievanceForm'); // Redirect to customer dashboard
    } else if (loginData.email === 'supervisor@gmail.com' && loginData.password === 'supervisorpassword') {
      navigate('/supervDashboard'); // Redirect to supervisor dashboard
    } else if (loginData.email === 'assignee@gmail.com' && loginData.password === 'assigneepassword') {
      navigate('/assigneeDashboard'); // Redirect to assignee dashboard
    } else {
      setErrorMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="loginPage">
      <h1>LOGIN</h1>
      <form className="loginForm" onSubmit={handleLoginSubmit}>
        <div className="formGroup">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <button type="submit" className="submitButton">Login</button>
        </div>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      </form>
    </div>
  );}
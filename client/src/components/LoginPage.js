import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/ira_logo.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const defaultUserame = 'eyera01';
    const defaultPassword = '1234';

    if (username === defaultUserame && defaultPassword === defaultPassword) {
        setIsLoggedIn(true);
        navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='login-page'>
        <div className="navbar-login-logo">
            <img src={logo} alt='logo'/>
        </div>
    <form className="login-form" onSubmit={handleSubmit}>
      <label class="label1">
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label className="label2">
        Password :
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button className='login-button' type="submit">Log in</button>
    </form>
    </div>
  );
};

export default LoginPage;
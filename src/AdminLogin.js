// adminlogin.js
import React, { useState } from 'react';
import './AdminLogin.css'; // Import the CSS file


  const AdminLogin = ({ userType }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, e.g., sending login credentials to the server.
    console.log(`User type: ${userType}, Username: ${username}, Password: ${password}`);
  };

  
  return (
    <div class="a1">
    <h1 class="a2">AdminLogin page</h1>
    <p class="a3"> page.</p>

  <div>
  <h2>Login Page - {userType} </h2>
  <form class="a4" onSubmit={handleSubmit}>
    <div>
      <label class="a5"htmlFor="username">Username:</label>
      <input class="a6" type="text" id="username" value={username} onChange={handleUsernameChange} required />
    </div>
    <div>
      <label class="a5" htmlFor="password">Password:</label>
      <input class="a7"type="password" id="password" value={password} onChange={handlePasswordChange} required />
    </div>
    <button class="a8" type="submit">Login</button>
  </form>
</div>
</div>


  );
  
};

export default AdminLogin;







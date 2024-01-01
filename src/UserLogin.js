// userlogin.js
import React, { useState } from 'react';
import './UserLogin.css'; // Import the CSS file


  const UserLogin = ({ userType }) => {
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
    <div class="u1">
    <h1 class="u2">UserLogin page</h1>
    <p class="u3"> page.</p>

  <div >
  <h2>Login Page - {userType} </h2>
  <form class="u4" onSubmit={handleSubmit}>
    <div>
      <label class="u5"htmlFor="username">Username:</label>
      <input class="u6" type="text" id="username" value={username} onChange={handleUsernameChange} required />
    </div>
    <div>
      <label class="u5" htmlFor="password">Password:</label>
      <input class="u7"type="password" id="password" value={password} onChange={handlePasswordChange} required />
    </div>
    <button class="u8" type="submit">Login</button>
  </form>
</div>
</div>


  );
  
};

export default UserLogin;







// EmployeeLogin.js
import React, { useState } from 'react';
import './EmployeeLogin.css'; 


  const EmployeeLogin= ({ userType }) => {
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
          <div class="e1">
            <h1 class="e2">EmployeeLogin page</h1>
            <p class="e3"> page.</p>

          <div>
          <h2>Login Page - {userType} </h2>
          <form class="e4" onSubmit={handleSubmit}>
            <div>
              <label class="e5"htmlFor="username">Username:</label>
              <input class="e6" type="text" id="username" value={username} onChange={handleUsernameChange} required />
            </div>
            <div>
              <label class="e5" htmlFor="password">Password:</label>
              <input class="e7"type="password" id="password" value={password} onChange={handlePasswordChange} required />
            </div>
            <button class="e8" type="submit">Login</button>
          </form>
        </div>
        </div>

  );
  
};

export default EmployeeLogin;







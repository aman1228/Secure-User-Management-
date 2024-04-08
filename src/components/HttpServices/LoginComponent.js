// Example usage in a React component
import React, { useState } from 'react';
import { authenticateUser, getUserData } from './httpService';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userData = await authenticateUser(email, password);
      // Handle successful authentication, e.g., store user token in local storage
      console.log(userData);
    } catch (error) {
      // Handle authentication error, e.g., display error message
      console.error(error);
    }
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginComponent;

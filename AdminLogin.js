import React, { useState } from 'react';
import AdminPanel from './AdminPanel';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') setAuthenticated(true);
    else alert('Incorrect password');
  };

  return authenticated ? <AdminPanel /> : (
    <form onSubmit={handleLogin} className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl mb-2">Admin Login</h2>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter admin password" className="block w-full p-2 mb-2" />
      <button type="submit" className="bg-crimson text-white px-4 py-1">Login</button>
    </form>
  );
}
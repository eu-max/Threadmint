import React from 'react';
import './index.css';
import Home from './pages/Home';
import DesignForm from './pages/DesignForm';
import AdminLogin from './pages/AdminLogin';

export default function App() {
  const [page, setPage] = React.useState('home');

  return (
    <div className="text-crimson bg-black min-h-screen">
      <nav className="p-4 flex justify-around bg-crimson text-white">
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('form')}>Design</button>
        <button onClick={() => setPage('admin')}>Admin</button>
      </nav>
      {page === 'home' && <Home />}
      {page === 'form' && <DesignForm />}
      {page === 'admin' && <AdminLogin />}
    </div>
  );
}
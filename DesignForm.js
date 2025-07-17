import React, { useState } from 'react';

export default function DesignForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', style: '', notes: '' });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Design submitted! This will be wired to Firebase or email in the next step.');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl mb-4">Submit Your Design</h2>
      <input name="name" placeholder="Your Name" onChange={handleChange} required className="block w-full mb-2 p-2" />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required className="block w-full mb-2 p-2" />
      <input name="phone" placeholder="Phone" onChange={handleChange} className="block w-full mb-2 p-2" />
      <input name="style" placeholder="Preferred Style / Fabric" onChange={handleChange} className="block w-full mb-2 p-2" />
      <textarea name="notes" placeholder="Special instructions" onChange={handleChange} className="block w-full mb-2 p-2" />
      <input type="file" onChange={handleFileChange} accept="image/*" className="block mb-4" />
      <button type="submit" className="bg-crimson text-white px-4 py-2">Submit</button>
    </form>
  );
}

import React, { useState } from 'react';
import axios from 'axios';

export default function RegistrationForm({ onSuccess }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/v1/auth/register', formData);
    if (res.status === 200) onSuccess(formData.email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Name" required />
      <input name="email" onChange={handleChange} placeholder="Email" required />
      {/* <input name="phone" onChange={handleChange} placeholder="Phone" required /> */}
      <button type="submit">Register</button>
    </form>
  );
}
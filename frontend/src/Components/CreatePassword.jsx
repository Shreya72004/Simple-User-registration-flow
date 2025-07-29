import React, { useState } from 'react';
import axios from 'axios';

export default function CreatePassword({ email }) {
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/v1/auth/set-password', { email, password });
    if (res.status === 200) alert("Password created successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Set Password" required />
      <button type="submit">Set Password</button>
    </form>
  );
}
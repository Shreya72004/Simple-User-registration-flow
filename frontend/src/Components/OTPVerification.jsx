import React, { useState } from 'react';
import axios from 'axios';

export default function OTPVerification({ email, onVerified }) {
  const [otp, setOtp] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/v1/auth/verify-otp', { email, otp });
    if (res.status === 200) onVerified();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" required />
      <button type="submit">Verify OTP</button>
    </form>
  );
}

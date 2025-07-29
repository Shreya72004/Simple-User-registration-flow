import React, { useState } from 'react';
import RegistrationForm from '../Components/Registrationform';
import OTPVerification from '../Components/OTPVerification';
import CreatePassword from '../Components/CreatePassword';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

  return (
    <div>
      {step === 1 && <RegistrationForm onSuccess={(e) => { setEmail(e); setStep(2); }} />}
      {step === 2 && <OTPVerification email={email} onVerified={() => setStep(3)} />}
      {step === 3 && <CreatePassword email={email} />}
    </div>
  );
}
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
//   phone: { type: String, unique: true },
  otp: String,
  password: String,
  isVerified: { type: Boolean, default: false }
});

export default mongoose.model('User', userSchema);

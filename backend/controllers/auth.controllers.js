import User from '../models/user.models.js';
import { generateOTP } from '../utils/generateOTP.js';
import { sendEmail } from '../utils/sendEmail.js';
import bcrypt from 'bcrypt'

export const register = async (req, res) => {
  const { name, email } = req.body;
  const otp = generateOTP();

  const user = new User({ name, email, otp });
  await user.save();

  await sendEmail(email, otp);
  // await sendSMS(phone, otp);

  res.status(200).json({ message: "OTP sent to email." });
};

export const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  const user = await User.findOne({ email });

  if (!user || user.otp !== otp) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  user.isVerified = true;
  user.otp = null;
  await user.save();

  res.status(200).json({ message: "OTP verified successfully." });
};

export const setPassword = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !user.isVerified) {
    return res.status(403).json({ message: "User not verified." });
  }

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);
  await user.save();

  res.status(200).json({ message: "Password set successfully." });
};

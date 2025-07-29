import nodemailer from "nodemailer";

export const sendEmail = async (email, otp) => {
  try {
    // 1. Create Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,       // Your Gmail
        pass: process.env.MAIL_PASS        // App password
      }
    });

    // 2. Email Options
    const mailOptions = {
      from: `"MyApp " <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_SENT,
      subject: "Your OTP Code",
      html: `<h2>Your OTP is: <span style="color:blue;">${otp}</span></h2>`
    };

    // 3. Send Email
    const info = await transporter.sendMail(mailOptions);
    console.log(`EMAIL SENT : ${info.response}`);
  } catch (err) {
    console.error("ERROR SENDING EMAIL:", err);
    throw err;
  }
};

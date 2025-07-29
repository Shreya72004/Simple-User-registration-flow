import dotenv from 'dotenv';
dotenv.config({ path: './env' });

import { app } from './app.js';
import connectDB from './config/db.js';

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed", err);
  });

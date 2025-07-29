import dotenv from 'dotenv';
dotenv.config({ path: './env' });
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'

const app=express()
app.use(express.json())
app.use(express.static("public"))
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    controllers:true
}))
app.use(cookieParser())
app.use('/api/v1/auth',authRoutes)
export{app}
import {Router} from "express"
import {register,verifyOTP,setPassword} from '../controllers/auth.controllers.js'

const router=Router()

router.route('/register').post(register)
router.route('/verify-otp').post(verifyOTP)
router.route('/set-password').post(setPassword)

export default router 
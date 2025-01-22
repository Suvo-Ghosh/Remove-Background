import express from 'express'
import { clerkWebhooks } from '../controllers/userController.js'
console.log(" userRoute.js page");
const userRouter = express.Router()

userRouter.post('/webhooks', clerkWebhooks)

export default userRouter
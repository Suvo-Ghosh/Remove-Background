import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connect } from 'mongoose'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoute.js'
import imageRouter from './routes/imageRoute.js'
import dotenv from 'dotenv'
dotenv.config()


//App Config
const PORT = process.env.PORT || 4000
const app = express()
// await connectDB()
connectDB()
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err))

//Initial Middelewares
app.use(cors());
app.use(express.json())

//API route
app.get('/', (req, res) => res.send('API working'))
app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.listen(PORT, () => console.log("Server Running on port ", PORT))


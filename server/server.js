import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connect } from 'mongoose'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoute.js'


//App Config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

//Initial Middelewares
app.use(express.json())
app.use(cors())

//API route
app.get('/', (req, res) => res.send('API working'))
app.use('/api/user', userRouter)

app.listen(PORT, () => console.log("Server Running on port " + PORT))


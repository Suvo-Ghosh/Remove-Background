import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async () => {
    console.log("inside connectDB");
    await mongoose.connect(`${process.env.MONGODB_URI}remove-bg`);
};

export default connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
    console.log("inside connectDB");
    await mongoose.connect(`${process.env.MONGODB_URI}remove-bg`);
};

export default connectDB;

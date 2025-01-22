import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect(`${process.env.MONGODB_URI}remove-bg`);
};

export default connectDB;

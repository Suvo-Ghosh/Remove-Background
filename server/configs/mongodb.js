import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log("Dtabase Connected")
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/remove-bg`)
}

export default connectDB
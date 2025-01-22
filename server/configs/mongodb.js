// import mongoose from "mongoose";
// const connectDB = async () => {
//     mongoose.connection.on('connected', () => {
//         console.log("Dtabase Connected")
//     })
//     await mongoose.connect(`${process.env.MONGODB_URI}remove`, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
//         socketTimeoutMS: 45000, // Close sockets after 45 seconds
//     });
// }

// export default connectDB

import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect(`${process.env.MONGODB_URI}remove-bg`);
};

export default connectDB;

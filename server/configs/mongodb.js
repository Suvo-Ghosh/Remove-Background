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
    try {
        mongoose.connection.on('connected', () => {
            console.log("Database Connected");
        });

        mongoose.connection.on('error', (err) => {
            console.error("Database Connection Error: ", err);
        });

        await mongoose.connect(`${process.env.MONGODB_URI}remove`, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds
        });
    } catch (error) {
        console.error("Error connecting to the database: ", error);
        throw error; // Rethrow to ensure the function fails if connection fails
    }
};

export default connectDB;

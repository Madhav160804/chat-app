import mongoose from "mongoose";
import dotenv from "dotenv";

const connectToMongoDB = async () => {
    dotenv.config();
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB")
    } catch(err) {
        console.log("Error connecting to MongoDB",err.message);
    }
}

export default connectToMongoDB
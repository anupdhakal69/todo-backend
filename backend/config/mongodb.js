import mongoose from "mongoose";
import "dotenv/config"


const connectDB = async () => {

    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("Connected to database successfully:", connection.connection.host);
        
    } catch (error) {
        console.log("Database connection fail vayo:",error.message);     
    }
}

export default connectDB
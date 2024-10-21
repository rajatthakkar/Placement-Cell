// Importing the dotenv library to load environment variables from a .env file
import dotenv from 'dotenv'; 
// Importing the mongoose library to interact with MongoDB
import mongoose from 'mongoose'; 
// Load environment variables from .env file
dotenv.config(); 
// Logging the result of the dotenv.config() to see if it loaded successfully
console.log(dotenv.config()); 
// Access the environment variables defined in the .env file
const url = process.env.MONGOURL; // MongoDB connection URL

const createMongooseConection = async () => {
    try {
        // Connecting to MongoDB using the connection string from the environment variable
        console.log(url)
        await mongoose.connect(url);
        console.log("Mongoose is connected");
    } catch (error) {
        console.log("Got an error", error);
    }
};
export default createMongooseConection
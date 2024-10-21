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
const port = process.env.PORT||3000 ;      // Server port
// Logging the MongoDB URL and server port to the console
console.log('MongoDB URL:', url);   // Output: MongoDB URL: mongodb://localhost:27017/placement_cell
console.log('Server Port:', port);    // Output: Server Port: 3000
// Function to create a connection to MongoDB using Mongoose
// const createMongooseConection = async () => {
//   try {
//     // Attempting to connect to MongoDB
//     await mongoose.connect(url, {
//       useNewUrlParser: true,  // Ensures use of the new connection string parser.
//       useUnifiedTopology: true // Enables stable connections using the unified topology.
//     });
//     console.log("Mongoose is connected"); // Log success message if connected
//   } catch (error) {
//     // Log any error encountered during the connection attempt
//     console.log("got an error", error);
//   }
// };
// // Exporting the createMongooseConection function for use in other modules
// export default createMongooseConection; 
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
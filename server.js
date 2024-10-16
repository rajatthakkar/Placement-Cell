// Importing the Express app instance from the index.js file
import app from "./index.js";
// Importing the dotenv package to load environment variables from the .env file
import dotenv from 'dotenv';
// Importing the function to create a Mongoose connection from mongooseConfig.js
import createMongooseConnection from "./src/config/mongooseConfig.js";
// Loading environment variables from the .env file
dotenv.config();
// Getting the PORT value from environment variables
const PORT = process.env.PORT;
// Starting the server and listening on the specified PORT
app.listen(PORT, () => {
    // Establishing a connection to MongoDB using Mongoose
    createMongooseConnection();
    // Logging a message to indicate that the server is running
    console.log(`Server is running at port ${PORT}`);
});

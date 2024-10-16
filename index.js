// Importing the Express framework
import express from 'express'; 
// Creating an instance of the Express application
const app = express(); 
// Middleware to parse incoming JSON requests and make the data available in req.body
app.use(express.json());
// Exporting the app instance for use in other modules
export default app; 

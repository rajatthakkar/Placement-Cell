// Importing the Express framework
import express from 'express'; 
import RegisteredController from './src/controllers/registered.controller.js';
import DeshboardController from './src/controllers/deshboard.controller.js';
import path from 'path';
// Importing the dotenv package to load environment variables from the .env file
import dotenv from 'dotenv';
// Importing the function to create a Mongoose connection from mongooseConfig.js
import createMongooseConnection from "./src/config/mongooseConfig.js";
//Import Ejs Layout Here
import ejsLayouts from 'express-ejs-layouts';
// Loading environment variables from the .env file
dotenv.config();
// Getting the PORT value from environment variables
const PORT = process.env.PORT;
//instance of Class
const ragisterController = new RegisteredController()
const desboardController = new DeshboardController()
// Creating an instance of the Express application
const app = express(); 

app.use(express.urlencoded({extended:true}))
// setup view engine settings
app.set("view engine", "ejs");
// path of our views
app.set("views", path.join(path.resolve(),"src",'views')); 

app.use(ejsLayouts);
// Middleware to parse incoming JSON requests and make the data available in req.body
app.use(express.json());

app.get('/', (req, res) => {
    ragisterController.login(req, res);
});
app.post('/signin',(req,res)=>{
    ragisterController.login(req,res)
})
app.get('/ragisterd',(req,res)=>{
    ragisterController.ragisterd(req,res)
})
app.post('/signup', (req, res) => {
    ragisterController.signup(req, res);
});
app.get('/deshboard', (req, res) => {
    desboardController.deshboard(req,res)
});



app.listen(PORT, () => {
    // Establishing a connection to MongoDB using Mongoose
    createMongooseConnection();
    // Logging a message to indicate that the server is running
    console.log(`Server is running at port ${PORT}`);
});

// Exporting the app instance for use in other modules


const express = require("express");
// pour sécuriisé  le code 
const helmet = require("helmet");

const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config()


// create express app
const app = express();
app.use(helmet());



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database

const mongoose = require('mongoose');


app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,authorization,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(process.env.Url, {
   useUnifiedTopology:true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to redspher test  application."});
});

require('./app/routes/calculatrice.routes.js')(app);

//console.log(process.env.PORT)

// listen for requests
app.listen(process.env.PORT || 3001, () => {
    console.log("Server is listening on port 3001");
});



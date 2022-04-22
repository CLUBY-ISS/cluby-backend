// Packages and Libraries
const express = require('express');
const app = express();
const bodyParser= require ('body-parser');
const morgan = require('morgan');
const mongoose= require('mongoose');
const cors =require ('cors');
require("dotenv/config");


app.use(cors());
app.options('*',cors())


//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));



//Routers
const clubsRouter = require ('./routers/clubs');
const usersRouter = require ('./routers/users');
const eventsRouter = require ('./routers/events');

const api = process.env.API_URL;

app.use( `${api}/clubs`, clubsRouter);
app.use( `${api}/users`, usersRouter);
app.use( `${api}/events`, eventsRouter);

mongoose.connect(process.env.CONNECTION_STRING)
 
.then(()=> {
  console.log('Database Connection is ready ...')
})
.catch ((err) => {
  console.log(err);
})

// Starting to listen to requests
app.listen(4000, () => {
 
  console.log('Server is running http://localhost:4000');
});




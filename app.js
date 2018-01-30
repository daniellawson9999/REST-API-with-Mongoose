const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const morgan = require('morgan');
mongoose.Promise = global.Promise;

//get routers
const general = require('./routes/general');
const id = require('./routes/id');

mongoose.connect('mongodb://localhost/api');

let app = express();

//set middleware
app.use(morgan('dev'));
app.use(bodyParser.json());


//set routes using middleware, general and id are routers
app.use('/accounts', general);
app.use('/accounts/:id', id);



app.use(errorHandler());
app.listen(3000);

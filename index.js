const express = require('express');


//  calling express
const app = express();

require("dotenv").config();
const passport = require('passport');

const Strategy= require('./config/passport-jwt');

//  express urlencoded  for body parser
app.use(express.urlencoded());


app.use('/',require('./routes'));


module.exports=app;
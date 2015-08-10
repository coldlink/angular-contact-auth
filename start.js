//get everything needed
var express = require('express');
var router = express();
var mongoose = require('mongoose');
var passport = require('passport');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

//set public directory
router.use(express.static(__dirname + "/views"));

//connect to users database
mongoose.connect('mongodb://heroku_58vn8mqq:5l42dvpu4c4u9jvih8ulrma58p@ds031903.mongolab.com:31903/heroku_58vn8mqq');

//get passport conficuration
require('./config/passport')(passport);

//get contact model
require('./app/models/Contact');
var Contact = mongoose.model('Contact');

// log request to the console
router.use(morgan('dev'));

// read cookies for auth
router.use(cookieParser());

// read info from html forms
router.use(bodyParser());

// use4 ejs for templating
router.set('view engine', 'ejs');

// required for passport
router.use(session({ secret: 'netnatives' })); // session secret
router.use(passport.initialize());
router.use(passport.session()); // persistent login sessions

//routes
require('./app/routes.js')(router, passport, Contact);

router.listen(3000);
console.log('Server running on port 3000');
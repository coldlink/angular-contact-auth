var express = require('express');
var router = express();
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

router.use(express.static(__dirname + "/views"));
// configuration ===============================================================
mongoose.connect('mongodb://localhost/users'); // connect to our database

require('./config/passport')(passport); // pass passport for configuration
require('./app/models/Contact');
var Contact = mongoose.model('Contact');

// set up our express application
router.use(morgan('dev')); // log every request to the console
router.use(cookieParser()); // read cookies (needed for auth)
router.use(bodyParser()); // get information from html forms

router.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
router.use(session({ secret: 'netnatives' })); // session secret
router.use(passport.initialize());
router.use(passport.session()); // persistent login sessions
router.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(router, passport, Contact); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
router.listen(3000);
console.log('Server running on port 3000');
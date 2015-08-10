//passport configuration file
var LocalStrategy = require('passport-local').Strategy;
var User = require('../app/models/User'); //get user model

module.exports = function(passport)
{
    //passport session setup, persistent login
    //serialize the user for session
    passport.serializeUser(function(user, done)
    {
        done(null, user.id);
    });

    //deserialize the user
    passport.deserializeUser(function(id, done)
    {
        User.findById(id, function(err, user)
        {
            done(err, user);
        });
    });

    //set up local signup
    passport.use('local-signup', new LocalStrategy(
    {
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, username, password, done) 
    {
        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

        //check user in signup form
        User.findOne({'local.username': username}, function(err, user)
        {
            //return errors
            if (err)
                return done(err);

            //check for duplicate user
            if (user)
            {
                return done(null, false);
            } else
            {

                // if no user, then creare user
                var newUser = new User();

                // set the users credentials
                newUser.local.username = username;
                newUser.local.password = newUser.generateHash(password);

                // save the user
                newUser.save(function(err)
                {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }

        });    

        });

    }));

//set up local login, search user database for the user inputted in field
    passport.use('local-login', new LocalStrategy(
    {
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, username, password, done)
    {
        // find a user with username in database
        User.findOne({'local.username':  username }, function(err, user) {
            //return errors
            if (err)
                return done(err);

            // if no user is found, do nothing 
            if (!user)
                return done(null, false);

            // passsword is wrong, do nothing
            if (!user.validPassword(password))
                return done(null, false);

            //successful login
            return done(null, user);
        });
    }));
};
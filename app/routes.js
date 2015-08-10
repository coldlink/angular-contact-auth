var mongoose = require('mongoose');
module.exports = function(router, passport, Contact) {

    /*HOMEPAGE - LOGIN PAGE*/
    router.get('/', function(req, res) {
        res.render('login.ejs'); // load the index.ejs file
    });

    router.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') }); 
    });

    /*SIGNUP PAGE*/
    router.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    /*OPEN CONTACT LIST*/
    router.get('/profile', isLoggedIn, function(req, res) {
        //sucessful login, connect to contacts database
        mongoose.connection.close()
        mongoose.connect('mongodb://localhost/contacts');
        res.render('profile.ejs');
    });

    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
    }));

    router.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
    }));

    /*LOGOUT*/
    router.get('/logout', function(req, res) {
        mongoose.connection.close()
        mongoose.connect('mongodb://localhost/users');
        req.logout();
        res.redirect('/');
    });

    //getting all contacts from database
    router.get('/contacts', function(req, res){
      Contact.find(function (err, resp) {
          res.json(resp);
      });
    });

//get single contact from database by id
    router.get('/contacts/:id', function(req, res){
        var id = req.params.id;
        Contact.findOne({_id: id}, function (err, resp) {
            res.json(resp);
        });
    });

//creating new contact in database
    router.post('/contacts/post', function(req, res){
        console.log(req.body);

        var contact = new Contact(req.body);

        contact.save(function(err, contact){
            res.json(contact);
        });
    });

//updating contact in database using id
    router.put('/contacts/put/:id', function(req, res){
        var id = req.params.id;
        console.log(req.body);
        Contact.findByIdAndUpdate(
            id,
            {name: req.body.name, email: req.body.email, location: req.body.location, primary: req.body.primary},
            {},
            function(err, resp) {
                res.json(resp);
            }
        );
    });

//delete contact in database using id
    router.delete('/contacts/delete/:id', function(req, res){
        console.log(req.params.id);
        var id = req.params.id;
            Contact.remove({_id: id}, function (err, resp){
            res.json(resp);
        });
    });

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
}
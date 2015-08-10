var mongoose = require('mongoose');
module.exports = function(router, passport, Contact)
{

    //hopepage - redirect to login page
    router.get('/', function(req, res)
    {
        res.render('login.ejs');
    });

    // login also redirects to login page
    router.get('/login', function(req, res)
    {
        // render the page and pass in any flash data if it exists
        res.render('login.ejs'); 
    });

    //sign up page (hidden from site)
    router.get('/signup', function(req, res)
    {
        res.render('signup.ejs');
    });

    //on succesful loging, connect to contacts database and contact list page
    router.get('/list', isLoggedIn, function(req, res)
    {
        res.render('list.ejs');
    });

    //signup post
    router.post('/signup', passport.authenticate('local-signup',
    {
        successRedirect : '/list',
        failureRedirect : '/signup',
    }));

    //login post
    router.post('/login', passport.authenticate('local-login',
    {
        successRedirect : '/list',
        failureRedirect : '/login',
    }));

    //logout
    router.get('/logout', function(req, res)
    {
        req.logout();
        res.redirect('/');
    });

    //getting all contacts from database
    router.get('/contacts', function(req, res)
    {
      Contact.find(function (err, resp)
      {
          res.json(resp);
      });
    });

    //get single contact from database by id
    router.get('/contacts/:id', function(req, res)
    {
        var id = req.params.id;
        Contact.findOne({_id: id}, function (err, resp)
        {
            res.json(resp);
        });
    });

    //creating new contact in database
    router.post('/contacts/post', function(req, res)
    {
        var contact = new Contact(req.body);
        contact.save(function(err, contact)
        {
            res.json(contact);
        });
    });

    //updating contact in database using id
    router.put('/contacts/put/:id', function(req, res)
    {
        var id = req.params.id;
        Contact.findByIdAndUpdate(
            id,
            {name: req.body.name, email: req.body.email, location: req.body.location, primary: req.body.primary},
            {},
            function(err, resp)
            {
                res.json(resp);
            }
        );
    });

    //delete contact in database using id
    router.delete('/contacts/delete/:id', function(req, res)
    {
        console.log(req.params.id);
        var id = req.params.id;
            Contact.remove({_id: id}, function (err, resp)
            {
            res.json(resp);
            });
    });

};

// route to check user logged in
function isLoggedIn(req, res, next)
{
    // if authenticated, carry on 
    if (req.isAuthenticated())
        return next();
    // else go to the home page
    res.redirect('/');
}
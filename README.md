## AngularJS Contact List
Simple angularjs contact list with authentication ultilising the MEAN stack.

####Tools Used:
  - AngularJS
  - MongoDB
  - Express
  - node.js
  - Bootstrap
  
####Node.js modules used:
  - express
  - mongoose
  - ejs
  - passport
  - bcrypt
  
###Live demo on heroku 
#####https://mm-angular-contact.herokuapp.com/
  
####Offline/Local installation
  - Install backend prerequisites
    - nodejs
    - MongoDB
  - Download/Clone repository
  - Navigate to repository directory
  - Install node packages using
  ```
npm install
  ```
  - Start MongoDB server using
  ```
mongod  
  ```
  - In
  ```
start.js
  ```
  replace
  ```
mongoose.connect(...);
  ```
  with
  ```
mongoose.connect('mongodb://localhost/')
  ```
  - Start server with
  ```
node start
  ```
  - Navigate to
  ```
http://localhost:3000
  ```
  - You can create a new user by navigating to
  ```
http://localhost:3000/signup
  ```
  
####Application structure
    - app
    ------ models
    ---------- Contact.js  <!-- Contact model -->
    ------ routes.js    <!-- routes for the application -->
    - config
    ------ passport.js  <!-- configuring passport strategies-->
    ------ User.js      <!--User model used in passport-->
    - views
    ------ login.ejs    <!-- login form/index page -->
    ------ signup.ejs   <!-- signup form -->
    ------ list.ejs     <!-- contact list built with angularjs, onlly visible after user logs in -->
    - package.json      <!-- npm/node packages -->
    - start.js          <!-- application setup  -->

####Project notes:
  - I had never used AngularJS before, but had some experience with JavaScript.
  - AngularJS was straightforward, and easy to learn.
  - Basic non-persistant contact list was implemented first.
  - Used Bootstrap for stying of the application.
  - Backend developed using MEAN stack (MongoDB, Express, AngularJs, NodeJS)/.
    - Had also never used MongoDB, Express, & NodeJS. I learned how to use all three.
  - Persistant contact list storage developed with MongoDB.
  - All contact list features implemented, Add, Remove, and Edit contact information.
  - Authentication system was the most difficult part to build as I had never done anything similar to this using Javascript, and a NoSQL database. Learned alot about the authenication process.
    - Based solution using NodeJs with help from a guide: https://scotch.io/tutorials/easy-node-authentication-setup-and-local
    - Authenication system allows single user login and creation, with encrypted/hashed password using bcrypt. User information is stored in the MondoDB database.
    - All users currently have full access to same contact list when logged in, currently each user does not have individual contact list.
    - Cannot view/edit the contact list unless logged in.
  - Deployed application to Heroku, and commited all files to GitHub.

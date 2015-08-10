## AngularJS Contact List
Simple angularjs contact list with authentication ultilising the MEAN stack.

####Tools Used:
  - AngularJS
  - MongoDB
  - Express
  - node.js
  
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

####Project notes:
  - I had never used AngularJS before, but had some experience with JavaScript.
  - AngularJS was straightforward, and easy to learn.
  - Basic non-persistant contact list was implemented first.
  - Backend developed using MEAN stack (MongoDB, Express, AngularJs, NodeJS)/.
    - Had also never used MongoDB, Express, & NodeJS. I learned how to use all three.
  - Persistant contact list storage developed with MongoDB.
  - All contact list features implemented, Add, Remove, and Edit contact information.
  - Authentication system was the most difficult part to build.
    - Based solution using NodeJs with help from a guide: https://scotch.io/tutorials/easy-node-authentication-setup-and-local
    - Authenication system allows single user login and creation, with encrypted/hashed password using bcrypt. User information is stored in the MondoDB database.
    - All users currently have full access to same contact list when logged in, currently each user does not have individual contact list.
    - Cannot view/edit the contact list unless logged in.
  - Deployed application to Heroku, and commited all files to GitHub.

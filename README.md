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

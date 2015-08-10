//contact model for contact list
var mongoose = require('mongoose');

//schema for contact model
var ContactSchema = new mongoose.Schema(
{
	name: String,
	email: String,
	location: String,
	primary: String,
});

//create the model
mongoose.model('Contact', ContactSchema);
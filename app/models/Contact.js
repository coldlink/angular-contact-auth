var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	//_id: {type: mongoose.Schema.Types.ObjectId},
	name: String,
	email: String,
	location: String,
	primary: String,
});

/*CommentSchema.statics.findAndModify = function(query, sort, doc, options, callback){
	return this.collection.findAndModify(query, sort, doc, options, callback);
};*/

mongoose.model('Contact', CommentSchema);
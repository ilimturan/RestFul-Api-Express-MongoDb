var mongoose = require('mongoose');

var Schema   = mongoose.Schema;

var userActionSchema = new Schema({
	'user_id' : Number,
	'action_type' : String,
	'action_id' : Number,
	'created_at' : Date,
	'updated_at' : Date
});

userActionSchema.pre('save', function(next){

	this.updated_at = new Date();
	if ( !this.created_at ) {
		this.created_at = new Date();
	}
	next();

});

module.exports = mongoose.model('userAction', userActionSchema);

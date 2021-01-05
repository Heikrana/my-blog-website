const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	userName: {
		type: String,
		required: true,
		unique: true,
		minlenght: 3,
	},
	Email: {
		type: String,
		required: true,
		unique: true,
	},
	Password: {
		type: String,
		required: true,
		unique: true,
	},
});

const userDetails = mongoose.model("userDetails", userSchema);

module.exports = userDetails;

const mongoose = require("mongoose");

const schema = mongoose.schema;

const userSchema = new Schema({
   Name: String,
   Email: String,
   Password: String,
});

const userDetails = mongoose.model("userDetails", userSchema);

module.exports = userDetails;
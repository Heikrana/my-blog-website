const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
   Heading: String
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
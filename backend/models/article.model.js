const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
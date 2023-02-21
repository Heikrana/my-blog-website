import mongoose from "mongoose";

const Schema = mongoose.Schema;

const articleSchema = new Schema({});

const Article = mongoose.model("Article", articleSchema);

export { Article };

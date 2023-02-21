import express from "express";
const router = express.Router();

import { Article } from "../models/article.model.js";

router.get("/", async (req, res) => {
	try {
		const articles = await Article.find().limit(); //8
		res.json(articles);
	} catch (err) {
		res.status(400).json(`getArticle: ${err}`);
	}
});

// router.route("/article").post(async (req, res) => {
// 	const id = req.body.pathname;
// 	// console.log(id);
// 	try {
// 		const article = await Article.find({
// 			_id: { $eq: id },
// 		});
// 		// console.log(article);
// 		res.json(article);
// 	} catch (err) {
// 		res.status(400).json("getArticle:", err);
// 	}
// });

export default router;

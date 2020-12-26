const router = require("express").Router();

let Article = require("../models/article.model");

router.route("/").get((req, res) => {
   Article.find().limit(0)
      .then((articles) => res.json(articles))
      .catch((err) => res.status(400).json(`Error ${err}`));
});

module.exports = router;

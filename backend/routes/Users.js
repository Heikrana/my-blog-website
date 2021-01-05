const router = require("express").Router();

let userDetails = require("../models/addUser.model");

router.route("/add").post(async (req, res) => {
   try {
      console.log(req.body);
      res.json("Work in progress");
   } catch (err) {
      res.status(400).json(`Error!!! - ${err}`);
   }
});

module.exports = router;
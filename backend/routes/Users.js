const router = require("express").Router();

let userCredentials = require("../models/addUser.model");

router.route("/add").post(async (req, res) => {
   try {
      const userName = req.body.userCredentials.userName;
      const Email = req.body.userCredentials.id;
      const Password = req.body.userCredentials.password;

      const newUser = new userCredentials({userName, Email, Password});

      const response = await newUser.save();
      //console.log(`Response of newUser.save()`, response);
      res.json("User Added!");

   } catch (err) {
      res.status(400).json(`Error!!! - ${err}`);
   }
});

module.exports = router;

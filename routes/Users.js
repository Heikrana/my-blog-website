import express from "express";
import bcrypt from "bcrypt";

const router = express.Router();

import { User } from "../models/User.model.js";

router.post("/add", async (req, res) => {
	try {
		const userName = req.body.userCredentials.userName;
		const Email = req.body.userCredentials.id;
		const Password = req.body.userCredentials.password;
		const hashedPassword = await bcrypt.hash(Password, 10); //salt rounds default = 10
		const newUser = new User({ userName, Email, Password: hashedPassword });

		await newUser.save();
		res.json("User Added!");
	} catch (err) {
		res.status(400).json(`userAdd: ${err}`);
	}
});

router.post("/get", async (req, res) => {
	try {
		const response = await User.find({
			//getting info of user from DB
			$or: [
				{ userName: { $eq: req.body.userCredentials.user } },
				{ Email: { $eq: req.body.userCredentials.user } },
			],
		});

		// console.log("res", response.length);

		if (response.length == 0) {
			res.status(404).json("Incorrect User");
		} else {
			// console.log(response);
			const password = req.body.userCredentials.password;
			const hash = response[0].Password;
			//compare password hashes
			if (await bcrypt.compare(password, hash)) {
				res.json("Correct");
			} else {
				res.status(406).json("Incorrect Password");
			}
		}
	} catch (err) {
		res.status(400).json(`usercheck: ${err}`);
	}
});

export default router;

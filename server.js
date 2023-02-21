import express from "express";
import mongoose from "mongoose";
import path from "path";

// require("dotenv").config();

const app = express();
app.use(express.json());

/* const URI = process.env.ATLAS_URI;

mongoose.connect(URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
	console.log("mongoDB connection established successfully");
}); */

import Articles from "./routes/Articles.js";
import Users from "./routes/Users.js";

app.use("/articles", Articles);
app.use("/user", Users);

// Serve static files in prodoction
/* if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
} */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`App is running @ Port - ${PORT}`);
});

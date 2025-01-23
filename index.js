require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./utils/db");
const cookiePaser = require("cookie-parser");
const PORT = 5000;
const authRoute = require("./router/auth");
const scholarshipRouter = require("./router/scholarship");
const path = require("path");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookiePaser());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//Routes
app.get("/", (req, res) => {
	res.send("Hello World");
});
app.use("/api/auth", authRoute);
app.use("/api/scholarship", scholarshipRouter);

connectDB().then(() => {
	app.listen(PORT, () => {
		console.log(`Server is running on ${PORT}`);
	});
});

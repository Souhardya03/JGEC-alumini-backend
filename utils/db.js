const mongoose = require("mongoose");
const URL = "mongodb://127.0.0.1:27017/JGEC-Alumni";
const connectDB = async () => {
	try {
		await mongoose.connect(URL);
		console.log("MongoDB Connected");
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};
module.exports = connectDB;

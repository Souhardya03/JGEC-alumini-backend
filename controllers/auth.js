const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const { hashedPassword, verifyPassword } = require("../helpers/passwordHelper");
const {uploadUser} = require("../helpers/upload");

const SignUp = async (req, res) => {
	try {
		const {
			name,
			email,
			password,
			studentId,
			passingYear,
			department,
			residentialAddress,
			professionalAddress,
		} = req.body;

		// Check if email already exists
		const existEmail = await UserModel.findOne({ email });
		if (existEmail) {
			return res.status(400).json({ err: "Email already exists" });
		}

		const hashPassword = hashedPassword(password);

		// Access uploaded files
		const profilePhoto = req.files.profilePhoto
			? `/uploads/${email}/${req.files.profilePhoto[0].filename}`
			: null;
		const paymentReceipt = req.files.paymentReceipt
			? `/uploads/${email}/${req.files.paymentReceipt[0].filename}`
			: null;

		// Create new user
		const user = await UserModel.create({
			name,
			email,
			password: hashPassword,
			studentId,
			passingYear,
			department,
			residentialAddress,
			professionalAddress,
			profilePhoto,
			paymentReceipt,
		});

		res.status(200).json({ message: "User has been created", user });
	} catch (error) {
		console.log(error);
		res.status(500).json({ err: "Internal Server Error" });
	}
};

const Login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await UserModel.findOne({ email }).select({ password: 0 });
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		const isValidPassword = await verifyPassword(email, password);
		if (!isValidPassword) {
			return res.status(401).json({ message: "Invalid password" });
		}
		const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
			expiresIn: "1h",
		});
		res.cookie("user", user, { httpOnly: true });
		res.cookie("token", token, { httpOnly: true });
		return res.status(200).json({ message: "User logged in", user, token });
	} catch (error) {
		console.log(error);
		res.status(500).json({ err: "Internal Server Error" });
	}
};

module.exports = {
	SignUp: [
		uploadUser.fields([
			{ name: "profilePhoto", maxCount: 1 },
			{ name: "paymentReceipt", maxCount: 1 },
		]),
		SignUp,
	],
	Login,
};

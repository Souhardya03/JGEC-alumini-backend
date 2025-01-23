const jwt = require("jsonwebtoken");

const requireSignIn = async (req, res, next) => {
	try {
		const token = req.cookies.token;
		if (!token) {
			return res.status(401).json({ message: "Unauthorized" });
		}
		const decoded = jwt.verify(token, process.env.SECRET_KEY);
		req.user = decoded;
		next();
	} catch (error) {
		res.clearCookie("token");
		res.clearCookie("user");
		console.log("Err: You need to sign in to access this page");
		console.log(error);
	}
};
module.exports = requireSignIn;

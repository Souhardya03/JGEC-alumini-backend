const multer = require("multer");
const fs = require("fs");
const path = require("path");
// Multer storage configuration
const storageUser = multer.diskStorage({
	destination: function (req, file, cb) {
		const userDir = path.join(__dirname, "../uploads", req.body.email);

		// Check if directory exists, if not create it
		if (!fs.existsSync(userDir)) {
			fs.mkdirSync(userDir, { recursive: true });
		}

		cb(null, userDir);
	},
	filename: function (req, file, cb) {
		const uniqueSuffix =
			Date.now() +
			"-" +
			file.originalname.substring(0, file.originalname.indexOf("."));
		cb(
			null,
			file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
		);
	},
});

const storageScholarship = multer.diskStorage({
	destination: function (req, file, cb) {
		const userDir = path.join(__dirname, "../uploads/scholarship");

		// Check if directory exists, if not create it
		if (!fs.existsSync(userDir)) {
			fs.mkdirSync(userDir, { recursive: true });
		}

		cb(null, userDir);
	},
	filename: function (req, file, cb) {
		const uniqueSuffix =
			Date.now() +
			"-" +
			file.originalname.substring(0, file.originalname.indexOf("."));
		cb(
			null,
			req.body.providerName.replace(" ", "-") +
				"-" +
				uniqueSuffix +
				path.extname(file.originalname)
		);
	},
});

const uploadScholarship = multer({ storage: storageScholarship });

const uploadUser = multer({ storage: storageUser });

module.exports = { uploadUser, uploadScholarship };

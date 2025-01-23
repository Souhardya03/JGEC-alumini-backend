const ScholarshipModel = require("../models/ScholarshipModel");
const { uploadScholarship } = require("../helpers/upload");

const ScholarshipCreate = async (req, res) => {
	try {
		const {
			title,
			subtitle,
			description,
			providerName,
			providerDepartment,
			providerAdmissionYear,
			providerPassingYear,
			providerDetails,
			firstSem,
			secondSem,
			thirdSem,
			fourthSem,
			fifthSem,
			whocanApply,
			AgeCriteria,
			amountdetails,
			whentoApply,
		} = req.body;

		const profilePhoto = req.file
			? `/uploads/scholarship/${req.file.filename}`
			: null;

		const scholarship = new ScholarshipModel({
			title,
			subtitle,
			description,
			providerName,
			providerDepartment,
			providerAdmissionYear,
			providerPassingYear,
			providerDetails,
			imageUrl: profilePhoto,
			firstSem,
			secondSem,
			thirdSem,
			fourthSem,
			fifthSem,
			whocanApply,
			AgeCriteria,
			amountdetails,
			whentoApply,
		});

		const savedScholarship = await scholarship.save();
		res.status(201).json({
			message: "Scholarship created successfully!",
			savedScholarship,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "An error occurred while creating the scholarship.",
		});
	}
};

//get scholarships
const getScholarships = async (req, res) => {
	try {
		const scholarships = await ScholarshipModel.find()
			
		res.json(scholarships);
	} catch (error) {
		console.error(error);
		res
			.status(500)
			.json({ error: "An error occurred while fetching scholarships." });
	}
};

module.exports = {
	ScholarshipCreate: [uploadScholarship.single("imageUrl"), ScholarshipCreate],
    getScholarships
};

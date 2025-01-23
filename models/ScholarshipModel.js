const { Schema, model } = require("mongoose");

const ScholarshipSchema = new Schema(
	{
		title: { type: String, required: true },
		subtitle: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},

		providerName: {
			type: String,
			required: true,
		},
		providerDepartment: {
			type: String,
			required: true,
		},
		providerAdmissionYear: {
			type: Number,
			required: true,
		},
		providerPassingYear: {
			type: Number,
			required: true,
		},
		providerDetails: {
			type: String,
			required: true,
		},
		imageUrl: {
			type: String,
			required: true,
		},
		firstSem: {
			type: Boolean,
			required: true,
		},
		secondSem: {
			type: Boolean,
			required: true,
		},
		thirdSem: {
			type: Boolean,
			required: true,
		},
		fourthSem: {
			type: Boolean,
			required: true,
		},
		fifthSem: {
			type: Boolean,
			required: true,
		},

		whocanApply: {
			type: String,
			required: true,
		},
		AgeCriteria: {
			type: String,
			required: true,
		},
		amountdetails: {
			type: String,
			required: true,
		},
		whentoApply: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);
module.exports = model("Scholarship", ScholarshipSchema);

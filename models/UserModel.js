const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		studentId: {
			type: Number,
			required: true,
		},
		passingYear: {
			type: Number,
			required: true,
		},
		department: {
			type: String,
			required: true,
		},
		residentialAddress: {
			type: String,
			required: true,
		},
		professionalAddress: {
			type: String,
			required: true,
		},
		profilePhoto: {
			type: String,
			reuired: true,
			default:null
		},
		paymentReceipt: {
			type: String,
			reuired: true,
			default:null
		},
	},
	{ timestamps: true }
);
module.exports = model("User", UserSchema);

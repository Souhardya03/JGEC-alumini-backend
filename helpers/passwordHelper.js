const { createHmac } = require("node:crypto");
const UserSchema = require("../models/UserModel");

const secret = "hxvkkvhsivhzvlhvivh%R^%^";

const hashedPassword = (password) => {
	const hmac = createHmac("sha256", secret).update(password).digest("hex");
	return hmac;
};

const verifyPassword = async(email,password)=>{
    const User = await UserSchema.findOne({email});
    if(!User) return false;
    const hashedPassword = User.password;
    const hmac = createHmac("sha256", secret).update(password).digest("hex");
    return hmac === hashedPassword;
}

module.exports = {hashedPassword,verifyPassword}
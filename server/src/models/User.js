import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    notification: { type: Boolean, default: false },
    daily_notification: { type: Boolean, default: false },
    review_quality: { type: Number, default: 0 },
    user_type: { type: String, enum: ['client', 'admin', 'owner'], required: true },
    image: { type: String, default: 'no image' }
});

const User = mongoose.model('User', userSchema);

export default User;

// const bcrypt = require('bcryptjs')
// 
// userSchema.methods.encryptPassword = async password => {
//   const salt = await bcrypt.genSalt(10)
//   return await bcrypt.hash(password, salt)
// }
// 
// userSchema.methods.validatePassword = async function (password) {
//   return await bcrypt.compare(password, this.password)
// }
// 
// const User = mongoose.model('User', userSchema);
// 
// module.exports = User;
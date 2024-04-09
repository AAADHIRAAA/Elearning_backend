const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:String,
    password:String,
    name:String,
    dob:Date,
    city:String,
    state:String,
    country:String,
    mobile:Number,
    altMobile:Number,
    gender:String,
    profilePic:String,
    idProof:String,
    signature:String,
    isVerified:Boolean
});
const User = mongoose.model('User', userSchema);
module.exports = User;
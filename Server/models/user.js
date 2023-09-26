//const mongoose = require('mongoose');
//module.exports= mongoose.model('User',{ email:String, password:String, otp : Number });



const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  otp:String,
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  documentNumber: String,
  phone:String,
  address: String,
  department: String,
  province: String,
  latitude: String,
  longitude: String,
},{
  versionKey : false
});

module.exports = { UserSchema };

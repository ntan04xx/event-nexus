const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true}
}); // user ID automatically added by mongoose as default primary key

const User = mongoose.model("User", userSchema);
module.exports = User;

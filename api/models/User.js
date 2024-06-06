const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: String,
}, {timestamps: true});

const userModel = mongoose.model('user', UserSchema);
module.exports = userModel;

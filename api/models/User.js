const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: String,
}, {timestamps: true});

export const userModel = mongoose.model('user',UserSchema);


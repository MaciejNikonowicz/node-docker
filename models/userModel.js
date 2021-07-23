const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "Username required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password required"]
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
const {model, Schema} = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})

const User = model ('User', UserSchema);

module.exports= User;
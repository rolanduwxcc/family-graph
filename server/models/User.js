const { Schema, model } = require('mongoose')

const { Schema } = mongosoose;
// figure we will need these so declaring now
const Family = require('./Family')
const Member = require('./Member')

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 3
    }

});

const User = mongoose.model('User', userSchema);

module.exports = User;
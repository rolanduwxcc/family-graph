const { Schema, model } = require('mongoose');

const { Schema } = mongosoose;

const memberSchema = new Member({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    relation: {
        type: String,
        trim: true
    }
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
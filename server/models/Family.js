const { Schema, model } = require('mongoose');

const { Schema } = mongosoose;

const familySchema = new Member({
    familyName: {
        type: String,
        required: true,
        trim: true
    }
});

const Family = mongoose.model('Family', memberSchema);

module.exports = Family;
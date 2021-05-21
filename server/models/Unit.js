const { Schema, model } = require('mongoose')

const unitSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastNames: [
            {
                type: String,
                trim: true
            }
        ],
        otherNames: [
            {
                type: String,
                trim: true
            }
        ],
        ancestorX: {
            type: Schema.Types.ObjectId,
            ref: 'Unit'
        },
        ancestorY: {
            type: Schema.Types.ObjectId,
            ref: 'Unit'
        },
        descendants: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Unit'
            }
        ],
        birthCountry: {
            type: String,
            trim: true
        },
        homeCountry: {
            type: String,
            trim: true
        },
        imageLink: {
            type: String,
            trim: true
        }
    },
    {
        toJSON: {
            virtuals: true 
        }
    }
);

unitSchema.virtual('descendantCount').get(function() {
    return this.descendants.length;
})

const Unit = model('Unit', unitSchema);
module.exports = Unit;
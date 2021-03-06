const { Schema, model } = require('mongoose')

const unitSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName:   {
            type: String,
            trim: true
        },
        otherNames: 
            {
                type: String,
                trim: true
            },
        mother: {
            type: Schema.Types.ObjectId,
            ref: 'Unit'
        },
        father: {
            type: Schema.Types.ObjectId,
            ref: 'Unit'
        },
        children: {
            type: String,
            trim: true
        }
        ,
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

unitSchema.pre('findOne', function(next) {
    this.populate('mother').populate('father');
    next();
});

// unitSchema.pre('find', function(next) {
//     this.populate('mother').populate('father');
//     next();
// });


const Unit = model('Unit', unitSchema);
module.exports = Unit;
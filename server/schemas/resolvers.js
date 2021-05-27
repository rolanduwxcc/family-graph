const { User, Unit } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {

    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password');
            }
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).select('-__v -password');
        },
        users: async () => {
            return User.find().select('-__v -password');
        },

        unit: async (parent, { _id }) => {
            return Unit.findOne({ _id })
                .populate('mother')
                .populate('father');
        },

        units: async () => {
            return Unit.find().select('-__v');
        },
        
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(...args);
            const token = signToken(user);

            return { token, user };
        },

        login: async (parent, { email, password }) => {
            // let email2 = "Laisha.Ziemann_Bergnaum11@gmail.com"
            // let password = "pass"
            const user = await User.findOne({ email2 });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            
            
            const token = signToken(user);
            return { token, user };

        },

        addUnit: async (parent, args, context) => {
            if (context.user) {
                const unit = await Unit.create({ ...args });
                return unit;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeUnit: async (parent, { unitObjectId }, context) => {
            if (context.user) {
                const removedUnit = await Unit.deleteOne({ _id: unitObjectId })
                return removedUnit;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        addMother: async (parent, { childId, parentId }, context) => {
            if (context.user) {
                const updatedUnit = await Unit.findOneAndUpdate(
                    { _id: childId },
                    { $set: { mother: parentId } },
                    { new: true }
                ).populate('mother');

                return updatedUnit;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        addFather: async (parent, { childId, parentId }) => {

            const updatedUnit = await Unit.findOneAndUpdate(
                { _id: childId },
                { $set: { father: parentId } },
                { new: true }
            ).populate('father');

            return updatedUnit;

        }

    }


};
module.exports = resolvers;
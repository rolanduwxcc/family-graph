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
        users: async() => {
            return User.find().select('-__v -password');
        },

        unit: async (parent, { _id }) => {
            return Unit.findOne({ _id });
        },

        units: async() => {
            return Unit.find().select('-__v');
        }
    },
    
    Mutation: {
        
    }

    // type Query {
    //     me: User
    //     user(username: String!): User
    //     users: [User]
    //     unit(_id: ID!): Unit
    //     units(username: String): [Unit]
    // }
    
    // type Mutation {
    //     login(email: String!, password: String!): Auth
    //     addUser(username: String!, email: String!, password: String!): Auth
    //     addUnit(firstName: String!, lastNames: [String]!): Unit
    // }
};

module.exports = resolvers;
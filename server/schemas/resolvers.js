const { User, Unit } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {

    Query: {
        users: async() => {
            return User.find()
                .select('-__v -password')
        }
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
const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        unitLink: [Unit]
    }

    type Unit {
        _id: ID
        firstName: String
        lastNames: [String]
        otherNames: [String]
        mother: Unit
        father: Unit
        children: [Unit]
        birthCountry: String
        homeCountry: String
        imageLink: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        user(username: String!): User
        users: [User]
        unit(_id: ID!): Unit
        units: [Unit]
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addUnit(firstName: String!, lastNames: [String]!): Unit
        editUnit(_id: ID!): Unit
        removeUnit(_id: ID!): Unit
    }
    
`;

module.exports = typeDefs;
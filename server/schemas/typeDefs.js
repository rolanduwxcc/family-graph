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

    type Query {
        users: [User]

    }
`;
`;

module.exports = typeDefs;
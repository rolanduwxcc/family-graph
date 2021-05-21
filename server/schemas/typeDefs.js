const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
    }

    type Unit {
        _if: ID
        userId: User
        mother: Unit
        father: Unit
        siblings: [Unit]
        children: [Unit]
    }

    type Query {
        users: [User]
    }
`;
`;

module.exports = typeDefs;
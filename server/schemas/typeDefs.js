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
        lastName: String
        otherNames: String
        mother: Unit
        father: Unit
        children: String
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
        
        addUnit(input: NewUnitInput): Unit      
        removeUnit(_id: ID!): Unit

        addMother(childId: ID!, parentId: ID!): Unit
        addFather(childId: ID!, parentId: ID!): Unit
    }

    input NewUnitInput {
        firstName: String! 
        lastName: String! 
        otherNames: String
        children: String
        birthCountry: String
        homeCountry: String
        imageLink: String
    }

    

`;

module.exports = typeDefs;
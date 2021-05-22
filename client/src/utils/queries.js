import gql from 'graphql-tag';

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            unitLink { 
                _id
                firstName
                lastName
            }
        }
    }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      unitLink {
          _id
          firstName
          lastName
          mother
          father
          children {
              firstName
              lastName
          }
          birthCountry
          homeCountry
          imageLink
      }
    }
  }
`;

export const QUERY_UNIT = gql`
  query unit($id: ID!) {
      unit(_id: $id) {
          _id
          firstName
          lastName
          otherNames: [{
              name:''
          }]
          mother
          father
          children {
              firstName
              lastName
          }
          birthCountry
          homeCountry
          imageLink
      }
  }
`;

export const QUERY_UNITS = gql`
 query units($username: String) {
     units(username: $username) {
         _id
         firstName
          lastName
          otherNames {
              firstName
          }
          mother
          father
          children {
              firstName
              lastName
          }
          birthCountry
          homeCountry
          imageLink
     }
 }
`;
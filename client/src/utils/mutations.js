import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_UNIT = gql`
  mutation addUnit($firstName: String!) {
    addUnit(firstName: $firstName) {
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
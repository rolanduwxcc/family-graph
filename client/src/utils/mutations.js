import gql from 'graphql-tag';

//LOGIN_USER to execute the loginUser
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;


//ADD_USER to execute the addUser
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
      lastNames
      otherNames
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

export const REMOVE_UNIT = gql`
  mutation removeUnit($_id: ID!) {
    removeUnit(_id: $id) {
      _id
    }
  }
`;
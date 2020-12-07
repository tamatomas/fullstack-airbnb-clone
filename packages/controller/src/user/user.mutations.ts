import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const REGISTER = gql`
  mutation register($data: RegisterInput!) {
    register(data: $data) {
      id
    }
  }
`;

export const FORGOT_PSWD = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

export const CONFIRM_USER = gql`
  mutation confirmUser($token: String!) {
    confirmUser(token: $token)
  }
`;

export const CHANGE_PSWD = gql`
  mutation changePassword($password: String!, $token: String!) {
    changePassword(email: $email, token: $token)
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHANGE_PSWD = exports.CONFIRM_USER = exports.FORGOT_PSWD = exports.REGISTER = exports.LOGIN = void 0;
const client_1 = require("@apollo/client");
exports.LOGIN = client_1.gql `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;
exports.REGISTER = client_1.gql `
  mutation register($data: RegisterInput!) {
    register(data: $data) {
      id
    }
  }
`;
exports.FORGOT_PSWD = client_1.gql `
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;
exports.CONFIRM_USER = client_1.gql `
  mutation confirmUser($token: String!) {
    confirmUser(token: $token)
  }
`;
exports.CHANGE_PSWD = client_1.gql `
  mutation changePassword($password: String!, $token: String!) {
    changePassword(email: $email, token: $token)
  }
`;
//# sourceMappingURL=user.mutations.js.map
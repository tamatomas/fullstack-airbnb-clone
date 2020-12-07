"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_LISTINGS = exports.USER_DATA = void 0;
const client_1 = require("@apollo/client");
exports.USER_DATA = client_1.gql `
  query data {
    data {
      id
      firstname
      lastname
      email
      phone
      born
    }
  }
`;
exports.USER_LISTINGS = client_1.gql `
  query data {
    data {
      id
      listings {
        id
        title
        description
        price
        currency
        kind
        proptype
        nguests
        dedicated
        beds
        bedrooms
        amenities
        country
        state
        city
        street
        zip
        location
      }
    }
  }
`;
//# sourceMappingURL=user.queries.js.map
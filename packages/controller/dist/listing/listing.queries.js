"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FIND = exports.SEARCH = void 0;
const client_1 = require("@apollo/client");
exports.SEARCH = client_1.gql `
  query search(
    $city: String
    $country: String
    $state: String
    $nguests: Float
  ) {
    search(city: $city, state: $state, country: $country, nguests: $nguests) {
      id
      title
      description
      price
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
`;
exports.FIND = client_1.gql `
  query find($id: Int!) {
    find(id: $id) {
      id
      title
      description
      price
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
`;
//# sourceMappingURL=listing.queries.js.map
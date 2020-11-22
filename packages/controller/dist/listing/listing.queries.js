"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FIND = exports.SEARCH = void 0;
const client_1 = require("@apollo/client");
exports.SEARCH = client_1.gql `
  query search($city: String, $location: JSONObject, $guests: Float) {
    search(city: $city, location: $location, guests: $guests) {
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
`;
exports.FIND = client_1.gql `
  query find($id: Int!) {
    find(id: $id) {
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
`;
//# sourceMappingURL=listing.queries.js.map
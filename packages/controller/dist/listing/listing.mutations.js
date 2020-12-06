"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.UPDATE = exports.CREATE = void 0;
const client_1 = require("@apollo/client");
exports.CREATE = client_1.gql `
  mutation createListing($data: ListingInput!) {
    createListing(data: $data) {
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
exports.UPDATE = client_1.gql `
  mutation updateListing($data: ListingInput!) {
    updateListing(data: $data) {
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
exports.DELETE = client_1.gql `
  mutation deleteListing($id: Int!) {
    deleteListing(id: $id)
  }
`;
//# sourceMappingURL=listing.mutations.js.map
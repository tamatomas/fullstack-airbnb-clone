"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.UPDATE = exports.CREATE = void 0;
const client_1 = require("@apollo/client");
exports.CREATE = client_1.gql `
  query createListing($data: ListingInput!) {
    createListing(data: $data) {
      id
    }
  }
`;
exports.UPDATE = client_1.gql `
  query updateListing($data: ListingInput!) {
    updateListing(data: $data) {
      id
    }
  }
`;
exports.DELETE = client_1.gql `
  query deleteListing($id: Int!) {
    deleteListing(id: $id)
  }
`;
//# sourceMappingURL=listing.mutations.js.map
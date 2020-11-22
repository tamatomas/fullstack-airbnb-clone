import { gql } from "@apollo/client";

export const CREATE = gql`
  query createListing($data: ListingInput!) {
    createListing(data: $data) {
      id
    }
  }
`;

export const UPDATE = gql`
  query updateListing($data: ListingInput!) {
    updateListing(data: $data) {
      id
    }
  }
`;

export const DELETE = gql`
  query deleteListing($id: Int!) {
    deleteListing(id: $id)
  }
`;

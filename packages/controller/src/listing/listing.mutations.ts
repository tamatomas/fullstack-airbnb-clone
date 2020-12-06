import { gql } from "@apollo/client";

export const CREATE = gql`
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

export const UPDATE = gql`
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

export const DELETE = gql`
  mutation deleteListing($id: Int!) {
    deleteListing(id: $id)
  }
`;

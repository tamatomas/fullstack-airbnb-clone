import { gql } from "@apollo/client";

export const SEARCH = gql`
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

export const FIND = gql`
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

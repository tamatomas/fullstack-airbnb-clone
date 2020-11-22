import { gql } from "@apollo/client";

export const SEARCH = gql`
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

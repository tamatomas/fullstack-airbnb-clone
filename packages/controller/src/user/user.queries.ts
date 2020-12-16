import { gql } from "@apollo/client";

export const USER_DATA = gql`
  query data {
    data {
      id
      firstname
      lastname
      email
      phone
      born
      listings {
        id
      }
    }
  }
`;

export const USER_LISTINGS = gql`
  query data {
    data {
      id
      listings {
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
  }
`;

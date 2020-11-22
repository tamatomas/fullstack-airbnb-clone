export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  search: Array<Listing>;
  find: Listing;
  data: User;
};


export type QuerySearchArgs = {
  city?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['JSONObject']>;
  guests?: Maybe<Scalars['Float']>;
};


export type QueryFindArgs = {
  id: Scalars['Int'];
};

export type Listing = {
  __typename?: 'Listing';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  currency: Scalars['String'];
  kind: KindOfPlace;
  proptype: PropertyType;
  nguests: Scalars['Float'];
  dedicated: Scalars['Boolean'];
  beds: Scalars['Float'];
  bedrooms: Scalars['Float'];
  amenities: Scalars['String'];
  country: Scalars['String'];
  state: Scalars['String'];
  city: Scalars['String'];
  street: Scalars['String'];
  zip: Scalars['String'];
  location: Scalars['JSONObject'];
  owner: User;
};

export enum KindOfPlace {
  EntirePlace = 'EntirePlace',
  PrivateRoom = 'PrivateRoom',
  SharedRoom = 'SharedRoom'
}

export enum PropertyType {
  Apartment = 'Apartment',
  House = 'House',
  SecondaryUnit = 'SecondaryUnit',
  UniqueSpace = 'UniqueSpace',
  Bed = 'Bed',
  Hotel = 'Hotel'
}


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone?: Maybe<Scalars['Float']>;
  born: Scalars['JSONObject'];
  listings: Array<Listing>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createListing: Listing;
  updateListing: Listing;
  deleteListing: Scalars['Boolean'];
  register: User;
  login: Scalars['String'];
  forgotPassword: Scalars['Boolean'];
  confirmUser: Scalars['Boolean'];
  changePassword?: Maybe<User>;
};


export type MutationCreateListingArgs = {
  data: ListingInput;
};


export type MutationUpdateListingArgs = {
  data: ListingInput;
};


export type MutationDeleteListingArgs = {
  id: Scalars['Int'];
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationConfirmUserArgs = {
  token: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type ListingInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  kind: KindOfPlace;
  proptype?: Maybe<PropertyType>;
  nguests: Scalars['Float'];
  dedicated?: Maybe<Scalars['Boolean']>;
  beds?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  amenities?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  location: Scalars['JSONObject'];
  ownerid: Scalars['Int'];
};

export type RegisterInput = {
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  phone?: Maybe<Scalars['Float']>;
  born: Scalars['DateTime'];
  password: Scalars['String'];
};


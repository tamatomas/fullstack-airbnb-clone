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
  nguests?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
};


export type QueryFindArgs = {
  id: Scalars['Int'];
};

export type Listing = {
  __typename?: 'Listing';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  kind: KindOfPlaceEnum;
  proptype?: Maybe<PropertyTypeEnum>;
  nguests: Scalars['Float'];
  dedicated?: Maybe<Scalars['Boolean']>;
  beds?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  amenities?: Maybe<Array<Scalars['String']>>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['JSONObject']>;
  finished: Scalars['Boolean'];
  owner: User;
};

export enum KindOfPlaceEnum {
  EntirePlace = 0,
  PrivateRoom = 1,
  SharedRoom = 2
}

export enum PropertyTypeEnum {
  Apartment = 0,
  House = 1,
  SecondaryUnit = 2,
  UniqueSpace = 3,
  Bed = 4,
  Hotel = 5
}


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone?: Maybe<Scalars['Float']>;
  born?: Maybe<Scalars['JSONObject']>;
  listings: Array<Listing>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createListing: Listing;
  updateListing: Listing;
  deleteListing: Scalars['Boolean'];
  register: User;
  login: Scalars['String'];
  logout: Scalars['Boolean'];
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
  kind: KindOfPlaceEnum;
  proptype?: Maybe<PropertyTypeEnum>;
  nguests: Scalars['Float'];
  dedicated?: Maybe<Scalars['Boolean']>;
  beds?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  amenities?: Maybe<Array<Scalars['String']>>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['JSONObject']>;
  ownerid?: Maybe<Scalars['Int']>;
};

export type RegisterInput = {
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  phone?: Maybe<Scalars['Float']>;
  born: Scalars['DateTime'];
  password: Scalars['String'];
};


export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    JSONObject: any;
    DateTime: any;
};
export declare type Query = {
    __typename?: 'Query';
    search: Array<Listing>;
    find: Listing;
    data: User;
};
export declare type QuerySearchArgs = {
    location: Scalars['JSONObject'];
    guests: Scalars['Float'];
    city: Scalars['String'];
};
export declare type QueryFindArgs = {
    id: Scalars['Int'];
};
export declare type Listing = {
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
    location: Scalars['JSONObject'];
    owner: User;
};
export declare enum KindOfPlaceEnum {
    EntirePlace = 0,
    PrivateRoom = 1,
    SharedRoom = 2
}
export declare enum PropertyTypeEnum {
    Apartment = 0,
    House = 1,
    SecondaryUnit = 2,
    UniqueSpace = 3,
    Bed = 4,
    Hotel = 5
}
export declare type User = {
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
export declare type Mutation = {
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
export declare type MutationCreateListingArgs = {
    data: ListingInput;
};
export declare type MutationUpdateListingArgs = {
    data: ListingInput;
};
export declare type MutationDeleteListingArgs = {
    id: Scalars['Int'];
};
export declare type MutationRegisterArgs = {
    data: RegisterInput;
};
export declare type MutationLoginArgs = {
    password: Scalars['String'];
    email: Scalars['String'];
};
export declare type MutationForgotPasswordArgs = {
    email: Scalars['String'];
};
export declare type MutationConfirmUserArgs = {
    token: Scalars['String'];
};
export declare type MutationChangePasswordArgs = {
    password: Scalars['String'];
    token: Scalars['String'];
};
export declare type ListingInput = {
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
    ownerid: Scalars['Int'];
};
export declare type RegisterInput = {
    firstname: Scalars['String'];
    lastname: Scalars['String'];
    email: Scalars['String'];
    phone?: Maybe<Scalars['Float']>;
    born: Scalars['DateTime'];
    password: Scalars['String'];
};

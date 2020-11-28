import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"

const link = createHttpLink({
  uri: "https://fullstack-airbnbclone.herokuapp.com/graphql",
  credentials: "include",
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})

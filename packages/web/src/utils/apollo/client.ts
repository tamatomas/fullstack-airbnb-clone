import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"

const link = createHttpLink({
  uri: "http://localhost:8002/graphql",
  credentials: "include",
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})

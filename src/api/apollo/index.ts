import config from '../../AWScognito'
import gql from 'graphql-tag'

import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { store } from '../../redux/store'
import configTest from './config.json'

const httpLink = createHttpLink({
  uri: `${config.apiGateway.URL}/graphql`
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  let token: string
  if (process.env.NODE_ENV === 'test') {
    token = configTest.test.token
  } else {
    token = store.getState().userState.accessToken || 'false'
  }

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : ''
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

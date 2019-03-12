import gql from 'graphql-tag'

export default gql`
  query hello($name: String) {
    hello(name: $name)
  }
`

import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import React from 'react'

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`

export const Dogs = ({ onDogSelected }: any) => (
  <Query query={GET_DOGS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`

      return (
        <select name="dog" onChange={onDogSelected}>
          {data.dogs.map((dog: any) => (
            <option key={dog.id} value={dog.breed}>
              {dog.breed}
            </option>
          ))}
        </select>
      )
    }}
  </Query>
)

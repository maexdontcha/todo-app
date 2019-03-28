import { client } from '../index'

export const _query = async ({
  variables,
  query
}: {
  variables?: any
  query: any
}) => {
  console.log('hi')
  console.log(
    client
      .query({
        query,
        variables
      })
      .then((result: any) => {
        return result.data
      })
      .catch((err: any) => {
        throw err
      })
  )
  return await client
    .query({
      query,
      variables
    })
    .then((result: any) => {
      return result.data
    })
    .catch((err: any) => {
      throw err
    })
}

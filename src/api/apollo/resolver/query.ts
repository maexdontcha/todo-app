import { client } from '../index'

export const _query = async ({
  variables,
  query
}: {
  variables?: any
  query: any
}) => {
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

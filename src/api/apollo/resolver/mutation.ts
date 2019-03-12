import { client } from '../index'

export const _mutation = async ({
  variables,
  mutation
}: {
  variables?: any
  mutation: any
}) => {
  return await client
    .mutate({
      mutation,
      variables
    })
    .then((result: any) => {
      return result.data
    })
    .catch((err: any) => {
      throw err
    })
}

import { client } from '../index'

export const _mutation = async ({
  variables,
  mutation
}: {
  variables?: any
  mutation: any
}) => {
  return new Promise((resolve, reject) => {
    client
      .mutate({
        mutation,
        variables
      })
      .then((result: any) => {
        resolve(result.data)
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}

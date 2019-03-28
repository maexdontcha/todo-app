import { _mutation } from '../../../resolver/mutation'
import { createTaskMutation } from '../..'

const successTask = {
  workspace: 'PhilippsWorkspace',
  editor: '48fe0a91-9c23-4d6a-b0fb-7ef52161daa9',
  title: 'testTask'
}
const failTask = {
  workspace: 'PhilippsWorkspace',
  editor: 'fail',
  title: 'failTask'
}
//FIXME: Scheinbar nur backend testen -> Möglichkeit mit Component Testing

test('create Task @Dynamo ', async () => {
  await expect(
    _mutation({
      variables: successTask,
      mutation: createTaskMutation
    })
  ).toBe(0)
  await expect(
    _mutation({
      variables: failTask,
      mutation: createTaskMutation
    })
  ).toBe(1)
})

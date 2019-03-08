import { createTaskMutation } from '../../../api/apollo/schema'
import { _mutation } from '../../../api/apollo/resolver/mutation'
import { store } from '../../../redux/store'

export const create = (param: any) => {
  const { workspace, title, beschreibung } = param
  const editor: string = store.getState().userState.userData.idToken.payload
    .name
  return new Promise(async (resolve, reject) => {
    try {
      const res = await _mutation({
        variables: {
          workspace: workspace,
          editor: editor,
          title,
          beschreibung
        },
        mutation: createTaskMutation
      })
      console.log(res)
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
}

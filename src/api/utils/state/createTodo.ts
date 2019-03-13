import { store } from '../../../redux/store'
import { createTodoAction } from '../../../redux/task/taskAction'
import { _mutation } from '../../apollo/resolver/mutation'
import { createTaskMutation } from '../../apollo/schema'
import { addTodoIDB } from '../../indexeddb/action/addTodo'

export const createTodo = async (params?: any) => {
  // get store
  const editor = store.getState().userState.username || undefined
  const workspace = store.getState().userState.workspace || undefined

  // redux
  await store.dispatch(
    createTodoAction({ type: 'ADD_TODO', payload: { title: params.title } })
  )
  //dynamo
  await _mutation({
    variables: {
      workspace,
      editor,
      title: params.title
    },
    mutation: createTaskMutation
  })
    .then(res => {
      addTodoIDB({ workspace, editor, title: params.title, send: true })
        .then(async res => {
          await store.dispatch(
            createTodoAction({
              type: 'UPDATE_TODO',
              payload: { send: true }
            })
          )
        })
        .catch(err => console.log(err))
    })
    .catch(err => {
      addTodoIDB({ workspace, editor, title: params.title, send: false })
        .then(async res => {
          // TODO: implement reduxreducer action zeug
          await store.dispatch(
            createTodoAction({
              type: 'UPDATE_TODO',
              payload: { send: true }
            })
          )
        })
        .catch(err => console.log(err))
    })
  // Dynamo create
  // IndexedDB create (IF dynamo fail then tagged)
}

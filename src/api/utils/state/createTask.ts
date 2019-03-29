import { store } from '../../../redux/store'
import { createTaskAction } from '../../../redux/task/taskAction'
import { _mutation } from '../../apollo/resolver/mutation'
import { createTaskMutation } from '../../apollo/schema'
import { addTaskIDB } from '../../indexeddb/action/task/addTask'
import { ETaskActionTypes } from '../../../redux/task/taskTypes.d'

/*  Workflow for creating Task

1. Läd userdata aus redux 
2. added task mit status false zu redux 
3. versucht task ans backend zu senden 
   a. bei Success zu idb hinzufügen und status auf true setzen, da es am backend an kam
      danach den task im redux store updaten, auch status auf true, da es am backend ist
   b. bei fail zu idb hinzufügen und status auf false, da es nicht versendet werden kann.

*/
export const createTask = async (params?: any) => {
  // get store
  //TODO: Errorhandling for undefined
  //BODY: title
  const editor = store.getState().userState.username || undefined
  const workspace = store.getState().userState.workspace || undefined

  //TODO: create task object for worklow
  //BODY ein Taskobjekt mit type das für alles verwendet werden kann

  // redux
  await store.dispatch(
    createTaskAction({
      type: ETaskActionTypes.ADD_TASK,
      payload: { title: params.title, send: false }
    })
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
      addTaskIDB({ workspace, editor, title: params.title, send: true })
        .then(async res => {
          await store.dispatch(
            createTaskAction({
              type: ETaskActionTypes.UPDATE_TASK,
              payload: { send: true }
            })
          )
        })
        .catch(err => console.log(err))
    })
    .catch(err => {
      addTaskIDB({ workspace, editor, title: params.title, send: false })
        .then(async res => {
          // TODO: add to job queue ?
          // BODY was passiert wenn man offline ist
          await store.dispatch(
            createTaskAction({
              type: ETaskActionTypes.UPDATE_TASK,
              payload: { send: false }
            })
          )
        })
        .catch(err => console.log(err))
    })
}

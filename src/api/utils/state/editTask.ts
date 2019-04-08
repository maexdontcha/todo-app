import { store } from '../../../redux/store'
import { createTaskAction } from '../../../redux/task/taskAction'
import { _mutation } from '../../apollo/resolver/mutation'
import { editTaskMutation } from '../../apollo/schema'
import { ETaskActionTypes, ITaskState } from '../../../redux/task/taskTypes.d'
import { editTaskIDB } from '../../indexeddb/action'
import { ITask } from './stateType.d'

/*  Workflow for creating Task

1. Läd userdata aus redux 
2. edit redux if true keep going and send: false
3. edit dynamo 
   a. bei Success zu edit idb hinzufügen und send auf true setzen, da es am backend an kam
      danach den task im redux store updaten, auch status auf true, da es am backend ist
   b. bei fail zu idb edit und send auf false, da es nicht versendet werden kann.

*/
export const editTask = async (params: ITask) => {
  const task: ITask = { ...params, send: false }
  console.log(task)

  if (
    !store.getState().userState.username ||
    !store.getState().userState.workspace
  )
    throw Error('kein Username oder Store in Redux Store')
  task.editor = store.getState().userState.username
  task.workspace = params.workspace || store.getState().userState.workspace
  // redux

  await store.dispatch(
    createTaskAction({
      type: ETaskActionTypes.UPDATE_TASK,
      payload: task
    })
  )
  //dynamo
  await _mutation({
    variables: task,
    mutation: editTaskMutation(task)
  })
    .then(res => {
      editTaskIDB(task.taskId, { ...task, send: true })
        .then(async res => {
          await store.dispatch(
            createTaskAction({
              type: ETaskActionTypes.UPDATE_TASK,
              payload: { taskId: task.taskId, send: true }
            })
          )
        })
        .catch(err => console.log(err))
    })
    .catch(err => {
      //TODO: ADD TO QUEUE bzw. start job
      //BODY nur wenn offline -> muss background job laufen
    })
}

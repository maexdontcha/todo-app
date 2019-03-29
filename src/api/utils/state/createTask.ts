import { store } from '../../../redux/store'
import { createTaskAction } from '../../../redux/task/taskAction'
import { _mutation } from '../../apollo/resolver/mutation'
import { createTaskMutation } from '../../apollo/schema'
import { addTaskIDB } from '../../indexeddb/action/task/addTask'
import { ETaskActionTypes, ITaskState } from '../../../redux/task/taskTypes.d'

/*  Workflow for creating Task

1. Läd userdata aus redux 
2. added task mit status false zu redux 
3. versucht task ans backend zu senden 
   a. bei Success zu idb hinzufügen und status auf true setzen, da es am backend an kam
      danach den task im redux store updaten, auch status auf true, da es am backend ist
   b. bei fail zu idb hinzufügen und status auf false, da es nicht versendet werden kann.

*/
export const createTask = async (params: ITaskState) => {
  // get store
  if (
    !store.getState().userState.username ||
    !store.getState().userState.workspace
  )
    throw Error('kein Username oder Store in Redux Store')
  const task: ITaskState = params
  const date = new Date().toISOString()
  task.editor = store.getState().userState.username
  task.workspace = params.workspace || store.getState().userState.workspace
  task.taskId = `${task.editor}-${task.title}-${date}`

  // redux
  await store.dispatch(
    createTaskAction({
      type: ETaskActionTypes.ADD_TASK,
      payload: { ...task, send: false }
    })
  )
  //dynamo
  await _mutation({
    variables: task,
    mutation: createTaskMutation(task)
  })
    .then(res => {
      addTaskIDB({ ...task, send: true })
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

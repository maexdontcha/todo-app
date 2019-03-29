import { store } from '../../../redux/store'
import { createTaskAction } from '../../../redux/task/taskAction'
import { _mutation } from '../../apollo/resolver/mutation'
import { createTaskMutation } from '../../apollo/schema'
import { addTaskIDB } from '../../indexeddb/action/task/addTask'
import { ETaskActionTypes, ITaskState } from '../../../redux/task/taskTypes.d'

/*  Workflow for creating Task

1. Läd userdata aus redux 
2. edit redux if true keep going and send: false
3. edit dynamo 
   a. bei Success zu edit idb hinzufügen und send auf true setzen, da es am backend an kam
      danach den task im redux store updaten, auch status auf true, da es am backend ist
   b. bei fail zu idb edit und send auf false, da es nicht versendet werden kann.

*/
export const createTask = async (params: ITaskState) => {
  const task: ITaskState = { ...params, send: false }

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
    mutation: createTaskMutation
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

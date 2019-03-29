import { store } from '../../../redux/store'
import { createTaskAction as TaskAction } from '../../../redux/task/taskAction'
import { _mutation } from '../../apollo/resolver/mutation'
import { deleteTaskMutation } from '../../apollo/schema'
import { ETaskActionTypes, ITaskState } from '../../../redux/task/taskTypes.d'
import { deleteTaskIDB } from '../../indexeddb/action'
import { ITask } from './stateType.d'

/*  Workflow for creating Task

1. delete dynamo if true dann der rest  
*/

//TODO: HOW Handle Delete if you are offline
//BODY was macht man wenn man offline ist und was löschen will ;)
export const deleteTask = async (params: ITask) => {
  const task: ITask = { ...params, send: false }

  //dynamo
  await _mutation({
    variables: task,
    mutation: deleteTaskMutation
  })
    .then(res => {
      deleteTaskIDB(task.taskId)
        .then(async res => {
          await store.dispatch(
            TaskAction({
              type: ETaskActionTypes.DELETE_TASK,
              payload: task
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

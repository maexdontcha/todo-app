import { store } from '../../../redux/store'
import { createTaskAction as TaskAction } from '../../../redux/task/taskAction'
import { _query as query } from '../../apollo/resolver/query'
import { getTasksByEditor } from '../../apollo/schema'
import { loadTasksIDB } from '../../indexeddb/action/task/loadTasks'
import { addTaskIDB } from '../../indexeddb/action/task/addTask'
import {
  ETaskActionTypes,
  ITaskLoadState
} from '../../../redux/task/taskTypes.d'

/*  Workflow for creating Task

1. Läd userdata aus redux 
2. wenn param force true dann läd er aus dynamo
3. ansonsten indexeddb wenn da null dann aus dynamo
3. dann in redux speichern

*/
//FIXME:
export const loadTask = async (params?: ITaskLoadState) => {
  // get store
  if (
    !store.getState().userState.username ||
    !store.getState().userState.workspace
  )
    throw Error('kein Username oder Store in Redux Store')
  const editor = store.getState().userState.username
  const workspace =
    (params && params.workspace) || store.getState().userState.workspace

  if (params && params.force) {
    await query({
      variables: { editor, workspace },
      query: getTasksByEditor
    })
      .then(async res => {
        await res.getTasksByEditor.map((task: any) => {
          addTaskIDB({ ...task, send: true })
            .then(res => {})
            .catch(err => console.log(err))
        })
        await store.dispatch(
          TaskAction({
            type: ETaskActionTypes.FILL_TASKS,
            payload: res
          })
        )
      })
      .catch(err => {
        //TODO: ADD TO QUEUE bzw. start job
        //BODY nur wenn offline -> muss background job laufen
      })
  } else {
    loadTasksIDB()
      .then(async (res: any) => {
        if (res.length === 0) {
          console.log('Load from Dynamo')
          await query({
            variables: { editor, workspace },
            query: getTasksByEditor
          })
            .then(async (res: any) => {
              await res.getTasksByEditor.map((task: any) => {
                addTaskIDB({ ...task, send: true })
                  .then(res => {})
                  .catch(err => console.log(err))
              })
              await store.dispatch(
                TaskAction({
                  type: ETaskActionTypes.FILL_TASKS,
                  payload: res.getTasksByEditor
                })
              )
            })
            .catch(err => {
              //TODO: ADD TO QUEUE bzw. start job
              //BODY nur wenn offline -> muss background job laufen
            })
        } else {
          await store.dispatch(
            TaskAction({
              type: ETaskActionTypes.FILL_TASKS,
              payload: res
            })
          )
        }
      })
      .catch(async err => {
        await query({
          variables: { editor, workspace },
          query: getTasksByEditor
        })
          .then(async res => {
            await res.map((task: any) => {
              addTaskIDB({ ...task, send: true })
                .then(res => {})
                .catch(err => console.log(err))
            })
            await store.dispatch(
              TaskAction({
                type: ETaskActionTypes.FILL_TASKS,
                payload: res.getTasksByEditor
              })
            )
          })
          .catch(err => {
            //TODO: ADD TO QUEUE bzw. start job
            //BODY nur wenn offline -> muss background job laufen
          })
      })
  }
}

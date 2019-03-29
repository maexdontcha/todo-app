import { Reducer } from 'redux'
import { ITaskState, ETaskActionTypes, ITaskReduxAction } from './taskTypes.d'

export const taskReducer: Reducer<{ tasks: ITaskState[] }, ITaskReduxAction> = (
  state = { tasks: [] },
  { type, payload }: { type: any; payload: any }
) => {
  switch (type) {
    case ETaskActionTypes.ADD_TASK: {
      return {
        tasks: [...state.tasks, payload]
      }
    }
    case ETaskActionTypes.TOGGLE_TASK: {
      const { taskId } = payload
      return {
        tasks: state.tasks.map(task =>
          task.taskId === taskId
            ? { ...task, doState: task.doState === 'todo' ? 'done' : 'todo' }
            : task
        )
      }
    }
    //TODO: payload assignen to object for validation
    //BODY create template object auf das payload assigned wird -> dadurch hat man ein valides update objekt
    case ETaskActionTypes.UPDATE_TASK: {
      const { taskId } = payload
      return {
        tasks: state.tasks.map(task =>
          task.taskId === taskId ? { ...task, ...payload } : task
        )
      }
    }
    case ETaskActionTypes.DELETE_TASK: {
      const { taskId } = payload
      return {
        tasks: state.tasks.splice(state.tasks.indexOf(taskId), 1)
      }
    }
    case ETaskActionTypes.CLEAR_TASKS: {
      return {
        tasks: []
      }
    }
    case ETaskActionTypes.FILL_TASKS: {
      return {
        tasks: payload
      }
    }
    default:
      return state
  }
}
export default taskReducer

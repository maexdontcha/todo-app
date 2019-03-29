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
          task.taskId === taskId ? { ...task, done: !task.done } : task
        )
      }
    }
    case ETaskActionTypes.UPDATE_TASK: {
      const { taskId } = payload
      return {
        tasks: state.tasks.map(task =>
          task.taskId === taskId ? { ...task, payload } : task
        )
      }
    }
    case ETaskActionTypes.DELETE_TASK: {
      const { taskId } = payload
      return {
        tasks: state.tasks.map(task => (task.taskId === taskId ? {} : task))
      }
    }
    case ETaskActionTypes.CLEAR_TASKS: {
      return {
        tasks: []
      }
    }
    case ETaskActionTypes.FILL_TASKS: {
      return {
        tasks: []
      }
    }
    default:
      return state
  }
}
export default taskReducer

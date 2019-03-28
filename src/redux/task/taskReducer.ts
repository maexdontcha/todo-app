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
    case ETaskActionTypes.LOAD_TASKS: {
      return {
        tasks: payload
      }
    }
    //TODO: how to handle update state
    case ETaskActionTypes.UPDATE_TASK: {
      return {
        tasks: payload
      }
    }
    case ETaskActionTypes.CLEAR_TASKS: {
      return {
        tasks: []
      }
    }
    default:
      return state
  }
}
export default taskReducer

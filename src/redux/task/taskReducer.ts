import { Reducer } from 'redux'
import { ITaskState, ETaskActionTypes, ITaskReduxAction } from './taskTypes.d'

const taskReducer: Reducer<{ todos: ITaskState[] }, ITaskReduxAction> = (
  state = { todos: [] },
  { type, payload }: { type: any; payload: any }
) => {
  switch (type) {
    case ETaskActionTypes.ADD_TODO: {
      return {
        todos: [...state.todos, payload]
      }
    }
    case ETaskActionTypes.LOAD_TODOS: {
      return {
        todos: payload
      }
    }
    default:
      return state
  }
}
export default taskReducer

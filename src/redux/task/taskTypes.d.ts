import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

// Create Action Constants
export enum ETaskActionTypes {
  ADD_TODO = 'ADD_TODO',
  LOAD_TODOS = 'LOAD_TODOS',
  UPDATE_TODO = 'UPDATE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  CLEAR_TODOS = 'CLEAR_TODOS'
}

// export interface ITaskState {
//   workspace: string
//   taskId?: string
//   creator?: string
//   editor: string
//   title: string
//   description?: string
//   priority?: number
//   project: string
//   parentProject?: string
//   startTime?: string
//   endTime?: string
//   category?: string
//   doState?: string
//   subTasks?: string[]
//   complexity?: number
// }

export interface ITaskState {
  id?: number
  name?: string
  age?: number
}

export interface ITaskReduxAction {
  type: ETaskActionTypes
  payload: ITaskState
}

type toggleThemeActionCreator = ActionCreator<
  ThunkAction<Promise<any>, IThemeState, null, IToggleTheme>
>

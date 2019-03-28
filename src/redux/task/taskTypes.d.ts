import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

// Create Action Constants
export enum ETaskActionTypes {
  ADD_TASK = 'ADD_TASK',
  LOAD_TASKS = 'LOAD_TASKS',
  UPDATE_TASK = 'UPDATE_TASK',
  DELETE_TASK = 'DELETE_TASK',
  CLEAR_TASKS = 'CLEAR_TASKS'
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
  title?: string
  send?: boolean
}

export interface ITaskReduxAction {
  type: ETaskActionTypes
  payload: ITaskState
}

type toggleThemeActionCreator = ActionCreator<
  ThunkAction<Promise<any>, IThemeState, null, IToggleTheme>
>

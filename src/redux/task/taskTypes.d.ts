import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

// Create Action Constants
export enum ETaskActionTypes {
  ADD_TASK = 'ADD_TASK',
  TOGGLE_TASK = 'TOGGLE_TASK',
  UPDATE_TASK = 'UPDATE_TASK',
  DELETE_TASK = 'DELETE_TASK',
  FILL_TASKS = 'FILL_TASKS',
  CLEAR_TASKS = 'CLEAR_TASKS'
}

export interface ITaskState {
  workspace?: string
  taskId?: string
  creator?: string
  editor?: string
  title?: string
  send?: boolean
  description?: string
  priority?: number
  project?: string
  parentProject?: string
  startTime?: string
  endTime?: string
  category?: string
  doState?: string
  subTasks?: string[]
  complexity?: number
}
export interface ITaskLoadState {
  force?: boolean
  workspace?: string
}
export interface ITaskReduxAction {
  type: ETaskActionTypes
  payload: ITaskState | ITaskState[]
}

type toggleThemeActionCreator = ActionCreator<
  ThunkAction<Promise<any>, IThemeState, null, IToggleTheme>
>

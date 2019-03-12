import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

// Create Action Constants
export enum EUserActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

export interface IUserState {
  loggedin: boolean
  username?: string
  email?: string
  jwt?: any
  refreshToken?: any
  userData?: any
}

type TUserPlaylod = IUser

// Interface for Get All Action Type
export interface IUserLogin {
  type: EThemeActionTypes.LOGIN
  payload: IThemeState
}

type toggleThemeActionCreator = ActionCreator<
  ThunkAction<Promise<any>, IThemeState, null, IToggleTheme>
>

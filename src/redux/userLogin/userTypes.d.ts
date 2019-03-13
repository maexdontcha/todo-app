import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

// Create Action Constants
export enum EUserActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

export interface IUserState {
  loggedin: boolean
  idToken?: string
  username?: string
  workspace?: string
  name?: string
  email?: string
  accessToken?: string
  refreshToken?: string
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

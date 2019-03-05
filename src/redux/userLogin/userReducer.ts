import { Reducer } from 'redux'
import { IUserState, EUserActionTypes, IUserLogin } from './userTypes.d'

const initialThemeState: IUserState = {
  loggedin: false
}

export const userReducer: Reducer<IUserState, IUserLogin> = (
  state = initialThemeState,
  action
) => {
  switch (action.type) {
    case EUserActionTypes.LOGIN: {
      return {
        ...state,
        loggedin: true,
        userData: action.payload
      }
    }
    case EUserActionTypes.LOGOUT: {
      return {
        ...state,
        loggedin: false,
        userData: action.payload
      }
    }
    default:
      return state
  }
}

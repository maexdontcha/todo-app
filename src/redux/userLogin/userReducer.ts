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
        idToken: action.payload.idToken.jwtToken,
        username: action.payload.idToken.payload.sub,
        workspace: action.payload.idToken.payload['custom:workspace'],
        name: action.payload.idToken.payload.name,
        email: action.payload.idToken.payload.email,
        accessToken: action.payload.accessToken.jwtToken,
        refreshToken: action.payload.refreshToken.token
      }
    }
    case EUserActionTypes.LOGOUT: {
      return {
        ...state,
        loggedin: false,
        idToken: action.payload.idToken.jwtToken,
        username: action.payload.idToken.payload.sub,
        workspace: action.payload.idToken.payload['custom:workspace'],
        name: action.payload.idToken.payload.name,
        email: action.payload.idToken.payload.email,
        accessToken: action.payload.accessToken.jwtToken,
        refreshToken: action.payload.refreshToken.token
      }
    }
    default:
      return state
  }
}

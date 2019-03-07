import { Reducer } from 'redux'
import {
  ISnackbarState,
  EThemeActionTypes,
  IToggleTheme
} from './snackbarTypes.d'

const initialThemeState: ISnackbarState = {
  darkMode: false
}

export const snackbarReducer: Reducer<ISnackbarState, IToggleTheme> = (
  state = initialThemeState,
  action
) => {
  switch (action.type) {
    case EThemeActionTypes.TOGGLE: {
      return {
        ...state,
        darkMode: action.payload === true ? false : true
      }
    }
    default:
      return state
  }
}

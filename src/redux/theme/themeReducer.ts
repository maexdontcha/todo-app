import { Reducer } from 'redux'
import { IThemeState, EThemeActionTypes, IToggleTheme } from './themeTypes.d'

const initialThemeState: IThemeState = {
  darkMode: false
}

export const themeReducer: Reducer<IThemeState, IToggleTheme> = (
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

// Import Reducer type
import { Dispatch, AnyAction } from 'redux'

import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

// Import Character Typing
import {
  IThemeState,
  EThemeActionTypes,
  toggleThemeActionCreator,
  TThemePlaylod,
  IToggleTheme
} from './themeTypes.d'

export const toggleTheme: ActionCreator<
  ThunkAction<Promise<any>, IThemeState, null, IToggleTheme>
> = (response: TThemePlaylod) => {
  return async (dispatch: Dispatch<AnyAction>): Promise<any> => {
    try {
      dispatch({
        payload: response.payload,
        // characters: response.data.results,
        type: EThemeActionTypes[response.type]
      })
    } catch (err) {
      console.error(err)
    }
  }
}

// Import Reducer type
import { Dispatch, AnyAction } from 'redux'

import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

// Import Character Typing
import {
  IUserState,
  EUserActionTypes,
  TUserPlaylod,
  IUserLogin
} from './userTypes.d'

export const userLogin: ActionCreator<
  ThunkAction<Promise<any>, IUserState, null, IUserLogin>
> = (response: TUserPlaylod) => {
  return async (dispatch: Dispatch<AnyAction>): Promise<any> => {
    try {
      dispatch({
        payload: response.payload,
        // characters: response.data.results,
        type: EUserActionTypes[response.type]
      })
    } catch (err) {
      console.error(err)
    }
  }
}

// export const loadUserInformation: ActionCreator<
//   ThunkAction<Promise<any>, IUserState, null, IUserLogin>
// > = () => {
//   return async (dispatch: Dispatch<AnyAction>): Promise<any> => {
//     try {
//       dispatch({
//         payload: {
//           username: 'max',
//           email: 'max@irgenwas'
//         },
//         // characters: response.data.results,
//         type: EUserActionTypes.LOGIN
//       })
//     } catch (err) {
//       console.error(err)
//     }
//   }
// }

// Import Reducer type
import { Dispatch, AnyAction } from 'redux'

import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
// Import Character Typing
import { ITaskState, ETaskActionTypes, ITaskReduxAction } from './taskTypes.d'

export const createTaskAction: ActionCreator<
  ThunkAction<Promise<any>, ITaskState, null, ITaskReduxAction>
> = (obj: ITaskReduxAction) => {
  return async (dispatch: Dispatch<AnyAction>): Promise<any> => {
    try {
      dispatch({
        payload: obj.payload,
        type: ETaskActionTypes[obj.type]
      })
    } catch (err) {
      console.error(err)
    }
  }
}

import { ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
// Import Character Typing
import { ICharacter, ICharacterState } from '../reducers/appReducer'

// Create Action Constants
export enum CharacterActionTypes {
  ADD = 'ADD',
  EDIT = 'EDIT'
}

// Interface for Get All Action Type
export interface IAddAction {
  type: CharacterActionTypes.ADD
  paylod: ICharacter[]
}

/* 
Combine the action types with a union (we assume there are more)
example: export type CharacterActions = IGetAllAction | IGetOneAction ... 
*/
// export type CharacterActions = IAddAction

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const addName: ActionCreator<
  ThunkAction<Promise<any>, ICharacterState, null, IAddAction>
> = (response: ICharacter) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        paylod: [response],
        // characters: response.data.results,
        type: CharacterActionTypes.ADD
      })
    } catch (err) {
      console.error(err)
    }
  }
}

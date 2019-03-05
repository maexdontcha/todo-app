// Import Reducer type
import { Reducer } from 'redux'
import { IAddAction, CharacterActionTypes } from '../actions/appAction'

// Define the Character type
export interface ICharacter {
  name: string
}

// Define the Character State
export interface ICharacterState {
  readonly characters: ICharacter[]
}

// Define the initial state
const initialCharacterState: ICharacterState = {
  characters: []
}

const characterReducer: Reducer<ICharacterState, IAddAction> = (
  state = initialCharacterState,
  action
) => {
  switch (action.type) {
    case CharacterActionTypes.ADD: {
      return {
        ...state,
        characters: [...state.characters, ...action.paylod]
      }
    }
    default:
      return state
  }
}

export { characterReducer }

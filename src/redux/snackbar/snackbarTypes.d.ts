import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

// Create Action Constants
export enum EThemeActionTypes {
  TOGGLE = 'TOGGLE',
  ADD = 'ADD'
}

export enum EColors {
  RED = 'red',
  GREEN = 'green'
}

export interface ISnackbarState {
  darkMode?: boolean
  color?: string
}

type TThemePlaylod = IToggleTheme | IAddTheme

// export declare type EThemeActionValues =
//   | EThemeActionTypes.TOGGLE
//   | EThemeActionTypes.ADD

// Interface for Get All Action Type
export interface IToggleTheme {
  type: EThemeActionTypes.TOGGLE
  payload: boolean
}

type toggleThemeActionCreator = ActionCreator<
  ThunkAction<Promise<any>, IThemeState, null, IToggleTheme>
>

export interface IAddColor {
  type: EThemeActionTypes.ADD
  payload: EColors
}

type addThemeActionCreator = ActionCreator<
  ThunkAction<Promise<any>, IThemeState, null, IAddColor>
>

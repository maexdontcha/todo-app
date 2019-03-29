/*  Imports from Redux:
 applyMiddleware: Applies middleware to the dispatch method of the Redux store
 combineReducers: Merges reducers into one
 createStore: Creates a Redux store that holds the state tree
 Store: The TS Type used for the store, or state tree
 */
import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
  compose
} from 'redux'
/*  Thunk
Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
*/
import thunk from 'redux-thunk'
// Import reducers and state type

import { IThemeState } from './theme/themeTypes.d'
import { themeReducer } from './theme/themeReducer'

import { IUserState } from './userLogin/userTypes.d'
import { ITaskState } from './task/taskTypes.d'
import { userReducer } from './userLogin/userReducer'
import taskReducer from './task/taskReducer'
import { userLogin } from './userLogin/userAction'

// Create an interface for the application state

// TODO: taskState funktioniert nur mit any und nicht mit dem ITaskState
//BODY warum funktioniert das nicht?
export interface IAppState {
  themeState: IThemeState
  userState: IUserState
  taskState: any
}

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
  themeState: themeReducer,
  userState: userReducer,
  taskState: taskReducer
})
// @ts-ignore: Wait fix from material-UI
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Create a configure store function of type `IAppState`
// TODO: Store any typisieren dem richtigen vlt dispatcher
//BODY Typisierung hinzufügen
export default function configureStore(): Store<IAppState, any> {
  return createStore(
    rootReducer,
    /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
  )
}

// export default function configureStore(): Store<IAppState, any> {
//   return createStore(rootReducer, undefined, applyMiddleware(thunk))
// }

// Import the store function and state

// Generate the store
export const store = configureStore()

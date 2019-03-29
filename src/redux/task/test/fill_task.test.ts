import { createTaskAction } from '../taskAction'
import { ETaskActionTypes } from '../taskTypes.d'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import taskReducer from '../taskReducer'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const updateTask = [
  {
    taskId: '123',
    title: 'test',
    editor: 'philipp',
    workspace: 'PhilippsWorkspace',
    project: 'inbox'
  },
  {
    taskId: '1234',
    title: 'test',
    editor: 'philipp',
    workspace: 'PhilippsWorkspace',
    project: 'inbox'
  }
]

const initialState = { tasks: [] }
describe('Init Store', () => {
  let store: any
  // set up a fake store for all our tests
  beforeEach(() => {
    store = mockStore(initialState)
  })
  it('fill Task Actions', async () => {
    await store
      .dispatch(
        createTaskAction({
          type: ETaskActionTypes.FILL_TASKS,
          payload: updateTask
        })
      )
      .then(() =>
        expect(store.getActions()).toContainEqual({
          type: ETaskActionTypes.FILL_TASKS,
          payload: updateTask
        })
      )
  })
  it('fill Task Reducer', () => {
    expect(
      taskReducer(initialState, {
        type: ETaskActionTypes.FILL_TASKS,
        payload: updateTask
      })
    ).toEqual({ tasks: updateTask })
  })
})

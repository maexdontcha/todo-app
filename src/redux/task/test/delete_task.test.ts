import { createTaskAction } from '../taskAction'
import { ETaskActionTypes } from '../taskTypes.d'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import taskReducer from '../taskReducer'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const updateTask = {
  taskId: '123',
  title: 'updateTask'
}
const failTask = {
  taskId2: '123',
  title: 'updateTask'
}

const initialState = {
  tasks: [
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
}
describe('Init Store', () => {
  let store: any
  // set up a fake store for all our tests
  beforeEach(() => {
    store = mockStore(initialState)
  })
  it('delete Task Actions', async () => {
    await store
      .dispatch(
        createTaskAction({
          type: ETaskActionTypes.DELETE_TASK,
          payload: updateTask
        })
      )
      .then(() =>
        expect(store.getActions()).toContainEqual({
          type: ETaskActionTypes.DELETE_TASK,
          payload: updateTask
        })
      )
  })
  it('delete Task Reducer', () => {
    expect(
      taskReducer(initialState, {
        type: ETaskActionTypes.DELETE_TASK,
        payload: updateTask
      })
    ).toEqual(
      expect.objectContaining({
        tasks: expect.arrayContaining([expect.not.objectContaining(updateTask)])
      })
    )
  })
})
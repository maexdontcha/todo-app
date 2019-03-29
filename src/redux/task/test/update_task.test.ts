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
    }
  ]
}
describe('Init Store', () => {
  let store: any
  // set up a fake store for all our tests
  beforeEach(() => {
    store = mockStore(initialState)
  })
  it('add Task Actions', async () => {
    await store
      .dispatch(
        createTaskAction({
          type: ETaskActionTypes.UPDATE_TASK,
          payload: updateTask
        })
      )
      .then(() =>
        expect(store.getActions()).toContainEqual({
          type: ETaskActionTypes.UPDATE_TASK,
          payload: updateTask
        })
      )
  })
  it('update Task Reducer', () => {
    expect(
      taskReducer(initialState, {
        type: ETaskActionTypes.UPDATE_TASK,
        payload: updateTask
      })
    ).toMatchObject({ tasks: [updateTask] })
  })
  expect(
    taskReducer(initialState, {
      type: ETaskActionTypes.UPDATE_TASK,
      payload: failTask
    })
  ).not.toMatchObject({ tasks: [updateTask] })
})

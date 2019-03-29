import { createTaskAction } from '../taskAction'
import { ETaskActionTypes } from '../taskTypes.d'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import taskReducer from '../taskReducer'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const updateTask = {
  taskId: '123'
}
const updateTask2 = {
  taskId: '345'
}
const failTask = {
  taskId: '4567'
}

const initialState = {
  tasks: [
    {
      taskId: '123',
      title: 'test',
      editor: 'philipp',
      workspace: 'PhilippsWorkspace',
      project: 'inbox',
      doState: 'todo'
    },
    {
      taskId: '345',
      title: 'test',
      editor: 'philipp',
      workspace: 'PhilippsWorkspace',
      project: 'inbox',
      doState: 'done'
    }
  ]
}
describe('Init Store', () => {
  let store: any
  // set up a fake store for all our tests
  beforeEach(() => {
    store = mockStore(initialState)
  })
  it('Toggle Task Actions', async () => {
    await store
      .dispatch(
        createTaskAction({
          type: ETaskActionTypes.TOGGLE_TASK,
          payload: updateTask
        })
      )
      .then(() =>
        expect(store.getActions()).toContainEqual({
          type: ETaskActionTypes.TOGGLE_TASK,
          payload: updateTask
        })
      )
  })
  it('toggle Task Reducer', () => {
    expect(
      taskReducer(initialState, {
        type: ETaskActionTypes.TOGGLE_TASK,
        payload: updateTask2
      })
    ).toEqual(
      expect.objectContaining({
        tasks: expect.arrayContaining([
          expect.objectContaining({
            taskId: '345',
            doState: 'todo'
          })
        ])
      })
    )
  })
  expect(
    taskReducer(initialState, {
      type: ETaskActionTypes.TOGGLE_TASK,
      payload: updateTask
    })
  ).toEqual(
    expect.objectContaining({
      tasks: expect.arrayContaining([
        expect.objectContaining({
          taskId: '123',
          doState: 'done'
        })
      ])
    })
  )
  expect(
    taskReducer(initialState, {
      type: ETaskActionTypes.TOGGLE_TASK,
      payload: failTask
    })
  ).not.toMatchObject({ tasks: [failTask] })
})

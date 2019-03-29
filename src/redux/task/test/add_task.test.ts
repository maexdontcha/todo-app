import { createTaskAction } from '../taskAction'
import { ETaskActionTypes } from '../taskTypes.d'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import taskReducer from '../taskReducer'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const successTask = { title: 'test' }

const initialState = {
  tasks: []
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
          type: ETaskActionTypes.ADD_TASK,
          payload: successTask
        })
      )
      .then(() =>
        expect(store.getActions()).toContainEqual({
          type: ETaskActionTypes.ADD_TASK,
          payload: successTask
        })
      )
  })
  it('add Task Reducer', () => {
    expect(
      taskReducer(initialState, {
        type: ETaskActionTypes.ADD_TASK,
        payload: successTask
      })
    ).toMatchObject({ tasks: [successTask] })
  })
})

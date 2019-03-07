// __tests__/CheckboxWithLabel-test.js
import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import { Provider } from 'react-redux'
// import { store } from '../../redux'
import renderer from 'react-test-renderer'

import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure, mount, ReactWrapper } from 'enzyme'
import configureStore from 'redux-mock-store'

// import {
//   OutlinedTextField,
//   LoginButton,
//   IconLabelButtons,
//   CircularIndeterminate
// } from '../../../components'

import { handleSubmit, validateForm } from '../Function.loginForm'
// automatically unmount and cleanup DOM after the test is finished.

// const mockStore = configureStore()

// configure({ adapter: new Adapter() })

describe('SignupForm', () => {
  afterEach(cleanup)
  // let store, wrapper: ReactWrapper
  // beforeEach(() => {
  //   store = mockStore('')
  //   wrapper = mount(
  //     <Provider store={store}>
  //       <SignupForm />
  //     </Provider>
  //   )
  // })

  it('Render SignupForm and find Button', async () => {
    await expect(() => {
      validateForm({ email: '1', password: '' })
    }).toThrow()
    // expect(validateForm({ email: '', password: '' })).toThrow()
  })

  expect(() => {
    validateForm({ email: '', password: '' })
  }).toThrow()

  expect(() => {
    validateForm({ email: 'a', password: '' })
  }).toThrow()

  expect(() => {
    validateForm({ email: '', password: 'b' })
  }).toThrow()
})

// const i = wrapper.find(Test)
// expect(wrapper.find(Test)).toHaveLength(1)

// console.log(wrapper.debug())

// wrapper.props()
//

// expect(x).toHaveLength(1)

// expect(
//   x.simulate('click', {
//     preventDefault() {}
//   })
// ).toBeDefined()
// expect(x.simulate('click'))

// expect(mockCallback.mock.calls.length).toBe(1)
// expect(wrapper.find(Test).prop()).toEqual('asd')
// const html = shallow(
//   <Provider store={store}>
//     <Test />
//   </Provider>
// ).dive()

// const html = shallow(<Test store={store} />)

// expect(wrapper.find(Test)).toHaveLength(1)

// const html = shallow(
//   <div>
//     <form />
//   </div>
// )
// const modal = html.find('IconLabelButtons')
// expect(modal).toMatchSnapshot()

// html.find('form').simulate('click')
// const wrapper = shallow(<SignupForm />)

// if (modal) {
//   console.log(modal)
//   modal.simulate('click')
// }

// expect(queryByLabelText(/off/i)).toBeTruthy()

// fireEvent.click(getByLabelText(/off/i))

// expect(queryByLabelText(/on/i)).toBeTruthy()

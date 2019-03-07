// __tests__/CheckboxWithLabel-test.js
import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import SignupForm from './signupForm'
import { Provider } from 'react-redux'
// import { store } from '../../redux'
import renderer from 'react-test-renderer'

import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure, mount } from 'enzyme'
import configureStore from 'redux-mock-store'

import {
  OutlinedTextField,
  LoginButton,
  IconLabelButtons,
  CircularIndeterminate
} from '../../components'
// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

const mockStore = configureStore()

configure({ adapter: new Adapter() })
describe('SignupForm', () => {
  let store, wrapper: any, wrapper2: any
  beforeEach(() => {
    store = mockStore('')
    wrapper = shallow(
      <Provider store={store}>
        <div />
      </Provider>
    )

    wrapper2 = mount(
      <Provider store={store}>
        <div />
      </Provider>
    )
  })

  it('Render SignupForm and find Button', () => {
    const mockCallback = jest.fn()
    // const i = wrapper.find(Test)
    // expect(wrapper.find(Test)).toHaveLength(1)
    const x = wrapper2
      // .find(Test)
      // .shallow()
      .find(IconLabelButtons)

    // expect(x).toHaveLength(1)
    expect(x.exists()).toEqual(true)

    expect(
      x.simulate('click', {
        preventDefault() {}
      })
    ).toBeDefined()
    // expect(x.simulate('click'))
    console.log(x.state())

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
  })
})

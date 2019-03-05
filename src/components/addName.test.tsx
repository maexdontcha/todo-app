import React from 'react'
import ReactDOM from 'react-dom'
import { store } from '../redux'
/* Make the store available to all container 
components in the application without passing it explicitly */
import { Provider } from 'react-redux'

import { AddName } from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <AddName />
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

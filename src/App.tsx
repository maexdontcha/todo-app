import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Layout from './pages/Layout'
class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      <Layout />
      // </Provider>
    )
  }
}

export default App

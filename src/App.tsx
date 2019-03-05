import React, { Component } from 'react'
import { IAppState } from './redux/store'
import { connect } from 'react-redux'
import { BrowserRouter, Link } from 'react-router-dom'

import { Login } from './views'
import { DesktopNavigation } from './components'
import { Content } from './containers'
import { userLogin } from './redux/userLogin'

interface IProps {
  darkMode: boolean
  userLoginState: any
  userLogin: any
}
interface IState {}

class App extends Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    // Inti Login Load from Localstorage!!!
    // props.userLogin({ type: 'LOGIN' })
  }
  render() {
    const { darkMode, userLoginState, userLogin } = this.props
    const loggedIn = userLoginState.loggedin
    console.log(userLoginState)
    return loggedIn ? (
      <BrowserRouter>
        <React.Fragment>
          <DesktopNavigation />
          <Content />
          <button
            onClick={() => {
              userLogin({ type: 'LOGOUT' })
            }}
          >
            Logout
          </button>
          <div>{darkMode === true ? 'true' : 'false'}</div>
        </React.Fragment>
      </BrowserRouter>
    ) : (
      <Login />
    )
  }
}

const mapStateToProps = (store: IAppState) => {
  return {
    darkMode: store.themeState.darkMode || false,
    userLoginState: store.userState
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    userLogin: (transfer: any) =>
      dispatch(
        userLogin({
          payload: transfer.payload || {},
          type: transfer.type
        })
      )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

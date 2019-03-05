// React
import React, { Component } from 'react'
import { BrowserRouter, Link, withRouter } from 'react-router-dom'

// React-Redux
import { userLogin } from './redux/userLogin'
import { IAppState } from './redux/store'
import { connect } from 'react-redux'

// AWS API
import { Auth } from 'aws-amplify'

// _component
import { DesktopNavigation } from './components'

// _container
import { Content } from './containers'

// _views
import { Login } from './views'

// _APIs // Libary
import { AWSLogout } from './api'
interface IProps {
  darkMode: boolean
  userLoginState: any
  userLogin: any
}
interface IState {}

class App extends Component<IProps, IState> {
  constructor(props: any) {
    super(props)

    Auth.currentSession()
      .then(token => {
        props.userLogin({
          payload: token,
          type: 'LOGIN'
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleLogout() {
    AWSLogout()
    this.props.userLogin({ type: 'LOGOUT' })
  }

  render() {
    const {
      darkMode,
      userLoginState: { loggedin }
    } = this.props

    return loggedin ? (
      <BrowserRouter>
        <React.Fragment>
          <DesktopNavigation />
          <Content />
          <button onClick={this.handleLogout.bind(this)}>Logout</button>
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

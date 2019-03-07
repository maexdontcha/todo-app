// React
import React, { Component } from 'react'
import {
  BrowserRouter,
  Link,
  withRouter,
  Route,
  Switch
} from 'react-router-dom'

// React-Redux
import { userLogin } from './redux/userLogin'
import { IAppState } from './redux/store'
import { connect } from 'react-redux'

// AWS API
import { Auth } from 'aws-amplify'

// _component
import { DesktopNavigation, CircularIndeterminate } from './components'

// _container
import { Content } from './containers'

// _views
import { Login, Register } from './views'

// _APIs // Libary
import { AWSLogout } from './api'

// material-UI and Styles
import { MuiThemeProvider } from '@material-ui/core/styles'

import { theme as defaultTheme } from './theme'
import { themered as defaultThemered } from './theme'

import Paper from '@material-ui/core/Paper'

interface IProps {
  darkMode: boolean
  userLoginState: any
  userLogin: any
}
interface IState {
  theme: boolean
}

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
    this.state = { theme: true }
  }

  handleLogout() {
    AWSLogout()
    this.props.userLogin({ type: 'LOGOUT' })
  }

  renderMainFrame() {
    const { darkMode } = this.props
    return (
      <BrowserRouter>
        <React.Fragment>
          <DesktopNavigation />
          <Content />
          <button onClick={this.handleLogout.bind(this)}>Logout</button>
          <div>{darkMode === true ? 'true' : 'false'}</div>
        </React.Fragment>
      </BrowserRouter>
    )
  }

  renderNoLoginMode() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route component={Login} />
        </Switch>
      </BrowserRouter>
    )
  }

  render() {
    const {
      darkMode,
      userLoginState: { loggedin }
    } = this.props
    return (
      <MuiThemeProvider
        theme={this.state.theme ? defaultTheme : defaultThemered}
      >
        <Paper square={true}>
          {loggedin ? this.renderMainFrame() : this.renderNoLoginMode()}
        </Paper>
        <button
          onClick={() => {
            this.setState({ theme: !this.state.theme })
          }}
        />
      </MuiThemeProvider>
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

/* <button
onClick={() => {
  this.setState({ theme: !this.state.theme })
}}
/>
<CircularIndeterminate /> */

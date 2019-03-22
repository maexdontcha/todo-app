// React
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Link,
  withRouter,
  Route,
  Switch
} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// React-Redux
import { userLogin } from './redux/userLogin'
import { IAppState } from './redux/store'
import { connect } from 'react-redux'

// AWS API
import { Auth } from 'aws-amplify'

// _container
import { Content } from './containers'

// _views
import { Login, Register } from './views'

// _APIs // Libary
import { AWSLogout } from './api'

// material-UI and Styles
import { MuiThemeProvider } from '@material-ui/core/styles'
import { lightTheme } from './theme'
import { darkTheme } from './theme'
import Paper from '@material-ui/core/Paper'
import { BottomNavigation } from './containers/'
import { Tabbar, FabButton } from './components'
import CreateTaskDrawer from './containers/drawer/createTask/SFC.createTask'
interface IProps {
  darkMode: boolean
  userLoginState: any
  userLogin: any
}
interface IState {
  theme: boolean
  title: string
  changeHeader: boolean
}

class App extends Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = { theme: true, title: 'Inbox', changeHeader: false }
    Auth.currentSession()
      .then(token => {
        props.userLogin({
          payload: token,
          type: 'LOGIN'
        })
      })
      .catch(err => {
        // console.log(`${err} text`)
      })
    this.setTitle = this.setTitle.bind(this)
    this.onScrollNavbar = this.onScrollNavbar.bind(this)
  }

  handleLogout() {
    AWSLogout()
    this.props.userLogin({ type: 'LOGOUT' })
  }

  setTitle(name: string) {
    this.setState({ title: name })
  }
  onScrollNavbar() {
    console.log('calledscroll')
    var n: any = ReactDOM.findDOMNode(this) || 0

    if (n.scrollTop >= 44) {
      if (!this.state.changeHeader) {
        this.setState({ changeHeader: true })
      }
    }
    if (n.scrollTop < 44) {
      if (this.state.changeHeader) {
        this.setState({ changeHeader: false })
      }
    }
  }

  renderMainFrame() {
    console.log('calledrender')
    return (
      <BrowserRouter>
        <React.Fragment>
          <Tabbar
            theme={this.state.theme}
            title={this.state.title}
            changeHeader={this.state.changeHeader}
          />
          <Content />
          <button onClick={this.handleLogout.bind(this)}>Logout</button>
          <CreateTaskDrawer />
          <BottomNavigation setTitle={this.setTitle} />
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
      <MuiThemeProvider theme={this.state.theme ? lightTheme : darkTheme}>
        <React.Fragment>
          <Paper
            square={true}
            style={{ height: '100vh', overflow: 'auto' }}
            onScroll={() => {
              this.onScrollNavbar()
            }}
          >
            {loggedin ? this.renderMainFrame() : this.renderNoLoginMode()}
            <button
              onClick={() => {
                this.setState({ theme: !this.state.theme })
              }}
            >
              theme
            </button>
          </Paper>
        </React.Fragment>
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

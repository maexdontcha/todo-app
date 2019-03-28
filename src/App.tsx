/* eslint-disable no-restricted-globals */

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
import { CreateTaskDrawer } from './containers'
import { loadTodos, clearTodos } from './api/indexeddb/action'
import { Database } from './api/indexeddb/db'
import { createTodo } from './api/utils/state/createTask'
interface IProps {
  darkMode: boolean
  userLoginState: any
  userLogin: any
  taskLoad: Function
  clearTodos: Function
}
interface IState {
  theme: boolean
  readyToAdd: boolean
  successfullyInstalled: boolean
  acceptedInstall: boolean
  declinedInstall: boolean
  title: string
  changeHeader: boolean
}
declare const window: any

class App extends Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    props.taskLoad()

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
    this.state = {
      theme: true,
      title: 'Inbox',
      changeHeader: false,
      readyToAdd: false,
      successfullyInstalled: false,
      acceptedInstall: false,
      declinedInstall: false
    }
    this.addToHome = this.addToHome.bind(this)
    this.setTitle = this.setTitle.bind(this)
    this.onScrollNavbar = this.onScrollNavbar.bind(this)
    this.shouldShowAddButton = this.shouldShowAddButton.bind(this)
    this.openWindowOrTab = this.openWindowOrTab.bind(this)
  }
  componentDidMount() {
    // check if user is already running app from home screen
    if (window.matchMedia('(display-mode: standalone)').matches) {
      console.log('App is already installed and running in standalone')
      this.setState({
        successfullyInstalled: true
      })
    } else {
      window.addEventListener('beforeinstallprompt', (e: any) => {
        console.log('beforeinstallprompt has fired', e)
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault()
        // Stash the event so it can be triggered later.
        window.deferredPrompt = e
        this.setState({
          readyToAdd: true
        })
      })
      // this event fires only when app is installed
      window.addEventListener('appinstalled', (evt: any) => {
        console.log('App was successfully installed')
        this.setState({
          successfullyInstalled: true
        })
      })
    }
  }
  addToHome() {
    // Show the prompt
    let { deferredPrompt }: { deferredPrompt: any } = window
    if (deferredPrompt) {
      deferredPrompt.prompt()
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt')
          this.setState({
            acceptedInstall: true
          })
        } else {
          console.log('User dismissed the A2HS prompt')
          this.setState({
            declinedInstall: true
          })
        }
        deferredPrompt = null
      })
    }
  }
  shouldShowAddButton() {
    let shouldShow =
      this.state.readyToAdd &&
      !this.state.successfullyInstalled &&
      !this.state.acceptedInstall &&
      !this.state.declinedInstall
    console.log('Should show add button', shouldShow)
    return shouldShow
  }
  openWindowOrTab(url = window.location.href) {
    window.open(url, '_blank')
  }
  handleLogout() {
    AWSLogout()
    this.props.userLogin({ type: 'LOGOUT' })
    this.props.clearTodos()
  }

  setTitle(name: string) {
    this.setState({ title: name })
  }

  //FIXME: better Scroll shit mit eventlistener
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
            {this.shouldShowAddButton() ? (
              <button onClick={this.addToHome}>Add to Home Screen</button>
            ) : null}
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
      ),
    taskLoad: (transfer: any) => dispatch(loadTodos()),
    clearTodos: () => dispatch(clearTodos())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

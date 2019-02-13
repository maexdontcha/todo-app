import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import SaveRoute from '../components/SaveRoute'
import Home from './Home'
import Login from './Login'

class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <Link to="/protected">protected</Link>
            <Link to="/login">login</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Login" component={Login} />
            <SaveRoute path="/protected" component={Home} groups={['admin']} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default Layout

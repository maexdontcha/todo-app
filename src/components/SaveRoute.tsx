import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { timeout } from 'q'

interface propTypes {
  component: any
  path: string
  groups: String[]
}
interface stateTypes {
  grantAccess: boolean
}

class SaveRoute extends Component<propTypes, stateTypes> {
  constructor(props: any) {
    super(props)
    // Don't call this.setState() here!
  }

  checkAccess(groups: String[]) {
    console.log(groups)
    return false
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount')
  }

  render() {
    const { component: Component, groups, ...rest } = this.props
    return (
      <Route
        {...rest}
        render={props =>
          true === this.checkAccess(groups) ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    )
  }
}

export default SaveRoute

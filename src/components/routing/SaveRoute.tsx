import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { IAppState } from '../../redux/store'

interface propTypes {
  component: any
  path: string
  permittedGroups: any
  userLogin: any
  title: string
}

class SaveRoute extends Component<propTypes, {}> {
  constructor(props: any) {
    super(props)
  }

  checkAccess(groups: any | string[]) {
    return groups.length === 0 ? true : false
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount')
  }

  render() {
    console.log('render Saveroute')

    const { component: Component, permittedGroups, ...rest } = this.props
    return (
      <Route
        key={this.props.path}
        path={this.props.path}
        exact
        {...rest}
        render={props =>
          this.checkAccess(permittedGroups[0]) ? (
            <Component {...props} title={this.props.title} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    )
  }
}

export default connect((store: IAppState) => ({
  userLogin: store.userState
}))(SaveRoute)

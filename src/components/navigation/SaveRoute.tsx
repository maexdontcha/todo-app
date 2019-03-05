import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { IAppState } from '../../redux/store'

interface propTypes {
  component: any
  path: string
  permittedGroups: any
  userLogin: any
  // groups: string | string[]
  // key: 'string'
}

class SaveRoute extends Component<propTypes, {}> {
  constructor(props: any) {
    super(props)
  }

  deineGruppen = ['user']

  checkAccess(groups: any | string[]) {
    // console.log(groups)
    //return true
    return groups.length === 0 ? true : false
    // console.log('check permission')
    // const x = this.deineGruppen.map(yours => {
    //   return groups.includes(yours)
    // })

    // return true
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount')
  }

  render() {
    // console.log(this.props.userLogin)
    const { component: Component, permittedGroups, ...rest } = this.props
    return (
      <Route
        key={this.props.path}
        path={this.props.path}
        exact
        {...rest}
        render={
          props =>
            this.checkAccess(permittedGroups[0]) ? (
              <Component {...props} />
            ) : (
              <Redirect to="/" />
            )

          // if (!loggedIn && this.props.path !== '/login') {
          //   return <Redirect to="/login" />
          // } else if (loggedIn || this.props.path === '/login') {
          //   return <Component {...props} />
          // } else if (!this.checkAccess(permittedGroups[0])) {
          //   return <Redirect to="/" />
          // }
        }
      />
    )
  }
}

// const mapStateToProps = (store: IAppState) => {
//   return {
//     characters: store.characterState.characters
//   }
// }

// export default connect(mapStateToProps)(SaveRoute)

const Layout: React.SFC = props => {
  return <div id={'LAYOUT'}>{props.children}</div>
}

export default connect((store: IAppState) => ({
  userLogin: store.userState
}))(SaveRoute)

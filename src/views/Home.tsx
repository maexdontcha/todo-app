import React, { Component } from 'react'
import { AddName } from '../components'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        Dashboard geht immer
        <AddName />
      </React.Fragment>
    )
  }
}

export default Home

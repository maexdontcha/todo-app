import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import { client } from '../api/apollo'
import gql from 'graphql-tag'

const query = gql`
  query hello($var: String) {
    hello(name: $var)
  }
`
class Info extends Component<
  { datax: string },
  { datax: string; name: string }
> {
  constructor(props: any) {
    super(props)
    this.state = { datax: 'keine daten', name: 'test' }
  }

  queryx() {
    client
      .query({
        query,
        variables: { var: this.state.name }
      })
      .then(result => {
        console.log(result.data)
        this.setState({ datax: result.data.hello })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <React.Fragment>
        <input onChange={e => this.setState({ name: e.currentTarget.value })} />
        <Button onClick={this.queryx.bind(this)}>Apollo</Button>
        <div>{this.state.datax}</div>
      </React.Fragment>
    )
  }
}

export default Info

import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import { helloQuery } from '../api/apollo/schema'
import { _query as query } from '../api/apollo/resolver'
class Info extends Component<
  { datax: string },
  { datax: string; name: string }
> {
  constructor(props: any) {
    super(props)
    this.state = { datax: 'keine daten', name: 'test' }
  }

  async handleQuery() {
    const res = await query({
      variables: { name: this.state.name },
      query: helloQuery
    })
    console.log(res.hello)
    this.setState({ datax: res.hello })
  }

  render() {
    return (
      <React.Fragment>
        <input onChange={e => this.setState({ name: e.currentTarget.value })} />
        <Button onClick={this.handleQuery.bind(this)}>Apollo</Button>
        <div>{this.state.datax}</div>
      </React.Fragment>
    )
  }
}

export default Info

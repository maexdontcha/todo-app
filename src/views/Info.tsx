import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import { getTasksByEditor } from '../api/apollo/schema'
import { _query as query } from '../api/apollo/resolver/query'
import { _mutation } from '../api/apollo/resolver/mutation'
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
      variables: { workspace: 'test', editor: 'philipp' },
      query: getTasksByEditor
    })
    console.log(res)
    // this.setState({ datax: res })
  }

  // async handleMutation() {
  //   const res = await _mutation({
  //     variables: {
  //       workspace: 'testworkspace',
  //       editor: 'philipp',
  //       title: 'resolverTask'
  //     },
  //     mutation: createTaskMutation
  //   })
  //   console.log(res)
  //   this.setState({ datax: res.hello })
  // }

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

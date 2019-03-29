import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import { getTasksByEditor } from '../api/apollo/schema'
import { _query as query } from '../api/apollo/resolver/query'
import { _mutation as mutation } from '../api/apollo/resolver/mutation'
import editTask from '../api/apollo/schema/mutation/editTask'
import { createTask } from '../api/utils/state/createTask'
import TaskCard from '../components/cards/task/SFC.taskCard'
class Info extends Component<
  { datax: string },
  { datax: string; name: string }
> {
  constructor(props: any) {
    super(props)
    this.state = { datax: 'keine daten', name: 'test' }
  }

  async handleQuery() {
    const res = await mutation({
      variables: {
        workspace: 'PhilippsWorkspace',
        taskId:
          '48fe0a91-9c23-4d6a-b0fb-7ef52161daa9-testtask-2019-03-29T19:39:58.383Z',
        title: 'DynamicQuery',
        description: 'weiterer Test'
      },
      mutation: editTask({
        workspace: 'PhilippsWorkspace',
        taskId:
          '48fe0a91-9c23-4d6a-b0fb-7ef52161daa9-testtask-2019-03-29T19:39:58.383Z',
        title: 'DynamicQuery',
        description: 'weiterer Test'
      })
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
        <Button
          onClick={params => {
            createTask({ title: 'testtask', priority: 4 })
          }}
        >
          createTask
        </Button>
        <div>{this.state.datax}</div>
        <TaskCard />
      </React.Fragment>
    )
  }
}

export default Info

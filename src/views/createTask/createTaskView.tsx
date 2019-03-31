import React, { Component } from 'react'

import { Tabbar, Title } from '../../components'
import { TaskFullForm } from '../../containers'

interface IProps {
  title: any
}
interface IState {
  changer: boolean
  scrollElement: any
}

class CreateTaskView extends Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      changer: false,
      scrollElement: {}
    }
  }

  render() {
    console.log('render Inbox')
    return (
      <React.Fragment>
        <div
          className="Tabbar-scroll-Element"
          style={{ height: '100vh', overflow: 'auto' }}
        >
          <Tabbar title={this.props.title} showLeft={true} scroll={true} />
          <Title title={this.props.title} />
          <TaskFullForm />
        </div>
      </React.Fragment>
    )
  }
}

export default CreateTaskView

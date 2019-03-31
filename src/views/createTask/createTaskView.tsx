import React, { Component } from 'react'

import { Tabbar, Title } from '../../components'

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
    let header: boolean = false
  }

  render() {
    console.log('render Inbox')
    let changer: boolean = false
    return (
      <React.Fragment>
        <div
          className="Tabbar-scroll-Element"
          style={{ height: '100vh', overflow: 'auto' }}
        >
          <Tabbar title={this.props.title} showLeft={true} scroll={true} />
          <Title title={this.props.title} />
        </div>
      </React.Fragment>
    )
  }
}

export default CreateTaskView

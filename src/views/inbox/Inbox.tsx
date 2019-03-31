import React, { Component } from 'react'
import { Tabbar, Title } from '../../components'

import { NormalList } from '../../containers'

interface IProps {
  title: any
  tasks: any
}
interface IState {
  changer: boolean
  scrollElement: any
}

class Inbox extends Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      changer: false,
      scrollElement: {}
    }
  }

  render() {
    console.log('render Inbox')
    const { tasks, title } = this.props
    return (
      <React.Fragment>
        <Tabbar title={title} useScroll={true} showLeft={false} />
        <div className="Tabbar-scroll-Element">
          <Title title={title} />
          <NormalList data={tasks} />
        </div>
      </React.Fragment>
    )
  }
}

export default Inbox

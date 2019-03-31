import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import TaskCard from '../../components/cards/task/SFC.taskCard'
import testdaten from './data'
import { Tabbar, Title } from '../../components'
import { Paper } from '@material-ui/core'
import Header from '../../components/header/tabbar'
interface IProps {
  title: any
}
interface IState {
  tasks: any
  changer: boolean
  scrollElement: any
}

class Inbox extends Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      tasks: testdaten,
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
        <div className="scrolled" style={{ height: '100vh', overflow: 'auto' }}>
          <Tabbar title={this.props.title} scroll={true} />
          <Title title={this.props.title} />

          {this.state.tasks.map((e: any) => {
            return (
              <TaskCard
                key={Math.random()}
                priority={e.priority}
                complexity={e.complexity}
                title={e.title}
                project={e.project}
                dueDate={e.dueDate}
                toggle={e.toggle}
                startDate={e.startDate}
                endDate={e.endDate}
              />
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}

export default Inbox

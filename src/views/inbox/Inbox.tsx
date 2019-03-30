import React, { Component } from 'react'
import TaskCard from '../../components/cards/task/SFC.taskCard'
import testdaten from './data'
interface IProps {}
interface IState {
  tasks: any
}

class Inbox extends Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      tasks: testdaten
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tasks.map((e: any) => {
          return (
            <TaskCard
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
      </React.Fragment>
    )
  }
}

export default Inbox

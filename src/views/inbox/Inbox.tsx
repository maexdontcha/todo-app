import React, { Component } from 'react'
import TaskCard from '../../components/cards/task/SFC.taskCard'
import testdaten from './data'
interface IProps {}
interface IState {}

class Inbox extends Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <React.Fragment>
        {testdaten.map((e: any) => {
          console.log(e)
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

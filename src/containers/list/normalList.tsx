import React, { Component } from 'react'
import TaskCard from '../../components/cards/task/SFC.taskCard'

interface IProps {
  data: any
}
interface IState {}

class NormalList extends Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    console.log(props)
    this.state = {}
  }
  render() {
    console.log('render NormalList')
    const { data } = this.props
    return (
      <React.Fragment>
        {data.map((e: any) => {
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
      </React.Fragment>
    )
  }
}
export default NormalList

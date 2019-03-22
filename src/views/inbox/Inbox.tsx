import React, { Component } from 'react'

interface IProps {
  tasks: any
}
interface IState {}

class Inbox extends Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <React.Fragment>
        {this.props.tasks.map((e: any) => (
          <li key={Math.random()}>{e.title}</li>
        ))}
      </React.Fragment>
    )
  }
}

export default Inbox

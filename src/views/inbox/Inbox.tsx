import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import TaskCard from '../../components/cards/task/SFC.taskCard'
import testdaten from './data'
import { Tabbar, Title } from '../../components'
import { Paper } from '@material-ui/core'
import Header from '../../components/header/tabbar'

import { NormalList } from '../../containers'
import { store } from '../../redux'

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
    console.log(props)
  }

  render() {
    console.log('render Inbox')
    const { tasks, title } = this.props
    console.log(tasks)
    let changer: boolean = false
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

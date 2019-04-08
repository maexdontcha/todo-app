import React, { Component } from 'react'

import { Tabbar, Title } from '../../components'
import { TaskFullForm } from '../../containers'
import { editTask } from '../../api/utils/state/editTask'

interface IProps {
  title: any
  history?: any
}
interface IState {
  changer: boolean
  scrollElement: any
}

class EditTaskView extends Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      changer: false,
      scrollElement: {}
    }
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="Tabbar-scroll-Element"
          style={{ height: '100vh', overflow: 'auto' }}
        >
          <Tabbar
            title={this.props.title}
            showLeft={true}
            useScroll={true}
            display={true}
          />
          <Title title={this.props.title} />
          <TaskFullForm
            type={'edit'}
            handleSubmit={editTask}
            propTask={this.props.history.location.state}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default EditTaskView

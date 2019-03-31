// React
import React, { useState } from 'react'

// _components
import { BottomDrawer } from '../../../components'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/styles'

// Api
import { handleHookChange } from '../../../api/utils/handleHookChanges'

// Types
import { IState, IProps, IfuncDir } from './Types.createTask'
import { Register } from '../../../views'
import CreateTaskForm from '../../form/createTask/SFC.createTaskForm'
import { Fab } from '@material-ui/core'
import { createTask } from '../../../api/utils/state/createTask'

const CreateTaskDrawer: React.SFC<IState> = (props: IProps) => {
  const [toggle, setToggle] = useState(false)

  // Handle Change in singup Form

  // Return Content
  return (
    <React.Fragment>
      <Fab
        size="medium"
        color="primary"
        onClick={() => {
          setToggle(!toggle)
        }}
        style={{}}
      >
        <AddIcon />
      </Fab>
      {/* <FabButton onClick={() => {}} /> */}
      <BottomDrawer
        onChange={() => {
          setToggle(!toggle)
        }}
        openState={toggle}
        Component={
          <CreateTaskForm
            handleSubmit={createTask}
            toggleDrawer={() => {
              setToggle(!toggle)
            }}
          />
        }
      />
    </React.Fragment>
  )
}

export default CreateTaskDrawer

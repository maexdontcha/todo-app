// React
import React, { useState } from 'react'

// _components
import { FabButton, BottomDrawer } from '../../../components'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/styles'

// Api
import { handleHookChange } from '../../../api/utils/handleHookChanges'

// Types
import { IState, IProps, IfuncDir } from './Types.createTask'
import { Register } from '../../../views'
import CreateTaskForm from '../../form/createTask/connect.createTaskFrom'

const CreateTaskDrawer: React.SFC<IState> = (props: IProps) => {
  const [toggle, setToggle] = useState(false)

  // Handle Change in singup Form

  // Return Content
  return (
    <React.Fragment>
      <FabButton
        onClick={() => {
          setToggle(!toggle)
        }}
        icon={<AddIcon />}
      />
      {/* <FabButton onClick={() => {}} /> */}
      <BottomDrawer
        onChange={() => {
          setToggle(!toggle)
        }}
        openState={toggle}
        Component={<CreateTaskForm />}
      />
    </React.Fragment>
  )
}

export default CreateTaskDrawer

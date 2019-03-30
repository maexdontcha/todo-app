// React
import React, { useState } from 'react'

// Rebass
import { Flex, Box } from 'rebass'
// Redux API
// import { userLogin } from '../../../redux/userLogin'
// import { IAppState } from '../../../redux/store'
// import { connect } from 'react-redux'

//material-ui
import CheckIcon from '@material-ui/icons/Check'

// _components
import {
  OutlinedTextField,
  AddButton,
  CircularIndeterminate,
  OutlinedNativeSelect
} from '../../../components'
import { doStates } from './static.createTaskForm'
import { createTask } from '../../../api/utils/state/createTask'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  input: {
    padding: 8
  }
})

const CreateTaskForm: React.SFC<{}> = (props: any) => {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [beschreibung, setBeschreibung] = useState('')
  const { handleAddTodo } = props
  const classes = useStyles()
  console.log(props)
  const funcDir: any = {
    title: setTitle,
    beschreibung: setBeschreibung
  }

  // Handle Change in singup Form
  const handleChange: any = (event: any) => {
    funcDir[event.currentTarget.id](event.currentTarget.value)
  }

  return (
    <Flex alignItems={'center'} justifyContent={'center'}>
      <Box width={[0.9, 1 / 2]}>
        <form
          noValidate
          autoComplete="on"
          onSubmit={e => {
            /**
             * Prevent submit from reloading the page
             */
            e.preventDefault()
            e.stopPropagation()
            handleAddTodo(title)
          }}
        >
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection={'column'}
          >
            <Box width={1} px={'2px'}>
              <OutlinedTextField
                onChange={handleChange}
                myType={'title'}
                autoFocus={true}
                style={classes}
              />
            </Box>
            {/* <OutlinedNativeSelect selectValues={doStates} onChange={() => {}} /> */}
            <Box width={1} px={'2px'} />
          </Flex>
        </form>
      </Box>
    </Flex>
  )
}

export default CreateTaskForm

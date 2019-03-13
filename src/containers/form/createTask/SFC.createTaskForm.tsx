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
  IconLabelButtons,
  CircularIndeterminate,
  OutlinedNativeSelect
} from '../../../components'
import { doStates } from './static.createTaskForm'
import { create } from './Function.createTaskForm'

const CreateTaskForm: React.SFC<{}> = (props: any) => {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [beschreibung, setBeschreibung] = useState('')
  const { handleAddTodo } = props
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
        <form noValidate autoComplete="on">
          <OutlinedTextField
            onChange={handleChange}
            myLabel={'Titel'}
            myType={'title'}
          />
          <OutlinedTextField
            onChange={handleChange}
            myLabel={'Beschreibung'}
            myType={'beschreibung'}
            multiline={true}
          />
          {/* <OutlinedNativeSelect selectValues={doStates} onChange={() => {}} /> */}
          <IconLabelButtons
            onClick={() => {
              const res = handleAddTodo(title)
              console.log(res)
            }}
            buttonContent={{
              color: 'primary',
              text: 'Add',
              icon: <CheckIcon />
            }}
          />
        </form>
      </Box>
    </Flex>
  )
}

export default CreateTaskForm

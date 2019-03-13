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
          <Flex alignItems={'center'} justifyContent={'center'}>
            <Box width={[3 / 4]} px={'2px'}>
              <OutlinedTextField
                onChange={handleChange}
                myLabel={'Titel'}
                myType={'title'}
                autoFocus={true}
              />
            </Box>
            {/* <OutlinedNativeSelect selectValues={doStates} onChange={() => {}} /> */}
            <Box width={[1 / 4]} px={'2px'}>
              <AddButton
                onClick={() => {
                  const res = handleAddTodo(title)
                }}
                icon={<CheckIcon />}
              />
            </Box>
          </Flex>
        </form>
      </Box>
    </Flex>
  )
}

export default CreateTaskForm

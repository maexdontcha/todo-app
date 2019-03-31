// React
import React, { useState } from 'react'

// Rebass
import { Flex, Box } from 'rebass'
import { createBrowserHistory } from 'history'

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
import { Link } from 'react-router-dom'

import { CalendarAdd } from '../../../components/icon'
import { doStates } from './static.createTaskForm'
import { createTask } from '../../../api/utils/state/createTask'
import { makeStyles } from '@material-ui/styles'
import { IconButton, TextField } from '@material-ui/core'
import { CreateNewFolder, OpenInNew } from '@material-ui/icons'

const useStyles = makeStyles({
  input: {
    padding: 8
  },
  outlined: {
    transform: 'translate(14px, 10px) scale(1)'
  }
})

const CreateTaskForm: React.SFC<any> = (props: any) => {
  const [projectBoolean, setProjectBoolean] = useState(false)
  const [dueDateBoolean, setDueDateBoolean] = useState(false)
  const [title, setTitle] = useState(undefined)
  const [date, setDueDate] = useState(undefined)
  const [project, setProject] = useState(undefined)
  const { handleSubmit } = props
  const classes = useStyles()
  const funcDir: any = {
    title: setTitle,
    date: setDueDate,
    project: setProject
  }
  const formValues: any = {
    title,
    project,
    dueDate: date
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
            let definedValues: any = {}
            for (const attr in formValues) {
              if (formValues[attr] !== undefined) {
                definedValues[attr] = formValues[attr]
              }
            }
            /**
             * Prevent submit from reloading the page
             */
            e.preventDefault()
            e.stopPropagation()
            handleSubmit(definedValues)
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
                myLabel={'Titel'}
                autoFocus={true}
                style={classes}
                LabelShrink={true}
              />
            </Box>
            {projectBoolean ? (
              <Box width={1} px={'2px'}>
                <OutlinedTextField
                  onChange={handleChange}
                  myType={'project'}
                  myLabel={'Projekt'}
                  autoFocus={true}
                  style={classes}
                  LabelShrink={true}
                />
              </Box>
            ) : (
              ''
            )}
            {dueDateBoolean ? (
              <Box width={1} px={'2px'}>
                <OutlinedTextField
                  onChange={handleChange}
                  myType={'date'}
                  myLabel={'Do Date'}
                  autoFocus={true}
                  style={classes}
                  LabelShrink={true}
                />
              </Box>
            ) : (
              ''
            )}

            <Box width={1} px={'2px'}>
              <Flex
                alignItems={'center'}
                justifyContent={'space-evenly'}
                flexDirection={'row'}
              >
                <Box>
                  <IconButton
                    onClick={() => {
                      setProjectBoolean(!projectBoolean)
                    }}
                  >
                    <CreateNewFolder color="primary" />
                  </IconButton>
                </Box>
                <Box>
                  <IconButton
                    onClick={() => {
                      setDueDateBoolean(!dueDateBoolean)
                    }}
                  >
                    <CalendarAdd color="primary" />
                  </IconButton>
                </Box>
                <Box>
                  <Link to={'/create'}>
                    <IconButton>
                      <OpenInNew color="primary" />
                    </IconButton>
                  </Link>
                </Box>
              </Flex>
            </Box>
          </Flex>
          <button style={{ visibility: 'hidden' }} type="submit">
            Submit
          </button>
        </form>
      </Box>
    </Flex>
  )
}

export default CreateTaskForm

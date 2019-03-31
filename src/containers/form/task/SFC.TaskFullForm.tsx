// React
import React, { useState } from 'react'

// Rebass
import { Flex, Box } from 'rebass'
import { createBrowserHistory } from 'history'

//material-ui
import CheckIcon from '@material-ui/icons/Check'

// _components
import {
  OutlinedTextField,
  AddButton,
  CircularIndeterminate,
  OutlinedNativeSelect
} from '../../../components'
import { makeStyles } from '@material-ui/styles'

const CreateTaskFullForm: React.SFC<any> = (props: any) => {
  const [task, setTask] = useState(props.task)

  const handleChange: any = (event: any) => {
    let atr = event.currentTarget.id
    let value = event.currentTarget.value
    setTask({ ...task, ...{ [atr]: value } })
    console.log(task)
  }
  return (
    <Flex alignItems={'center'} justifyContent={'center'}>
      <Box width={[0.9, 1 / 2]}>
        <form
          noValidate
          autoComplete="on"
          onSubmit={e => {
            let definedValues: any = {}
            for (const attr in task) {
              if (task[attr] !== undefined) {
                definedValues[attr] = task[attr]
              }
            }
            /**
             * Prevent submit from reloading the page
             */
            e.preventDefault()
            e.stopPropagation()
            console.log(task)
            // handleSubmit(definedValues)
          }}
        >
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            flexWrap={'wrap'}
          >
            <Box width={1} px={'2px'}>
              <OutlinedTextField
                onChange={handleChange}
                myType={'title'}
                myLabel={'Titel'}
                autoFocus={true}
              />
            </Box>
            <Box width={1} px={'2px'}>
              <OutlinedTextField
                onChange={handleChange}
                myType={'description'}
                myLabel={'Beschreibung'}
                autoFocus={true}
                multiline={true}
              />
            </Box>
            <Box width={1 / 2} pl={'2px'} pr={'4px'}>
              <OutlinedTextField
                onChange={handleChange}
                myType={'project'}
                myLabel={'Projekt'}
                autoFocus={true}
              />
            </Box>
            <Box width={1 / 2} pl={'4px'} pr={'2px'}>
              <OutlinedTextField
                onChange={handleChange}
                myType={'parentProject'}
                myLabel={'gehört zu'}
              />
            </Box>
            <Box width={1 / 2} pl={'2px'} pr={'4px'}>
              <OutlinedTextField
                onChange={handleChange}
                myType={'complexity'}
                myLabel={'Komplexität'}
              />
            </Box>{' '}
            <Box width={1 / 2} pl={'4px'} pr={'2px'}>
              <OutlinedTextField
                onChange={handleChange}
                myType={'category'}
                myLabel={'Kategorie'}
              />
            </Box>
            <Box width={1} px={'2px'}>
              <OutlinedTextField
                onChange={handleChange}
                myType={'date'}
                myId={'dueDate'}
                myLabel={'Do Date'}
                autoFocus={true}
                LabelShrink={true}
              />
            </Box>
            <Box width={1 / 2} pl={'4px'} pr={'2px'}>
              <OutlinedTextField
                onChange={handleChange}
                myType={'time'}
                myId={'startTime'}
                myLabel={'von'}
                autoFocus={true}
                LabelShrink={true}
              />
            </Box>
            <Box width={1 / 2} pl={'4px'} pr={'2px'}>
              <OutlinedTextField
                onChange={handleChange}
                myType={'time'}
                myId={'endTime'}
                myLabel={'bis'}
                autoFocus={true}
                LabelShrink={true}
              />
            </Box>
            <Box>
              <button style={{ visibility: 'hidden' }} type="submit">
                Submit
              </button>
            </Box>
          </Flex>
        </form>
      </Box>
    </Flex>
  )
}

export default CreateTaskFullForm

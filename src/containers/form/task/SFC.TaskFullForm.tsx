// React
import React, { useState } from 'react'

// Rebass
import { Flex, Box } from 'rebass'
import { createBrowserHistory } from 'history'

//material-ui
import CheckIcon from '@material-ui/icons/Check'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'

// _components
import {
  OutlinedTextField,
  AddButton,
  CircularIndeterminate,
  OutlinedNativeSelect
} from '../../../components'
import { makeStyles } from '@material-ui/styles'
import { TextField, Button } from '@material-ui/core'

const CreateTaskFullForm: React.SFC<any> = (props: any) => {
  const [task, setTask] = useState(props.propTask || {})
  const { type, handleSubmit } = props
  const handleChange: any = (event: any) => {
    let atr = event.currentTarget.id
    let value = event.currentTarget.value
    setTask({ ...task, ...{ [atr]: value } })
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
            console.log(definedValues)
            // handleSubmit(definedValues)
          }}
        >
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            flexWrap={'wrap'}
          >
            {/* Title */}
            <Box width={1} px={'2px'}>
              <OutlinedTextField
                onChange={handleChange}
                value={task.title ? task.title : ''}
                myType={'title'}
                myLabel={'Titel'}
                autoFocus={true}
              />
            </Box>
            {/* Beschreibung */}
            <Box width={1} px={'2px'}>
              <OutlinedTextField
                onChange={handleChange}
                value={task.description ? task.description : ''}
                myType={'description'}
                myLabel={'Beschreibung'}
                autoFocus={true}
                multiline={true}
              />
            </Box>
            {/* Projekt */}
            <Box width={1 / 2} pl={'2px'} pr={'4px'}>
              <OutlinedTextField
                select={true}
                native={true}
                onChange={handleChange}
                value={task.project}
                myType={'project'}
                myLabel={'Projekt'}
                autoFocus={true}
                options={[
                  { value: undefined, label: '--' },
                  { value: 'Privat', label: 'Privat' },
                  { value: 'ebliq', label: 'Ebliq' }
                ]}
              />
            </Box>
            {/* Kategorie */}
            <Box width={1 / 2} pl={'4px'} pr={'2px'}>
              <OutlinedTextField
                select={true}
                native={true}
                onChange={handleChange}
                value={task.category}
                myType={'category'}
                myLabel={'Kategorie'}
                options={[
                  { value: undefined, label: '--' },
                  { value: 'ifs', label: 'IFS' },
                  { value: 'ebliq', label: 'Ebliq' }
                ]}
              />
            </Box>
            {/* Komplexität */}
            <Box width={1 / 2} pl={'2px'} pr={'4px'}>
              <OutlinedTextField
                select={true}
                onChange={handleChange}
                value={task.complexity}
                myId={'complexity'}
                myLabel={'Komplexität'}
                native={true}
                options={[
                  { value: undefined, label: '--' },
                  { value: 1, label: 1 },
                  { value: 2, label: 2 },
                  { value: 3, label: 3 },
                  { value: 4, label: 4 },
                  { value: 5, label: 5 },
                  { value: 6, label: 6 },
                  { value: 7, label: 7 },
                  { value: 8, label: 8 },
                  { value: 9, label: 9 },
                  { value: 10, label: 10 }
                ]}
              />
            </Box>
            {/* Prorität */}
            <Box width={1 / 2} pl={'4px'} pr={'2px'}>
              <OutlinedTextField
                select={true}
                onChange={handleChange}
                myType={'priority'}
                value={task.priority}
                myLabel={'Priorität'}
                native={true}
                options={[
                  { value: undefined, label: '--' },
                  { value: 1, label: 'sehr niedrig' },
                  { value: 2, label: 'niedrig' },
                  { value: 3, label: 'mittel' },
                  { value: 4, label: 'hoch' },
                  { value: 5, label: 'sehr hoch' }
                ]}
              />
            </Box>
            {/* Fälligkeit */}
            <Box width={1} px={'2px'}>
              <OutlinedTextField
                onChange={handleChange}
                myType={'date'}
                myId={'dueDate'}
                myLabel={'Do Date'}
                value={task.dueDate ? task.dueDate : ''}
                autoFocus={true}
                LabelShrink={true}
              />
            </Box>
            {/* von */}
            <Box width={1 / 2} pl={'4px'} pr={'2px'}>
              <OutlinedTextField
                onChange={handleChange}
                myType={'time'}
                myId={'startTime'}
                myLabel={'von'}
                value={task.startTime ? task.startTime : ''}
                autoFocus={true}
                LabelShrink={true}
              />
            </Box>
            {/* bis */}
            <Box width={1 / 2} pl={'4px'} pr={'2px'}>
              <OutlinedTextField
                onChange={handleChange}
                value={task.endTime ? task.endTime : ''}
                myType={'time'}
                myId={'endTime'}
                myLabel={'bis'}
                autoFocus={true}
                LabelShrink={true}
              />
            </Box>
            <Box width={1} px={'2px'}>
              <Button variant="contained" color="primary" type="submit">
                {type === 'create' ? (
                  <React.Fragment>
                    <AddIcon /> Hinzufügen
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <EditIcon /> Bearbeiten
                  </React.Fragment>
                )}
              </Button>
            </Box>
          </Flex>
        </form>
      </Box>
    </Flex>
  )
}

export default CreateTaskFullForm

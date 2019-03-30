import React from 'react'
import { IDescIcons, priorityColors } from './taskTypes.d'
import { Flex, Box } from 'rebass'
import { FormControlLabel, Checkbox, Typography, Chip } from '@material-ui/core'
import { FlagIcon, CheckBoxFilled, CheckBoxNotFilled } from '../../icon/index'

interface IBody {
  title?: string
  project?: string
  dueDate?: string
  startDate?: string
  endDate?: string
  toggle: boolean
}

export const BodyTask = (props: IBody) => {
  const { title, project, dueDate, startDate, endDate, toggle } = props
  return (
    <Flex
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"
      style={toggle ? { textDecoration: 'line-through', color: '#ccc' } : {}}
    >
      {startDate && endDate ? (
        <Box width={1}>
          <Typography
            variant="subtitle2"
            component="h3"
            color={'textSecondary'}
            style={toggle ? { color: '#ccc' } : {}}
          >
            {startDate} - {endDate}
          </Typography>
        </Box>
      ) : dueDate ? (
        <Box width={1}>
          <Typography
            variant="subtitle2"
            component="h3"
            color={'textSecondary'}
            style={toggle ? { color: '#ccc' } : {}}
          >
            {dueDate}
          </Typography>
        </Box>
      ) : (
        ''
      )}

      <Box width={1}>
        <Typography
          variant="h6"
          component="h1"
          style={toggle ? { color: '#ccc' } : {}}
        >
          {title}
        </Typography>
      </Box>
      {project ? (
        <Box width={1}>
          <Typography
            variant="subtitle1"
            component="h2"
            style={toggle ? { color: '#ccc' } : {}}
          >
            {project}
          </Typography>
        </Box>
      ) : (
        ''
      )}
    </Flex>
  )
}

import React from 'react'
import { IDescIcons, priorityColors } from './taskTypes.d'
import { Flex, Box } from 'rebass'
import { FlagIcon, CheckBoxFilled, CheckBoxNotFilled } from '../../icon/index'
import { FormControlLabel, Checkbox, Typography, Chip } from '@material-ui/core'

export const DescIcons = (params: IDescIcons) => {
  const { classes, priority, category, complexity } = params
  return priority || category || complexity ? (
    <Flex alignItems="center" justifyContent="flex-start" flexDirection="row">
      {category ? <Box px={'4px'}>🤖</Box> : ''}
      {complexity ? (
        <Box px={'4px'}>
          <Chip label={complexity} className={classes.chip} color={'primary'} />
        </Box>
      ) : (
        ''
      )}
      {priority ? (
        <Box px={'4px'}>
          <FlagIcon color={priorityColors[priority]} />
        </Box>
      ) : (
        ''
      )}
    </Flex>
  ) : (
    <React.Fragment />
  )
}

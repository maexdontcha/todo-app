import React from 'react'
import { IDescIcons, priorityColors } from './taskTypes.d'
import { Flex, Box } from 'rebass'
import { FlagIcon, CheckBoxFilled, CheckBoxNotFilled } from '../../icon/index'
import { FormControlLabel, Checkbox, Typography, Chip } from '@material-ui/core'

export const CheckBox = (params: any) => {
  const { onChange } = params
  return (
    <Box width={1 / 6}>
      <Checkbox
        color="primary"
        icon={<CheckBoxNotFilled color="#ccc" />}
        checkedIcon={<CheckBoxFilled color="primary" />}
        value="checkedI"
        onChange={onChange.bind('')}
      />
    </Box>
  )
}

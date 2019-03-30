import React, { useState } from 'react'

import Card from '@material-ui/core/Card'
import { Flex, Box } from 'rebass'
import { makeStyles } from '@material-ui/styles'
import { FormControlLabel, Checkbox, Typography, Chip } from '@material-ui/core'
import { FlagIcon, CheckBoxFilled, CheckBoxNotFilled } from '../../icon/index'
import { DescIcons } from './leftPart'
import { BodyTask } from './bodyPart'
import { CheckBox } from './rightPart'

const useStyles = makeStyles({
  card: {
    display: 'flex',
    minWidth: 340
  },
  chip: {
    height: 20
  }
})
interface IProps {}

const TaskCard = (props: IProps) => {
  const classes = useStyles()
  const [toggle, setToggle] = useState(false)
  console.log(toggle)
  return (
    <Card className={classes.card}>
      <Flex
        alignItems="center"
        justifyContent="center"
        style={{ width: '100%' }}
      >
        <Box pl={'4px'}>
          <DescIcons classes={classes} priority={1} complexity={10} />
        </Box>
        <Box width={5 / 6} pl={'10px'}>
          <BodyTask
            title="Email an Max schreiben"
            project="EBliq"
            dueDate="Heute"
            toggle={toggle}
          />
        </Box>
        <CheckBox
          onChange={() => {
            setToggle(!toggle)
          }}
        />
      </Flex>
    </Card>
  )
}

export default TaskCard

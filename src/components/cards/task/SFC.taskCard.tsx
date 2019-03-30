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
interface IProps {
  priority?: 1 | 2 | 3 | 4 | 5
  complexity?: number
  title: string
  project?: string
  dueDate?: string
  startDate?: string
  endDate?: string
}

export const TaskCard:any = (props: IProps) => {
  const {
    priority,
    complexity,
    dueDate,
    title,
    project,
    startDate,
    endDate
  } = props
  const classes = useStyles()
  const [toggle, setToggle] = useState(false)
  return (
    <Card className={classes.card}>
      <Flex
        alignItems="center"
        justifyContent="center"
        style={{ width: '100%' }}
      >
        <Box pl={'4px'}>
          <DescIcons
            classes={classes}
            priority={priority}
            complexity={complexity}
          />
        </Box>
        <Box width={5 / 6} pl={'10px'}>
          <BodyTask
            title={title}
            project={project}
            dueDate={dueDate}
            toggle={toggle}
            startDate={startDate}
            endDate={endDate}
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

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
    // ,
    // borderBottom: '1px solid #ccc'
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
  category?: string
}
export const TaskCard: any = (props: IProps) => {
  const {
    priority,
    complexity,
    dueDate,
    title,
    project,
    startDate,
    endDate,
    category
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
        <Box alignSelf={'flex-end'}>
          <CheckBox
            onChange={() => {
              setToggle(!toggle)
            }}
          />
        </Box>
        <Box width={1} pl={'10px'}>
          <BodyTask
            title={title}
            project={project}
            dueDate={dueDate}
            toggle={toggle}
            startDate={startDate}
            endDate={endDate}
          />
        </Box>
        <Box pl={'4px'}>
          <DescIcons
            classes={classes}
            priority={priority}
            complexity={complexity}
            category={category}
          />
        </Box>
      </Flex>
    </Card>
  )
}

export default TaskCard

import React, { useState } from 'react'

import Card from '@material-ui/core/Card'
import { Flex, Box } from 'rebass'
import { makeStyles } from '@material-ui/styles'
import { DescIcons } from './leftPart'
import { BodyTask } from './bodyPart'
import { CheckBox } from './rightPart'
import { LongPress, FabButton } from '../../index'
import { createBrowserHistory } from 'history'

import Divider from '@material-ui/core/Divider'
import { Redirect } from 'react-router'
import addButton from '../../buttons/fab/fabButton'
import { Link } from 'react-router-dom'
import { TaskActions } from './taskActions'

const useStyles = makeStyles({
  card: {
    display: 'flex',
    minWidth: 340,
    maxWidth: 667,
    boxShadow: 'none'
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
  history?: any
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
  const [edit, setEdit] = useState(false)
  //TODO: Add History to redux
  //BODY: Add history to redux and fix all push and pops

  const backspaceLongPress = LongPress(
    async () => {
      setEdit(true)
    },
    200,
    { opacity: 0.1 }
  )
  return (
    <React.Fragment>
      {/* {edit ? ( */}
      {edit ? <TaskActions state={props} /> : ''}
      <Card className={classes.card} {...backspaceLongPress}>
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
      {/* // ) : (
      //   <Redirect
      //     to={{
      //       pathname: '/edit',
      //       state: props
      //     }} */}
      {/* /> )} */}
      <Divider style={{ maxWidth: 667 }} variant="fullWidth" />
    </React.Fragment>
  )
}

export default TaskCard

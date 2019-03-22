import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import { handleHookChange } from '../../../api/utils/handleHookChanges'

const useStyles = makeStyles({})

interface IProps {
  onChange: Function
  Component?: JSX.Element
  openState: boolean
}

function BottomDrawer(props: IProps) {
  const classes = useStyles()
  const { onChange, openState, Component } = props
  console.log(props)

  return (
    <div>
      <Drawer anchor="bottom" open={openState} onClose={onChange.bind('')}>
        <div
          // onClick={onChange.bind('')}
          // onKeyDown={onChange.bind('')}
          style={{ marginBottom: '65px', marginTop: '25px' }}
        >
          {Component}
        </div>
      </Drawer>
    </div>
  )
}

export default BottomDrawer

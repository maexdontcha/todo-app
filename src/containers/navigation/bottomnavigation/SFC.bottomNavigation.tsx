import React from 'react'
import { makeStyles } from '@material-ui/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Icon from '@material-ui/core/Icon'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { routes as NavigationItems } from '../../../routes'
import { Link, Redirect, Route } from 'react-router-dom'
import { CreateTaskDrawer } from '../..'
const useStyles = makeStyles({
  root: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
    boxShadow: '0px 1px 3px #121212',
    zIndex: 10000
  }
})
const useStyles2 = makeStyles({
  root: {
    padding: '6px 2px 8px'
  },
  selected: {
    fontSize: '0.8rem!important'
  }
})

interface IProps {
  setTitle: Function
}

const _BottomNavigation = (props: IProps) => {
  const classes = useStyles()
  const cl = useStyles2()
  const { setTitle } = props
  const [value, setValue] = React.useState('Inbox')

  async function handleChange(event: any, newValue: any) {
    setTitle(newValue)
    await setValue(newValue)
  }
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      {NavigationItems.map(e => {
        if (e.displayName && e.position && e.position <= 2) {
          console.log(e)

          return (
            <BottomNavigationAction
              // @ts-ignore: Wait fix from material-UI
              component={Link}
              to={e.path}
              label={e.displayName}
              value={e.displayName}
              icon={e.icon}
              key={e.path}
              style={{ minWidth: 'auto' }}
              classes={cl}
            />
          )
        }
      })}
      <CreateTaskDrawer />
      {NavigationItems.map(e => {
        if (e.displayName && e.position && e.position > 2) {
          console.log(e)

          return (
            <BottomNavigationAction
              // @ts-ignore: Wait fix from material-UI
              component={Link}
              to={e.path}
              label={e.displayName}
              value={e.displayName}
              icon={e.icon}
              key={e.path}
              style={{ minWidth: 'auto' }}
              classes={cl}
            />
          )
        }
      })}
    </BottomNavigation>
  )
}

export default _BottomNavigation

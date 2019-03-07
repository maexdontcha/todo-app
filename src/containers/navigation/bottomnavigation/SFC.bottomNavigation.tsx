import React from 'react'
import { makeStyles } from '@material-ui/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Icon from '@material-ui/core/Icon'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { routes as NavigationItems } from '../../../routes'
import { Link } from 'react-router-dom'
const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
})

const _BottomNavigation = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState('recents')

  function handleChange(event: any, newValue: any) {
    setValue(newValue)
  }

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      {NavigationItems.map(e => {
        if (e.displayName)
          return (
            <BottomNavigationAction
              label={e.displayName}
              value={e.displayName}
              icon={e.icon}
              key={e.path}
            >
              <Link to={e.path} />
            </BottomNavigationAction>
          )
      })}
    </BottomNavigation>
  )
}

export default _BottomNavigation

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const styles = {
  root: {
    flexGrow: 1,
    boxShadow: 'none'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

const _Tabbar: React.SFC<{
  theme: any
  title: string
  changeHeader: boolean
}> = (props: any) => {
  const { classes, title, changeHeader } = props
  return (
    <div className={classes.root}>
      <AppBar
        className={props.classes.root}
        position={changeHeader ? 'absolute' : 'sticky'}
        color={'default'}
      >
        <Toolbar style={{ minHeight: 40 }}>
          {changeHeader ? (
            <React.Fragment>
              <Button color="inherit">Login</Button>
              <Typography
                variant="h3"
                color="inherit"
                className={props.classes.grow}
              >
                {props.title}
              </Typography>
              <Button color="inherit">Login</Button>
            </React.Fragment>
          ) : (
            ''
          )}
        </Toolbar>
      </AppBar>
      <AppBar
        className={props.classes.root}
        position={'static'}
        color={'default'}
      >
        <Toolbar style={{ minHeight: 40 }}>
          <Typography
            variant="h1"
            color="inherit"
            className={props.classes.grow}
          >
            {props.title}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(_Tabbar)

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

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

//TODO: Split Headbars into 2 components
//BODY 2 componets erstellen, sodass man title öfters verwenden kann
const _Title: React.SFC<{
  title: string
  position?: string
}> = (props: any) => {
  const { classes, title, position } = props
  return (
    <div className={classes.root}>
      <AppBar
        className={classes.root}
        position={position || 'static'}
        color={'inherit'}
      >
        <Toolbar style={{ minHeight: 50 }}>
          <Typography variant="h1" className={classes.grow}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(_Title)

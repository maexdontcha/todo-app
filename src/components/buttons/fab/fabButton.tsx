import React from 'react'
import Fab from '@material-ui/core/Fab'
import { withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const styles = (theme: any) => ({
  fab: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
})

export interface Props {
  classes: any
  onClick?: Function
  icon?: JSX.Element
  type?: string
  size?: any
  link?: boolean
  to?: string
  color?: any
  style?: any
  state?: any
}

function FabButton(props: Props) {
  const {
    classes,
    onClick,
    icon,
    type,
    size,
    color,
    link,
    to,
    style,
    state
  } = props

  return (
    <React.Fragment>
      {link ? (
        <Fab
          onClick={onClick ? onClick.bind('') : ''}
          variant="extended"
          aria-label="Delete"
          // @ts-ignore: Wait fix from material-UI
          component={Link}
          to={{
            pathname: to,
            state
          }}
          className={classes.fab}
          color={color ? color : 'default'}
          type={type}
          size={size ? size : 'medium'}
          style={style ? style : ''}
        >
          {icon}
        </Fab>
      ) : (
        <Fab
          onClick={onClick ? onClick.bind('') : ''}
          variant="extended"
          aria-label="Delete"
          className={classes.fab}
          color={color ? color : 'default'}
          type={type}
          size={size ? size : 'medium'}
          style={style ? style : ''}
        >
          {icon}
        </Fab>
      )}
    </React.Fragment>
  )
}

export default withStyles(styles)(FabButton)

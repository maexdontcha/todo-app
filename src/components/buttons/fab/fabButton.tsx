import React from 'react'
import { withStyles } from '@material-ui/core/styles-ui/core/styles'
import Fab from '@material-ui/core/Fabial-ui/core/Fab'
import AddIcon from '@material-ui/icons/Addal-ui/icons/Add'
import Icon from '@material-ui/core/Iconal-ui/core/Icon'
import DeleteIcon from '/@material-ui/icons/Deleteui/icons/Delete'
import NavigationIcon from '@material-ui/icons/Navigationcons/Navigation'

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
  onClick: Function
  icon?: JSX.Element
  type?: string
  size?: any
  color?: any
}

function FabButton(props: Props) {
  const { classes, onClick, icon, type, size, color } = props

  return (
    <Fab
      onClick={onClick.bind('')}
      variant="extended"
      aria-label="Delete"
      className={classes.fab}
      color={color ? color : 'default'}
      type={type}
      size={size ? size : 'medium'}
    >
      {icon}
    </Fab>
  )
}

export default withStyles(styles)(FabButton)

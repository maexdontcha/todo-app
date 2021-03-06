import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Icon from '@material-ui/core/Icon'
import DeleteIcon from '@material-ui/icons/Delete'
import NavigationIcon from '@material-ui/icons/Navigation'

const styles = (theme: any) => ({
  fab: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
})

export interface Props {
  classes: any
  onClick: Function
  type?: string
}

function FloatingActionButtons(props: Props) {
  const { classes, onClick, type } = props
  return (
    <Fab
      onClick={onClick.bind('')}
      variant="extended"
      aria-label="Delete"
      className={classes.fab}
      type={type}
    >
      <NavigationIcon className={classes.extendedIcon} />
      Login
    </Fab>
  )
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FloatingActionButtons)

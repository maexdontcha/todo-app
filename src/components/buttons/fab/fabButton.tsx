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
}

function fabButton(props: Props) {
  const { classes, onClick, icon } = props

  return (
    <Fab
      onClick={onClick.bind('')}
      variant="extended"
      aria-label="Delete"
      className={classes.fab}
      color="primary"
      style={{
        position: 'fixed',
        bottom: 60,
        left: '50%',
        width: '200px',
        transform: 'translateX(-100px)'
      }}
    >
      {icon}
      add
    </Fab>
  )
}

export default withStyles(styles)(fabButton)

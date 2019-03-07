import React, { useState } from 'react'
import { withStyles, MuiThemeProvider, Theme } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

import { theme as defaultTheme } from '../../theme'
import { themered as defaultThemered } from '../../theme'

const styles = (theme: Theme) => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
})

interface IProps {
  classes: any
  onClick?: Function
}

const CircularIndeterminate: React.SFC<IProps> = (props: IProps) => {
  const { classes } = props
  return <CircularProgress className={classes.progress} />
}

export default withStyles(styles)(CircularIndeterminate)

/* <CircularProgress className={classes.progress} color="secondary" /> */

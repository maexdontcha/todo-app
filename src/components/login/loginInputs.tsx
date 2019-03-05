import React from 'react'
import PropTypes from 'prop-types'
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputBase from '@material-ui/core/InputBase'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    margin: {
      margin: theme.spacing.unit
    },
    cssLabel: {
      '&$cssFocused': {
        color: purple[500]
      }
    },
    cssFocused: {},
    cssUnderline: {
      '&:after': {
        borderBottomColor: purple[500]
      }
    },
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: purple[500]
      }
    },
    notchedOutline: {},
    bootstrapRoot: {
      'label + &': {
        marginTop: theme.spacing.unit * 3
      }
    },
    bootstrapInput: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
      }
    },
    bootstrapFormLabel: {
      fontSize: 18
    }
  })

const theme = createMuiTheme({
  palette: {
    primary: green
  },
  typography: { useNextVariants: true }
})

export interface Props extends WithStyles<typeof styles> {
  onChange: Function
  myLabel: string
  myType?: string
}

function CustomizedInputs(props: Props) {
  // const { classes, myfunction, myLabel, myType } = props
  const { classes, onChange, myLabel, myType } = props
  return (
    <TextField
      className={classes.margin}
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused
        }
      }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline
        }
      }}
      id={myType}
      label={myLabel}
      variant="outlined"
      type={myType || ''}
      onChange={onChange.bind('')}
    />
  )
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired
} as any

export default withStyles(styles)(CustomizedInputs)

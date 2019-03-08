import React from 'react'
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import purple from '@material-ui/core/colors/purple'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    margin: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit
    },
    cssLabel: {
      '&$cssFocused': {
        color: purple[500]
      }
    },
    cssFocused: {},
    // cssUnderline: {
    //   '&:after': {
    //     borderBottomColor: purple[500]
    //   }
    // },
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

// const theme = createMuiTheme({
//   palette: {
//     primary: green
//   },
//   typography: { useNextVariants: true }
// })

interface IProps extends WithStyles<typeof styles> {
  onChange: Function
  myLabel: string
  myType?: string
  fullWidth?: boolean
  multiline?: boolean
}

function outlinedTextField(props: IProps) {
  // const { classes, myfunction, myLabel, myType } = props
  const { classes, onChange, myLabel, myType, fullWidth, multiline } = props
  return (
    <TextField
      className={classes.margin}
      fullWidth={fullWidth || true}
      id={myType}
      label={myLabel}
      variant="outlined"
      type={myType || ''}
      onChange={onChange.bind('')}
      multiline={multiline || false}
    />
  )
}

export default withStyles(styles)(outlinedTextField)

// InputLabelProps={{
//   classes: {
//     root: classes.cssLabel,
//     focused: classes.cssFocused
//   }
// }}
// InputProps={{
//   classes: {
//     root: classes.cssOutlinedInput,
//     focused: classes.cssFocused,
//     notchedOutline: classes.notchedOutline
//   }
// }}

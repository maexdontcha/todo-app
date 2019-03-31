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
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit
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
  myLabel?: string
  myType?: string
  myId?: string
  fullWidth?: boolean
  multiline?: boolean
  autoFocus?: boolean
  LabelShrink?: boolean
  style?: Object
}

function outlinedTextField(props: IProps) {
  // const { classes, myfunction, myLabel, myType } = props
  const {
    classes,
    onChange,
    myLabel,
    myType,
    fullWidth,
    multiline,
    autoFocus,
    LabelShrink,
    myId,
    style
  } = props
  const cssClasses: any = { ...classes, ...style }
  return (
    <TextField
      className={cssClasses.root}
      fullWidth={fullWidth || true}
      id={myId || myType}
      label={myLabel}
      variant="outlined"
      type={myType || ''}
      onChange={onChange.bind('')}
      multiline={multiline || false}
      autoFocus={autoFocus}
      InputLabelProps={{ shrink: LabelShrink }}
      InputProps={{
        classes: {
          input: cssClasses.input
        }
      }}
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

import React from 'react'
import PropTypes from 'prop-types'
// import classNames from 'classnames'
import Button from '@material-ui/core/Button'
import { withStyles, MuiThemeProvider, Theme } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice'
import Icon from '@material-ui/core/Icon'
import SaveIcon from '@material-ui/icons/Save'

import { theme as defaultTheme } from '../../theme'

const styles = (theme: Theme) => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
})

export interface IbuttonContent {
  color: 'primary' | 'default'
  text: string
}

export interface IProps {
  classes: any
  onClick: Function
  buttonContent: IbuttonContent
  fullWidth?: boolean
}

const IconLabelButtons: React.SFC<IProps> = ({
  classes,
  onClick,
  fullWidth,
  buttonContent: { color, text }
}: IProps) => {
  // const {
  //   classes,
  //   onClick,
  //   fullWidth,
  //   buttonContent: { color, text }
  // } = props
  return (
    <Button
      fullWidth={fullWidth || true}
      onClick={onClick.bind('')}
      variant="contained"
      color={color}
      className={classes.button}
    >
      {text}
      <CloudUploadIcon className={classes.rightIcon} />
    </Button>
  )
}

// IconLabelButtons.propTypes = {
//   classes: PropTypes.object.isRequired
// }

export default withStyles(styles)(IconLabelButtons)
import React from 'react'
import PropTypes from 'prop-types'
// import classNames from 'classnames'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice'
import Icon from '@material-ui/core/Icon'
import SaveIcon from '@material-ui/icons/Save'

const styles = (theme: any) => ({
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
}

const IconLabelButtons: React.SFC<IProps> = (props: IProps) => {
  const {
    classes,
    onClick,
    buttonContent: { color, text }
  } = props
  console.log(onClick)
  return (
    <Button
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

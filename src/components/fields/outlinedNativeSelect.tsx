import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
}))

function outlinedNativeSelect(props: any) {
  const classes = useStyles()
  const { selectValues, onChange } = props
  const [doState, setDoState] = useState('')
  return (
    <TextField
      id="filled-select-currency-native"
      select
      label="Native select"
      value={doState}
      onChange={onChange.bind('')}
      SelectProps={{
        native: true,
        MenuProps: {
          className: classes.menu
        }
      }}
      helperText="Please select your currency"
      margin="normal"
      variant="filled"
    >
      {selectValues.map((option: any) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>
  )
}

export default outlinedNativeSelect

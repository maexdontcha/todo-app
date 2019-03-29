import React from 'react'

import Card from '@material-ui/core/Card'
import { Flex, Box } from 'rebass'
import { makeStyles } from '@material-ui/styles'
import { FormControlLabel, Checkbox, Typography, Chip } from '@material-ui/core'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import SvgIcon from '@material-ui/core/SvgIcon'

const useStyles = makeStyles({
  card: {
    display: 'flex',
    minWidth: 340
  },
  chip: {
    height: 20
  }
})
interface IProps {}

const FlagIcon = ({ color, size }: { color: any; size: any }) => (
  <SvgIcon fontSize={size}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" fill={color} />
  </SvgIcon>
)

const TaskCard = (props: IProps) => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <Flex
        alignItems="center"
        justifyContent="center"
        style={{ width: '100%' }}
      >
        <Box width={1 / 6}>
          <Checkbox
            color="primary"
            icon={<CheckBoxOutlineBlankIcon fontSize="default" />}
            checkedIcon={<CheckBoxIcon fontSize="default" />}
            value="checkedI"
          />
        </Box>
        <Box width={3 / 6}>
          <Flex
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <Box width={1}>
              <Typography variant="h6" component="h1">
                Title
              </Typography>
            </Box>
            <Box width={1}>
              <Typography variant="subtitle1" component="h2">
                Projekt
              </Typography>
            </Box>
          </Flex>
        </Box>
        <Box width={2 / 6}>
          <Chip label="8" variant="outlined" className={classes.chip} />
          <FlagIcon size="medium" color="yellow" />
        </Box>
      </Flex>
    </Card>
  )
}

export default TaskCard

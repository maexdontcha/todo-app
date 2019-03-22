import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import PowerIcon from '@material-ui/icons/Power'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'
import { Flex, Box } from 'rebass'
import Fade from 'react-reveal/Fade'

const styles = {
  root: {
    flexGrow: 1,
    boxShadow: 'none'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

const _Tabbar: React.SFC<{
  theme: any
  title: string
  changeHeader: boolean
}> = (props: any) => {
  const { classes, title, changeHeader } = props
  return (
    <div className={classes.root}>
      <AppBar
        className={props.classes.root}
        position={changeHeader ? 'absolute' : 'sticky'}
        color={'inherit'}
      >
        <Toolbar style={{ minHeight: 35, padding: 0 }}>
          {changeHeader ? (
            <React.Fragment>
              <Fade duration={300}>
                <Flex
                  style={{ width: '100vw' }}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box width={1 / 4} style={{ textAlign: 'left' }}>
                    <Button style={{ textTransform: 'none' }}>
                      <ArrowBackIcon />
                      <Typography variant="h3" className={props.classes.grow}>
                        Zurück
                      </Typography>
                    </Button>
                  </Box>
                  <Box style={{ textAlign: 'center' }} width={1 / 2}>
                    <Typography variant="h3" className={props.classes.grow}>
                      {props.title}
                    </Typography>
                  </Box>
                  <Box width={1 / 4} style={{ textAlign: 'right' }}>
                    <IconButton aria-label="Delete" className={classes.margin}>
                      <PowerIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Flex>
              </Fade>
            </React.Fragment>
          ) : (
            ''
          )}
        </Toolbar>
      </AppBar>
      <AppBar
        className={props.classes.root}
        position={'static'}
        color={'inherit'}
      >
        <Toolbar style={{ minHeight: 50 }}>
          <Typography variant="h1" className={props.classes.grow}>
            {props.title}
          </Typography>
          {/* <Fab
            color="primary"
            size="small"
            aria-label="Add"
            className={classes.margin}
          >
            <PowerIcon />
          </Fab> */}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(_Tabbar)

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'
import { Flex, Box } from 'rebass'
import Fade from 'react-reveal/Fade'
import { createBrowserHistory } from 'history'

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
interface IProps {
  classes?: any
  title: string
  rightComponent?: any
  useScroll?: boolean
  showTitle?: boolean
  showLeft?: boolean
  showRight?: boolean
  // scrollElement?: any
}

// Man brauch einen Element mit Classe Tabbar-scroll-Element damit es funktioniert

class _Tabbar extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      display: props.display || false,
      useScroll: props.useScroll ? false : true,
      showTitle: props.showTitle || false,
      showLeft: props.showLeft || false,
      showRight: props.showRight || false
    }
    console.log(this.state)
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    if (this.props.useScroll) {
      let elem1 = document.getElementsByClassName('Tabbar-scroll-Element')[0]
      elem1.addEventListener('scroll', (e: any) => {
        this.handleScroll(elem1.scrollTop)
      })
    }
  }
  shouldComponentUpdate(nextProps: any, nextState: any) {
    return this.state.useScroll !== nextState.useScroll
  }

  componentWillUnmount() {
    if (this.props.useScroll) {
      var elem1 = document.getElementsByClassName('Tabbar-scroll-Element')[0]
      elem1.removeEventListener('scroll', this.handleScroll)
    }
  }

  handleScroll(position: any) {
    if (position >= 44) {
      this.setState({
        useScroll: true,
        showLeft: true,
        showRight: true,
        showTitle: true
      })
    }
    if (position < 44) {
      this.setState({
        useScroll: false,
        showLeft: this.props.showLeft || false,
        showRight: this.props.showRight || false,
        showTitle: this.props.showTitle || false
      })
    }
  }

  render() {
    const { classes, title, rightComponent } = this.props
    const { display, showTitle, showLeft, showRight, useScroll } = this.state
    console.log('render Tabbar')
    return (
      <AppBar className={classes.root} position={'sticky'} color={'inherit'}>
        <Toolbar style={{ minHeight: 35, padding: 0 }}>
          {(useScroll && !display) ||
          (!useScroll && display) ||
          (useScroll && display) ? (
            <React.Fragment>
              <Fade duration={300}>
                <Flex
                  style={{ width: '100vw' }}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box width={1 / 4} style={{ textAlign: 'left' }}>
                    {showLeft ? (
                      <Button
                        style={{ textTransform: 'none' }}
                        onClick={() => {
                          createBrowserHistory().goBack()
                        }}
                      >
                        <ArrowBackIcon color="primary" />

                        <Typography
                          variant="h3"
                          color="primary"
                          className={classes.grow}
                        >
                          Zurück
                        </Typography>
                      </Button>
                    ) : (
                      ''
                    )}
                  </Box>
                  <Box style={{ textAlign: 'center' }} width={1 / 2}>
                    {showTitle ? (
                      <Typography variant="h3" className={classes.grow}>
                        {title}
                      </Typography>
                    ) : (
                      ''
                    )}
                  </Box>
                  <Box width={1 / 4} style={{ textAlign: 'right' }}>
                    {showRight
                      ? rightComponent
                        ? { rightComponent }
                        : ''
                      : ''}
                  </Box>
                </Flex>
              </Fade>
            </React.Fragment>
          ) : (
            ''
          )}
        </Toolbar>
      </AppBar>
    )
  }
}
export default withStyles(styles)(_Tabbar)

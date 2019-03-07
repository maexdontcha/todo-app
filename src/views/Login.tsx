import React, { Component } from 'react'

// import { Link } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'

import { LoginForm } from '../containers'
import { Flex, Box } from 'rebass'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'

interface IProps {}
interface IState {}

class Login extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
  }
  linkRegister = (props: any) => <RouterLink to="/register" {...props} />
  linkResetpassword = (props: any) => <RouterLink to="/register" {...props} />

  render() {
    return (
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
        style={{ height: '100vh' }}
      >
        <Box p={3} width={1}>
          <Typography variant="h3" gutterBottom align={'center'}>
            Willkommen zurück
          </Typography>
          <Typography variant="h5" gutterBottom align={'center'}>
            deine tolle Todo-App
          </Typography>
        </Box>
        <Box p={3} width={'300px'}>
          <LoginForm />
        </Box>

        <Box p={3} width={'300px'}>
          <Link component={this.linkResetpassword}>Password Vergessen?</Link>
        </Box>

        <Box p={3} width={'300px'}>
          <Divider variant="fullWidth" />
        </Box>

        <Box p={3} width={'300px'} color="white">
          <Typography variant="body1" gutterBottom align={'center'}>
            Noch keinen Account? {` `}
            <Link component={this.linkRegister}>Registrieren</Link>
          </Typography>
        </Box>
      </Flex>
    )
  }
}
export default Login

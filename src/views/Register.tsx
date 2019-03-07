import React, { Component } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { SignupForm } from '../containers'
import { Flex, Box } from 'rebass'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Link from '@material-ui/core/Link'

interface IProps {}
interface IState {}

class Register extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
  }

  linkLogin = (props: any) => <RouterLink to="/login" {...props} />

  render() {
    return (
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
        style={{ height: '100vh' }}
      >
        <Box p={3} width={1}>
          <Typography component="h2" variant="h2" gutterBottom align={'center'}>
            Registrieren
          </Typography>
        </Box>
        <Box p={3} width={'300px'}>
          <SignupForm />
        </Box>

        <Box p={3} width={'300px'}>
          <Divider variant="fullWidth" />
        </Box>

        <Box p={3} width={'300px'} color="white">
          <Link component={this.linkLogin}>Zurück zum Login</Link>
        </Box>
      </Flex>
    )
  }
}
export default Register

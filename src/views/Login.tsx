import React, { Component } from 'react'

import { LoginForm } from '../components'
import { Flex, Box } from 'rebass'

class Login extends Component {
  render() {
    return (
      <div>
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          style={{ height: '100vh' }}
        >
          <Box p={3} width={1} color="magenta" bg="black">
            <h1 style={{ textAlign: 'center' }}>Login</h1>
          </Box>
          <Box p={3} width={'300px'} color="white" bg="magenta">
            <LoginForm />
          </Box>
        </Flex>
      </div>
    )
  }
}
export default Login

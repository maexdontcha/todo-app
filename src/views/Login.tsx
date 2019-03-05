import React, { Component } from 'react'

import { LoginForm, SignupForm } from '../containers'
import { Flex, Box } from 'rebass'
import { createGlobalStyle } from 'styled-components'

interface IProps {}
interface IState {
  showRegister: boolean
}

class Login extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      showRegister: false
    }
  }

  register() {
    this.setState({ showRegister: !this.state.showRegister })
  }
  render() {
    const { showRegister } = this.state
    return (
      <div>
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          style={{ height: '100vh' }}
        >
          <Box p={3} width={1} color="magenta" bg="black">
            <h1 style={{ textAlign: 'center' }}>
              {showRegister ? <div>Registerieen</div> : <div>Login!</div>}
            </h1>
          </Box>
          <Box p={3} width={'300px'} color="white" bg="magenta">
            {showRegister ? <SignupForm /> : <LoginForm />}
          </Box>
          <button onClick={this.register.bind(this)}>
            {showRegister ? <div>Back to Login!</div> : <div>Register!</div>}
          </button>
        </Flex>
      </div>
    )
  }
}
export default Login

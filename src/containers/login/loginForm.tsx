// React
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
// Redux API

import { userLogin } from '../../redux/userLogin'
import { IAppState } from '../../redux/store'
import { connect } from 'react-redux'

// AWS API
import { Auth } from 'aws-amplify'

// _components
import LoginInput from '../../components/login/loginInputs'
import LoginButton from '../../components/login/loginButton'

interface IfuncDir {
  [key: string]: Function
  email: Function
  password: Function
}

const LoginForm: React.SFC<{}> = (props: any) => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('1')
  const [password, setPassword] = useState('1')
  const { classes } = props

  const funcDir: IfuncDir = {
    email: setEmail,
    password: setPassword
  }

  const handleLogin = () => {
    setLoading(true)
    runLogin(props.userLogin, setLoading, {
      email: email,
      password: password
    })
    setPassword('')
  }

  const validateForm = () => {
    return email.length > 0 && password.length > 0
  }

  // Handle Change in singup Form
  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    funcDir[event.currentTarget.id](event.currentTarget.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault()

    setLoading(true)

    try {
      await Auth.signIn(email, password)
      await Auth.currentSession()
        .then(token => {
          props.userLogin({
            payload: token,
            type: 'LOGIN'
          })
        })
        .catch(err => {
          console.log(err)
        })

      renderRedirect()
      setLoading(false)
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  const renderRedirect = () => {
    return <Redirect to="/" />
  }

  return (
    <React.Fragment>
      {loading ? (
        <div>Spinner</div>
      ) : (
        <React.Fragment>
          <form noValidate autoComplete="on">
            <LoginInput
              onChange={handleChange}
              myLabel={'password'}
              myType={'password'}
            />
            <LoginInput
              onChange={handleChange}
              myLabel={'email'}
              myType={'email'}
            />
            <LoginButton onClick={handleSubmit} />
          </form>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

const mapStateToProps = (store: IAppState) => {
  return {
    // userLogin: store.userState
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    userLogin: (transfer: any) =>
      dispatch(
        userLogin({
          payload: transfer.payload,
          type: transfer.type
        })
      )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

const runLogin = (
  PropsuserLogin: Function,
  setLoading: Function,
  credentials: any
) => {
  fetch('https://jsonplaceholder.typicode.com/users/10')
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then(myJson => {
      PropsuserLogin({
        payload: myJson,
        type: 'LOGIN'
      })
    })
    .catch(err => {
      console.log(err)
      setLoading(false)
    })
}

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
import {
  OutlinedTextField,
  LoginButton,
  IconLabelButtons,
  CircularIndeterminate
} from '../../components'

interface IfuncDir {
  [key: string]: Function
  email: Function
  password: Function
}

interface IHooks {
  email: string
  password: string
  setLoading?: Function | undefined
}
export const validateForm = ({ email, password }: IHooks) => {
  if (email.length > 0 && password.length > 0) {
    return true
  } else {
    throw new Error('fehler')
  }
}

export const handleSubmit = async ({ email, password, setLoading }: IHooks) => {
  if (setLoading) setLoading(true)

  try {
    validateForm({ email, password })
    await Auth.signIn(email, password)
    await Auth.currentSession()
      .then(token => {
        if (setLoading) setLoading(false)
        userLogin({
          payload: token,
          type: 'LOGIN'
        })
        renderRedirect('/')
      })
      .catch(err => {
        console.log(err.message)
      })
  } catch (err) {
    console.log(err.message)
    if (setLoading) setLoading(false)
  }
}

const renderRedirect = (path: string) => {
  return <Redirect to={path} />
}

const LoginForm: React.SFC<{}> = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const funcDir: IfuncDir = {
    email: setEmail,
    password: setPassword
  }

  // Handle Change in singup Form
  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    funcDir[event.currentTarget.id](event.currentTarget.value)
  }

  return (
    <React.Fragment>
      {loading ? (
        <CircularIndeterminate />
      ) : (
        <form noValidate autoComplete="on">
          <OutlinedTextField
            onChange={handleChange}
            myLabel={'email'}
            myType={'email'}
          />
          <OutlinedTextField
            onChange={handleChange}
            myLabel={'password'}
            myType={'password'}
          />

          <IconLabelButtons
            onClick={() => {
              handleSubmit({ email, password, setLoading })
            }}
            buttonContent={{ color: 'primary', text: 'Login' }}
          />
        </form>
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

// const runLogin = (
//   PropsuserLogin: Function,
//   setLoading: Function,
//   credentials: any
// ) => {
//   fetch('https://jsonplaceholder.typicode.com/users/10')
//     .then(response => {
//       if (!response.ok) {
//         throw Error(response.statusText)
//       }
//       return response.json()
//     })
//     .then(myJson => {
//       PropsuserLogin({
//         payload: myJson,
//         type: 'LOGIN'
//       })
//     })
//     .catch(err => {
//       console.log(err)
//       setLoading(false)
//     })
// }

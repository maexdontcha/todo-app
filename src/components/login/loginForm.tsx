import React, { useState } from 'react'

import { userLogin } from '../../redux/userLogin'
import { IAppState } from '../../redux/store'
import { connect } from 'react-redux'
import LoginInput from './loginInputs'
import LoginButton from './loginButton'

const LoginForm: React.SFC<{}> = (props: any) => {
  const [loading, setLoading] = useState(false)
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const { classes } = props
  return (
    <React.Fragment>
      {loading ? (
        <div>Spinner</div>
      ) : (
        <React.Fragment>
          <form noValidate autoComplete="on">
            <LoginInput
              myfunction={setpassword}
              myLabel={'password'}
              myType={'password'}
            />
            <LoginInput
              myfunction={setemail}
              myLabel={'email'}
              myType={'email'}
            />
            <LoginButton
              onClick={() => {
                setLoading(true)
                runLogin(props.userLogin, setLoading, {
                  email: email,
                  password: password
                })
                setpassword('')
              }}
            />
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
  spinner: Function,
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
      spinner(false)
    })
}

// <ReactReduxContext.Consumer>
//   {({ store }: any) => (
// <button
//   onClick={() => {
//     store.dispatch(
//       userLogin({
//         payload: {
//           username: 'max',
//           email: 'max@irgenwas'
//         },
//         type: EUserActionTypes.LOGIN
//       })
//     )
//   }}
// >
//   LOGIN
// </button>
//   )}
// </ReactReduxContext.Consumer>

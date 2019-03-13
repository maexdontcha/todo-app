// React
import React, { useState } from 'react'

// Redux API
// import { userLogin } from '../../../redux/userLogin'
// import { IAppState } from '../../../redux/store'
// import { connect } from 'react-redux'

//material-ui
import { FlightTakeoff } from '@material-ui/icons'

// _components
import {
  OutlinedTextField,
  IconLabelButtons,
  CircularIndeterminate
} from '../../../components'

// Types
import { IfuncDir, FhandleHookChange } from './Types.loginForm'

// Functions
import { handleSubmit } from './Function.loginForm'

const LoginForm: React.SFC<{}> = props => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const funcDir: IfuncDir = {
    email: setEmail,
    password: setPassword
  }

  // Handle Change in singup Form
  const handleChange: FhandleHookChange = event => {
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
              handleSubmit({
                email,
                password,
                setLoading,
                props: props
              })
            }}
            buttonContent={{
              color: 'primary',
              text: 'Login',
              icon: <FlightTakeoff />
            }}
          />
        </form>
      )}
    </React.Fragment>
  )
}

export default LoginForm
// const mapStateToProps = (store: IAppState) => {
//   return {
//     // userLogin: store.userState
//   }
// }

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     userLogin: (transfer: any) =>
//       dispatch(
//         userLogin({
//           payload: transfer.payload,
//           type: transfer.type
//         })
//       )
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginForm)

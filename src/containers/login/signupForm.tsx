// React
import React, { useState } from 'react'

// Redux API
import { connect } from 'react-redux'
import { IAppState } from '../../redux/store'
import { userLogin } from '../../redux/userLogin'

// AWS API
import { Auth } from 'aws-amplify'

// _components
import {
  OutlinedTextField,
  IconLabelButtons,
  CircularIndeterminate
} from '../../components'

// Interfaces
interface IfuncDir {
  [key: string]: Function
  email: Function
  name: Function
  workspace: Function
  password: Function
  confirmPassword: Function
}

interface IState {}

const SignupForm: React.SFC<IState> = (props: any) => {
  const [loading, setLoading] = useState(false)
  const [sendRegistration, setSendRegistration] = useState(false)

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [workspace, setWorkspace] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const funcDir: IfuncDir = {
    email: setEmail,
    name: setName,
    workspace: setWorkspace,
    password: setPassword,
    confirmPassword: setConfirmPassword
  }
  const { classes } = props

  const proofInput = () => {
    if (
      email.length != 0 &&
      name.length != 0 &&
      workspace.length != 0 &&
      password.length != 0 &&
      password === confirmPassword
    ) {
      return true
    } else {
      return false
    }
  }

  const handleSubmit = async (
    event: React.MouseEvent<HTMLElement>
  ): Promise<void> => {
    event.preventDefault()
    console.log(workspace)
    if (proofInput()) {
      setLoading(true)

      try {
        await Auth.signUp({
          username: email,
          password: password,
          attributes: {
            email: email,
            name: name,
            'custom:workspace': workspace
          }
        })
      } catch (e) {
        console.log(e.message)
      }

      setLoading(false)
      setSendRegistration(true)
    }
  }

  // Handle Change in singup Form
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    funcDir[e.currentTarget.id](e.currentTarget.value)
  }

  // render singupForm
  const renderForm = (): JSX.Element => (
    <React.Fragment>
      <form noValidate autoComplete="on">
        <OutlinedTextField
          onChange={handleChange}
          myLabel={'email'}
          myType={'email'}
        />
        <OutlinedTextField
          onChange={handleChange}
          myLabel={'name'}
          myType={'name'}
        />
        <OutlinedTextField
          onChange={handleChange}
          myLabel={'workspace'}
          myType={'workspace'}
        />
        <OutlinedTextField
          onChange={handleChange}
          myLabel={'password'}
          myType={'password'}
        />
        <OutlinedTextField
          onChange={handleChange}
          myLabel={'confirmPassword'}
          myType={'confirmPassword'}
        />
        <IconLabelButtons
          onClick={handleSubmit}
          buttonContent={{ color: 'primary', text: 'Registrieren' }}
        />
      </form>
    </React.Fragment>
  )

  const renderSpinner = (): JSX.Element => <CircularIndeterminate />

  // render Email Link Text
  const renderLinkText = (): JSX.Element => <div>Warte auf die Kack mail</div>

  // Return Content
  return (
    <React.Fragment>
      {loading
        ? renderSpinner()
        : sendRegistration
        ? renderLinkText()
        : renderForm()}
    </React.Fragment>
  )
}

const mapStateToProps = (store: IAppState) => {
  return {}
}

const mapDispatchToProps = (dispatch: any) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm)

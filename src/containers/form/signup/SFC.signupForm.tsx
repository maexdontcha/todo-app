// React
import React, { useState } from 'react'

// material-ui
import { AddToHomeScreen } from '@material-ui/icons'

// _components
import {
  OutlinedTextField,
  IconLabelButtons,
  CircularIndeterminate
} from '../../../components'

// Api
import { handleHookChange } from '../../../api/utils/handleHookChanges'

// Types
import { IState, IProps, IfuncDir } from './Types.signupForm'

// Functions
import { handleSubmit } from './Function.signupForm'

const SignupForm: React.SFC<IState> = (props: IProps) => {
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

  // Handle Change in singup Form
  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    handleHookChange(event, funcDir)
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
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            handleSubmit(
              event,
              {
                email,
                name,
                workspace,
                password,
                confirmPassword
              },
              { setLoading, setSendRegistration }
            )
          }}
          buttonContent={{
            color: 'primary',
            text: 'Registrieren',
            icon: <AddToHomeScreen />
          }}
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

export default SignupForm

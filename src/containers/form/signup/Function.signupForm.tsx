// API AWS
import { Auth } from 'aws-amplify'

// Types
import { FhandleSubmit, FproofInput } from './Types.signupForm'

export const proofInput: FproofInput = val => {
  const { email, name, workspace, password, confirmPassword } = val
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

export const handleSubmit: FhandleSubmit = async (
  event: React.MouseEvent<HTMLElement>,
  { email, name, workspace, password, confirmPassword },
  { setLoading, setSendRegistration }
) => {
  event.preventDefault()

  if (proofInput({ email, name, workspace, password, confirmPassword })) {
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

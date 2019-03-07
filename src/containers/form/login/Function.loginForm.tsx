// React
import { Redirect } from 'react-router-dom'

// AWS API
import { Auth } from 'aws-amplify'

// Redux API
import { userLogin } from '../../../redux/userLogin'

// Types
import { FvalidateForm, FhandleSubmit } from './Types.loginForm'

export const validateForm: FvalidateForm = ({ email, password }) => {
  if (email.length > 0 && password.length > 0) {
    return true
  } else {
    throw new Error('fehler')
  }
}

export const handleSubmit: FhandleSubmit = async ({
  email,
  password,
  setLoading
}) => {
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

const renderRedirect = (path: string) => <Redirect to={path} />

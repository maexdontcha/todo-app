// React
import { Redirect } from 'react-router-dom'
import React from 'react'

// AWS API
import { Auth } from 'aws-amplify'

// Redux API
import { userLogin } from '../../../redux/userLogin'

import { createBrowserHistory } from 'history'

// Types
import { FvalidateForm, FhandleSubmit } from './Types.loginForm'

export const validateForm: FvalidateForm = ({ email, password }) => {
  if (email.length > 0 && password.length > 0) {
    return true
  } else {
    throw new Error('fehler')
  }
}
const history = createBrowserHistory()

export const handleSubmit: FhandleSubmit = async ({
  email,
  password,
  setLoading,
  props
}) => {
  if (setLoading) setLoading(true)

  try {
    validateForm({ email, password })
    await Auth.signIn(email, password)
    await Auth.currentSession()
      .then(async token => {
        if (setLoading) setLoading(false)
        props.userLogin({
          payload: token,
          type: 'LOGIN'
        })
        history.push('/')
      })
      .catch(err => {
        console.log(err.message)
        console.log(err)
      })
  } catch (err) {
    console.log(err)

    if (setLoading) setLoading(false)
  }
}

const renderRedirect = (path: string) => <Redirect to={path} />

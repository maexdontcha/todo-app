// react
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// Service Worker
import * as serviceWorker from './serviceWorker'

// Redux API
import { Provider } from 'react-redux'
import { store } from './redux'

// AWS API
import Amplify from 'aws-amplify'
import AWScognito from './AWScognito'

//indexeddb
// import { loadTodos } from './api/indexeddb/action'

// configure AWS-Congito
Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: AWScognito.cognito.REGION,
    userPoolId: AWScognito.cognito.USER_POOL_ID,
    identityPoolId: AWScognito.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: AWScognito.cognito.APP_CLIENT_ID
  },
  API: {
    endpoints: [
      {
        name: 'testApiCall',
        endpoint: AWScognito.apiGateway.URL,
        region: AWScognito.apiGateway.REGION
      }
    ],
    graphql_endpoint: `${AWScognito.apiGateway.URL}/graphql`,
    graphql_endpoint_iam_region: AWScognito.cognito.REGION
  }
})

// Render the App
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
)

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.register()

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js', { scope: '/' })
    .then(function(registration) {
      console.log('Service Worker Registered')
    })
  navigator.serviceWorker.ready.then(function(registration) {
    console.log('Service Worker Ready')
  })
}

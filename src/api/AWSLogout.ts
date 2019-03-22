// React-Redux
import { userLogin } from '../redux/userLogin'
import Dexie from 'dexie'
// AWS API
import { CognitoUserPool } from 'amazon-cognito-identity-js'
import AWScognito from '../AWScognito'
import { db } from './indexeddb/db'

export const AWSLogout = async () => {
  var poolData = {
    UserPoolId: AWScognito.cognito.USER_POOL_ID, // Your user pool id here
    ClientId: AWScognito.cognito.APP_CLIENT_ID // Your client id here
  }
  var cognitoUser = new CognitoUserPool(poolData).getCurrentUser()
  if (cognitoUser != null) {
    cognitoUser.getSession((err: Error, result: any) => {
      if (err) throw err
      if (result && cognitoUser) {
        // console.log('You are now logged in.')
        // console.log(result.accessToken.payload.device_key)

        cognitoUser.forgetSpecificDevice(
          result.accessToken.payload.device_key,
          {
            onSuccess: result => {
              console.log('call result: ' + result)
            },
            onFailure: err => {
              alert(err.message || JSON.stringify(err))
            }
          }
        )
        localStorage.clear()
      
      }
    })
  }
}

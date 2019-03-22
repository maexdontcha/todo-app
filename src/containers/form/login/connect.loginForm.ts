import { connect } from 'react-redux'

import LoginForm from './SFC.loginForm'

import { userLogin } from '../../../redux/userLogin/userAction'
const mapStateToProps = () => {
  return {}
}
function mapDispatchToProps(dispatch: any) {
  return {
    userLogin({ payload, type }: { payload: any; type: any }) {
      dispatch(userLogin({ payload, type }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

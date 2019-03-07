// React
import React from 'react'

import { connect } from 'react-redux'

import { IconLabelButtons } from '../../components'

const Test: React.SFC<{}> = (props: any) => {
  const handleSubmit = () => {
    return true
  }
  return (
    <div>
      <IconLabelButtons
        onClick={handleSubmit}
        buttonContent={{ color: 'primary', text: 'Login' }}
      />
    </div>
  )
}

const mapStateToProps = (store: any) => {
  return {}
}

const mapDispatchToProps = (dispatch: any) => {
  return {}
}

// export default Test
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test)

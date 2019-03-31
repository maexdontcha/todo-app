import { connect } from 'react-redux'

import Inbox from './Inbox'

import {
  addTaskIDB,
  editTaskIDB,
  deleteTaskIDB
} from '../../api/indexeddb/action'

const mapStateToProps = (store: any) => {
  return {
    tasks: store.taskState.tasks || []
  }
}

function mapDispatchToProps(dispatch: any) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inbox)

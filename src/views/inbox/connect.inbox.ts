import { connect } from 'react-redux'

import Inbox from './Inbox'

import {
  addTaskIDB,
  editTaskIDB,
  deleteTaskIDB
} from '../../api/indexeddb/action'

const mapStateToProps = (store: any) => {
  return {
    tasks: store.taskState.todos || []
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    handleAddTodo(title: any) {
      dispatch(addTaskIDB(title))
    },
    handleDeleteTodo(id: any) {
      dispatch(deleteTaskIDB(id))
    },
    handleUpdateTodo(id: any, done: any) {
      dispatch(editTaskIDB(id, done))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inbox)

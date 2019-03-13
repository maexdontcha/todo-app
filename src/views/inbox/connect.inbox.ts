import { connect } from 'react-redux'

import Inbox from './Inbox'

import { addTodo, updateTodo, deleteTodo } from '../../api/indexeddb/action'

const mapStateToProps = (store: any) => {
  return {
    tasks: store.taskState.todos || []
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    handleAddTodo(title: any) {
      dispatch(addTodo(title))
    },
    handleDeleteTodo(id: any) {
      dispatch(deleteTodo(id))
    },
    handleUpdateTodo(id: any, done: any) {
      dispatch(updateTodo(id, done))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inbox)

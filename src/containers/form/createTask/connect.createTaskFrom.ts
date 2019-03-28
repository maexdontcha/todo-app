import { connect } from 'react-redux'

import CreateTaskForm from './SFC.createTaskForm'

import {
  addTaskIDB,
  editTaskIDB,
  deleteTaskIDB
} from '../../../api/indexeddb/action'
const mapStateToProps = (state: any) => {
  const { todos } = state
  return {
    todos
  }
}
function mapDispatchToProps(dispatch: any) {
  return {
    handleAddTodo(title: any) {
      dispatch(addTaskIDB(title))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTaskForm)

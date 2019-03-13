import { connect } from 'react-redux'

import CreateTaskForm from './SFC.createTaskForm'

import { addTodo, updateTodo, deleteTodo } from '../../../api/indexeddb/action'
const mapStateToProps = (state:any) => {
  const { todos } = state
  return {
    todos
  }
}
function mapDispatchToProps(dispatch: any) {
  return {
    handleAddTodo(title: any) {
      dispatch(addTodo(title))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTaskForm)

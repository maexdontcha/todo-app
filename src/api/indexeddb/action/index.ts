import { db } from '../db'

export enum ETaskActionTypes {
  ADD_TODO = 'ADD_TODO',
  LOAD_TODOS = 'LOAD_TODOS',
  UPDATE_TODO = 'UPDATE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  CLEAR_TODOS = 'CLEAR_TODOS'
}
const tablename: string = 'TASKS'

export function loadTodos() {
  return (dispatch: any) => {
    db.table(tablename)
      .toArray()
      .then(todos => {
        dispatch({
          type: ETaskActionTypes.LOAD_TODOS,
          payload: todos
        })
      })
  }
}

export function addTodo(title: string) {
  return (dispatch: any) => {
    const todoToAdd = { title, done: false }
    db.table(tablename)
      .add(todoToAdd)
      .then(id => {
        dispatch({
          type: ETaskActionTypes.ADD_TODO,
          payload: Object.assign({}, todoToAdd, { id })
        })
      })
  }
}

export function deleteTodo(id: any) {
  return (dispatch: any) => {
    db.table(tablename)
      .delete(id)
      .then(() => {
        dispatch({
          type: ETaskActionTypes.DELETE_TODO,
          payload: id
        })
      })
  }
}

export function updateTodo(id: any, done: any) {
  return (dispatch: any) => {
    db.table(tablename)
      .update(id, { done })
      .then(() => {
        dispatch({
          type: ETaskActionTypes.UPDATE_TODO,
          payload: { id, done }
        })
      })
  }
}

export function clearTodos() {
  return (dispatch: any) => {
    db.table(tablename)
      .clear()
      .then(() => {
        dispatch({
          type: ETaskActionTypes.CLEAR_TODOS
        })
      })
  }
}

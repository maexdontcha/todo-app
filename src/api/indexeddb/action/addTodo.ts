import { db } from '../db'
const tablename: string = 'TASKS'

export const addTodoIDB = async (params: any) => {
  return new Promise((resolve, reject) => {
    db.table(tablename)
      .add(params)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

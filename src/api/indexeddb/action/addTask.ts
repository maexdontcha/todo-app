import { db } from '../db'
import config from '../config.json'

export const addTaskIDB = async (params: any) => {
  const tablename = config.tables.tasks.name
  return new Promise((resolve, reject) => {
    db.table(tablename)
      .add(params)
      .then((res: any) => resolve(res))
      .catch((err: any) => reject(err))
  })
}

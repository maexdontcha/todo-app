import { db } from '../db'
import config from '../config.json'

export const editTaskIDB = async (id: string, params: any) => {
  const tablename = config.tables.tasks.name
  return new Promise((resolve, reject) => {
    db.table(tablename)
      .update(id, params)
      .then((res: any) => resolve(res))
      .catch((err: any) => reject(err))
  })
}

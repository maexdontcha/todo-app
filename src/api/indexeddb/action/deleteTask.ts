import { db } from '../db'
import config from '../config.json'

export const deleteTaskIDB = async (id: string) => {
  const tablename = config.tables.tasks.name
  return new Promise((resolve, reject) => {
    db.table(tablename)
      .delete(id)
      .then((res: any) => resolve(res))
      .catch((err: any) => reject(err))
  })
}

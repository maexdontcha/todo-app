import Dexie from 'dexie'
import indexedDB from 'fake-indexeddb'
import config from './config.json'
interface Friend {
  id?: number
  editor?: string
  workspace?: string
  title?: string
  send?: boolean
}

//
// Declare Database
//
export class Database extends Dexie {
  public friends: Dexie.Table<Friend, number> // id is number in this case

  public constructor(dbName: string, tableName: string, tableModel: string) {
    super(dbName)
    this.version(1).stores({ [tableName]: tableModel })
    this.friends = this.table(tableName)
  }
}
export let db: any
if (process.env.NODE_ENV === 'test') {
  const IDBKeyRange = require('fake-indexeddb/lib/FDBKeyRange')
  db = new Dexie(config.databaseName, { indexedDB, IDBKeyRange })
  db.version(1).stores({
    TASKS: config.tables.tasks.schema
  })
} else {
  db = new Database(
    config.databaseName,
    config.tables.tasks.name,
    config.tables.tasks.schema
  )
}

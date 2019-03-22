import Dexie from 'dexie'

interface Friend {
  id?: number
  editor?: string
  workspace?: string
  title?: string
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

export const db = new Database('TODO_APP', 'TASKS', 'id++, editor, workspace, title')

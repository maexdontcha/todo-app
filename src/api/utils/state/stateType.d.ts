import { ITaskState } from '../../../redux/task/taskTypes'

export interface ITask extends ITaskState {
  taskId: string
}

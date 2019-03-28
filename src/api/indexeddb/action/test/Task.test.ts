import { addTaskIDB } from '../addTask'
import { editTaskIDB } from '../editTask'
import { deleteTaskIDB } from '../deleteTask'
import { getTaskIDB } from '../getTask'
import { loadTasksIDB } from '../loadTasks'
import { clearTasksIDB } from '../clearTasks'

const successTask = {
  id: '123',
  title: 'yoo',
  editor: 'philipp',
  workspace: 'philippsworkspace',
  send: false
}
const successTask2 = {
  id: '1233',
  title: 'yoo',
  editor: 'philipp',
  workspace: 'philippsworkspace',
  send: false
}
const updateTask = {
  id: '123',
  title: 'yoo',
  editor: 'philipp',
  workspace: 'philippsworkspace',
  send: true
}

const failTask = 'fail'

test('add Task ', async () => {
  await expect(addTaskIDB(successTask)).resolves.toBe(successTask.id)
  await expect(addTaskIDB(failTask)).rejects.toThrow()
})

test('get Task after creation ', async () => {
  await expect(getTaskIDB(successTask.id)).resolves.toMatchObject(successTask)
  await expect(getTaskIDB('fail')).resolves.toBe(undefined)
})

test('edit Task ', async () => {
  await expect(editTaskIDB(successTask.id, { send: true })).resolves.toBe(1)
  await expect(editTaskIDB('fail', failTask)).rejects.toThrow()
})

test('get Task after edit', async () => {
  await expect(getTaskIDB(successTask.id)).resolves.toMatchObject(updateTask)
  await expect(getTaskIDB('fail')).resolves.toBe(undefined)
})

test('delte Task ', async () => {
  await expect(deleteTaskIDB(successTask.id)).resolves.toBe(undefined)
})
test('get Task after deletion ', async () => {
  await expect(getTaskIDB(successTask.id)).resolves.toBe(undefined)
  await expect(getTaskIDB('fail')).resolves.toBe(undefined)
})

test('get all Tasks and clear them', async () => {
  await expect(addTaskIDB(successTask)).resolves.toBe(successTask.id)
  await expect(addTaskIDB(successTask2)).resolves.toBe(successTask2.id)
  await expect(loadTasksIDB()).resolves.toContainEqual(successTask)
  await expect(loadTasksIDB()).resolves.toContainEqual(successTask2)
  await expect(clearTasksIDB()).resolves.toBe(undefined)
  await expect(loadTasksIDB()).resolves.toEqual([])
})

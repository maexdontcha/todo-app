import gql from 'graphql-tag'
export default (param: any) => {
  return gql`
    mutation createTask(
      $workspace: String!
      $editor: String!
      $taskId: String!
      $title: String!
      ${param.creator ? '$creator: String' : ''}
      ${param.description ? '$description: String' : ''}
      ${param.priority ? '$priority: Int' : ''}
      ${param.project ? '$project: String' : ''}
      ${param.parentProject ? '$parentProject: String' : ''}
      ${param.startTime ? '$startTime: String' : ''}
      ${param.endTime ? '$endTime: String' : ''}
      ${param.category ? '$category: String' : ''}
      ${param.doState ? '$doState: String' : ''}
      ${param.complexity ? '$complexity: String' : ''}
    ) {
      createTask(
        workspace: $workspace
        editor: $editor
        taskId: $taskId
        title: $title
        ${param.creator ? 'creator: $creator' : ''}
        ${param.description ? 'description: $description' : ''}
        ${param.priority ? 'priority: $priority' : ''}
        ${param.project ? 'project: $project' : ''}
        ${param.parentProject ? 'parentProject: $parentProject' : ''}
        ${param.startTime ? 'startTime: $startTime' : ''}
        ${param.endTime ? 'endTime: $endTime' : ''}
        ${param.category ? 'category: $category' : ''}
        ${param.doState ? 'doState: $doState' : ''}
        ${param.complexity ? 'complexity: $complexity' : ''}
    )
      {
        workspace
        editor
        taskId
        creator
        title
        description
        priority
        project
        parentProject
        startTime
        endTime
        category
        doState
        complexity
      }
    }
  `
}

import gql from 'graphql-tag'

export default gql`
  query getTasksByEditor($workspace: String!, $editor: String!) {
    getTasksByEditor(workspace: $workspace, editor: $editor) {
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

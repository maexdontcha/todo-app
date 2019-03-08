import gql from 'graphql-tag'

export default gql`
  mutation createTask($workspace: String!, $editor: String!, $title: String!) {
    createTask(workspace: $workspace, editor: $editor, title: $title) {
      workspace
      taskId
    }
  }
`

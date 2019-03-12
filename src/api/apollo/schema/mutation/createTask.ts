import gql from 'graphql-tag'

export default gql`
  mutation createTask(
    $workspace: String!
    $editor: String!
    $title: String!
    $beschreibung: String
  ) {
    createTask(
      workspace: $workspace
      editor: $editor
      title: $title
      description: $beschreibung
    ) {
      workspace
      taskId
      editor
      title
      description
    }
  }
`

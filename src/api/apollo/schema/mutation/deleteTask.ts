import gql from 'graphql-tag'
export default gql`
   deleteTask(workspace: String!, taskId: String!): Boolean
    mutation deleteTask(
      $workspace: String!
      $taskId: String!
    ) {
        deleteTask(
        workspace: $workspace
        editor: $editor
    )
    }
  `
}

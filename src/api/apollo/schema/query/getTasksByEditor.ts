import gql from 'graphql-tag'

export default gql`
  query getTasksByEditor($workspace: String!, $editor: String!) {
    getTasksByEditor(workspace: $workspace, editor: $editor) {
      workspace
      title
      editor
      description
    }
  }
`

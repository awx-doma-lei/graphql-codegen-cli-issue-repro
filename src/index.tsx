import { gql } from '@apollo/client';

const GET_NODE = gql`
  query GetNode($id: ID!) {
    node(id: $id) {
      id
    }
  }
`

const a = {} satisfies object;
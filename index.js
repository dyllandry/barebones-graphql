const { graphql, buildSchema } = require('graphql')

// Definition of everything that could be queried.
const schema = buildSchema(`
  type Query {
    firstName: String
  }
`)

// Resolving queries with data, possibly from a remote database.
const rootResolver = {
  firstName: () => {
    return 'Dylan'
  }
}

// Execute against a schema our query for "firstName" with supplied resolvers.
graphql(schema, '{ firstName }', rootResolver)
.then(response => {
  console.log(response)
})

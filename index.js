import { GraphQLServer } from 'graphql-yoga'


const server = new GraphQLServer({
  typeDefs: "graphQL/schema.graphql"
})

server.start(() => console.log("Server is runnin' Baby"));
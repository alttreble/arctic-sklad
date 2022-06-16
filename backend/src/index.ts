import 'graphql-import-node';
import {ApolloServer} from "apollo-server";

import resolvers from './graphql/resolvers';
import * as typeDefs from './graphql/schema.graphql';
import buildContext from './context';

const server = new ApolloServer({
  
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  context: buildContext()
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀 The Arctic Sklad Server is ready at ${url}`);
});
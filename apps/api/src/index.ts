import 'graphql-import-node';
import 'module-alias/register';
import {ApolloServer} from "apollo-server";

import resolvers from '@app/resolvers';
import * as typeDefs from '@app/graphql/schema.graphql';
import context from '@app/context';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  context
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀 The Arctic Sklad Server is ready at ${url}`);
});


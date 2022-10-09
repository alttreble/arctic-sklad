import 'graphql-import-node';
import {ApolloServer} from "apollo-server";

import resolvers from '@app/resolvers';
import { typeDefs } from '@app/graphql';
import initContext from '@app/context';
import notificationsStartup from '@app/services/notification/startup';
import logger from '@app/logger';

const context = initContext();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  context
});

// The `listen` method launches a web server.
server.listen().then(async ({ url }) => {
  await notificationsStartup(context);
  logger.info(`🚀 The Arctic Sklad Server is ready at ${url}`);
});


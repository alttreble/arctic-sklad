import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../generated/graphql';
import env from "../config/dynamic.public"

const fetch = new GraphQLClient(env.PUBLIC_API_URL);
const client = getSdk(fetch);

export default client;

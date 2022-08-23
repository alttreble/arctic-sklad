import { GraphQLClient } from 'graphql-request'
    import { getSdk } from '../generated/graphql'

const fetch = new GraphQLClient('http://localhost:4000/')
const client = getSdk(fetch)

export default client

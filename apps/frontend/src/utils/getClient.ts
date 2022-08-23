import { GraphQLClient } from 'graphql-request'
    import { getSdk } from '../generated/graphql'

export default function getClient() {
    const fetch = new GraphQLClient('http://localhost:4000/')
    return getSdk(fetch)
}
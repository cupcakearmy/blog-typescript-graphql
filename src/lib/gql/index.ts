import { GraphQLClient } from 'graphql-request'
import { getSdk } from './gen'

const client = new GraphQLClient('https://api.spacex.land/graphql/')
export const SDK = getSdk(client)

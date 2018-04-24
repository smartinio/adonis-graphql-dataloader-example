const { makeExecutableSchema } = require('graphql-tools')
const fs = require('fs')
const typeDefs = fs.readFileSync(__dirname + '/types.graphql', { encoding: 'utf8' })
const resolvers = require('./resolvers')

module.exports = makeExecutableSchema({ typeDefs, resolvers })
'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')
const schema = use('App/Data/GraphQL/schema')
const { graphqlAdonis, graphiqlAdonis } = require('apollo-server-adonis')
const createLoaders = use('App/Data/Loaders')
const DataLoader = require('dataloader')

Route.route('/graphql', graphqlAdonis({
  schema,
  context: {
    loaders: createLoaders()
  }
}), ['GET', 'POST'])

Route.get('/', graphiqlAdonis({
  endpointURL: '/graphql'
}))

const { createLoader } = use('App/Helpers')

/**
 * Define your loaders here.
 * Each key should be a valid
 * instance of DataLoader.
 */
const loaders = () => ({
  users: createLoader('App/Models/User'),
  roles: createLoader('App/Models/Role'),
// foos: new DataLoader((keys) => fetch(keys))
})

module.exports = loaders

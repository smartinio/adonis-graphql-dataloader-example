const DataLoader = require('dataloader')

/**
 * Creates a dataloader for a supplied model.
 * 
 * @param {String} model e.g. 'App/Models/User'
 * @returns {DataLoader}
 */
function createLoader (model) {
  let Model = use(model)
  let batchLoadFn = (keys) => {
    console.log(`*** loading all '${model}' with ids [${keys}] from database`)
    return Model
      .query()
      .whereIn('id', keys)
      .fetch()
      .then(({ rows }) => _sort(keys, rows))
  }
  return new DataLoader(batchLoadFn)
}

function _sort(keys, rows) {
  return keys.map(id => rows.find(r => r.id === id))
}

module.exports = createLoader
'use strict'

const Model = use('Model')

class Role extends Model {
  users () {
    return this.hasMany('App/Models/User')
  }
}

module.exports = Role

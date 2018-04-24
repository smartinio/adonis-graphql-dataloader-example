const User = use('App/Models/User')

module.exports = {
  Query: {
    async allUsers () {
      const users = await User.all()
      return users.toJSON()
    }
  },
  User: {
    async role (user, _, { loaders: { roles } }) {
      const role = await roles.load(user.role_id)
      return role.toJSON()
    }
  }
}
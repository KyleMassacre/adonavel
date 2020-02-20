'use strict'

class StoreUser {

  get validateAll () {
    return true
  }

  async authorize() {
    return true
  }

  get rules () {
    return {
      username: 'required|min:5|max:15|unique:users,username',
      password: 'required|confirmed|min:6',
      email: 'required|email|unique:users,email'
    }
  }

  get messages() {
    return {
      'unique': 'That {{field}} already exists',
      'confirmed': 'Your {{field}}s must match',
      'min': 'Your {{field}} must be more than {{argument.0}} characters long',
      'max': 'Your {{field}} must be less than {{argument.0}} characters long'
    }
  }
}

module.exports = StoreUser

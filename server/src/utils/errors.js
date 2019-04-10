
class ParameterError extends Error {
  constructor (message) {
    super(...arguments)
    this.name = 'ParameterError'
    this.status = 400
    this.message = message
    // console.log('In constructor for error PE')
  }
}

class AssignmentMismatchError extends Error {
  constructor (message) {
    super(...arguments)
    this.name = AssignmentMismatchError.NAME()
    this.status = 400
    this.message = message
  }
  static NAME () { return 'AssignmentMismatchError' }
}

class ConfigurationChangeError extends Error {
  constructor (message) {
    super(...arguments)
    this.name = 'ConfigurationChangeError'
    this.status = 400
    this.message = message
  }
}

class SystemError extends Error {
  constructor (message) {
    super(...arguments)
    this.name = 'SystemError'
    this.status = 500
    this.message = message
  }
}


/*
Possible other error classes. To use consider setting the name and/or status properties

class ConsumerError extends Error {
  constructor (message) {
    super(...arguments)
    this.message = message
  }
}
class ExtensionError extends Error {
  constructor (message) {
    super(...arguments)
    this.message = message
  }
}
class StoreError extends Error {
  constructor (message) {
    super(...arguments)
    this.message = message
  }
}
class SignatureError extends Error {
  constructor (message) {
    super(...arguments)
    this.message = message
  }
}
class NonceError extends Error {
  constructor (message) {
    super(...arguments)
    this.message = message
  }
}
class OutcomeResponseError extends Error {
  constructor (message) {
    super(...arguments)
    this.message = message
  }
}
*/

module.exports = {
  // ConsumerError,
  // ExtensionError,
  // StoreError,
  // SignatureError,
  // NonceError,
  // OutcomeResponseError
  AssignmentMismatchError,
  SystemError,
  ConfigurationChangeError,
  ParameterError
}

class EdEhrError extends Error {
  constructor (message, errorData) {
    super(...arguments)
    this.type = 'EdEhrError'
    this.message = message
    this.errorData = errorData
  }
}

class ParameterError extends EdEhrError {
  constructor (message, errorData) {
    super(...arguments)
    this.name = 'ParameterError'
    this.status = 400
    // console.log('In constructor for error PE')
  }
}

class AssignmentMismatchError extends EdEhrError {
  constructor (message, errorData) {
    super(...arguments)
    this.name = AssignmentMismatchError.NAME()
    this.status = 400
  }
  static NAME () { return 'AssignmentMismatchError' }
}

class ConfigurationChangeError extends EdEhrError {
  constructor (message, errorData) {
    super(...arguments)
    this.name = 'ConfigurationChangeError'
    this.status = 400
  }
}

class SystemError extends EdEhrError {
  constructor (message, errorData) {
    super(...arguments)
    this.name = 'SystemError'
    this.status = 500
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

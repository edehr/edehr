
/*
the ok and fail functions are used in route controllers. See for example base.js
*/

/**
  Returns a function that will write the result as a JSON to the response
*/
export function ok (res) {
  return (data) => {
    res.json(data)
  }
};

/**
  Depending on the error type, will perform the following:

  Object was not found - 404 Not Found
  Invalid or missing input parameter - 400 Bad request
  Not enough privileges - 401 Unauthorized
  Unknown error - 500 Internal server error
 TODO finish this error handler
*/
export function fail (res) {
  return (error) => {
    let code = 404
    let message = 'Not found'
    switch (error.name) {
      case 'ValidationError':
        code = 400
        message = error.name + ' ' + error.message
        break
      case 'CastError' :
        code = 500
        message = error.name + ' ' + error.message
        console.log('Server utils fail CastError return 500.')
        break
      case 'MongoError' :
        code = 400
        message = error.message
        console.log('Server utils fail CastError return 500.')
        break
      default:
        console.log('Server TODO enhance error reporting for name:', error.name, ' msg:', error.message)
    }
    // ...
    console.log(code, message)
    res.status(code).send(message) // .end(message)
  }
}

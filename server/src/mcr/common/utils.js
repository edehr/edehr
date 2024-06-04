import { logError} from '../../helpers/log-error'
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
}

export function getFullUrl (req) {
  return req.protocol + '://' + req.get('host') + req.originalUrl
}

/**
  Depending on the error type, will perform the following:

  Object was not found - 404 Not Found
  Invalid or missing input parameter - 400 Bad request
  Not enough privileges - 401 Unauthorized
  Unknown error - 500 Internal server error
 TODO finish this error handler
 TODO incorporate all the errors in the ./errors.js file
*/
export function fail (req, res) {
  return (error) => {
    let code, message
    switch (error.name) {
    case 'ParameterError':
      code = error.status
      message = error.name + ' ' + error.message
      break
    case 'ValidationError':
    case 'NotAllowedError':
      code = 400
      message = error.name + ' ' + error.message
      break
    case 'NetworkError' :
      code = 500
      message = 'NetworkError'
      break
    case 'CastError' :
      code = 500
      message = error.name + ' ' + error.message
      break
    case 'MongoError' :
      code = 400
      message = error.message
      break
    default:
      // return Internal Server Error ... "something has gone wrong on the web site's server but the server could not be more specific on what the exact problem is."
      code = 500
      message = 'Unknown error:' + error.name + ' ' + error.message
      // logError('Server utils fail unknown error return 500.', message)
    }
    let url = getFullUrl(req)
    logError('Send fail status code:', code, 'message:', message, ' url:', url)
    res.status(code)
    res.json({message: message, status: code, url: url})
  }
}

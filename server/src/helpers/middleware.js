import AuthController from '../mcr/auth/auth-controller'
const debug = false

export const validatorMiddleware = (req, res, next) => {
  const authController = new AuthController()
  if (req && req.headers.authorization) {
    try {
      const result = authController.authenticate(req.headers.authorization)
      const { visitId } = result
      if (debug) console.log('result >> ', result)
      if (visitId) {
        if (debug) console.log('passingNext!!!')
        next()
      } else {
        res.status(401).send('Invalid token!')
      }
    } catch (err) {
      if (debug) console.log('validatorMiddleware caught ', err)
      res.status(401).send(err)
    }
  } else {
    if (debug) console.log('validatorMiddleware else ', req)
    res.status(401).send('A token is required')
  }
}
  
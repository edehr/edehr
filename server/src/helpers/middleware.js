const debug = false

export const validatorMiddlewareWrapper = (authController) => {
  return (req, res, next) => {
    if (req && req.headers.authorization) {
      try {
        const result = authController.authenticate(req.headers.authorization)
        const {visitId} = result
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
}
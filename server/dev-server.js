// import express from 'express'
// import bodyParser from 'body-parser'
// import db from './db'
// import { apiMiddle, apiError } from './middleware/api.js'
//
// const config = require('./config/config')
//
// const debug = require('debug')('server')
//
// const app = express()
//
// app.set('view engine', 'ejs')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
//
// db(config, (conn) => {
//   app.connection = conn
//
//   apiMiddle(app, config).then((api) => {
//     app.use('/', api)
//
//     // const sessionCounter = require('./middleware/session-counter')
//     // app.use(sessionCounter)
//
//     // catch 404 and forward to error handler
//     app.use(function (req, res, next) {
//       let { url } = req
//       var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
//       var env = process.env.NODE_ENV
//       if (url.includes('favicon')) {
//         debug('Another request for the favicon')
//         res.status(404).send('No favicon')
//       } else {
//         var msg = 'Could not find "' + fullUrl + '". Environment: ' + env
//         debug(msg)
//         res.status(404).send(msg)
//       }
//     })
//
//     apiError(app, config)
//
//     const port = config.port
//     app.listen(port, () => console.log('Server running...', port))
//   })
// })
//
// export default app

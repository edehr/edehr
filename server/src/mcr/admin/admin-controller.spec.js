// var should = require('should')
// import AdminController from './admin-controller'
// import Helper from '../common/test-helper'

// const visitId = Helper.sampleObjectId(true)
// const adminToken = Helper.generateToken(visitId, true)


// /* global describe it */
// describe('Admin controller testing', function () {
//   // before(function (done) {
//   //   helper.before(done, mongoose)
//   // })

//   let controller

//   it('AdminController', function (done) {
//     controller = new AdminController()
//     should.exist(controller)
//     done()
//   })

//   it('AdminController header checks', function () {
//     let req = {}
//     let res, router = 'router'
//     res = controller.headerCheck(req)
//     should.exist(res)
//     res.should.equal(router)
//     req = {
//       headers: {
//         authorization: 'asd asd'
//       }
//     }
//     res = controller.headerCheck(req)
//     res.should.equal(router)

//     req.headers['authorization'] = 'Bearer'
//     res = controller.headerCheck(req)
//     res.should.equal(router)

//     req.headers['authorization'] = 'Bearer ' + adminToken
//     console.log('req.headers > ', req.headers)
//     res = controller.headerCheck(req)
//     console.warn('res >> ', res)
//     // should.not.exist(res)

//   })

// })

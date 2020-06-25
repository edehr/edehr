import AdminController from './admin-controller'

/* global describe it */
describe('Admin controller testing', function () {
  let controller

  it('Properly instantiates AdminController', done => {
    controller = new AdminController()
    should.exist(controller)
    done()
  })

  it('Check properties', done => {
    controller.should.have.property('_adminLogin')
    controller.should.have.property('_adminValidate')
    controller.should.have.property('route')
    done()
  })
})

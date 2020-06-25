const type = 'activityDataController'
import ActivityDataController from './activity-data-controller'


describe(`${type} system testing`, () => {
  let controller
  controller = new ActivityDataController()
  
  it(`${type} be able to create`, done => {
    controller.should.have.property('updateAssignmentData')
    controller.should.have.property('assignmentSubmitted')
    controller.should.have.property('updateScratchData')
    controller.should.have.property('updateEvaluationData')
    controller.should.have.property('assignmentEvaluated')
    done()
  })
    
})
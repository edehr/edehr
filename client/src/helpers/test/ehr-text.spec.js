const should = require('should')
const { Text } = require('../ehr-text')
const keys = Object.keys(Text)
const val1 = 'val1', val2 = 'val2'

const responses = [
  'This assignment has been evaluated and the evaluation notes have been sent to the student',
  'Seed data can not be empty',
  `Data contains invalid keys: ${val1}`,
  'This work is licensed under a Creative Commons Attribution 4.0 International License. See http://creativecommons.org/licenses/by/4.0/',
  'Creative Commons Attribution',
  'Seed licence must be Creative Commons Attribution',
  `Coding error using ${val1} out of context`,
  `The checkset ${val1} definition is missing the options property`,
  'No visit id available',
  'This system requires the URL to the API',
  'You need to be authenticated to view this',
  'Parameters Error',
  `Return to ${val1}`,
  'Seed data must have a valid licence',
  'Seed data must have EHR data (the ehrData property)',
  'Send for evaluation',
  'Send assignment to your instructor for evaluation',
  'You will not be able to edit your assignment after submission. Are you sure you want to submit?',
  'This assignment has been sent to your instructor for evaluation. It is no longer editable.',
  'This activity is now closed for further edits',
  'Refresh token is expired',
  `The token has expired. Please, try again! \n ${val1}`,
  `Invalid token \n ${val1}`,
  'You need to be properly authenticated to do this',
  'Error when fetching token data',
  'ERROR the system should have assignments',
  `error in update assignment ${val1}`,
  `ERROR the could not get ${val1} ${val2}`,
  `error in update consumer ${val1}`,
  'ERROR the system should have consumers',
  `ERROR the could not get ${val1} ${val2}`,
  `ERROR the could not get ${val1} ${val2}`,
  'Changing learning object for this activity.',
  `ERROR the could not get ${val1} ${val2}`,
  `ERROR the could not get ${val1} ${val2}`,
  'Evaluation is done. Let the student see the evaluation notes.',
  'Evaluated',
  'Not submitted',
  'Send evaluation to student',
  'Send back for edits',
  'Send back to student for edits',
  'Submitted and waiting for evaluation',
  'Take back from student',
  'I want to edit the evaluation notes'

]

describe('testing text components', () => {
  keys.map((k, i) => {
    let val = Text[k]
    it(`Test text at key ${k}`, () => {
      if(typeof val === 'function') {
        val = val(val1, val2)
      }
      should.exist(val)
      val.should.be.equal(responses[i])
    } )
  })
})

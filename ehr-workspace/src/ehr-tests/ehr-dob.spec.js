import { computeDateOfBirth } from '../ehr-definitions/ehr-def-utils'
const should = require('should')
describe ( ' computeDateOfBirth', () => {
  it ('computeDateOfBirth leap yr', () => {
    let dob
    // specify time to keep dates in one timezone (UTC)
    // test both a leap year and a date that is just before and just after, and on the same dat
    dob = computeDateOfBirth('50', '2000-02-28T00:00', new Date('2024-02-29T00:00'))
    dob.should.equal('1974-02-28')
    dob = computeDateOfBirth('50', '2000-03-01T00:00', new Date('2024-02-29T00:00'))
    dob.should.equal('1973-03-01')
    dob = computeDateOfBirth('50', '2000-02-29T00:00', new Date('2024-02-29T00:00'))
    dob.should.equal('1974-03-01')
  })
  it ('computeDateOfBirth dec 31', () => {
    let dob
    dob = computeDateOfBirth('50', '2000-12-31T00:00', new Date('2024-12-31T00:00'))
    dob.should.equal('1974-12-31')
    dob = computeDateOfBirth('50', '2000-12-31T00:00', new Date('2025-01-01T00:00'))
    dob.should.equal('1974-12-31')
  })
  it ('computeDateOfBirth jan 1', () => {
    let dob
    dob = computeDateOfBirth('50', '2000-01-01T00:00', new Date('2024-12-31T00:00'))
    dob.should.equal('1974-01-01')
  })
  it ('computeDateOfBirth 2025-01-01', () => {
    let dob
    dob = computeDateOfBirth('50', '2000-01-01T00:00', new Date('2025-01-01T00:00'))
    dob.should.equal('1974-01-01')
  })
  it ('computeDateOfBirth 2025-01-02', () => {
    let dob
    dob = computeDateOfBirth('50', '2000-01-01T00:00', new Date('2025-01-02T00:00'))
    dob.should.equal('1974-01-01')
  })
  it ('computeDateOfBirth 2025-12-31', () => {
    let dob
    dob = computeDateOfBirth('50', '2000-01-01T00:00', new Date('2025-12-31T00:00'))
    dob.should.equal('1975-01-01')
  })
})

describe ( ' computeDateOfBirth with invalid dob input ', () => {
  it ('invalid date undefined', () => {
    let dob
    dob = computeDateOfBirth('50', undefined, new Date('2024-02-29T00:00'))
    should.not.exist(dob)
  })
  it ('invalid date empty string', () => {
    let dob
    dob = computeDateOfBirth('50', '', new Date('2024-02-29T00:00'))
    should.exist(dob)
    dob.should.equal('')
  })
  it ('invalid date invalid string', () => {
    let dob
    let input = 'foobar'
    dob = computeDateOfBirth('50', input, new Date('2024-02-29T00:00'))
    should.exist(dob)
    dob.should.equal(input)
  })
})

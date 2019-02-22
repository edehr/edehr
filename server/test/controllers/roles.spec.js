var should = require('should')
import Helper from '../helper'
const helper = new Helper()
import Role from '../../controllers/roles'

const typeName = 'Role'
const collectionName = 'roles'

/* global describe it */
describe(`${typeName} testing`, function() {
  it(`${typeName} create empty not valid`, function() {
    let m = new Role()
    should.exist(m)
    m.should.have.property('isValid')
    should.ok(!m.isValid)
    m.should.have.property('isInstructor')
    m.should.have.property('isStudent')
    m.should.have.property('isAdmin')
    m.should.have.property('isDeveloper')
  })

  it(`${typeName} create student`, function() {
    let m = new Role('Student')
    should.ok(m.isStudent)
    should.ok(m.isValid)
  })

  it(`${typeName} create instructor`, function() {
    let r = ['Instructor', 'Faculty', 'Staff']
    for (let i = 0; i < r.length; i++) {
      let m = new Role(r[i])
      should.ok(m.isInstructor, 'instructor')
      should.ok(m.isValid, 'valid')
    }
  })

  it(`${typeName} create admin`, function() {
    let r = ['Administrator', 'SysAdmin']
    for (let i = 0; i < r.length; i++) {
      let m = new Role(r[i])
      should.ok(m.isAdmin)
      should.ok(m.isValid)
    }
  })

  it(`${typeName} create content developer`, function() {
    let r = ['ContentDeveloper', 'AccountAdmin', 'Creator']
    for (let i = 0; i < r.length; i++) {
      let m = new Role(r[i])
      should.ok(m.isDeveloper)
      should.ok(m.isValid)
    }
  })

  it(`${typeName} create mixed roles`, function() {
    let r = ['ContentDeveloper', 'Administrator', 'Instructor'].join(', ')
    let m = new Role(r)
    should.ok(m.isInstructor, 'instructor')
    should.ok(m.isDeveloper, 'content developer')
    should.ok(m.isAdmin, 'admin')
    should.ok(m.isValid, 'valid')
  })

  /*
  it('should test for multiple roles being passed into the body', () => {
    const provider = new this.lti.Provider('key', 'secret');
    provider.parse_request({
      body: {
        roles: 'Instructor,Administrator',
      },
    });
  });

  it('should handle different role types from the specification', () => {
    const provider = new this.lti.Provider('key', 'secret');
    provider.parse_request({
      body: {
        roles:
          'urn:lti:role:ims/lis/Student,urn:lti:sysrole:ims/lis/Administrator,urn:lti:instrole:ims/lis/Alumni',
      },
    });
*/
})

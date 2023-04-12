import Monitor from './monitor'
const should = require('should')

describe ('monitor', () => {

  it ('monitor constructor', (done) => {
    const m = new Monitor()
    should.exist(m)
    m.should.have.property('apiEvent')
    m.should.have.property('doDay')
    m.should.have.property('doHour')
    m.should.have.property('doMinute')
    m.should.have.property('doSecond')
    m.should.have.property('getData')
    for(let i = 0; i < 60*60; i++) {
      m.worker()
      m.apiEvent()
      m.apiEvent()
    }
    m.doDay()
    const dd = m.getData()
    should.exist(dd)
    dd.should.have.property('lists')
    const lists = dd.lists
    lists.should.have.property('days')
    lists.days.length.should.equals(1)
    lists.days[0].should.equal(7076)
    done()
  })
})

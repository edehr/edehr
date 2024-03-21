import {
  convertToEventSequence,
  compareSimTimeKeys,
  makeSimTimeDayString,
  makeSimTimeKey,
  splitSimTimeKey, timeSequenceSliceData
} from '../ehr-definitions/sim-time-seq-utils'

const should = require('should')
const EHR_DATA = {
  visit: {
    admissionDay: 'Day 0',
    admissionTime: '06:00',
    diagnosis: 'aUniqueString0 --- COPD\nShortness of breath\nDizzy',
    status: 'Admitted',
    table: [
      {
        location: 'aUniqueString1',
        transferInDay: 0,
        transferInTime: '00:30',
        transferOutDay: 1,
        transferOutTime: '04:00',
        createdDate: '2022-08-17T00:37:42-07:00'
      },
      {
        location: 'there',
        transferInDay: 1,
        transferInTime: '21:31',
        transferOutDay: 2,
        transferOutTime: '23:32',
        createdDate: '2022-08-17T00:37:42-07:00'
      }
    ],
    lastUpdate: '2022-08-17T00:37:42-07:00'
  },
  neurological: {
    table: [
      {
        test: 'aUniqueString3',
        createdDate: '2022-01-25T13:28:54-08:00',
        table_name: 'Geoff Smith',
        table_profession: 'RN',
        table_day: '1',
        table_time: '2000',
        table_id: 'neurological.table.0'
      },
      {
        test: 'aUniqueString2',
        table_name: 'Geoff Smith',
        table_profession: 'RN',
        table_day: '0',
        table_time: '0900',
        table_id: 'neurological.table.0'
      },
      {
        test: 'aUniqueString4',
        table_name: 'Geoff Smith',
        table_profession: 'RN',
        table_day: '2',
        table_time: '0900',
        table_id: 'neurological.table.0'
      }
    ]
  }
}

describe( 'ehr-def-utils work', () => {

  it ('makeSimTimeKey', () => {
    let k
    k = makeSimTimeKey(0,'1234')
    k.should.equal('0000-1234')
  })

  it ('splitSimTimeKey', () => {
    let key, d, t
    key = '0000-1234';
    [d, t] = splitSimTimeKey(key)
    d.should.equal(0)
    t.should.equal('1234')
    key = '0002-2234';
    [d, t] = splitSimTimeKey(key)
    d.should.equal(2)
    t.should.equal('2234')
  })
  it ('invalid splitSimTimeKey', () => {
    let key, d, t
    key = undefined;
    [d, t] = splitSimTimeKey(key)
    should.not.exist(d, 'undefined input should result in undefined day ')
    should.not.exist(t, 'undefined input should result in undefined time ')
    key = 'foo-bar';
    [d, t] = splitSimTimeKey(key)
    should.not.exist(d, 'invalid input should result in undefined day ')
    should.not.exist(t, 'invalid input should result in undefined time ')
  })

  it ('makeSimTimeDayString', () => {
    let ds
    ds = makeSimTimeDayString(0)
    ds.should.equal('0000')
    ds = makeSimTimeDayString(10)
    ds.should.equal('0010')
  })

  it('convertToEventSequence', () => {
    // const seed = require('../resources/tseq-data.json')
    const seedData = EHR_DATA
    const timeSequence = convertToEventSequence(seedData)
    const timeKeys = Object.keys(timeSequence)
    timeKeys.should.have.length(4)
    timeKeys[1].should.equal('0000-0900')
    const content = JSON.stringify(timeSequence)
    // console.log('convertToEventSequence WIP:', content)
    content.includes('aUniqueString0').should.equal(true,'aUniqueString0')
    content.includes('aUniqueString2').should.equal(true,'aUniqueString2')
    content.includes('aUniqueString3').should.equal(true,'aUniqueString3')
  })

  it('convertToEventSequence with location table fixed', () => {
    const timeSequence = convertToEventSequence(EHR_DATA)
    const content = JSON.stringify(timeSequence, null, 2)
    content.includes('aUniqueString1').should.equal(true,'aUniqueString1')
  })
  it('compareSimTimeKeys ', () => {
    let a, b, diff
    a = '0000-1111'
    b = '0000-1112'
    diff = compareSimTimeKeys(a,b) < 0
    diff.should.equal(true)

    a = '0000-1111'
    b = '0001-0000'
    diff = compareSimTimeKeys(a,b) < 0
    diff.should.equal(true)

    a = '0000-1112'
    b = '0000-1111'
    diff = compareSimTimeKeys(a,b) > 0
    diff.should.equal(true)

    a = '0000-1111'
    b = '0000-1111'
    diff = compareSimTimeKeys(a,b) === 0
    diff.should.equal(true)
  })

  it('sliceData', () => {
    let content, key, tt
    key = '0000-0900'
    content = JSON.stringify(timeSequenceSliceData(key, EHR_DATA))
    tt = 'aUniqueString2'
    content.includes(tt).should.equal(true, tt + ' ' + key)
    tt = 'aUniqueString3'
    content.includes(tt).should.equal(false, tt + ' ' + key)
  })
  it('sliceData 2', () => {
    let content, key, tt
    key = '0001-2000'
    content = JSON.stringify(timeSequenceSliceData(key, EHR_DATA))
    tt = 'aUniqueString3'
    content.includes(tt).should.equal(true, tt + ' ' + key)
    tt = 'aUniqueString4'
    content.includes(tt).should.equal(false, tt + ' ' + key)
  })
  it('sliceData 3', () => {
    let content, key, tt
    key = '0001-2300'
    content = JSON.stringify(timeSequenceSliceData(key, EHR_DATA))
    tt = 'aUniqueString3'
    content.includes(tt).should.equal(true, tt + ' ' + key)
    tt = 'aUniqueString4'
    content.includes(tt).should.equal(false, tt + ' ' + key)
  })
  it('sliceData INF', () => {
    let content, key, tt
    key = '9999-0000'
    content = JSON.stringify(timeSequenceSliceData(key, EHR_DATA))
    tt = 'aUniqueString4'
    content.includes(tt).should.equal(true, tt + ' ' + key)
  })
})



import should from 'should'
import DemoStoreHelper from '../demo-store-helper'
import { prepareAxiosResponse } from './axios-mock-helper'
import mockData from './mockData.json'

const demoHelper = new DemoStoreHelper('some api url')

jest.mock('axios')

const token = 'demoToken'

describe('demoHelper tests', () => {

  it('createToolConsumer', async done => {
    const payload = { token }
    await prepareAxiosResponse('post', payload)
    should.doesNotThrow(async () => {
      const result = await demoHelper.createToolConsumer()
      result.data.token.should.equal(token)
      done()
    })
  })

  it('dhLoadDemoData', async done => {
    const { demoData } = mockData
    await prepareAxiosResponse('get', { demoData })
    should.doesNotThrow(async () => {
      const result = await demoHelper.dhLoadDemoData(token)
      result.data.demoData.should.equal(demoData)
      done()
    })
  })

  it('submitPersona', async done => {
    const persona = mockData.demoData.personaList[0]
    const { assignment, demoData } = mockData
    const submitData = {
      assignmentName: assignment.name, 
      externalId: assignment.externalId, 
      personaName: persona.name, 
      personaEmail: persona.email, 
      personaRole: persona.role, 
      returnUrl: 'returnUrl', 
      toolKey: demoData.toolConsumerKey
    }
    await prepareAxiosResponse('post', { submitted: true })
    should.doesNotThrow(async () => {
      const result = await demoHelper.submitPersona(token, submitData)
      result.data.submitted.should.equal(true)
      done()
    })
  })
  
  it('demoLogout', async done => {
    await prepareAxiosResponse('post', null)
    const result = await demoHelper.demoLogout(token)
    should.not.exist(result.data)
    done()
  })


})

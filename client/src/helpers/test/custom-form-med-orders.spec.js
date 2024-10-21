import { CustomFormMedOrderHelper } from '@/helpers/custom-form-med-orders'
let mockCustomPugForm = require('./mockCustomPugForm.txt')
let pug = require('pug')

describe.skip('demoHelper tests', () => {
  let html
  beforeAll( () => {
    let options = {}
    options = {pretty: '\t'} // only use for a quick look
    html = pug.render(mockCustomPugForm, options)
  })
  it('custom form handler', async () => {
    let formHandler = new CustomFormMedOrderHelper()
    formHandler.setupMeds(html)
    let mo = formHandler.customMedsByMedKey
    console.log(mo)
  })
})

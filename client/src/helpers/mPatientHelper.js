import store from '../store'
import StoreHelper from '@/helpers/store-helper'
import EhrDataModel from '@/ehr-definitions/EhrDataModel'
import InstoreHelper from '@/store/modules/instoreHelper'
class MPatientHelperWorker {

  getCurrentPatientObjectId () {
    return store.getters['mPatientStore/currentPatientObjectId']
  }

  testMatchCurrentPatient (dbObject) {
    return this.getCurrentPatientObjectId() === dbObject._id
  }

  getCurrentPatientList () {
    let list
    if (StoreHelper.isSeedEditing()) {
      console.log('------------------TO DO ------ check this works')
      list = store.getters['mPatientStore/activeCaseStudyPatientList']
    } else {
      const assignmentData = store.getters['activityDataStore/assignmentData']
      list = assignmentData.patients || []
    }
    return list
  }
  getCurrentPatient () {
    const id = store.getters['mPatientStore/currentPatientObjectId']
    return id ? this.findPatientById(id) : undefined
  }

  findPatientById (id) {
    const list = this.getCurrentPatientList()
    return list.find(p => p._id === id)
  }

  async fetchSeed (seedId) {
    let url = 'get/' + seedId
    const API = 'seed-data'
    const response = await InstoreHelper.getRequest(null, API, url)
    return response.data.seeddata
  }

  async getPatientMergedData (id) {
    const patient = this.findPatientById(id)
    // console.log('patient.ehrData', patient.ehrData)
    const seedId = patient.seedId
    if (!seedId) console.log('--------------- getPatientMergedData without seedId', seedId)
    const seedObject = await this.fetchSeed(seedId)
    const base = seedObject ? seedObject.ehrData : {}
    return EhrDataModel.MergeTwoLevels(base, patient.ehrData)
  }
}


const MPatientHelper = new MPatientHelperWorker()
export default MPatientHelper

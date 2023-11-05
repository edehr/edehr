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
    return  store.getters['mPatientStore/activeCaseStudyPatientList']
  }
  getCurrentPatient () {
    const id = store.getters['mPatientStore/currentPatientObjectId']
    return id ? this.findPatientById(id) : undefined
  }

  async fillOutPatientList (list) {
    for (let i = 0; i< list.length; i++) {
      let patient = list[i]
      let base = {}
      if (patient.seedId) {
        let seed = await this.fetchSeed(patient.seedId)
        base = seed ? seed.ehrData : {}
      }
      patient.mergedData = EhrDataModel.MergeTwoLevels(base, patient.ehrData)
      patient.keyData = EhrDataModel.ExtractKeyPatientData(patient.mergedData)
    }
    this.sortPatientList(list)
    return list
  }

  sortPatientList (list) {
    const getName = (p) => {
      return p.keyData ? p.keyData.familyName : undefined
    }
    list.sort((a, b) => {
      let aName = getName(a) || ''
      return aName.localeCompare(getName(b))
    })
  }

  findPatientById (id) {
    const list = this.getCurrentPatientList()
    return list? list.find(p => p._id === id) : undefined
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
    let base = {}
    if (!seedId) {
      console.log('--------------- getPatientMergedData without seedId. patient:', patient)
    } else {
      const seedObject = await this.fetchSeed(seedId)
      // console.log('--------------- getPatientMergedData fetch seed:', seedId)
      base = seedObject ? seedObject.ehrData : {}
    }
    return EhrDataModel.MergeTwoLevels(base, patient.ehrData)
  }


  async helpLoadInstructorPatient (patientId) {
    await store.dispatch('instructor/loadCurrentEvaluationStudentId')
    // Note that loadCurrentEvaluationStudentId also does activityDataStore/loadActivityData which sets the patient list
    let pId = patientId
    if (!pId) {
      pId = MPatientHelper.getCurrentPatientObjectId()
      if (!pId) {
        // find first patient in list
        const list = MPatientHelper.getCurrentPatientList()
        const patient = list && list.length > 0 ? list[0] : {}
        pId = patient._id
      }
    }
    if (pId) {
      await store.dispatch('mPatientStore/forInstructorSetPatient', pId)
      const patient = MPatientHelper.getCurrentPatient()
      if (patient && patient.seedId) {
        await store.dispatch('seedListStore/loadSeedContent', patient.seedId)
      }
    }
  }

}


const MPatientHelper = new MPatientHelperWorker()
export default MPatientHelper

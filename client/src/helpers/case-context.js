import store from '@/store'
import EhrDefsGrid from '@/helpers/ehr-defs-grid'

class CaseContextHelper {
  constructor () {
  }
  getPageTableShowSignature (pageKey) {
    let result = this.isFeature()
    if (result) {
      result = this.assignmentHasCaseContext()
      if (result) {
        //TODO see https://github.com/BCcampus/edehr/issues/809
        const pd = EhrDefsGrid.getPageDefinition(pageKey)
        result = pd.recHeader === true
      }
    }
    return result
  }

  isFeature () {
    return store.getters['system/caseContextFeature']
  }

  setFeature (value) {
    store.commit('system/setCaseContext', value)
  }

  getAssignmentCaseContext () {
    return store.getters['assignmentStore/assignmentCaseContext']
  }

  assignmentHasCaseContext () {
    const csData = this.getAssignmentCaseContext()
    // console.log('csData', csData)
    return !! csData.name && !!csData.day && !!csData.time
  }

}

const CaseContext = new CaseContextHelper()
export default CaseContext

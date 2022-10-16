import store from '@/store'
class EhrOnlyDemoInner {
  ehrOnlyScratch () {
    return store.getters['ehrOnlyDemoStore/ehrOnlyScratch']
  }
  ehrOnlyScratchSave (text) {
    store.dispatch('ehrOnlyDemoStore/saveScratch', text)
  }
  isActiveEhrOnlyDemo () {
    return store.getters['ehrOnlyDemoStore/isActiveEhrOnlyDemo']
  }
  setActiveEhrActive (flag) {
    if(flag)
      store.dispatch('ehrOnlyDemoStore/activateEhrOnlyDemo')
    else
      store.dispatch('ehrOnlyDemoStore/deactivateEhrOnlyDemo')
  }
  getEhrOnlySeedData () {
    return store.getters['ehrOnlyDemoStore/ehrOnlyDataSeed']
  }
  loadEhrOnlyDemo () {
    return store.getters['ehrOnlyDemoStore/ehrOnlyData']
  }
  saveEhrOnlyUserData (pageKey, newPageValue) {
    const payload = {pageKey, value: newPageValue}
    console.log('saveEhrOnlyUserData:', JSON.stringify(newPageValue))
    return store.dispatch('ehrOnlyDemoStore/ehrOnlyDataUpdate', payload)
  }

  selectCaseStudy (demoKey) {
    return store.dispatch('ehrOnlyDemoStore/selectCaseStudy', demoKey)
  }
}

const EhrOnlyDemo = new EhrOnlyDemoInner()
export default EhrOnlyDemo

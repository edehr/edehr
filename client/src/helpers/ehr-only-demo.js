import store from '@/store'
class EhrOnlyDemoInner {
  ehrOnlyScratch () {
    return store.getters['ehrOnlyDemoStore/ehrOnlyScratch']
  }
  ehrOnlyScratchSave (text) {
    return store.dispatch('ehrOnlyDemoStore/saveScratch', text)
  }
  isActiveEhrOnlyDemo () {
    return store.getters['ehrOnlyDemoStore/isActiveEhrOnlyDemo']
  }
  ehrOnlySeed () {
    return store.getters['ehrOnlyDemoStore/ehrOnlySeed']
  }
  saveEhrOnlyUserData (pageKey, newPageValue) {
    const payload = {pageKey, value: newPageValue}
    // console.log('saveEhrOnlyUserData:', JSON.stringify(newPageValue))
    return store.dispatch('ehrOnlyDemoStore/ehrOnlyDataUpdate', payload)
  }

  clearEhrOnly () {
    return store.dispatch('ehrOnlyDemoStore/selectCaseStudy', undefined)
  }
  selectCaseStudy (demoKey) {
    return store.dispatch('ehrOnlyDemoStore/selectCaseStudy', demoKey)
  }

  setCaseStudy (seedObj) {
    return store.dispatch('ehrOnlyDemoStore/setCaseStudy', seedObj)
  }
}

const EhrOnlyDemo = new EhrOnlyDemoInner()
export default EhrOnlyDemo

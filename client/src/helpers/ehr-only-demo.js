import store from '@/store'

class EhrOnlyDemoInner {
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
    return store.dispatch('ehrOnlyDemoStore/ehrOnlyDataUpdate', payload)
  }
}

const EhrOnlyDemo = new EhrOnlyDemoInner()
export default EhrOnlyDemo

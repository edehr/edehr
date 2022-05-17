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
  async loadEhrOnlyDemo () {
    return store.getters['ehrOnlyDemoStore/ehrOnlyData']
  }
  clearEhrOnlyUserData () {
  }
  getEhrOnlyUserData () {
  }
  saveEhrOnlyUserData (ehrData) {
  }
}

const EhrOnlyDemo = new EhrOnlyDemoInner()
export default EhrOnlyDemo

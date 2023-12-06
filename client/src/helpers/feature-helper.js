import store from '../store'

export const FF_UNLEASH_ACTIVITY = 'UnleashActivity' // let instructor change link to lobj
export const FF_SIGN_ON = 'FFSignOn' // let instructor change link to lobj
export const FF_SIM_CONTROL = 'FFSimControl' // if instructors can see the new simulation time controller
export const FF_SIM_TIME_ON = 'FF_SIM_TIME_ON' // show the new time stepping controls for simulation classes

const FLAGS = [
  FF_UNLEASH_ACTIVITY, FF_SIGN_ON, FF_SIM_CONTROL, FF_SIM_TIME_ON
]
class FeatureHelperInner {

  async loadFlags (consumerId) {
    await store.dispatch('consumerStore/featureFlagsLoad', consumerId)
  }
  isFeatureFlagEnabled (consumerId, flag) {
    const hasFlag = this.featureFlags().includes(flag)
    return !hasFlag
  }
  async enableFeatureFlag (consumerId, flag) {
    if (FLAGS.includes(flag)) {
      let payload = { toolConsumerId: consumerId, flag: flag }
      await store.dispatch('consumerStore/featureFlagsRemove', payload)
    }
  }
  async disableFeatureFlag (consumerId, flag) {
    if (FLAGS.includes(flag)) {
      let payload = { toolConsumerId: consumerId, flag: flag }
      await store.dispatch('consumerStore/featureFlagsAdd', payload)
    }
  }

  featureFlags () {
    return store.getters['consumerStore/featureFlags'] || []
  }

}

const FeatureHelper = new FeatureHelperInner()
export default FeatureHelper

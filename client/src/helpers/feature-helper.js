import store from '../store'

export const FF_UNLEASH_ACTIVITY = 'UnleashActivity' // let instructor change link to lobj
const FLAGS = [
  FF_UNLEASH_ACTIVITY
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

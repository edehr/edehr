import store from '../store'

export const FF_ORDERS = 'ffOrders' // Orders have process
export const FF_ANSWER = 'ffAnswer' // Answer key for grading
class FeatureHelperInner {
  async loadFlags (consumerId) {
    await store.dispatch('consumerStore/featureFlagsLoad', consumerId)
  }
  isFeatureFlagEnabled (flag) {
    const flags = store.getters['consumerStore/featureFlags'] || []
    return flags.includes(flag)
  }
  async enableFeatureFlag (consumerId, flag) {
    const flags = store.getters['consumerStore/featureFlags'] || []
    if (!flags.includes(flag)) {
      let payload = { toolConsumerId: consumerId, flag: flag }
      await store.dispatch('consumerStore/featureFlagsAdd', payload)
    }
  }
  async disableFeatureFlag (consumerId, flag) {
    const flags = store.getters['consumerStore/featureFlags'] || []
    if (flags.includes(flag)) {
      let payload = { toolConsumerId: consumerId, flag: flag }
      await store.dispatch('consumerStore/featureFlagsRemove', payload)
    }
  }

  featureFlags () {
    return store.getters['consumerStore/featureFlags'] || []
  }

}

const FeatureHelper = new FeatureHelperInner()
export default FeatureHelper

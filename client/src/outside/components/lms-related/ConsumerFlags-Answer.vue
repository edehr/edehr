<template lang='pug'>
div
  h3 Answer key
  p.
    This feature will allow faculty to create an answer key for a Learning Object.
    The user will create this key by working in the EHR and creating the expected patient records.
    Later this key will be used while an instructor is evaluating student submissions.

  p Currently this feature is {{ ffValue ? 'enabled' : 'disabled'}}
  button(@click='ffToggle')
    span &nbsp; {{ ffValue ? 'disable' : 'enable '}} &nbsp;
</template>

<script>
import FeatureHelper, { FF_ANSWER } from '@/helpers/feature-helper'
export default {
  computed: {
    consumer () {
      return this.$store.getters['consumerStore/consumer']
    },
    ffValue () {
      return FeatureHelper.isFeatureFlagEnabled(FF_ANSWER)
    }
  },
  methods: {
    async ffToggle () {
      if (this.ffValue) {
        await FeatureHelper.disableFeatureFlag(this.consumer._id, FF_ANSWER)
      } else {
        await FeatureHelper.enableFeatureFlag(this.consumer._id, FF_ANSWER)
      }
    }
  }
}
</script>

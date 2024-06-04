<template lang="pug">
  div
    div Name of instance: {{ appLmsName }}
    div Name of owner: {{ ownerName }}
    div(v-if='toolConsumer')
      app-lms-course-list(:toolConsumerId='toolConsumer', :given='givenName', :family='familyName', :role='role')

</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'
import { appLmsFetchAppLms } from '@/helpers/app-lms-helper'
import AppLmsCourseList from '@/outside/views/app-lms/AppLmsCourseList.vue'

export default {
  components: {
    AppLmsCourseList,
    UiButton
  },
  data () {
    return {
      appLms : {}
    }
  },
  props: {
    appLmsId: {type: String},
    role: { type: String }
  },
  computed: {
    ownerName () { return this.appLms?.owner?.givenName + ' ' + this.appLms?.owner?.familyName },
    givenName () { return this.$store.getters['appLmsStore/givenName']},
    familyName () { return this.$store.getters['appLmsStore/familyName']},
    appLmsName () { return this.appLms.appLmsName },
    toolConsumer () { return this.appLms.toolConsumer },
  },
  methods: {
    async fetchAppLms (appLmsId) {
      const results = await appLmsFetchAppLms(appLmsId)
      console.log('fetchAppLms', results.appLms)
      this.appLms = results.appLms
    },
  },
  mounted () {
    this.fetchAppLms(this.appLmsId)
  }
}
</script>


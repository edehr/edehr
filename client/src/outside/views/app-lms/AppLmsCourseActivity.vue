<template lang="pug">
  div
    a(tabindex="0", class="is-link", v-on:keyup.enter="gotoEhr" @click="gotoEhr()") {{submitData.resource_link_title}}
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import { appLmsGoToEhr } from '@/helpers/app-lms-helper'

export default {
  components: {
  },
  data: function () {
    return {
      submitData: {
      }
    }
  },
  props: {
    activity: { type: Object },
    course: { type: Object },
    given: { type: String },
    family: { type: String },
    role: { type: String },
    toolConsumer: { type: Object }
  },
  computed: {
    toolConsumerKey () { return this.toolConsumer.oauth_consumer_key },
    personaName () { return this.given + ' ' + this.family },
    resource_link_title () { return this.activity.resource_link_title},
    resource_link_description () { return this.activity.resource_link_description },
    userId () { return this.$store.getters['appLmsStore/appLmsUserId']}
  },
  mounted () {
    this.resetSubmitData()
  },
  methods: {
    lObjLink ( activity) {
      // console.log('does activity have lobjdef', activity)
      return activity.lObjDef?._id
    },
    lObjAppType ( activity) {
      return activity.lObjDef?.appType
    },
    resetSubmitData: function () {
      this.submitData = {
        //auth etc
        oauth_consumer_key: this.toolConsumer.oauth_consumer_key,
        oauth_consumer_secret: this.toolConsumer.oauth_consumer_secret,
        oauth_nonce: Date.now() + Math.random() * 100,
        oauth_signature_method: 'HMAC-SHA1',
        oauth_timestamp: Math.round(Date.now() / 1000),

        //consumer
        tool_consumer_instance_guid: 'de-' + this.toolConsumerKey,
        tool_consumer_instance_name:'App LMS ' + this.toolConsumerKey,
        tool_consumer_info_product_family_code: 'EdEHR App LMS',
        tool_consumer_instance_description:'A minimal LMS to use the EdEHR',

        // lti
        toolUrl: StoreHelper.apiUrlGet() + 'api/launch_lti',
        launch_presentation_return_url: window.location.origin + this.$route.path, // come back to this LMS page
        lti_version: 'LTI-1p0',
        lti_message_type: 'basic-lti-launch-request',

        // user
        lis_person_name_given: this.given,
        lis_person_name_family: this.family,
        lis_person_name_full: this.personaName,
        roles: this.role,
        user_id: this.userId,

        // course
        context_id: this.course.courseTitle.replace(' ', ''),
        context_label: this.course.description,
        context_title: this.course.courseTitle,
        context_type: 'EdEHR Lite',

        // activity
        resource_link_id: this.resource_link_title.toLowerCase().replace(' ',''),
        resource_link_title: this.resource_link_title,
        resource_link_description: this.resource_link_description,

        // custom bits
        isDemoLti: false,
        demo_lobjId: this.lObjLink(this.activity),
        appType: this.lObjAppType(this.activity),
      }
    },
    gotoEhr: function () {
      appLmsGoToEhr(this.submitData)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
.field-head {
  font-weight: bold;
}
.field-head::after{
  content: ": "
}
.config-header-block {
  display: grid;
  grid-template-columns: 8rem;
}
.config-data-block {
  display: grid;
  grid-template-columns: 2rem 0.3fr 1fr;
}
.edit-buttons {
  margin-left: auto;
}

</style>

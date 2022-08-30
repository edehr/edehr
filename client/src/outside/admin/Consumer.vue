<template lang="pug">
  div
    div(class="details-action-bar")
      div &nbsp;
        // can put link to somewhere here
      div &nbsp;
        //can put actions here
    div(class="details-container card selected")
      div(class="details-row")
        div(class="details-name") {{text.NAME}}
          ui-info(:title="text.NAME", :text="text.NAME_TIP")
        div(class="details-value") {{consumer.tool_consumer_instance_name}}
      div(class="details-row")
        div(class="details-name") {{text.DESCRIPTION}}
        div(class="details-value") {{consumer.tool_consumer_instance_description}}
      div(class="details-row")
        div(class="details-name") {{text.KEY}}
        div(class="details-value") {{consumer.oauth_consumer_key}}
      div(class="details-row")
        div(class="details-name") {{text.SECRET}}
        div(class="details-value") {{consumer.oauth_consumer_secret}}
      div(class="details-row", v-if='!consumer.is_primary')
        div(class="details-name") {{text.TYPE}}
        div(class="details-value") Demonstration consumer
      div(class="details-row")
        div(class="details-name") {{text.FAMILY}}
        div(class="details-value") {{consumer.tool_consumer_info_product_family_code}}
      div(class="details-row")
        div(class="details-name") {{text.VERSION_PRODUCT}}
        div(class="details-value") {{consumer.tool_consumer_info_version}}
      div(class="details-row")
        div(class="details-name") {{text.VERSION_LTI}}
        div(class="details-value") {{consumer.lti_version}}
      div(class="details-row")
        div(class="details-name") {{text.GUID}}
        div(class="details-value") {{consumer.tool_consumer_instance_guid}}
      div(class="details-row")
        div(class="details-name") {{text.DATES}}
        div(class="details-value").
          Created on {{ consumer.createDate | formatDateTime }}.
          Last modified on {{ consumer.lastUpdateDate | formatDateTime }}.
      div(class="details-row")
        div(class="details-name") {{text.USERS}}
        div(class="details-value")
          div(v-for="user in consumer.users") {{user.fullName}}
      div(class="details-row")
        div(class="details-name") {{text.VISITS_TOTAL}}
        div(class="details-value") {{consumer.visitCount}}
      div(class="details-row")
        div(class="details-name") {{text.VISITS_STUDENTS}}
        div(class="details-value") Count: {{consumer.visitStudentCount}}.  Most recent visit: {{consumer.lastStudentVisit | formatDateTime}}.
      div(class="details-row")
        div(class="details-name") {{text.VISITS_INSTRUCTORS}}
        div(class="details-value") Count: {{consumer.visitInstructorCount}}. Most recent visit: {{consumer.lastInstructorVisit | formatDateTime}}.
      div(class="details-row")
        div(class="details-name") {{text.ACTIVITIES}}
        div(class="details-value") {{consumer.activityCount}}
      div(class="details-row")
        div(class="details-name") {{text.LOBJS}}
        div(class="details-value") {{consumer.assignmentCount}}
      div(class="details-row")
        div(class="details-name") {{text.SEEDS}}
        div(class="details-value") {{consumer.seedCount}}
      div(v-if='isAdmin', class="details-row")
        div(class="details-name") Id:
        div(class="details-value") {{consumer._id}}
      //div(class="details-row")
      //  div(class="details-name") consumer:
      //  div(class="details-value") {{consumer}}
</template>

<script>
import OutsideCommon from '@/outside/views/OutsideCommon'
import { Text } from '@/helpers/ehr-text'
import UiInfo from '@/app/ui/UiInfo'

export default {
  extends: OutsideCommon,
  components: { UiInfo  },
  data () {
    return {
      text: Text.CONSUMER_PAGE,
    }
  },
  computed: {
    consumer () { return this.$store.getters['consumerStore/consumer']}
  },
  methods: {
    async loadComponent () {
      const fromRoute = this.$route.query.consumerId
      await this.$store.dispatch('consumerStore/loadDetails', fromRoute)
    }
  },
}
</script>

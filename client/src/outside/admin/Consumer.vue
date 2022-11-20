<template lang="pug">
  div
    div(class="details-action-bar")
      div &nbsp;
        // can put link to somewhere here
      div &nbsp;
        ui-button(v-on:buttonClicked="downloadConsumer")
          fas-icon(class="fa", :icon="appIcons.download")
          span Download Data
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
      //div(class="details-row")
      //  div(class="details-name") {{text.SECRET}}
      //  div(class="details-value") {{consumer.oauth_consumer_secret}}
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
        div(class="details-name") {{ isAdmin ? text.USERS: text.USER_COUNT }}
        div(class="details-value")
          div(v-if='isAdmin')
            div(v-for="user in users") {{user.fullName}}
          div(v-else) {{ users.length }}
      div(class="details-row")
        div(class="details-name") {{text.VISITS_TOTAL}}
        div(class="details-value") {{consumer.visitCount}}
      div(class="details-row")
        div(class="details-name") {{text.VISITS_STUDENTS}}
        div(class="details-value") {{consumer.visitStudentCount}}.  Most recent visit: {{consumer.lastStudentVisit | formatDateTime}}.
      div(class="details-row")
        div(class="details-name") {{text.VISITS_INSTRUCTORS}}
        div(class="details-value") {{consumer.visitInstructorCount}}. Most recent visit: {{consumer.lastInstructorVisit | formatDateTime}}.
      div(class="details-row")
        div(class="details-name") {{text.ACTIVITIES}}
        div(class="details-value") {{consumer.activityCount}}
      div(class="details-row")
        div(class="details-name") {{text.LOBJS}}
        div(class="details-value") {{consumer.assignmentCount}}
      div(class="details-row")
        div(class="details-name") {{text.SEEDS}}
        div(class="details-value") {{consumer.seedCount}}
      div(class="details-row")
        div(class="details-name") Id
        div(class="details-value") {{consumer._id}}
      div(class="details-row")
        div(class="details-name") Return URL
        div(class="details-value") {{visit.returnUrl}}
      div(class="details-row")
        div(class="details-name") Current visit id
        div(class="details-value") {{visit._id}}
</template>

<script>
import OutsideCommon from '@/outside/views/OutsideCommon'
import UiInfo from '@/app/ui/UiInfo'
import UiButton from '@/app/ui/UiButton'
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import { downObjectToFile } from '@/helpers/ehr-utils'

export default {
  extends: OutsideCommon,
  components: { UiButton, UiInfo  },
  data () {
    return {
      text: Text.CONSUMER_PAGE,
      appIcons: APP_ICONS,
    }
  },
  computed: {
    consumer () { return this.$store.getters['consumerStore/consumer']},
    users () { return this.consumer.users || [] },
    visit () { return this.$store.getters['visit/visitData']}
  },
  methods: {
    downloadConsumer () {
      const fName = 'EdEHR-Consumer' + this.consumer._id + '.json'
      let data = JSON.parse(JSON.stringify(this.consumer))
      data.returnUrl = this.visit.returnUrl
      data.userCount = data.users.length
      data.currentVisitId = this.visit._id
      delete data.users
      let sorted = {}
      Object.keys(data).sort().forEach(k => {
        sorted[k] = data[k]
      })
      data = JSON.stringify(sorted, null, 2)
      // console.log('download to ', fName, data)
      downObjectToFile(fName, data)
    },
    async loadComponent () {
      const fromRoute = this.$route.query.consumerId
      if (fromRoute) {
        await this.$store.dispatch('consumerStore/loadDetails', fromRoute)
      }
    }
  },
}
</script>

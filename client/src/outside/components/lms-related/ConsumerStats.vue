<template lang='pug'>
div(id="Statistics", class="details-container card selected")
  h2 Statistics
  div(class="details-row")
    div(class="details-name") Recent visit counts
    // { "year": { "t": 5, "s": 2, "i": 3 }, "half": { "t": 5, "s": 2, "i": 3 }, "month": { "t": 5, "s": 2, "i": 3 }, "week": { "t": 5, "s": 2, "i": 3 }, "day": { "t": 2, "s": 1, "i": 1 }, "hour": { "t": 1, "s": 0, "i": 1 } }
    div(class="details-value")
      table
        thead
          th
          th Total
          th Instructors
          th Students
        tbody
          tr
            td Year
            td {{ recentVisitCounts.year.t }}
            td {{ recentVisitCounts.year.i }}
            td {{ recentVisitCounts.year.s }}
          tr
            td 6 months
            td {{ recentVisitCounts.half.t }}
            td {{ recentVisitCounts.half.i }}
            td {{ recentVisitCounts.half.s }}
          tr
            td Month
            td {{ recentVisitCounts.month.t }}
            td {{ recentVisitCounts.month.i }}
            td {{ recentVisitCounts.month.s }}
          tr
            td Week
            td {{ recentVisitCounts.week.t }}
            td {{ recentVisitCounts.week.i }}
            td {{ recentVisitCounts.week.s }}
          tr
            td Day
            td {{ recentVisitCounts.day.t }}
            td {{ recentVisitCounts.day.i }}
            td {{ recentVisitCounts.day.s }}
          tr
            td Hour
            td {{ recentVisitCounts.hour.t }}
            td {{ recentVisitCounts.hour.i }}
            td {{ recentVisitCounts.hour.s }}

  div(class="details-row")
    div(class="details-name") {{text.VISITS_TOTAL}}
    div(class="details-value") {{consumer.visitCount}}
  div(class="details-row")
    div(class="details-name") {{text.VISITS_STUDENTS}}
    div(class="details-value") {{consumer.visitStudentCount}}.
  div(class="details-row", v-if='consumer.visitStudentCount> 0')
    div(class="details-name") Most recent:
    div(class="details-value").
      Most recent student visit: {{consumer.lastStudentVisit | formatDateTime}}.
      Return url: {{ consumer.lastStudentReturnUrl}}
  div(class="details-row")
    div(class="details-name") {{text.VISITS_INSTRUCTORS}}
    div(class="details-value") {{consumer.visitInstructorCount}}.
  div(class="details-row", v-if='consumer.visitInstructorCount > 0')
    div(class="details-name") Most recent:
    div(class="details-value").
      Most recent instructor visit: {{consumer.lastInstructorVisit | formatDateTime}}.
      Return url: {{ consumer.lastInstructorReturnUrl}}
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
    div(class="details-name") {{ text.USER_COUNT }}
    div(class="details-value") {{ consumer.userCount }}
  div(class="details-row", v-if='isAdmin')
    div(class="details-name") {{ text.USERS }}
    div(class="details-value")
      div(v-for="user in users") {{user.fullName}}

</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'

const DEFAULTRVC = {
  year: { t: 5, s: 2, i: 3 },
  half: { t: 5, s: 2, i: 3 },
  month: { t: 5, s: 2, i: 3 },
  week: { t: 5, s: 2, i: 3 },
  day: { t: 2, s: 1, i: 1 },
  hour: { t: 1, s: 0, i: 1 }
}


export default {
  components: { },
  inject: [ 'isAdmin'],
  data () {
    return {
      text: Text.CONSUMER_PAGE,
      appIcons: APP_ICONS,
      consumerId: undefined,
      showFeatureFlags: true
    }
  },
  computed: {
    consumer () {
      return this.$store.getters['consumerStore/consumer']
    },
    recentVisitCounts () {
      return this.consumer.recentVisitCounts || DEFAULTRVC
    },
    users () {
      return this.consumer.users || []
    }
  },
  methods: {
  },
}
</script>

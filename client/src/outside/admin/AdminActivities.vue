<template lang="pug">
  div(id="toplevel")
    div(v-for="(course, index) in activities")
      div(class='cell e-name')
        a(:href="`#course${index}`") {{ course.title}}
    hr
    div(v-for="(course, index) in activities", :id="`course${index}`")
      div(class='cell e-name') {{course.title}}
      div(class="e-table-container")
        div(class="e-table")
          div(class="thead")
            div(class="thcell e-name") Name
            div(class="thcell") LObj
            div(class="thcell") Description
            div(class="thcell") Created
            div(class="thcell") Updated
          div(class="tbody")
            div(class="row", v-for="activity in course.activities")
              div(class='cell e-name') {{activity.title}}
              div(class='cell e-name') {{ activity.assignment ? activity.assignment. name : ''}}
              div(class="cell") {{truncate(activity.description, 200)}}
              div(class="cell e-date") {{ activity.createDate | formatDateTime }}.
              div(class="cell e-date") {{ activity.lastDate | formatDateTime }}
        a(href="#toplevel") Go to top
        hr
</template>
<script>
import OutsideCommon from '@/outside/views/OutsideCommon.vue'

export default {
  extends: OutsideCommon,
  computed: {
    activities () { return this.$store.getters['activityStore/adminActivities'] }
  },
  methods: {
    async loadComponent () {
      if (this.isAdmin) {
        const consumerId = this.$route.query.consumerId
        await this.$store.dispatch('activityStore/loadAdminActivities', consumerId)
      }
    },
    truncate (input, lim) {
      return input && input.length > lim ? `${input.substring(0, lim)}...` : input
    },
    scrollMeToSeed (refName) {
      let id = 'S-'+refName
      let element = document.getElementById(id) //.outerHTML
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  },
}
</script>

<style scoped lang='scss'>

</style>

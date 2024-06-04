<template lang="pug">
div
  h2 Dev / Admin Area
  div The following content will NOT be shown to average user.
    span &nbsp;
    ui-button(@buttonClicked="refresh")
      span Refresh
  section
    h3 Users
    table
      thead
        th id
        th email
        td created
        td last update
        td &nbsp;
      tbody
        tr(v-for='user in userList')
          td {{ user._id }}
          td {{user.userEmail }}
          td {{user.createDate }}
          td {{user.lastUpdateDate }}
          td
            ui-button(@buttonClicked="$emit('deleteUser', user)")
              span Delete

  section
    h3 App LMS List
    table
      thead
        th id
        th name
        td consumer id
        td created
        td last update
        td &nbsp;
      tbody
        tr(v-for='appLms in appLmsList')
          td {{appLms._id }}
          td {{appLms.appLmsName }}
          td {{appLms.toolConsumer }}
          td {{appLms.createDate }}
          td {{appLms.lastUpdateDate }}
          td
            ui-button(@buttonClicked="$emit('deleteAppLms', appLms)")
              span Delete


  section
    h3 Links
    table
      thead
        th lms
        th user
        td role
        td created
        td last update
      tbody
        tr(v-for='link in links')
          td {{ link.appLms }}
          td {{ link.appLmsUser }}
          td {{link.role }}
          td {{link.createDate }}
          td {{link.lastUpdateDate }}
  section
    h3 App LMS Consumer List
    table
      thead
        th id
        th name
        th lti key
        td lti s
        td created
        td last update
      tbody
        tr(v-for='consumer in consumerList')
          td {{consumer._id }}
          td {{consumer.display_name }}
          td {{consumer.oauth_consumer_key }}
          td {{consumer.oauth_consumer_secret }}
          td {{consumer.createDate }}
          td {{consumer.lastUpdateDate }}

</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'
import {
  appLmsClientFetchAllConsumers,
  appLmsClientFetchAllLinks,
  appLmsClientFetchAllUsers
} from '@/helpers/app-lms-helper'

export default {
  components: {
    UiButton
  },
  data () {
    return {
      links: {},
      userList: [],
      consumerList: []
    }
  },
  computed: {
    appLmsData () { return this.$store.getters['appLmsStore/appLmsData']},
    appLmsList () { return this.appLmsData.appLmsList },
  },
  methods: {
    async refresh () {
      console.log('RELOADING DEV AREA')
      try {
        let results = await appLmsClientFetchAllLinks()
        this.links = results ? results.lmsLinks : []
        results = await appLmsClientFetchAllUsers()
        this.userList = results ? results.lmsUsers : []
        results = await appLmsClientFetchAllConsumers()
        this.consumerList = results.lmsConsumers
      } catch (err) {
        console.error('Caught error in dev area', err.message)
      }

    }
  },
  mounted () {
    this.$nextTick( () => {
      this.refresh()
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
.content {
  font-size: 1.2rem;
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
}
select {
  width: 15rem;
}
.demo_page{
  padding-left: $ehr-layout-padding-left;
}
</style>

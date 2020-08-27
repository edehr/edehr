<template lang="pug">
    div(v-if="isAuthed")
        h2 Welcome!
        div You are currently logged in as an administrator
        br
        router-link(to="/consumers") See consumers page
</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import { setAuthHeader } from '../../helpers/axios-helper'
import { Text } from '../../helpers/ehr-text'

export default {
  data : () => {
    return {
      isAuthed: true
    }
  },

  methods: {
    redirect (path = '/admin') {
      this.$router.push(path)
    }
  },
  mounted () {
    const token = StoreHelper.getAuthToken()
    StoreHelper.setLoading(null, true)
    if(token) {
      setAuthHeader(token)
      StoreHelper.adminValidate()
        .then(v => {
          this.isAuthed = v
        })
        .catch(err => {
          StoreHelper.setApiError(err)
          this.redirect()
          StoreHelper.setLoading(null, false)
        })
    } else {
      StoreHelper.setApiError(Text.REQUIRE_AUTHENTICATION)
      this.redirect()
      return false
    }
  },
  watch: {
    isAuthed: function (curr) { 
      if (curr) {
        StoreHelper.setLoading(null, false)
      } else {
        this.redirect()
      }
    }
  }
}
</script>

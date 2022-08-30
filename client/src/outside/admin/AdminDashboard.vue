<template lang='pug'>
  div
    h2 Welcome!
    div You are currently logged in as an administrator
    br
    router-link(to="/consumers") See consumers page
</template>

<script>
import OutsideCommon from '@/outside/views/OutsideCommon'

export default {
  extends: OutsideCommon,
  methods: {
    // outside common invokes loadComponent on page change
    loadComponent: function () {
      if (this.isAdmin) {
        // do nothing
      } else {
        this.redirectAdminLogin()
      }
    }
  }
}
</script>

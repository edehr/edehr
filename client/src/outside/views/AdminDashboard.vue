<template lang="pug">
    div(v-if="isAuthed")
        h2 Welcome!
        div You are currently logged in as an administrator
        nuxt-link=""
</template>

<script>
export default {
  data : () => {
    return {
      isAuthed: true
    }
  },
  computed: {
    isAuthed () {
      const token = StoreHelper.getAuthToken()
      if(token) {
      // TODO: implement a validator helper for admins
        return true
      } else {
        alert('You need to be properly authenticated to do this')
        this.redirect()
        return false
      }
    }
  }
}
</script>
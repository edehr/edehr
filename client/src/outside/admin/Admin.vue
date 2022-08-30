<template lang='pug'>
  div
    div(v-if="!isAdmin")
      h2(style="text-align: center") Admin login
      div(class='login-form')
        label Admin password
        input(class="input password-input", v-model="password", type="password")
        ui-button(@buttonClicked="adminLogin", :disabled="!password") Login
    div(v-else)
      div You are logged in as an administrator. Exit the EdEHR to remove your admin role.
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import UiButton from '@/app/ui/UiButton'
import OutsideCommon from '@/outside/views/OutsideCommon'

export default {
  extends: OutsideCommon,
  components: {
    UiButton
  },
  data () {
    return {
      password: '',
      errors: []
    }
  },
  methods: {
    redirect (path = '/') {
      this.$router.push(path)
    },
    adminLogin () {
      StoreHelper.adminLogin(this.password)
        .then(() => {
          this.redirect('/admin-dashboard')
        })
        .catch((err) => {
          this.errors.push(err)
          StoreHelper.setApiError(`\n ${err}`)
          this.redirect()
        })
    },
    loadComponent () {
      // do nothing special
    }
  },
}
</script>

<style scoped lang='scss'>
.login-form {
  display: flex;
  flex-flow: row;
  gap: 1rem;
  // center the form ...
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
.password-input {
  width: 15rem;
}
</style>

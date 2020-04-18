<template lang="pug">
    div(v-if="isValid")
        h2(style="text-align: center") Please enter the administrator's password
        br
        div(class="ehr-group-wrapper  grid-to-1")
            div(class="form-element form-container")
                div(class="text_input_wrapper form-container-item")
                    label Admin password
                    input(class="input text-input", v-model="password", type="password")
                    ui-button(style="margin-top: 2vh", @buttonClicked="adminLogin", :disabled="!password") Submit
</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import UiButton from '../../app/ui/UiButton'
import sKeys from '../../helpers/session-keys'

export default {
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
    redirect (path = '/'){
      this.$router.push(path)
    },
    adminLogin () {
      StoreHelper.adminLogin(this.password)
        .then(() => {
          this.redirect('/admin-dashboard')
        })
        .catch ((err) => {
          this.errors.push(err)
          alert(`\n ${err}`)
          this.redirect()
        })
    }
  },
  computed: {
    isValid () {
      const token = StoreHelper.getAuthToken()
      const visitId = sessionStorage.getItem(sKeys.USER_TOKEN)
      if(token && visitId) {
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

<style scoped>
    .form-container {
        margin-left: 30vw;
        margin-right: 30vw;
    }
</style>

<template lang="pug">
    div(v-if="canRequestDemoAccess")
        h2(style="text-align: center") Demo Access Form
        br
        div(class="ehr-group-wrapper  grid-to-1")
            div(class="form-element form-container")
                div(class="text_input_wrapper form-container-item")
                  div
                    //- div(style="margin-top: 1em")
                    //-   label Full Name
                    //-   input(class="input text-input", v-model="name", type="text")
                    //- div(style="margin-top: 1em")
                    //-   label E-mail
                    //-   input(class="input text-input", v-model="email", type="email")
                    div(style="margin-top: 1em")
                      label Role
                      select(name="role", v-model="selectedRole")
                          //- option(value="")
                          option(
                              v-for="role in roles", 
                              :key="role.key", 
                              v-bind:value="role.key"
                          ) {{ role.value }}
                ui-button(
                  style="margin-top: 2vh",
                  :disabled="!isFormValid",
                  @buttonClicked="submitDemoAccess"
                ) Submit
</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import UiButton from '../../app/ui/UiButton'
export default {
  components: {
    UiButton
  },
  data () {
    return {
      name: '',
      email: '',
      roles: [
        { key: 'student', value: 'Student' }, 
        // { key: 'instructor', value: 'Instructor' }, 
      ],
      selectedRole: 'student',
    }
  },
  computed: {
    canRequestDemoAccess () {
      const token = StoreHelper.getAuthToken()
      if(token) {
        return this.redirect()
      }
      return !token
    },
    // isNameValid () {
    //   return this.name.split(' ').length >= 2
    // },
    isFormValid () {
      // return this.isNameValid && this.name && this.email && this.selectedRole
      return this.selectedRole
    }
  },
  methods: {
    redirect (path = '/ehr/'){
      this.$router.push(path)
    },
    submitDemoAccess () {
      const { name, email, selectedRole } = this
      StoreHelper.requestDemoAccess(name, email, selectedRole)
        .then(({url}) => {
          window.location.replace(url)
        })
        .catch(err => {
          alert(`Error when trying to get demo access \n ${err} `)
        })
    },
    // checkUsername () {
    //   StoreHelper.checkDemoUsername(this.name)
    //     .then(res => {
    //       console.log('checkUsername then', res)
    //     }).catch(err => {
    //       alert(`Error when validating name \n ${err}` )
    //     })
    // }
  }
}
</script>

<style scoped>
    .form-container {
        margin-left: 30vw;
        margin-right: 30vw;
    }
</style>
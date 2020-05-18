<template lang="pug">
    div(v-if="canRequestDemoAccess")
        h2(style="text-align: center") Demo Access Form
        br
        div(class="form-container")
       
        div(class="ehr-group-wrapper  grid-to-1")
            div(class="form-element form-container")
              div(class="text_input_wrapper form-container-item")
                div(style="margin-top: 1em")
                  p.
                     Welcome to EdEHR.  In this demo you can try out this new educational resource designed to give practical experience with an Electronic Health Record System (sometimes called Electronic Medical Record System). Below you will find some sample assignments that demonstrate how the application can work in a real classroom. The EdEHR can be used for any medical profession including; nursing, doctoring, pharmacy, etc.
                  p.
                    The EdEHR is still in the prototype stage of development. So you may encounter a few things that seem strange.  The EdEHR can be used to create diverse educational resources. The sample assignments below are based on the book "Health Case Studies - Toward Closing the Healthcare Communication Gap" by:  Glynda Rees, Rob Kruger, Janet Morrison.  This is a BcCampus open text book.  https://pressbooks.bccampus.ca/healthcasestudies/
                  p.
                    EdEHR project git repository is here: https://github.com/BCcampus/edehr and documentation is here https://bccampus.github.io/edehr/
                  div(style="max-width: 10em; padding: 1em; border: 1px solid")
                      div(v-for="obj in demoData" :key="obj.name")
                        input(
                          type="checkbox",
                          :id="obj.name",
                          :checked="selectedUser.name === obj.name",
                          :value="obj",
                          @change="selectedUser = obj"
                        )
                        label(:for="obj.name") {{obj.name}}

      
                ui-button(
                  style="margin-top: 2vh",
                  :disabled="!selectedUser",
                  @buttonClicked="submitDemoAccess"
                ) Log in as
</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import UiButton from '../../app/ui/UiButton'
import { demoUsers } from '../../helpers/demo-users'
export default {
  components: {
    UiButton
  },
  data () {
    return {
      demoData: demoUsers,
      selectedUser: {}
    }
  },
  mounted () {
    // StoreHelper.getDemoData()
    //   .then(authPayload => {
    //     this.demoData = 
    //   }).catch(err => {
    //     alert(err)
    //   })
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
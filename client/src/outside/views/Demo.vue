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
                      div(v-for="obj in demoData" :key="obj.user_id")
                        input(
                          type="checkbox",
                          :id="obj.user_id",
                          :checked="ltiData.lis_person_name_full === obj.lis_person_name_full",
                          :value="obj",
                          @change="ltiData = obj"
                        )
                        label(:for="obj.user_id") {{obj.lis_person_name_full}}

      
                ui-button(
                  style="margin-top: 2vh",
                  :disabled="!isFormValid",
                  @buttonClicked="submitDemoAccess"
                ) Log in as
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
      demoData: {},
      ltiData: {}
    }
  },
  mounted () {
    StoreHelper.setLoading(null, true)
    StoreHelper.fetchDemoData(this.demoToken)
      .then((token) => {
        const demoData = StoreHelper.getDemoLTIData()
        this.demoData = demoData

      }).catch(err => {
        alert(err)
      })
    StoreHelper.setLoading(null, false)
  },
  computed: {
    canRequestDemoAccess () {
      const token = StoreHelper.getAuthToken()
      if(token) {
        return this.redirect()
      }
      return !token
    },
    isFormValid () {
      return Object.keys(this.ltiData).length > 0
    },
    demoToken () {
      return StoreHelper.getDemoToken()
    }
  },
  methods: {
    redirect (path = '/ehr/'){
      this.$router.push(path)
    },
    submitDemoAccess () {
      StoreHelper.selectLTIUser(this.ltiData)
      this.redirect('/demo-course')
    },
  }
}
</script>

<style scoped>
    .form-container {
        margin-left: 30vw;
        margin-right: 30vw;
    }
</style>
<template lang="pug">
  div(class="outside-view home")
    h1 Welcome to the Educational Electronic Health Record System (EdEHR)
    p.
      The Educational Electronic Health Record application is a
      <a target="_blank" href="https://bccampus.ca/">BCcampus</a>&nbsp;
      <a href="https://bccampus.github.io/edehr/developer/contributors.html">open-source</a>
      project funded by the Ministry of Advanced Education, Skills and Training.
      The EdEHR simulates the interaction a nurse, doctor, pharmacist or other medical practitioner would have using a professional EHR.
    p.
      A stakeholder group formed by individuals from from BCIT, Douglas College, UBC, and UVic helped to research
      and develop requirements that were used as a foundation for the project. The goal of that stakeholder group and
      this project was to build a pilot-ready, minimum viable product to give students access to an EHR system
      in classrooms before they work in a professional setting.
    ul
      li <a href="https://bccampus.github.io/edehr/">Documentation</a>
      li <a href="https://github.com/BCcampus/edehr">GitHub repository</a>
      li <a href="https://bccampus.ca/2018/01/23/bccampus-launches-the-educational-electronic-health-record-system-project-in-b-c/">BCcampus announcement</a>
    p.

    p.
      To use this system you need to use a Learning Management System such as Moodle, Canvas, Blackboard, or any
      other LTI compliant learning system. For more information see the documentation.
  
    div(style="margin-top: 2em;", v-show="isDemoMode") 
      ui-button(@buttonClicked="confirmToolConsumerCreation") Enter Demo
    ui-confirm(ref="confirmDialog", @confirm="proceedDemoToolConsumerCreation", saveLabel="Confirm")

</template>

<script>
import UiButton from '../../app/ui/UiButton'
import UiConfirm from '../../app/ui/UiConfirm'
import StoreHelper from '../../helpers/store-helper'

const TEXT = {
  TITLE: 'Proceed to create demo?',
  MSG: 'This process can only be done once in a given period of time.',
}

export default {
  name: 'home',
  data () {
    return {
      selectedUser: {},
      isDemoMode: true,
    }
  },
  mounted () {
    const demoToken = StoreHelper.getDemoToken()
    const selectedDemoUser = StoreHelper.getDemoUser()
    if (demoToken && selectedDemoUser) {
      this.$router.push('/demo-course')
    } else if (demoToken) {
      this.$router.push('/demo')
    }
  },
  methods: {
    confirmToolConsumerCreation () {
      this.$refs.confirmDialog.showDialog(TEXT.TITLE, TEXT.MSG)
    },
    proceedDemoToolConsumerCreation () {
      StoreHelper.createDemoToolConsumer()
        .then(() => {
          this.$router.push('/demo')
        }).catch(err => {
          if(this.debug) console.log('createDemoToolConsumerError >> ', err)
          alert(err)
        })
    }
  },
  components: {
    UiButton,
    UiConfirm 
  },
  computed: {},
}
</script>


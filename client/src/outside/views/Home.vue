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
    
    p.
      Welcome to EdEHR.  In this demo you can try out this new educational resource designed to give practical experience with an Electronic Health Record System (sometimes called Electronic Medical Record System). Below you will find some sample assignments that demonstrate how the application can work in a real classroom. The EdEHR can be used for any medical profession including; nursing, doctoring, pharmacy, etc.
    p.
      The EdEHR is still in the prototype stage of development. So you may encounter a few things that seem strange.  The EdEHR can be used to create diverse educational resources. The sample assignments below are based on the book "Health Case Studies - Toward Closing the Healthcare Communication Gap" by:  Glynda Rees, Rob Kruger, Janet Morrison.  This is a BcCampus open text book.  https://pressbooks.bccampus.ca/healthcasestudies/
    p.
      EdEHR project git repository is here: https://github.com/BCcampus/edehr and documentation is here https://bccampus.github.io/edehr/


    br
    br
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

    
    div(style="margin-top: 2em;")
      ui-button(:disabled="!selectedUser") Enter Demo
    ui-confirm(ref="confirmDialog", @confirm="")

</template>

<script>
import UiButton from '../../app/ui/UiButton'
import UiConfirm from '../../app/ui/UiConfirm'
import { demoUsers } from '../../helpers/demo-users'
import StoreHelper from '../../helpers/store-helper'

const TEXT = {
  TITLE: 'Proceed to create demo?',
  MSG: 'This process can only be done once in a given period of time.',
}

export default {
  name: 'home',
  data () {
    return {
      demoData: demoUsers,
      selectedUser: {}
    }
  },
  mounted () {
    const demoToken = StoreHelper.getDemoToken()
    if (demoToken) {
      this.$route.push('/edehr')
      // this
    }
  },
  methods: {
    confirmToolConsumerCreation () {
      this.$refs.confirmDialog.showDialog(TEXT.TITLE, TEXT.MSG)
    },
    proceedCreateToolConsumer () {
      StoreHelper.createDemoToolConsumer()
    }
  },
  components: {
    UiButton,
    UiConfirm 
  },
  computed: {},
}
</script>


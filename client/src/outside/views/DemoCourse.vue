<template lang="pug">
  div
    h2(style="text-align: center") Demo EdEHR Course
    div(class="form-container")
      p.
        Welcome to EdEHR.  In this demo you can try out this new educational resource designed to give practical experience with an Electronic Health Record System (sometimes called Electronic Medical Record System). Below you will find some sample assignments that demonstrate how the application can work in a real classroom. The EdEHR can be used for any medical profession including; nursing, doctoring, pharmacy, etc.
      p.
        The EdEHR is still in the prototype stage of development. So you may encounter a few things that seem strange.  The EdEHR can be used to create diverse educational resources. The sample assignments below are based on the book "Health Case Studies - Toward Closing the Healthcare Communication Gap" by:  Glynda Rees, Rob Kruger, Janet Morrison.  This is a BcCampus open text book.  https://pressbooks.bccampus.ca/healthcasestudies/
      p.
        EdEHR project git repository is here: <a href="https://github.com/BCcampus/edehr">https://github.com/BCcampus/edehr</a>
        and documentation is here <a href="https://bccampus.github.io/edehr/">https://bccampus.github.io/edehr/</a>

    div(class="form-container")
      h2 Case Study #1: Chronic Obstructive Pulmonary Disease (COPD)

      p This assignment is based on Case Study #1 from <a href="https://pressbooks.bccampus.ca/healthcasestudies/chapter/learning-objectives/">Health Case Studies - Toward Closing the Healthcare Communication Gap</a>.

      p "Case 1 describes a patient’s experience of chronic obstructive pulmonary disease (COPD) with a history of asthma. The interprofessional collaboration is role modelled between nursing, medical radiology, medical laboratory, and healthcare workers in the emergency department.

      p The focus for this assignment is help the student complement their assessment and monitoring skills with accurate and careful recording within an electronic health record system.

      p Case study #1 COPDExternal

      a(href="#", @click="handleAssignmentSelection('assignment1')") Go to assignment

    div(class="form-container", style="margin-top: 1em;")
      h2 Case Study #2: Pneumonia

      p This assignment is based on Case Study #2 from <a href="https://pressbooks.bccampus.ca/healthcasestudies/chapter/learning-objectives-2/">Health Case Studies - Toward Closing the Healthcare Communication Gap</a>.

      p "Case 2 describes a patient’s experience of COPD exacerbation due to community acquired pneumonia. The patient in this case study has a complicated health history. The interprofessional collaboration is role modelled between nursing, medical radiology, medical laboratory, and health care workers in the emergency department.

      p The focus for this assignment is help the student complement their assessment and monitoring skills with accurate and careful recording within an electronic health record system.

      p Case Study #2: Pneumonia

      a(href="#", @click="handleAssignmentSelection('assignment2')") Go to assignment

      br
</template>

<script>
import StoreHelper from '../../helpers/store-helper'
export default {
  components: {
  },
  mounted () {
    const demoToken = StoreHelper.getDemoToken()
    const selectedDemoUser = StoreHelper.getDemoPersona()
    if (demoToken && !selectedDemoUser) {
      this.$router.push('/demo')
    } else if (!demoToken) {
      this.$router.push('/')
    }
  },
  data () {
    return {}
  },
  computed: {
  },
  methods: {
    handleAssignmentSelection: function (assignment) {
      StoreHelper.setLoading(null, true)
      const personaData = StoreHelper.getDemoPersona()
      StoreHelper.submitPersona(personaData, assignment)
        .then(({url}) => {
          StoreHelper.setLoading(null, false)
          window.location.replace(url)
        }).catch(err => {
          StoreHelper.setLoading(null, false)
          alert('An error occured! \n ', err)
        })
      // StoreHelper.setLoading(null, false)
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
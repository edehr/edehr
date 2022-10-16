<template lang="pug">
  div(v-show="showEdEhrOrg")
    h2 About the edehr.org service
    p How can you get the EdEHR into your healthcare educational program?
    p(v-text-to-html="edehrText.option1")
    p(v-text-to-html="edehrText.option2")

    ul
      li Training your core team of faculty how to
        ul
          li use the EdEHR with a class list and evaluate student work
          li create course content
          li connect the EdEHR to your school's learning management system
      li Assist with any privacy policies, including the creation of a privacy impact assessments
      li Assist your learning and teaching center with faculty support
      li Demonstrate to your IT department that they have nothing to do
      li Provide your school with a dedicated domain and secure server
      li Collaborate to enhance the open source EdEHR project so together we can benefit everyone that uses the application.

    h3 Documents specific to the edehr.org services
    div <a href="https://edehr.org/privacy">Privacy policy</a>
    div <a href="https://edehr.org/terms">Terms and conditions</a>
    div Contact: <a href="mailto:info@edehr.org">info@edehr.org</a>
    div
      router-link(:to="{ name: `edehrDetails` }") edehr.org technical details

</template>

<script>
import edherorg from '@/app/edehr-org/ed-ehr-org'

const edehrText = {
  option1: 'Option 1. Since the project is open source anyone can view and use the software as they wish. Your IT department can learn how to set up this fairly typical web application that is not too difficult to run. For assistance send an email to mailto:info@edehr.org',
  option2: 'Option 2. does not require IT staff because you can use the services of https://edehr.org. This is the quickest and easiest way to bring EdEHR into the classroom. The annual subscription fee is affordable and includes all the support you will need. Including: ',
}

export default {
  computed: {
    showEdEhrOrg () {
      return edherorg.isEdEhrOrg()
    },
  },
  data () {
    return {
      edehrText: edehrText
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.system-info h3 {
  color: #b5b5b5;
}
ul {
  /* to reset font size to paragraph text size. Not sure why this is needed. */
  /* ToDo look into global ul styling */
  font-size: 18px;
}
li {
  list-style-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='3' height='13' viewBox='-1 -1 2 2'><circle r='1' /></svg>");
  max-width: 60rem;
}
ul {
  margin-left: 2rem;
}
@media screen and (max-width: $main-width-threshold3){
  ul {
    margin-left: 1rem;
  }
}



</style>

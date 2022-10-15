<template lang="pug">
  div(v-show="showEdEhrOrg")
    h2 About the edehr.org service
    div
      p(v-text-to-html="edehrText.option1")
    div
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
  option1: 'Option 1. Since the project is open source anyone can view and use the software as they wish. Have your IT department assign a resource to learn how to set up this fairly typical web application. It\'s not difficult to run, it just requires a quarter-full-time-equivalent IT staff member. For assistance send an email to mailto:info@edehr.org',
  option2: 'With option 2 you can get started very quickly and without IT staff with the services of https://edehr.org. This approach is the quickest and easiest way to bring EdEHR into the classroom. The annual subscription fee is affordable and includes all the support you will need. The flat fee includes the following services, ',
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
  margin-left: 2rem;
  font-size: 18px;
}
li {
  list-style-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='3' height='13' viewBox='-1 -1 2 2'><circle r='1' /></svg>");
  max-width: 60rem;

}

</style>

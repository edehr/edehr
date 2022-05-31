<template lang="pug">
  div(v-show="showEdEhrOrg")
    h2 About the edehr.org service
    div(v-text-to-html="edehrText.intro")
    div(v-text-to-html="edehrText.intro2")

    ul
      li Training a core team of faculty:,
        ul
          li How to use the EdEHR with a class list and evaluate student work,
          li How to create course content,
          li How to make connections between the school's learning management system and EdEHR,
      li Any assistance needed to comply with an institution's privacy policies, including the creation of a privacy impact assessments,
      li Assisting the school's learning and teaching center with faculty support, as needed.
      li Assisting the IT department to verify that the edehr.org servers are set up to be robust and secure and to assure the IT team that they will not need to do anything to support this service.,
      li Provide a dedicated domain and server for each school, with its own database and web services.,
      li With the guidance of faculty and the EdEHR community continue to make enhancements to the open source EdEHR project that will benefit everyone that uses the application.

    h3 Documents specific to the edehr.org services
    div <a href="https://edehr.org/privacy">Privacy policy</a>
    div <a href="https://edehr.org/termds">Terms and conditions</a>
    div Contact: <a href="mailto:info@edehr.org">info@edehr.org</a>

</template>

<script>
import edherorg from '@/app/edehr-org/ed-ehr-org'

const edehrText = {
  intro: 'The EdEHR application is open source which means anyone can take the software, set up a server and run the EdEHR system. The setup is fairly typical of any web application yet the difficulty, for learning institutions, is finding the IT staff to be administrators.  If a school does wish to operate the EdEHR they are welcome to contact the main EdEHR developer for assistance. Send an email to mailto:info@edehr.org',
  intro2: 'The second way is to use the services of https://edehr.org. This approach is the quickest and easiest way to bring EdEHR into the classroom. The annual subscription fee is affordable and includes all the support you will need. The flat fee includes the following services, ',
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

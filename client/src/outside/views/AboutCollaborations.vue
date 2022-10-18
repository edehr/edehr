<template lang="pug">
  div(class='main-with-side-content')
    div
      h2 Collaborations to extend the EdEHR
      div
        p.
          Over the past few years, with the collaboration of medical and pedagogical experts we have added many new charting modules.
          This year we plan on adding more.
          Below are links to descriptions about the larger projects we undertook or are planning for this year.  Besides this list we have made many many smaller adjustments to the EHR record pages and forms in our quest to be medically correct with a pedagogical focus.
      collab-list
    div
      h2 Collaborators
      img(class="img", width="300", src='/assets/images/edehr-collaboration.png', alt='Collaborators')

      ul
        li Aurora College
        li BC Institute of Technology - BCIT
        li College of the Rockies
        li Camosun
        li Selkirk College
        li Seneca
        li University of BC - UBC
        li University of Victoria - UVic



</template>

<script>
import { appText } from '@/appText'
import AppQuote from '@/app/components/AppQuote'
import UiLink from '@/app/ui/UiLink'
import CollabList from '@/outside/views/collaborations/collabList'
const edehrText = {
  intro: '',
  examples: [
    {
      title: 'Wound and incision',
      body: ''
    }
  ]
}

export default {
  components: { CollabList, UiLink, AppQuote },
  data () {
    return {
      appText: appText,
      edehrText: edehrText
    }
  },
  computed: {
    showEdEhrOrg () {
      return edherorg.isEdEhrOrg()
    },
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

ul {
  margin-left: 0;
  font-size: 18px;
}
li {
  max-width: 60rem;
}
</style>

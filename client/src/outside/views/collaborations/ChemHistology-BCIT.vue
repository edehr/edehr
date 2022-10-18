<template lang="pug">
  div(class='main-with-side-content')
    div
      h3(id='planned') Planned laboratory modules
      p.
        With BCIT we plan on adding more lab information system modules for chemistry, histology and microbiology. Plus we'll gradually create a look and feel that is more suited to the laboratory information systems typical of this healthcare profession.
    collab-list
</template>

<script>
import { appText } from '@/appText'
import CollabList from '@/outside/views/collaborations/collabList'

export default {
  components: { CollabList },
  data () {
    return {
      appText: appText,
    }
  },
}
</script>


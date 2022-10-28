<template lang="pug">
  div(v-show="showEdEhrOrg")
    a(href="https://edehr.org", target="_blank") edehr.org
    a(href="https://edehr.org/privacy", target="_blank") privacy policy
    a(href="mailto:info@edehr.org", target="_blank") info@edehr.org
</template>

<script>
import edherorg from '@/app/edehr-org/ed-ehr-org'
export default {
  computed: {
    showEdEhrOrg () {
      return true || edherorg.isEdEhrOrg()
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../../scss/definitions';
div {
  display: flex;
  flex-direction: column;
}
</style>

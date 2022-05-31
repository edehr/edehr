<template lang="pug">
  div(v-show="showEdEhrOrg")
    div <a href="https://edehr.org">edehr.org</a>
    div <a href="https://edehr.org/privacy">privacy policy</a>
    div <a href="mailto:info@edehr.org">info@edehr.org</a>

</template>

<script>
// import { Text } from '../../helpers/ehr-text'
import edherorg from '@/app/edehr-org/ed-ehr-org'
export default {
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

</style>

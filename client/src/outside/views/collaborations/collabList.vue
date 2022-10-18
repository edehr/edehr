<template lang='pug'>
  div
    h2 Collaborations
    ul
      li
        ui-link(name="collaborationHematology") hematology lab technologist
      li
        ui-link(name="collaborationWound") wound and incision care
      li
        ui-link(name="collaborationPharmTech") pharmacy technician
      li
        ui-link(name="collaborationChemHistology") chemistry and histology

</template>

<script>
import UiLink from '@/app/ui/UiLink'
export default {
  components: { UiLink },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';

ul {
  margin-left: 2rem;
  font-size: 18px;
}
li {
  list-style-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='3' height='13' viewBox='-1 -1 2 2'><circle r='1' /></svg>");
  max-width: 60rem;
}
</style>

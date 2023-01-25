<template lang="pug">
  div(class="flow_across page_banner")
    zone-lms-page-name(class='left_side')
    div(class='flow_across_last_item')
      slot
</template>
<script>
import ZoneLmsPageName from '@/outside/components/ZoneLmsPageName'
export default {
  components: { ZoneLmsPageName },
  computed: {
  }
}
</script>

<style lang='scss' scoped >
@import '../../scss/definitions';
.zone_lms_page_name {
  font-size: 1.3rem;
}
@media screen and (max-width: $main-width-threshold3) {
  .zone_lms_page_name {
    margin-left: $ehr-layout-padding-left;
  }
}
.page_banner {
  background-color: $grey03;
  padding: 5px;
}

.left_side {
  width: 30%;
}
.right_side {
  width: 75%;
}
@media screen and (max-width: $main-width-threshold3) {
  .flow_across {
    flex-direction: column;
  }
  .left_side,
  .right_side {
    width: 100%;
  }
}
</style>

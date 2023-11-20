<template lang="pug">
  div(class="page_banner", :class='theme')
    zone-lms-page-name(class='left_side', :title='title')
    div(class='right_side')
      slot
</template>
<script>
import ZoneLmsPageName from '@/outside/components/ZoneLmsPageName'
export default {
  components: { ZoneLmsPageName },
  props: {
    title: { type: String, default: undefined },
    theme: { type: String }
  },
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
    margin-left: 0;
  }
}
.page_banner {
  display: flex;
  flex-direction: row;
  background-color: $activity-header-colour;
  padding: 5px;
}

.left_side {
  padding-left: 5px;
  min-width: 60%;
}
.right_side {
  align-self: end;
  margin-left: auto;
  padding-right: 5px;
}
.page_banner.lobj-theme {
  background-color: $lobj-header-colour;
}
.page_banner.seed-theme {
  background-color: $seed-header-colour;
}
</style>

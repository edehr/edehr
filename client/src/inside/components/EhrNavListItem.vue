<template lang="pug">
  div(class="EhrNavListItem")
    ui-link(:to="{ name: routeName(path) }", :class="levelClass")
      div(:class="linkClass", class="linkElement columns")
        div(class="linkLabel column") {{ path.label }}
        div(class="linkHasData circle column is-pulled-right", :class="hasDataColour") &nbsp;
</template>

<script>
import ENList from './EhrNavList'
import UiLink from '../../app/ui/UiLink.vue'
import StoreHelper from '../../helpers/store-helper'

export default {
  name: 'EhrNavListItem',
  components: {
    UiLink,
    ENList
  },
  inject: [ 'pageDataList' ],
  computed: {
    hasData () {
      let k = this.path.pageDataKey
      let d = this.pageDataList()[k]
      if (!d) {
        if (k) console.log('Missing page in hasData listing', k)
        d = {}
      }
      return d
    },
    hasDataColour () {
      let colour = ''
      let hd = this.hasData
      if (StoreHelper.isStudent(this)) {
        colour = hd.hasStudent ? 'green' : ''
      } else if (StoreHelper.isInstructor(this)) {
        colour = hd.hasInstructor ? 'green' : ''
      } else if (StoreHelper.isDeveloper(this)) {
        colour = hd.hasSeed ? 'green' : ''
      }
      return colour
    },
    levelClass () {
      let lv = this.level || 1
      return 'EhrNavListItem__level' + lv
    },
    linkClass () {
      let lv = this.level || 1
      return 'EhrNavListItem__link' + lv
    }
  },
  methods: {
    routeName (path) {
      // console.log('path', path.name)
      return path.redirect ? path.redirect : path.name
    }
  },
  props: {
    path: {
      type: Object
    },
    level: { type: Number }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/definitions';

  .EhrNavListItem {
    margin-top: 1px;
    &__level1,
    &__level2,
    &__level3 {
      display: flex;
      align-items: center;
    }
    &__level1,
    &__level2 {
      & a {
        color: $grey20;
      }
    }
    .router-link-active {
      background-color: $nav-active;
    }
    &__level1 {
      color: $nav-color-level1;
      background-color: $nav-level1;
      font-size: 18px;
      height: 40px;
      & a {
        color: $nav-color-level1;
      }
    }
    &__level2 {
      color: $nav-color-level2;
      background-color: $nav-level2;
      height: 30px;
      & a {
      }
    }
    &__level3 {
      color: $nav-color-level3;
      background-color: $nav-level3;
      height: 30px;
      & a {
        color: $nav-color-level3;
      }
    }
    &__link1 {
      margin-left: 15px;
      & a {
        color: $nav-color-level3;
      }
    }
    &__link2 {
      margin-left: 15px;
    }
    &__link3 {
      margin-left: 30px;
    }

    .linkElement {
      width: 100%;
    }
    .linkLabel {
      width: 80%;
    }
    .linkHasData {
      padding: 0;
      margin-right: 1rem;
      margin-top: 5px;
    }

    // https://jsfiddle.net/bgil2012/26ufnke8/10/
    $green1: rgba(175, 227, 185, 0.98);
    $green2: rgba(2, 201, 72, 0.9);
    $orange1: rgba(254, 235, 220, 0.86);
    $orange2: rgba(250, 116, 0, 1);
    $radius: 20px;
    $off-centerx: $radius * 0.4;
    $off-centery: $radius * 0.4;

    .circle {
      border-radius: 50%;
      max-height: $radius;
      position: relative;
      max-width: $radius;
    }

    .green {
      background-image: radial-gradient(circle at $off-centerx $off-centery, $green1 0%,  $green2 100%);
    }
    .orange {
      background-image: radial-gradient(circle at $off-centerx $off-centery, $orange1 0%,  $orange2 100%);
    }
  }
</style>

<template lang="pug">
  div(class="EhrNavListItem")
    ui-link(:name="routeName(path)", :class="levelClass")
      div(:class="linkClass", class="linkElement columns")
        div(class="linkLabel") {{ path.label }}
        div(class="is-pulled-right", :class="hasDataColour")
        //fas-icon(class="icon-right green-circle", :class="hasDataColour")
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
      const NEW_INFO = 'circle green-circle' //'new-info'
      const SEED_INFO = 'circle empty-circle'
      const NONE = ''
      let hd = this.hasData
      if (StoreHelper.isStudent(this)) {
        colour = hd.hasStudent ? NEW_INFO : hd.hasSeed ? SEED_INFO : NONE
      } else if (StoreHelper.isDevelopingContent(this)) {
        colour = hd.hasSeed ? NEW_INFO : NONE
      } else if (StoreHelper.isInstructor(this)) {
        // check for developing content first because instructor can do both.
        // TODO consider adding a state "isEvaluating" to compliment isInstructor
        colour = hd.hasInstructor ? NEW_INFO : (hd.hasSeed ? SEED_INFO : NONE)
      }
      // console.log('hasDataColor', hd, colour)
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

.linkElement.columns:last-child {
  margin-bottom: 0;
}

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
    color: $white;
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
    width: 90%;
  }
/*
  .new-info {
    color: $green;
    content: 'faTimes';
    font-size: 1em;
    margin-top: 3px;
  }

  .old-info {
    // color: $green;
    content: 'faCircle';
    font-size: 1em;
    margin-top: 3px;
  }
*/
  .circle {
    border-radius: 50%;
    position: relative;
    height: 12px;
    margin-top: 3px;
    width: 12px;
  }

  .empty-circle {
    border: 2px solid $green;
  }

  .green-circle {
    background: $green;
  }
}
</style>

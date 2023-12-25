<template lang="pug">
  div(class="EhrNavListItem")
    ui-link(:name="routeName(path)", :class="levelClass")
      div(:class="linkClass", class="linkElement")
        div(class="linkLabel") {{ linkLabel }}
        div(class="indicator")
          div(:class="dataIndicatorClass")
          div(v-if="level === 1")
            fas-icon(v-show="opened", class="fa top-level", icon="angle-right")
            fas-icon(v-show="!opened", class="fa top-level", icon="angle-down")
            span &nbsp;
</template>

<script>
import ENList from './EhrNavList'
import UiLink from '../../app/ui/UiLink.vue'
import StoreHelper from '../../helpers/store-helper'
import { t18EhrText, t18ElementLabel } from '@/helpers/ehr-t18'

export default {
  name: 'EhrNavListItem',
  components: {
    UiLink,
    ENList
  },
  inject: [ 'pageDataList' ],
  computed: {
    pageInfo () {
      // page data has properties
      // - hasSeed (data),
      // - hasStudent (student data) and
      // - hasMerged (any data)
      // - draftMerged, draftSeed, and draftStudent if page has a draft record
      let k = this.path.pageDataKey
      let d = this.pageDataList()[k]
      if (!d) {
        if (k) console.error('Missing page in pageInfo listing', k, this.path, this.pageDataList())
        d = {}
      }
      return d
    },
    dataIndicatorClass () {
      let colour = ''
      const NEW_INFO = 'circle green-circle'
      const SEED_INFO = 'circle empty-circle'
      const NEW_DRAFT = 'circle draft-circle'
      // const SEED_DRAFT = 'circle empty-draft-circle'
      const NONE = ''
      let isSeedEditing = StoreHelper.isSeedEditing()
      let hd = this.pageInfo
      if (isSeedEditing) {
        colour = hd.draftSeed ? NEW_DRAFT :
          hd.hasSeed ? NEW_INFO : NONE
      } else {
        colour = hd.draftStudent ? NEW_DRAFT :
          hd.hasStudent ? NEW_INFO :
            hd.hasSeed ? SEED_INFO : NONE
      }
      return colour
    },
    levelClass () {
      let lv = this.level || 1
      let lvClass = 'EhrNavListItem__level' + lv
      let isTopAndActive = this.$store.state.visit.topLevelMenu === this.path.name
      let aClass = isTopAndActive ? ' router-link-active' : ''
      return lvClass + aClass
    },
    linkLabel () {
      let key = this.path.fqn
      let val = key ? t18ElementLabel({fqn: key}) : undefined
      return val || t18EhrText()[this.path.label] || this.path.label
    },
    linkClass () {
      let lv = this.level || 1
      return 'EhrNavListItem__link' + lv
    }
  },
  methods: {
    routeName (path) {
      let route = path.name
      // this is how we let user click on a top level item and get to a page in that item's children
      if (StoreHelper.isEHR_Showing() && path.redirectEhr) {
        route = path.redirectEhr
      } else if (StoreHelper.isLIS_Showing() && path.redirectLis) {
        route = path.redirectLis
      }
      return route
    }
  },
  props: {
    path: { type: Object },
    level: { type: Number },
    opened: { type: Boolean }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

$indicator-color: $grey10;

.linkElement {
  display: flex;
  justify-content: space-between;
}
.indicator {
  padding-top: 5px;
  padding-right: 10px;
}
/* Small screens */
@media screen and (max-width: $main-width-threshold1) {
  .indicator {
    padding-right: 0;
  }
}
.linkLabel:hover {
  //transform-origin: top left;
  transform:  translate(35px, 0px)  scale(1.25);
}

a:hover {
  color: #ffffff;
}
.ehr-branding {
  .router-link-active {
    background-color: $colour-brand-ehr;
  }
  .linkElement:hover {
    background-color: $colour-brand-ehr-hover;
  }
}
.lis-branding {
  .router-link-active {
    background-color: $colour-brand-lis;
  }
  .linkElement:hover {
    background-color: $colour-brand-lis-hover;
  }
}
  .EhrNavListItem {
    margin-top: 1px;

    &__level1,
    &__level2,
    &__level3 {
      display: flex;
      align-items: center;
      padding-top: 2px;
      padding-bottom: 2px;
    }

    &__level1,
    &__level2 {
      & a {
        color: $grey20;
      }
    }

    .router-link-active {
      color: $white;
    }

    &__level1 {
      color: $nav-color-level1;
      background-color: $nav-level1;
      font-size: 1.4rem;

      & a {
        color: $nav-color-level1;
      }
    }

    &__level2 {
      color: $nav-color-level2;
      background-color: $nav-level2;

      & a {
      }
    }

    &__level3 {
      color: $nav-color-level3;
      background-color: $nav-level3;

      & a {
        color: $nav-color-level3;
      }
    }

    &__link1 {
      padding-left: $ehr-layout-padding-left;

      & a {
        color: $nav-color-level3;
      }
    }

    &__link2 {
      padding-left: $ehr-layout-padding-left-level2;
    }

    &__link3 {
      padding-left: $ehr-layout-padding-left-level3;
    }

    .linkElement {
      width: 100%;
    }

    .linkLabel {
      width: 80%;
    }

    @media screen and (max-width: $main-width-threshold1) {
      .linkElement {
        // reduce on small screens to keep the green indicator from touching the edge
        width: 95%;
      }
    }

    .circle {
      border-radius: 50%;
      height: 12px;
      width: 12px;
      border: 1px solid $indicator-color;
    }

    .draft-circle {
      background: $nav-draft-colour;
    }

    .empty-circle {
      border: 1px solid $indicator-color;
    }

    .green-circle {
      background-color: $indicator-color;
    }

    .top-level {
      color: $indicator-color;
    }
  }
</style>

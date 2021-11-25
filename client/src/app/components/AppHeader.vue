<template lang="pug">
  div
    header(class="apphdr")
      system-message
      div(class="topMenu")
        div(class="navList")
          div(class="navItem")
            router-link(:to="{ name: 'home' }", class="navLink app-title") EdEHR
          div(class="navItem  push", v-if="lmsName")
            span Return to &nbsp;
            a(:href="lmsUrl", class="navLink") {{lmsName}}
          div(v-if="isStudent", class="navItem")
            router-link(:to="{ name: `ehr` }", class="navLink") Learning Object
          div(class="navItem")
            router-link(:to="{ name: `help` }", class="navLink") About
          div(v-if="isDemo", class="navItem is-pulled-right")
            div(class="navLink activationItem", v-on:click="toggleShowDemoSubmenu()") Demo
              div(class="activationControl")
                fas-icon(v-show="!showingDemoSubmenu", class="fa", icon="chevron-down")
                fas-icon(v-show="showingDemoSubmenu", class="fa", icon="chevron-up")
            div(v-show="showingDemoSubmenu", class="activationContent")
              div(v-on:click="hideDemoMenu()")
                router-link(:to="{ name: `demo` }", class="secondLevelLink") Change persona
              hr
              div(class="secondLevelLink activationItem", v-on:click="demoLogoutConfirm()") Logout of demonstration
      div(v-if="showDashboard", class="secondMenu")
        div(class="navList")
          div(class="navItem")
            router-link(:to="{ name: `instructor` }", class="navLink") Courses/Activities
          div(class="navItem")
            router-link(:to="{ name: `assignments` }", class="navLink") Learning Objects
          div(class="navItem")
            router-link(:to="{ name: `developEhrData` }", class="navLink") Seed Data
          div(class="navItem")
            router-link(:to="{ name: `fileList` }", class="navLink") Files
      div(v-if="isDevEnv", class="thirdMenu")
        app-dev-menu
    ui-confirm(class="confirmDialog",ref="confirmDialog", @confirm="demoLogOut", save-label="Logout")
</template>
<script>
import SystemMessage from './SystemMessage'
import StoreHelper from '../../helpers/store-helper'
import UiButton from '../../app/ui/UiButton'
import AppDevMenu from './AppDevMenu'
import { demoText } from '@/appText'

import UiConfirm from '../../app/ui/UiConfirm'

export default {
  components: { AppDevMenu, SystemMessage, UiButton, UiConfirm },
  data () {
    return {
      showingDemoSubmenu: false
    }
  },
  computed: {
    isDevEnv () { return StoreHelper.isShowingAdvanced() && process.env.NODE_ENV !== 'production' },
    fullName () {
      return StoreHelper.fullName()
    },
    lmsUrl () {
      return StoreHelper.lmsUrl()
    },
    lmsName () {
      return StoreHelper.lmsName()
    },
    isDemo () {
      return StoreHelper.isDemoMode()
    },
    isInstructor () {
      return StoreHelper.isInstructor()
    },
    isStudent () {
      return StoreHelper.isStudent()
    },
    showDashboard () {
      return this.isInstructor
    }
  },
  methods: {
    demoLogoutConfirm () {
      this.$refs.confirmDialog.showDialog(demoText.logout.title, demoText.logout.body)
      this.hideDemoMenu()
    },
    async demoLogOut () {
      console.log('AH demo logout')
      await StoreHelper.demoLogout()
      StoreHelper.logUserOutOfEdEHR()
      console.log('AH demo logout go home')
      // this.$router.go(0)
      this.$router.push('/')
    },
    showAssignmentDetails () {
      this.showingDemoSubmenu = true
    },
    hideDemoMenu () {
      this.showingDemoSubmenu = false
    },
    toggleShowDemoSubmenu () {
      this.showingDemoSubmenu = !this.showingDemoSubmenu
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
header {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 2;
}
.confirmDialog {
  color: $grey80;
}

/* Menu colours */
.topMenu {
  background: $toolbar-background-color;
  color: $toolbar-color;
  .navLink {
    color: rgba(255, 255, 255, 0.8);
    &:focus,
    &:hover,
    &.is-active {
      color: rgba(255, 255, 255, 1);
    }
  }
}
.secondMenu {
  background: $brand-primary-light;
  color: $black;
  .navLink {
    color: $black;
    &:focus,
    &:hover,
    &.is-active {
      color: $brand-primary;
    }
  }
}

/* Menu layout */
.topMenu {
  padding: 10px 20px;
  .navItem {
    padding: 5px 30px 15px 0;
  }
  .push {
    margin-left: 100px;
  }
}
.secondMenu {
  padding: 5px 20px;
  .navItem {
    padding: 5px 30px 15px 0;
  }
}

.thirdMenu {
  padding: 0;
  .navItem {
    padding: 0;
  }
}
/* Large */
.navList {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

/* Small screens */
@media all and (max-width: 500px) {
  .navList {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
  }
}


/* Other */
.apphdr {
  /*.navItem:not(:first-child) {*/
  /*  !*padding-top: 5px;*!*/
  /*}*/

  .navLink {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    &:focus,
    &:hover,
    &.is-active {
      transition: 350ms ease-out;
    }
  }

  .secondLevelLink {
    color: $brand-primary;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;

    &:focus,
    &:hover,
    &.is-active {
      color: $brand-primary-hover;
      transition: 350ms ease-out;
    }
  }
  .activationItem {
    cursor: pointer;
  }


  .activationContent {
    min-height: 5rem;
    border-radius: 5px;
    border: 1px solid $grey60;
    padding: 1rem;

    /*height: 100px;*/
    position: absolute;
    z-index: 10;
    background-color: $white;
    color: $grey80;
  }

  .activationControl {
    display: inline-block;
    position: relative;
    top: 5px;
    margin-left: 0.5rem;
  }
  .app-title {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 1024px) and (max-height: 1400px) {
  .apphdr {
    .push {
      margin-left: 0px;
    }
}

@media screen and (max-width: 500px){
  .activationContent {
    // This was created so that the Demo dropdown menu wouldn't overflow the
    // total width of the design (making the page scrollable)
    max-width: 34vw;
    padding: 0.5rem;
  }

}
}


</style>

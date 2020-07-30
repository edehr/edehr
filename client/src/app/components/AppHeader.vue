<template lang="pug">
  div
    header(class="apphdr")
      system-message
      div(class="wrapper")
        div(class="navList columns is-multiline")
          div(class="navItem column")
            router-link(:to="{ name: 'home' }", class="navLink app-title") EdEHR
          div(class="navItem  column push", v-if="lmsName")
            a(:href="lmsUrl", class="navLink") {{lmsName}}
          div(v-if="showDashboard", class="navItem column")
            router-link(:to="{ name: `instructor` }", class="navLink") Courses
          div(v-if="showDashboard", class="navItem column")
            router-link(:to="{ name: `assignments` }", class="navLink") Assignments
          div(v-if="isStudent", class="navItem column")
            router-link(:to="{ name: `ehr` }", class="navLink") Assignment
          div(class="navItem column")
            router-link(:to="{ name: `help` }", class="navLink") About
          div(v-if="isDemo", class="navItem column is-pulled-right")
            div(class="navLink activationItem", v-on:click="toggleShowDemoSubmenu()") Demo
              div(class="activationControl")
                fas-icon(v-show="!showingDemoSubmenu", class="fa", icon="chevron-down")
                fas-icon(v-show="showingDemoSubmenu", class="fa", icon="chevron-up")
            div(v-show="showingDemoSubmenu", class="activationContent")
              div(v-on:click="hideDemoMenu()")
                router-link(:to="{ name: `demo` }", class="secondLevelLink") Change persona
              div(class="secondLevelLink activationItem", v-on:click="demoLogoutConfirm()") Logout of demonstration
    ui-confirm(class="confirmDialog",ref="confirmDialog", @confirm="demoLogOut", save-label="Logout")
</template>
<script>
import SystemMessage from './SystemMessage'
import StoreHelper from '../../helpers/store-helper'
import UiButton from '../../app/ui/UiButton'
import { demoText } from '@/appText'

import UiConfirm from '../../app/ui/UiConfirm'

export default {
  components: { SystemMessage, UiButton, UiConfirm },
  data () {
    return {
      showingDemoSubmenu: false
    }
  },
  computed: {
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
.apphdr {
  background: $toolbar-background-color;
  color: $toolbar-color;
  .wrapper {
    padding: 10px 20px;
  }
  .navList {
    display: flex;
    /* default is flow in row without wrap */
  }

  .push {
    margin-left: 100px;
  }

  .navItem:not(:first-child) {
    /*padding-top: 5px;*/
  }

  .navLink {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    /*margin-left: 3em;*/

    &:focus,
    &:hover,
    &.is-active {
      color: rgba(255, 255, 255, 1);
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
    /*margin-left: 0;*/
  }
}

@media screen and (max-width: 1024px) and (max-height: 1400px) {
  .apphdr {
    .wrapper {
      padding: 8px 12px;
    }
    .navLink {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      font-weight: bold;
      /*margin-left: 1em;*/

      &:focus,
      &:hover,
      &.is-active {
        color: rgba(255, 255, 255, 1);
        transition: 350ms ease-out;
      }
    }

    .push {
      margin-left: 0px;
    }

    .navItem .button {
      margin-bottom: 0;
      margin-top: -8px; // t0 keep text aligned with non-button items
    }
    .app-title {
      /*margin-left: 0;*/
    }

  }

}


</style>

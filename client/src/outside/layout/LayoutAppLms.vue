<template lang="pug">
  div(class="appLms-layout flow_down")
    app-header(class="sticky")
    main
      div(class="appLmsBanner centered-wrapper")
        div(class="flow_across")
          h1 EdEHR Lite
          div(v-if="isLoggedIn", class="flow_across_last_item")
            ui-button(@buttonClicked="confirmUserLogout", secondary)
              span Logout of EdEHR Lite
      div(class="appLmsDashContainer")
        div(class="leftNav")
          div(v-if="isLoggedIn", class="card")
            header.card-header
              p.card-header-title
                router-link(:to="{ name: 'appLmsDashboard' }") Dashboard
            .card-content.nav-list
              router-link(:to="{ name: 'AppLmsUserAccount' }") User Profile
              router-link(:to="{ name: 'AppLmsPersonalLms' }") Personal EdEHR Lite
              router-link(:to="{ name: 'AppLmsUserLinks' }") Shared with you
              router-link(v-if='showDev', :to="{ name: 'AppLmsAdminDev' }") Dev Admin
        div(class="rightMain")
          slot
      section(v-show="showDev", class="centered-wrapper appLms-page-footer")
        div appLmsUserToken: {{ truncate(appLmsUserToken, 50) }}
        div appLmsUserId: {{ appLmsUserId }}
        div appUserData {{ appUserData }}
        div appLmsTokenData {{ appLmsTokenData }}
        div appLmsData {{ appLmsData }}
    .showDevToggle
      input(type="checkbox", @input="showDev = !showDev", :checked="showDev")
    app-footer
    ui-confirm(ref="confirmLogoutDialog", @confirm="logoutUser", saveLabel='Logout')

</template>

<script>
import AppHeader from '../../app/components/AppHeader.vue'
import AppFooter from '../../app/components/AppFooter.vue'
import UiButton from '@/app/ui/UiButton.vue'
import UiConfirm from '@/app/ui/UiConfirm.vue'
import { HOME_PAGE } from '@/router'

export default {
  components: {
    UiConfirm,
    UiButton,
    AppFooter,
    AppHeader,
  },
  data: function () {
    return {
      showDev: false,
    }
  },
  computed: {
    isLoggedIn () { return !!this.appLmsUserToken },
    appLmsUserToken () {return this.$store.getters['appLmsStore/appLmsUserToken']},
    appLmsUserId () {return this.$store.getters['appLmsStore/appLmsUserId']},
    appUserData () { return this.$store.getters['appLmsStore/appUserData']},
    appLmsTokenData () {return this.$store.getters['appLmsStore/appLmsTokenData']},
    appLmsData () { return this.$store.getters['appLmsStore/appLmsData']},
  },
  methods: {
    async logoutUser () {
      await this.$store.dispatch('appLmsStore/appLmsLogOut')
      await this.$router.push({ name: HOME_PAGE })
    },
    confirmUserLogout () {
      this.$refs.confirmLogoutDialog.showDialog('Confirm logout', 'Logout of EdEHR Lite')
    },
    truncate (input, lim) {
      return input && input.length > lim ? `${input.substring(0, lim)}...` : input
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.appLmsDashContainer {
  display: flex;
  flex-direction: row;
  .nav-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .leftNav {
    //max-width: 10rem;
    min-width: 10rem;
    margin-right: 1rem;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
  }
  .rightMain {
  }
}

@media screen and (max-width: $main-width-threshold3) {
  .appLmsDashContainer {
    flex-direction: column;
  }
  .leftNav,
  .rightMain {
    width: 100%;
  }
}

main {
  min-height: 90vh;
  padding-bottom: 2rem;
}
.appLms-layout {
  background-color: $brand-highlight-light;
}
.appLms-page-footer {
  max-width: 90%;
  border: 1px solid darkcyan;
  padding: 1rem;
}
.showDevToggle {
  margin: 1rem;
  padding: 2px;
  width: 1.4rem;
}
</style>

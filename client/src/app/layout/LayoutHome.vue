<template lang="pug">
  div(class="outside-layout")
    slot(name="outside-header", class="outside-header")
      app-header
      div(class="app")
        main(class="outside-main")
          div(name="mainContent", class="outside-content")
            slot
        slot(name="outside-footer", class="outside-footer")
      app-footer
   
</template>

<script>
import AppHeader from '../../app/components/AppHeader.vue'
import AppFooter from '../../app/components/AppFooter.vue'
import UiSpinner from '../../app/ui/UiSpinner'

export default {
  name: 'LayoutOutside',
  components: {
    AppFooter,
    AppHeader,
    UiSpinner
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.outside-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.app {
  flex: 1 0 auto;
}

footer {
  flex-shrink: 0;
}
</style>

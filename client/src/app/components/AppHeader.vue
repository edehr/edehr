<template lang="pug">
  header
    system-message
    app-header-menu
</template>
<script>
import SystemMessage from './SystemMessage'
import AppHeaderMenu from '@/app/components/AppHeaderMenu'
export default {
  components: { AppHeaderMenu, SystemMessage },
  computed: {
  }
}
</script>

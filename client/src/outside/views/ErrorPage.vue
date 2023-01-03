<template lang='pug'>
  div
    h1 Error
    div {{ apiError }}
    what-to-do-instructions
</template>

<script>
import WhatToDoInstructions from '@/outside/components/WhatToDoInstructions'
export default {
  components: { WhatToDoInstructions },
  computed: {
    apiError () { return this.$store.state.system.apiError }
  }
}

</script>

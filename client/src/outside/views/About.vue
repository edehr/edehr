<template lang='pug'>
  div(class="outside-view")
    h1 About the EdEHR and edehr.org SaaS
    div
      ui-link(name="aboutSaaS")
        span aboutSaaS
    div
      ui-link(name="aboutEdEHR")
        span aboutEdEHR

</template>

<script>

import UiLink from '@/app/ui/UiLink'
export default {
  components: { UiLink }
}
</script>


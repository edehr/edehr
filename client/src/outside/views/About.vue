<template lang='pug'>
  div(class="outside-view")
    h1 About the EdEHR and edehr.org SaaS
    div
      ui-link(name="aboutSaaS")
        span Click here to learn about the edehr.org software as a service (SaaS)
    div
      ui-link(name="aboutEdEHR")
        span Click here to learn more abou the EdEHR project

</template>

<script>

import UiLink from '@/app/ui/UiLink'
export default {
  components: { UiLink }
}
</script>


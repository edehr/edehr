<template lang="pug">
  div
    h1 Add a file to the EHR system
    div
      file-upload
    div
      ui-link(name="fileList") Return to the list of files


</template>
<script>
import FileUpload from '@/outside/components/FileUpload'
import UiLink from '@/app/ui/UiLink'

export default {
  components: {
    FileUpload, UiLink
  }
}
</script>

<style scoped lang="scss">
</style>

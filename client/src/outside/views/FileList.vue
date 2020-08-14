<template lang="pug">
  div
    h1 EHR Files
    div(class="intro")
      p.
        Files can be uploaded to the EdEHR server and later used within the EHR pages, where ever a normal file upload
        action would appear.  Say, for example, on the Laboratory Reports or the Medical Imaging pages.
      p.
        As a course designer (someone who creates course content) you will upload files here and then navigate
        to the EHR seed data and edit the EHR content.  When you go to pages like Laboratory Reports and click
        to add a record you will be able to select a file from those listed below.
    div
      ui-link(name="fileAdd") Add a file
    div
      file-list

</template>
<script>
import FileList from '@/outside/components/FileList'
import UiLink from '@/app/ui/UiLink'

export default {
  components: {
    FileList, UiLink
  }
}
</script>

<style scoped lang="scss">
</style>

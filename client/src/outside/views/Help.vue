<template lang='pug'>
  div(class="outside-view")
    h1 Help page
    div This page content is now visible on the &nbsp;
      router-link(:to="{ name: `about` }") about page
</template>

<script>
/*
The "/help" page was the original page that contained the about text. Keep this help page
in case users bookmarked the page or to assist search engines relocate.
 */
</script>

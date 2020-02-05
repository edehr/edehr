<template lang="pug">
  ul
    li(class="medList", v-for="med in medsList")
      div {{ med.medication }} {{ med.route }} {{ med.reason }}
</template>

<script>
export default {
  props: {
    medsList: { type: Array }
  },
  mounted: function () {
    console.log('this.medLsit >> ', this.medsList)
  }
}

</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';

ul {
  margin-left: 0;
  margin-top: 0;
}
ul li {
  list-style: none;
  /* border-bottom: 1px solid $grey40; */
  /* margin-bottom: 1.5em; */
  padding-bottom: 1em;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

}
ul li h6 {
  margin-bottom: .25em;
  margin-top: .25em;
}
.medlist span {
  display: block;
  margin-bottom: .5em;
}
</style>
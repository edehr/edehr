<template lang='pug'>
  div(class='seed-form-element', v-show='isRelevant')
    div(class='form-element-label') {{ element.label }}
    div(class='form-element-value') {{ seedElement }}

</template>

<script>
export default {
  props: {
    element: { type: Object },
    seedElement: { type: [String, Boolean] }
  },
  computed: {
    isRelevant () {
      let relevant = this.element.inputType !== 'spacer'
      relevant = relevant && this.seedElement // has content
      return relevant  }
  },
  methods: {
  }
}
</script>

<style lang='scss'>
.seed-form-element {
  display: flex;
  flex-flow: row;
  max-width: 40rem;
  //margin: 0.5rem;
  padding: 5px;
  border: 1px solid rgb(55,55,55,0.25);
}
.form-element-label {
  flex: 0 0 30%;
  text-align: left;
}
.form-element-value {
  flex: 1 0 70%;
  text-align: left;
  overflow-wrap: break-word;
}

</style>
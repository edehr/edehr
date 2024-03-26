<template lang="pug">
  div(class='accordion-element')
    div(@click="show = !show")
      h3(class='accordion-header')
        fas-icon(class="fa", :icon="icon")
        span &nbsp; {{ headerText }}
    div(class="accordion" :class="theme")
      transition(name="accordion", v-on:before-enter="beforeEnter", v-on:enter="enter" , v-on:before-leave="beforeLeave", v-on:leave="leave")
        div(class="accordion-body", v-show="show")
          div(class="body-inner")
            slot(name="body") default body
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  props: {
    headerText: { type: String },
    theme: { type: String, default: 'defaultTheme' }
  },
  computed: {
    icon () { return this.show ? 'chevron-up' : 'chevron-down'},
  },
  methods: {
    beforeEnter: function (el) {
      el.style.height = '0'
    },
    enter: function (el) {
      el.style.height = el.scrollHeight + 'px'
    },
    beforeLeave: function (el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave: function (el) {
      el.style.height = '0'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../scss/definitions';
.accordion-element {
  padding-bottom: 5px;
}
.accordion {
  background-color: $grey10;
  .accordion-body {
    border-top: 0;
    transition: 350ms ease-out;
    overflow-x: auto;
  }
  .body-inner {
    padding: 5px 1rem;
  }
}
.accordion-header {
  padding: 5px 1rem;
  margin-bottom: 1rem;
  height: 2rem;
  width: 100%;
  background-color: $grey03;
  font-weight: bold;
}
.defaultTheme {
  background-color: $grey03;
}
.blueTheme {
  background-color: skyblue;
}
.grayTheme {
  background-color: $grey03;
}
</style>

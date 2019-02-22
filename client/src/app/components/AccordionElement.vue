<template lang="pug">
  div(class="accordion" :class="theme")
    transition(name="accordion", v-on:before-enter="beforeEnter", v-on:enter="enter" , v-on:before-leave="beforeLeave", v-on:leave="leave")
      div(class="body", v-show="show")
        div(class="body-inner")
          slot
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    theme: { type: String, default: 'defaultTheme' },
    show: { type: Boolean }
  },
  methods: {
    beforeEnter: function(el) {
      el.style.height = '0'
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave: function(el) {
      el.style.height = '0'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../scss/definitions';
.accordion {
  background-color: $grey10;
  .body {
    border-top: 0;
    transition: 350ms ease-out;
  }

  .body-inner {
  }
}
.defaultTheme {
  background-color: palegoldenrod;
}
.blueTheme {
  background-color: skyblue;
}
.grayTheme {
  background-color: $grey10;
}
</style>

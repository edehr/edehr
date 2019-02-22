<template>
  <div class="courses">
    <h2 class="hello">Courses for {{ id }} {{ $attrs }}</h2>
    <div>
      <li v-for="(value, propertyName) in activity" v-bind:key="propertyName">
        <strong>{{ propertyName }}</strong> : {{ value }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: 'Newbie'
    }
  },
  computed: {
    activity() {
      // return this.$store.state.sActivityInfo
      console.log('TODO ... get activity data here')
      return {}
    }
  }
}
</script>

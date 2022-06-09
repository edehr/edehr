<template lang="pug">
  div(v-show="false")
    div(v-if="editVisitDayTime", class="wrap-items-right")
      div(class='visit-day-area wrap-items-right')
        select(v-model="visitDay", class='visit-day-edit')
          option(v-for="option in [0,1,2,3,4]", :key="option", :value="option") {{ option}}
        select(v-model="visitTime", class='visit-time-edit')
          option(v-for="option in timeSeries", :key="option", :value="option") {{ option}}
      div(class='visit-control')
        fas-icon(icon="check-circle", class="icon-item", v-on:click='editVisitDayTime = false')
    div(v-else, class="wrap-items-right")
      div(class='visit-day-area wrap-items-right')
        div(class="visit-day-edit ") Day: {{visitDay}}
        div(class="visit-time-edit") Time: {{ visitTime }}
      div(class='visit-control')
        fas-icon(icon="edit", class="icon-item", v-on:click='editVisitDayTime = true')
</template>

<script>
export default {
  data: function () {
    return {
      editVisitDayTime : false,
      visitDay: 0,
      visitTime: '09:00'
    }
  },
  computed: {
    timeSeries () {
      const ts = []
      for(let i = 0; i < 24; i++) {
        let h = (i < 10 ? '0'+i : i)
        ts.push(h + ':00')
        ts.push(h + ':30')
      }
      return ts
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.wrap-items-right {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
.icon-item {
  margin: auto;
}
.visit-day-edit {
  flex: 0 1 4rem;
  margin: auto;
}
.visit-time-edit {
  flex: 0 1 5rem;
  margin: auto;
}
.visit-control {
  display: flex;
  flex: 0 0 0.5rem;
  height: 2.5rem
}
.visit-day-area {
  flex: 0 1 80%;
}

</style>

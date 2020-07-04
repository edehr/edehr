<template lang="pug">
  div(class="wrapper")
    div(class="valueCards")
      div(class="valueCard", v-for="value in values", :key="value.title")
        div(class="card is-shady")
          div(class="card-image has-text-centered")
            div(v-if="value.canadian")
              fas-icon(class="fa", :icon="['fab', 'canadian-maple-leaf']")
            div(v-else)
              fas-icon(class="fa", :icon="value.icon")
          div(class="card-content")
            h2 {{ value.title }}
            div(v-text-to-html.noAutoLink="value.body")

</template>

<script>
import { edEhrValues } from '@/appText'
export default {
  components: {
  },
  data () {
    return {
      values: edEhrValues
    }
  }
}

</script>


<style lang="scss" scoped>
  @import '../../scss/definitions';

  .wrapper {
    justify-content: center;
  }
  .valueCards {
    display: flex;
    flex-wrap: wrap;
    width: 99%;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    @media only screen and (min-width : 1025px) {
      width: 1024px;
    }
    @media only screen and (min-width : 1440px) {
      width: 1340px;
    }
  }
  .valueCard {
    margin-bottom: 1rem;
    overflow-x: auto;
    @media only screen and (min-width : 768px) {
      width: 33%;
      display: flex;
    }
  }
  .card {
    /* Trial and error to get a ht that makes all cards the same size */
    @media only screen and (min-width : 768px) {
      min-height: 32rem;
    }
    @media only screen and (min-width : 1440px) {
      min-height: 22rem;
    }
  }
  .fa {
    font-size: 10rem;
    padding-top: 2.8rem;
    padding-bottom: 0.5rem;
    color: #209cee;
  }
  .card-content .content h4 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  .is-shady {
    animation: flyintoright .4s backwards;
    background: #fcfcfc;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
    transition: all .2s ease-in-out;
  }
  .is-shady:hover {
    box-shadow: 0 10px 16px rgba(0, 0, 0, .3), 0 6px 6px rgba(0, 0, 0, .7);
  }

</style>


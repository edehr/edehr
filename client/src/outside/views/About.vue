<template lang='pug'>
  div(class="outside-view")
    h1 About the EdEHR and edehr.org SaaS
    section(class="no-container features features-dark")
      div(class="valueCards")
        div(class="valueCard", v-for='v in abouts', :key='v.title')
          div(class="card is-shady")
            div(class="card-image has-text-centered")
              img(v-if="v.image", class="img", :src='v.image', :alt='v.image')
              fas-icon(v-if="v.icon", class="fa", :icon="v.icon")
            div(class="card-content")
              h2 {{ v.title }}
              div {{ v.text }}
              div(class="cta")
                ui-button(@buttonClicked="$router.push({name:v.dest})") {{v.label}}

</template>
<script>
import UiLink from '@/app/ui/UiLink'
import UiButton from '@/app/ui/UiButton'
export default {
  components: { UiButton, UiLink },
  data: function () {
    return {
      abouts: [
        {
          title: 'EdEHR Project',
          icon: 'heartbeat',
          text: 'The EdEHR project is an essential tool for healthcare education',
          label: 'EdEHR',
          dest: 'aboutEdEHR'
        },
        {
          title: 'edehr.org SaaS',
          image: '/assets/images/edehr.org-icon.png',
          text: 'Easy to get started thanks to the edehr.org software as a service (SaaS)',
          label: 'SaaS',
          dest: 'aboutSaaS'
        },
        {
          title: 'Collaborations',
          image: '/assets/images/edehr-collaboration.png',
          text: 'Collaborations between learning institutions and the edehr.org service have extended the EdEHR project',
          label: 'Collaboration',
          dest: 'aboutCollaboration'
        }
      ],
    }
  },
  methods: {
    goto (name) {
      console.log(name)
      this.$router.push({name: name})
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../scss/definitions';
.outside-view {
  margin: 2rem;
}
.features {
  padding: 1.5rem;
}
.features-dark {
  background-color: #BCBCBC;
}
.features-light {
  background-color: #f0f0f0;
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
  //margin-bottom: 1rem;
  overflow-x: clip;
  @media only screen and (min-width : 768px) {
    width: 33%;
    display: flex;
  }
}
.card {
  margin-bottom: 1rem;
  /* Trial and error to get a ht that makes all cards the same size */
  @media only screen and (min-width : 768px) {
    min-height: 28rem;
  }
  @media only screen and (min-width : 1440px) {
    min-height: 22rem;
  }
}
.fa {
  font-size: 7rem;
  color: #209cee;
}
.img {
  object-fit: contain;
}
.card-content {
  /* padd bottom to fit button */
  padding-bottom: 4rem;
  font-size: 1.25rem;
  font-weight: 700;
}
.card-image {
  block-size: 8rem;
  padding-top: 1.5rem;
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

.cta {
  display: flex;
  justify-content: center;
}
.outside-layout button, .outside-layout .button,
button {
  position: absolute;
  bottom: 1rem;
  height: 2.2rem;
  min-width: 80%;
}
</style>

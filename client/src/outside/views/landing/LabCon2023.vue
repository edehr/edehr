<template lang="pug">
  div(class='labcon2023')
    div(class='lcInner')
      div(class="welcome")
        h2(class="wTitle") Welcome attendees of LabCon 2023
        //div(class="wTitle")
        //  a(href='https://csmls.org/')
        //    img(src='/assets/landing/labcon2023/csmls-logo.png', alt='CSMLS Logo', width='300px')

        div(class="wPanel")
          p.
            Welcome to the EdEHR, an Educational Electronic Health Record system that contains a Lab Information System

        button(class="accButton") What is it and why should I care?
        div(class="accPanel")
          intro-panel

        button(class="accButton") I like the EdEHR yet my school needs a feature added. Is this possible?
        div(class="accPanel")
          funders-panel

        button(class="accButton") Can I try a hematology case study?
        div(class="accPanel")
          hema-panel

        button(class="accButton") How can my school use this educational LIS (EdEHR)?
        div(class="accPanel")
          saas-panel

</template>

<script>
import { appText } from '@/appText'
import AppQuote from '@/app/components/AppQuote'
import SmearImage from '@/outside/views/landing/SmearImage.vue'
import IntroPanel from '@/outside/views/landing/IntroPanel.vue'
import SaasPanel from '@/outside/views/landing/SaasPanel.vue'
import HemaPanel from '@/outside/views/landing/HemaPanel.vue'
import FundersPanel from '@/outside/views/landing/FundersPanel.vue'

export default {
  components: { FundersPanel, HemaPanel, SaasPanel, IntroPanel, SmearImage, AppQuote },
  data () {
    return {
      appText: appText,
    }
  },
  mounted () {
    const acc = document.getElementsByClassName('accButton')
    let i
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active')
        let panel = this.nextElementSibling
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px'
        }
      })
    }
  }
}
</script>
<style lang='scss'>
@import '../../../scss/definitions';
.labcon2023 {
  & .welcome {
    position: relative;

    & .wTitle {
      margin: auto;
      width: 40%;
      //border: 3px solid red;
      padding: 10px;
    }

    & .wPanel {
      height: inherit;
      padding: 0 18px;
      background-color: white;

      & p {
        font-size: 18pt;
      }
    }
  }
}

.labcon2023 {
  & .lcInner {
    width: 60%;
    margin: auto
  }
  & .accButton {
    font-size: 1.4rem;
    font-weight: bold;
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 10px;
    width: 100%;
    height: inherit;
    text-align: left;
    border: none;
    outline: none;
    transition: 1.4s;
  }
  /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
  & .active,
  & .accButton:hover {
    background-color: #ccc;
  }

  /* Style the accordion panel. Note: hidden by default */
  & .accPanel {
    padding-left: 18px;
    padding-top: 10px;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    & p {
      font-size: 18pt;
    }
    & strong {
      font-weight: bolder;
      font-style: oblique;
    }
  }

  & .accButton:after {
    content: '\02795'; /* Unicode character for "plus" sign (+) */
    font-size: 13px;
    color: #777;
    float: right;
    margin-left: 5px;
    margin-right: 5px;
  }

  & .active:after {
    content: "\2796"; /* Unicode character for "minus" sign (-) */
  }

  & .bSmears {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}

</style>

<template lang="pug">
  div(class='labcon2023')
    div(class='lcInner')
      div(class="welcome")
        h2(class="wTitle") Frequently ask questions about LIS in the EdEHR;

        div(class="wPanel")
          p.
            Welcome to the EdEHR, an <strong>Educational</strong> Electronic Health Record (EHR) system that
            contains a Lab Information System (LIS).  This application is for anyone involved in
            the education of healthcare professionals, in any field of practice.

        lab-con-section(title="What Med Lab modules does the EdEHR support?")
          lis-panel

        lab-con-section(title="Tell me how BCIT uses the EdEHR in their Hematology lab course?")
          bcit-hema-panel

        lab-con-section(title="Can I see a sample hematology case study?")
          hema-case-study-panel

        lab-con-section(title="Does it work with my school's learning management system?")
          lms-panel

        lab-con-section(title="Why is the EdEHR good?")
          why-panel

        lab-con-section(title="I like the EdEHR yet my school needs a feature added. Is this possible?")
          add-feature-panel

        lab-con-section(title="What does 'open source' mean?")
          open-source-panel

        lab-con-section(title="Who has funded the development?")
          funders-panel

        lab-con-section(title="What features are on the roadmap?")
          roadmap-panel

        lab-con-section(title="How can my school use this educational LIS (EdEHR)?")
          saas-panel

</template>

<script>
import { appText } from '@/appText'
import AppQuote from '@/app/components/AppQuote'
import SmearImage from '@/outside/views/landing/SmearImage.vue'
import IntroPanel from '@/outside/views/landing/IntroPanel.vue'
import SaasPanel from '@/outside/views/landing/SaasPanel.vue'
import FundersPanel from '@/outside/views/landing/FundersPanel.vue'
import LabConSection from '@/outside/views/landing/LabConSection.vue'
import LisPanel from '@/outside/views/landing/LisPanel.vue'
import LmsPanel from '@/outside/views/landing/LmsPanel.vue'
import WhyPanel from '@/outside/views/landing/WhyPanel.vue'
import AddFeaturePanel from '@/outside/views/landing/AddFeaturePanel.vue'
import RoadmapPanel from '@/outside/views/landing/RoadmapPanel.vue'
import BcitHemaPanel from '@/outside/views/landing/BcitHemaPanel.vue'
import HemaCaseStudyPanel from '@/outside/views/landing/HemaCaseStudyPanel.vue'
import OpenSourcePanel from '@/outside/views/landing/OpenSourcePanel.vue'

export default {
  components: { OpenSourcePanel, HemaCaseStudyPanel, BcitHemaPanel, RoadmapPanel, AddFeaturePanel, WhyPanel, LmsPanel, LisPanel, LabConSection, FundersPanel, SaasPanel, IntroPanel, SmearImage, AppQuote },
  data () {
    return {
      appText: appText,
    }
  },
  mounted () {
    function openClose (panel, closer) {
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null
        closer.style.display = 'none'
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px'
        closer.style.display = 'block'
      }
    }

    const acc = document.getElementsByClassName('accButton')
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active')
        let panel = this.nextElementSibling
        let closer = panel.nextElementSibling
        openClose(panel, closer)
      })
    }
    const closers = document.getElementsByClassName('closeButton')
    for (let i = 0; i < closers.length; i++) {
      closers[i].addEventListener('click', function () {
        let panel = this.previousElementSibling
        let accButton = panel.previousElementSibling
        accButton.classList.toggle('active')
        openClose(panel, this)
      })
    }
  }
}
</script>
<style lang='scss'>
@import '../../../scss/definitions';

.labcon2023 a {
  font-size: 20pt;
}

.labcon2023 {
  & h3 {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
  & .welcome {
    position: relative;

    & .wTitle {
      display: inline-block;
      margin-bottom: 2rem;
    }

    & .wPanel {
      height: inherit;
      padding: 0;

      & p {
        font-size: 18pt;
      }
    }
  }

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

  & .closeButton {
    border: none;
    box-shadow: none;
    background-color: transparent;
    margin-left: 10px;
    text-decoration-line: underline;
  }
  & .bSmears {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}

@media screen and (max-width: $main-width-threshold2){

  .labcon2023 {
    & .lcInner {
      width: 100%;
      margin: auto
    }

  }
}
</style>

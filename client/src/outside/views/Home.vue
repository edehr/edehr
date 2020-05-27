<template lang="pug">
  div(class="outside-view home")

    section(class="hero is-info is-medium is-bold")
      div(class="hero-body")
        div(class="container has-text-centered")
          h1(class="title") EdEHR - The all Canadian, open source, Educational Electronic Health Record system.
          h2(class="subtitle") Student focused, simulated case studies, laddered case studies, with decision supports and customizable.
    div(class="box cta has-text-centered has-text-weight-semibold")
      div(v-if="isInstructor")
        div You are logged in as an instructor.  &nbsp;
          ui-link(:name="'instructor'") Go to your course and class lists.
      div(v-else-if="isStudent")
        div You are logged in as a student. &nbsp;
          ui-link(:name="'ehr'") Go to your assignment.
      div(v-else)
        p.
          To use this system you need to use a Learning Management System such as Moodle, Canvas, Blackboard, or any
          other LTI compliant learning system. For more information see the
          <a target="_blank" href="https://bccampus.github.io/edehr/">documentation</a>.

    section(class="container")
      div(class="columns features")
        div(class="column is-4")
          div(class="card is-shady")
            div(class="card-image has-text-centered")
              fas-icon(class="fa", icon="graduation-cap")
            div(class="card-content")
              div(class="content")
                h4 Student focused
                p.
                  EdEHR is focused on the learning needs of the student.  It has the flexibility to foster higher-order
                  critical thinking in students specific to their learning levels and their field.
                  EdEHR introduces students to the concept of data collection and the impact of that data on patient
                  outcomes for real-time patient care.


        div(class="column is-4")
          div(class="card is-shady")
            div(class="card-image has-text-centered")
              fas-icon(class="fa", icon="book-open")
            div(class="card-content")
              div(class="content")
                h4 Open Source
                p.
                  EdEHR is fully open source code so it can be shared, built on, and adapted without asking for permission.
                p.
                  <a href="https://github.com/BCcampus/edehr">GitHub repository</a>

        div(class="column is-4")
          div(class="card is-shady")
            div(class="card-image has-text-centered")
              fas-icon(class="fa", :icon="['fab', 'canadian-maple-leaf']")
            div(class="card-content")
              div(class="content")
                h4 Canadian
                p.
                  Can be stored, hosted, and implemented in Canada and is relevant to Canadian
                  health care (e.g. metric, Canadian medication and dosaging, Canadian context and focus,
                  including Indigenous perspectives)


      div(class="columns features")
        div(class="column is-4")
          div(class="card is-shady")
            div(class="card-image has-text-centered")
              fas-icon(class="fa", icon="heartbeat")
            div(class="card-content")
              div(class="content")
                h4 Interprofessional
                p.
                  EdEHR places an interdisciplinary focus over a physician-centric focus.
                  The EdEHR can be used for any medical profession including; nursing, physiotherapy, medicine, pharmacy, midwifery, etc.
                  Assignments can share case study data yet ask students in different faculties to complete work
                  relative to their course of study.

        div(class="column is-4")
          div(class="card is-shady")
            div(class="card-image has-text-centered")
              fas-icon(class="fa", icon="user-injured")
            div(class="card-content")
              div(class="content")
                h4 Simulated case studies
                p.
                  Fictitious patient case studies can be utilized for learning and teaching.
                  These can be based on the eight health case studies have been developed by a team at
                  BCIT through BCcampus for this purpose.
                p.
                  <a href="https://pressbooks.bccampus.ca/healthcasestudies/">Health Case Studies</a>


        div(class="column is-4")
          div(class="card is-shady")
            div(class="card-image has-text-centered")
              fas-icon(class="fa", icon="user-clock")
            div(class="card-content")
              div(class="content")
                h4 Laddered case studies
                p.
                  Case studies can be adapted to the level of student
                  accessing the EdEHR. For example, a novice student would work with a simpler case
                  than a more experienced student. As well, the novice student can be required to
                  access, analyze, and respond to data that would be less complex than for a more
                  experienced student.

      div(class="columns features")
        div(class="column is-4")
          div(class="card is-shady")
            div(class="card-image has-text-centered")
              fas-icon(class="fa", icon="medkit")
            div(class="card-content")
              div(class="content")
                h4 Decision supports
                p.
                  EdEHR provides tools to assist with judgement and delivery or safe, quality care. Such as
                  medication search a snapshot of the Canadian drug database.
                  Assignment definitions can give students access to educational resources, such as guidelines,
                  videos, glossaries, etc.


        div(class="column is-4")
          div(class="card is-shady")
            div(class="card-image has-text-centered")
              fas-icon(class="fa", icon="dice-d20")
            div(class="card-content")
              div(class="content")
                h4 Customizable
                p.
                  Post-secondary programs can adapt the assignments and case studies
                  to accommodate their educational needs and learning objectives.
                p.
                  Customization of EHR fields, pages and context can be implemented by a non-developer.
                  See the <a href="https://bccampus.github.io/edehr/">documentation</a>

        div(class="column is-4")
          div(class="card is-shady")
            div(class="card-image has-text-centered")
              fas-icon(class="fa", icon="hand-holding-medical")
            div(class="card-content")
              div(class="content")
                h4 Cost efficient
                p.
                  EdEHR is an open-source educational resource
                  that provides post-secondary health care programs with the potential to access and
                  customize the case studies and the application at minimal cost.

        <!--div(class="column is-4")-->
          <!--div(class="card is-shady")-->
            <!--div(class="card-image has-text-centered")-->
              <!--fas-icon(class="fa", icon="stethoscope")-->
            <!--div(class="card-content")-->
              <!--div(class="content")-->
                <!--h4 Patient-centred longitudinal journey-->
                <!--p.-->
                  <!--Patients are placed at the centre of-->
                  <!--the electronic health record and their journey through the health care system is-->
                  <!--documented as they interact with various members of the health care team.-->

      div(class="intro column is-8 is-offset-2")
        h2(class="title") Ready for further development!
        div
          p(class="subtitle").
            Working on addition of data files to assignment content.
        div
          p(class="subtitle").
            Could include a communication component between various members of
            the health care team to share the electronic documentation of patient data across the health care
            faculties.


    section(class="container")
      div(class="columns features")
        div(class="intro column is-8 is-offset-2")
          div(class="card is-shady")
            div(class="card-content")
              div(class="content")
                h4 About the EdEHR
                p.
                  The EdEHR is a <a target="_blank" href="https://bccampus.ca/">BCcampus</a>
                  project funded by the Ministry of Advanced Education, Skills and Training.
                  The project requirements were based on this
                  <a target="_blank" href="http://solr.bccampus.ca:8001/bcc/file/cfc0515c-296f-4711-9811-8be605e661e4/1/EdEHR_Env_Scan_June%204_2018-%20Published.pdf">Environmental Scan Report</a>
                  published June 4, 2018.
                p.
                  Read more in this
                  <a target="_blank" href="https://bccampus.ca/2020/01/07/an-education-in-electronic-health-records/">blog post </a>
                p.
                  A stakeholder group formed by individuals from from BCIT, Douglas College, UBC, and UVic helped to research
                  and develop requirements that were used as a foundation for the project. The goal of that stakeholder group and
                  this project was to build a pilot-ready, minimum viable product to give students access to an EHR system
                  in classrooms before they work in a professional setting.
                ul
                  li <a target="_blank" href="https://bccampus.github.io/edehr/">Documentation</a>
                  li <a target="_blank" href="https://github.com/BCcampus/edehr">GitHub repository</a>
                  li <a target="_blank" href="https://bccampus.ca/2018/01/23/bccampus-launches-the-educational-electronic-health-record-system-project-in-b-c/">BCcampus announcement</a>

      div(class="intro column is-8 is-offset-2")
        h2(class="title") Related resources
        div
          p(class="subtitle").
            More what and why use a Canadian, open source Educational Electronic Health Record system.
        div
          p(class="subtitle").
            Canadian Association of Schools of Nursing (CASN)
            <a target="_blank" href="https://www.casn.ca/2014/12/casn-entry-practice-nursing-informatics-competencies/">
            Entry-to-Practice Nursing Informatics Competencies</a>


</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import UiButton from '../../app/ui/UiButton'
import UiLink from '../../app/ui/UiLink.vue'
import EhrHeaderItem from '../../inside/components/EhrHeaderItem'

export default {
  components: {
    EhrHeaderItem,
    UiButton, UiLink
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || DefaultLayout) + '-layout'
    },
    isStudent () { return StoreHelper.isStudent() },
    isInstructor () { return StoreHelper.isInstructor() }
  }
}
</script>


<style lang="scss" scoped>
  //@import '../../scss/definitions';
  .hero {
  }
  .features {
    background-color: #e6e6e6;
  }

  .hero.is-info.is-bold {
    /*background-image: linear-gradient(141deg, #04a6d7 0%, #209cee 71%, #3287f5 100%);*/
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#0473ea+0,0085d8+32,1c8ace+100 */
    background: #0473ea; /* Old browsers */
    background: -moz-linear-gradient(top,  #0473ea 0%, #0085d8 32%, #1c8ace 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  #0473ea 0%,#0085d8 32%,#1c8ace 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  #0473ea 0%,#0085d8 32%,#1c8ace 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0473ea', endColorstr='#1c8ace',GradientType=0 ); /* IE6-9 */

  }
  .hero.is-info {
    background-color: #1c8ace;
    /*background-color: #209c99;*/
    color: #fff;
  }

  .card-content {
    min-height: 15rem;
  }
  .is-shady {
    animation: flyintoright .4s backwards;
    background: #fff;
    box-shadow: rgba(0, 0, 0, .1) 0 1px 0;
    border-radius: 4px;
    display: inline-block;
    margin: 10px;
    position: relative;
    transition: all .2s ease-in-out;
  }
  .is-shady:hover {
    box-shadow: 0 10px 16px rgba(0, 0, 0, .13), 0 6px 6px rgba(0, 0, 0, .19);
  }

  .hero-body {
    flex-grow: 1;
    flex-shrink: 0;
    padding: 3rem 1.5rem;
  }
  .hero-body .title {
    color: hsl(192,17%,99%) !important;
  }

  .card-image > .fa {
    font-size: 8rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    color: #209cee;
  }
  .card-content .content {
    font-size: 14px;
    margin: 1rem 1rem;
  }
  .card-content .content h4 {
    font-size: 16px;
    font-weight: 700;
  }
  .card {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    margin-bottom: 2rem;
  }
</style>


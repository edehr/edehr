<template lang="pug">
  div(class="outside-view home")

    section(class="hero is-info is-medium is-bold")
      div(class="hero-body")
        div(class="container has-text-centered")
          h1(class="title") EdEHR - a Canadian, open source, Educational Electronic Health Record system.
          h2(class="subtitle") Student focused, simulated case studies, laddered case studies, with decision supports and customizable.
    section(class="container")
      div(class="columns is-centered features")
        div(class="column is-8  has-text-weight-semibold")
          div(v-if="isInstructor")
            div(v-if="devEnv")
              ui-button(class="is-pulled-right",@buttonClicked="logoutUser") Logout
            div You are logged in as an instructor.  &nbsp;
              ui-link(:name="'instructor'") Go to your course and class lists.
          div(v-else-if="isStudent")
            div(v-if="devEnv")
              ui-button(class="is-pulled-right",@buttonClicked="logoutUser") Logout
            div You are logged in as a student. &nbsp;
              ui-link(:name="'ehr'") Go to your assignment.
          div(v-else-if="isDemo")
            div You are already logged into the demonstration. &nbsp;
              ui-link(:name="'demo'") Click here to return to the demonstration page.
          div(v-else)
            p.
              This prototype EdEHR provides educational support for post secondary health programs, such as universities, colleges, etc.
              These institutions can connect the EdEHR to their learning management systems.
              Example learning management systems include Moodle, Canvas, Blackboard, or any other LTI compliant learning system.
              Each institution can then create content for their health care programs. Content can be downloaded and shared
              with other institutions. The EdEHR has a few case studies and more can be added because it is an open source project.
            p(v-if="!activateDemoMode").
              Coming soon!  The EdEHR will have a demonstration version.
            p.
              For more information jump to the <a href="#resources">resources section</a>.
              If you need help or have a question about the EdEHR then send an email to <a href="mailto:info@edehr.org">info@edehr.org</a>
            div(v-if="activateDemoMode")
              div
                span If you wish to see how the EdEHR works you can use our demonstration mode.
                ui-button(class="is-pulled-right",@buttonClicked="demoLoginConfirm") Try out the prototype EdEHR

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
                  The EdEHR introduces students to the concept of data collection and the impact of that data on patient
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
                  health care systems (e.g. metric, Canadian medication and dosaging, Canadian context and focus),
                  and can be adapted to include our Indigenous heritage.


      div(class="columns features")
        div(class="column is-4")
          div(class="card is-shady")
            div(class="card-image has-text-centered")
              fas-icon(class="fa", icon="heartbeat")
            div(class="card-content")
              div(class="content")
                h4 Interprofessional
                p.
                  The EdEHR can be used for any healthcare profession including; nursing, physiotherapy, medicine, pharmacy, midwifery, etc.
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
                  Patient case studies can be utilized for learning and teaching. Users can build their
                  own case studies to suit their course curriculum.
                  These can be based on the eight health case studies that have been developed by a team at
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
                  EdEHR provides tools to assist with judgement and delivery of safe, quality care. Such as
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
                  Post-secondary programs can create their assignments and case studies
                  to accommodate their educational needs and learning objectives.
                p.
                  The data fields and pages in the EdEHR can be adjusted without expensive development effort.
                  See the <a href="https://bccampus.github.io/edehr/developer/inside-generator/">documentation</a>

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
            In so many ways the EdEHR is still a prototype yet it has many capabilities that other educational EHRs lack.
            Yet there are many more features to be developed.  Currently we are working on
          ul
            li(class="subtitle")
              fas-icon(class="fa", icon="hammer")
              span  &nbsp;&nbsp;&nbsp; ability to add data files to each assignment. For example, add an x-ray to fit the simulated case.
            li(class="subtitle")
              fas-icon(class="fa", icon="hammer")
              span  &nbsp;&nbsp;&nbsp;  a demonstration mode.
        div
          br
          p(class="subtitle").
            Could include a communication component between various members of
            the health care team to share the electronic documentation of patient data across the health care
            faculties.


    section(class="container")
      div(class="columns features")
        div(class="intro column is-9 is-offset-2")
          div(class="card is-shady")
            div(class="card-content")
              resources
      div(id="resources", class="intro column is-8 is-offset-2")
        h2(class="title") Related resources
        div
          p(class="subtitle").
            Canadian Association of Schools of Nursing (CASN)
            <a target="_blank" href="https://www.casn.ca/2014/12/casn-entry-practice-nursing-informatics-competencies/">
            Entry-to-Practice Nursing Informatics Competencies</a>
    div(class="is-pulled-right")
      input(type="checkbox", v-model="activateDemoMode")

    ui-confirm(class="confirmDialog",ref="confirmDemoDialog", @confirm="proceedDemoToolConsumerCreation", htmlBody, saveLabel="Continue")

</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import UiButton from '../../app/ui/UiButton'
import UiLink from '../../app/ui/UiLink.vue'
import EhrHeaderItem from '../../inside/components/EhrAssignmentDetailsContent'
import UiConfirm from '../../app/ui/UiConfirm'
import Resources from '../components/Resources.vue'

const DEMO = {
  TITLE: 'Try out the EdEHR',
  MSG: 'The EdEHR is still a prototype web application.\n ' +
  'You may encounter some strangeness that may be because something is not finished. See all the work in progress on the GitHub site. (See the resources section on the Help or Home page)\n ' +
    'As well consider that any data that you enter into the demonstration assignments as temporary. It maybe that the system needs to be restarted and the data may be lost.\n'
}

const debugH = true

export default {
  components: {
    EhrHeaderItem,
    Resources,
    UiButton, UiConfirm, UiLink
  },
  data () {
    return {
      activateDemoMode: false,
      selectedUser: {},
      devEnv: process.env.NODE_ENV !== 'production'
    }
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || DefaultLayout) + '-layout'
    },
    isDemo () { return StoreHelper.isDemoMode()  },
    isStudent () { return StoreHelper.isStudent() },
    isInstructor () { return StoreHelper.isInstructor() }
  },
  methods: {
    demoLoginConfirm () {
      this.$refs.confirmDemoDialog.showDialog(DEMO.TITLE, DEMO.MSG)
    },
    logoutUser () {
      StoreHelper.clearAuthToken()
      // refresh this page
      this.$router.go(0)
    },
    proceedDemoToolConsumerCreation () {
      StoreHelper.setLoading(null, true)
      if(debugH) console.log('Home proceedDemoToolConsumerCreation')
      return StoreHelper.createDemoToolConsumer()
        .then((demoToken) => {
          if (debugH) console.log(`Home consumer created. If have token? ${!!demoToken} go to demo`)
          if (!demoToken) {
            throw Error('Setup of demonstration space failed')
          }
          return StoreHelper.loadDemoData()
        })
        .then ( () => {
          StoreHelper.setLoading(null, false)
          this.$router.push('demo')
        }).catch(err => {
          if(debugH) console.log('createDemoToolConsumer Error', err)
          StoreHelper.setApiError(err)
          StoreHelper.setLoading(null, false)
        })
    }
  },
  mounted: function () {
    let dMode = sessionStorage.getItem('demoMode')
    if(dMode)
      this.activateDemoMode = dMode
  },
  watch: {
    activateDemoMode: function (val) {
      sessionStorage.setItem('demoMode', val)
    }
  }
}
</script>


<style lang="scss" scoped>
  @import '../../scss/definitions';

  .card {
    /* Trial and error to get a ht that makes all cards the same size */
    min-height: 32rem;
  }
  .card-image > .fa {
    font-size: 10rem;
    padding-top: 2.8rem;
    padding-bottom: 0.5rem;
    color: #209cee;
  }
  .card-content .content {
    font-size: 1.2rem;
  }
  .card-content .content h4 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  .confirmDialog {
    color: $grey80;
  }

  .features {
    background-color: #BCBCBC;
    padding: 1.5rem;
  }

  .hero.is-info.is-bold {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#0473ea+0,0085d8+32,1c8ace+100 */
    background: #0473ea; /* Old browsers */
    background: -moz-linear-gradient(top,  #0473ea 0%, #0085d8 32%, #1c8ace 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  #0473ea 0%,#0085d8 32%,#1c8ace 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  #0473ea 0%,#0085d8 32%,#1c8ace 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0473ea', endColorstr='#1c8ace',GradientType=0 ); /* IE6-9 */

  }
  .hero.is-info {
    background-color: #1c8ace;
    color: #fff;
  }

  .hero-body {
    flex-grow: 1;
    flex-shrink: 0;
    padding: 3rem 1.5rem;
  }
  .hero-body .title {
    color: hsl(192,17%,99%) !important;
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


<template lang="pug">
  div(class="outside-view home")
    h1 Welcome to the Educational Electronic Health Record System (EdEHR)
    p.
      The Educational Electronic Health Record application is a
      <a target="_blank" href="https://bccampus.ca/">BCcampus</a>&nbsp;
      <a href="https://bccampus.github.io/edehr/developer/contributors.html">open-source</a>
      project funded by the Ministry of Advanced Education, Skills and Training.
      The EdEHR simulates the interaction a nurse, doctor, pharmacist or other medical practitioner would have using a professional EHR.
    p.
      A stakeholder group formed by individuals from from BCIT, Douglas College, UBC, and UVic helped to research
      and develop requirements that were used as a foundation for the project. The goal of that stakeholder group and
      this project was to build a pilot-ready, minimum viable product to give students access to an EHR system
      in classrooms before they work in a professional setting.
    ul
      li <a href="https://bccampus.github.io/edehr/">Documentation</a>
      li <a href="https://github.com/BCcampus/edehr">GitHub repository</a>
      li <a href="https://bccampus.ca/2018/01/23/bccampus-launches-the-educational-electronic-health-record-system-project-in-b-c/">BCcampus announcement</a>
    p.

    p.
      To use this system you need to use a Learning Management System such as Moodle, Canvas, Blackboard, or any
      other LTI compliant learning system. For more information see the documentation.
    
    p.
      The system currently has a demo mode, which consists of a way for potential users to test the system as both an instructor and a student.
    p.
      You can test the system below

    br
    br
    div(style="max-width: 10em; padding: 1em; border: 1px solid")
      div(v-for="obj in demoData" :key="obj.name")
        input(
          type="checkbox",
          :id="obj.name",
          :checked="selectedUser.name === obj.name",
          :value="obj",
          @change="selectedUser = obj"
        )
        label(:for="obj.name") {{obj.name}}

    
    div(style="margin-top: 2em;")
      ui-button(:disabled="!selectedUser") Enter Demo
</template>

<script>
import UiButton from '../../app/ui/UiButton'
export default {
  name: 'home',
  data () {
    return {
      demoData: [
        {
          name: 'Student A',
          role: 'student'
        },
        {
          name: 'Student B',
          role: 'student'
        },
        {
          name: 'Student C',
          role: 'student'
        },
        {
          name: 'Instructor A',
          role: 'instructor'
        }

      ],
      selectedUser: ''
    }
  },
  components: { UiButton },
  computed: {},
  watch: {
    selectedUser (n, p){
      console.log('selectedUserWatcher >> ', n, p)
    }
  }
}
</script>


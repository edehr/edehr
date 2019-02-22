<template lang="pug">
  div(id="activityList", class="activity-list")
    div(class="activity-list-header columns", v-on:click="activateActivity")
      div(class="header-column is-10 column")
        h3(class="header-item", :title="activity._id") {{ activity.resource_link_title }}
        div(class="header-item") {{ activity.resource_link_description }}
        div(class="header-item") {{ assignment.name }}  (LMS configuration: assignment={{ assignment.externalId }} )
      div(class="header-column is-2 column")
        div(class="header-item header-icon") {{ indicator }}
    div(class="activity-list-body")
      accordion-element(theme="grayTheme", :show="show")
        div(class="classlist-header")
          div(class="classlist-header-item") Student analytics placeholder
            fas-icon(class="icon-right", icon="download")
          div(class="classlist-header-item") Evaluation notes placeholder
            fas-icon(class="icon-right", icon="download")
        div(class="classlist-body")
          table.table
            thead
              tr
                th Student name
                th Student ID
                th Date submitted
                th Evaluation notes
                th Status
            tbody
              tr(v-for="sv in classList")
                td
                  div(:id="`ref-${sv._id}`",  :ref="`ref-${sv._id}`") {{ sv.user.fullName }}
                td {{ sv.user.user_id }}
                td some date
                td
                  ui-button(v-on:buttonClicked="goToEhr(sv)") Evaluate in EHR {{sv.assignment.ehrRouteName}}
                td Status
</template>

<script>
import AccordionElement from '../../app/components/AccordionElement'
import UiButton from '../../app/ui/UiButton.vue'

export default {
  name: 'ActivityList',
  components: {
    AccordionElement,
    UiButton
  },
  data() {
    return {
      show: false,
      indicator: '+'
    }
  },
  props: {
    activity: { type: Object }
  },
  computed: {
    assignment() {
      // console.log('What is in activity', this.activity)
      let a = this.activity.assignment || {}
      return a
    },
    visitInfo() {
      return this.$store.state.visit.sVisitInfo
    },
    classList() {
      return this.$store.state.instructor.sClassList || []
    }
  },
  methods: {
    setShow: function(value) {
      this.show = value
      this.indicator = value ? '-' : '+'
    },
    activateActivity() {
      if (this.show) {
        this.setShow(false)
        return
      }
      let activityId = this.activity._id
      localStorage.setItem('activityId', activityId)
      this.loadActivity(activityId)
    },
    loadActivity(activityId) {
      const _this = this
      return this.$store
        .dispatch('instructor/loadActivity', activityId)
        .then(() => {
          return this.$store.dispatch('instructor/loadClassList', activityId)
        })
        .then(() => {
          _this.$nextTick(function() {
            _this.setShow(true)
          })
        })
    },
    goToEhr(studentVisit) {
      let studentId = studentVisit._id
      // Go to the first screen related to the assignent
      let name = '/ehr/patient/demographics' // studentVisit.assignment.ehrRoutePath
      // console.log('Store the pathname for the instructor to return here ', window.location.pathname)
      this.$store.commit('visit/setIsDevelopingContent', false)
      this.$store.commit('instructor/setInstructorReturnUrl', window.location.pathname)
      // console.log('Store the current student id that is being evaluated ', studentId)
      this.$store.dispatch('instructor/changeCurrentEvaluationStudentId', studentId).then(() => {
        // console.log('go to ehr with ', name)
        this.$router.push(name)
      })
    }
  },
  mounted: function() {
    /*
    let myId = this.activity._id
    let storeId = localStorage.getItem('activityId')
    if (storeId === myId) {
      // TODO  see notes in AsInstructor view regaring scrolling
      this.loadActivity(storeId).then(() => {
        let list = this.classList
        if (list && list.length > 0) {
          let lastStudent = list[list.length - 1]
          let id = `ref-${lastStudent._id}`
          const _this = this
          this.$nextTick(function() {
            // console.log('Look for element with id', id)
            let elem = document.getElementById(id)
            // console.log('scroll to ', elem)
            _this.$scrollTo(elem)
          })
        }
      })
    }
    */
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.activity-list {
  padding: 0;
}
.activity-list-header {
  background-color: $grey03;
  margin-bottom: 0;

  .header-column {
    padding: 1rem 1.5rem;
  }
  .header-item {
    display: block;
  }
  .header-icon {
    font-size: 2rem;
    font-weight: bold;
    text-align: right;
  }
}

.activity-list-body {
  background-color: $grey10;
  overflow: hidden;
  margin-bottom: 0;

  .classlist-header {
    padding: 0.5rem 1.5rem;
    background-color: $grey10;
    border: 1px solid $grey20;
    box-sizing: border-box;
  }
  .classlist-header-item {
    display: inline-block;
    margin-right: 2rem;
  }
  .classlist-body {
    padding: 1rem 1.5rem;
    background-color: $white;
    border: 1px solid $grey20;
    box-sizing: border-box;
    overflow: hidden;
  }
  .table {
    overflow: hidden;
    width: 100%;
  }
}
</style>

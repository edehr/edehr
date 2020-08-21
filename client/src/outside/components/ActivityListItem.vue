<template lang="pug">
  div(:id="activityId")
    div(class="activity-list-header columns")
      div(class="header-column is-10 column")    
        h3(:title="activityId") {{ activity.resource_link_title }}
             <!-- router-link(:to="`/ehr/patient/demographics?viewSeed=true`") {{ activity.resource_link_title }} -->
        table
          tr
            td LMS description:
            td
              div(v-text-to-html="activity.resource_link_description")
          tr
            td Assignment name:
            td
              ui-link(:name="'assignments'", :params="{assignmentId: assignment._id}")
                span {{ assignment.name }}
          tr
            td Assignment description:
            td
              div(v-text-to-html="assignment.description")
          tr
            td Class list:
            td
              ui-link(:name="'classList'", :query="{activityId: activityId}")
                span go to list
          tr
            td Status:
            td {{activity.closed ? "Closed" : "Open" }}
          tr
            td Created date:
            td {{ activity.createDate | formatDateTime }}
          tr
            td Last Update date:
            td {{ activity.lastDate | formatDateTime }}
          tr
            td Number of students participating:
            td
              span {{classList.length}}
          tr
            td Number of students with submitted work:
            td {{classSubmittedList.length}}
</template>

<script>
import EventBus from '@/helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'
import ClassList from './ClassList'
import AccordionElement from '../../app/components/AccordionElement'
import StoreHelper from '../../helpers/store-helper'
import UiLink from '../../app/ui/UiLink.vue'

const debug = false

export default {
  components: {
    AccordionElement,
    ClassList,
    UiLink
  },
  props: {
    activityId: { type: String },
    index: { type: Number}
  },
  data () {
    return {
      activity: {},
      assignment: {},
      classList: []
    }
  },
  computed: {
    activityName () {
      return StoreHelper.getActivityTitle()
    },
    classSubmittedList () {
      let list = this.classList
      list = list.filter(sv => {
        return sv.activityData.submitted
      })
      return list
    },
  },
  methods: {
    loadActivity () {
      const _this = this
      const activityId = this.activityId
      if(debug) console.log('ActivityListItem loadActivity', activityId)
      StoreHelper.getClassListForActivity(activityId)
        .then((classList) => {
          _this.classList = classList
        })
      return StoreHelper.dispatchLoadActivity(activityId)
        .then((theActivity) => {
          _this.activity = theActivity
          if(debug) console.log('ActivityListItem got activity', theActivity)
          if(debug) console.log('ActivityListItem loadActivity assignment', theActivity.assignment)
          return StoreHelper.getAssignment(theActivity.assignment)
        })
        .then((theAssignment) => {
          _this.assignment = theAssignment
          if(debug) console.log('ActivityListItem got assignment', theAssignment)
          let act_id = StoreHelper.getActivityId()
          if(debug) console.log('ActivityListItem scroll to current activity id', act_id)
          let selected = activityId === act_id
          if (selected) {
            if(debug) console.log('ActivityListItem SELECTED this activity is active. scroll to top', activityId)
            this.$nextTick(() => {
              let element = document.getElementById(activityId)
              let top = element.offsetTop
              window.scrollTo(0, top)
            })
          }
        })
    },
  },
  created: function () {
    /*
      Must wait for App to load auth before loading this component
     */
    const _this = this
    this.refreshEventHandler = function () { _this.loadActivity() }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  },

}
</script>

<style lang="scss" scoped>
  @import '../../scss/definitions';
  .activity-list {
    padding: 0;
  }
  .activity-list-header {
    background-color: $grey03;
    border: 1px solid rgba(255, 255, 255, 0);
    margin-bottom: 0;

    .header-column {
      padding: 1rem 1.5rem;
      position: relative;

      p {
        margin-bottom: .5rem;
      }

      .icon-group {
        right: 20px;
      }
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

    .activity-details-header {
      padding: 0.5rem 1.5rem;
      background-color: $grey10;
      border: 1px solid $grey20;
      box-sizing: border-box;
    }
    .activity-details-header-item {
      display: inline-block;
      margin-right: 2rem;
    }
  }
  .activity-list:hover .activity-list-header {
    background-color: $brand-primary-light;
    box-sizing: border-box;
    border: 1px solid $brand-primary;
  }
</style>

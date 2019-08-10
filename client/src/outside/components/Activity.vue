<template lang="pug">
  div
    div(class="activity-list-header columns", v-on:click="toggleShow")
      div(class="header-column is-10 column")
        h3(:title="activityId") {{ activity.resource_link_title }}
        p LMS description: {{ activity.resource_link_description }}
        p Assignment name: {{ assignment.name }}
        p Assignment description: {{ assignment.description }}
        p LMS configuration: assignment={{ assignment.externalId }}
      div(class="header-column is-2 column")
        div(class="header-item header-icon")
          div(class="icon-group")
            fas-icon(icon="plus", v-show="!show")
            fas-icon(icon="minus", v-show="show")

    div(class="activity-list-body")
      accordion-element(theme="grayTheme", :show="show")
        div(class="activity-details-header")
          div(class="activity-details-header-item") Evaluation notes
            fas-icon(class="icon-right", icon="download")
        class-list(:classList="classList")
</template>

<script>
import ClassList from './ClassList'
import AccordionElement from '../../app/components/AccordionElement'
import StoreHelper from '../../helpers/store-helper'

export default {
  name: 'Activity',
  components: {
    AccordionElement,
    ClassList
  },
  props: {
    activityId: { type: String },
    index: { type: Number}
  },
  data () {
    return {
      show: false,
      indicator: '+',
      classList: [],
      activity: {},
      assignment: {}
    }
  },
  methods: {
    setShow: function (value) {
      this.show = value
      this.indicator = value ? '-' : '+'
    },
    toggleShow () {
      if(this.show === false) {
        this.loadClassList()
      } else {
        this.setShow(false)
      }
    },
    loadActivity () {
      const _this = this
      const activityId = this.activityId
      return StoreHelper.dispatchLoadActivity(this, activityId)
        .then((theActivity) => {
          _this.activity = theActivity
          return StoreHelper.loadAssignment(this, theActivity.assignment)
        })
        .then((theAssignment) => {
          _this.assignment = theAssignment
        })
    },
    loadClassList () {
      const _this = this
      return StoreHelper.dispatchLoadClassList(this, this.activityId)
        .then((classList) => {
          _this.classList = classList
          _this.$nextTick(() => _this.setShow(true))
        })
    }
  },
  mounted: function () {
    this.loadActivity()
    if (this.index === 0) {
      this.loadClassList()
    }
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
    border: 1px solid rgba(255, 255, 255, 0);
    margin-bottom: 0;
    cursor: pointer;

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

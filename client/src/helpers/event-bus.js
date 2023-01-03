import Vue from 'vue'
/*
TODO document all of the following events ....
 */
export const PAGE_DATA_REFRESH_EVENT = 'PAGE_DATA_REFRESH_EVENT'
export const FORM_INPUT_EVENT = 'FORM_INPUT_EVENT'
export const TABLE_ACTION_EVENT = 'TABLE_ACTION_EVENT'
export const VIEW_REPORT_EVENT = 'VIEW_REPORT_EVENT'
export const EDIT_DRAFT_ROW_EVENT = 'EDIT_DRAFT_ROW_EVENT'
export const PRACTITIONER = 'PRACTITIONER'

const showKeyEvents = false
const showEmits = false

export class EventBus extends Vue {
  // Override Vue's $emit to record all events in console.
  $emit (event, ...args) {
    if(showEmits) console.log('Emitting:', event, ...args)
    return super.$emit(event, ...args)
  }
}

export default new EventBus()

// const EventBus = new Vue()
// export default EventBus


if(showKeyEvents) {
  EventBus.$on(PAGE_DATA_REFRESH_EVENT, function () {
    console.log('PAGE_DATA_REFRESH_EVENT')
  })
  EventBus.$on(FORM_INPUT_EVENT, function () {
    console.log('FORM_INPUT_EVENT')
  })
  EventBus.$on(TABLE_ACTION_EVENT, function (tableDef, index) {
    console.log('TABLE_ACTION_EVENT', tableDef, index)
  })
  EventBus.$on(VIEW_REPORT_EVENT, function (pageKey, tableKey, index) {
    console.log('VIEW_REPORT_EVENT', pageKey, tableKey, index)
  })
}

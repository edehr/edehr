import Vue from 'vue'

export const PAGE_DATA_REFRESH_EVENT = 'PAGE_DATA_REFRESH_EVENT'
export const FORM_INPUT_EVENT = 'FORM_INPUT_EVENT'
export const TABLE_ACTION_EVENT = 'TABLE_ACTION_EVENT'
export const PRACTITIONER = 'PRACTITIONER'

const showEmits = true

export class EventBus extends Vue {
  // Override Vue's $emit to record all events in console.
  $emit (event, ...args) {
    if(showEmits) console.log('Emitting:', event, ...args)
    return super.$emit(event, ...args)
  }
}

export default new EventBus()


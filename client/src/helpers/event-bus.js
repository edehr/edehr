import Vue from 'vue'
/*
TODO document all of the following events ....
 */
export const ACTIVITY_DATA_EVENT = 'ACTIVITY_DATA_EVENT'
export const PAGE_DATA_REFRESH_EVENT = 'PAGE_DATA_REFRESH_EVENT'
export const TABLE_DATA_REFRESH_EVENT = 'TABLE_DATA_REFRESH_EVENT'
export const SHOW_TABLE_DIALOG_EVENT = 'SHOW_TABLE_DIALOG_EVENT'
export const MAR_PERIODS_EVENT = 'MAR_PERIODS_EVENT'

// old and to be removed
export const DIALOG_INPUT_EVENT = 'DIALOG_INPUT_EVENT'
export const PAGE_FORM_INPUT_EVENT = 'PAGE_FORM_INPUT_EVENT'

// new
export const FORM_INPUT_EVENT = 'FORM_INPUT_EVENT'
export const PAGE_DATA_READY_EVENT = 'PAGE_DATA_READY_EVENT'

const EventBus = new Vue()
export default EventBus

import EhrDefs from '../../../helpers/ehr-defs-grid'
import { MED_ORDERS_PAGE_KEY } from './mar-helper'
import PeriodEntity from './period-entity'

/**
 Compose the schedule periods (e.g. breakfast, lunch, etc) based on the data definitions.
 Reach into the medication orders data. Get the first table. Get the cells of this table.
 Collect those cells in the schedule fieldset.  WARNING this code is fragile if anyone changes
 the key of this fieldset.
 For each cell in the schedule fieldset get the data key and display label.
 When done we have a list of schedule periods ready to use for any given day of MAR records.
 */

export default class PeriodDefs {
  constructor (periods) {
    this._periodList = []
    const medPeriods = this.createPeriodObject(periods)
    console.log('medPeriods >> ', medPeriods)
    // let medPeriods = EhrDefs.getMedOrderSchedule(MED_ORDERS_PAGE_KEY)
    this._periodList = medPeriods ? 
      medPeriods.map( (mp) => new PeriodEntity(mp.key, mp.value))
      : []
  }

  get periodList () { return this._periodList}

  get keyNameList () { return this._periodList.map( e => { return {key: e.key, name: e.name }})}

  findPeriod (key) {
    return this._periodList.find(pk => pk.key === key)
  }

  formatPeriod (period) {
    return `${period.slice(0,2)}:${period.slice(2)}`
  }

  createPeriodObject (periods) {
    return periods.map(p => {
      return {
        key: p,
        value: this.formatPeriod(p)
      }
    })
  }

  validScheduledTime (value) {
    let result =  this.findPeriod(value)
    return !!result
  }

}
import { setApiError } from '../../../helpers/ehr-utills'
import { getPageDefinition } from '../../../helpers/ehr-defs'
import { SCHEDULE_FIELDSET, MED_ORDERS_PAGE_KEY } from './mar-util'
import PeriodEntity from './period-entity'
import MarEntity from './mar-entity'

/**
 Compose the schedule periods (e.g. breakfast, lunch, etc) based on the data definitions.
 Reach into the medication orders data. Get the first table. Get the cells of this table.
 Collect those cells in the schedule fieldset.  WARNING this code is fragile if anyone changes
 the key of this fieldset.
 For each cell in the schedule fieldset get the data key and display label.
 When done we have a list of schedule periods ready to use for any given day of MAR records.
 */

export default class PeriodDefs {
  constructor () {
    let medOrdersPageDefs = getPageDefinition(MED_ORDERS_PAGE_KEY)
    let periodDefs = {}
    let periodKeys = []
    if (medOrdersPageDefs && medOrdersPageDefs.tables && medOrdersPageDefs.tables.length > 0) {
      let cells = medOrdersPageDefs.tables[0].tableCells
      let medPeriods = cells.filter(cell => cell.fieldset === SCHEDULE_FIELDSET && cell.inputType === 'checkbox')
      medPeriods.forEach(mp => {
        let k = mp.elementKey
        periodKeys.push(k)
        periodDefs[k] = new PeriodEntity(k, mp.label)
        // { key: k, name: mp.label, marRecord: {}, hasMar: false }
      })
    } else {
      setApiError(MED_ORDERS_PAGE_KEY + ' can not find table')
    }
    this._currentDay = 0
    this._periodDefs = periodDefs
    this._periodKeys = periodKeys
  }

  get currentDay () { return this._currentDay}
  get periodList () { return this._periodDefs}
  get periodKeys () { return this._periodKeys }

  periodIndex(key) { return this._periodKeys.indexOf(key)}

  clearMedications () {
    this._periodKeys.forEach(pk => {
      this._periodDefs[pk].clearMedications()
    })
  }


  validScheduledTime (value) {
    let result =  this._periodKeys.includes(value)
    // console.log('PeriodDefs validScheduledTime', value, result, this._periodKeys)
    return result
  }

  /**
   * Reset the list of meds to administer "today" into the periods based
   * on the live data contents from the medications orders page
   *
   Get the current list of medication orders. For each see if they are scheduled for any of the schedule periods,
   matching on the data key.  If matched then add the medication into the list of meds to be administered
   in the given schedule period.
   *
   * @param  {MedOrder[] } medOrders
   */
  mergeOrdersSchedules (medOrders) {
    this.clearMedications()
    console.log('merging ', medOrders)
    let periodDefs = this._periodDefs
    let periodKeys = this._periodKeys
    medOrders.forEach(medOrder => {
      periodKeys.forEach(pk => {
        let period = periodDefs[pk]
        //  console.log( pk, period, medOrder[pk])
        if (medOrder.isScheduled(pk)) {
          period.addMedication(medOrder)
        }
      })
    })
  }

  /**
   *
   * @param marRecords MarEntity[]
   */
  mergeMarAndSchedule (marRecords) {
    // TODO can mergeMarAndSchedule be simplified?
    // console.log('mergeMarAndSchedule', marRecords)
    let periodDefs = this._periodDefs
    let theDay = undefined
    let dayPeriods = []
    // sort oldest first
    marRecords.sort( (a,b) => MarEntity.compare(a, b, false) )

    // 1. find the "current day".  This is the day that has a period without a mar
    // If a day has MARs for all periods then select the next day.
    // 2 for the current day set up the period defs with the MAR records for the day and
    // indicate which periods need a MAR
    let maxDay = Number.MIN_VALUE
    marRecords.forEach(record => {
      let recDay = record.day
      maxDay = Math.max(recDay, maxDay)
      let periodKey = this.periodIndex(record.scheduledTime)
      // console.log('mergeMarAndSchedule record', record, recDay, periodKey)
      if (!dayPeriods[recDay]) {
        dayPeriods[recDay] = Array(this._periodKeys.length).fill(false)
      }
      dayPeriods[recDay][periodKey] = true
    })
    // console.log('mergeMarAndSchedule dayPeriods', dayPeriods)
    let foundDay = -1
    for(let i = 0; foundDay < 0 && i <= maxDay; i++) {
      let flags = dayPeriods[i]
      for(let k = 0; foundDay < 0  &&  k < flags.length; k++ ) {
        if(flags[k] === false) {
          foundDay = i
        }
      }
    }
    this._currentDay = foundDay
    // console.log('mergeMarAndSchedule found that this day needs a mar record: ', foundDay)
    let todaysMars = []
    marRecords.forEach(record => {
      if(record.day === foundDay) {
        todaysMars.push(record)
      }
    })

    todaysMars.forEach(record => {
      let periodKey = record.scheduledTime
      // console.log('mergeMarAndSchedule record', record.day, record.scheduledTime)
      Object.keys(periodDefs).forEach(pk => {
        let period = periodDefs[pk]
        let key = period.key
        if (key === periodKey) {
          period.marRecord = record
          period.hasMar = true
        }
      })
    })
  }

}
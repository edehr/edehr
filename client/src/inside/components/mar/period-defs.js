import { setApiError } from '../../../helpers/ehr-utills'
import { getPageDefinition } from '../../../helpers/ehr-defs'
import { SCHEDULE_FIELDSET, MED_ORDERS_PAGE_KEY } from './mar-helper'
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
  constructor () {
    let medOrdersPageDefs = getPageDefinition(MED_ORDERS_PAGE_KEY)
    let periodList = []
    if (medOrdersPageDefs && medOrdersPageDefs.tables && medOrdersPageDefs.tables.length > 0) {
      let cells = medOrdersPageDefs.tables[0].tableCells
      // console.log('PeriodDefs constructor cells', cells)
      let medPeriods = cells.filter(cell => cell.level3Key === SCHEDULE_FIELDSET && cell.inputType === 'checkbox')
      // console.log('PeriodDefs constructor medPeriods', medPeriods)
      medPeriods.forEach(mp => {
        let k = mp.elementKey
        periodList.push(new PeriodEntity(k, mp.label))
        // { key: k, name: mp.label, marRecord: {}, hasMar: false }
      })
    } else {
      // TODO the setApiError needs a component context to get the store. The following is broken
      setApiError(MED_ORDERS_PAGE_KEY + ' can not find table')
    }
    this._periodList = periodList
  }

  get periodList () { return this._periodList}

  get keyNameList () { return this._periodList.map( e => { return {key: e.key, name: e.name }})}

  findPeriod (key) {
    return this._periodList.find(pk => pk.key === key)
  }

  validScheduledTime (value) {
    let result =  this.findPeriod(value)
    return !!result
  }

}
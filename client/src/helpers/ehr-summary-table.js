
import { getTableCellsByTableKey } from './ehr-defs'
import PeriodDefs from '../inside/components/mar/period-defs'

export const ESK_Medications = 'Discharge medication orders'
export const ESK_Referrals = 'Discharge referrals'
export const ESK_LabReqs = 'Discharge lab requisitions'
export const ESK_Procedures = 'Procedures and treatment'
export const ESK_DischargeProcedures = 'Discharge procedures and treatment'
export const ESK_MARS = 'Medications administered while in care'
/*
Procedures and treatment: These are pulled in from the orders page.
Only orders that have the status complete should appear here.
    Order {fqn: nonmedOrders.table.order}
    Details {fqn: nonmedOrders.table.details}

Medications administered while in care: These are pulled in from the MAR page.
    Medication {fqn: medAdminRec.table.medication}
    Route - This is not currently in the input spreadsheet. Should it be?
    Frequency - There is no FQN for this. Not sure how you want to handle this.

Discharge Rx: Pulled in from the medication orders, orders, and lab requisitions pages.
Only orders that DON'T have the status complete or cancelled should appear here
    Medication {fqn: medicationOrders.table.medication}
    Route {fqn: medicationOrders.table.details.route}
    Frequency - There is no FQN for this. Not sure how you want to handle this.
    Order {fqn: nonmedOrders.table.order}
    Details {fqn: nonmedOrders.table.details}
    End day {fqn: nonmedOrders.table.endDay}
    Requisition {fqn: labRequisitions.table.requisition}

Referrals: Pulled in from the referrals to other disciplines page.
    Referral name {fqn: referrals.table.referralName}
    Referral profession {fqn: referrals.table.referralProfession}
    Referral date {fqn: referrals.table.appointmentDate}
    Referral time {fqn: referrals.table.appointmentTime}
 */

const pDefs = new PeriodDefs()
const medSchedules = pDefs.keyNameList
// console.log('EhrSummaryHelp medSchedules', medSchedules)

export default class EhrSummaryHelp {
  constructor (summaryKey, ehrHelp) {
    let defs = {}

    let completeFilter = function (element) {
      let status = element.status
      status = status ? status.toLocaleLowerCase() : status
      return status === 'complete'
    }
    let notCompleteFilter = function (element) {
      let status = element.status
      status = status ? status.toLocaleLowerCase() : status
      return status !== 'complete' && status !== 'cancelled'
    }

    let allFilter = function (element) { return true }

    defs[ESK_Referrals] = {
      pageKey: 'referrals',
      tableKey: 'table',
      columnKeys: ['referralName', 'referralProfession', 'appointmentDate', 'appointmentTime'],
      customGetters: {},
      filter: allFilter
    }

    defs[ESK_Medications] = {
      pageKey: 'medicationOrders',
      tableKey: 'table',
      columnKeys: ['medication', 'route', 'schedule'],
      customGetters: {
        schedule: function (key, data) {
          let value = ''
          let needsComma = false
          // console.log('EhrSummaryHelp schedule', medSchedules, data)
          medSchedules.forEach( medSched => {
            let sk = medSched.key
            if (!!data[sk]) {
              if(needsComma) {
                value += ', '
              }
              value += medSched.name
              needsComma = true
            }
          })
          return value
        }
      },
      filter: function (element) { return true }
    }

    defs[ESK_LabReqs] = {
      pageKey: 'labRequisitions',
      tableKey: 'table',
      columnKeys: ['requisition'],
      customGetters: {},
      filter: notCompleteFilter
    }
    const NonMedCols = ['order', 'orderedBy', 'details', 'startDay', 'startTime', 'endDay', 'endTime', 'comment', 'status']
    defs[ESK_Procedures] = {
      pageKey: 'nonmedOrders',
      tableKey: 'table',
      columnKeys: NonMedCols,
      customGetters: {},
      filter: completeFilter
    }

    defs[ESK_DischargeProcedures] = {
      pageKey: 'nonmedOrders',
      tableKey: 'table',
      columnKeys: NonMedCols,
      customGetters: {},
      filter: notCompleteFilter
    }

    defs[ESK_MARS] = {
      pageKey: 'medAdminRec',
      tableKey: 'table',
      columnKeys: ['medication', 'day', 'route', 'actualTime'],
      customGetters: {
        medication: function (key, data) {
          const reducer = (accum, med) => accum + med.medication
          let value = data.medications.reduce(reducer, '')
          // console.log('EhrSummaryHelp medication', value)
          return value
        }
      },
      filter: allFilter
    }

    let summary = {}
    let def = defs[summaryKey]
    // console.log('EhrSummaryHelp summaryKey', summaryKey, def)
    summary.pageKey = def.pageKey
    summary.tableKey = def.tableKey
    let tCells = getTableCellsByTableKey(def.pageKey, def.tableKey)
    let tableColumns = []
    def.columnKeys.forEach( key => {
      let cell = tCells.find( c => c.elementKey === key)
      if (cell) {
        cell = {label: cell.label, inputType: cell.inputType, elementKey: cell.elementKey}
        tableColumns.push(cell)
      }
    })
    summary.tableColumns = tableColumns

    let pageData = ehrHelp.getAsLoadedPageData(def.pageKey)
    let tableData = pageData[def.tableKey] || []
    tableData = tableData.filter( data => { return def.filter(data)} )
    tableData = tableData.map( data => {
      let result = {}
      def.columnKeys.forEach( key => {
        result[key] = def.customGetters[key] ? def.customGetters[key](key, data) : data[key]
        // console.log('EhrSummaryHelp tableData: key data result', key, data, result)
      })
      // console.log('EhrSummaryHelp tableData:', data, result)
      return result
    })
    summary.tableData = tableData
    summary.pageData = pageData
    // console.log('EhrSummaryHelp load pageKey:', summary)
    this.summary = summary
  }

  getSummary () {
    return this.summary
  }
}
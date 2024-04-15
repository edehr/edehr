
import EhrDefs, { MED_ORDERS_PAGE_KEY } from '../../../ehr-definitions/ehr-defs-grid'
import StoreHelper from  '../../../helpers/store-helper'
import { t18EhrText, t18ElementLabel, t18TableLabel } from '@/helpers/ehr-t18'

export const ESK_Medications = 'Discharge Rx'
export const ESK_Referrals = 'Referrals'
export const ESK_LabReqs = 'Discharge requisitions'
export const ESK_Procedures = 'Procedures and treatment'
export const ESK_DischargeProcedures = 'Discharge orders'
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

const medSchedules = [] // TODO get MARs
console.log('EhrSummaryHelp TODO get medSchedules', medSchedules)

const debug = true

export default class EhrSummaryHelpV2 {
  constructor (summaryKey, ehrHelp) {
    let def = this._getDefs()[summaryKey]
    let pageKey = def.pageKey
    let tableKey = def.tableKey
    let summary = {pageKey: pageKey, tableKey: tableKey }
    let tableDef = EhrDefs.getPageTable(pageKey, tableKey)
    if(debug) console.log('EhrSummaryHelpV2 summary, tableDef: ', summary, tableDef)
    let rowTemplate = []
    tableDef.tableChildren.forEach(key => {
      let cellDef = EhrDefs.getPageChildElement(pageKey, key)
      let templateCell = {
        key: key,
        label: t18ElementLabel(cellDef),
        cellDef: cellDef,
        inputType: cellDef.inputType
      }
      templateCell.tableLabel = t18TableLabel(cellDef) || t18ElementLabel(cellDef)
      templateCell.tableSuffix = cellDef.suffixText
      templateCell.tableCss =  cellDef.tableCss
      rowTemplate.push(templateCell)
    })
    if(debug) console.log('EhrSummaryHelpV2 rowTemplate: ', rowTemplate)
    let tableColumns = []
    def.columnKeys.forEach( key => {
      let cell = rowTemplate.find( c => c.key === key)
      if (cell) {
        cell = {
          label: cell.label,
          inputType: cell.inputType,
          elementKey: cell.key}
        tableColumns.push(cell)
      }
    })
    summary.tableColumns = tableColumns
    if(debug) console.log('EhrSummaryHelpV2 tableColumns: ', tableColumns)

    // let pageData = StoreHelper.getMergedPageData(pageKey) || {}
    let pageData = StoreHelper.getMergedData()[pageKey] || {}

    if(debug) console.log('EhrSummaryHelpV2 pageData: ', pageData)

    let tableData = pageData[tableKey] || []
    tableData = tableData.filter( data => { return def.filter(data)} )
    if(debug) console.log('EhrSummaryHelpV2 tableData: after filter ', tableData)
    tableData = tableData.map( data => {
      let result = {}
      def.columnKeys.forEach( key => {
        result[key] = def.customGetters[key] ? def.customGetters[key](key, data) : data[key]
        if(debug) console.log('EhrSummaryHelpV2 tableData: key data result', key, data, result)
      })
      return result
    })
    if(debug) console.log('EhrSummaryHelpV2 tableData: after map ', tableData)

    summary.tableData = tableData
    summary.description = def.description
    if(debug) console.log('EhrSummaryHelpV2 load pageKey:', summary)
    this.summary = summary
  }

  _getDefs () {
    let et = t18EhrText().customPages.discharge
    let defs = {}
    defs[ESK_Referrals] = {
      pageKey: 'referrals',
      summaryTitle: et.referral.title,
      description: et.referral.desc,
      tableKey: 'table',
      columnKeys: ['referralName', 'referralProfession', 'appointmentDate', 'appointmentTime'],
      customGetters: {},
      filter: allFilter
    }

    defs[ESK_Medications] = {
      pageKey: MED_ORDERS_PAGE_KEY,
      summaryTitle: et.meds.title,
      description: et.meds.desc,
      tableKey: 'medicationOrdersTable',
      // 'administration'
      columnKeys: ['med_medication',
        'med_dose',
        'med_route',
        'med_scheduled',
        'med_timing',
        'med_reason',
        'med_alert',
        'med_instructions',
        'medicationOrdersTable_day', 'medicationOrdersTable_time', 'medicationOrdersTable_name', 'medicationOrdersTable_profession'
      ],
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
      summaryTitle: et.lab.title,
      description: et.lab.desc,
      tableKey: 'table',
      columnKeys: ['requisition'],
      customGetters: {},
      filter: notCompleteFilter
    }
    const NonMedCols = ['order', 'orderedBy', 'reason', 'status', 'comment', 'table_day', 'table_time', 'table_name', 'table_profession']
    defs[ESK_Procedures] = {
      pageKey: 'nonmedOrders',
      summaryTitle: et.procedures.title,
      description: et.procedures.desc,
      tableKey: 'table',
      columnKeys: NonMedCols,
      customGetters: {},
      filter: completeFilter
    }

    defs[ESK_DischargeProcedures] = {
      pageKey: 'nonmedOrders',
      summaryTitle: et.orders.title,
      description: et.orders.desc,
      tableKey: 'table',
      columnKeys: NonMedCols,
      customGetters: {},
      filter: notCompleteFilter
    }

    defs[ESK_MARS] = {
      pageKey: 'medAdminRec',
      summaryTitle: et.mar.title,
      description: et.mar.desc,
      tableKey: 'marTable',
      columnKeys: ['mo_medOrder', 'mar_status', 'mar_dose', 'mar_route', 'mar_event_day', 'mar_event_time', 'mar_comments'],
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
    return defs
  }
  getSummary () {
    return this.summary
  }
}

function completeFilter (element) {
  let status = element.status
  status = status ? status.toLocaleLowerCase() : status
  return status === 'completed'
}
function notCompleteFilter (element) {
  let status = element.status
  status = status ? status.toLocaleLowerCase() : status
  return status !== 'completed' && status !== 'cancelled'
}

function allFilter (element) { return true }

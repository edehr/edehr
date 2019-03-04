import MarEntity from './mar-entity'

export const MS_MED_ORDER = 'medOrder'
export const MS_EMPTY = 'empty'
export const MS_MAR = 'mar'


function _createElement (t, v) { return { type: t, value: v }}

export default class MarSummary {
  constructor () {
    this._header = []
    this._body = []
  }
  summaryRefresh (marRecords, medOrders, periodDefs) {
    const EMPTY = _createElement(MS_EMPTY,{})
    // sort newest first
    marRecords.sort( (a,b) => MarEntity.compare(a, b, true) )

    // Compose the table header ....
    // console.log('MarSummary refresh', marRecords)
    let hdr = []
    hdr.push(_createElement(MS_MED_ORDER, 'medications'))
    marRecords.forEach( mar => hdr.push(_createElement(MS_MAR, mar)) )
    this._header = hdr

    // Compose the table body ... a 2D array medications x MARs
    let body = []
    medOrders.forEach( medOrder => {
      let medName = medOrder.medication
      let medMar = []
      medMar.push(_createElement(MS_MED_ORDER, medOrder))
      marRecords.forEach( mar => {
        let marMedications = mar.medications
        let found = marMedications.find( m => m.medication === medName)
        medMar.push(found? _createElement(MS_MAR, mar) : EMPTY)
      })
      body.push(medMar)
    })
    this._body = body
  }

  get tableHeader () {return this._header}
  get tableBody () { return this._body}
}

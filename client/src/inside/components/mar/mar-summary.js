import MarEntity from './mar-entity'

export const MS = {
  KEY_MED_ORDER:'medOrder',
  KEY_EMPTY:'empty',
  KEY_MAR:'mar',
}
function _createElement (t, v) { return { type: t, value: v }}

export default class MarSummary {
  constructor () {
    this._header = []
    this._body = []
  }
  summaryRefresh (marRecords, medOrders) {
    let db = false
    let db2 = false
    if (!marRecords || !medOrders) {
      // console.log('MarSummary call to refresh before system is set up. There will be another call in a sec')
      return
    }
    const EMPTY = _createElement(MS.KEY_EMPTY,{})
    if(db) console.log('MarSummary refresh', marRecords, medOrders)
    // sort newest first
    marRecords.sort( (a,b) => MarEntity.compare(a, b, true) )

    // Compose the table header ....
    let hdr = []
    marRecords.forEach( mar => hdr.push(_createElement(MS.KEY_MAR, mar)) )
    this._header = hdr

    // Compose the table body ... a 2D array medications x MARs
    let body = []
    medOrders.forEach( medOrder => {
      let medName = medOrder.medication
      if(db2) console.log('MarSummary.summaryRefresh medOrder', medOrder)
      let medMar = []
      medMar.push(_createElement(MS.KEY_MED_ORDER, medOrder))
      marRecords.forEach( mar => {
        let marMedications = mar.medications
        if(db2) console.log('MarSummary.summaryRefresh mar', mar, marMedications)
        let found = marMedications.find( m => {
          if(db2) console.log('m.medication === medName',m.constructor.name, m._data, medName)
          return m.medication === medName
        })
        medMar.push(found? _createElement(MS.KEY_MAR, mar) : EMPTY)
      })
      body.push(medMar)
    })
    this._body = body
  }

  get tableHeader () {return this._header}
  get tableBody () { return this._body}
}

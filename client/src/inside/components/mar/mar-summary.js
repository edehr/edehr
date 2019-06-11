import MarEntity from './mar-entity'

export const MS = {
  KEY_MED_ORDER:'medOrder',
  KEY_EMPTY:'empty',
  KEY_MAR:'mar',
  DISPLAYED_WHEN_MAR:'Administered',
  DISPLAYED_WHEN_NO_MAR:'Not scheduled',
  CSS_CLASS_MED:'medication',
  CSS_CLASS_MAR:'administered',
  CSS_CLASS_NO_MAR:'notApplicable'
  
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
    const EMPTY = _createElement(MS.KEY_EMPTY,{})
    // sort newest first
    marRecords.sort( (a,b) => MarEntity.compare(a, b, true) )

    // Compose the table header ....
    if(db) console.log('MarSummary refresh', marRecords, medOrders)
    let hdr = []
    hdr.push(_createElement(MS.KEY_MED_ORDER, 'medications'))
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

  marCellContent (cell) {
    let content = ''
    let type = cell.type
    let value = cell.value
    if( type === MS.KEY_MED_ORDER) {
      content = value.medication
      content += value.route ? ', ' + value.route : ''
      content += value.reason ? ', ' + value.reason : ''
    } else if( type === MS.KEY_MAR) {
      content = MS.DISPLAYED_WHEN_MAR
    } else {
      content = MS.DISPLAYED_WHEN_NO_MAR
    }
    return content
  }
  marCellStyle (cell) {
    let style = ''
    let type = cell.type
    // console.log('marCellStyle', cell.type, cell.value)
    if( type === MS.KEY_MED_ORDER) {
      style = MS.CSS_CLASS_MED
    } else if( type === MS.KEY_MAR) {
      style = MS.CSS_CLASS_MAR
    } else {
      style = MS.CSS_CLASS_NO_MAR
    }
    return style
  }

}

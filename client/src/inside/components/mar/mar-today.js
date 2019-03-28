
import PeriodDefs from './period-defs'

export default class MarToday {
  constructor () {
    this._cDay = 0
  }

  getTodaysSchedule (marRecords, medOrders) {
    /*   See the Algorithm in the MAR Readme */

    // Step 1
    let pDefs = new PeriodDefs()
    let pdList = pDefs.periodList
    this._cDay = 0

    // Step 2
    if(!medOrders || medOrders.length === 0) {
      console.log('Done (There are no periods needing a MAR. The Today page is empty)')
      return pdList
    }

    // Step 3
    let mOrders = medOrders // in future filter this list to only include active prescriptions
    pdList.forEach(pk => {
      mOrders.forEach( mo => {
        if (mo.isScheduled(pk.key)) {
          pk.addMedication(mo)
        }
      })
    })
    let pdListFiltered = pdList.filter ( pk => pk.hasMedications())

    // Step 4
    if(!marRecords || marRecords.length === 0) {
      console.log('Done (No MAR records so all the periods with scheduled medications need a MAR)')
      return pdListFiltered
    }

    // Step 5
    // Let cDay = the max day in all MAR records.
    marRecords.forEach (mar => this._cDay = Math.max(this._cDay, mar.day))
    // MAR Records filtered to the cDay
    let marRecsFiltered = marRecords.filter( mar => mar.day === this._cDay)

    // Step 6
    if(marRecsFiltered.length === 0) {
      console.log('Done (No MAR records for current day so all the periods with scheduled medications need a MAR)')
      return pdListFiltered
    }

    // Step 7
    marRecsFiltered.forEach( mar =>  {
      let pk = pdListFiltered.find( pk => pk.key === mar.scheduledTime )
      pk.marRecord = mar
    })

    // Step 8
    let mCnt = 0
    pdListFiltered.forEach ( pk => mCnt += pk.hasMar() ? 1 : 0 )
    if (mCnt === pdListFiltered.length) {
      console.log('If all periods have a marRec so advance to next day')
      this._cDay += 1
      pdListFiltered.forEach ( pk => pk.marRecord = undefined )
    }

    return pdListFiltered
  }

  getCurrentDay () { return this._cDay }
}
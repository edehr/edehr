
function getSchedule (medOrders) {
  let schedules = {}
  medOrders = medOrders || []
  medOrders.forEach(mo => {
    let times = mo.scheduleTimes
    times.forEach( t => {
      let aSchedule = schedules[t]
      if (!aSchedule) {
        schedules[t] = aSchedule = {
          hour24: t,
          hasMar: false,
          marRecord: {},
          medList: []
        }
      }
      let reduced = {
        medication: mo.medication,
        route: mo.route,
        dose: mo.dose,
        reason: mo.reason
      }
      aSchedule.medList.push(reduced)
    })
  })
  let typicalDay = []
  Object.keys(schedules).forEach( k => {
    typicalDay.push(schedules[k])
  })
  typicalDay.sort((a,b) => {
    return a.hour24 > b.hour24
  })
  return typicalDay
}


export default class MarToday {
  constructor () {
    this._cDay = 0
  }

  getTodaysSchedule (marRecords, medOrders) {
    let db = false
    if (db) {
      console.log('getTodaysSchedule marRecords', marRecords)
      console.log('getTodaysSchedule medOrders', medOrders)
    }
    this._cDay = 0

    let aDaySchedule = getSchedule(medOrders)
    if (db) console.log('marToday aDaySchedule >> ', aDaySchedule)

    if(aDaySchedule.length === 0) {
      if(db) console.log('getTodaysSchedule: Done. There are no scheduled medications.')
      return aDaySchedule
    }

    if(!marRecords || marRecords.length === 0) {
      if(db) console.log('getTodaysSchedule: Done. There are no MAR records.')
      return aDaySchedule
    }

    // Let cDay = the max day in all MAR records.
    marRecords.forEach (mar => {
      this._cDay = Math.max(this._cDay, mar.day)
    })
    // MAR Records filtered to the cDay
    let marRecsFiltered = marRecords.filter( mar => 
      mar.day === this._cDay
    )
    //
    // Step 6
    if(marRecsFiltered.length === 0) {
      if(db) console.log('getTodaysSchedule: Done. There are no MAR records for current day so all the periods with scheduled medications need a MAR.')
      return aDaySchedule
    }

    // Match mars for the current data to the scheduled list of medications
    marRecsFiltered.forEach( mar =>  {
      if(mar.scheduledTime ) {
        let pk = aDaySchedule.find( pk => 
          pk.hour24 === mar.scheduledTime
        )
        pk.marRecord = mar
        pk.hasMar = true
      }
    })

    // Count how many MARs there are for the current day
    let mCnt = 0
    aDaySchedule.forEach ( pk => {
      mCnt += pk.hasMar ? 1 : 0
    })

    if (mCnt === aDaySchedule.length) {
      if(db) console.log('getTodaysSchedule: All periods have a marRec so advance to next day')
      this._cDay += 1
      aDaySchedule.forEach ( pk => {
        pk.marRecord = {}
        pk.hasMar = false
      })
    }

    return aDaySchedule
  }

  getCurrentDay () { return this._cDay }
}
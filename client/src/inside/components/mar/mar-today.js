import StoreHelper from '@/helpers/store-helper'

const ONCE_A_DAY_MEDS = 'OD'


export function getSchedule (medOrders) {
  let schedules = []
  medOrders = medOrders || []
  medOrders.forEach(mo => {
    let times = mo.scheduleTimes
    times.forEach( t => {
      let aSchedule = {
        hour24: t,
        key: t + mo.medication,
        hasMar: false,
        marRecord: {},
        medList: []
      }
      aSchedule.medList.push(mo)
      schedules.push(aSchedule)
    })
  })
  let typicalDay = schedules
  return [
    ...typicalDay.filter(d =>
      String(d.hour24).toUpperCase() === ONCE_A_DAY_MEDS
    ),
    ...typicalDay.filter(d =>
      isTimeValid(d.hour24)).sort((a,b) => {
      return a.hour24 - b.hour24
    })
  ]
}

export function isTimeValid (time) {
  return (/^([0-1]?[0-9]|2[0-3])[0-5][0-9]$/.test(time))
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
    let simTime = StoreHelper.getMetaSimTime()
    this._cDay = simTime.visitDay
    // console.log('construct MarToday with cDay', simTime)
    let aDaySchedule = getSchedule(medOrders)
    if (db) console.log('marToday aDaySchedule >> ', aDaySchedule)

    if(aDaySchedule.length === 0) {
      if(db) console.log('getTodaysSchedule: Done. There are no scheduled medications.')
      return aDaySchedule
    }

    aDaySchedule.forEach( pk => {
      // console.log('pk.hour24 < simTime.visitTime',pk.hour24, simTime.visitTime)
      pk.isOverDue = pk.hour24 < simTime.visitTime
    })

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
    // Since pk can be null, according to what aDaySchedule.find
    // returns, a comparison has been added so that it doesn't break
    //  the view with a error like "Cannot read marRecord of null"
    marRecsFiltered.forEach( mar =>  {
      const pk = aDaySchedule.find( pk =>
        pk.hour24 === mar.scheduledTime
      )
      if(mar.scheduledTime && pk) {
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

  getPRNs (medOrders) {
    medOrders = medOrders || []
    return medOrders.filter(mo => {
      return mo.administration.toUpperCase() === 'PRN'
    })
  }

  getCurrentDay () { return this._cDay }
}

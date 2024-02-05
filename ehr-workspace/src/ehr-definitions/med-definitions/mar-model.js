import { MedOrders } from './medOrder-model'
import { MarRecords } from './marRecord-model'
import { MedMarEvent } from './mm-event'

export const MED_GROUP_SCHED = 'sched'
export const MED_GROUP_ONCE = 'once'
export const MED_GROUP_PRN = 'prn'
export const MED_GROUP_STAT = 'stat'
export const MED_GROUP_CONT = 'cont'
export const MED_GROUP_SET = 'set'

export const MAR_STATUS_ADMINISTERED = 'Administered'
export const MAR_STATUS_REFUSED = 'Refused'
export const MAR_STATUS_SKIPPED = 'Skipped'
export const MAR_STATUS_MISSED = 'Missed'

// for use by UI
export const MED_GROUPS = [MED_GROUP_SCHED, MED_GROUP_STAT, MED_GROUP_PRN, MED_GROUP_ONCE, MED_GROUP_CONT, MED_GROUP_SET]
// for use by UI
export const MED_GROUP_LABELS = ['Scheduled','STAT', 'PRN', /*'Once a day',*/ 'Once only', 'Continuous', 'Set times']
export function hourString (hr) {
  return (hr < 10 ? '0' : '') + hr + '00'
}

export function hourStringToHour (ts) {
  return ts ? parseInt(ts.slice(0,2)) : ''
}

const HOURS = 24
const DAY_TEMPLATE = [...Array(HOURS).keys()].map( t => hourString(t))

export class MarTimelineModel {
  constructor (ehrDataModel) {
    // assert.ok(ehrDataModel instanceof EhrDataModel)
    this._timeline = {}
    this._medOrders = new MedOrders(ehrDataModel)
    this._marRecords = new MarRecords(ehrDataModel)
    const simTime = ehrDataModel.simTime
    this._numberOfDays = simTime.visitDay + 1
    const dayNumbersArray = [...Array(this._numberOfDays).keys()]
    this._timeline.days = dayNumbersArray.map(d => {
      return new TimeLineDay(d, this.medOrders, this._numberOfDays)
    })
    this.setupMedMarEvents()
  }
  get timeLineDays () { return this._timeline.days}
  get timeLine () {return this._timeline}
  get numberOfDays () { return this._numberOfDays }
  get marRecords () { return this._marRecords }
  get medOrders () { return this._medOrders }

  /**
   * For the given day and medication return the number of medMarEvents
   * @param dayNum
   * @param medOrder
   * @returns {*}
   */
  dayMedEventCount (dayNum, medOrder) {
    dayNum = 1 * dayNum
    const moId = medOrder.id
    const tld = this.timeLineDays.find ( tlDay => dayNum === tlDay.dayNum )
    const mdb = tld.medDayBlocks.find( mdb => moId === mdb.id )
    const teList = mdb.timeElements.filter( te => !!te.mme)
    return teList.length
  }
  getOrdersByGroup (timingCode) {
    return this._medOrders.getOrdersByGroup(timingCode)
  }
  getMarsForMed (medOrder) {
    return this.marRecords.getMarsForMedById(medOrder.id)
  }
  getDraftMarsForMed (medOrder) {
    return this.marRecords.getDraftMarsForMedById(medOrder.id)
  }
  _setupMedMarEvents (worker) {
    const marRecords = this._marRecords
    this.timeLineDays.forEach ( tlDay => {
      const dayNum = tlDay.dayNum
      tlDay.medDayBlocks.forEach( medDayBlock => {
        const medOrder = medDayBlock.medOrder
        const mars = marRecords.getMarsForMedById(medOrder.id)
        medDayBlock.timeElements.forEach( te => {
          const medId = medOrder.id
          worker(medOrder, dayNum, te, mars, medId)
        })
      })
    })
  }
  setupMedMarEvents () {
    this._setupMedMarEvents( (medOrder, dayNum, te, mars, medId) => {
      this.medMarEventLink(medOrder, dayNum, te, mars, medId)
    })
    this._setupMedMarEvents( (medOrder, dayNum, te, mars, medId) => {
      this.medSchedule(medOrder, dayNum, te, mars, medId)
    })
  }
  medMarEventLink (medOrder, dayNum, te, mars, medId) {
    const fmars = mars.filter(m => m.isMarAdministered(dayNum, te.ts))
    if (fmars.length > 0) {
      fmars.forEach (mar => {
        let mme = new MedMarEvent(dayNum, te.ts, medOrder)
        mme.setMar(mar)
        te.addMedMarEvent(mme)
        // console.log(' push view mar button data ', te, te.manyMars)
      })
    }
  }
  medSchedule (medOrder, dayNum, te, mars, medId) {
    let ts = te.ts
    let alreadyAdministered = mars.find( m => m.isMarMedScheduled(dayNum, ts))
    if (!alreadyAdministered && medOrder.isScheduled(dayNum, ts)) {
      let stb = medOrder.getScheduledTimeForDayTimeBlock(dayNum, ts)
      // stb is like this { orderScheduleTime: ts, hour: hourStringToHour(ts) }
      // If we are here then the medication order is a scheduled for this time element.
      // Create a MedMarEvent to manage the linkage between the medication order's scheduled
      // time and the possible MAR.
      const mme = new MedMarEvent(dayNum, stb.orderScheduleTime, medOrder)
      te.addMedMarEvent(mme)
      // console.log(' make a mar button data ', te,  te.manyMars)
    }

  }

  findTimeElement (moId, dayNum, hr) {
    // force a string val into a number
    dayNum = 1 * dayNum
    // MarTimelineModel days is array of TimeLineDay
    // Each TimeLineDay has dayId, dayNum, label, medOrders, array of MedDayBlock
    // Each MedDayBlock has medName, timing, max, id, medOrder, array of TimeElement
    // Each TimeElement has key, dayNum, ts, hr, medOrder, mme
    const tld = this.timeLineDays.find ( tlDay => dayNum === tlDay.dayNum )
    const mdb = tld.medDayBlocks.find( mdb => moId === mdb.id )
    return mdb.timeElements.find( te => hr === te.hr)
  }
}

/**
 * TimeLineDay manages one simulation day.
 *
 * An instance of this class can supply a list of rows. One row per medication.
 * Each row has 24 elements.
 *
 * Provide the desired group (idPrefix) to get the set of medications rows for that group.
 */
export class TimeLineDay {
  constructor (dayNumber, medOrders, maxDays) {
    // console.log('constructing time line day', dayNumber, maxDays)
    const todayNum = maxDays - 1
    this.dayId = 'day-' + dayNumber
    this.dayNum = dayNumber
    let dv = new Date()
    let df = todayNum-dayNumber
    dv.setDate(dv.getDate() - df)
    this.dateStr = dv.toISOString().split('T')[0]
    let lbl
    if ( dayNumber === todayNum) {
      lbl = 'Today'
      df = 0
    } else if ( dayNumber === todayNum - 1) {
      lbl = 'Yesterday'
      df = 1
    } else if ( dayNumber < todayNum - 1) {
      lbl = (todayNum-dayNumber) + ' days ago'
    }
    this.label= lbl
    this.medOrders = medOrders
    this.timeElementLabels = DAY_TEMPLATE.map(ts => {
      return {
        key: 'de-' + dayNumber + '-' + ts,
        label: ts
      }
    })
    const medList = this.medOrders.getList()
    this.medDayBlocks = medList.map(mo => {
      return new MedDayBlock(mo, this.dayNum)
    })
  }

  /**
   * Get the time elements that belong to the given group. I.e. 'stat', 'sched', etc
   * @param prefix
   * @returns {*}
   */
  getTimeElements (prefix) {
    return this.medDayBlocks.filter( mdb => {
      return mdb.timing === prefix
    })
  }
}

/**
 * For a single medication order create the set of time elements for one simulation day.
 */
export class MedDayBlock {
  constructor (mo, dayNum) {
    this.medName = mo.medName
    this.timing = mo.timing
    this.max = mo.maxDose
    this.id = mo.id
    this.medOrder = mo
    this.timeElements = DAY_TEMPLATE.map(ts => {
      return new TimeElement(dayNum, ts, mo)
    })
  }
}

/**
 * A time element represents on hour of the day for a given medication.
 * If the medication is a type that is scheduled and if the medication is scheduled for a particular time then create a MedMarEvent to setup a place to start the MAR process.
 */
export class TimeElement {
  constructor (dayNum, ts, mo) {
    this.key = dayNum + ts + mo.id
    this.dayNum = dayNum
    this.ts = ts
    this.hr = hourStringToHour(ts)
    // each time element needs its mo to let the ui do some height calculations
    this.medOrder = mo
    // this.mme = undefined
    this._manyMars = []
  }
  addMedMarEvent (mme) { this._manyMars.push(mme)}
  hasMedMarEvents () { return this._manyMars.length > 0 }
  getMedMarEvents () { return this._manyMars }

  getScheduledMme () {
    return this._manyMars.find( m => !m.marRecord )
  }
  hasDraftMar () {
    let result = false
    result = !! this._manyMars.find( mme => mme.hasDraftMar())
    return result
  }
  hasScheduledEvent () {
    let result = false
    result = !! this._manyMars.find( mme => mme.hasScheduledEvent())
    return result
  }
}

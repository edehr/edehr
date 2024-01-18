import { MedOrders } from './medOrder-model'
import { MarRecords } from './marRecord-model'
import { MedMarEvent } from './mm-event'

export const MED_GROUP_SCHED = 'sched'
export const MED_GROUP_ONCE = 'once'
// export const MED_GROUP_OD = 'od'
export const MED_GROUP_PRN = 'prn'
export const MED_GROUP_STAT = 'stat'
export const MED_GROUP_CONT = 'cont'

export const MAR_STATUS_ADMINISTERED = 'Administered'
export const MAR_STATUS_REFUSED = 'Refused'
export const MAR_STATUS_SKIPPED = 'Skipped'
export const MAR_STATUS_MISSED = 'Missed'

// for use by UI
export const MED_GROUPS = [MED_GROUP_SCHED, MED_GROUP_STAT, MED_GROUP_PRN, /*MED_GROUP_OD,*/ MED_GROUP_ONCE, MED_GROUP_CONT]
// for use by UI
export const MED_GROUP_LABELS = ['Scheduled','STAT', 'PRN', /*'Once a day',*/ 'Once only', 'Continuous']
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
  setupMedMarEvents () {
    const marRecords = this._marRecords
    this.timeLineDays.forEach ( tlDay => {
      const dayNum = tlDay.dayNum
      tlDay.medDayBlocks.forEach( medDayBlock => {
        const medOrder = medDayBlock.medOrder
        const mars = marRecords.getMarsForMedById(medOrder.id)
        medDayBlock.timeElements.forEach( te => {
          const medId = medOrder.id
          this.medMarEventLink(medOrder, dayNum, te, mars, medId)
        })
      })
    })
  }

  medMarEventLink (medOrder, dayNum, te, mars, medId) {
    if (medOrder.isScheduled(dayNum, te.ts)) {
      // If we are here then the medication order is a scheduled for this time element.
      // Create a MedMarEvent to manage the linkage between the medication order's scheduled
      // time and the possible MAR.
      const mme = new MedMarEvent(dayNum, te.ts, medOrder)
      // Look for a MAR for this time and this medication order. The find may return undefined.
      const mar = mars.find(m => m.isMoScheduled(dayNum, te.ts))
      if (mar) {
        // Set the found mar into the event. Do this before working further with the event object.
        mme.setMar(mar)
        // If there is a MAR do not link anything to this time element. Instead,
        // search for the time element that matches the MAR's administered day and time.
        // Note that this could be for a different day.
        // console.log('mos has mar', medId, dayNum, te.ts, JSON.stringify(mar))
        const mr = hourStringToHour(mme.adminTime)
        const otherTe = this.findTimeElement(medId, mme.adminDay, mr)
        if (otherTe) {
          otherTe.mme = mme
          // otherTe.manyMars.push(mme)
          // console.log(' push onto otherTe', otherTe, otherTe.manyMars)
        } else {
          // This situation should not happen. Send message to error.
          console.error('Failed to find expected time element for medMarEvent', medId, mar.adminDay, mr)
        }
      } else {
        // If there is no MAR then link the event to this time element
        // console.log('mos is scheduled', medOrder.id, dayNum, te.ts)
        te.mme = mme
        te.manyMars.push(mme)
        // console.log(' push onto te without mar ', te,  te.manyMars)
      }
    } else {
      // For all the other, non-scheduled, medications ....
      // is there a MAR for this medOrder for this timeElement?
      const mar = mars.find(m => m.isMarAdministered(dayNum, te.ts))
      if (mar) {
        te.mme = new MedMarEvent(dayNum, te.ts, medOrder)
        te.mme.setMar(mar)
      }
      /*
      Collect ALL the MARs for a give time.  The code above can be phased out
       */
      const fmars = mars.filter(m => m.isMarAdministered(dayNum, te.ts))
      if (fmars.length > 0) {
        fmars.forEach (mar => {
          let mme = new MedMarEvent(dayNum, te.ts, medOrder)
          mme.setMar(mar)
          te.manyMars.push(mme)
          // console.log(' push onto te from fmars ', te, te.manyMars)
        })
      }
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
    this.mme = undefined
    this.manyMars = []
  }

  hasDraftMar () { return this.mme && this.mme.hasDraftMar() }
  hasScheduledEvent () { return this.mme && this.mme.hasScheduledEvent() }
  hasMarEvent () { return this.mme && this.mme.hasMarEvent() }
  getMedMarEvent () { return this.mme }
  get marRecordId () { return this.mme ? this.mme.marRecordId : undefined }
  get toolTip () { return this.mme ? this.mme.toolTip : ''}
}

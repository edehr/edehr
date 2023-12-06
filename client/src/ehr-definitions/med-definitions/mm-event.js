
/**
 * Each MedOrder will have one or more MedMarEvents.
 * Combine the medOrderId with schedDay and schedTime to get a unique key. That can be decomposed to obtain the MedOrder.
 *
 * Each MedMarEvent *may* have a MarRecord. If none then the event is scheduled but not yet administered.
 * If one then the status may be Draft or Processed. (Processed tries to encompass the act of trying to give the medication.)
 * In the end it can be Administered or Refused or Missed or Skipped.
 */
export class MedMarEvent {
  constructor (dayNum, ts, medOrder ) {
    this._medOrderId = medOrder.id
    this._medSummary = medOrder.medOrderSummary()
    this._schedDay = dayNum
    this._schedTime = ts
    this.adminDay = undefined
    this.adminTime = undefined
    this.marIsDraft = undefined
    this.marRecord = undefined
    this.marRecordId = undefined
    this.marStatus = undefined
  }
  setMar (mar) {
    this.adminDay = mar.day
    this.adminTime = mar.time
    this.marIsDraft = !!mar.isDraft
    this.marRecord = mar
    this.marRecordId = mar.id
    this.marStatus = mar.status
  }
  // TODO rewrite the toolTip to be more user friendly and not, as it is now, written for a developer.
  get toolTip () { return this.toString() }
  toString () {
    const parts = []
    parts.push(this._medSummary)
    if (this.marStatus) {
      parts.push(this.adminDay)
      parts.push(this.adminTime)
      parts.push(this.marStatus)
    }
    return parts.join(', ')
  }

  get schedDay () { return this._schedDay}
  get schedTime () { return this._schedTime}
  get medOrderId () { return this._medOrderId}
  // get marRecordId () { return this.marRecord}
  hasMar () { return !!this.marRecord }
  marStatus () { return this.marStatus }
  hasMarEvent () { return this.hasMar() && !this.marIsDraft }
  hasScheduledEvent () { return this.marIsDraft || this.marRecordId === undefined }
  hasDraftMar () { return this.marIsDraft}
}

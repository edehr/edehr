export default class MarSchedule {
  constructor (medOrders) {
    this.schedlule = []
    this.medOrders = medOrders || []
    this.scheduledOptions = {
      'BID / q12h' : ['0800','2000'],
      TID: ['0800', '1600', '2200'],
      q8h: ['0600','1400', '2200'],
      QID: ['0800','1200', '1700', '2200'],
      q6h: ['0600', '1200', '1800', '2200', '0200'],
      q4h: ['0600', '1000', '1400', '1800', '2200', '0200']
    }
    console.log('medOrders >> ', medOrders)
  }

  // set medOrders (medOrders) { this.medOrders = medOrders }
  // get scheduledOptions () { return this.scheduledOptions }

  
  populateByType (medOrder) {
    const keys = Object.keys(this.scheduledOptions)
    if(keys.includes(medOrder.scheduled)) {
      return this.scheduledOptions[medOrder.scheduled]
    } else {
      console.log('NOT FOUND medOrder.scheduled >> ', medOrder.scheduled)
    }
  }

  getScheduleFromTime (time) {
    const keys = Object.keys(this.scheduledOptions)
    const filtered = keys.filter(k => this.scheduledOptions[k].includes(time))
    return filtered
  }

  getScheduledMedicalOrders (scheduleId) {
    return this.medOrders.filter(mo => mo.scheduled === scheduleId)
  }
  
  getPeriodDefs () {
    let periods = []
    this.medOrders.map(mo=>{
      const p = this.populateByType(mo).filter(t => !periods.includes(t))
      periods = [...periods, ...p]
      return mo
    })
    return periods
  }

  // getFullSchedule () {
  //   const schedule = {}
  //   this.medOrders.map(mo => {
  //     this.populateByType(mo)
  //       .map(period => {
  //         return {
  //           [period]: this.get
  //         }
  //       })

  //   })
  // }

  // getAllMedications () {
  //   return this.medOrders.map(mo => mo.medication)
  // }

}

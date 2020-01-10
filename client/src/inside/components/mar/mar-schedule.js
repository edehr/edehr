export default class MarSchedule {
  constructor (medOrders) {
    this.schedlule = []
    this.medOrders = medOrders || []
  }
  getFullSchedule () {

  }
  
  populateByType (medOrder) {
    console.log('medOrder >> ', medOrder)
    switch(medOrder.scheduled) {
    case 'BID / q12h':
      return ['0800','2000']
    case 'TID':
      return ['0800', '1600', '2200']
    case 'q8h':
      return ['0600','1400', '2200']
    case 'QID':
      return ['0800','1200', '1700', '2200']
    case 'q6h':
      return ['0600', '1200', '1800', '2200', '0200']
    case 'q4h':
      return ['0600', '1000', '1400', '1800', '2200', '0200']
    default: 
      console.log('medOrder.scheduled >> ', medOrder.scheduled)
    }


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
}
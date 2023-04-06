const dbug = false
const dbugSecs = false

const MINUTE = 60 //seconds
const HOUR = 60 * MINUTE
const DAY = HOUR * 24
const NUMBER_OF_DAYS = 30

export default class Monitor {
  constructor () {
    this.active = 0
    this.sX = this.mX = this.hX = this.dX = 0
    this.pS = this.pM = this.pH = this.pD = 0
    this.secs = []
    this.mins = []
    this.hours = []
    this.days = []
    this.tick = 0
    this.ts = Date.now()
    this.interval = setInterval(() => {
      this.tick++
      this.ts = Date.now()
      if (this.tick % DAY === 0) {
        this.doDay()
      } else if (this.tick % HOUR === 0) {
        this.doHour()
      } else if (this.tick % MINUTE === 0) {
        this.doMinute()
      } else {
        this.doSecond()
      }
    }, 1000)
  }

  apiEvent (rec) {
    this.active += 1 // instead of counting cumulative milliseconds response time (rec.elapsedMs) just count api calls
  }

  doDay () {
    this.days[this.dX] = this.hurs.reduce((p, a) => p + a, 0)
    this.pD = this.dX
    this.dX = (this.dX + 1) % NUMBER_OF_DAYS
    console.log('doDay TODO implement')
    this.doHour()
  }

  doHour () {
    this.hours[this.hX] = this.mins.reduce((p, a) => p + a, 0)
    this.pH = this.hX
    this.hX = (this.hX + 1) % DAY
    if(dbug) console.log('doHour',this.hX, this.hours)
    this.doMinute()
  }

  doMinute () {
    this.mins[this.mX] = this.secs.reduce((p, a) => p + a, 0)
    this.pM = this.mX
    this.mX = (this.mX + 1) % HOUR
    if(dbug) console.log('doMin mX',this.mX, ' mins:', this.mins )
    this.doSecond()
  }

  doSecond () {
    this.secs[this.sX] = this.active
    this.active = 0
    this.pS = this.sX
    this.sX = (this.sX + 1) % MINUTE
    if(dbugSecs) console.log('doSec sX',this.sX, ' secs:', this.secs)
  }

  avgVal ( testArray) {
    if (testArray.length === 0) return 0
    const sum = testArray.reduce((a, b) => a + b, 0)
    return Math.round(sum / testArray.length)
  }

  maxVal ( testArray) {
    let max = testArray[0]
    for (let i = 1; i < testArray.length; i++) {
      if (testArray[i] > max) {
        max = testArray[i]
      }
    }
    return max
  }

  displayList (inx, list ) {
    let ordered = []
    for(let i = inx; i >= 0; i--) {
      ordered.push(list[i])
    }
    for(let i = list.length - 1; i > inx; i--) {
      ordered.push(list[i])
    }
    // console.log('displayList', inx, list, ordered)
    return ordered
  }

  getData () {
    const data = {   }
    data.ts = this.ts
    data.lastSecond = this.secs[this.pS]
    data.lastMinute = this.mins[this.pM]
    data.maxSec = this.maxVal(this.secs)
    data.avgSec = this.avgVal(this.secs)
    data.maxMin = this.maxVal(this.mins)
    data.avgAvg = this.avgVal(this.mins)
    data.maxHr = this.maxVal(this.hours)
    data.avgHr = this.avgVal(this.hours)
    data.lists = {
      secs: this.displayList(this.pS, this.secs),
      mins: this.displayList(this.pM, this.mins),
      hours: this.displayList(this.pH, this.hours)
    }
    return data
  }
}


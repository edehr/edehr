import os from 'os'

/**
 * Every minute collect system information and stash for use in the monitoring system.
 * Stash the CPU load average over 15 minutes divided by number of CPUs.
 * A value of 1 is maxed out. Over 1 is over loaded.
 * Stash the percentage of memory that is free.
 *
 * Consider adding pressure information. See https://lwn.net/Articles/759781/
 */
export default class System {
  constructor () {
    this.ts = Date.now()
    const cpus = os.cpus()
    this.samples = []
    this.sampleSize = 24 * 60
    this.info = {
      platform: os.platform(),
      cpusCount: cpus.length,
      cpuInfo: cpus.map(c  => {
        const model = ''+ c.model
        const speed = '' + c.speed
        return { model: model, speed: speed}
      })
    }
    this._record()
    this.interval = setInterval(() => {
      this._record()
    }, 1000 * 60 ) // every minute
  }


  _record () {
    this.ts = Date.now()
    const freememPercentage = Math.round( 1000 * os.freemem() / os.totalmem()) / 10
    const loadAvg1 = os.loadavg()[0]
    const loadAvg5 = os.loadavg()[1]
    const loadAvg15 = os.loadavg()[2]
    const usage1 = Math.round(loadAvg1 / this.info.cpusCount * 1000) / 10
    const usage5 = Math.round(loadAvg5 / this.info.cpusCount * 1000) / 10
    const usage15 = Math.round(loadAvg15 / this.info.cpusCount * 1000) / 10
    this.samples.push({
      ts: this.ts,
      usage1: usage1,
      usage5: usage5,
      usage15: usage15,
      usage: usage15, // legacy but only need for a short while
      freeMemPc: freememPercentage})
    if (this.samples.length > this.sampleSize) {
      this.samples.shift()
    }
    // console.log('getData', this.getData())
  }

  getData () {
    const data = {   }
    data.ts = this.ts
    data.cpuCount = this.info.cpusCount
    data.loadAvg15 = this.samples
    return data
  }
}


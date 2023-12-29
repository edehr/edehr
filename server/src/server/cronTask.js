var cron = require('node-cron')

/*
 # ┌────────────── second (optional)
 # │ ┌──────────── minute
 # │ │ ┌────────── hour
 # │ │ │ ┌──────── day of month
 # │ │ │ │ ┌────── month
 # │ │ │ │ │ ┌──── day of week
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *

*/

const byMinuteTasks = [
  () => { console.log('running EVERY MINUTE TASKS') }
]
const byHourTasks = [
  () => { console.log('running EVERY HOUR TASKS') }
]

function everyMinuteTasks () {
  byMinuteTasks.forEach(task => {
    try {
      task()
    } catch (err) {
      console.error('Error running a "every minute tasks' + err.message)
    }
  })
}
function everyHourTasks () {
  byHourTasks.forEach(task => {
    try {
      task()
    } catch (err) {
      console.error('Error running a "every hour tasks' + err.message)
    }
  })
}

export function cronRegisterMinuteTask (callback) {
  callback()
  byMinuteTasks.push(callback)
}
export function cronRegisterHourTask (callback) {
  callback()
  byHourTasks.push(callback)
}

export function cronTaskInitialize () {
  cron.schedule('* * * * *', () => {
    everyMinuteTasks()
  })
  cron.schedule('0 * * * *', () => {
    everyHourTasks()
  })
}


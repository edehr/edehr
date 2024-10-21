import { sendErrorEmail } from '../helpers/send-email-helper'

let localConfig
export function setUpCustomError (config) {
  localConfig = config
  if (!localConfig) {
    throw Error('Error setting up custom error handler. Must provide configuration')
  }

  // Save the original console.error
  const originalConsoleError = console.error

  console.log('Override console.error to intercept all error messages. in setUpCustomError')
  console.error = function (...args) {
    // Add special error handling here
    // For example, log the error to an external service
    handleCustomError(args)
    // Optionally log the error to the console (or skip it)
    originalConsoleError.apply(console, args)
  }

  // Custom error handling function
  function handleCustomError (args) {
    // Example: send error to external logging service
    // Replace this with your actual error handling logic
    const errorMessage = args.map(arg => (arg instanceof Error ? arg.stack : arg)).join(' ')
    let json = {
      location: 'console error',
      message: errorMessage,
    }
    customErrorHandling(json)
  }
}
export function customErrorHandling (json) {
  json.configData = getData()
  sendErrorEmail(getSubject(json), json)
}
function getSubject (json) {
  return ['Error:', json?.location + '.', 'Domain:', localConfig?.domain].join(' ')
}
function getData () {
  const config = localConfig
  const data = {}
  data.appTitle = config.appTitle
  data.domain = config.domain
  data.appVersion = config.appVersion
  data.host = config.host
  data.isDevelop = config.isDevelop
  data.isProduction = config.isProduction
  let uDate = new Date()
  data.UTC = uDate.toISOString()
  const offset = uDate.getTimezoneOffset()
  let yourDate = new Date(uDate.getTime() - (offset*60*1000))
  data.yourDate = yourDate.toISOString()
  return data
}

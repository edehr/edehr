import { codeValidate, emailValidate, textToHtml } from '../ehr-definitions/app-lms/app-lms-utils'
import { ParameterError, SystemError } from '../mcr/common/errors'
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail')

let sgConfigured = false
export function setUpSendGrid (config) {
  if (!config.sendGridApiKey) {
    sgConfigured = false
    console.error('To use the SendGrid requires the send grid api key to be defined in configuration')
    return
  }
  console.log('setUpSendGrid will set api key')
  sgMail.setApiKey(config.sendGridApiKey)
  sgConfigured = true
}

export function isSendGridActive () {
  return sgConfigured
}

export function sendEdEHRAccessCode (toEmail, accessCode) {
  if (!sgConfigured) {
    // throw error. caller will convert to a 500 error
    throw new SystemError('To use the SendGrid requires the application to configure this helper before use.')
  }
  if(!emailValidate(toEmail)) {
    throw new ParameterError('Can not send email because the address does not pass basic validation check. (' + toEmail + ')')
  }
  if (!codeValidate(accessCode)) {
    throw new SystemError('Can not send email because the access code does not pass basic validation check. (' + accessCode + ')')
  }
  let mainBody = 'Hello. Welcome to the EdEHR. This application is an educational electronic health record (EHR) and laboratory information system (LIS).  It’s been designed in collaboration with educators for students. \n' +
  'Here is the access code you requested. ('+ toEmail +') Enter this on the EdEHR login page.\n' +
  '### ' + accessCode + '\n' +
  'Please reach out to us at mailto:info@edehr.org or visit our web site at https://edehr.org ' +
    ' if you have any questions or want to learn more.\n' +
  'Please ignore this message if you did not request this access code.\n '+
  'To protect your privacy this email was sent without tracking codes.'

  // if ( process.env.NODE_ENV !== 'production' ) {
  //   console.log('DEV OVERRIDE TO ADDRESS')
  //   toEmail= 'bryan.gilbert@gmail.com'
  // }
  let msg = {
    to: toEmail,
    from: 'EdEHR <info@edehr.org>',
    subject: accessCode + ' is your EdEHR access code',
    text: mainBody,
    html: textToHtml(mainBody),
    trackingSettings: {
      clickTracking: {
        enable: false,
        enableText: false
      },
      openTracking: {
        enable: false
      }
    }
  }
  // SEND THE EMAIL, caller to handle errors
  return sgMail.send(msg)
}

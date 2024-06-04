// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require('@sendgrid/mail')
// console.log('access api key is ', process.env.SENDGRID_API_KEY)
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
let msg = {
  to: 'bryan.gilbert@gmail.com',
  from: 'EdEHR <info@edehr.org>',
  subject: 'Your access code to the EdEHR',
  text:
    'Hi and welcome to the EdEHR.\n' +
    'EdEHR is an educational electronic health record (EHR) and laboratory information system (LIS)  that has been designed  in collaboration with educators for students.\n'+
    'Here is the access code you requested. Enter this on the EdEHR login page.\n' +
    '123456\n' +
    'If you have any questions then please reach out to us at info@edehr.org or visit our web site at https://edehr.org.\n' +
    'If you did not request this access code then you can ignore this message.',
  html:
    '<p> Hi and welcome to the EdEHR. </p>' +
    '<p>EdEHR is an educational electronic health record (EHR) and laboratory information system (LIS) that has been designed in collaboration with educators for students.</p>'+
    '<p> Here is the access code you requested. Enter this on the EdEHR login page.</p>' +
    '<h2>123456</h2>' +
    '<p>If you have any questions then please reach out to us at ' +
    '<a href="mailto:info@edehr.org">info@edehr.org</a> or visit our website at <a href="https://edehr.org">https://edehr.org</a>.</p>' +
    '<p>If you did not request this access code then you can ignore this message.</p>'
}

// msg = {
//   to: 'bryan.gilbert@gmail.com', // Change to your recipient
//   from: 'info@edehr.org', // Change to your verified sender
//   templateId: 'd-9666ea69404a46db8a48272fcfa6334e',
//   dynamicTemplateData: {
//     code: 123456
//   }
// }

const regex = /123456/g
msg.text = msg.text.replace(regex, '654321')
msg.html = msg.html.replace(regex, '654321')

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(JSON.stringify(error, null, 2))
  })


const ej0Seed = require('../../resources/erin-johns-seed-day0-mid.json')
const ej2Seed = require('../../resources/erin-johns-seed-day2-end.json')
const wound1Seed = require('../../resources/wound-case-1.json')

const _common =     '"Health Case Studies - Toward Closing the Healthcare Communication Gap" ' +
  'by:  Glynda Rees, Rob Kruger, Janet Morrison. '

const assignment1 = {
  title: 'Demonstration Assignment #1: COPD',
  description: 'This learning object/assignment is based on Case Study #1.\n' +
    ' In this case the patient has chronic obstructive pulmonary disease (COPD) with a history of asthma.' +
    ' The interprofessional collaboration is role modelled between nursing, medical radiology, ' +
    ' medical laboratory, and healthcare workers in the emergency department. ' +
    ' The focus for this assignment is to help the student complement their assessment and ' +
    ' monitoring skills with accurate and careful recording within an electronic health record system.',
}
const ej0SeedDef = {
  toolConsumer: '',
  name: 'Erin Johns - CS#1 - Day 0 19:30',
  description: _common +
    ' Based on Case Study #1.' +
    ' In this case the patient has chronic obstructive pulmonary disease (COPD) with a history of asthma.',
  version: '1',
  ehrData: ej0Seed.ehrData
}
const assignment2 = {
  description: 'This learning object/assignment is based on Case Study #2.\n ' +
    ' In this case the patient condition of COPD is exacerbation due to community acquired pneumonia. ' +
    ' The patient in this case study has a complicated health history.' +
    ' The focus for this assignment is help the student complement their assessment and monitoring ' +
    ' skills with accurate and careful recording within an electronic health record system.' +
    ' The EHR records take you to 18:00 of Day 1 of a four day stay.',
  title: 'Demonstration Assignment #2: Pneumonia'
}
const ej2SeedDef = {
  toolConsumer: '',
  name: 'Erin Johns - CS#2 - Day 1 18:00',
  description: _common +
    ' See: pages 31 up to 62 in Case Study #2 in https://pressbooks.bccampus.ca/healthcasestudies/ \n' +
    ' In this case the patient has chronic obstructive pulmonary disease (COPD) that is exacerbated due to community acquired pneumonia. ' +
    ' The patient in this case study has a complicated health history.' +
    ' This simulation follows the case study up to 18:00 of Day 1.  The case study continues through to discharge on Day 4. ',
  version: '1',
  ehrData: ej2Seed.ehrData
}
const assignment3 = {
  description: 'This is a demonstration assignment illustrating how wounds (or incisions) can be monitored within the EdEHR.\n' +
  '•\tWrite a Progress Note: (What is important for your colleagues to know about this patient\'s pressure injury? ' +
    'What do other Health Care Professionals need to know?)\n' +
  '•\tWrite a Referral Note to the Nursing Wound Care Clinician: What advice do you need from them?. ' +
  ' Do you want a care plan review?' +
  ' Do you have a concern about offloading when the patient is in different positions (e.g., lying in bed, sitting)?',
  title: 'Wound Monitoring Assignment'
}
const wound1SeedDef = {
  toolConsumer: '',
  name: 'George Henry - Age 75 - Wound Care',
  description: 'George Henry is in the hospital (Day 0 12:00) and a wound assessment order has been issued for a stage 4 pressure injury',
  version: '1',
  ehrData: wound1Seed.ehrData
}


export const activity1 = {
  learningObject: assignment1,
  seedDef: ej0SeedDef,
  resource_link_title: `Demo activity for "${assignment1.title}"`,
  resource_link_description: 'This demonstration activity uses the ' +
    ` "${assignment1.title}" learning object, located in this demo instance of the EdEHR.` +
    ' This activity\'s learning object is based on Case Study #1. ' +
    ' See: Case Study #1 in https://pressbooks.bccampus.ca/healthcasestudies/' +
    '',
}
export const activity2 = {
  learningObject: assignment2,
  seedDef: ej2SeedDef,
  resource_link_title: `Sample activity to launch "${assignment2.title}"`,
  resource_link_description: 'This demonstration activity uses the ' +
    ` "${assignment2.title}" learning object, located in this demo instance of the EdEHR.` +
    ' This activity\'s learning object is based on Case Study #2 at the end of the patient\'s stay. ' +
    ' See: Case Study #2 in https://pressbooks.bccampus.ca/healthcasestudies/' +
    ''
}

export const activity3 = {
  learningObject: assignment3,
  seedDef: wound1SeedDef,
  resource_link_title: `Sample activity to launch "${assignment3.title}"`,
  resource_link_description: 'This demonstration activity uses the ' +
    ` "${assignment3.title}" learning object, located in this demo instance of the EdEHR.` +
    ' This activity\'s learning object is a case study devised to illustrate the Integumentary and Wound Care module in the EdEHR ',
}
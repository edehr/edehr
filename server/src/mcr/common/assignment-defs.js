
const ej0Seed = require('../../resources/erin-johns-seed-day0-mid.json')
const ej2Seed = require('../../resources/erin-johns-seed-day2-end.json')
const wound1Seed = require('../../resources/wound-case-1.json')
const seed4 = require('../../resources/BonlanleAkosua_before.json')
const seed5 = require('../../resources/BonlanleAkosua_after.json')
const lobj_tooth = require('../../resources/lobj_erToothPainManagement.json')
const _common =     '"Health Case Studies - Toward Closing the Healthcare Communication Gap" ' +
  'by:  Glynda Rees, Rob Kruger, Janet Morrison. '

const assignment1 = {
  title: 'Erin Johns: COPD',
  description: 'This learning object/assignment is based on Case Study #1.\n' +
    ' In this case the patient has chronic obstructive pulmonary disease (COPD) with a history of asthma.' +
    ' The interprofessional collaboration is role modelled between nursing, medical radiology, ' +
    ' medical laboratory, and healthcare workers in the emergency department. ' +
    ' The focus for this assignment is to help the student complement their assessment and ' +
    ' monitoring skills with accurate and careful recording within an electronic health record system.',
}
const ej0SeedDef = {
  toolConsumer: '',
  name: 'Erin Johns - CS#1',
  description: _common +
    ' Based on Case Study #1.' +
    ' In this case the patient has chronic obstructive pulmonary disease (COPD) with a history of asthma.',
  version: '1',
  ehrData: ej0Seed.ehrData,
  tagList: ej0Seed.tagList,
  appType: 'EHR'
}
const assignment2 = {
  description: 'This learning object/assignment is based on Case Study #2.\n ' +
    ' In this case the patient condition of COPD is exacerbation due to community acquired pneumonia. ' +
    ' The patient in this case study has a complicated health history.' +
    ' The focus for this assignment is help the student complement their assessment and monitoring ' +
    ' skills with accurate and careful recording within an electronic health record system.' +
    ' The EHR records take you to 18:00 of Day 1 of a four day stay.',
  title: 'Erin Johns: COPD with pneumonia'
}
const ej2SeedDef = {
  toolConsumer: '',
  name: 'Erin Johns - CS#2',
  description: _common +
    ' See: pages 31 up to 62 in Case Study #2 in https://pressbooks.bccampus.ca/healthcasestudies/ \n' +
    ' In this case the patient has chronic obstructive pulmonary disease (COPD) that is exacerbated due to community acquired pneumonia. ' +
    ' The patient in this case study has a complicated health history.' +
    ' This simulation follows the case study up to 18:00 of Day 1.  The case study continues through to discharge on Day 4. ',
  version: '1',
  ehrData: ej2Seed.ehrData,
  tagList: ej2Seed.tagList,
  appType: 'EHR'
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
  ehrData: wound1Seed.ehrData,
  tagList: wound1Seed.tagList,
  appType: 'EHR'
}

const assignment4 = {
  description: 'This is a sample hematology lab ready for a student to begin. On the Med Lab Hematology page' +
    ' you will see a CBC analysis report. This is an automated report produced by an analyzer on a blood smear.' +
    ' (A blood smear is made by taking a drop of the patient\'s blood and placing it on a glass slide and then' +
    ' smearing it evenly and thinly so you can see the individual blood cells under a microscope.)',
  title: 'Hematology - Before'
}
const seedDef4 = {
  toolConsumer: '',
  name: 'Hematology - Before',
  description: 'Slide Number 18-212. Patient recently immigrated from Cameroon for work in Vancouver and requires bloodwork as part of her medical examination. ',
  version: '1',
  ehrData: seed4.ehrData,
  tagList: seed4.tagList,
  appType: 'LIS'
}

const assignment5 = {
  description: 'This is the same case study as the ' + assignment4.title + ' but now this case study' +
    ' contains the completed peripheral blood film (PBF) review. This is the detailed report completed' +
    ' by the technologist.  Note how this PBF contains many fields that are not normally seen in the ' +
    ' actual lab. These fields are present to help the student explore what they are learning and for' +
    ' the instructor to provide guidance.',
  title: 'Hematology - After'
}

const assignmentMP1 = {
  description: 'Search for any MRN between 3140001 and 3140009 to find your patient. Then explore the hematology and urinalysis pages. ',
  title: 'Multi patient test'
}

const seedDef5 = {
  toolConsumer: '',
  name: 'Hematology - After',
  description: 'Slide Number 18-212. Patient recently immigrated from Cameroon for work in Vancouver and requires bloodwork as part of her medical examination. ',
  version: '1',
  ehrData: seed5.ehrData,
  tagList: seed5.tagList,
  appType: 'LIS'
}
export const activity1 = {
  lObjDef: assignment1,
  seedDef: ej0SeedDef,
  resource_link_title: `${assignment1.title} - Activity`,
  resource_link_description: 'This demonstration activity is based on Case Study #1 from the open text book ' +
    'https://pressbooks.bccampus.ca/healthcasestudies/' +
    '. Your task is to expore the patient\'s current status, determine what interventions are required and record your recommendations in a nursing note (progress note).',
}
export const activity2 = {
  lObjDef: assignment2,
  seedDef: ej2SeedDef,
  resource_link_title: `${assignment2.title} - Activity`,
  resource_link_description: 'This demonstration activity is based on Case Study #2 from the open text book ' +
    'https://pressbooks.bccampus.ca/healthcasestudies/' +
    '. Your task is to expore the patient\'s current status, determine what interventions are required and record your recommendations in a nursing note (progress note).',
}

export const activity3 = {
  lObjDef: assignment3,
  seedDef: wound1SeedDef,
  resource_link_title: `${assignment3.title}`,
  resource_link_description: 'This demonstration activity is a case study devised to illustrate the Integumentary and Wound Care module in the EdEHR. ' +
    'Your task is to conduct and record a wound assessment. ',
}

export const activity4 = {
  lObjDef: assignment4,
  seedDef: seedDef4,
  resource_link_title: `${assignment4.title}`,
  resource_link_description: 'This demonstration activity illustrates the Hematology module in the EdEHR and shows a' +
    ' case study ready for the student to begin their lab exercise.  The student will exam a blood sample under' +
    ' a microscope and complete what is called a peripheral blood film (PBF) review.  The next activity shows the ' +
    ' completed PBF.',
}

export const activity5 = {
  lObjDef: assignment5,
  seedDef: seedDef5,
  resource_link_title: `${assignment5.title}`,
  resource_link_description: 'This activity complements the previous one by showing the completed PBF in the Med Lab Hematology module',
}

export const activity6 = {
  lObjDef: {
    title: lobj_tooth.name,
    description: lobj_tooth.description
  },
  seedDef: lobj_tooth.caseStudy,
  resource_link_title: lobj_tooth.name,
  resource_link_description: 'Explores pain management',
}

export const activityMP1 = {
  lObjDef: assignmentMP1,
  mPatientAppType: 'LIS',
  resource_link_title: `${assignmentMP1.title}`,
  resource_link_description: 'Experiment',
}

const medComplexLObj = require('../../resources/lobj_medicalClientWithComplexNeeds.json')
export const activityMedComplex = {
  lObjDef: {
    title: medComplexLObj.name,
    description: medComplexLObj.description
  },
  seedDef: medComplexLObj.caseStudy,
  resource_link_title: `${medComplexLObj.name}`,
  resource_link_description: 'Medical Client with Complex Needs',
}

const mentalHealthLObj = require('../../resources/lobj_MentalHealthSim.json')
export const activityMentalHealth = {
  lObjDef: {
    title: mentalHealthLObj.name,
    description: mentalHealthLObj.description
  },
  seedDef: mentalHealthLObj.caseStudy,
  resource_link_title: `${mentalHealthLObj.name}`,
  resource_link_description: 'Students will access the EdEHR to review the chart for Melissa Ashmann.',
}


const ehrOrientation = require('../../resources/lobj_pggnEhrOrientation.json')
export const activityEhrOrientation = {
  lObjDef: {
    title: ehrOrientation.name,
    description: ehrOrientation.description
  },
  seedDef: ehrOrientation.caseStudy,
  resource_link_title: `${ehrOrientation.name}`,
  resource_link_description: 'This activity is suitable as an introduction to EHR for students.',
}

const simExpo2023 = require('../../resources/lobj_simExpo2023.json')
export const activitySimExpo2023 = {
  lObjDef: {
    title: simExpo2023.name,
    description: simExpo2023.description
  },
  seedDef: simExpo2023.caseStudy,
  resource_link_title: `${simExpo2023.name}`,
  resource_link_description: 'This activity demonstrates the use of Escape Rooms as a means to orientate students to an EHR system.',
}

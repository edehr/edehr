export const Text = {
  // STUDENT_INTRO: 'Click the edit icon to fill in the form.'
  STUDENT_HAS_SUBMITTED: 'This assignment has been sent to your instructor for evaluation. It is no longer editable.',
  ASSIGNMENT_HAS_BEEN_EVALUATED: 'This assignment has been evaluated and those evaluation notes have been sent to the student',

  // API load errors
  MISSING_VISIT_ID: 'No visit id available',
  MISSING_API_URL: 'This system requires the URL to the API',

  SEED_MUST_HAVE_LICENSE: 'Seed data must have licence',
  SEED_MUST_HAVE_EHRDATA: 'Seed data must have ehrData',
  EHRDATA_CAN_NOT_BE_EMPTY:   'Seed data can not be empty',
  EHRDATA_HAS_INVALID_PAGES: (extras) => `Data contains invalid keys: ${extras}`,
  LICENSE_FULL_TEXT: 'This work is licensed under a Creative Commons Attribution 4.0 International License. See http://creativecommons.org/licenses/by/4.0/',
  LICENSE_TEXT: 'Creative Commons Attribution',
  LICENSE_MUST_BE: 'Seed licence must be Creative Commons Attribution'
}
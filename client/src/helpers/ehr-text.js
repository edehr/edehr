export const Text = {
  // STUDENT_INTRO: 'Click the edit icon to fill in the form.'
  ASSIGNMENT_HAS_BEEN_EVALUATED: 'This assignment has been evaluated and those evaluation notes have been sent to the student',
  EHRDATA_CAN_NOT_BE_EMPTY:   'Seed data can not be empty',
  EHRDATA_HAS_INVALID_PAGES: (extras) => `Data contains invalid keys: ${extras}`,
  LICENSE_FULL_TEXT: 'This work is licensed under a Creative Commons Attribution 4.0 International License. See http://creativecommons.org/licenses/by/4.0/',
  LICENSE_TEXT: 'Creative Commons Attribution',
  LICENSE_MUST_BE: 'Seed licence must be Creative Commons Attribution',
  // API load errors
  MISSING_VISIT_ID: 'No visit id available',
  MISSING_API_URL: 'This system requires the URL to the API',
  MISSING_AUTH_TOKEN: 'You need to be authenticated to view this',
  RETURN_TO: (lmsName) => `Return to ${lmsName}`,
  SEED_MUST_HAVE_LICENSE: 'Seed data must have licence',
  SEED_MUST_HAVE_EHRDATA: 'Seed data must have ehrData',
  SEND_FOR_EVAL: 'Send for evaluation',
  SEND_FOR_EVAL_TITLE: 'Send assignment to your instructor for evaluation',
  SEND_FOR_EVAL_BODY: 'You will not be able to edit your assignment after submission. Are you sure you want to send?',
  STUDENT_HAS_SUBMITTED: 'This assignment has been sent to your instructor for evaluation. It is no longer editable.',
}
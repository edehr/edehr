export const Text = {
  // STUDENT_INTRO: 'Click the edit icon to fill in the form.'
  ASSIGNMENT_HAS_BEEN_EVALUATED: 'This assignment has been evaluated and those evaluation notes have been sent to the student',
  EHRDATA_CAN_NOT_BE_EMPTY:   'Seed data can not be empty',
  EHRDATA_HAS_INVALID_PAGES: (extras) => `Data contains invalid keys: ${extras}`,
  LICENSE_FULL_TEXT: 'This work is licensed under a Creative Commons Attribution 4.0 International License. See http://creativecommons.org/licenses/by/4.0/',
  LICENSE_TEXT: 'Creative Commons Attribution',
  LICENSE_MUST_BE: 'Seed licence must be Creative Commons Attribution',
  FUNCTION_OUT_OF_CONTEXT: (f) => `Coding error using ${f} out of context`,
  // API load errors
  IS_INVALID_CHECKSET: (key) => `The checkset ${key} definition is missing the options property`,
  MISSING_VISIT_ID: 'No visit id available',
  MISSING_API_URL: 'This system requires the URL to the API',
  MISSING_AUTH_TOKEN: 'You need to be authenticated to view this',
  PARAMETERS_ERROR: 'Parameters Error', 
  RETURN_TO: (lmsName) => `Return to ${lmsName}`,
  SEED_MUST_HAVE_LICENSE: 'Seed data must have licence',
  SEED_MUST_HAVE_EHRDATA: 'Seed data must have ehrData',
  SEND_FOR_EVAL: 'Send for evaluation',
  SEND_FOR_EVAL_TITLE: 'Send assignment to your instructor for evaluation',
  SEND_FOR_EVAL_BODY: 'You will not be able to edit your assignment after submission. Are you sure you want to send?',
  STUDENT_HAS_SUBMITTED: 'This assignment has been sent to your instructor for evaluation. It is no longer editable.',
  // Authentication
  EXPIRED_REFRESH_TOKEN: 'Refresh token is expired',
  EXPIRED_TOKEN: (err) => `The token has expired. Please, try again! \n ${err}`,
  INVALID_TOKEN: (err) => `Invalid token \n ${err}`,
  REQUIRE_AUTHENTICATION: 'You need to be properly authenticated to do this',
  TOKEN_FETCHING_ERROR: 'Error when fetching token data',


  // Assignments constants
  MUST_HAVE_ASSIGNMENTS: 'ERROR the system should have assignments',
  UPDATE_ASSIGNMENT_ERROR: (err) => `error in update assignment ${err}`,
  GET_ASSIGNMENT_ERROR: (name, id) => `ERROR the could not get ${name} ${id}`,

  // Consumer constants
  UPDATE_CONSUMER_ERROR: (err) => `error in update consumer ${err}`,
  NO_CONSUMERS_ERROR: 'ERROR the system should have consumers',
  CANNOT_GET_CONSUMER_STORE: (name, id) => `ERROR the could not get ${name} ${id}`,


  // activityData 
  GET_ACTIVITY_DATA_ERROR: (name, id) => `ERROR the could not get ${name} ${id}`,
  CHANGE_ACTIVITY_ASSIGNMENT: 'Changing assignment for this activity.',
  GET_ACTIVITY_STORE_ERROR: (name, id) => `ERROR the could not get ${name} ${id}`,
  // userStore
  GET_USER_STORE_ERROR: (name, id) => `ERROR the could not get ${name} ${id}`,


  // ClassList constants
  EVAL_DONE: 'Evaluation is done. Let the student see the evaluation notes.',
  EVALUATED: 'Evaluated',
  NOT_SUBMITTED: 'Not submitted',
  SEND_BACK: 'Send evaluation to student',
  SEND_BACK_FOR: 'Send back for edits',
  SEND_BACK_TO: 'Send back to student for edits',
  SUBMITTED: 'Submitted and waiting for evaluation',
  TAKE_BACK: 'Take back from student',
  WANT_TO_EDIT: 'I want to edit the evaluation notes'
}
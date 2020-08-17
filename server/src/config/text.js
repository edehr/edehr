
// Some of the values here are used in the frontend. in AssignmentsListing.vue
// Please, in case of change, make sure to update the values there, as well.
export const Text = {
  APP_TITLE: 'Ed EHR',
  DEFAULT_SEED_NAME: 'Default data',
  DEFAULT_SEED_DESCRIPTION: 'This ehr data seed can not be modified. It is the default seed used when an assignment is created',
  SEED_NOT_ALLOWED_TO_EDIT_DEFAULT: 'Can not edit the default seed',
  SEED_IN_USE_NO_DELETE: 'Can not delete a seed that is used by any assignment',

  DEFAULT_ASSIGNMENT_DESCRIPTION: 'This assignment was automatically generated by an LTI request. Please update this description by editing the assignment in the EdEHR.',
  EdEHR_REQUIRES_RESOURCE: 'EdEHR requires the LTI tool consumer to provide a resource link id: resource_link_id',
  EdEHR_REQUIRES_USER: 'EdEHR requires the LTI tool consumer to provide a user_id.',
  EdEHR_REQUIRES_LTI: 'EdEHR requires the LTI tool consumer to use the LTI 1.0 or 1.1 specification.',
  EdEHR_REQUIRES_TYPE: (type) => `EdEHR requires the LTI tool consumer to send a basic lti launch request. lti_message_type = ${LTI_BASIC}`,
  EdEHR_REQUIRES_ROLE: 'EdEHR requires the LTI tool consumer to provide the user\'s roles. And these must be one of student, faculty, instructor or staff.',
  EdEHR_REQUIRES_KEY: 'Must provide consumer key',
  EdEHR_REQUIRES_CONTEXT: 'EdEHR requires the LTI tool consumer to provide a resource context_id',
  EdEHR_REQUIRES_CUSTOM : 'EdEHR requires the LTI tool consumer to provide a custom assignment paramater named "custom_assignment"',

  EdEHR_ASSIGNMENT_MISMATCH: (key, externalId) => `Could not locate activity with external id '${externalId}' for LTI consumer '${key}'. Ask your school to configure the EdEHR activity.`,

  EdEHR_MISSING_VISIT: (key, id) => `Missing visit while preparing to redirect for tool consumer ${key} - ${id}`,

  ASSIGNMENT_MISSING_SEED: (key, id) => `Could not find any EHR seed data object for tool consumer ${key} - ${id}`,
  ASSIGNMENT_REQUIRE_EXTERNAL_ID: (key, id) => `To create an assignment we need the externalId for tool consumer ${key} - ${id}`,
  ASSIGNMENT_REQUIRE_RESOURCE: (key, id) => `To create an assignment we need a resource_link_title for tool consumer ${key} - ${id}`,

  SYSTEM_REQUIRE_REQUEST_BODY: 'Must provide request body',
  SYSTEM_REQUIRE_KEY_AND_SECRET: 'Must provide both a key and secret to create a tool consumer',

  // AuthController
  EXPIRED_ADMIN: 'The password you\'ve entered is no longer valid. Please, try again. If the problem persists, please, contact an administrator',
  // the following message MUST contain the word expired for clients to correctly handle a browser refresh when an expired refresh token is in the URL
  EXPIRED_TOKEN: 'The token has expired. Please, try again!',
  INVALID_TOKEN: 'Invalid token. Please, check with an administrator if your password is still valid!',
  NOT_PERMITTED: 'You don\'t have permission to view this',
  REQUIRED_ADMIN: 'A password and the token are required',
  SYS_ERROR: 'There was a problem validating the token. If it persists, please contact an administrator',
  TOKEN_REQUIRED: 'A token is required',

  // Lookahead
  SEARCH_TERM_REQUIRED: 'Need to provide a search term for the medication lookup',
  SEARCH_TERM_TYPE_ERROR: 'Search term for the medication lookup need to be given a string',
  SEARCH_TERM_MIN_CHAR_LENGTH: 'Search term for the medication lookup needs to be at least 3 characters long',

  // API errors
  NO_FAVICON: 'No favicon',

  // Admin errors
  INVALID_CONSUMER_ID: (key) => `Invalid consumer id: ${key}`,
  UNSUPPORTED_CONSUMER_KEY: (key) => `Unsupported consumer key ${key}`,

  // Middleware errors
  TOO_MANY_REQUESTS_ERROR: 'Too many requests triggered. Please, try again later!',

  // Base errors
  INVALID_BASE_ID: (id) => `Invalid id: ${id}`
}


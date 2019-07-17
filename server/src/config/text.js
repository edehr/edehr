export const Text = {
  APP_TITLE: 'Ed EHR',
  DEFAULT_SEED_NAME: (key) => `Initial EHR assignment data for tool consumer key ${key}`,
  DEFAULT_SEED_DESCRIPTION: 'This ehr data seed can not be modified. It is the default seed used when an assignment is created',
  SEED_NOT_ALLOWED_TO_EDIT_DEFAULT: 'Can not edit the default seed',

  DEFAULT_ASSIGNMENT_DESCRIPTION: 'This is a automatically generated assignment.',
  EdEHR_REQUIRES_RESOURCE: 'EdEHR requires the LTI tool consumer to provide a resource link id: resource_link_id',
  EdEHR_REQUIRES_USER: 'EdEHR requires the LTI tool consumer to provide a user_id.',
  EdEHR_REQUIRES_LTI: 'EdEHR requires the LTI tool consumer to use the LTI 1.0 or 1.1 specification.',
  EdEHR_REQUIRES_TYPE: (type) => `EdEHR requires the LTI tool consumer to send a basic lti launch request. lti_message_type = ${LTI_BASIC}`,
  EdEHR_REQUIRES_ROLE: 'EdEHR requires the LTI tool consumer to provide the user\'s roles. And these must be one of student, faculty, instructor or staff.',
  EdEHR_REQUIRES_KEY: 'Must provide consumer key',
  EdEHR_REQUIRES_CONTEXT: 'EdEHR requires the LTI tool consumer to provide a resource context_id',
  EdEHR_REQUIRES_CUSTOM : 'EdEHR requires the LTI tool consumer to provide a custom assignment paramater named "custom_assignment"',

  EdEHR_ASSIGNMENT_MISMATCH: (key, id, externalId) => `Could not locate assignment for ${externalId}  tool: ${key} ${id}`,

  EdEHR_MISSING_VISIT: (key, id) => `Missing visit while preparing to redirect for tool consumer ${key} - ${id}`,

  ASSIGNMENT_MISSING_SEED: (key, id) => `Could not find any EHR seed data object for tool consumer ${key} - ${id}`,
  ASSIGNMENT_REQUIRE_EXTERNAL_ID: (key, id) => `To create an assignment we need the externalId for tool consumer ${key} - ${id}`,
  ASSIGNMENT_REQUIRE_RESOURCE: (key, id) => `To create an assignment we need a resource_link_title for tool consumer ${key} - ${id}`,

  SYSTEM_REQUIRE_REQUEST_BODY: 'Must provide request body',
  SYSTEM_REQUIRE_KEY_AND_SECRET: 'Must provide both a key and secret to create a tool consumer',
}


import { formatTimeStr } from '@/helpers/ehr-utils'

export const Text = {
  // STUDENT_INTRO: 'Click the edit icon to fill in the form.'
  EHRDATA_CAN_NOT_BE_EMPTY: 'Seed data can not be empty',
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
  SEED_MUST_HAVE_LICENSE: 'Seed data must have a valid licence',
  SEED_MUST_HAVE_EHRDATA: 'Seed data must have EHR data (the ehrData property)',
  SEND_FOR_EVAL: 'Send for evaluation',
  SEND_FOR_EVAL_TITLE: 'Send your work to your instructor for evaluation',
  SEND_FOR_EVAL_BODY: 'Please confirm that you want to submit your work for your instructor to review?  Once you press submit you will not be able to make any further changes to this activity.',
  IS_SUBMITTED: 'Status: closed for edits.',

  // Authentication
  EXPIRED_REFRESH_TOKEN: 'Refresh token is expired',
  EXPIRED_TOKEN: 'Your session has expired. Please return to your LMS and try again.',
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
  CHANGE_ACTIVITY_ASSIGNMENT: 'Changing learning object for this activity.',
  GET_ACTIVITY_STORE_ERROR: (id) => `ERROR Api failed to get activity ${id}`,
  // userStore
  GET_USER_STORE_ERROR: (name, id) => `ERROR the could not get ${name} ${id}`,


  // ClassList constants
  EVAL_DONE: 'Evaluation is done. Let the student see the evaluation notes.',
  NOT_SUBMITTED: 'Not submitted',
  SUBMITTED: 'Submitted',

  // class list per student actions
  EVALUATE_TIP: 'Evaluate the student\'s work. This button is enabled once the student\'s work is ' +
    'submitted',
  EVALUATE_BL: 'Evaluate',
  EVAL_IN_EHR_TIP: 'View and evaluate the student\'s work in the EHR context.',
  EVAL_IN_EHR_BL: 'Eval in EHR',
  EDIT_BLOCK_TIP: 'Prevent the student from working further',
  EDIT_BLOCK_BL: 'Block student editing',
  EDIT_OPEN_TIP: 'Allow the student to continue working',
  EDIT_OPEN_BL: 'Allow student editing',

  ACTIVITY_PAGE: {
    ACTIVITY_LABEL: 'LMS activity',
    ACTIVITY_MISSING: 'No learning object is linked to this activity.',
    COURSE_LABEL: 'Course',
    DESCRIPTION: 'Activity description',
    DATES: 'Dates',
    DATES_VAL: (c,l) => `Created on ${formatTimeStr(c)}. Last modified on ${formatTimeStr(l)} `,
    CASE_STUDY: 'Case study',
    CLASS_LIST: 'Class list',
    CLASS_LIST_BTN: 'Go to the class list',
    EMPTY_CLASSLIST: 'No student has yet attempted this activity.',
    EVALUATION: 'Feedback',
    SCRATCH: 'Student\'s notes',
    LOBJ: 'Learning object',
    GOTOLOBJ: 'Go to learning object',
    STATUS: 'Status',
    STUDENTS_VAL: (total, submitted) => `${total} students participating and ${submitted} students with submitted work`,
  },
  CLASS_LIST_PAGE: {
    EVALUATION: 'Evaluation notes',
    INDEX: 'Index',
    SUBMITTED: 'Submitted',
    STATUS: 'Status',
    LOBJ: 'Learning object'
  },
  CONSUMER_PAGE: {
    NAME: 'LMS Name',
    NAME_TIP: 'The name of the learning management system.',
    DESCRIPTION: 'LMS Description',
    KEY: 'Key',
    SECRET: 'Secret',
    TYPE: 'Type',
    FAMILY: 'LMS Product Family',
    VERSION_PRODUCT: 'LMS Product Version',
    VERSION_LTI: 'LTI Version',
    GUID: 'GUID',
    DATES: 'Dates',
    USERS: 'Users',
    USER_COUNT: 'User count',
    VISITS_TOTAL: 'Visit count',
    VISITS_STUDENTS: 'Student visit count',
    VISITS_INSTRUCTORS: 'Instructor visit count',
    ACTIVITIES: 'LMS activities',
    LOBJS: 'Learning objects',
    SEEDS: 'Case studies',

  },

  COURSE_PAGE: {
    DESCRIPTION: 'Description',
    ACTIVITY_STUDENT_SELECT_NAV: 'Click on an activity name to see details about the activity or click on the \'Go to EHR\' button to enter the health record application.',
    ACTIVITY_INSTRUCTOR_SELECT_NAV: 'Click on an activity name to see its details.',
    COURSE_SELECT_NAV: 'Click on a course name to see all of its activities and details.',
  },
  UPDATE_COURSE_ERROR: (err) => `error in update course ${err}`,
  COURSE_DIALOG: {
    TITLES: {
      edit: 'Edit course properties',
      view: 'View course properties'
    },
    BUTTON_TEXT: {
      EDIT: 'Edit course',
      VIEW: 'View properties'
    },
    ERRORS: {
      NAME_REQUIRED: 'Course name is required',
    },
    LABELS: {
      NAME: 'Course name',
      ID: 'LMS course id',
      TITLE: 'LMS course name',
      DESCRIPTION: 'Course description',
      LMS_DESCRIPTION: 'LMS course description',
      TYPE: 'LMS Type',
      CANCEL_BUTTON_VIEW_MODE: 'Close',
      CANCEL_BUTTON_EDIT_MODE: 'Cancel'
    },
    DESCRIPTIONS: {
      ID: 'Internal id of the course within the learning management system',
      TITLE: 'This is the course name that your learning management system provided.',
      DESCRIPTION: 'Course description.',
      LMS_DESCRIPTION: 'Course description as provided by the learning management system.',
      TYPE: 'Course type as provided by the learning management system.',
    }

  },

  FILES_PAGE: {
    P1: 'Files can be uploaded to the EdEHR server and later used within the EHR pages, where ever a normal file upload action would appear.  Say, for example, on the Laboratory Reports or the Medical Imaging pages.',
    P2: 'As a course designer (someone who creates course content) you will upload files here and then navigate to the EHR case study and edit the EHR content.  When you go to pages like Laboratory Reports and click to add a record you will be able to select a file from those listed below.',
    ADD_LABEL: 'Add EHR file',
    ADD_TITLE: 'Add EHR files',
    DIALOG_TEXT: (max) => `Upload data files that you want to use in EHR case studies. For example, upload x-rays, lab reports and other medical images or PDF files. Then when course content designers are working on a case study they can use these files in the EHR records. The maximum file size is ${max} and you can upload both images and PDF files.
`
  },
  INSTRUCTOR_TOOLS: {
    ACTIVITIES: 'Activity',
    GOTO_ACTIVITY: (name) => `Go to the activity ${name}`,
    GOTO_COURSE: (name) => `Go to the course ${name}`,
    ACTIVITIES_TOOLTIP: 'See the current activity and access the class list and learning object.',
    COURSES_LABEL: 'Courses', // match route names
    COURSES_NAV_LABEL: 'All Courses', // shown on sidebar
    COURSES_TOOLTIP: 'See all your courses and their activities',
    EXIT_LABEL: 'Exit to LMS',
    EXIT_TOOLTIP: 'Return to your school\'s learning management system',
    LMS_LABEL: 'LMS',
    LMS_TOOLTIP: 'Details about the learning management system (LMS) also called the LTI Consumer',
    LOBJ_LABEL: 'Learning objects',
    LOBJ_TOOLTIP: 'Learning objects provide the EHR content and set up the simulation',
    FILE_LABEL: 'Files for case studies',
    FILE_TOOLTIP: 'Files that can be used in EHR case studies.',
    SEED_LIST_LABEL: 'Case studies',
    SEED_LIST_TOOLTIP: 'EHR seeds (simulation case study data)',
    // CONFIGURATION SETTINGS
    DESIGNER_MODE_LABEL: 'Course designer mode',
    DESIGNER_MODE_TURN_OFF_TOOLTIP: 'Return to regular instructor role',
    DESIGNER_MODE_TURN_ON_TOOLTIP: 'Elevate your role to modify course content',
    // SHOW_BUTTON_LABELS: (state) => state ? 'Hide button labels' : 'Show button labels',
    // SHOW_BUTTON_LABELS_TOOLTIP: (state) => state ? 'Buttons show icons only' : 'Buttons show icons and text labels',
  },
  LOBJ_LIST_LINK_TEXT: 'Learning Objects List',
  LOBJ_ACTIONS: {
    COPY: 'Duplicate',
    COPY_TP: (name) => `Make a copy of ${name}`,
    DETAILS: 'Details',
    DETAILS_TP: 'See the details about this learning object',
    PROPERTIES: 'Properties',
    PROPERTIES_TP: 'Edit the properties of this learning object',
    DOWNLOAD: 'Download',
    DOWNLOAD_TP: 'Save a copy onto your computer',
    DELETE: 'Delete',
    DELETE_DISABLED: 'Can not delete a learning object that is in used by an activity',
    DELETE_CONFIRM: {
      TITLE: (name) => `Confirm deletion of ${name}`,
      DESCRIPTION: (name) => `Are you sure you want to delete ${name}?`,
    },
    DUPLICATE_CONFIRM: {
      TITLE: (name) => `Confirm duplication of ${name}`,
      DESCRIPTION: (name) => `Are you sure you want to duplicate ${name}?`,
    }

  },
  LOBJ_DIALOG: {
    TITLES: {
      edit: 'Edit learning object properties',
      create: 'Create a new learning object'
    },
    ERRORS: {
      ID_IN_USE: (id) => `The learning object id ${id} is already in use. The id is case insensitive so upper and lower case letters are consider the same.`,
      NAME_REQUIRED: 'Learning object name is required',
      SEED_REQUIRED: 'Must select a case study for this learning object.',
      INVALID_TIME: 'Please, enter a valid 24hrs time',
      CASE_STUDY_NAME: 'To create a case study you must provide a name.'
    },
    LABELS: {
      DESCRIPTION: 'Description',
      SEED_OBJ: 'Case study',
      SEED_OBJ_TP: '',
      LOBJ_ID: 'Learning object id',
      LOBJ_ID_TP: 'The id that links the LMS activity to the learning object'
    }
  },
  LOBJ_PAGE: {
    ACTIVITIES: 'Activities',
    LOBJ: 'Learning object',
    DESCRIPTION: 'Learning object description',
    DATES: 'Dates',
    SEED: 'Case study',
    USED: 'Used by',
    USED_VAL: (cnt) => `${cnt} activities`,
  },
  ROUTE_NAMES: {
    ADMIN: 'Admin login',
    ADMIN_DASH: 'Admin dashboard',
    ADMIN_ACTIVITIES: 'Admin activities',
    ADMIN_CONSUMER: 'Admin consumer',
    ADMIN_USERS: 'Admin users',
    ABOUT: 'About',
    ABOUT_EDEHR: 'About the EdEHR Project',
    ABOUT_SASS: 'About the edehr.org SaaS',
    ACTIVITY: 'Activity',
    CLASS_LIST: 'Class list',
    CONSUMER: 'Consumer',
    CONSUMERS: 'Consumers',
    COURSES: 'My activities',
    FILES: 'Case study files',
    LOBJS: 'Learning objects',
    LOBJ: 'Learning object',
    SEEDS: 'Case studies',
    SEED_VIEW: 'Case study',
    SEED_CONDENSED: 'Case study',
  },
  SEED_ACTIONS: {
    SEED_DEVELOPERS_MENU: 'Content developer tools',
    MENU_DETAILS: 'Case study details',
    MENU_DETAILS_TP: 'Return to the seed details page',
    MENU_RETURN: 'Return to list',
    MENU_RETURN_TP: 'Return to list of case studies',
    DETAILS:'Details',
    DETAILS_TP: 'See the details and modify the case study.',
    DOWNLOAD: 'Download',
    DOWNLOAD_TP: 'Save a copy on your computer',
    EDIT: 'Edit in EHR',
    EDIT_TP: 'Edit the EHR data in the EHR',
    PROPERTIES: 'Properties',
    PROPERTIES_TP: 'Edit properties or upload new EHR content',
    createLearningObjectTip:'Create a new learning object',
    VIEW: 'View data',
    VIEW_TP: 'View the EHR data',
  },
  SEEDS_PAGE: {
    FILTER_TP: 'Filter by EHR pages.',
    CREATE: 'Create new',
    CREATE_TP: 'Create a new seed / case study / simulation',
    DOWNLOAD: 'Download all',
    DOWNLOAD_TP: 'Save a copy on your computer'
  },
  SEED_VIEW_PAGE: {
    SEED_LABEL: 'Case study',
    DATES: 'Dates',
    DESCRIPTION: 'Case study description',
    CONTRIBUTORS: 'Contributors',
    LOBJ_LABEL: 'Learning objects',
    LOBJ_VALUE: (cnt) => `Used by ${cnt} learning object${ cnt === 1 ? cnt : 's' }`,
    STATS: 'EHR statistics',
    STATS_VALUE: (cnt) => `Contains ${cnt} EHR pages`,
    VERSION: 'Version',
  }
}

export const TextLearningObjects = {
  nameLabel: 'Learning object name',
  intro: 'The Learning Object defines the content for use by an activity. ',
  explain: 'The Learning Object defines the content that will be used by a number of activities. ' +
    'Each academic year instructors clone existing courses with their activities. ' +
    'These activities are linked to Learning Objects which, in turn, are linked to a case study ' +
    'and provides instructions about how to use the case study to achieve a set of learning objectives. ' +
    '<br/>' +
    'Note how one case study can be reused by any number of learning objects and ' +
    'how one Learing Object is reused by any number of activities',
  step2: 'Describe what the student needs to do with the content and what learning objectives they ought to accomplish. ' +
    '<br/>' +
    'After someone creates an activity in your learning management system they need to connect it to EdEHR content. ' +
    'The first time they click on the link they will see a list of Learning Objects to select from.  ' +
    'The description you enter here will help that user decide which content to use. ' +
    '<br/>' +
    'But also instructors may use this description in the activity\'s description property and ' +
    'that is the text the students will see when they come to do the assignment. '
}

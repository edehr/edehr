module.exports = function () {
  return [
  {
    'path': '/ehr',
    'routeName': 'patient',
    'label': 'Patient profile',
    'redirect': 'demographics',
    'menuIndex': '1'
  },
  {
    'path': '/ehr/patient',
    'routeName': 'demographics',
    'pageDataKey': 'demographics',
    'label': 'Demographics',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '2'
  },
  {
    'path': '/ehr/patient',
    'routeName': 'allergies',
    'pageDataKey': 'allergies',
    'label': 'Allergies',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '3'
  },
  {
    'path': '/ehr/patient',
    'routeName': 'history',
    'label': 'History',
    'redirect': 'medical',
    'generateComponent': 'yes',
    'menuIndex': '4'
  },
  {
    'path': '/ehr/patient/history',
    'routeName': 'medical',
    'pageDataKey': 'medical',
    'label': 'Medical history',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '5'
  },
  {
    'path': '/ehr/patient/history',
    'routeName': 'psychosocial',
    'pageDataKey': 'psychosocial',
    'label': 'Psychosocial history',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '6'
  },
  {
    'path': '/ehr/patient/history',
    'routeName': 'surgical',
    'pageDataKey': 'surgical',
    'label': 'Surgical history',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '7'
  },
  {
    'path': '/ehr/patient/history',
    'routeName': 'immunization',
    'pageDataKey': 'immunization',
    'label': 'Immunization history',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '8'
  },
  {
    'path': '/ehr/patient/history',
    'routeName': 'family-history',
    'pageDataKey': 'familyHistory',
    'label': 'Family history',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '9'
  },
  {
    'path': '/ehr/patient',
    'routeName': 'care-team',
    'pageDataKey': 'careTeam',
    'label': 'Care team',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '10'
  },
  {
    'path': '/ehr/patient',
    'routeName': 'past-appointments',
    'pageDataKey': 'pastAppointments',
    'label': 'Past appointments',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '11'
  },
  {
    'path': '/ehr',
    'routeName': 'current',
    'label': 'Current visit',
    'redirect': 'visit-details',
    'menuIndex': '12'
  },
  {
    'path': '/ehr/current',
    'routeName': 'visit-details',
    'pageDataKey': 'visit',
    'label': 'Admission, diagnosis, location',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '13'
  },
  {
    'path': '/ehr/current',
    'routeName': 'vital-signs',
    'pageDataKey': 'vitals',
    'label': 'Vital signs',
    'redirect': '',
    'generateComponent': 'custom',
    'menuIndex': '14'
  },
  {
    'path': '/ehr/current',
    'routeName': 'fluid-balance',
    'pageDataKey': 'fluidBalance',
    'label': 'Fluid balance',
    'generateComponent': 'yes',
    'menuIndex': '15'
  },
  {
    'path': '/ehr/current',
    'routeName': 'assessments',
    'label': 'Assessments',
    'redirect': 'neurological',
    'menuIndex': '16'
  },
  {
    'path': '/ehr/current/assessments',
    'routeName': 'neurological',
    'pageDataKey': 'neurological',
    'label': 'Neurological assessments',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '17'
  },
  {
    'path': '/ehr/current/assessments',
    'routeName': 'respiratory',
    'pageDataKey': 'respiratory',
    'label': 'Respiratory assessment',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '18'
  },
  {
    'path': '/ehr/current/assessments',
    'routeName': 'cardiovascular',
    'pageDataKey': 'cardiovascular',
    'label': 'Cardiovascular assessment',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '19'
  },
  {
    'path': '/ehr/current/assessments',
    'routeName': 'gastrointestinal',
    'pageDataKey': 'gastrointestinal',
    'label': 'Gastrointestinal assessment',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '20'
  },
  {
    'path': '/ehr/current/assessments',
    'routeName': 'genitourinary',
    'pageDataKey': 'genitourinary',
    'label': 'Genitourinary assessment',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '21'
  },
  {
    'path': '/ehr/current/assessments',
    'routeName': 'musculoskeletal',
    'pageDataKey': 'musculoskeletal',
    'label': 'Musculoskeletal assessment',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '22'
  },
  {
    'path': '/ehr/current/assessments',
    'routeName': 'pain',
    'pageDataKey': 'pain',
    'label': 'Pain assessment',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '23'
  },
  {
    'path': '/ehr/current/assessments',
    'routeName': 'biopsychosocial',
    'pageDataKey': 'biopsychosocial',
    'label': 'Biopsychosocial assessment',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '24'
  },
  {
    'path': '/ehr/current',
    'routeName': 'no-med',
    'label': 'Non-medication orders',
    'redirect': 'no-med-orders',
    'menuIndex': '26'
  },
  {
    'path': '/ehr/current/no-med',
    'routeName': 'no-med-orders',
    'pageDataKey': 'nonmedOrders',
    'label': 'Orders',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '27'
  },
  {
    'path': '/ehr/current/no-med',
    'routeName': 'referrals',
    'pageDataKey': 'referrals',
    'label': 'Referrals to other disciplines',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '28'
  },
  {
    'path': '/ehr/current/no-med',
    'routeName': 'lab-requisitions',
    'pageDataKey': 'labRequisitions',
    'label': 'Lab requisitions',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '29'
  },
  {
    'path': '/ehr/current',
    'routeName': 'meds',
    'pageDataKey': 'medicationOrders',
    'label': 'Medication orders',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '30'
  },
  {
    'path': '/ehr/current',
    'routeName': 'mar',
    'pageDataKey': 'medAdminRec',
    'label': 'Medication administration records',
    'redirect': '',
    'generateComponent': 'custom',
    'menuIndex': '31'
  },
  {
    'path': '/ehr/current',
    'routeName': 'discharge',
    'pageDataKey': 'dischargeSummary',
    'label': 'Discharge summary',
    'redirect': '',
    'generateComponent': 'custom',
    'menuIndex': '33'
  },
  {
    'path': '/ehr/current',
    'routeName': 'billing',
    'pageDataKey': 'billing',
    'label': 'Billing',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '34'
  },
  {
    'path': '/ehr',
    'routeName': 'chart',
    'label': 'Patient chart',
    'redirect': 'progress-notes',
    'menuIndex': '35'
  },
  {
    'path': '/ehr/chart',
    'routeName': 'progress-notes',
    'pageDataKey': 'progressNotes',
    'label': 'Progress notes',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '36'
  },
  {
    'path': '/ehr/chart',
    'routeName': 'care-plan',
    'pageDataKey': 'carePlan',
    'label': 'Interprofessional plan of care',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '37'
  },
  {
    'path': '/ehr/chart',
    'routeName': 'reports',
    'label': 'Reports and documents',
    'redirect': 'consults',
    'menuIndex': '38'
  },
  {
    'path': '/ehr/chart/reports',
    'routeName': 'consults',
    'pageDataKey': 'consults',
    'label': 'Consults',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '39'
  },
  {
    'path': '/ehr/chart/reports',
    'routeName': 'lab-reports',
    'pageDataKey': 'labResults',
    'label': 'Laboratory reports',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '40'
  },
  {
    'path': '/ehr/chart/reports',
    'routeName': 'diagnostic-reports',
    'pageDataKey': 'medicalImaging',
    'label': 'Medical imaging',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '41'
  },
  {
    'path': '/ehr/chart/reports',
    'routeName': 'operative-anaesthesia',
    'pageDataKey': 'operationReports',
    'label': 'Operative and anaesthesia records',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '42'
  },
  {
    'path': '/ehr',
    'routeName': 'external',
    'label': 'External resources',
    'redirect': 'assessment-tools',
    'menuIndex': '43'
  },
  {
    'path': '/ehr/external',
    'routeName': 'assessment-tools',
    'pageDataKey': 'assessmentTools',
    'label': 'Standardized assessment tools',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '44'
  },
  {
    'path': '/ehr/external',
    'routeName': 'code-lookup',
    'pageDataKey': 'codeLookup',
    'label': 'Code lookup',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '45'
  },
  {
    'path': '/ehr/external',
    'routeName': 'diagnostic-codes',
    'pageDataKey': 'diagnosticCodes',
    'label': 'Diagnostic codes (ICD-10)',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '46'
  },
  {
    'path': '/ehr/external',
    'routeName': 'intervention-codes',
    'pageDataKey': 'interventionCodes',
    'label': 'Intervention codes',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '47'
  },
  {
    'path': '/ehr/external',
    'routeName': 'case-mix-group',
    'pageDataKey': 'caseMixGroup',
    'label': 'Case mix group',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '48'
  },
  {
    'path': '/ehr/external',
    'routeName': 'test-page',
    'pageDataKey': 'testPage',
    'label': 'Test Page',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '49'
  },
  {
    'path': '/ehr/external',
    'routeName': 'test-table',
    'pageDataKey': 'testTable',
    'label': 'Test Table',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '50'
  },
  {
    'path': '/ehr/current/assessments',
    'routeName': 'integumentary-assessment',
    'pageDataKey': 'integumentaryAssessment',
    'label': 'Integumentary assessment',
    'redirect': '',
    'generateComponent': 'custom',
    'menuIndex': '51'
  },
  {
    'path': '/ehr/current',
    'routeName': 'discharge-plan',
    'pageDataKey': 'dishargeplan',
    'label': 'Discharge plan',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '32'
  },
  {
    'path': '/ehr',
    'routeName': 'med-lab',
    'label': 'Med Lab',
    'redirect': 'hematology',
    'menuIndex': '52'
  },
  {
    'path': '/ehr/med-lab',
    'routeName': 'hematology',
    'pageDataKey': 'hematology',
    'label': 'Med Lab Hematology',
    'redirect': '',
    'generateComponent': 'custom',
    'menuIndex': '56'
  },
  {
    'path': '/ehr/med-lab',
    'routeName': 'med-lab-chemistry',
    'pageDataKey': 'medLabChemistry',
    'label': 'Med Lab Chemistry',
    'redirect': '',
    'generateComponent': 'wip',
    'menuIndex': '57'
  },
  {
    'path': '/ehr/med-lab',
    'routeName': 'med-lab-urinalysis',
    'pageDataKey': 'medLabUrinalysis',
    'label': 'Med Lab Urinalysis',
    'generateComponent': 'yes',
    'menuIndex': '58'
  },
  {
    'path': '/ehr/current',
    'routeName': 'order-sets',
    'pageDataKey': 'orderSets',
    'label': 'Clinical Order Sets',
    'generateComponent': 'yes',
    'menuIndex': '25'
  },
  {
    'path': '/ehr/med-lab',
    'routeName': 'med-lab-demographics',
    'pageDataKey': 'medLabDemographics',
    'label': 'Med Lab Demographics',
    'generateComponent': 'yes',
    'menuIndex': '54'
  },
  {
    'path': '/ehr/med-lab',
    'routeName': 'med-lab-accession',
    'pageDataKey': 'medLabAccession',
    'label': 'Med Lab Accessioning',
    'generateComponent': 'yes',
    'menuIndex': '55'
  }
]
}
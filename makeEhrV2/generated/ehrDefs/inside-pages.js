module.exports = function () {
  return [
  {
    'path': '/ehr',
    'routeName': 'patient',
    'label': 'Patient profile',
    'redirect': 'demographics',
    'menuIndex': '1',
    'lis': 'yes',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/patient',
    'routeName': 'demographics',
    'pageDataKey': 'demographics',
    'label': 'Demographics',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '2',
    'lis': 'yes',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/patient',
    'routeName': 'allergies',
    'pageDataKey': 'allergies',
    'label': 'Allergies',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '3',
    'lis': 'yes',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/patient',
    'routeName': 'history',
    'label': 'History',
    'redirect': 'medical',
    'generateComponent': 'yes',
    'menuIndex': '4',
    'lis': 'yes',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/patient/history',
    'routeName': 'medical',
    'pageDataKey': 'medical',
    'label': 'Medical history',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '5',
    'lis': 'yes',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/patient/history',
    'routeName': 'psychosocial',
    'pageDataKey': 'psychosocial',
    'label': 'Psychosocial history',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '6',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/patient/history',
    'routeName': 'surgical',
    'pageDataKey': 'surgical',
    'label': 'Surgical history',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '7',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/patient/history',
    'routeName': 'immunization',
    'pageDataKey': 'immunization',
    'label': 'Immunization history',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '8',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/patient/history',
    'routeName': 'family-history',
    'pageDataKey': 'familyHistory',
    'label': 'Family history',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '9',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/patient',
    'routeName': 'care-team',
    'pageDataKey': 'careTeam',
    'label': 'Care team',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '10',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/patient',
    'routeName': 'past-appointments',
    'pageDataKey': 'pastAppointments',
    'label': 'Past appointments',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '11',
    'ehr': 'yes'
  },
  {
    'path': '/ehr',
    'routeName': 'current',
    'label': 'Current visit',
    'redirect': 'visit-details',
    'menuIndex': '12',
    'lis': 'yes',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/current',
    'routeName': 'visit-details',
    'pageDataKey': 'visit',
    'label': 'Admission, diagnosis, location',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '13',
    'lis': 'yes',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/current',
    'routeName': 'vital-signs',
    'pageDataKey': 'vitals',
    'label': 'Vital signs',
    'redirect': '',
    'generateComponent': 'custom',
    'menuIndex': '14',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/current',
    'routeName': 'fluid-balance',
    'pageDataKey': 'fluidBalance',
    'label': 'Fluid balance',
    'generateComponent': 'yes',
    'menuIndex': '15',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/current',
    'routeName': 'assessments',
    'label': 'Assessments',
    'redirect': 'neurological',
    'menuIndex': '16',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/current/assessments',
    'routeName': 'neurological',
    'pageDataKey': 'neurological',
    'label': 'Neurological assessments',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '17',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/current/assessments',
    'routeName': 'respiratory',
    'pageDataKey': 'respiratory',
    'label': 'Respiratory assessment',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '18',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/current/assessments',
    'routeName': 'cardiovascular',
    'pageDataKey': 'cardiovascular',
    'label': 'Cardiovascular assessment',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '19',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/current/assessments',
    'routeName': 'gastrointestinal',
    'pageDataKey': 'gastrointestinal',
    'label': 'Gastrointestinal assessment',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '20',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/current/assessments',
    'routeName': 'genitourinary',
    'pageDataKey': 'genitourinary',
    'label': 'Genitourinary assessment',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '21',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/current/assessments',
    'routeName': 'musculoskeletal',
    'pageDataKey': 'musculoskeletal',
    'label': 'Musculoskeletal assessment',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '22',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/current/assessments',
    'routeName': 'pain',
    'pageDataKey': 'pain',
    'label': 'Pain assessment',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '23',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/current/assessments',
    'routeName': 'biopsychosocial',
    'pageDataKey': 'biopsychosocial',
    'label': 'Biopsychosocial assessment',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '24',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/current',
    'routeName': 'orders',
    'label': 'Orders',
    'redirect': 'no-med-orders',
    'menuIndex': '26',
    'lis': 'yes',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/current/orders',
    'routeName': 'no-med-orders',
    'pageDataKey': 'nonmedOrders',
    'label': 'Non-medication orders',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '27',
    'lis': 'yes',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/current/orders',
    'routeName': 'referrals',
    'pageDataKey': 'referrals',
    'label': 'Referrals to other disciplines',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '28',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/current/orders',
    'routeName': 'lab-requisitions',
    'pageDataKey': 'labRequisitions',
    'label': 'Lab requisitions',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '29',
    'lis': 'yes',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/current/orders',
    'routeName': 'meds',
    'pageDataKey': 'medicationOrders',
    'label': 'Medication orders',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '30',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/current',
    'routeName': 'mar',
    'pageDataKey': 'medAdminRec',
    'label': 'Medication administration records',
    'redirect': '',
    'generateComponent': 'custom',
    'menuIndex': '31',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/current',
    'routeName': 'discharge',
    'pageDataKey': 'dischargeSummary',
    'label': 'Discharge summary',
    'redirect': '',
    'generateComponent': 'custom',
    'menuIndex': '33',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/current',
    'routeName': 'billing',
    'pageDataKey': 'billing',
    'label': 'Billing',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '34',
    'ehr': 'yes'
  },
  {
    'path': '/ehr',
    'routeName': 'chart',
    'label': 'Patient chart',
    'redirect': 'progress-notes',
    'menuIndex': '35',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/chart',
    'routeName': 'progress-notes',
    'pageDataKey': 'progressNotes',
    'label': 'Progress notes',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '36',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/chart',
    'routeName': 'care-plan',
    'pageDataKey': 'carePlan',
    'label': 'Interprofessional plan of care',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '37',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/chart',
    'routeName': 'reports',
    'label': 'Reports and documents',
    'redirect': 'consults',
    'menuIndex': '38',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/chart/reports',
    'routeName': 'consults',
    'pageDataKey': 'consults',
    'label': 'Consults',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '39',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/chart/reports',
    'routeName': 'lab-reports',
    'pageDataKey': 'labResults',
    'label': 'Laboratory reports',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '40',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/chart/reports',
    'routeName': 'diagnostic-reports',
    'pageDataKey': 'medicalImaging',
    'label': 'Medical imaging',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '41',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/chart/reports',
    'routeName': 'operative-anaesthesia',
    'pageDataKey': 'operationReports',
    'label': 'Operative and anaesthesia records',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '42',
    'ehr': 'yes'
  },
  {
    'path': '/ehr',
    'routeName': 'external',
    'label': 'External resources',
    'redirect': 'assessment-tools',
    'menuIndex': '43',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/external',
    'routeName': 'assessment-tools',
    'pageDataKey': 'assessmentTools',
    'label': 'Standardized assessment tools',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '44',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/external',
    'routeName': 'code-lookup',
    'pageDataKey': 'codeLookup',
    'label': 'Code lookup',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '45',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/external',
    'routeName': 'diagnostic-codes',
    'pageDataKey': 'diagnosticCodes',
    'label': 'Diagnostic codes (ICD-10)',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '46',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/external',
    'routeName': 'intervention-codes',
    'pageDataKey': 'interventionCodes',
    'label': 'Intervention codes',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '47',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/external',
    'routeName': 'case-mix-group',
    'pageDataKey': 'caseMixGroup',
    'label': 'Case mix group',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '48',
    'ehr': 'yes'
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
    'menuIndex': '51',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/current',
    'routeName': 'discharge-plan',
    'pageDataKey': 'dishargeplan',
    'label': 'Discharge plan',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '32',
    'ehr': 'yes'
  },
  {
    'path': '/ehr',
    'routeName': 'med-lab',
    'label': 'Med Lab',
    'redirect': 'hematology',
    'menuIndex': '52',
    'lis': 'yes'
  },
  {
    'path': '/ehr/med-lab',
    'routeName': 'hematology',
    'pageDataKey': 'hematology',
    'label': 'Med Lab Hematology',
    'redirect': '',
    'generateComponent': 'custom',
    'menuIndex': '56',
    'lis': 'yes'
  },
  {
    'path': '/ehr/med-lab',
    'routeName': 'med-lab-chemistry',
    'pageDataKey': 'medLabChemistry',
    'label': 'Med Lab Chemistry',
    'redirect': '',
    'generateComponent': 'yes',
    'menuIndex': '57',
    'lis': 'yes'
  },
  {
    'path': '/ehr/med-lab',
    'routeName': 'med-lab-urinalysis',
    'pageDataKey': 'medLabUrinalysis',
    'label': 'Med Lab Urinalysis',
    'generateComponent': 'yes',
    'menuIndex': '58',
    'lis': 'yes'
  },
  {
    'path': '/ehr/current/orders',
    'routeName': 'order-sets',
    'pageDataKey': 'orderSets',
    'label': 'Clinical Order Sets',
    'generateComponent': 'yes',
    'menuIndex': '25',
    'ehr': 'yes'
  },
  {
    'path': '/ehr/med-lab',
    'routeName': 'med-lab-accession',
    'pageDataKey': 'medLabAccession',
    'label': 'Med Lab Accessioning',
    'generateComponent': 'yes',
    'menuIndex': '55',
    'lis': 'yes'
  }
]
}
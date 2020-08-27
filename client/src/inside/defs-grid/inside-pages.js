module.exports = function () {
  return [
    {
      path: '/ehr',
      routeName: 'patient',
      label: 'Patient profile',
      redirect: 'demographics'
    },
    {
      path: '/ehr/patient',
      routeName: 'demographics',
      pageDataKey: 'demographics',
      label: 'Demographics',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/patient',
      routeName: 'allergies',
      pageDataKey: 'allergies',
      label: 'Allergies',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/patient',
      routeName: 'history',
      label: 'History',
      redirect: 'medical',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/patient/history',
      routeName: 'medical',
      pageDataKey: 'medical',
      label: 'Medical history',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/patient/history',
      routeName: 'psychosocial',
      pageDataKey: 'psychosocial',
      label: 'Psychosocial history',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/patient/history',
      routeName: 'surgical',
      pageDataKey: 'surgical',
      label: 'Surgical history',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/patient/history',
      routeName: 'immunization',
      pageDataKey: 'immunization',
      label: 'Immunization history',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/patient/history',
      routeName: 'family-history',
      pageDataKey: 'familyHistory',
      label: 'Family history',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/patient',
      routeName: 'care-team',
      pageDataKey: 'careTeam',
      label: 'Care team',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/patient',
      routeName: 'past-appointments',
      pageDataKey: 'pastAppointments',
      label: 'Past appointments',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr',
      routeName: 'current',
      label: 'Current visit',
      redirect: 'visit-details'
    },
    {
      path: '/ehr/current',
      routeName: 'visit-details',
      pageDataKey: 'visit',
      label: 'Visit details',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/current',
      routeName: 'vital-signs',
      pageDataKey: 'vitals',
      label: 'Vital signs',
      redirect: '',
      generateComponent: 'custom'
    },
    {
      path: '/ehr/current',
      routeName: 'fluid-balance',
      pageDataKey: 'fluidBalance',
      label: 'Fluid balance',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/current',
      routeName: 'assessments',
      label: 'Assessments',
      redirect: 'neurological'
    },
    {
      path: '/ehr/current/assessments',
      routeName: 'neurological',
      pageDataKey: 'neurological',
      label: 'Neurological assessment',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/current/assessments',
      routeName: 'respiratory',
      pageDataKey: 'respiratory',
      label: 'Respiratory assessment',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/current/assessments',
      routeName: 'cardiovascular',
      pageDataKey: 'cardiovascular',
      label: 'Cardiovascular assessment',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/current/assessments',
      routeName: 'gastrointestinal',
      pageDataKey: 'gastrointestinal',
      label: 'Gastrointestinal assessment',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/current/assessments',
      routeName: 'genitourinary',
      pageDataKey: 'genitourinary',
      label: 'Genitourinary assessment',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/current/assessments',
      routeName: 'musculoskeletal',
      pageDataKey: 'musculoskeletal',
      label: 'Musculoskeletal assessment',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/current/assessments',
      routeName: 'pain',
      pageDataKey: 'pain',
      label: 'Pain assessment',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/current/assessments',
      routeName: 'biopsychosocial',
      pageDataKey: 'biopsychosocial',
      label: 'Biopsychosocial assessment',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/current',
      routeName: 'no-med',
      label: 'Non-medication orders',
      redirect: 'no-med-orders'
    },
    {
      path: '/ehr/current/no-med',
      routeName: 'no-med-orders',
      pageDataKey: 'nonmedOrders',
      label: 'Orders',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/current/no-med',
      routeName: 'referrals',
      pageDataKey: 'referrals',
      label: 'Referrals to other disciplines',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/current/no-med',
      routeName: 'lab-requisitions',
      pageDataKey: 'labRequisitions',
      label: 'Lab requisitions',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/current',
      routeName: 'meds',
      pageDataKey: 'medicationOrders',
      label: 'Medication orders',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/current',
      routeName: 'mar',
      pageDataKey: 'medAdminRec',
      label: 'Medication administration records',
      redirect: '',
      generateComponent: 'custom'
    },
    {
      path: '/ehr/current',
      routeName: 'discharge',
      pageDataKey: 'dischargeSummary',
      label: 'Discharge summary',
      redirect: '',
      generateComponent: 'custom'
    },
    {
      path: '/ehr/current',
      routeName: 'billing',
      pageDataKey: 'billing',
      label: 'Billing',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr',
      routeName: 'chart',
      label: 'Patient chart',
      redirect: 'progress-notes'
    },
    {
      path: '/ehr/chart',
      routeName: 'progress-notes',
      pageDataKey: 'progressNotes',
      label: 'Progress notes',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/chart',
      routeName: 'care-plan',
      pageDataKey: 'carePlan',
      label: 'Interprofessional plan of care',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/chart',
      routeName: 'reports',
      label: 'Reports and documents',
      redirect: 'consults'
    },
    {
      path: '/ehr/chart/reports',
      routeName: 'consults',
      pageDataKey: 'consults',
      label: 'Consults',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/chart/reports',
      routeName: 'lab-reports',
      pageDataKey: 'labResults',
      label: 'Laboratory reports',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/chart/reports',
      routeName: 'diagnostic-reports',
      pageDataKey: 'medicalImaging',
      label: 'Medical imaging',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/chart/reports',
      routeName: 'operative-anaesthesia',
      pageDataKey: 'operationReports',
      label: 'Operative and anaesthesia records',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr',
      routeName: 'external',
      label: 'External resources',
      redirect: 'assessment-tools'
    },
    {
      path: '/ehr/external',
      routeName: 'assessment-tools',
      pageDataKey: 'assessmentTools',
      label: 'Standardized assessment tools',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/external',
      routeName: 'code-lookup',
      pageDataKey: 'codeLookup',
      label: 'Code lookup',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/external',
      routeName: 'diagnostic-codes',
      pageDataKey: 'diagnosticCodes',
      label: 'Diagnostic codes (ICD-10)',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/external',
      routeName: 'intervention-codes',
      pageDataKey: 'interventionCodes',
      label: 'Intervention codes',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/external',
      routeName: 'case-mix-group',
      pageDataKey: 'caseMixGroup',
      label: 'Case mix group',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/external',
      routeName: 'test-page',
      pageDataKey: 'testPage',
      label: 'Test Page',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/external',
      routeName: 'test-table',
      pageDataKey: 'testTable',
      label: 'Test Table',
      redirect: '',
      generateComponent: 'yes'
    },
    {
      path: '/ehr/current/assessments',
      routeName: 'integumentary-assessment',
      pageDataKey: 'integumentaryAssessment',
      label: 'Integumentary assessment',
      redirect: '',
      generateComponent: 'custom'
    }
  ]
}
export function inside () {

  return [
    {
      path: '/ehr/patient',
      name: 'patient',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Patient.vue'),
      meta: { layout: 'inside', label: 'Patient profile', topLevel: 'patient', zone: 'ehr' }
    },
    {
      path: '/ehr/patient/demographics',
      name: 'demographics',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Demographics.vue'),
      meta: { layout: 'inside', label: 'Demographics', topLevel: 'patient', zone: 'ehr' }
    },
    {
      path: '/ehr/patient/allergies',
      name: 'allergies',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Allergies.vue'),
      meta: { layout: 'inside', label: 'Allergies', topLevel: 'patient', zone: 'ehr' }
    },
    {
      path: '/ehr/patient/history',
      name: 'history',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/History.vue'),
      meta: { layout: 'inside', label: 'History', topLevel: 'patient', zone: 'ehr' }
    },
    {
      path: '/ehr/patient/history/medical',
      name: 'medical',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Medical.vue'),
      meta: { layout: 'inside', label: 'Medical history', topLevel: 'patient', zone: 'ehr' }
    },
    {
      path: '/ehr/patient/history/psychosocial',
      name: 'psychosocial',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Psychosocial.vue'),
      meta: { layout: 'inside', label: 'Psychosocial history', topLevel: 'patient', zone: 'ehr' }
    },
    {
      path: '/ehr/patient/history/surgical',
      name: 'surgical',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Surgical.vue'),
      meta: { layout: 'inside', label: 'Surgical history', topLevel: 'patient', zone: 'ehr' }
    },
    {
      path: '/ehr/patient/history/immunization',
      name: 'immunization',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Immunization.vue'),
      meta: { layout: 'inside', label: 'Immunization history', topLevel: 'patient', zone: 'ehr' }
    },
    {
      path: '/ehr/patient/history/family-history',
      name: 'family-history',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/FamilyHistory.vue'),
      meta: { layout: 'inside', label: 'Family history', topLevel: 'patient', zone: 'ehr' }
    },
    {
      path: '/ehr/patient/care-team',
      name: 'care-team',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/CareTeam.vue'),
      meta: { layout: 'inside', label: 'Care team', topLevel: 'patient', zone: 'ehr' }
    },
    {
      path: '/ehr/patient/past-appointments',
      name: 'past-appointments',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/PastAppointments.vue'),
      meta: { layout: 'inside', label: 'Past appointments', topLevel: 'patient', zone: 'ehr' }
    },
    {
      path: '/ehr/current',
      name: 'current',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Current.vue'),
      meta: { layout: 'inside', label: 'Current visit', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/current/visit-details',
      name: 'visit-details',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/VisitDetails.vue'),
      meta: { layout: 'inside', label: 'Admission, diagnosis, location', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/current/vital-signs',
      name: 'vital-signs',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/custom/VitalSigns.vue'),
      meta: { layout: 'inside', label: 'Vital signs', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/current/fluid-balance',
      name: 'fluid-balance',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/FluidBalance.vue'),
      meta: { layout: 'inside', label: 'Fluid balance', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/current/assessments',
      name: 'assessments',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Assessments.vue'),
      meta: { layout: 'inside', label: 'Assessments', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/current/assessments/neurological',
      name: 'neurological',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Neurological.vue'),
      meta: { layout: 'inside', label: 'Neurological assessment', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/current/assessments/respiratory',
      name: 'respiratory',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Respiratory.vue'),
      meta: { layout: 'inside', label: 'Respiratory assessment', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/current/assessments/cardiovascular',
      name: 'cardiovascular',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Cardiovascular.vue'),
      meta: { layout: 'inside', label: 'Cardiovascular assessment', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/current/assessments/gastrointestinal',
      name: 'gastrointestinal',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Gastrointestinal.vue'),
      meta: { layout: 'inside', label: 'Gastrointestinal assessment', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/current/assessments/genitourinary',
      name: 'genitourinary',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Genitourinary.vue'),
      meta: { layout: 'inside', label: 'Genitourinary assessment', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/current/assessments/musculoskeletal',
      name: 'musculoskeletal',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Musculoskeletal.vue'),
      meta: { layout: 'inside', label: 'Musculoskeletal assessment', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/current/assessments/pain',
      name: 'pain',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Pain.vue'),
      meta: { layout: 'inside', label: 'Pain assessment', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/current/assessments/biopsychosocial',
      name: 'biopsychosocial',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Biopsychosocial.vue'),
      meta: { layout: 'inside', label: 'Biopsychosocial assessment', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/current/no-med',
      name: 'no-med',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/NoMed.vue'),
      meta: { layout: 'inside', label: 'Non-medication orders', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/current/no-med/no-med-orders',
      name: 'no-med-orders',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/NoMedOrders.vue'),
      meta: { layout: 'inside', label: 'Orders', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/current/no-med/referrals',
      name: 'referrals',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Referrals.vue'),
      meta: { layout: 'inside', label: 'Referrals to other disciplines', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/current/no-med/lab-requisitions',
      name: 'lab-requisitions',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/LabRequisitions.vue'),
      meta: { layout: 'inside', label: 'Lab requisitions', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/current/meds',
      name: 'meds',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Meds.vue'),
      meta: { layout: 'inside', label: 'Medication orders', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/current/mar',
      name: 'mar',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/custom/Mar.vue'),
      meta: { layout: 'inside', label: 'Medication administration records', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/current/discharge',
      name: 'discharge',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/custom/Discharge.vue'),
      meta: { layout: 'inside', label: 'Discharge summary', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/current/billing',
      name: 'billing',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Billing.vue'),
      meta: { layout: 'inside', label: 'Billing', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/chart',
      name: 'chart',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Chart.vue'),
      meta: { layout: 'inside', label: 'Patient chart', topLevel: 'chart', zone: 'ehr' }
    },
    {
      path: '/ehr/chart/progress-notes',
      name: 'progress-notes',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/ProgressNotes.vue'),
      meta: { layout: 'inside', label: 'Progress notes', topLevel: 'chart', zone: 'ehr' }
    },
    {
      path: '/ehr/chart/care-plan',
      name: 'care-plan',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/CarePlan.vue'),
      meta: { layout: 'inside', label: 'Interprofessional plan of care', topLevel: 'chart', zone: 'ehr' }
    },
    {
      path: '/ehr/chart/reports',
      name: 'reports',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Reports.vue'),
      meta: { layout: 'inside', label: 'Reports and documents', topLevel: 'chart', zone: 'ehr' }
    },
    {
      path: '/ehr/chart/reports/consults',
      name: 'consults',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Consults.vue'),
      meta: { layout: 'inside', label: 'Consults', topLevel: 'chart', zone: 'ehr' }
    },
    {
      path: '/ehr/chart/reports/lab-reports',
      name: 'lab-reports',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/LabReports.vue'),
      meta: { layout: 'inside', label: 'Laboratory reports', topLevel: 'chart', zone: 'ehr' }
    },
    {
      path: '/ehr/chart/reports/diagnostic-reports',
      name: 'diagnostic-reports',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/DiagnosticReports.vue'),
      meta: { layout: 'inside', label: 'Medical imaging', topLevel: 'chart', zone: 'ehr' }
    },
    {
      path: '/ehr/chart/reports/operative-anaesthesia',
      name: 'operative-anaesthesia',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/OperativeAnaesthesia.vue'),
      meta: { layout: 'inside', label: 'Operative and anaesthesia records', topLevel: 'chart', zone: 'ehr' }
    },
    {
      path: '/ehr/external',
      name: 'external',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/External.vue'),
      meta: { layout: 'inside', label: 'External resources', topLevel: 'external', zone: 'ehr' }
    },
    {
      path: '/ehr/external/assessment-tools',
      name: 'assessment-tools',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/AssessmentTools.vue'),
      meta: { layout: 'inside', label: 'Standardized assessment tools', topLevel: 'external', zone: 'ehr' }
    },
    {
      path: '/ehr/external/code-lookup',
      name: 'code-lookup',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/CodeLookup.vue'),
      meta: { layout: 'inside', label: 'Code lookup', topLevel: 'external', zone: 'ehr' }
    },
    {
      path: '/ehr/external/diagnostic-codes',
      name: 'diagnostic-codes',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/DiagnosticCodes.vue'),
      meta: { layout: 'inside', label: 'Diagnostic codes (ICD-10)', topLevel: 'external', zone: 'ehr' }
    },
    {
      path: '/ehr/external/intervention-codes',
      name: 'intervention-codes',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/InterventionCodes.vue'),
      meta: { layout: 'inside', label: 'Intervention codes', topLevel: 'external', zone: 'ehr' }
    },
    {
      path: '/ehr/external/case-mix-group',
      name: 'case-mix-group',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/CaseMixGroup.vue'),
      meta: { layout: 'inside', label: 'Case mix group', topLevel: 'external', zone: 'ehr' }
    },
    {
      path: '/ehr/external/test-page',
      name: 'test-page',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/TestPage.vue'),
      meta: { layout: 'inside', label: 'Test Page', topLevel: 'external', zone: 'ehr' }
    },
    {
      path: '/ehr/external/test-table',
      name: 'test-table',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/TestTable.vue'),
      meta: { layout: 'inside', label: 'Test Table', topLevel: 'external', zone: 'ehr' }
    },
    {
      path: '/ehr/current/assessments/integumentary-assessment',
      name: 'integumentary-assessment',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/custom/IntegumentaryAssessment.vue'),
      meta: { layout: 'inside', label: 'Integumentary assessment', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/current/discharge-plan',
      name: 'discharge-plan',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/DischargePlan.vue'),
      meta: { layout: 'inside', label: 'Discharge plan', topLevel: 'current', zone: 'ehr' }
    },
    {
      path: '/ehr/med-lab',
      name: 'med-lab',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/MedLab.vue'),
      meta: { layout: 'inside', label: 'Med Lab', topLevel: 'med-lab', zone: 'ehr' }
    },
    {
      path: '/ehr/med-lab/hematology',
      name: 'hematology',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/custom/Hematology.vue'),
      meta: { layout: 'inside', label: 'Med Lab Hematology', topLevel: 'med-lab', zone: 'ehr' }
    },
    {
      path: '/ehr/med-lab/medLabChemistry',
      name: 'medLabChemistry',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/custom/UnderConstruction.vue'),
      meta: { layout: 'inside', label: 'Med Lab Chemistry', topLevel: 'med-lab', zone: 'ehr' }
    },
    {
      path: '/ehr/med-lab/med-lab-imaging',
      name: 'med-lab-imaging',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/custom/UnderConstruction.vue'),
      meta: { layout: 'inside', label: 'Med Lab Medical Imaging', topLevel: 'med-lab', zone: 'ehr' }
    }
  ]
}

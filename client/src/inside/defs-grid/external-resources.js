export default function () {
  return {
    assessmentTools: {
      pageDataKey: 'assessmentTools',
      pageTitle: 'Standardized assessment tools',
      pIndex: '35',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'admissions1_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'the-canadian-ed-triage-and-acuity-scale.gif',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Triage scale',
          fqn: 'assessmentTools.admissions1_1'
        },
        {
          elementKey: 'admissions2_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'patient-health-questionnaire.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Patient health questionaire',
          fqn: 'assessmentTools.admissions2_1'
        },
        {
          elementKey: 'admissions3_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'audit.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Alcohol consumption',
          fqn: 'assessmentTools.admissions3_1'
        },
        {
          elementKey: 'painAssessment1_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'opqrstuv.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'OPQRSTUV',
          fqn: 'assessmentTools.painAssessment1_1'
        },
        {
          elementKey: 'painAssessment2_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'numeric-rating-scale.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: '0-10 numeric rating scale',
          fqn: 'assessmentTools.painAssessment2_1'
        },
        {
          elementKey: 'neuroAssessment1_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'glasgow-coma-scale.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Glasgow coma scale',
          fqn: 'assessmentTools.neuroAssessment1_1'
        },
        {
          elementKey: 'neuroAssessment2_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'mini-mental-health-screen.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Mini mental state examination',
          fqn: 'assessmentTools.neuroAssessment2_1'
        },
        {
          elementKey: 'neuroAssessment3_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'richmond-agitation-sedation-scale-rass.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Richmond agitation scale',
          fqn: 'assessmentTools.neuroAssessment3_1'
        },
        {
          elementKey: 'fallRisk1_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'fall-risk-assessment-tool.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Fall assessment',
          fqn: 'assessmentTools.fallRisk1_1'
        },
        {
          elementKey: 'fallRisk2_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'risk-for-falls.png',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Risk for falls',
          fqn: 'assessmentTools.fallRisk2_1'
        },
        {
          elementKey: 'notes1_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'consultation-form.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Consult and referral note template',
          fqn: 'assessmentTools.notes1_1'
        },
        {
          elementKey: 'educational1_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'copd-assessment-test.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'COPD assessment',
          fqn: 'assessmentTools.educational1_1'
        },
        {
          elementKey: 'educational2_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'bristol-stool-chart.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Bristol stool chart',
          fqn: 'assessmentTools.educational2_1'
        },
        {
          elementKey: 'wound1_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'braden-scale.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Braden scale',
          fqn: 'assessmentTools.wound1_1'
        },
        {
          elementKey: 'medication1_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'best_possible_medication.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Best possible medication history',
          fqn: 'assessmentTools.medication1_1'
        }
      ],
      recHeader: true,
      generated: '2020-02-10T11:05:37-02:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group120',
              gIndex: '1',
              gChildren: [
                {
                  elementKey: 'admissions',
                  label: 'Admissions',
                  sgChildren: [
                    'admissions1_1',
                    'admissions2_1',
                    'admissions3_1'
                  ]
                },
                {
                  elementKey: 'painAssessment',
                  label: 'Pain assessment',
                  sgChildren: [
                    'painAssessment1_1',
                    'painAssessment2_1'
                  ]
                },
                {
                  elementKey: 'neuroAssessment',
                  label: 'Neurological assessment',
                  sgChildren: [
                    'neuroAssessment1_1',
                    'neuroAssessment2_1',
                    'neuroAssessment3_1'
                  ]
                },
                {
                  elementKey: 'fallRisk',
                  label: 'Falls risk',
                  sgChildren: [
                    'fallRisk1_1',
                    'fallRisk2_1'
                  ]
                },
                {
                  elementKey: 'notes',
                  label: 'Notes',
                  sgChildren: [
                    'notes1_1'
                  ]
                },
                {
                  elementKey: 'educational',
                  label: 'Educational resources',
                  sgChildren: [
                    'educational1_1',
                    'educational2_1'
                  ]
                },
                {
                  elementKey: 'wound',
                  label: 'Wound assessment',
                  sgChildren: [
                    'wound1_1'
                  ]
                },
                {
                  elementKey: 'medication',
                  label: 'Medication',
                  sgChildren: [
                    'medication1_1'
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    codeLookup: {
      pageDataKey: 'codeLookup',
      pageTitle: 'Code lookup',
      pIndex: '36',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'snomed',
          formIndex: '1',
          inputType: 'text',
          label: 'SnomedCT',
          fqn: 'codeLookup.snomed'
        },
        {
          elementKey: 'icf',
          formIndex: '1',
          inputType: 'text',
          label: 'ICB',
          fqn: 'codeLookup.icf'
        }
      ],
      recHeader: true,
      generated: '2020-02-10T11:05:37-02:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group121',
              gIndex: '1',
              gChildren: [
                'snomed',
                'icf'
              ]
            }
          ]
        }
      }
    },
    diagnosticCodes: {
      pageDataKey: 'diagnosticCodes',
      pageTitle: 'Diagnostic codes (ICD-10)',
      pIndex: '37',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'persona',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'diagnosticCodes.persona'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'diagnosticCodes.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'diagnosticCodes.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'diagnosticCodes.time'
        },
        {
          elementKey: 'icd10',
          assetBase: 'static-databases',
          assetName: 'icd-10-medical-diagnosis-codes.pdf',
          formIndex: '1',
          inputType: 'text',
          label: '<a href=\'/assets/static-databases/icd-10-medical-diagnosis-codes.pdf\' target=\'_blank\'>ICD-10 database</a>',
          tableColumn: '2',
          tableLabel: 'ICD-10',
          fqn: 'diagnosticCodes.icd10'
        },
        {
          elementKey: 'condition',
          dataCaseStudy: 'COPD-NL-History of smoking-NL-Hypertension',
          formIndex: '1',
          inputType: 'text',
          label: 'Condition',
          mandatory: 'yes',
          tableColumn: '3',
          tableLabel: 'Condition',
          fqn: 'diagnosticCodes.condition'
        },
        {
          elementKey: 'code',
          dataCaseStudy: 'J44.9-NL-Z86.42-NL-I10',
          formIndex: '1',
          inputType: 'text',
          label: 'Diagnosis code',
          mandatory: 'yes',
          tableColumn: '4',
          tableLabel: 'Diagnosis code',
          validation: 'Up to 8 characters long',
          fqn: 'diagnosticCodes.code'
        },
        {
          elementKey: 'type',
          dataCaseStudy: 'M-NL-3-NL-3',
          formIndex: '1',
          inputType: 'select',
          label: 'Diagnosis type',
          mandatory: 'yes',
          options: [
            {
              key: 'M',
              text: 'M'
            },
            {
              key: '1',
              text: '1'
            },
            {
              key: '2',
              text: '2'
            },
            {
              key: '3',
              text: '3'
            }
          ],
          tableColumn: '5',
          tableLabel: 'Diagnosis type',
          validation: '1 character',
          fqn: 'diagnosticCodes.type'
        },
        {
          elementKey: 'prefix',
          formIndex: '1',
          inputType: 'text',
          label: 'Prefix',
          mandatory: 'no',
          tableColumn: '6',
          tableLabel: 'Prefix',
          validation: '1 character',
          fqn: 'diagnosticCodes.prefix'
        },
        {
          elementKey: 'cluster',
          formIndex: '1',
          inputType: 'text',
          label: 'Diagnosis cluster',
          mandatory: 'no',
          tableColumn: '7',
          tableLabel: 'Diagnosis cluster',
          validation: '1 character',
          fqn: 'diagnosticCodes.cluster'
        }
      ],
      recHeader: true,
      generated: '2020-02-10T11:05:37-02:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a diagnostic code',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'persona',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'ICD-10',
              ehr_list_index: '2',
              items: [
                'icd10'
              ]
            },
            {
              label: 'Condition',
              ehr_list_index: '3',
              items: [
                'condition'
              ]
            },
            {
              label: 'Diagnosis code',
              ehr_list_index: '4',
              items: [
                'code'
              ]
            },
            {
              label: 'Diagnosis type',
              ehr_list_index: '5',
              items: [
                'type'
              ]
            },
            {
              label: 'Prefix',
              ehr_list_index: '6',
              items: [
                'prefix'
              ]
            },
            {
              label: 'Diagnosis cluster',
              ehr_list_index: '7',
              items: [
                'cluster'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a diagnostic code',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group122',
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'persona',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                elementKey: 'ehr_group123',
                gIndex: '2',
                gChildren: [
                  'icd10',
                  'condition',
                  'code',
                  'type',
                  'prefix',
                  'cluster'
                ]
              }
            ],
            ehr_data: {
              persona: '',
              profession: '',
              day: '',
              time: '',
              icd10: '',
              condition: '',
              code: '',
              type: '',
              prefix: '',
              cluster: ''
            }
          }
        }
      }
    },
    interventionCodes: {
      pageDataKey: 'interventionCodes',
      pageTitle: 'Intervention codes',
      pIndex: '38',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'persona',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'interventionCodes.persona'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'interventionCodes.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'interventionCodes.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'interventionCodes.time'
        },
        {
          elementKey: 'intervention',
          dataCaseStudy: '3.GY.10.VA-NL-2.GZ.21.EA',
          formIndex: '1',
          inputType: 'text',
          label: 'Intervention',
          tableColumn: '2',
          tableLabel: 'Intervention',
          fqn: 'interventionCodes.intervention'
        },
        {
          elementKey: 'status',
          formIndex: '1',
          inputType: 'text',
          label: 'Status',
          tableColumn: '3',
          tableLabel: 'Status',
          fqn: 'interventionCodes.status'
        },
        {
          elementKey: 'laterally',
          formIndex: '1',
          inputType: 'text',
          label: 'Laterally',
          tableColumn: '4',
          tableLabel: 'Laterally',
          fqn: 'interventionCodes.laterally'
        },
        {
          elementKey: 'extent',
          formIndex: '1',
          inputType: 'text',
          label: 'Extent',
          tableColumn: '5',
          tableLabel: 'Extent',
          fqn: 'interventionCodes.extent'
        }
      ],
      recHeader: true,
      generated: '2020-02-10T11:05:37-02:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add an intervention code',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'persona',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Intervention',
              ehr_list_index: '2',
              items: [
                'intervention'
              ]
            },
            {
              label: 'Status',
              ehr_list_index: '3',
              items: [
                'status'
              ]
            },
            {
              label: 'Laterally',
              ehr_list_index: '4',
              items: [
                'laterally'
              ]
            },
            {
              label: 'Extent',
              ehr_list_index: '5',
              items: [
                'extent'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add an intervention code',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group124',
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'persona',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                elementKey: 'ehr_group125',
                formCss: 'grid-left-to-right-1',
                gIndex: '2',
                gChildren: [
                  'intervention',
                  'status',
                  'laterally',
                  'extent'
                ]
              },
              {
                elementKey: 'label',
                label: 'Intervention code attributes',
                gIndex: '3',
                gChildren: []
              }
            ],
            ehr_data: {
              persona: '',
              profession: '',
              day: '',
              time: '',
              intervention: '',
              status: '',
              laterally: '',
              extent: ''
            }
          }
        }
      }
    },
    caseMixGroup: {
      pageDataKey: 'caseMixGroup',
      pageTitle: 'Case mix group',
      pIndex: '39',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'persona',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'caseMixGroup.persona'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'caseMixGroup.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'caseMixGroup.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'caseMixGroup.time'
        },
        {
          elementKey: 'clinicalCategory',
          formIndex: '1',
          inputType: 'text',
          label: 'Major clinical category',
          tableColumn: '2',
          tableLabel: 'Category',
          fqn: 'caseMixGroup.clinicalCategory'
        },
        {
          elementKey: 'caseMixNumber',
          formIndex: '1',
          inputType: 'text',
          label: 'Case mix number',
          tableColumn: '3',
          tableLabel: 'Case mix number',
          fqn: 'caseMixGroup.caseMixNumber'
        },
        {
          elementKey: 'resourceIntensity',
          formIndex: '1',
          inputType: 'text',
          label: 'Resource intensity weight',
          tableColumn: '4',
          tableLabel: 'Resource intensity weight',
          fqn: 'caseMixGroup.resourceIntensity'
        },
        {
          elementKey: 'expectedStay',
          formIndex: '1',
          inputType: 'text',
          label: 'Expected length of stay',
          tableColumn: '5',
          tableLabel: 'Expected length of stay',
          fqn: 'caseMixGroup.expectedStay'
        },
        {
          elementKey: 'analysis',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Analysis',
          tableColumn: '6',
          tableLabel: 'Analysis',
          fqn: 'caseMixGroup.analysis'
        }
      ],
      recHeader: true,
      generated: '2020-02-10T11:05:37-02:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a case mix group',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'persona',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Category',
              ehr_list_index: '2',
              items: [
                'clinicalCategory'
              ]
            },
            {
              label: 'Case mix number',
              ehr_list_index: '3',
              items: [
                'caseMixNumber'
              ]
            },
            {
              label: 'Resource intensity weight',
              ehr_list_index: '4',
              items: [
                'resourceIntensity'
              ]
            },
            {
              label: 'Expected length of stay',
              ehr_list_index: '5',
              items: [
                'expectedStay'
              ]
            },
            {
              label: 'Analysis',
              ehr_list_index: '6',
              items: [
                'analysis'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a case mix group',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group126',
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'persona',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                elementKey: 'ehr_group127',
                gIndex: '2',
                gChildren: [
                  'clinicalCategory',
                  'caseMixNumber',
                  'resourceIntensity',
                  'expectedStay',
                  'analysis'
                ]
              }
            ],
            ehr_data: {
              persona: '',
              profession: '',
              day: '',
              time: '',
              clinicalCategory: '',
              caseMixNumber: '',
              resourceIntensity: '',
              expectedStay: '',
              analysis: ''
            }
          }
        }
      }
    }
  }
}
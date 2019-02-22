/* eslint-disable quotes */
export default function() {
  return {
    assessmentTools: {
      pageTitle: 'Standardized assessment tools',
      pageDataKey: 'assessmentTools',
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: '1',
            elements: [
              {
                elementKey: 'admissions',
                fqn: 'assessmentTools.admissions',
                inputType: 'fieldset',
                label: 'Admissions',
                fieldset: 'admissions',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'assessmentTools',
                dataParent: 'assessmentTools',
                page: 'Standardized assessment tools',
                elements: [
                  {
                    fqn: 'assessmentTools.admissions.',
                    inputType: 'assetLink',
                    label: 'triage_scale.pdf (need this one)',
                    fieldset: 'admissions',
                    fsetRow: '1',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.admissions',
                    page: 'Standardized assessment tools',
                    assetName: 'triage_scale.pdf'
                  },
                  {
                    fqn: 'assessmentTools.admissions.',
                    inputType: 'assetLink',
                    label: 'patient_health_questionaire.pdf',
                    fieldset: 'admissions',
                    fsetRow: '2',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.admissions',
                    page: 'Standardized assessment tools',
                    assetName: 'patient_health_questionaire.pdf'
                  },
                  {
                    fqn: 'assessmentTools.admissions.',
                    inputType: 'assetLink',
                    label: 'alcohol_consumption.pdf',
                    fieldset: 'admissions',
                    fsetRow: '3',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.admissions',
                    page: 'Standardized assessment tools',
                    assetName: 'alcohol_consumption.pdf'
                  }
                ],
                containerType: 'fieldset',
                containerKey: 'admissions'
              },
              {
                elementKey: 'painAssessment',
                fqn: 'assessmentTools.painAssessment',
                inputType: 'fieldset',
                label: 'Pain Assessment',
                fieldset: 'painAssessment',
                formColumn: '2',
                formRow: '1',
                pageDataKey: 'assessmentTools',
                dataParent: 'assessmentTools',
                page: 'Standardized assessment tools',
                elements: [
                  {
                    fqn: 'assessmentTools.painAssessment.',
                    inputType: 'assetLink',
                    label: 'OPQRSTUV.pdf',
                    fieldset: 'painAssessment',
                    fsetRow: '1',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.painAssessment',
                    page: 'Standardized assessment tools',
                    assetName: 'OPQRSTUV.pdf'
                  },
                  {
                    fqn: 'assessmentTools.painAssessment.',
                    inputType: 'assetLink',
                    label: '0-10_numeric_rating_scale.pdf',
                    fieldset: 'painAssessment',
                    fsetRow: '2',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.painAssessment',
                    page: 'Standardized assessment tools',
                    assetName: '0-10_numeric_rating_scale.pdf'
                  },
                  {
                    elementKey: 'neurological',
                    fqn: 'assessmentTools.painAssessment.neurological',
                    inputType: 'assetLink',
                    label: 'Neurological assessment',
                    fieldset: 'neurological',
                    fsetRow: '3',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.painAssessment',
                    page: 'Standardized assessment tools'
                  },
                  {
                    fqn: 'assessmentTools.painAssessment.',
                    inputType: 'assetLink',
                    label: 'glasgow scale',
                    fieldset: 'neurological',
                    fsetRow: '4',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.painAssessment',
                    page: 'Standardized assessment tools',
                    assetBase: 'Standardized assessment tools',
                    assetName: 'Glasgow Coma Scale.pdf'
                  },
                  {
                    fqn: 'assessmentTools.painAssessment.',
                    inputType: 'assetLink',
                    label: 'mini_mental_state_examination.pdf',
                    fieldset: 'neurological',
                    fsetRow: '5',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.painAssessment',
                    page: 'Standardized assessment tools',
                    assetName: 'mini_mental_state_examination.pdf'
                  },
                  {
                    fqn: 'assessmentTools.painAssessment.',
                    inputType: 'assetLink',
                    label: 'richmond_agitation_scale.pdf',
                    fieldset: 'neurological',
                    fsetRow: '6',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.painAssessment',
                    page: 'Standardized assessment tools',
                    assetName: 'richmond_agitation_scale.pdf'
                  }
                ],
                containerType: 'fieldset',
                containerKey: 'painAssessment'
              },
              {
                elementKey: 'fallRisk',
                fqn: 'assessmentTools.fallRisk',
                inputType: 'fieldset',
                label: 'Falls risk',
                fieldset: 'fallRisk',
                formColumn: '3',
                formRow: '1',
                pageDataKey: 'assessmentTools',
                dataParent: 'assessmentTools',
                page: 'Standardized assessment tools',
                elements: [
                  {
                    fqn: 'assessmentTools.fallRisk.',
                    inputType: 'assetLink',
                    label: 'fall_and_injury_reduction.pdf',
                    fieldset: 'fallRisk',
                    fsetRow: '1',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.fallRisk',
                    page: 'Standardized assessment tools',
                    assetName: 'fall_and_injury_reduction.pdf'
                  },
                  {
                    fqn: 'assessmentTools.fallRisk.',
                    inputType: 'assetLink',
                    label: 'fall assessment',
                    fieldset: 'fallRisk',
                    fsetRow: '2',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.fallRisk',
                    page: 'Standardized assessment tools',
                    assetBase: 'Standardized assessment tools',
                    assetName: 'Fall Risk Assessment Tool.pdf'
                  },
                  {
                    fqn: 'assessmentTools.fallRisk.',
                    inputType: 'assetLink',
                    label: 'risk_for_falls.pdf  (need this one)',
                    fieldset: 'fallRisk',
                    fsetRow: '3',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.fallRisk',
                    page: 'Standardized assessment tools',
                    assetName: 'risk_for_falls.pdf'
                  }
                ],
                containerType: 'fieldset',
                containerKey: 'fallRisk'
              }
            ]
          },
          {
            formRow: '2',
            elements: [
              {
                elementKey: 'notes',
                fqn: 'assessmentTools.notes',
                inputType: 'fieldset',
                label: 'Notes',
                fieldset: 'notes',
                formColumn: '1',
                formRow: '2',
                pageDataKey: 'assessmentTools',
                dataParent: 'assessmentTools',
                page: 'Standardized assessment tools',
                elements: [
                  {
                    fqn: 'assessmentTools.notes.',
                    inputType: 'assetLink',
                    label: 'consult_note_template.pdf  (need this one)',
                    fieldset: 'notes',
                    fsetRow: '1',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.notes',
                    page: 'Standardized assessment tools',
                    assetName: 'consult_note_template.pdf'
                  },
                  {
                    fqn: 'assessmentTools.notes.',
                    inputType: 'assetLink',
                    label: 'referral_note_template.pdf',
                    fieldset: 'notes',
                    fsetRow: '2',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.notes',
                    page: 'Standardized assessment tools',
                    assetName: 'referral_note_template.pdf'
                  }
                ],
                containerType: 'fieldset',
                containerKey: 'notes'
              },
              {
                elementKey: 'educational',
                fqn: 'assessmentTools.educational',
                inputType: 'fieldset',
                label: 'Educational resources',
                fieldset: 'educational',
                formColumn: '2',
                formRow: '2',
                pageDataKey: 'assessmentTools',
                dataParent: 'assessmentTools',
                page: 'Standardized assessment tools',
                elements: [
                  {
                    fqn: 'assessmentTools.educational.',
                    inputType: 'assetLink',
                    label: 'COP assessment',
                    fieldset: 'educational',
                    fsetRow: '1',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.educational',
                    page: 'Standardized assessment tools',
                    assetBase: 'Standardized assessment tools',
                    assetName: 'COPD assessment test.pdf'
                  },
                  {
                    fqn: 'assessmentTools.educational.',
                    inputType: 'assetLink',
                    label: 'bristol_stool_chart.pdf',
                    fieldset: 'educational',
                    fsetRow: '2',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.educational',
                    page: 'Standardized assessment tools',
                    assetName: 'bristol_stool_chart.pdf'
                  }
                ],
                containerType: 'fieldset',
                containerKey: 'educational'
              },
              {
                elementKey: 'wound',
                fqn: 'assessmentTools.wound',
                inputType: 'fieldset',
                label: 'Wound assessment',
                fieldset: 'wound',
                formColumn: '3',
                formRow: '2',
                pageDataKey: 'assessmentTools',
                dataParent: 'assessmentTools',
                page: 'Standardized assessment tools',
                elements: [
                  {
                    fqn: 'assessmentTools.wound.',
                    inputType: 'assetLink',
                    label: 'braden_scale.pdf',
                    fieldset: 'wound',
                    fsetRow: '1',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.wound',
                    page: 'Standardized assessment tools',
                    assetName: 'braden_scale.pdf'
                  }
                ],
                containerType: 'fieldset',
                containerKey: 'wound'
              }
            ]
          },
          {
            formRow: '3',
            elements: [
              {
                elementKey: 'medication',
                fqn: 'assessmentTools.medication',
                inputType: 'fieldset',
                label: 'Medication',
                fieldset: 'medication',
                formColumn: '1',
                formRow: '3',
                pageDataKey: 'assessmentTools',
                dataParent: 'assessmentTools',
                page: 'Standardized assessment tools',
                elements: [
                  {
                    fqn: 'assessmentTools.medication.',
                    inputType: 'assetLink',
                    label: 'best_possible_medication_history.pdf',
                    fieldset: 'medication',
                    fsetRow: '1',
                    fsetCol: '1',
                    formColumn: '.',
                    formRow: '.',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.medication',
                    page: 'Standardized assessment tools',
                    assetName: 'best_possible_medication_history.pdf'
                  }
                ],
                containerType: 'fieldset',
                containerKey: 'medication'
              }
            ]
          }
        ],
        columnsCount: 3
      },
      pageData: {}
    },
    codeLookup: {
      pageTitle: 'Code lookup',
      pageDataKey: 'codeLookup',
      hasForm: true,
      page_form: {
        rows: [],
        columnsCount: 0
      },
      pageData: {}
    },
    diagnosticCodes: {
      pageTitle: 'Diagnostic codes (ICD-10)',
      pageDataKey: 'diagnosticCodes',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add diagnostic code',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'diagnosticCodes.table.name',
              inputType: 'text',
              label: 'Name',
              tableColumn: '1',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'diagnosticCodes',
              dataParent: 'diagnosticCodes.table',
              page: 'Diagnostic codes',
              assetBase: '?',
              tableKey: 'table'
            },
            {
              elementKey: 'profession',
              fqn: 'diagnosticCodes.table.profession',
              inputType: 'text',
              label: 'Profession',
              tableColumn: '2',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'diagnosticCodes',
              dataParent: 'diagnosticCodes.table',
              page: 'Diagnostic codes',
              assetBase: '?',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'diagnosticCodes.table.day',
              inputType: 'day',
              label: 'Day',
              tableColumn: '3',
              formCss: 'user_day',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'diagnosticCodes',
              dataParent: 'diagnosticCodes.table',
              page: 'Diagnostic codes',
              assetBase: '?',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'diagnosticCodes.table.time',
              inputType: 'time',
              label: 'Time',
              tableColumn: '4',
              formCss: 'user_time',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'diagnosticCodes',
              dataParent: 'diagnosticCodes.table',
              page: 'Diagnostic codes',
              assetBase: '?',
              tableKey: 'table'
            },
            {
              elementKey: 'condition',
              fqn: 'diagnosticCodes.table.condition',
              inputType: 'text',
              label: 'Condition',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'diagnosticCodes',
              dataParent: 'diagnosticCodes.table',
              page: 'Diagnostic codes',
              mandatory: 'yes',
              tableKey: 'table'
            },
            {
              elementKey: 'code',
              fqn: 'diagnosticCodes.table.code',
              inputType: 'text',
              label: 'Diagnosis code',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'diagnosticCodes',
              dataParent: 'diagnosticCodes.table',
              page: 'Diagnostic codes',
              mandatory: 'yes',
              validation: 'Up to 8 characters long',
              tableKey: 'table'
            },
            {
              elementKey: 'type',
              fqn: 'diagnosticCodes.table.type',
              inputType: 'select',
              label: 'Diagnosis type',
              formColumn: '3',
              formRow: '2',
              pageDataKey: 'diagnosticCodes',
              dataParent: 'diagnosticCodes.table',
              page: 'Diagnostic codes',
              mandatory: 'yes',
              validation: '1 character',
              options: [
                {
                  text: 'M'
                },
                {
                  text: '1'
                },
                {
                  text: '2'
                },
                {
                  text: '3'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'prefix',
              fqn: 'diagnosticCodes.table.prefix',
              inputType: 'text',
              label: 'Prefix',
              formColumn: '4',
              formRow: '2',
              pageDataKey: 'diagnosticCodes',
              dataParent: 'diagnosticCodes.table',
              page: 'Diagnostic codes',
              mandatory: 'no',
              validation: '1 character',
              tableKey: 'table'
            },
            {
              elementKey: 'cluster',
              fqn: 'diagnosticCodes.table.cluster',
              inputType: 'text',
              label: 'Diagnosis cluster',
              formColumn: '5',
              formRow: '2',
              pageDataKey: 'diagnosticCodes',
              dataParent: 'diagnosticCodes.table',
              page: 'Diagnostic codes',
              mandatory: 'no',
              validation: '1 character',
              tableKey: 'table'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'diagnosticCodes.table.name',
                    inputType: 'text',
                    label: 'Name',
                    tableColumn: '1',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'diagnosticCodes',
                    dataParent: 'diagnosticCodes.table',
                    page: 'Diagnostic codes',
                    assetBase: '?',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'diagnosticCodes.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableColumn: '2',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'diagnosticCodes',
                    dataParent: 'diagnosticCodes.table',
                    page: 'Diagnostic codes',
                    assetBase: '?',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'diagnosticCodes.table.day',
                    inputType: 'day',
                    label: 'Day',
                    tableColumn: '3',
                    formCss: 'user_day',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'diagnosticCodes',
                    dataParent: 'diagnosticCodes.table',
                    page: 'Diagnostic codes',
                    assetBase: '?',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'diagnosticCodes.table.time',
                    inputType: 'time',
                    label: 'Time',
                    tableColumn: '4',
                    formCss: 'user_time',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'diagnosticCodes',
                    dataParent: 'diagnosticCodes.table',
                    page: 'Diagnostic codes',
                    assetBase: '?',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'condition',
                    fqn: 'diagnosticCodes.table.condition',
                    inputType: 'text',
                    label: 'Condition',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'diagnosticCodes',
                    dataParent: 'diagnosticCodes.table',
                    page: 'Diagnostic codes',
                    mandatory: 'yes',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'code',
                    fqn: 'diagnosticCodes.table.code',
                    inputType: 'text',
                    label: 'Diagnosis code',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'diagnosticCodes',
                    dataParent: 'diagnosticCodes.table',
                    page: 'Diagnostic codes',
                    mandatory: 'yes',
                    validation: 'Up to 8 characters long',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'type',
                    fqn: 'diagnosticCodes.table.type',
                    inputType: 'select',
                    label: 'Diagnosis type',
                    formColumn: '3',
                    formRow: '2',
                    pageDataKey: 'diagnosticCodes',
                    dataParent: 'diagnosticCodes.table',
                    page: 'Diagnostic codes',
                    mandatory: 'yes',
                    validation: '1 character',
                    options: [
                      {
                        text: 'M'
                      },
                      {
                        text: '1'
                      },
                      {
                        text: '2'
                      },
                      {
                        text: '3'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'prefix',
                    fqn: 'diagnosticCodes.table.prefix',
                    inputType: 'text',
                    label: 'Prefix',
                    formColumn: '4',
                    formRow: '2',
                    pageDataKey: 'diagnosticCodes',
                    dataParent: 'diagnosticCodes.table',
                    page: 'Diagnostic codes',
                    mandatory: 'no',
                    validation: '1 character',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'cluster',
                    fqn: 'diagnosticCodes.table.cluster',
                    inputType: 'text',
                    label: 'Diagnosis cluster',
                    formColumn: '5',
                    formRow: '2',
                    pageDataKey: 'diagnosticCodes',
                    dataParent: 'diagnosticCodes.table',
                    page: 'Diagnostic codes',
                    mandatory: 'no',
                    validation: '1 character',
                    tableKey: 'table'
                  }
                ]
              }
            ],
            columnsCount: 5
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    interventionCodes: {
      pageTitle: 'Intervention codes',
      pageDataKey: 'interventionCodes',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add intervention code',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'interventionCodes.table.name',
              inputType: 'text',
              label: 'Name',
              tableColumn: '1',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'interventionCodes',
              dataParent: 'interventionCodes.table',
              page: 'Intervention codes',
              assetBase: '?',
              tableKey: 'table'
            },
            {
              elementKey: 'profession',
              fqn: 'interventionCodes.table.profession',
              inputType: 'text',
              label: 'Profession',
              tableColumn: '2',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'interventionCodes',
              dataParent: 'interventionCodes.table',
              page: 'Intervention codes',
              assetBase: '?',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'interventionCodes.table.day',
              inputType: 'day',
              label: 'Day',
              tableColumn: '3',
              formCss: 'user_day',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'interventionCodes',
              dataParent: 'interventionCodes.table',
              page: 'Intervention codes',
              assetBase: '?',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'interventionCodes.table.time',
              inputType: 'time',
              label: 'Time',
              tableColumn: '4',
              formCss: 'user_time',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'interventionCodes',
              dataParent: 'interventionCodes.table',
              page: 'Intervention codes',
              assetBase: '?',
              tableKey: 'table'
            },
            {
              elementKey: 'spacer',
              fqn: 'interventionCodes.table.spacer',
              inputType: 'spacer',
              formCss: 'width-70',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'interventionCodes',
              dataParent: 'interventionCodes.table',
              page: 'Intervention codes',
              assetBase: '?',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'label',
              fqn: 'interventionCodes.table.label',
              inputType: 'form-label',
              label: 'Intervention code attributes',
              formCss: 'width-30 bold-text',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'interventionCodes',
              dataParent: 'interventionCodes.table',
              page: 'Intervention codes',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'intervention',
              fqn: 'interventionCodes.table.intervention',
              inputType: 'text',
              label: 'Intervention search',
              tableColumn: '5',
              formCss: 'width-70',
              formColumn: '1',
              formRow: '3',
              pageDataKey: 'interventionCodes',
              dataParent: 'interventionCodes.table',
              page: 'Intervention codes',
              tableKey: 'table'
            },
            {
              elementKey: 'status',
              fqn: 'interventionCodes.table.status',
              inputType: 'text',
              label: 'Status',
              tableColumn: '6',
              formCss: 'width-10',
              formColumn: '2',
              formRow: '3',
              pageDataKey: 'interventionCodes',
              dataParent: 'interventionCodes.table',
              page: 'Intervention codes',
              tableKey: 'table'
            },
            {
              elementKey: 'laterally',
              fqn: 'interventionCodes.table.laterally',
              inputType: 'text',
              label: 'Laterally',
              tableColumn: '7',
              formCss: 'width-10',
              formColumn: '3',
              formRow: '3',
              pageDataKey: 'interventionCodes',
              dataParent: 'interventionCodes.table',
              page: 'Intervention codes',
              tableKey: 'table'
            },
            {
              elementKey: 'extent',
              fqn: 'interventionCodes.table.extent',
              inputType: 'text',
              label: 'Extent',
              tableColumn: '8',
              formCss: 'width-10',
              formColumn: '4',
              formRow: '3',
              pageDataKey: 'interventionCodes',
              dataParent: 'interventionCodes.table',
              page: 'Intervention codes',
              tableKey: 'table'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'interventionCodes.table.name',
                    inputType: 'text',
                    label: 'Name',
                    tableColumn: '1',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'interventionCodes',
                    dataParent: 'interventionCodes.table',
                    page: 'Intervention codes',
                    assetBase: '?',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'interventionCodes.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableColumn: '2',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'interventionCodes',
                    dataParent: 'interventionCodes.table',
                    page: 'Intervention codes',
                    assetBase: '?',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'interventionCodes.table.day',
                    inputType: 'day',
                    label: 'Day',
                    tableColumn: '3',
                    formCss: 'user_day',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'interventionCodes',
                    dataParent: 'interventionCodes.table',
                    page: 'Intervention codes',
                    assetBase: '?',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'interventionCodes.table.time',
                    inputType: 'time',
                    label: 'Time',
                    tableColumn: '4',
                    formCss: 'user_time',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'interventionCodes',
                    dataParent: 'interventionCodes.table',
                    page: 'Intervention codes',
                    assetBase: '?',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'spacer',
                    fqn: 'interventionCodes.table.spacer',
                    inputType: 'spacer',
                    formCss: 'width-70',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'interventionCodes',
                    dataParent: 'interventionCodes.table',
                    page: 'Intervention codes',
                    assetBase: '?',
                    tableCss: 'hide-table-element',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'label',
                    fqn: 'interventionCodes.table.label',
                    inputType: 'form-label',
                    label: 'Intervention code attributes',
                    formCss: 'width-30 bold-text',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'interventionCodes',
                    dataParent: 'interventionCodes.table',
                    page: 'Intervention codes',
                    tableCss: 'hide-table-element',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'intervention',
                    fqn: 'interventionCodes.table.intervention',
                    inputType: 'text',
                    label: 'Intervention search',
                    tableColumn: '5',
                    formCss: 'width-70',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'interventionCodes',
                    dataParent: 'interventionCodes.table',
                    page: 'Intervention codes',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'status',
                    fqn: 'interventionCodes.table.status',
                    inputType: 'text',
                    label: 'Status',
                    tableColumn: '6',
                    formCss: 'width-10',
                    formColumn: '2',
                    formRow: '3',
                    pageDataKey: 'interventionCodes',
                    dataParent: 'interventionCodes.table',
                    page: 'Intervention codes',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'laterally',
                    fqn: 'interventionCodes.table.laterally',
                    inputType: 'text',
                    label: 'Laterally',
                    tableColumn: '7',
                    formCss: 'width-10',
                    formColumn: '3',
                    formRow: '3',
                    pageDataKey: 'interventionCodes',
                    dataParent: 'interventionCodes.table',
                    page: 'Intervention codes',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'extent',
                    fqn: 'interventionCodes.table.extent',
                    inputType: 'text',
                    label: 'Extent',
                    tableColumn: '8',
                    formCss: 'width-10',
                    formColumn: '4',
                    formRow: '3',
                    pageDataKey: 'interventionCodes',
                    dataParent: 'interventionCodes.table',
                    page: 'Intervention codes',
                    tableKey: 'table'
                  }
                ]
              }
            ],
            columnsCount: 4
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    careMixGroup: {
      pageTitle: 'Care mix group',
      pageDataKey: 'careMixGroup',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add care mix group',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'careMixGroup.table.name',
              inputType: 'text',
              label: 'Name',
              tableColumn: '1',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'careMixGroup',
              dataParent: 'careMixGroup.table',
              page: 'Care mix group',
              assetBase: '?',
              tableKey: 'table'
            },
            {
              elementKey: 'profession',
              fqn: 'careMixGroup.table.profession',
              inputType: 'text',
              label: 'Profession',
              tableColumn: '2',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'careMixGroup',
              dataParent: 'careMixGroup.table',
              page: 'Care mix group',
              assetBase: '?',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'careMixGroup.table.day',
              inputType: 'day',
              label: 'Day',
              tableColumn: '3',
              formCss: 'user_day',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'careMixGroup',
              dataParent: 'careMixGroup.table',
              page: 'Care mix group',
              assetBase: '?',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'careMixGroup.table.time',
              inputType: 'time',
              label: 'Time',
              tableColumn: '4',
              formCss: 'user_time',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'careMixGroup',
              dataParent: 'careMixGroup.table',
              page: 'Care mix group',
              assetBase: '?',
              tableKey: 'table'
            },
            {
              elementKey: 'clinicalCategory',
              fqn: 'careMixGroup.table.clinicalCategory',
              inputType: 'text',
              label: 'Major clinical category',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'careMixGroup',
              dataParent: 'careMixGroup.table',
              page: 'Care mix group',
              tableKey: 'table'
            },
            {
              elementKey: 'caseMixNumber',
              fqn: 'careMixGroup.table.caseMixNumber',
              inputType: 'text',
              label: 'Case mix number',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'careMixGroup',
              dataParent: 'careMixGroup.table',
              page: 'Care mix group',
              tableKey: 'table'
            },
            {
              elementKey: 'resourceIntensity',
              fqn: 'careMixGroup.table.resourceIntensity',
              inputType: 'text',
              label: 'Resource intensity weight',
              formColumn: '1',
              formRow: '3',
              pageDataKey: 'careMixGroup',
              dataParent: 'careMixGroup.table',
              page: 'Care mix group',
              tableKey: 'table'
            },
            {
              elementKey: 'expectedStay',
              fqn: 'careMixGroup.table.expectedStay',
              inputType: 'text',
              label: 'Expected length of stay',
              formColumn: '2',
              formRow: '3',
              pageDataKey: 'careMixGroup',
              dataParent: 'careMixGroup.table',
              page: 'Care mix group',
              tableKey: 'table'
            },
            {
              elementKey: 'analysis',
              fqn: 'careMixGroup.table.analysis',
              inputType: 'textarea',
              label: 'Analysis',
              formColumn: '1',
              formRow: '4',
              pageDataKey: 'careMixGroup',
              dataParent: 'careMixGroup.table',
              page: 'Care mix group',
              tableKey: 'table'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'careMixGroup.table.name',
                    inputType: 'text',
                    label: 'Name',
                    tableColumn: '1',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'careMixGroup',
                    dataParent: 'careMixGroup.table',
                    page: 'Care mix group',
                    assetBase: '?',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'careMixGroup.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableColumn: '2',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'careMixGroup',
                    dataParent: 'careMixGroup.table',
                    page: 'Care mix group',
                    assetBase: '?',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'careMixGroup.table.day',
                    inputType: 'day',
                    label: 'Day',
                    tableColumn: '3',
                    formCss: 'user_day',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'careMixGroup',
                    dataParent: 'careMixGroup.table',
                    page: 'Care mix group',
                    assetBase: '?',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'careMixGroup.table.time',
                    inputType: 'time',
                    label: 'Time',
                    tableColumn: '4',
                    formCss: 'user_time',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'careMixGroup',
                    dataParent: 'careMixGroup.table',
                    page: 'Care mix group',
                    assetBase: '?',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'clinicalCategory',
                    fqn: 'careMixGroup.table.clinicalCategory',
                    inputType: 'text',
                    label: 'Major clinical category',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'careMixGroup',
                    dataParent: 'careMixGroup.table',
                    page: 'Care mix group',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'caseMixNumber',
                    fqn: 'careMixGroup.table.caseMixNumber',
                    inputType: 'text',
                    label: 'Case mix number',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'careMixGroup',
                    dataParent: 'careMixGroup.table',
                    page: 'Care mix group',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'resourceIntensity',
                    fqn: 'careMixGroup.table.resourceIntensity',
                    inputType: 'text',
                    label: 'Resource intensity weight',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'careMixGroup',
                    dataParent: 'careMixGroup.table',
                    page: 'Care mix group',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'expectedStay',
                    fqn: 'careMixGroup.table.expectedStay',
                    inputType: 'text',
                    label: 'Expected length of stay',
                    formColumn: '2',
                    formRow: '3',
                    pageDataKey: 'careMixGroup',
                    dataParent: 'careMixGroup.table',
                    page: 'Care mix group',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '4',
                elements: [
                  {
                    elementKey: 'analysis',
                    fqn: 'careMixGroup.table.analysis',
                    inputType: 'textarea',
                    label: 'Analysis',
                    formColumn: '1',
                    formRow: '4',
                    pageDataKey: 'careMixGroup',
                    dataParent: 'careMixGroup.table',
                    page: 'Care mix group',
                    tableKey: 'table'
                  }
                ]
              }
            ],
            columnsCount: 4
          }
        }
      ],
      pageData: {
        table: []
      }
    }
  }
}

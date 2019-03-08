/* eslint-disable quotes */
export default function () {
  return {
    assessmentTools: {
      pageTitle: "Standardized assessment tools",
      pageDataKey: "assessmentTools",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "admissions",
                fqn: "assessmentTools.admissions",
                inputType: "fieldset",
                label: "Admissions",
                formCss: "h2",
                formColumn: "1",
                formRow: "1",
                pageDataKey: "assessmentTools",
                dataParent: "assessmentTools",
                page: "Standardized assessment tools",
                elements: [
                  {
                    elementKey: "admissions1_1",
                    fqn: "assessmentTools.admissions.admissions1_1",
                    inputType: "assetLink",
                    label: "Triage scale",
                    fsetRow: "1",
                    fsetCol: "1",
                    pageDataKey: "assessmentTools",
                    dataParent: "assessmentTools.admissions",
                    page: "Standardized assessment tools",
                    assetName: "triage_scale.pdf",
                    formColumn: "1"
                  },
                  {
                    elementKey: "admissions2_1",
                    fqn: "assessmentTools.admissions.admissions2_1",
                    inputType: "assetLink",
                    label: "Patient health questionaire",
                    fsetRow: "2",
                    fsetCol: "1",
                    pageDataKey: "assessmentTools",
                    dataParent: "assessmentTools.admissions",
                    page: "Standardized assessment tools",
                    assetName: "patient_health_questionaire.pdf",
                    formColumn: "1"
                  },
                  {
                    elementKey: "admissions3_1",
                    fqn: "assessmentTools.admissions.admissions3_1",
                    inputType: "assetLink",
                    label: "Alcohol Consumption.pdf",
                    fsetRow: "3",
                    fsetCol: "1",
                    pageDataKey: "assessmentTools",
                    dataParent: "assessmentTools.admissions",
                    page: "Standardized assessment tools",
                    assetName: "alcohol_consumption.pdf",
                    formColumn: "1"
                  }
                ],
                containerType: "fieldset",
                containerKey: "admissions",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          elementKey: "admissions1_1",
                          fqn: "assessmentTools.admissions.admissions1_1",
                          inputType: "assetLink",
                          label: "Triage scale",
                          fsetRow: "1",
                          fsetCol: "1",
                          pageDataKey: "assessmentTools",
                          dataParent: "assessmentTools.admissions",
                          page: "Standardized assessment tools",
                          assetName: "triage_scale.pdf",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          elementKey: "admissions2_1",
                          fqn: "assessmentTools.admissions.admissions2_1",
                          inputType: "assetLink",
                          label: "Patient health questionaire",
                          fsetRow: "2",
                          fsetCol: "1",
                          pageDataKey: "assessmentTools",
                          dataParent: "assessmentTools.admissions",
                          page: "Standardized assessment tools",
                          assetName: "patient_health_questionaire.pdf",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "3",
                      elements: [
                        {
                          elementKey: "admissions3_1",
                          fqn: "assessmentTools.admissions.admissions3_1",
                          inputType: "assetLink",
                          label: "Alcohol Consumption.pdf",
                          fsetRow: "3",
                          fsetCol: "1",
                          pageDataKey: "assessmentTools",
                          dataParent: "assessmentTools.admissions",
                          page: "Standardized assessment tools",
                          assetName: "alcohol_consumption.pdf",
                          formColumn: "1"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              },
              {
                elementKey: "painAssessment",
                fqn: "assessmentTools.painAssessment",
                inputType: "fieldset",
                label: "Pain assessment",
                formCss: "h2",
                formColumn: "2",
                formRow: "1",
                pageDataKey: "assessmentTools",
                dataParent: "assessmentTools",
                page: "Standardized assessment tools",
                elements: [
                  {
                    elementKey: "painAssessment1_1",
                    fqn: "assessmentTools.painAssessment.painAssessment1_1",
                    inputType: "assetLink",
                    label: "OPQRSTUV",
                    fsetRow: "1",
                    fsetCol: "1",
                    pageDataKey: "assessmentTools",
                    dataParent: "assessmentTools.painAssessment",
                    page: "Standardized assessment tools",
                    assetName: "OPQRSTUV.pdf",
                    formColumn: "1"
                  },
                  {
                    elementKey: "painAssessment2_1",
                    fqn: "assessmentTools.painAssessment.painAssessment2_1",
                    inputType: "assetLink",
                    label: "0-10 numeric rating scale",
                    fsetRow: "2",
                    fsetCol: "1",
                    pageDataKey: "assessmentTools",
                    dataParent: "assessmentTools.painAssessment",
                    page: "Standardized assessment tools",
                    assetName: "0-10_numeric_rating_scale.pdf",
                    formColumn: "1"
                  },
                  {
                    elementKey: "painAssessment3_1",
                    fqn: "assessmentTools.painAssessment.painAssessment3_1",
                    inputType: "assetLink",
                    label: "Neurological assessment",
                    fsetRow: "3",
                    fsetCol: "1",
                    pageDataKey: "assessmentTools",
                    dataParent: "assessmentTools.painAssessment",
                    page: "Standardized assessment tools",
                    formColumn: "1"
                  },
                  {
                    elementKey: "painAssessment4_1",
                    fqn: "assessmentTools.painAssessment.painAssessment4_1",
                    inputType: "assetLink",
                    label: "Glasgow coma scale",
                    fsetRow: "4",
                    fsetCol: "1",
                    pageDataKey: "assessmentTools",
                    dataParent: "assessmentTools.painAssessment",
                    page: "Standardized assessment tools",
                    assetBase: "Standardized assessment tools",
                    assetName: "Glasgow Coma Scale.pdf",
                    formColumn: "1"
                  },
                  {
                    elementKey: "painAssessment5_1",
                    fqn: "assessmentTools.painAssessment.painAssessment5_1",
                    inputType: "assetLink",
                    label: "Mini mental state examination",
                    fsetRow: "5",
                    fsetCol: "1",
                    pageDataKey: "assessmentTools",
                    dataParent: "assessmentTools.painAssessment",
                    page: "Standardized assessment tools",
                    assetName: "mini_mental_state_examination.pdf",
                    formColumn: "1"
                  },
                  {
                    elementKey: "painAssessment6_1",
                    fqn: "assessmentTools.painAssessment.painAssessment6_1",
                    inputType: "assetLink",
                    label: "Richmond agitation scale",
                    fsetRow: "6",
                    fsetCol: "1",
                    pageDataKey: "assessmentTools",
                    dataParent: "assessmentTools.painAssessment",
                    page: "Standardized assessment tools",
                    assetName: "richmond_agitation_scale.pdf",
                    formColumn: "1"
                  }
                ],
                containerType: "fieldset",
                containerKey: "painAssessment",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          elementKey: "painAssessment1_1",
                          fqn: "assessmentTools.painAssessment.painAssessment1_1",
                          inputType: "assetLink",
                          label: "OPQRSTUV",
                          fsetRow: "1",
                          fsetCol: "1",
                          pageDataKey: "assessmentTools",
                          dataParent: "assessmentTools.painAssessment",
                          page: "Standardized assessment tools",
                          assetName: "OPQRSTUV.pdf",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          elementKey: "painAssessment2_1",
                          fqn: "assessmentTools.painAssessment.painAssessment2_1",
                          inputType: "assetLink",
                          label: "0-10 numeric rating scale",
                          fsetRow: "2",
                          fsetCol: "1",
                          pageDataKey: "assessmentTools",
                          dataParent: "assessmentTools.painAssessment",
                          page: "Standardized assessment tools",
                          assetName: "0-10_numeric_rating_scale.pdf",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "3",
                      elements: [
                        {
                          elementKey: "painAssessment3_1",
                          fqn: "assessmentTools.painAssessment.painAssessment3_1",
                          inputType: "assetLink",
                          label: "Neurological assessment",
                          fsetRow: "3",
                          fsetCol: "1",
                          pageDataKey: "assessmentTools",
                          dataParent: "assessmentTools.painAssessment",
                          page: "Standardized assessment tools",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "4",
                      elements: [
                        {
                          elementKey: "painAssessment4_1",
                          fqn: "assessmentTools.painAssessment.painAssessment4_1",
                          inputType: "assetLink",
                          label: "Glasgow coma scale",
                          fsetRow: "4",
                          fsetCol: "1",
                          pageDataKey: "assessmentTools",
                          dataParent: "assessmentTools.painAssessment",
                          page: "Standardized assessment tools",
                          assetBase: "Standardized assessment tools",
                          assetName: "Glasgow Coma Scale.pdf",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "5",
                      elements: [
                        {
                          elementKey: "painAssessment5_1",
                          fqn: "assessmentTools.painAssessment.painAssessment5_1",
                          inputType: "assetLink",
                          label: "Mini mental state examination",
                          fsetRow: "5",
                          fsetCol: "1",
                          pageDataKey: "assessmentTools",
                          dataParent: "assessmentTools.painAssessment",
                          page: "Standardized assessment tools",
                          assetName: "mini_mental_state_examination.pdf",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "6",
                      elements: [
                        {
                          elementKey: "painAssessment6_1",
                          fqn: "assessmentTools.painAssessment.painAssessment6_1",
                          inputType: "assetLink",
                          label: "Richmond agitation scale",
                          fsetRow: "6",
                          fsetCol: "1",
                          pageDataKey: "assessmentTools",
                          dataParent: "assessmentTools.painAssessment",
                          page: "Standardized assessment tools",
                          assetName: "richmond_agitation_scale.pdf",
                          formColumn: "1"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              },
              {
                elementKey: "fallRisk",
                fqn: "assessmentTools.fallRisk",
                inputType: "fieldset",
                label: "Falls risk",
                formCss: "h2",
                formColumn: "3",
                formRow: "1",
                pageDataKey: "assessmentTools",
                dataParent: "assessmentTools",
                page: "Standardized assessment tools",
                elements: [
                  {
                    elementKey: "fallRisk1_1",
                    fqn: "assessmentTools.fallRisk.fallRisk1_1",
                    inputType: "assetLink",
                    label: "Fall and injury reduction",
                    fsetRow: "1",
                    fsetCol: "1",
                    pageDataKey: "assessmentTools",
                    dataParent: "assessmentTools.fallRisk",
                    page: "Standardized assessment tools",
                    assetName: "fall_and_injury_reduction.pdf",
                    formColumn: "1"
                  },
                  {
                    elementKey: "fallRisk2_1",
                    fqn: "assessmentTools.fallRisk.fallRisk2_1",
                    inputType: "assetLink",
                    label: "Fall assessment",
                    fsetRow: "2",
                    fsetCol: "1",
                    pageDataKey: "assessmentTools",
                    dataParent: "assessmentTools.fallRisk",
                    page: "Standardized assessment tools",
                    assetBase: "Standardized assessment tools",
                    assetName: "Fall Risk Assessment Tool.pdf",
                    formColumn: "1"
                  },
                  {
                    elementKey: "fallRisk3_1",
                    fqn: "assessmentTools.fallRisk.fallRisk3_1",
                    inputType: "assetLink",
                    label: "Risk for falls",
                    fsetRow: "3",
                    fsetCol: "1",
                    pageDataKey: "assessmentTools",
                    dataParent: "assessmentTools.fallRisk",
                    page: "Standardized assessment tools",
                    assetName: "risk_for_falls.pdf",
                    formColumn: "1"
                  }
                ],
                containerType: "fieldset",
                containerKey: "fallRisk",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          elementKey: "fallRisk1_1",
                          fqn: "assessmentTools.fallRisk.fallRisk1_1",
                          inputType: "assetLink",
                          label: "Fall and injury reduction",
                          fsetRow: "1",
                          fsetCol: "1",
                          pageDataKey: "assessmentTools",
                          dataParent: "assessmentTools.fallRisk",
                          page: "Standardized assessment tools",
                          assetName: "fall_and_injury_reduction.pdf",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          elementKey: "fallRisk2_1",
                          fqn: "assessmentTools.fallRisk.fallRisk2_1",
                          inputType: "assetLink",
                          label: "Fall assessment",
                          fsetRow: "2",
                          fsetCol: "1",
                          pageDataKey: "assessmentTools",
                          dataParent: "assessmentTools.fallRisk",
                          page: "Standardized assessment tools",
                          assetBase: "Standardized assessment tools",
                          assetName: "Fall Risk Assessment Tool.pdf",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "3",
                      elements: [
                        {
                          elementKey: "fallRisk3_1",
                          fqn: "assessmentTools.fallRisk.fallRisk3_1",
                          inputType: "assetLink",
                          label: "Risk for falls",
                          fsetRow: "3",
                          fsetCol: "1",
                          pageDataKey: "assessmentTools",
                          dataParent: "assessmentTools.fallRisk",
                          page: "Standardized assessment tools",
                          assetName: "risk_for_falls.pdf",
                          formColumn: "1"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                elementKey: "notes",
                fqn: "assessmentTools.notes",
                inputType: "fieldset",
                label: "Notes",
                formCss: "h2",
                formColumn: "1",
                formRow: "2",
                pageDataKey: "assessmentTools",
                dataParent: "assessmentTools",
                page: "Standardized assessment tools",
                elements: [
                  {
                    elementKey: "notes1_1",
                    fqn: "assessmentTools.notes.notes1_1",
                    inputType: "assetLink",
                    label: "Consult note template",
                    fsetRow: "1",
                    fsetCol: "1",
                    pageDataKey: "assessmentTools",
                    dataParent: "assessmentTools.notes",
                    page: "Standardized assessment tools",
                    assetName: "consult_note_template.pdf",
                    formColumn: "1"
                  },
                  {
                    elementKey: "notes2_1",
                    fqn: "assessmentTools.notes.notes2_1",
                    inputType: "assetLink",
                    label: "Referral note template",
                    fsetRow: "2",
                    fsetCol: "1",
                    pageDataKey: "assessmentTools",
                    dataParent: "assessmentTools.notes",
                    page: "Standardized assessment tools",
                    assetName: "referral_note_template.pdf",
                    formColumn: "1"
                  }
                ],
                containerType: "fieldset",
                containerKey: "notes",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          elementKey: "notes1_1",
                          fqn: "assessmentTools.notes.notes1_1",
                          inputType: "assetLink",
                          label: "Consult note template",
                          fsetRow: "1",
                          fsetCol: "1",
                          pageDataKey: "assessmentTools",
                          dataParent: "assessmentTools.notes",
                          page: "Standardized assessment tools",
                          assetName: "consult_note_template.pdf",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          elementKey: "notes2_1",
                          fqn: "assessmentTools.notes.notes2_1",
                          inputType: "assetLink",
                          label: "Referral note template",
                          fsetRow: "2",
                          fsetCol: "1",
                          pageDataKey: "assessmentTools",
                          dataParent: "assessmentTools.notes",
                          page: "Standardized assessment tools",
                          assetName: "referral_note_template.pdf",
                          formColumn: "1"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              },
              {
                elementKey: "educational",
                fqn: "assessmentTools.educational",
                inputType: "fieldset",
                label: "Educational resources",
                formCss: "h2",
                formColumn: "2",
                formRow: "2",
                pageDataKey: "assessmentTools",
                dataParent: "assessmentTools",
                page: "Standardized assessment tools",
                elements: [
                  {
                    elementKey: "educational1_1",
                    fqn: "assessmentTools.educational.educational1_1",
                    inputType: "assetLink",
                    label: "COPD assessment",
                    fsetRow: "1",
                    fsetCol: "1",
                    pageDataKey: "assessmentTools",
                    dataParent: "assessmentTools.educational",
                    page: "Standardized assessment tools",
                    assetBase: "Standardized assessment tools",
                    assetName: "COPD assessment test.pdf",
                    formColumn: "1"
                  },
                  {
                    elementKey: "educational2_1",
                    fqn: "assessmentTools.educational.educational2_1",
                    inputType: "assetLink",
                    label: "Bristol stool chart",
                    fsetRow: "2",
                    fsetCol: "1",
                    pageDataKey: "assessmentTools",
                    dataParent: "assessmentTools.educational",
                    page: "Standardized assessment tools",
                    assetName: "bristol_stool_chart.pdf",
                    formColumn: "1"
                  }
                ],
                containerType: "fieldset",
                containerKey: "educational",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          elementKey: "educational1_1",
                          fqn: "assessmentTools.educational.educational1_1",
                          inputType: "assetLink",
                          label: "COPD assessment",
                          fsetRow: "1",
                          fsetCol: "1",
                          pageDataKey: "assessmentTools",
                          dataParent: "assessmentTools.educational",
                          page: "Standardized assessment tools",
                          assetBase: "Standardized assessment tools",
                          assetName: "COPD assessment test.pdf",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          elementKey: "educational2_1",
                          fqn: "assessmentTools.educational.educational2_1",
                          inputType: "assetLink",
                          label: "Bristol stool chart",
                          fsetRow: "2",
                          fsetCol: "1",
                          pageDataKey: "assessmentTools",
                          dataParent: "assessmentTools.educational",
                          page: "Standardized assessment tools",
                          assetName: "bristol_stool_chart.pdf",
                          formColumn: "1"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              },
              {
                elementKey: "wound",
                fqn: "assessmentTools.wound",
                inputType: "fieldset",
                label: "Wound assessment",
                formCss: "h2",
                formColumn: "3",
                formRow: "2",
                pageDataKey: "assessmentTools",
                dataParent: "assessmentTools",
                page: "Standardized assessment tools",
                elements: [
                  {
                    elementKey: "wound1_1",
                    fqn: "assessmentTools.wound.wound1_1",
                    inputType: "assetLink",
                    label: "Braden scale",
                    fsetRow: "1",
                    fsetCol: "1",
                    pageDataKey: "assessmentTools",
                    dataParent: "assessmentTools.wound",
                    page: "Standardized assessment tools",
                    assetName: "braden_scale.pdf",
                    formColumn: "1"
                  }
                ],
                containerType: "fieldset",
                containerKey: "wound",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          elementKey: "wound1_1",
                          fqn: "assessmentTools.wound.wound1_1",
                          inputType: "assetLink",
                          label: "Braden scale",
                          fsetRow: "1",
                          fsetCol: "1",
                          pageDataKey: "assessmentTools",
                          dataParent: "assessmentTools.wound",
                          page: "Standardized assessment tools",
                          assetName: "braden_scale.pdf",
                          formColumn: "1"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              }
            ]
          },
          {
            formRow: "3",
            elements: [
              {
                elementKey: "medication",
                fqn: "assessmentTools.medication",
                inputType: "fieldset",
                label: "Medication",
                formCss: "h2",
                formColumn: "1",
                formRow: "3",
                pageDataKey: "assessmentTools",
                dataParent: "assessmentTools",
                page: "Standardized assessment tools",
                elements: [
                  {
                    elementKey: "medication1_1",
                    fqn: "assessmentTools.medication.medication1_1",
                    inputType: "assetLink",
                    label: "Best possible medication history",
                    fsetRow: "1",
                    fsetCol: "1",
                    formColumn: "1",
                    formRow: ".",
                    pageDataKey: "assessmentTools",
                    dataParent: "assessmentTools.medication",
                    page: "Standardized assessment tools",
                    assetName: "best_possible_medication_history.pdf"
                  }
                ],
                containerType: "fieldset",
                containerKey: "medication",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          elementKey: "medication1_1",
                          fqn: "assessmentTools.medication.medication1_1",
                          inputType: "assetLink",
                          label: "Best possible medication history",
                          fsetRow: "1",
                          fsetCol: "1",
                          formColumn: "1",
                          formRow: ".",
                          pageDataKey: "assessmentTools",
                          dataParent: "assessmentTools.medication",
                          page: "Standardized assessment tools",
                          assetName: "best_possible_medication_history.pdf"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              }
            ]
          }
        ],
        columnsCount: 3
      },
      pageData: {}
    },
    codeLookup: {
      pageTitle: "Code lookup",
      pageDataKey: "codeLookup",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "snomed",
                fqn: "codeLookup.snomed",
                inputType: "text",
                label: "SnomedCT",
                formColumn: "1",
                formRow: "1",
                pageDataKey: "codeLookup",
                dataParent: "codeLookup",
                page: "Code lookup"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                elementKey: "icb",
                fqn: "codeLookup.icb",
                inputType: "text",
                label: "ICB",
                formColumn: "1",
                formRow: "2",
                pageDataKey: "codeLookup",
                dataParent: "codeLookup",
                page: "Code lookup"
              }
            ]
          }
        ],
        columnsCount: 1
      },
      pageData: {}
    },
    diagnosticCodes: {
      pageTitle: "Diagnostic codes (ICD-10)",
      pageDataKey: "diagnosticCodes",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a diagnostic code",
          tableCells: [
            {
              elementKey: "name",
              fqn: "diagnosticCodes.table.name",
              inputType: "text",
              label: "Name",
              tableColumn: "1",
              formCss: "user_name",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "diagnosticCodes",
              dataParent: "diagnosticCodes.table",
              level2Key: "table",
              page: "Diagnostic codes",
              assetBase: "?",
              tableKey: "table"
            },
            {
              elementKey: "profession",
              fqn: "diagnosticCodes.table.profession",
              inputType: "text",
              label: "Profession",
              tableColumn: "2",
              formCss: "user_pro",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "diagnosticCodes",
              dataParent: "diagnosticCodes.table",
              level2Key: "table",
              page: "Diagnostic codes",
              assetBase: "?",
              tableKey: "table"
            },
            {
              elementKey: "day",
              fqn: "diagnosticCodes.table.day",
              inputType: "day",
              label: "Day",
              tableColumn: "3",
              formCss: "user_day",
              formColumn: "3",
              formRow: "1",
              pageDataKey: "diagnosticCodes",
              dataParent: "diagnosticCodes.table",
              level2Key: "table",
              page: "Diagnostic codes",
              assetBase: "?",
              tableKey: "table"
            },
            {
              elementKey: "time",
              fqn: "diagnosticCodes.table.time",
              inputType: "time",
              label: "Time",
              tableColumn: "4",
              formCss: "user_time",
              formColumn: "4",
              formRow: "1",
              pageDataKey: "diagnosticCodes",
              dataParent: "diagnosticCodes.table",
              level2Key: "table",
              page: "Diagnostic codes",
              assetBase: "?",
              tableKey: "table"
            },
            {
              elementKey: "icd10",
              fqn: "diagnosticCodes.table.icd10",
              inputType: "assetLink",
              label: "ICD-10 Database",
              tableColumn: "5",
              formRow: "2",
              pageDataKey: "diagnosticCodes",
              dataParent: "diagnosticCodes.table",
              level2Key: "table",
              page: "Diagnostic codes",
              assetName: "icd-10-medical-diagnosis-codes.pdf",
              tableKey: "table"
            },
            {
              elementKey: "condition",
              fqn: "diagnosticCodes.table.condition",
              inputType: "text",
              label: "Condition",
              tableColumn: "6",
              formColumn: "1",
              formRow: "3",
              pageDataKey: "diagnosticCodes",
              dataParent: "diagnosticCodes.table",
              level2Key: "table",
              page: "Diagnostic codes",
              mandatory: "yes",
              tableKey: "table"
            },
            {
              elementKey: "code",
              fqn: "diagnosticCodes.table.code",
              inputType: "text",
              label: "Diagnosis code",
              tableColumn: "7",
              formColumn: "2",
              formRow: "3",
              pageDataKey: "diagnosticCodes",
              dataParent: "diagnosticCodes.table",
              level2Key: "table",
              page: "Diagnostic codes",
              mandatory: "yes",
              validation: "Up to 8 characters long",
              tableKey: "table"
            },
            {
              elementKey: "type",
              fqn: "diagnosticCodes.table.type",
              inputType: "select",
              label: "Diagnosis type",
              tableColumn: "8",
              formColumn: "3",
              formRow: "3",
              pageDataKey: "diagnosticCodes",
              dataParent: "diagnosticCodes.table",
              level2Key: "table",
              page: "Diagnostic codes",
              mandatory: "yes",
              validation: "1 character",
              options: [
                {
                  text: "M"
                },
                {
                  text: "1"
                },
                {
                  text: "2"
                },
                {
                  text: "3"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "prefix",
              fqn: "diagnosticCodes.table.prefix",
              inputType: "text",
              label: "Prefix",
              tableColumn: "9",
              formColumn: "4",
              formRow: "3",
              pageDataKey: "diagnosticCodes",
              dataParent: "diagnosticCodes.table",
              level2Key: "table",
              page: "Diagnostic codes",
              mandatory: "no",
              validation: "1 character",
              tableKey: "table"
            },
            {
              elementKey: "cluster",
              fqn: "diagnosticCodes.table.cluster",
              inputType: "text",
              label: "Diagnosis cluster",
              tableColumn: "10",
              formColumn: "5",
              formRow: "3",
              pageDataKey: "diagnosticCodes",
              dataParent: "diagnosticCodes.table",
              level2Key: "table",
              page: "Diagnostic codes",
              mandatory: "no",
              validation: "1 character",
              tableKey: "table"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "name",
                    fqn: "diagnosticCodes.table.name",
                    inputType: "text",
                    label: "Name",
                    tableColumn: "1",
                    formCss: "user_name",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "diagnosticCodes",
                    dataParent: "diagnosticCodes.table",
                    level2Key: "table",
                    page: "Diagnostic codes",
                    assetBase: "?",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    fqn: "diagnosticCodes.table.profession",
                    inputType: "text",
                    label: "Profession",
                    tableColumn: "2",
                    formCss: "user_pro",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "diagnosticCodes",
                    dataParent: "diagnosticCodes.table",
                    level2Key: "table",
                    page: "Diagnostic codes",
                    assetBase: "?",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    fqn: "diagnosticCodes.table.day",
                    inputType: "day",
                    label: "Day",
                    tableColumn: "3",
                    formCss: "user_day",
                    formColumn: "3",
                    formRow: "1",
                    pageDataKey: "diagnosticCodes",
                    dataParent: "diagnosticCodes.table",
                    level2Key: "table",
                    page: "Diagnostic codes",
                    assetBase: "?",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    fqn: "diagnosticCodes.table.time",
                    inputType: "time",
                    label: "Time",
                    tableColumn: "4",
                    formCss: "user_time",
                    formColumn: "4",
                    formRow: "1",
                    pageDataKey: "diagnosticCodes",
                    dataParent: "diagnosticCodes.table",
                    level2Key: "table",
                    page: "Diagnostic codes",
                    assetBase: "?",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "icd10",
                    fqn: "diagnosticCodes.table.icd10",
                    inputType: "assetLink",
                    label: "ICD-10 Database",
                    tableColumn: "5",
                    formRow: "2",
                    pageDataKey: "diagnosticCodes",
                    dataParent: "diagnosticCodes.table",
                    level2Key: "table",
                    page: "Diagnostic codes",
                    assetName: "icd-10-medical-diagnosis-codes.pdf",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "condition",
                    fqn: "diagnosticCodes.table.condition",
                    inputType: "text",
                    label: "Condition",
                    tableColumn: "6",
                    formColumn: "1",
                    formRow: "3",
                    pageDataKey: "diagnosticCodes",
                    dataParent: "diagnosticCodes.table",
                    level2Key: "table",
                    page: "Diagnostic codes",
                    mandatory: "yes",
                    tableKey: "table"
                  },
                  {
                    elementKey: "code",
                    fqn: "diagnosticCodes.table.code",
                    inputType: "text",
                    label: "Diagnosis code",
                    tableColumn: "7",
                    formColumn: "2",
                    formRow: "3",
                    pageDataKey: "diagnosticCodes",
                    dataParent: "diagnosticCodes.table",
                    level2Key: "table",
                    page: "Diagnostic codes",
                    mandatory: "yes",
                    validation: "Up to 8 characters long",
                    tableKey: "table"
                  },
                  {
                    elementKey: "type",
                    fqn: "diagnosticCodes.table.type",
                    inputType: "select",
                    label: "Diagnosis type",
                    tableColumn: "8",
                    formColumn: "3",
                    formRow: "3",
                    pageDataKey: "diagnosticCodes",
                    dataParent: "diagnosticCodes.table",
                    level2Key: "table",
                    page: "Diagnostic codes",
                    mandatory: "yes",
                    validation: "1 character",
                    options: [
                      {
                        text: "M"
                      },
                      {
                        text: "1"
                      },
                      {
                        text: "2"
                      },
                      {
                        text: "3"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "prefix",
                    fqn: "diagnosticCodes.table.prefix",
                    inputType: "text",
                    label: "Prefix",
                    tableColumn: "9",
                    formColumn: "4",
                    formRow: "3",
                    pageDataKey: "diagnosticCodes",
                    dataParent: "diagnosticCodes.table",
                    level2Key: "table",
                    page: "Diagnostic codes",
                    mandatory: "no",
                    validation: "1 character",
                    tableKey: "table"
                  },
                  {
                    elementKey: "cluster",
                    fqn: "diagnosticCodes.table.cluster",
                    inputType: "text",
                    label: "Diagnosis cluster",
                    tableColumn: "10",
                    formColumn: "5",
                    formRow: "3",
                    pageDataKey: "diagnosticCodes",
                    dataParent: "diagnosticCodes.table",
                    level2Key: "table",
                    page: "Diagnostic codes",
                    mandatory: "no",
                    validation: "1 character",
                    tableKey: "table"
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
      pageTitle: "Intervention codes",
      pageDataKey: "interventionCodes",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add an intervention code",
          tableCells: [
            {
              elementKey: "name",
              fqn: "interventionCodes.table.name",
              inputType: "text",
              label: "Name",
              tableColumn: "1",
              formCss: "user_name",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "interventionCodes",
              dataParent: "interventionCodes.table",
              level2Key: "table",
              page: "Intervention codes",
              assetBase: "?",
              tableKey: "table"
            },
            {
              elementKey: "profession",
              fqn: "interventionCodes.table.profession",
              inputType: "text",
              label: "Profession",
              tableColumn: "2",
              formCss: "user_pro",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "interventionCodes",
              dataParent: "interventionCodes.table",
              level2Key: "table",
              page: "Intervention codes",
              assetBase: "?",
              tableKey: "table"
            },
            {
              elementKey: "day",
              fqn: "interventionCodes.table.day",
              inputType: "day",
              label: "Day",
              tableColumn: "3",
              formCss: "user_day",
              formColumn: "3",
              formRow: "1",
              pageDataKey: "interventionCodes",
              dataParent: "interventionCodes.table",
              level2Key: "table",
              page: "Intervention codes",
              assetBase: "?",
              tableKey: "table"
            },
            {
              elementKey: "time",
              fqn: "interventionCodes.table.time",
              inputType: "time",
              label: "Time",
              tableColumn: "4",
              formCss: "user_time",
              formColumn: "4",
              formRow: "1",
              pageDataKey: "interventionCodes",
              dataParent: "interventionCodes.table",
              level2Key: "table",
              page: "Intervention codes",
              assetBase: "?",
              tableKey: "table"
            },
            {
              elementKey: "spacer",
              fqn: "interventionCodes.table.spacer",
              inputType: "spacer",
              formCss: "width-70",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "interventionCodes",
              dataParent: "interventionCodes.table",
              level2Key: "table",
              page: "Intervention codes",
              assetBase: "?",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "label",
              fqn: "interventionCodes.table.label",
              inputType: "form-label",
              label: "Intervention code attributes",
              formCss: "width-30 bold-text",
              formColumn: "2",
              formRow: "2",
              formOption: "bold-text",
              pageDataKey: "interventionCodes",
              dataParent: "interventionCodes.table",
              level2Key: "table",
              page: "Intervention codes",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "intervention",
              fqn: "interventionCodes.table.intervention",
              inputType: "text",
              label: "Intervention",
              tableColumn: "5",
              formCss: "width-70",
              formColumn: "1",
              formRow: "3",
              pageDataKey: "interventionCodes",
              dataParent: "interventionCodes.table",
              level2Key: "table",
              page: "Intervention codes",
              tableKey: "table"
            },
            {
              elementKey: "status",
              fqn: "interventionCodes.table.status",
              inputType: "text",
              label: "Status",
              tableColumn: "6",
              formCss: "width-10",
              formColumn: "2",
              formRow: "3",
              pageDataKey: "interventionCodes",
              dataParent: "interventionCodes.table",
              level2Key: "table",
              page: "Intervention codes",
              tableKey: "table"
            },
            {
              elementKey: "laterally",
              fqn: "interventionCodes.table.laterally",
              inputType: "text",
              label: "Laterally",
              tableColumn: "7",
              formCss: "width-10",
              formColumn: "3",
              formRow: "3",
              pageDataKey: "interventionCodes",
              dataParent: "interventionCodes.table",
              level2Key: "table",
              page: "Intervention codes",
              tableKey: "table"
            },
            {
              elementKey: "extent",
              fqn: "interventionCodes.table.extent",
              inputType: "text",
              label: "Extent",
              tableColumn: "8",
              formCss: "width-10",
              formColumn: "4",
              formRow: "3",
              pageDataKey: "interventionCodes",
              dataParent: "interventionCodes.table",
              level2Key: "table",
              page: "Intervention codes",
              tableKey: "table"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "name",
                    fqn: "interventionCodes.table.name",
                    inputType: "text",
                    label: "Name",
                    tableColumn: "1",
                    formCss: "user_name",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "interventionCodes",
                    dataParent: "interventionCodes.table",
                    level2Key: "table",
                    page: "Intervention codes",
                    assetBase: "?",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    fqn: "interventionCodes.table.profession",
                    inputType: "text",
                    label: "Profession",
                    tableColumn: "2",
                    formCss: "user_pro",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "interventionCodes",
                    dataParent: "interventionCodes.table",
                    level2Key: "table",
                    page: "Intervention codes",
                    assetBase: "?",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    fqn: "interventionCodes.table.day",
                    inputType: "day",
                    label: "Day",
                    tableColumn: "3",
                    formCss: "user_day",
                    formColumn: "3",
                    formRow: "1",
                    pageDataKey: "interventionCodes",
                    dataParent: "interventionCodes.table",
                    level2Key: "table",
                    page: "Intervention codes",
                    assetBase: "?",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    fqn: "interventionCodes.table.time",
                    inputType: "time",
                    label: "Time",
                    tableColumn: "4",
                    formCss: "user_time",
                    formColumn: "4",
                    formRow: "1",
                    pageDataKey: "interventionCodes",
                    dataParent: "interventionCodes.table",
                    level2Key: "table",
                    page: "Intervention codes",
                    assetBase: "?",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "spacer",
                    fqn: "interventionCodes.table.spacer",
                    inputType: "spacer",
                    formCss: "width-70",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "interventionCodes",
                    dataParent: "interventionCodes.table",
                    level2Key: "table",
                    page: "Intervention codes",
                    assetBase: "?",
                    tableCss: "hide-table-element",
                    tableKey: "table"
                  },
                  {
                    elementKey: "label",
                    fqn: "interventionCodes.table.label",
                    inputType: "form-label",
                    label: "Intervention code attributes",
                    formCss: "width-30 bold-text",
                    formColumn: "2",
                    formRow: "2",
                    formOption: "bold-text",
                    pageDataKey: "interventionCodes",
                    dataParent: "interventionCodes.table",
                    level2Key: "table",
                    page: "Intervention codes",
                    tableCss: "hide-table-element",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "intervention",
                    fqn: "interventionCodes.table.intervention",
                    inputType: "text",
                    label: "Intervention",
                    tableColumn: "5",
                    formCss: "width-70",
                    formColumn: "1",
                    formRow: "3",
                    pageDataKey: "interventionCodes",
                    dataParent: "interventionCodes.table",
                    level2Key: "table",
                    page: "Intervention codes",
                    tableKey: "table"
                  },
                  {
                    elementKey: "status",
                    fqn: "interventionCodes.table.status",
                    inputType: "text",
                    label: "Status",
                    tableColumn: "6",
                    formCss: "width-10",
                    formColumn: "2",
                    formRow: "3",
                    pageDataKey: "interventionCodes",
                    dataParent: "interventionCodes.table",
                    level2Key: "table",
                    page: "Intervention codes",
                    tableKey: "table"
                  },
                  {
                    elementKey: "laterally",
                    fqn: "interventionCodes.table.laterally",
                    inputType: "text",
                    label: "Laterally",
                    tableColumn: "7",
                    formCss: "width-10",
                    formColumn: "3",
                    formRow: "3",
                    pageDataKey: "interventionCodes",
                    dataParent: "interventionCodes.table",
                    level2Key: "table",
                    page: "Intervention codes",
                    tableKey: "table"
                  },
                  {
                    elementKey: "extent",
                    fqn: "interventionCodes.table.extent",
                    inputType: "text",
                    label: "Extent",
                    tableColumn: "8",
                    formCss: "width-10",
                    formColumn: "4",
                    formRow: "3",
                    pageDataKey: "interventionCodes",
                    dataParent: "interventionCodes.table",
                    level2Key: "table",
                    page: "Intervention codes",
                    tableKey: "table"
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
      pageTitle: "Case mix group",
      pageDataKey: "careMixGroup",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a case mix group",
          tableCells: [
            {
              elementKey: "name",
              fqn: "careMixGroup.table.name",
              inputType: "text",
              label: "Name",
              tableColumn: "1",
              formCss: "user_name",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "careMixGroup",
              dataParent: "careMixGroup.table",
              level2Key: "table",
              page: "Case mix group",
              assetBase: "?",
              tableKey: "table"
            },
            {
              elementKey: "profession",
              fqn: "careMixGroup.table.profession",
              inputType: "text",
              label: "Profession",
              tableColumn: "2",
              formCss: "user_pro",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "careMixGroup",
              dataParent: "careMixGroup.table",
              level2Key: "table",
              page: "Case mix group",
              assetBase: "?",
              tableKey: "table"
            },
            {
              elementKey: "day",
              fqn: "careMixGroup.table.day",
              inputType: "day",
              label: "Day",
              tableColumn: "3",
              formCss: "user_day",
              formColumn: "3",
              formRow: "1",
              pageDataKey: "careMixGroup",
              dataParent: "careMixGroup.table",
              level2Key: "table",
              page: "Case mix group",
              assetBase: "?",
              tableKey: "table"
            },
            {
              elementKey: "time",
              fqn: "careMixGroup.table.time",
              inputType: "time",
              label: "Time",
              tableColumn: "4",
              formCss: "user_time",
              formColumn: "4",
              formRow: "1",
              pageDataKey: "careMixGroup",
              dataParent: "careMixGroup.table",
              level2Key: "table",
              page: "Case mix group",
              assetBase: "?",
              tableKey: "table"
            },
            {
              elementKey: "clinicalCategory",
              fqn: "careMixGroup.table.clinicalCategory",
              inputType: "text",
              label: "Major clinical category",
              tableColumn: "5",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "careMixGroup",
              dataParent: "careMixGroup.table",
              level2Key: "table",
              page: "Case mix group",
              tableKey: "table"
            },
            {
              elementKey: "caseMixNumber",
              fqn: "careMixGroup.table.caseMixNumber",
              inputType: "text",
              label: "Case mix number",
              tableColumn: "6",
              formColumn: "2",
              formRow: "2",
              pageDataKey: "careMixGroup",
              dataParent: "careMixGroup.table",
              level2Key: "table",
              page: "Case mix group",
              tableKey: "table"
            },
            {
              elementKey: "resourceIntensity",
              fqn: "careMixGroup.table.resourceIntensity",
              inputType: "text",
              label: "Resource intensity weight",
              tableColumn: "7",
              formColumn: "1",
              formRow: "3",
              pageDataKey: "careMixGroup",
              dataParent: "careMixGroup.table",
              level2Key: "table",
              page: "Case mix group",
              tableKey: "table"
            },
            {
              elementKey: "expectedStay",
              fqn: "careMixGroup.table.expectedStay",
              inputType: "text",
              label: "Expected length of stay",
              tableColumn: "8",
              formColumn: "2",
              formRow: "3",
              pageDataKey: "careMixGroup",
              dataParent: "careMixGroup.table",
              level2Key: "table",
              page: "Case mix group",
              tableKey: "table"
            },
            {
              elementKey: "analysis",
              fqn: "careMixGroup.table.analysis",
              inputType: "textarea",
              label: "Analysis",
              tableColumn: "9",
              formColumn: "1",
              formRow: "4",
              pageDataKey: "careMixGroup",
              dataParent: "careMixGroup.table",
              level2Key: "table",
              page: "Case mix group",
              tableKey: "table"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "name",
                    fqn: "careMixGroup.table.name",
                    inputType: "text",
                    label: "Name",
                    tableColumn: "1",
                    formCss: "user_name",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "careMixGroup",
                    dataParent: "careMixGroup.table",
                    level2Key: "table",
                    page: "Case mix group",
                    assetBase: "?",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    fqn: "careMixGroup.table.profession",
                    inputType: "text",
                    label: "Profession",
                    tableColumn: "2",
                    formCss: "user_pro",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "careMixGroup",
                    dataParent: "careMixGroup.table",
                    level2Key: "table",
                    page: "Case mix group",
                    assetBase: "?",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    fqn: "careMixGroup.table.day",
                    inputType: "day",
                    label: "Day",
                    tableColumn: "3",
                    formCss: "user_day",
                    formColumn: "3",
                    formRow: "1",
                    pageDataKey: "careMixGroup",
                    dataParent: "careMixGroup.table",
                    level2Key: "table",
                    page: "Case mix group",
                    assetBase: "?",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    fqn: "careMixGroup.table.time",
                    inputType: "time",
                    label: "Time",
                    tableColumn: "4",
                    formCss: "user_time",
                    formColumn: "4",
                    formRow: "1",
                    pageDataKey: "careMixGroup",
                    dataParent: "careMixGroup.table",
                    level2Key: "table",
                    page: "Case mix group",
                    assetBase: "?",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "clinicalCategory",
                    fqn: "careMixGroup.table.clinicalCategory",
                    inputType: "text",
                    label: "Major clinical category",
                    tableColumn: "5",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "careMixGroup",
                    dataParent: "careMixGroup.table",
                    level2Key: "table",
                    page: "Case mix group",
                    tableKey: "table"
                  },
                  {
                    elementKey: "caseMixNumber",
                    fqn: "careMixGroup.table.caseMixNumber",
                    inputType: "text",
                    label: "Case mix number",
                    tableColumn: "6",
                    formColumn: "2",
                    formRow: "2",
                    pageDataKey: "careMixGroup",
                    dataParent: "careMixGroup.table",
                    level2Key: "table",
                    page: "Case mix group",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "resourceIntensity",
                    fqn: "careMixGroup.table.resourceIntensity",
                    inputType: "text",
                    label: "Resource intensity weight",
                    tableColumn: "7",
                    formColumn: "1",
                    formRow: "3",
                    pageDataKey: "careMixGroup",
                    dataParent: "careMixGroup.table",
                    level2Key: "table",
                    page: "Case mix group",
                    tableKey: "table"
                  },
                  {
                    elementKey: "expectedStay",
                    fqn: "careMixGroup.table.expectedStay",
                    inputType: "text",
                    label: "Expected length of stay",
                    tableColumn: "8",
                    formColumn: "2",
                    formRow: "3",
                    pageDataKey: "careMixGroup",
                    dataParent: "careMixGroup.table",
                    level2Key: "table",
                    page: "Case mix group",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    elementKey: "analysis",
                    fqn: "careMixGroup.table.analysis",
                    inputType: "textarea",
                    label: "Analysis",
                    tableColumn: "9",
                    formColumn: "1",
                    formRow: "4",
                    pageDataKey: "careMixGroup",
                    dataParent: "careMixGroup.table",
                    level2Key: "table",
                    page: "Case mix group",
                    tableKey: "table"
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
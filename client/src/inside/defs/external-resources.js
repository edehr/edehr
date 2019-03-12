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
                label: "Admissions",
                pageDataKey: "assessmentTools",
                elementKey: "admissions",
                inputType: "fieldset",
                formRow: "1",
                formColumn: "1",
                dataParent: "assessmentTools",
                fqn: "assessmentTools.admissions",
                elements: [
                  {
                    label: "Triage scale",
                    pageDataKey: "assessmentTools",
                    level3Key: "admissions",
                    elementKey: "admissions1_1",
                    inputType: "assetLink",
                    fsetRow: "1",
                    fsetCol: "1",
                    assetName: "triage_scale.pdf",
                    dataParent: "assessmentTools.admissions",
                    fqn: "assessmentTools.admissions.admissions1_1",
                    formColumn: "1"
                  },
                  {
                    label: "Patient health questionaire",
                    pageDataKey: "assessmentTools",
                    level3Key: "admissions",
                    elementKey: "admissions2_1",
                    inputType: "assetLink",
                    fsetRow: "2",
                    fsetCol: "1",
                    assetName: "patient_health_questionaire.pdf",
                    dataParent: "assessmentTools.admissions",
                    fqn: "assessmentTools.admissions.admissions2_1",
                    formColumn: "1"
                  },
                  {
                    label: "Alcohol Consumption.pdf",
                    pageDataKey: "assessmentTools",
                    level3Key: "admissions",
                    elementKey: "admissions3_1",
                    inputType: "assetLink",
                    fsetRow: "3",
                    fsetCol: "1",
                    assetName: "alcohol_consumption.pdf",
                    dataParent: "assessmentTools.admissions",
                    fqn: "assessmentTools.admissions.admissions3_1",
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
                          label: "Triage scale",
                          pageDataKey: "assessmentTools",
                          level3Key: "admissions",
                          elementKey: "admissions1_1",
                          inputType: "assetLink",
                          fsetRow: "1",
                          fsetCol: "1",
                          assetName: "triage_scale.pdf",
                          dataParent: "assessmentTools.admissions",
                          fqn: "assessmentTools.admissions.admissions1_1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          label: "Patient health questionaire",
                          pageDataKey: "assessmentTools",
                          level3Key: "admissions",
                          elementKey: "admissions2_1",
                          inputType: "assetLink",
                          fsetRow: "2",
                          fsetCol: "1",
                          assetName: "patient_health_questionaire.pdf",
                          dataParent: "assessmentTools.admissions",
                          fqn: "assessmentTools.admissions.admissions2_1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "3",
                      elements: [
                        {
                          label: "Alcohol Consumption.pdf",
                          pageDataKey: "assessmentTools",
                          level3Key: "admissions",
                          elementKey: "admissions3_1",
                          inputType: "assetLink",
                          fsetRow: "3",
                          fsetCol: "1",
                          assetName: "alcohol_consumption.pdf",
                          dataParent: "assessmentTools.admissions",
                          fqn: "assessmentTools.admissions.admissions3_1",
                          formColumn: "1"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              },
              {
                label: "Pain assessment",
                pageDataKey: "assessmentTools",
                elementKey: "painAssessment",
                inputType: "fieldset",
                formRow: "1",
                formColumn: "2",
                dataParent: "assessmentTools",
                fqn: "assessmentTools.painAssessment",
                elements: [
                  {
                    label: "OPQRSTUV",
                    pageDataKey: "assessmentTools",
                    level3Key: "painAssessment",
                    elementKey: "painAssessment1_1",
                    inputType: "assetLink",
                    fsetRow: "1",
                    fsetCol: "1",
                    assetName: "OPQRSTUV.pdf",
                    dataParent: "assessmentTools.painAssessment",
                    fqn: "assessmentTools.painAssessment.painAssessment1_1",
                    formColumn: "1"
                  },
                  {
                    label: "0-10 numeric rating scale",
                    pageDataKey: "assessmentTools",
                    level3Key: "painAssessment",
                    elementKey: "painAssessment2_1",
                    inputType: "assetLink",
                    fsetRow: "2",
                    fsetCol: "1",
                    assetName: "0-10_numeric_rating_scale.pdf",
                    dataParent: "assessmentTools.painAssessment",
                    fqn: "assessmentTools.painAssessment.painAssessment2_1",
                    formColumn: "1"
                  },
                  {
                    label: "Neurological assessment",
                    pageDataKey: "assessmentTools",
                    level3Key: "painAssessment",
                    elementKey: "painAssessment3_1",
                    inputType: "assetLink",
                    fsetRow: "3",
                    fsetCol: "1",
                    dataParent: "assessmentTools.painAssessment",
                    fqn: "assessmentTools.painAssessment.painAssessment3_1",
                    formColumn: "1"
                  },
                  {
                    label: "Glasgow coma scale",
                    pageDataKey: "assessmentTools",
                    level3Key: "painAssessment",
                    elementKey: "painAssessment4_1",
                    inputType: "assetLink",
                    fsetRow: "4",
                    fsetCol: "1",
                    assetBase: "Standardized assessment tools",
                    assetName: "Glasgow Coma Scale.pdf",
                    dataParent: "assessmentTools.painAssessment",
                    fqn: "assessmentTools.painAssessment.painAssessment4_1",
                    formColumn: "1"
                  },
                  {
                    label: "Mini mental state examination",
                    pageDataKey: "assessmentTools",
                    level3Key: "painAssessment",
                    elementKey: "painAssessment5_1",
                    inputType: "assetLink",
                    fsetRow: "5",
                    fsetCol: "1",
                    assetName: "mini_mental_state_examination.pdf",
                    dataParent: "assessmentTools.painAssessment",
                    fqn: "assessmentTools.painAssessment.painAssessment5_1",
                    formColumn: "1"
                  },
                  {
                    label: "Richmond agitation scale",
                    pageDataKey: "assessmentTools",
                    level3Key: "painAssessment",
                    elementKey: "painAssessment6_1",
                    inputType: "assetLink",
                    fsetRow: "6",
                    fsetCol: "1",
                    assetName: "richmond_agitation_scale.pdf",
                    dataParent: "assessmentTools.painAssessment",
                    fqn: "assessmentTools.painAssessment.painAssessment6_1",
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
                          label: "OPQRSTUV",
                          pageDataKey: "assessmentTools",
                          level3Key: "painAssessment",
                          elementKey: "painAssessment1_1",
                          inputType: "assetLink",
                          fsetRow: "1",
                          fsetCol: "1",
                          assetName: "OPQRSTUV.pdf",
                          dataParent: "assessmentTools.painAssessment",
                          fqn: "assessmentTools.painAssessment.painAssessment1_1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          label: "0-10 numeric rating scale",
                          pageDataKey: "assessmentTools",
                          level3Key: "painAssessment",
                          elementKey: "painAssessment2_1",
                          inputType: "assetLink",
                          fsetRow: "2",
                          fsetCol: "1",
                          assetName: "0-10_numeric_rating_scale.pdf",
                          dataParent: "assessmentTools.painAssessment",
                          fqn: "assessmentTools.painAssessment.painAssessment2_1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "3",
                      elements: [
                        {
                          label: "Neurological assessment",
                          pageDataKey: "assessmentTools",
                          level3Key: "painAssessment",
                          elementKey: "painAssessment3_1",
                          inputType: "assetLink",
                          fsetRow: "3",
                          fsetCol: "1",
                          dataParent: "assessmentTools.painAssessment",
                          fqn: "assessmentTools.painAssessment.painAssessment3_1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "4",
                      elements: [
                        {
                          label: "Glasgow coma scale",
                          pageDataKey: "assessmentTools",
                          level3Key: "painAssessment",
                          elementKey: "painAssessment4_1",
                          inputType: "assetLink",
                          fsetRow: "4",
                          fsetCol: "1",
                          assetBase: "Standardized assessment tools",
                          assetName: "Glasgow Coma Scale.pdf",
                          dataParent: "assessmentTools.painAssessment",
                          fqn: "assessmentTools.painAssessment.painAssessment4_1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "5",
                      elements: [
                        {
                          label: "Mini mental state examination",
                          pageDataKey: "assessmentTools",
                          level3Key: "painAssessment",
                          elementKey: "painAssessment5_1",
                          inputType: "assetLink",
                          fsetRow: "5",
                          fsetCol: "1",
                          assetName: "mini_mental_state_examination.pdf",
                          dataParent: "assessmentTools.painAssessment",
                          fqn: "assessmentTools.painAssessment.painAssessment5_1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "6",
                      elements: [
                        {
                          label: "Richmond agitation scale",
                          pageDataKey: "assessmentTools",
                          level3Key: "painAssessment",
                          elementKey: "painAssessment6_1",
                          inputType: "assetLink",
                          fsetRow: "6",
                          fsetCol: "1",
                          assetName: "richmond_agitation_scale.pdf",
                          dataParent: "assessmentTools.painAssessment",
                          fqn: "assessmentTools.painAssessment.painAssessment6_1",
                          formColumn: "1"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              },
              {
                label: "Falls risk",
                pageDataKey: "assessmentTools",
                elementKey: "fallRisk",
                inputType: "fieldset",
                formRow: "1",
                formColumn: "3",
                dataParent: "assessmentTools",
                fqn: "assessmentTools.fallRisk",
                elements: [
                  {
                    label: "Fall and injury reduction",
                    pageDataKey: "assessmentTools",
                    level3Key: "fallRisk",
                    elementKey: "fallRisk1_1",
                    inputType: "assetLink",
                    fsetRow: "1",
                    fsetCol: "1",
                    assetName: "fall_and_injury_reduction.pdf",
                    dataParent: "assessmentTools.fallRisk",
                    fqn: "assessmentTools.fallRisk.fallRisk1_1",
                    formColumn: "1"
                  },
                  {
                    label: "Fall assessment",
                    pageDataKey: "assessmentTools",
                    level3Key: "fallRisk",
                    elementKey: "fallRisk2_1",
                    inputType: "assetLink",
                    fsetRow: "2",
                    fsetCol: "1",
                    assetBase: "Standardized assessment tools",
                    assetName: "Fall Risk Assessment Tool.pdf",
                    dataParent: "assessmentTools.fallRisk",
                    fqn: "assessmentTools.fallRisk.fallRisk2_1",
                    formColumn: "1"
                  },
                  {
                    label: "Risk for falls",
                    pageDataKey: "assessmentTools",
                    level3Key: "fallRisk",
                    elementKey: "fallRisk3_1",
                    inputType: "assetLink",
                    fsetRow: "3",
                    fsetCol: "1",
                    assetName: "risk_for_falls.pdf",
                    dataParent: "assessmentTools.fallRisk",
                    fqn: "assessmentTools.fallRisk.fallRisk3_1",
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
                          label: "Fall and injury reduction",
                          pageDataKey: "assessmentTools",
                          level3Key: "fallRisk",
                          elementKey: "fallRisk1_1",
                          inputType: "assetLink",
                          fsetRow: "1",
                          fsetCol: "1",
                          assetName: "fall_and_injury_reduction.pdf",
                          dataParent: "assessmentTools.fallRisk",
                          fqn: "assessmentTools.fallRisk.fallRisk1_1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          label: "Fall assessment",
                          pageDataKey: "assessmentTools",
                          level3Key: "fallRisk",
                          elementKey: "fallRisk2_1",
                          inputType: "assetLink",
                          fsetRow: "2",
                          fsetCol: "1",
                          assetBase: "Standardized assessment tools",
                          assetName: "Fall Risk Assessment Tool.pdf",
                          dataParent: "assessmentTools.fallRisk",
                          fqn: "assessmentTools.fallRisk.fallRisk2_1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "3",
                      elements: [
                        {
                          label: "Risk for falls",
                          pageDataKey: "assessmentTools",
                          level3Key: "fallRisk",
                          elementKey: "fallRisk3_1",
                          inputType: "assetLink",
                          fsetRow: "3",
                          fsetCol: "1",
                          assetName: "risk_for_falls.pdf",
                          dataParent: "assessmentTools.fallRisk",
                          fqn: "assessmentTools.fallRisk.fallRisk3_1",
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
                label: "Notes",
                pageDataKey: "assessmentTools",
                elementKey: "notes",
                inputType: "fieldset",
                formRow: "2",
                formColumn: "1",
                dataParent: "assessmentTools",
                fqn: "assessmentTools.notes",
                elements: [
                  {
                    label: "Consult note template",
                    pageDataKey: "assessmentTools",
                    level3Key: "notes",
                    elementKey: "notes1_1",
                    inputType: "assetLink",
                    fsetRow: "1",
                    fsetCol: "1",
                    assetName: "consult_note_template.pdf",
                    dataParent: "assessmentTools.notes",
                    fqn: "assessmentTools.notes.notes1_1",
                    formColumn: "1"
                  },
                  {
                    label: "Referral note template",
                    pageDataKey: "assessmentTools",
                    level3Key: "notes",
                    elementKey: "notes2_1",
                    inputType: "assetLink",
                    fsetRow: "2",
                    fsetCol: "1",
                    assetName: "referral_note_template.pdf",
                    dataParent: "assessmentTools.notes",
                    fqn: "assessmentTools.notes.notes2_1",
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
                          label: "Consult note template",
                          pageDataKey: "assessmentTools",
                          level3Key: "notes",
                          elementKey: "notes1_1",
                          inputType: "assetLink",
                          fsetRow: "1",
                          fsetCol: "1",
                          assetName: "consult_note_template.pdf",
                          dataParent: "assessmentTools.notes",
                          fqn: "assessmentTools.notes.notes1_1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          label: "Referral note template",
                          pageDataKey: "assessmentTools",
                          level3Key: "notes",
                          elementKey: "notes2_1",
                          inputType: "assetLink",
                          fsetRow: "2",
                          fsetCol: "1",
                          assetName: "referral_note_template.pdf",
                          dataParent: "assessmentTools.notes",
                          fqn: "assessmentTools.notes.notes2_1",
                          formColumn: "1"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              },
              {
                label: "Educational resources",
                pageDataKey: "assessmentTools",
                elementKey: "educational",
                inputType: "fieldset",
                formRow: "2",
                formColumn: "2",
                dataParent: "assessmentTools",
                fqn: "assessmentTools.educational",
                elements: [
                  {
                    label: "COPD assessment",
                    pageDataKey: "assessmentTools",
                    level3Key: "educational",
                    elementKey: "educational1_1",
                    inputType: "assetLink",
                    fsetRow: "1",
                    fsetCol: "1",
                    assetBase: "Standardized assessment tools",
                    assetName: "COPD assessment test.pdf",
                    dataParent: "assessmentTools.educational",
                    fqn: "assessmentTools.educational.educational1_1",
                    formColumn: "1"
                  },
                  {
                    label: "Bristol stool chart",
                    pageDataKey: "assessmentTools",
                    level3Key: "educational",
                    elementKey: "educational2_1",
                    inputType: "assetLink",
                    fsetRow: "2",
                    fsetCol: "1",
                    assetName: "bristol_stool_chart.pdf",
                    dataParent: "assessmentTools.educational",
                    fqn: "assessmentTools.educational.educational2_1",
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
                          label: "COPD assessment",
                          pageDataKey: "assessmentTools",
                          level3Key: "educational",
                          elementKey: "educational1_1",
                          inputType: "assetLink",
                          fsetRow: "1",
                          fsetCol: "1",
                          assetBase: "Standardized assessment tools",
                          assetName: "COPD assessment test.pdf",
                          dataParent: "assessmentTools.educational",
                          fqn: "assessmentTools.educational.educational1_1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          label: "Bristol stool chart",
                          pageDataKey: "assessmentTools",
                          level3Key: "educational",
                          elementKey: "educational2_1",
                          inputType: "assetLink",
                          fsetRow: "2",
                          fsetCol: "1",
                          assetName: "bristol_stool_chart.pdf",
                          dataParent: "assessmentTools.educational",
                          fqn: "assessmentTools.educational.educational2_1",
                          formColumn: "1"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              },
              {
                label: "Wound assessment",
                pageDataKey: "assessmentTools",
                elementKey: "wound",
                inputType: "fieldset",
                formRow: "2",
                formColumn: "3",
                dataParent: "assessmentTools",
                fqn: "assessmentTools.wound",
                elements: [
                  {
                    label: "Braden scale",
                    pageDataKey: "assessmentTools",
                    level3Key: "wound",
                    elementKey: "wound1_1",
                    inputType: "assetLink",
                    fsetRow: "1",
                    fsetCol: "1",
                    assetName: "braden_scale.pdf",
                    dataParent: "assessmentTools.wound",
                    fqn: "assessmentTools.wound.wound1_1",
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
                          label: "Braden scale",
                          pageDataKey: "assessmentTools",
                          level3Key: "wound",
                          elementKey: "wound1_1",
                          inputType: "assetLink",
                          fsetRow: "1",
                          fsetCol: "1",
                          assetName: "braden_scale.pdf",
                          dataParent: "assessmentTools.wound",
                          fqn: "assessmentTools.wound.wound1_1",
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
                label: "Medication",
                pageDataKey: "assessmentTools",
                elementKey: "medication",
                inputType: "fieldset",
                formRow: "3",
                formColumn: "1",
                dataParent: "assessmentTools",
                fqn: "assessmentTools.medication",
                elements: [
                  {
                    label: "Best possible medication history",
                    pageDataKey: "assessmentTools",
                    level3Key: "medication",
                    elementKey: "medication1_1",
                    inputType: "assetLink",
                    formRow: ".",
                    formColumn: "1",
                    fsetRow: "1",
                    fsetCol: "1",
                    assetName: "best_possible_medication_history.pdf",
                    dataParent: "assessmentTools.medication",
                    fqn: "assessmentTools.medication.medication1_1"
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
                          label: "Best possible medication history",
                          pageDataKey: "assessmentTools",
                          level3Key: "medication",
                          elementKey: "medication1_1",
                          inputType: "assetLink",
                          formRow: ".",
                          formColumn: "1",
                          fsetRow: "1",
                          fsetCol: "1",
                          assetName: "best_possible_medication_history.pdf",
                          dataParent: "assessmentTools.medication",
                          fqn: "assessmentTools.medication.medication1_1"
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
                label: "SnomedCT",
                pageDataKey: "codeLookup",
                elementKey: "snomed",
                inputType: "text",
                formRow: "1",
                formColumn: "1",
                dataParent: "codeLookup",
                fqn: "codeLookup.snomed"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                label: "ICB",
                pageDataKey: "codeLookup",
                elementKey: "icb",
                inputType: "text",
                formRow: "2",
                formColumn: "1",
                dataParent: "codeLookup",
                fqn: "codeLookup.icb"
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
              label: "Name",
              pageDataKey: "diagnosticCodes",
              level2Key: "table",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              tableColumn: "1",
              assetBase: "?",
              dataParent: "diagnosticCodes.table",
              fqn: "diagnosticCodes.table.name",
              tableKey: "table"
            },
            {
              label: "Profession",
              pageDataKey: "diagnosticCodes",
              level2Key: "table",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              tableColumn: "2",
              assetBase: "?",
              dataParent: "diagnosticCodes.table",
              fqn: "diagnosticCodes.table.profession",
              tableKey: "table"
            },
            {
              label: "Day",
              pageDataKey: "diagnosticCodes",
              level2Key: "table",
              elementKey: "day",
              inputType: "day",
              formRow: "1",
              formColumn: "3",
              tableColumn: "3",
              assetBase: "?",
              dataParent: "diagnosticCodes.table",
              fqn: "diagnosticCodes.table.day",
              tableKey: "table"
            },
            {
              label: "Time",
              pageDataKey: "diagnosticCodes",
              level2Key: "table",
              elementKey: "time",
              inputType: "time",
              formRow: "1",
              formColumn: "4",
              tableColumn: "4",
              assetBase: "?",
              dataParent: "diagnosticCodes.table",
              fqn: "diagnosticCodes.table.time",
              tableKey: "table"
            },
            {
              label: "ICD-10 Database",
              pageDataKey: "diagnosticCodes",
              level2Key: "table",
              elementKey: "icd10",
              inputType: "assetLink",
              formRow: "2",
              tableColumn: "5",
              assetName: "icd-10-medical-diagnosis-codes.pdf",
              dataParent: "diagnosticCodes.table",
              fqn: "diagnosticCodes.table.icd10",
              tableKey: "table"
            },
            {
              label: "Condition",
              pageDataKey: "diagnosticCodes",
              level2Key: "table",
              elementKey: "condition",
              inputType: "text",
              formRow: "3",
              formColumn: "1",
              tableColumn: "6",
              mandatory: "yes",
              dataParent: "diagnosticCodes.table",
              fqn: "diagnosticCodes.table.condition",
              tableKey: "table"
            },
            {
              label: "Diagnosis code",
              pageDataKey: "diagnosticCodes",
              level2Key: "table",
              elementKey: "code",
              inputType: "text",
              formRow: "3",
              formColumn: "2",
              tableColumn: "7",
              mandatory: "yes",
              validation: "Up to 8 characters long",
              dataParent: "diagnosticCodes.table",
              fqn: "diagnosticCodes.table.code",
              tableKey: "table"
            },
            {
              label: "Diagnosis type",
              pageDataKey: "diagnosticCodes",
              level2Key: "table",
              elementKey: "type",
              inputType: "select",
              formRow: "3",
              formColumn: "3",
              tableColumn: "8",
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
              mandatory: "yes",
              validation: "1 character",
              dataParent: "diagnosticCodes.table",
              fqn: "diagnosticCodes.table.type",
              tableKey: "table"
            },
            {
              label: "Prefix",
              pageDataKey: "diagnosticCodes",
              level2Key: "table",
              elementKey: "prefix",
              inputType: "text",
              formRow: "3",
              formColumn: "4",
              tableColumn: "9",
              mandatory: "no",
              validation: "1 character",
              dataParent: "diagnosticCodes.table",
              fqn: "diagnosticCodes.table.prefix",
              tableKey: "table"
            },
            {
              label: "Diagnosis cluster",
              pageDataKey: "diagnosticCodes",
              level2Key: "table",
              elementKey: "cluster",
              inputType: "text",
              formRow: "3",
              formColumn: "5",
              tableColumn: "10",
              mandatory: "no",
              validation: "1 character",
              dataParent: "diagnosticCodes.table",
              fqn: "diagnosticCodes.table.cluster",
              tableKey: "table"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    label: "Name",
                    pageDataKey: "diagnosticCodes",
                    level2Key: "table",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    tableColumn: "1",
                    assetBase: "?",
                    dataParent: "diagnosticCodes.table",
                    fqn: "diagnosticCodes.table.name",
                    tableKey: "table"
                  },
                  {
                    label: "Profession",
                    pageDataKey: "diagnosticCodes",
                    level2Key: "table",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    tableColumn: "2",
                    assetBase: "?",
                    dataParent: "diagnosticCodes.table",
                    fqn: "diagnosticCodes.table.profession",
                    tableKey: "table"
                  },
                  {
                    label: "Day",
                    pageDataKey: "diagnosticCodes",
                    level2Key: "table",
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    tableColumn: "3",
                    assetBase: "?",
                    dataParent: "diagnosticCodes.table",
                    fqn: "diagnosticCodes.table.day",
                    tableKey: "table"
                  },
                  {
                    label: "Time",
                    pageDataKey: "diagnosticCodes",
                    level2Key: "table",
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    tableColumn: "4",
                    assetBase: "?",
                    dataParent: "diagnosticCodes.table",
                    fqn: "diagnosticCodes.table.time",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "ICD-10 Database",
                    pageDataKey: "diagnosticCodes",
                    level2Key: "table",
                    elementKey: "icd10",
                    inputType: "assetLink",
                    formRow: "2",
                    tableColumn: "5",
                    assetName: "icd-10-medical-diagnosis-codes.pdf",
                    dataParent: "diagnosticCodes.table",
                    fqn: "diagnosticCodes.table.icd10",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    label: "Condition",
                    pageDataKey: "diagnosticCodes",
                    level2Key: "table",
                    elementKey: "condition",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "1",
                    tableColumn: "6",
                    mandatory: "yes",
                    dataParent: "diagnosticCodes.table",
                    fqn: "diagnosticCodes.table.condition",
                    tableKey: "table"
                  },
                  {
                    label: "Diagnosis code",
                    pageDataKey: "diagnosticCodes",
                    level2Key: "table",
                    elementKey: "code",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "2",
                    tableColumn: "7",
                    mandatory: "yes",
                    validation: "Up to 8 characters long",
                    dataParent: "diagnosticCodes.table",
                    fqn: "diagnosticCodes.table.code",
                    tableKey: "table"
                  },
                  {
                    label: "Diagnosis type",
                    pageDataKey: "diagnosticCodes",
                    level2Key: "table",
                    elementKey: "type",
                    inputType: "select",
                    formRow: "3",
                    formColumn: "3",
                    tableColumn: "8",
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
                    mandatory: "yes",
                    validation: "1 character",
                    dataParent: "diagnosticCodes.table",
                    fqn: "diagnosticCodes.table.type",
                    tableKey: "table"
                  },
                  {
                    label: "Prefix",
                    pageDataKey: "diagnosticCodes",
                    level2Key: "table",
                    elementKey: "prefix",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "4",
                    tableColumn: "9",
                    mandatory: "no",
                    validation: "1 character",
                    dataParent: "diagnosticCodes.table",
                    fqn: "diagnosticCodes.table.prefix",
                    tableKey: "table"
                  },
                  {
                    label: "Diagnosis cluster",
                    pageDataKey: "diagnosticCodes",
                    level2Key: "table",
                    elementKey: "cluster",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "5",
                    tableColumn: "10",
                    mandatory: "no",
                    validation: "1 character",
                    dataParent: "diagnosticCodes.table",
                    fqn: "diagnosticCodes.table.cluster",
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
              label: "Name",
              pageDataKey: "interventionCodes",
              level2Key: "table",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              tableColumn: "1",
              assetBase: "?",
              dataParent: "interventionCodes.table",
              fqn: "interventionCodes.table.name",
              tableKey: "table"
            },
            {
              label: "Profession",
              pageDataKey: "interventionCodes",
              level2Key: "table",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              tableColumn: "2",
              assetBase: "?",
              dataParent: "interventionCodes.table",
              fqn: "interventionCodes.table.profession",
              tableKey: "table"
            },
            {
              label: "Day",
              pageDataKey: "interventionCodes",
              level2Key: "table",
              elementKey: "day",
              inputType: "day",
              formRow: "1",
              formColumn: "3",
              tableColumn: "3",
              assetBase: "?",
              dataParent: "interventionCodes.table",
              fqn: "interventionCodes.table.day",
              tableKey: "table"
            },
            {
              label: "Time",
              pageDataKey: "interventionCodes",
              level2Key: "table",
              elementKey: "time",
              inputType: "time",
              formRow: "1",
              formColumn: "4",
              tableColumn: "4",
              assetBase: "?",
              dataParent: "interventionCodes.table",
              fqn: "interventionCodes.table.time",
              tableKey: "table"
            },
            {
              pageDataKey: "interventionCodes",
              level2Key: "table",
              elementKey: "spacer",
              inputType: "spacer",
              formRow: "2",
              formColumn: "1",
              assetBase: "?",
              dataParent: "interventionCodes.table",
              fqn: "interventionCodes.table.spacer",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Intervention code attributes",
              pageDataKey: "interventionCodes",
              level2Key: "table",
              elementKey: "label",
              inputType: "form-label",
              formRow: "2",
              formColumn: "2",
              formOption: "bold-text",
              dataParent: "interventionCodes.table",
              fqn: "interventionCodes.table.label",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Intervention",
              pageDataKey: "interventionCodes",
              level2Key: "table",
              elementKey: "intervention",
              inputType: "text",
              formRow: "3",
              formColumn: "1",
              tableColumn: "5",
              dataParent: "interventionCodes.table",
              fqn: "interventionCodes.table.intervention",
              tableKey: "table"
            },
            {
              label: "Status",
              pageDataKey: "interventionCodes",
              level2Key: "table",
              elementKey: "status",
              inputType: "text",
              formRow: "3",
              formColumn: "2",
              tableColumn: "6",
              dataParent: "interventionCodes.table",
              fqn: "interventionCodes.table.status",
              tableKey: "table"
            },
            {
              label: "Laterally",
              pageDataKey: "interventionCodes",
              level2Key: "table",
              elementKey: "laterally",
              inputType: "text",
              formRow: "3",
              formColumn: "3",
              tableColumn: "7",
              dataParent: "interventionCodes.table",
              fqn: "interventionCodes.table.laterally",
              tableKey: "table"
            },
            {
              label: "Extent",
              pageDataKey: "interventionCodes",
              level2Key: "table",
              elementKey: "extent",
              inputType: "text",
              formRow: "3",
              formColumn: "4",
              tableColumn: "8",
              dataParent: "interventionCodes.table",
              fqn: "interventionCodes.table.extent",
              tableKey: "table"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    label: "Name",
                    pageDataKey: "interventionCodes",
                    level2Key: "table",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    tableColumn: "1",
                    assetBase: "?",
                    dataParent: "interventionCodes.table",
                    fqn: "interventionCodes.table.name",
                    tableKey: "table"
                  },
                  {
                    label: "Profession",
                    pageDataKey: "interventionCodes",
                    level2Key: "table",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    tableColumn: "2",
                    assetBase: "?",
                    dataParent: "interventionCodes.table",
                    fqn: "interventionCodes.table.profession",
                    tableKey: "table"
                  },
                  {
                    label: "Day",
                    pageDataKey: "interventionCodes",
                    level2Key: "table",
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    tableColumn: "3",
                    assetBase: "?",
                    dataParent: "interventionCodes.table",
                    fqn: "interventionCodes.table.day",
                    tableKey: "table"
                  },
                  {
                    label: "Time",
                    pageDataKey: "interventionCodes",
                    level2Key: "table",
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    tableColumn: "4",
                    assetBase: "?",
                    dataParent: "interventionCodes.table",
                    fqn: "interventionCodes.table.time",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    pageDataKey: "interventionCodes",
                    level2Key: "table",
                    elementKey: "spacer",
                    inputType: "spacer",
                    formRow: "2",
                    formColumn: "1",
                    assetBase: "?",
                    dataParent: "interventionCodes.table",
                    fqn: "interventionCodes.table.spacer",
                    tableCss: "hide-table-element",
                    tableKey: "table"
                  },
                  {
                    label: "Intervention code attributes",
                    pageDataKey: "interventionCodes",
                    level2Key: "table",
                    elementKey: "label",
                    inputType: "form-label",
                    formRow: "2",
                    formColumn: "2",
                    formOption: "bold-text",
                    dataParent: "interventionCodes.table",
                    fqn: "interventionCodes.table.label",
                    tableCss: "hide-table-element",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    label: "Intervention",
                    pageDataKey: "interventionCodes",
                    level2Key: "table",
                    elementKey: "intervention",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "1",
                    tableColumn: "5",
                    dataParent: "interventionCodes.table",
                    fqn: "interventionCodes.table.intervention",
                    tableKey: "table"
                  },
                  {
                    label: "Status",
                    pageDataKey: "interventionCodes",
                    level2Key: "table",
                    elementKey: "status",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "2",
                    tableColumn: "6",
                    dataParent: "interventionCodes.table",
                    fqn: "interventionCodes.table.status",
                    tableKey: "table"
                  },
                  {
                    label: "Laterally",
                    pageDataKey: "interventionCodes",
                    level2Key: "table",
                    elementKey: "laterally",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "3",
                    tableColumn: "7",
                    dataParent: "interventionCodes.table",
                    fqn: "interventionCodes.table.laterally",
                    tableKey: "table"
                  },
                  {
                    label: "Extent",
                    pageDataKey: "interventionCodes",
                    level2Key: "table",
                    elementKey: "extent",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "4",
                    tableColumn: "8",
                    dataParent: "interventionCodes.table",
                    fqn: "interventionCodes.table.extent",
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
              label: "Name",
              pageDataKey: "careMixGroup",
              level2Key: "table",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              tableColumn: "1",
              assetBase: "?",
              dataParent: "careMixGroup.table",
              fqn: "careMixGroup.table.name",
              tableKey: "table"
            },
            {
              label: "Profession",
              pageDataKey: "careMixGroup",
              level2Key: "table",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              tableColumn: "2",
              assetBase: "?",
              dataParent: "careMixGroup.table",
              fqn: "careMixGroup.table.profession",
              tableKey: "table"
            },
            {
              label: "Day",
              pageDataKey: "careMixGroup",
              level2Key: "table",
              elementKey: "day",
              inputType: "day",
              formRow: "1",
              formColumn: "3",
              tableColumn: "3",
              assetBase: "?",
              dataParent: "careMixGroup.table",
              fqn: "careMixGroup.table.day",
              tableKey: "table"
            },
            {
              label: "Time",
              pageDataKey: "careMixGroup",
              level2Key: "table",
              elementKey: "time",
              inputType: "time",
              formRow: "1",
              formColumn: "4",
              tableColumn: "4",
              assetBase: "?",
              dataParent: "careMixGroup.table",
              fqn: "careMixGroup.table.time",
              tableKey: "table"
            },
            {
              label: "Major clinical category",
              pageDataKey: "careMixGroup",
              level2Key: "table",
              elementKey: "clinicalCategory",
              inputType: "text",
              formRow: "2",
              formColumn: "1",
              tableColumn: "5",
              dataParent: "careMixGroup.table",
              fqn: "careMixGroup.table.clinicalCategory",
              tableKey: "table"
            },
            {
              label: "Case mix number",
              pageDataKey: "careMixGroup",
              level2Key: "table",
              elementKey: "caseMixNumber",
              inputType: "text",
              formRow: "2",
              formColumn: "2",
              tableColumn: "6",
              dataParent: "careMixGroup.table",
              fqn: "careMixGroup.table.caseMixNumber",
              tableKey: "table"
            },
            {
              label: "Resource intensity weight",
              pageDataKey: "careMixGroup",
              level2Key: "table",
              elementKey: "resourceIntensity",
              inputType: "text",
              formRow: "3",
              formColumn: "1",
              tableColumn: "7",
              dataParent: "careMixGroup.table",
              fqn: "careMixGroup.table.resourceIntensity",
              tableKey: "table"
            },
            {
              label: "Expected length of stay",
              pageDataKey: "careMixGroup",
              level2Key: "table",
              elementKey: "expectedStay",
              inputType: "text",
              formRow: "3",
              formColumn: "2",
              tableColumn: "8",
              dataParent: "careMixGroup.table",
              fqn: "careMixGroup.table.expectedStay",
              tableKey: "table"
            },
            {
              label: "Analysis",
              pageDataKey: "careMixGroup",
              level2Key: "table",
              elementKey: "analysis",
              inputType: "textarea",
              formRow: "4",
              formColumn: "1",
              tableColumn: "9",
              dataParent: "careMixGroup.table",
              fqn: "careMixGroup.table.analysis",
              tableKey: "table"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    label: "Name",
                    pageDataKey: "careMixGroup",
                    level2Key: "table",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    tableColumn: "1",
                    assetBase: "?",
                    dataParent: "careMixGroup.table",
                    fqn: "careMixGroup.table.name",
                    tableKey: "table"
                  },
                  {
                    label: "Profession",
                    pageDataKey: "careMixGroup",
                    level2Key: "table",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    tableColumn: "2",
                    assetBase: "?",
                    dataParent: "careMixGroup.table",
                    fqn: "careMixGroup.table.profession",
                    tableKey: "table"
                  },
                  {
                    label: "Day",
                    pageDataKey: "careMixGroup",
                    level2Key: "table",
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    tableColumn: "3",
                    assetBase: "?",
                    dataParent: "careMixGroup.table",
                    fqn: "careMixGroup.table.day",
                    tableKey: "table"
                  },
                  {
                    label: "Time",
                    pageDataKey: "careMixGroup",
                    level2Key: "table",
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    tableColumn: "4",
                    assetBase: "?",
                    dataParent: "careMixGroup.table",
                    fqn: "careMixGroup.table.time",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "Major clinical category",
                    pageDataKey: "careMixGroup",
                    level2Key: "table",
                    elementKey: "clinicalCategory",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "1",
                    tableColumn: "5",
                    dataParent: "careMixGroup.table",
                    fqn: "careMixGroup.table.clinicalCategory",
                    tableKey: "table"
                  },
                  {
                    label: "Case mix number",
                    pageDataKey: "careMixGroup",
                    level2Key: "table",
                    elementKey: "caseMixNumber",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "2",
                    tableColumn: "6",
                    dataParent: "careMixGroup.table",
                    fqn: "careMixGroup.table.caseMixNumber",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    label: "Resource intensity weight",
                    pageDataKey: "careMixGroup",
                    level2Key: "table",
                    elementKey: "resourceIntensity",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "1",
                    tableColumn: "7",
                    dataParent: "careMixGroup.table",
                    fqn: "careMixGroup.table.resourceIntensity",
                    tableKey: "table"
                  },
                  {
                    label: "Expected length of stay",
                    pageDataKey: "careMixGroup",
                    level2Key: "table",
                    elementKey: "expectedStay",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "2",
                    tableColumn: "8",
                    dataParent: "careMixGroup.table",
                    fqn: "careMixGroup.table.expectedStay",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    label: "Analysis",
                    pageDataKey: "careMixGroup",
                    level2Key: "table",
                    elementKey: "analysis",
                    inputType: "textarea",
                    formRow: "4",
                    formColumn: "1",
                    tableColumn: "9",
                    dataParent: "careMixGroup.table",
                    fqn: "careMixGroup.table.analysis",
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
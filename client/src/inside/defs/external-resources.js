/* eslint-disable quotes */
export default function () {
  return {
    assessmentTools: {
      pageTitle: "Standardized assessment tools",
      pageDataKey: "assessmentTools",
      pageChildren: [
        {
          label: "Triage scale",
          elementKey: "admissions1_1",
          fqn: "assessmentTools.admissions.admissions1_1",
          assetBase: "standardized-assessment-tools",
          assetName: "the-canadian-ed-triage-and-acuity-scale.gif"
        },
        {
          label: "Patient health questionaire",
          elementKey: "admissions2_1",
          fqn: "assessmentTools.admissions.admissions2_1",
          assetBase: "standardized-assessment-tools",
          assetName: "patient-health-questionnaire.pdf"
        },
        {
          label: "Alcohol consumption",
          elementKey: "admissions3_1",
          fqn: "assessmentTools.admissions.admissions3_1",
          assetBase: "standardized-assessment-tools",
          assetName: "audit.pdf"
        },
        {
          label: "OPQRSTUV",
          elementKey: "painAssessment1_1",
          fqn: "assessmentTools.painAssessment.painAssessment1_1",
          assetBase: "standardized-assessment-tools",
          assetName: "opqrstuv.pdf"
        },
        {
          label: "0-10 numeric rating scale",
          elementKey: "painAssessment2_1",
          fqn: "assessmentTools.painAssessment.painAssessment2_1",
          assetBase: "standardized-assessment-tools",
          assetName: "numeric-rating-scale.pdf"
        },
        {
          label: "Glasgow coma scale",
          elementKey: "neuroAssessment1_1",
          fqn: "assessmentTools.neuroAssessment.neuroAssessment1_1",
          assetBase: "standardized-assessment-tools",
          assetName: "glasgow-coma-scale.pdf"
        },
        {
          label: "Mini mental state examination",
          elementKey: "neuroAssessment2_1",
          fqn: "assessmentTools.neuroAssessment.neuroAssessment2_1",
          assetBase: "standardized-assessment-tools",
          assetName: "mini-mental-health-screen.pdf"
        },
        {
          label: "Richmond agitation scale",
          elementKey: "neuroAssessment3_1",
          fqn: "assessmentTools.neuroAssessment.neuroAssessment3_1",
          assetBase: "standardized-assessment-tools",
          assetName: "richmond-agitation-sedation-scale-rass.pdf"
        },
        {
          label: "Fall assessment",
          elementKey: "fallRisk1_1",
          fqn: "assessmentTools.fallRisk.fallRisk1_1",
          assetBase: "standardized-assessment-tools",
          assetName: "fall-risk-assessment-tool.pdf"
        },
        {
          label: "Risk for falls",
          elementKey: "fallRisk2_1",
          fqn: "assessmentTools.fallRisk.fallRisk2_1",
          assetBase: "standardized-assessment-tools",
          assetName: "risk-for-falls.png"
        },
        {
          label: "Consult and referral note template",
          elementKey: "notes1_1",
          fqn: "assessmentTools.notes.notes1_1",
          assetBase: "standardized-assessment-tools",
          assetName: "consultation-form.pdf"
        },
        {
          label: "COPD assessment",
          elementKey: "educational1_1",
          fqn: "assessmentTools.educational.educational1_1",
          assetBase: "standardized-assessment-tools",
          assetName: "copd-assessment-test.pdf"
        },
        {
          label: "Bristol stool chart",
          elementKey: "educational2_1",
          fqn: "assessmentTools.educational.educational2_1",
          assetBase: "standardized-assessment-tools",
          assetName: "bristol-stool-chart.pdf"
        },
        {
          label: "Braden scale",
          elementKey: "wound1_1",
          fqn: "assessmentTools.wound.wound1_1",
          assetBase: "standardized-assessment-tools",
          assetName: "braden-scale.pdf"
        },
        {
          label: "Best possible medication history",
          elementKey: "medication1_1",
          fqn: "assessmentTools.medication.medication1_1",
          assetBase: "standardized-assessment-tools",
          assetName: "best_possible_medication.pdf"
        }
      ],
      generated: "2019-07-10T07:38:20-07:00",
      hasForm: true,
      pageForm: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "admissions",
                label: "Admissions",
                inputType: "fieldset",
                formRow: "1",
                formColumn: "1",
                formCss: "h2",
                dataParent: "assessmentTools",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          elementKey: "admissions1_1",
                          label: "Triage scale",
                          inputType: "assetLink",
                          fsetRow: "1",
                          dataParent: "assessmentTools.admissions"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          elementKey: "admissions2_1",
                          label: "Patient health questionaire",
                          inputType: "assetLink",
                          fsetRow: "2",
                          dataParent: "assessmentTools.admissions"
                        }
                      ]
                    },
                    {
                      formRow: "3",
                      elements: [
                        {
                          elementKey: "admissions3_1",
                          label: "Alcohol consumption",
                          inputType: "assetLink",
                          fsetRow: "3",
                          dataParent: "assessmentTools.admissions"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              },
              {
                elementKey: "painAssessment",
                label: "Pain assessment",
                inputType: "fieldset",
                formRow: "1",
                formColumn: "2",
                formCss: "h2",
                dataParent: "assessmentTools",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          elementKey: "painAssessment1_1",
                          label: "OPQRSTUV",
                          inputType: "assetLink",
                          fsetRow: "1",
                          dataParent: "assessmentTools.painAssessment"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          elementKey: "painAssessment2_1",
                          label: "0-10 numeric rating scale",
                          inputType: "assetLink",
                          fsetRow: "2",
                          dataParent: "assessmentTools.painAssessment"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              },
              {
                elementKey: "neuroAssessment",
                label: "Neurological assessment",
                inputType: "fieldset",
                formRow: "1",
                formColumn: "3",
                formCss: "h2",
                dataParent: "assessmentTools",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          elementKey: "neuroAssessment1_1",
                          label: "Glasgow coma scale",
                          inputType: "assetLink",
                          fsetRow: "1",
                          dataParent: "assessmentTools.neuroAssessment"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          elementKey: "neuroAssessment2_1",
                          label: "Mini mental state examination",
                          inputType: "assetLink",
                          fsetRow: "2",
                          dataParent: "assessmentTools.neuroAssessment"
                        }
                      ]
                    },
                    {
                      formRow: "3",
                      elements: [
                        {
                          elementKey: "neuroAssessment3_1",
                          label: "Richmond agitation scale",
                          inputType: "assetLink",
                          fsetRow: "3",
                          dataParent: "assessmentTools.neuroAssessment"
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
                elementKey: "fallRisk",
                label: "Falls risk",
                inputType: "fieldset",
                formRow: "2",
                formColumn: "1",
                formCss: "h2",
                dataParent: "assessmentTools",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          elementKey: "fallRisk1_1",
                          label: "Fall assessment",
                          inputType: "assetLink",
                          fsetRow: "1",
                          dataParent: "assessmentTools.fallRisk"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          elementKey: "fallRisk2_1",
                          label: "Risk for falls",
                          inputType: "assetLink",
                          fsetRow: "2",
                          dataParent: "assessmentTools.fallRisk"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              },
              {
                elementKey: "notes",
                label: "Notes",
                inputType: "fieldset",
                formRow: "2",
                formColumn: "2",
                formCss: "h2",
                dataParent: "assessmentTools",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          elementKey: "notes1_1",
                          label: "Consult and referral note template",
                          inputType: "assetLink",
                          fsetRow: "1",
                          dataParent: "assessmentTools.notes"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              },
              {
                elementKey: "educational",
                label: "Educational resources",
                inputType: "fieldset",
                formRow: "2",
                formColumn: "3",
                formCss: "h2",
                dataParent: "assessmentTools",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          elementKey: "educational1_1",
                          label: "COPD assessment",
                          inputType: "assetLink",
                          fsetRow: "1",
                          dataParent: "assessmentTools.educational"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          elementKey: "educational2_1",
                          label: "Bristol stool chart",
                          inputType: "assetLink",
                          fsetRow: "2",
                          dataParent: "assessmentTools.educational"
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
                elementKey: "wound",
                label: "Wound assessment",
                inputType: "fieldset",
                formRow: "3",
                formColumn: "1",
                formCss: "h2",
                dataParent: "assessmentTools",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          elementKey: "wound1_1",
                          label: "Braden scale",
                          inputType: "assetLink",
                          fsetRow: "1",
                          dataParent: "assessmentTools.wound"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              },
              {
                elementKey: "medication",
                label: "Medication",
                inputType: "fieldset",
                formRow: "3",
                formColumn: "2",
                formCss: "h2",
                dataParent: "assessmentTools",
                formFieldSet: {
                  rows: [],
                  columnsCount: 0
                }
              }
            ]
          }
        ],
        columnsCount: 3
      }
    },
    codeLookup: {
      pageTitle: "Code lookup",
      pageDataKey: "codeLookup",
      pageChildren: [
        {
          label: "<a href=\"/assets/static-databases/snowmed-ct.csv\" target=\"_blank\">SnomedCT</a>",
          elementKey: "snomed",
          fqn: "codeLookup.snomed"
        },
        {
          label: "ICB",
          elementKey: "icf",
          fqn: "codeLookup.icf"
        }
      ],
      generated: "2019-07-10T07:38:20-07:00",
      hasForm: true,
      pageForm: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "snomed",
                label: "<a href=\"/assets/static-databases/snowmed-ct.csv\" target=\"_blank\">SnomedCT</a>",
                inputType: "text",
                formRow: "1",
                formColumn: "1",
                formCss: "is-half",
                dataParent: "codeLookup",
                tableKey: "aForm"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                elementKey: "icf",
                label: "ICB",
                inputType: "text",
                formRow: "2",
                formColumn: "1",
                formCss: "is-half",
                dataParent: "codeLookup",
                tableKey: "aForm"
              }
            ]
          }
        ],
        columnsCount: 1
      }
    },
    diagnosticCodes: {
      pageTitle: "Diagnostic codes (ICD-10)",
      pageDataKey: "diagnosticCodes",
      pageChildren: [
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "diagnosticCodes.table.name",
          assetBase: "?"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "diagnosticCodes.table.profession",
          assetBase: "?"
        },
        {
          label: "Entered on day",
          elementKey: "day",
          fqn: "diagnosticCodes.table.day",
          assetBase: "?"
        },
        {
          label: "Entered at time",
          elementKey: "time",
          fqn: "diagnosticCodes.table.time",
          assetBase: "?"
        },
        {
          label: "<a href=\"/assets/static-databases/icd-10-medical-diagnosis-codes.pdf\" target=\"_blank\">ICD-10 database</a>",
          elementKey: "icd10",
          fqn: "diagnosticCodes.table.icd10",
          assetBase: "static-databases",
          assetName: "icd-10-medical-diagnosis-codes.pdf"
        },
        {
          label: "Condition",
          elementKey: "condition",
          fqn: "diagnosticCodes.table.condition",
          dataCaseStudy: "COPD-NL-History of smoking-NL-Hypertension"
        },
        {
          label: "Diagnosis code",
          elementKey: "code",
          fqn: "diagnosticCodes.table.code",
          dataCaseStudy: "J44.9-NL-Z86.42-NL-I10"
        },
        {
          label: "Diagnosis type",
          elementKey: "type",
          fqn: "diagnosticCodes.table.type",
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
          dataCaseStudy: "M-NL-3-NL-3"
        },
        {
          label: "Prefix",
          elementKey: "prefix",
          fqn: "diagnosticCodes.table.prefix"
        },
        {
          label: "Diagnosis cluster",
          elementKey: "cluster",
          fqn: "diagnosticCodes.table.cluster"
        }
      ],
      generated: "2019-07-10T07:38:20-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "diagnosticCodes",
          tableKey: "table",
          addButtonText: "Add a diagnostic code",
          tableCells: [
            {
              elementKey: "name",
              label: "Entered by name",
              tableColumn: "1",
              inputType: "text"
            },
            {
              elementKey: "profession",
              label: "Entered by profession",
              tableColumn: "1",
              inputType: "text"
            },
            {
              elementKey: "day",
              label: "Entered on day",
              tableColumn: "1",
              inputType: "day"
            },
            {
              elementKey: "time",
              label: "Entered at time",
              tableColumn: "1",
              inputType: "time"
            },
            {
              elementKey: "icd10",
              label: "<a href=\"/assets/static-databases/icd-10-medical-diagnosis-codes.pdf\" target=\"_blank\">ICD-10 database</a>",
              tableColumn: "2",
              inputType: "text"
            },
            {
              elementKey: "condition",
              label: "Condition",
              tableColumn: "3",
              inputType: "text"
            },
            {
              elementKey: "code",
              label: "Diagnosis code",
              tableColumn: "4",
              inputType: "text"
            },
            {
              elementKey: "type",
              label: "Diagnosis type",
              tableColumn: "5",
              inputType: "select"
            },
            {
              elementKey: "prefix",
              label: "Prefix",
              tableColumn: "6",
              inputType: "text"
            },
            {
              elementKey: "cluster",
              label: "Diagnosis cluster",
              tableColumn: "7",
              inputType: "text"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "name",
                    label: "Entered by name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    formCss: "user_name",
                    dataParent: "diagnosticCodes.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    label: "Entered by profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    dataParent: "diagnosticCodes.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    label: "Entered on day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    dataParent: "diagnosticCodes.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    label: "Entered at time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    dataParent: "diagnosticCodes.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "icd10",
                    label: "<a href=\"/assets/static-databases/icd-10-medical-diagnosis-codes.pdf\" target=\"_blank\">ICD-10 database</a>",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "diagnosticCodes.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "condition",
                    label: "Condition",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "1",
                    dataParent: "diagnosticCodes.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "code",
                    label: "Diagnosis code",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "2",
                    dataParent: "diagnosticCodes.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "type",
                    label: "Diagnosis type",
                    inputType: "select",
                    formRow: "3",
                    formColumn: "3",
                    dataParent: "diagnosticCodes.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "prefix",
                    label: "Prefix",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "4",
                    dataParent: "diagnosticCodes.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "cluster",
                    label: "Diagnosis cluster",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "5",
                    dataParent: "diagnosticCodes.table",
                    tableKey: "table"
                  }
                ]
              }
            ],
            columnsCount: 5
          }
        }
      ]
    },
    interventionCodes: {
      pageTitle: "Intervention codes",
      pageDataKey: "interventionCodes",
      pageChildren: [
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "interventionCodes.table.name",
          assetBase: "?"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "interventionCodes.table.profession",
          assetBase: "?"
        },
        {
          label: "Entered on day",
          elementKey: "day",
          fqn: "interventionCodes.table.day",
          assetBase: "?"
        },
        {
          label: "Entered at time",
          elementKey: "time",
          fqn: "interventionCodes.table.time",
          assetBase: "?"
        },
        {
          elementKey: "spacer",
          fqn: "interventionCodes.table.spacer",
          assetBase: "?"
        },
        {
          label: "Intervention code attributes",
          elementKey: "label",
          fqn: "interventionCodes.table.label",
          formOption: "bold-text"
        },
        {
          label: "Intervention",
          elementKey: "intervention",
          fqn: "interventionCodes.table.intervention",
          dataCaseStudy: "3.GY.10.VA-NL-2.GZ.21.EA"
        },
        {
          label: "Status",
          elementKey: "status",
          fqn: "interventionCodes.table.status"
        },
        {
          label: "Laterally",
          elementKey: "laterally",
          fqn: "interventionCodes.table.laterally"
        },
        {
          label: "Extent",
          elementKey: "extent",
          fqn: "interventionCodes.table.extent"
        }
      ],
      generated: "2019-07-10T07:38:20-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "interventionCodes",
          tableKey: "table",
          addButtonText: "Add an intervention code",
          tableCells: [
            {
              elementKey: "name",
              label: "Entered by name",
              tableColumn: "1",
              inputType: "text"
            },
            {
              elementKey: "profession",
              label: "Entered by profession",
              tableColumn: "1",
              inputType: "text"
            },
            {
              elementKey: "day",
              label: "Entered on day",
              tableColumn: "1",
              inputType: "day"
            },
            {
              elementKey: "time",
              label: "Entered at time",
              tableColumn: "1",
              inputType: "time"
            },
            {
              elementKey: "intervention",
              label: "Intervention",
              tableColumn: "2",
              inputType: "text"
            },
            {
              elementKey: "status",
              label: "Status",
              tableColumn: "3",
              inputType: "text"
            },
            {
              elementKey: "laterally",
              label: "Laterally",
              tableColumn: "4",
              inputType: "text"
            },
            {
              elementKey: "extent",
              label: "Extent",
              tableColumn: "5",
              inputType: "text"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "name",
                    label: "Entered by name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    formCss: "user_name",
                    dataParent: "interventionCodes.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    label: "Entered by profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    dataParent: "interventionCodes.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    label: "Entered on day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    dataParent: "interventionCodes.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    label: "Entered at time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    dataParent: "interventionCodes.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "spacer",
                    inputType: "spacer",
                    formRow: "2",
                    formColumn: "1",
                    formCss: "width-70",
                    dataParent: "interventionCodes.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "label",
                    label: "Intervention code attributes",
                    inputType: "form_label",
                    formRow: "2",
                    formColumn: "2",
                    formCss: "width-30 bold-text",
                    dataParent: "interventionCodes.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "intervention",
                    label: "Intervention",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "1",
                    formCss: "width-70",
                    dataParent: "interventionCodes.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "status",
                    label: "Status",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "2",
                    formCss: "width-10",
                    dataParent: "interventionCodes.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "laterally",
                    label: "Laterally",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "3",
                    formCss: "width-10",
                    dataParent: "interventionCodes.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "extent",
                    label: "Extent",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "4",
                    formCss: "width-10",
                    dataParent: "interventionCodes.table",
                    tableKey: "table"
                  }
                ]
              }
            ],
            columnsCount: 4
          }
        }
      ]
    },
    caseMixGroup: {
      pageTitle: "Case mix group",
      pageDataKey: "caseMixGroup",
      pageChildren: [
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "caseMixGroup.table.name",
          assetBase: "?"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "caseMixGroup.table.profession",
          assetBase: "?"
        },
        {
          label: "Entered on day",
          elementKey: "day",
          fqn: "caseMixGroup.table.day",
          assetBase: "?"
        },
        {
          label: "Entered at time",
          elementKey: "time",
          fqn: "caseMixGroup.table.time",
          assetBase: "?"
        },
        {
          label: "Major clinical category",
          elementKey: "clinicalCategory",
          fqn: "caseMixGroup.table.clinicalCategory"
        },
        {
          label: "Case mix number",
          elementKey: "caseMixNumber",
          fqn: "caseMixGroup.table.caseMixNumber"
        },
        {
          label: "Resource intensity weight",
          elementKey: "resourceIntensity",
          fqn: "caseMixGroup.table.resourceIntensity"
        },
        {
          label: "Expected length of stay",
          elementKey: "expectedStay",
          fqn: "caseMixGroup.table.expectedStay"
        },
        {
          label: "Analysis",
          elementKey: "analysis",
          fqn: "caseMixGroup.table.analysis"
        }
      ],
      generated: "2019-07-10T07:38:20-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "caseMixGroup",
          tableKey: "table",
          addButtonText: "Add a case mix group",
          tableCells: [
            {
              elementKey: "name",
              label: "Entered by name",
              tableColumn: "1",
              inputType: "text"
            },
            {
              elementKey: "profession",
              label: "Entered by profession",
              tableColumn: "2",
              inputType: "text"
            },
            {
              elementKey: "day",
              label: "Entered on day",
              tableColumn: "3",
              inputType: "day"
            },
            {
              elementKey: "time",
              label: "Entered at time",
              tableColumn: "4",
              inputType: "time"
            },
            {
              elementKey: "clinicalCategory",
              label: "Major clinical category",
              tableColumn: "5",
              inputType: "text"
            },
            {
              elementKey: "caseMixNumber",
              label: "Case mix number",
              tableColumn: "6",
              inputType: "text"
            },
            {
              elementKey: "resourceIntensity",
              label: "Resource intensity weight",
              tableColumn: "7",
              inputType: "text"
            },
            {
              elementKey: "expectedStay",
              label: "Expected length of stay",
              tableColumn: "8",
              inputType: "text"
            },
            {
              elementKey: "analysis",
              label: "Analysis",
              tableColumn: "9",
              inputType: "textarea"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "name",
                    label: "Entered by name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    formCss: "user_name",
                    dataParent: "caseMixGroup.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    label: "Entered by profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    dataParent: "caseMixGroup.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    label: "Entered on day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    dataParent: "caseMixGroup.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    label: "Entered at time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    dataParent: "caseMixGroup.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "clinicalCategory",
                    label: "Major clinical category",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "1",
                    formCss: "is-one-third",
                    dataParent: "caseMixGroup.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "caseMixNumber",
                    label: "Case mix number",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "2",
                    formCss: "is-one-third",
                    dataParent: "caseMixGroup.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "resourceIntensity",
                    label: "Resource intensity weight",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "1",
                    formCss: "is-one-third",
                    dataParent: "caseMixGroup.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "expectedStay",
                    label: "Expected length of stay",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "2",
                    formCss: "is-one-third",
                    dataParent: "caseMixGroup.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    elementKey: "analysis",
                    label: "Analysis",
                    inputType: "textarea",
                    formRow: "4",
                    formColumn: "1",
                    dataParent: "caseMixGroup.table",
                    tableKey: "table"
                  }
                ]
              }
            ],
            columnsCount: 4
          }
        }
      ]
    }
  }
}
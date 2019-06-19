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
          fqn: "assessmentTools.admissions.admissions1_1"
        },
        {
          label: "Patient health questionaire",
          elementKey: "admissions2_1",
          fqn: "assessmentTools.admissions.admissions2_1"
        },
        {
          label: "Alcohol consumption",
          elementKey: "admissions3_1",
          fqn: "assessmentTools.admissions.admissions3_1"
        },
        {
          label: "OPQRSTUV",
          elementKey: "painAssessment1_1",
          fqn: "assessmentTools.painAssessment.painAssessment1_1"
        },
        {
          label: "0-10 numeric rating scale",
          elementKey: "painAssessment2_1",
          fqn: "assessmentTools.painAssessment.painAssessment2_1"
        },
        {
          label: "Glasgow coma scale",
          elementKey: "neuroAssessment1_1",
          fqn: "assessmentTools.neuroAssessment.neuroAssessment1_1"
        },
        {
          label: "Mini mental state examination",
          elementKey: "neuroAssessment2_1",
          fqn: "assessmentTools.neuroAssessment.neuroAssessment2_1"
        },
        {
          label: "Richmond agitation scale",
          elementKey: "neuroAssessment3_1",
          fqn: "assessmentTools.neuroAssessment.neuroAssessment3_1"
        },
        {
          label: "Fall assessment",
          elementKey: "fallRisk1_1",
          fqn: "assessmentTools.fallRisk.fallRisk1_1"
        },
        {
          label: "Risk for falls",
          elementKey: "fallRisk2_1",
          fqn: "assessmentTools.fallRisk.fallRisk2_1"
        },
        {
          label: "Consult and referral note template",
          elementKey: "notes1_1",
          fqn: "assessmentTools.notes.notes1_1"
        },
        {
          label: "COPD assessment",
          elementKey: "educational1_1",
          fqn: "assessmentTools.educational.educational1_1"
        },
        {
          label: "Bristol stool chart",
          elementKey: "educational2_1",
          fqn: "assessmentTools.educational.educational2_1"
        },
        {
          label: "Braden scale",
          elementKey: "wound1_1",
          fqn: "assessmentTools.wound.wound1_1"
        },
        {
          label: "Best possible medication history",
          elementKey: "medication1_1",
          fqn: "assessmentTools.medication.medication1_1"
        }
      ],
      generated: "2019-06-19T07:41:01-07:00",
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
                formCss: "h2",
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
                    assetBase: "standardized-assessment-tools",
                    assetName: "the-canadian-ed-triage-and-acuity-scale.gif",
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
                    assetBase: "standardized-assessment-tools",
                    assetName: "patient-health-questionnaire.pdf",
                    dataParent: "assessmentTools.admissions",
                    fqn: "assessmentTools.admissions.admissions2_1",
                    formColumn: "1"
                  },
                  {
                    label: "Alcohol consumption",
                    pageDataKey: "assessmentTools",
                    level3Key: "admissions",
                    elementKey: "admissions3_1",
                    inputType: "assetLink",
                    fsetRow: "3",
                    fsetCol: "1",
                    assetBase: "standardized-assessment-tools",
                    assetName: "audit.pdf",
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
                          assetBase: "standardized-assessment-tools",
                          assetName: "the-canadian-ed-triage-and-acuity-scale.gif",
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
                          assetBase: "standardized-assessment-tools",
                          assetName: "patient-health-questionnaire.pdf",
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
                          label: "Alcohol consumption",
                          pageDataKey: "assessmentTools",
                          level3Key: "admissions",
                          elementKey: "admissions3_1",
                          inputType: "assetLink",
                          fsetRow: "3",
                          fsetCol: "1",
                          assetBase: "standardized-assessment-tools",
                          assetName: "audit.pdf",
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
                formCss: "h2",
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
                    assetBase: "standardized-assessment-tools",
                    assetName: "opqrstuv.pdf",
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
                    assetBase: "standardized-assessment-tools",
                    assetName: "numeric-rating-scale.pdf",
                    dataParent: "assessmentTools.painAssessment",
                    fqn: "assessmentTools.painAssessment.painAssessment2_1",
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
                          assetBase: "standardized-assessment-tools",
                          assetName: "opqrstuv.pdf",
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
                          assetBase: "standardized-assessment-tools",
                          assetName: "numeric-rating-scale.pdf",
                          dataParent: "assessmentTools.painAssessment",
                          fqn: "assessmentTools.painAssessment.painAssessment2_1",
                          formColumn: "1"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              },
              {
                label: "Neurological assessment",
                pageDataKey: "assessmentTools",
                elementKey: "neuroAssessment",
                inputType: "fieldset",
                formRow: "1",
                formColumn: "3",
                formCss: "h2",
                dataParent: "assessmentTools",
                fqn: "assessmentTools.neuroAssessment",
                elements: [
                  {
                    label: "Glasgow coma scale",
                    pageDataKey: "assessmentTools",
                    level3Key: "neuroAssessment",
                    elementKey: "neuroAssessment1_1",
                    inputType: "assetLink",
                    fsetRow: "1",
                    fsetCol: "1",
                    assetBase: "standardized-assessment-tools",
                    assetName: "glasgow-coma-scale.pdf",
                    dataParent: "assessmentTools.neuroAssessment",
                    fqn: "assessmentTools.neuroAssessment.neuroAssessment1_1",
                    formColumn: "1"
                  },
                  {
                    label: "Mini mental state examination",
                    pageDataKey: "assessmentTools",
                    level3Key: "neuroAssessment",
                    elementKey: "neuroAssessment2_1",
                    inputType: "assetLink",
                    fsetRow: "2",
                    fsetCol: "1",
                    assetBase: "standardized-assessment-tools",
                    assetName: "mini-mental-health-screen.pdf",
                    dataParent: "assessmentTools.neuroAssessment",
                    fqn: "assessmentTools.neuroAssessment.neuroAssessment2_1",
                    formColumn: "1"
                  },
                  {
                    label: "Richmond agitation scale",
                    pageDataKey: "assessmentTools",
                    level3Key: "neuroAssessment",
                    elementKey: "neuroAssessment3_1",
                    inputType: "assetLink",
                    fsetRow: "3",
                    fsetCol: "1",
                    assetBase: "standardized-assessment-tools",
                    assetName: "richmond-agitation-sedation-scale-rass.pdf",
                    dataParent: "assessmentTools.neuroAssessment",
                    fqn: "assessmentTools.neuroAssessment.neuroAssessment3_1",
                    formColumn: "1"
                  }
                ],
                containerType: "fieldset",
                containerKey: "neuroAssessment",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          label: "Glasgow coma scale",
                          pageDataKey: "assessmentTools",
                          level3Key: "neuroAssessment",
                          elementKey: "neuroAssessment1_1",
                          inputType: "assetLink",
                          fsetRow: "1",
                          fsetCol: "1",
                          assetBase: "standardized-assessment-tools",
                          assetName: "glasgow-coma-scale.pdf",
                          dataParent: "assessmentTools.neuroAssessment",
                          fqn: "assessmentTools.neuroAssessment.neuroAssessment1_1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          label: "Mini mental state examination",
                          pageDataKey: "assessmentTools",
                          level3Key: "neuroAssessment",
                          elementKey: "neuroAssessment2_1",
                          inputType: "assetLink",
                          fsetRow: "2",
                          fsetCol: "1",
                          assetBase: "standardized-assessment-tools",
                          assetName: "mini-mental-health-screen.pdf",
                          dataParent: "assessmentTools.neuroAssessment",
                          fqn: "assessmentTools.neuroAssessment.neuroAssessment2_1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "3",
                      elements: [
                        {
                          label: "Richmond agitation scale",
                          pageDataKey: "assessmentTools",
                          level3Key: "neuroAssessment",
                          elementKey: "neuroAssessment3_1",
                          inputType: "assetLink",
                          fsetRow: "3",
                          fsetCol: "1",
                          assetBase: "standardized-assessment-tools",
                          assetName: "richmond-agitation-sedation-scale-rass.pdf",
                          dataParent: "assessmentTools.neuroAssessment",
                          fqn: "assessmentTools.neuroAssessment.neuroAssessment3_1",
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
                label: "Falls risk",
                pageDataKey: "assessmentTools",
                elementKey: "fallRisk",
                inputType: "fieldset",
                formRow: "2",
                formColumn: "1",
                formCss: "h2",
                dataParent: "assessmentTools",
                fqn: "assessmentTools.fallRisk",
                elements: [
                  {
                    label: "Fall assessment",
                    pageDataKey: "assessmentTools",
                    level3Key: "fallRisk",
                    elementKey: "fallRisk1_1",
                    inputType: "assetLink",
                    fsetRow: "1",
                    fsetCol: "1",
                    assetBase: "standardized-assessment-tools",
                    assetName: "fall-risk-assessment-tool.pdf",
                    dataParent: "assessmentTools.fallRisk",
                    fqn: "assessmentTools.fallRisk.fallRisk1_1",
                    formColumn: "1"
                  },
                  {
                    label: "Risk for falls",
                    pageDataKey: "assessmentTools",
                    level3Key: "fallRisk",
                    elementKey: "fallRisk2_1",
                    inputType: "assetLink",
                    fsetRow: "2",
                    fsetCol: "1",
                    assetBase: "standardized-assessment-tools",
                    assetName: "risk-for-falls.png",
                    dataParent: "assessmentTools.fallRisk",
                    fqn: "assessmentTools.fallRisk.fallRisk2_1",
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
                          label: "Fall assessment",
                          pageDataKey: "assessmentTools",
                          level3Key: "fallRisk",
                          elementKey: "fallRisk1_1",
                          inputType: "assetLink",
                          fsetRow: "1",
                          fsetCol: "1",
                          assetBase: "standardized-assessment-tools",
                          assetName: "fall-risk-assessment-tool.pdf",
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
                          label: "Risk for falls",
                          pageDataKey: "assessmentTools",
                          level3Key: "fallRisk",
                          elementKey: "fallRisk2_1",
                          inputType: "assetLink",
                          fsetRow: "2",
                          fsetCol: "1",
                          assetBase: "standardized-assessment-tools",
                          assetName: "risk-for-falls.png",
                          dataParent: "assessmentTools.fallRisk",
                          fqn: "assessmentTools.fallRisk.fallRisk2_1",
                          formColumn: "1"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              },
              {
                label: "Notes",
                pageDataKey: "assessmentTools",
                elementKey: "notes",
                inputType: "fieldset",
                formRow: "2",
                formColumn: "2",
                formCss: "h2",
                dataParent: "assessmentTools",
                fqn: "assessmentTools.notes",
                elements: [
                  {
                    label: "Consult and referral note template",
                    pageDataKey: "assessmentTools",
                    level3Key: "notes",
                    elementKey: "notes1_1",
                    inputType: "assetLink",
                    fsetRow: "1",
                    fsetCol: "1",
                    assetBase: "standardized-assessment-tools",
                    assetName: "consultation-form.pdf",
                    dataParent: "assessmentTools.notes",
                    fqn: "assessmentTools.notes.notes1_1",
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
                          label: "Consult and referral note template",
                          pageDataKey: "assessmentTools",
                          level3Key: "notes",
                          elementKey: "notes1_1",
                          inputType: "assetLink",
                          fsetRow: "1",
                          fsetCol: "1",
                          assetBase: "standardized-assessment-tools",
                          assetName: "consultation-form.pdf",
                          dataParent: "assessmentTools.notes",
                          fqn: "assessmentTools.notes.notes1_1",
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
                formColumn: "3",
                formCss: "h2",
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
                    assetBase: "standardized-assessment-tools",
                    assetName: "copd-assessment-test.pdf",
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
                    assetBase: "standardized-assessment-tools",
                    assetName: "bristol-stool-chart.pdf",
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
                          assetBase: "standardized-assessment-tools",
                          assetName: "copd-assessment-test.pdf",
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
                          assetBase: "standardized-assessment-tools",
                          assetName: "bristol-stool-chart.pdf",
                          dataParent: "assessmentTools.educational",
                          fqn: "assessmentTools.educational.educational2_1",
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
                label: "Wound assessment",
                pageDataKey: "assessmentTools",
                elementKey: "wound",
                inputType: "fieldset",
                formRow: "3",
                formColumn: "1",
                formCss: "h2",
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
                    assetBase: "standardized-assessment-tools",
                    assetName: "braden-scale.pdf",
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
                          assetBase: "standardized-assessment-tools",
                          assetName: "braden-scale.pdf",
                          dataParent: "assessmentTools.wound",
                          fqn: "assessmentTools.wound.wound1_1",
                          formColumn: "1"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              },
              {
                label: "Medication",
                pageDataKey: "assessmentTools",
                elementKey: "medication",
                inputType: "fieldset",
                formRow: "3",
                formColumn: "2",
                formCss: "h2",
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
                    assetBase: "standardized-assessment-tools",
                    assetName: "best_possible_medication.pdf",
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
                          assetBase: "standardized-assessment-tools",
                          assetName: "best_possible_medication.pdf",
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
      generated: "2019-06-19T07:41:01-07:00",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                label: "<a href=\"/assets/static-databases/snowmed-ct.csv\" target=\"_blank\">SnomedCT</a>",
                pageDataKey: "codeLookup",
                elementKey: "snomed",
                inputType: "text",
                formRow: "1",
                formColumn: "1",
                formCss: "is-half",
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
                elementKey: "icf",
                inputType: "text",
                formRow: "2",
                formColumn: "1",
                formCss: "is-half",
                dataParent: "codeLookup",
                fqn: "codeLookup.icf"
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
      pageChildren: [
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "diagnosticCodes.table.name"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "diagnosticCodes.table.profession"
        },
        {
          label: "Entered on day",
          elementKey: "day",
          fqn: "diagnosticCodes.table.day"
        },
        {
          label: "Entered at time",
          elementKey: "time",
          fqn: "diagnosticCodes.table.time"
        },
        {
          label: "<a href=\"/assets/static-databases/icd-10-medical-diagnosis-codes.pdf\" target=\"_blank\">ICD-10 database</a>",
          elementKey: "icd10",
          fqn: "diagnosticCodes.table.icd10"
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
      generated: "2019-06-19T07:41:01-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a diagnostic code",
          tableCells: [
            {
              label: "Entered by name",
              pageDataKey: "diagnosticCodes",
              level2Key: "table",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              formCss: "user_name",
              tableColumn: "1",
              assetBase: "?",
              dataParent: "diagnosticCodes.table",
              fqn: "diagnosticCodes.table.name",
              tableKey: "table"
            },
            {
              label: "Entered by profession",
              pageDataKey: "diagnosticCodes",
              level2Key: "table",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              formCss: "user_pro",
              tableColumn: "1",
              assetBase: "?",
              dataParent: "diagnosticCodes.table",
              fqn: "diagnosticCodes.table.profession",
              tableKey: "table"
            },
            {
              label: "Entered on day",
              pageDataKey: "diagnosticCodes",
              level2Key: "table",
              elementKey: "day",
              inputType: "day",
              formRow: "1",
              formColumn: "3",
              formCss: "user_day",
              tableColumn: "1",
              assetBase: "?",
              dataParent: "diagnosticCodes.table",
              fqn: "diagnosticCodes.table.day",
              tableKey: "table"
            },
            {
              label: "Entered at time",
              pageDataKey: "diagnosticCodes",
              level2Key: "table",
              elementKey: "time",
              inputType: "time",
              formRow: "1",
              formColumn: "4",
              formCss: "user_time",
              tableColumn: "1",
              assetBase: "?",
              dataParent: "diagnosticCodes.table",
              fqn: "diagnosticCodes.table.time",
              tableKey: "table"
            },
            {
              label: "<a href=\"/assets/static-databases/icd-10-medical-diagnosis-codes.pdf\" target=\"_blank\">ICD-10 database</a>",
              pageDataKey: "diagnosticCodes",
              level2Key: "table",
              elementKey: "icd10",
              inputType: "text",
              formRow: "2",
              formColumn: "1",
              tableColumn: "2",
              assetBase: "static-databases",
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
              tableColumn: "3",
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
              tableColumn: "4",
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
              tableColumn: "5",
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
              tableColumn: "6",
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
              tableColumn: "7",
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
                    label: "Entered by name",
                    pageDataKey: "diagnosticCodes",
                    level2Key: "table",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    formCss: "user_name",
                    tableColumn: "1",
                    assetBase: "?",
                    dataParent: "diagnosticCodes.table",
                    fqn: "diagnosticCodes.table.name",
                    tableKey: "table"
                  },
                  {
                    label: "Entered by profession",
                    pageDataKey: "diagnosticCodes",
                    level2Key: "table",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    tableColumn: "1",
                    assetBase: "?",
                    dataParent: "diagnosticCodes.table",
                    fqn: "diagnosticCodes.table.profession",
                    tableKey: "table"
                  },
                  {
                    label: "Entered on day",
                    pageDataKey: "diagnosticCodes",
                    level2Key: "table",
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    tableColumn: "1",
                    assetBase: "?",
                    dataParent: "diagnosticCodes.table",
                    fqn: "diagnosticCodes.table.day",
                    tableKey: "table"
                  },
                  {
                    label: "Entered at time",
                    pageDataKey: "diagnosticCodes",
                    level2Key: "table",
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    tableColumn: "1",
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
                    label: "<a href=\"/assets/static-databases/icd-10-medical-diagnosis-codes.pdf\" target=\"_blank\">ICD-10 database</a>",
                    pageDataKey: "diagnosticCodes",
                    level2Key: "table",
                    elementKey: "icd10",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "1",
                    tableColumn: "2",
                    assetBase: "static-databases",
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
                    tableColumn: "3",
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
                    tableColumn: "4",
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
                    tableColumn: "5",
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
                    tableColumn: "6",
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
                    tableColumn: "7",
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
      pageChildren: [
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "interventionCodes.table.name"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "interventionCodes.table.profession"
        },
        {
          label: "Entered on day",
          elementKey: "day",
          fqn: "interventionCodes.table.day"
        },
        {
          label: "Entered at time",
          elementKey: "time",
          fqn: "interventionCodes.table.time"
        },
        {
          elementKey: "spacer",
          fqn: "interventionCodes.table.spacer"
        },
        {
          label: "Intervention code attributes",
          elementKey: "label",
          fqn: "interventionCodes.table.label"
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
      generated: "2019-06-19T07:41:01-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add an intervention code",
          tableCells: [
            {
              label: "Entered by name",
              pageDataKey: "interventionCodes",
              level2Key: "table",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              formCss: "user_name",
              tableColumn: "1",
              assetBase: "?",
              dataParent: "interventionCodes.table",
              fqn: "interventionCodes.table.name",
              tableKey: "table"
            },
            {
              label: "Entered by profession",
              pageDataKey: "interventionCodes",
              level2Key: "table",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              formCss: "user_pro",
              tableColumn: "1",
              assetBase: "?",
              dataParent: "interventionCodes.table",
              fqn: "interventionCodes.table.profession",
              tableKey: "table"
            },
            {
              label: "Entered on day",
              pageDataKey: "interventionCodes",
              level2Key: "table",
              elementKey: "day",
              inputType: "day",
              formRow: "1",
              formColumn: "3",
              formCss: "user_day",
              tableColumn: "1",
              assetBase: "?",
              dataParent: "interventionCodes.table",
              fqn: "interventionCodes.table.day",
              tableKey: "table"
            },
            {
              label: "Entered at time",
              pageDataKey: "interventionCodes",
              level2Key: "table",
              elementKey: "time",
              inputType: "time",
              formRow: "1",
              formColumn: "4",
              formCss: "user_time",
              tableColumn: "1",
              tableCss: "hr-table",
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
              formCss: "width-70",
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
              inputType: "form_label",
              formRow: "2",
              formColumn: "2",
              formCss: "width-30 bold-text",
              formOption: "bold-text",
              dataParent: "interventionCodes.table",
              fqn: "interventionCodes.table.label",
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
              formCss: "width-70",
              tableColumn: "2",
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
              formCss: "width-10",
              tableColumn: "3",
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
              formCss: "width-10",
              tableColumn: "4",
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
              formCss: "width-10",
              tableColumn: "5",
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
                    label: "Entered by name",
                    pageDataKey: "interventionCodes",
                    level2Key: "table",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    formCss: "user_name",
                    tableColumn: "1",
                    assetBase: "?",
                    dataParent: "interventionCodes.table",
                    fqn: "interventionCodes.table.name",
                    tableKey: "table"
                  },
                  {
                    label: "Entered by profession",
                    pageDataKey: "interventionCodes",
                    level2Key: "table",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    tableColumn: "1",
                    assetBase: "?",
                    dataParent: "interventionCodes.table",
                    fqn: "interventionCodes.table.profession",
                    tableKey: "table"
                  },
                  {
                    label: "Entered on day",
                    pageDataKey: "interventionCodes",
                    level2Key: "table",
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    tableColumn: "1",
                    assetBase: "?",
                    dataParent: "interventionCodes.table",
                    fqn: "interventionCodes.table.day",
                    tableKey: "table"
                  },
                  {
                    label: "Entered at time",
                    pageDataKey: "interventionCodes",
                    level2Key: "table",
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    tableColumn: "1",
                    tableCss: "hr-table",
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
                    formCss: "width-70",
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
                    inputType: "form_label",
                    formRow: "2",
                    formColumn: "2",
                    formCss: "width-30 bold-text",
                    formOption: "bold-text",
                    dataParent: "interventionCodes.table",
                    fqn: "interventionCodes.table.label",
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
                    formCss: "width-70",
                    tableColumn: "2",
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
                    formCss: "width-10",
                    tableColumn: "3",
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
                    formCss: "width-10",
                    tableColumn: "4",
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
                    formCss: "width-10",
                    tableColumn: "5",
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
    caseMixGroup: {
      pageTitle: "Case mix group",
      pageDataKey: "caseMixGroup",
      pageChildren: [
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "caseMixGroup.table.name"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "caseMixGroup.table.profession"
        },
        {
          label: "Entered on day",
          elementKey: "day",
          fqn: "caseMixGroup.table.day"
        },
        {
          label: "Entered at time",
          elementKey: "time",
          fqn: "caseMixGroup.table.time"
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
      generated: "2019-06-19T07:41:01-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a case mix group",
          tableCells: [
            {
              label: "Entered by name",
              pageDataKey: "caseMixGroup",
              level2Key: "table",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              formCss: "user_name",
              tableColumn: "1",
              assetBase: "?",
              dataParent: "caseMixGroup.table",
              fqn: "caseMixGroup.table.name",
              tableKey: "table"
            },
            {
              label: "Entered by profession",
              pageDataKey: "caseMixGroup",
              level2Key: "table",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              formCss: "user_pro",
              tableColumn: "2",
              assetBase: "?",
              dataParent: "caseMixGroup.table",
              fqn: "caseMixGroup.table.profession",
              tableKey: "table"
            },
            {
              label: "Entered on day",
              pageDataKey: "caseMixGroup",
              level2Key: "table",
              elementKey: "day",
              inputType: "day",
              formRow: "1",
              formColumn: "3",
              formCss: "user_day",
              tableColumn: "3",
              assetBase: "?",
              dataParent: "caseMixGroup.table",
              fqn: "caseMixGroup.table.day",
              tableKey: "table"
            },
            {
              label: "Entered at time",
              pageDataKey: "caseMixGroup",
              level2Key: "table",
              elementKey: "time",
              inputType: "time",
              formRow: "1",
              formColumn: "4",
              formCss: "user_time",
              tableColumn: "4",
              tableCss: "hr-table",
              assetBase: "?",
              dataParent: "caseMixGroup.table",
              fqn: "caseMixGroup.table.time",
              tableKey: "table"
            },
            {
              label: "Major clinical category",
              pageDataKey: "caseMixGroup",
              level2Key: "table",
              elementKey: "clinicalCategory",
              inputType: "text",
              formRow: "2",
              formColumn: "1",
              formCss: "is-one-third",
              tableColumn: "5",
              dataParent: "caseMixGroup.table",
              fqn: "caseMixGroup.table.clinicalCategory",
              tableKey: "table"
            },
            {
              label: "Case mix number",
              pageDataKey: "caseMixGroup",
              level2Key: "table",
              elementKey: "caseMixNumber",
              inputType: "text",
              formRow: "2",
              formColumn: "2",
              formCss: "is-one-third",
              tableColumn: "6",
              dataParent: "caseMixGroup.table",
              fqn: "caseMixGroup.table.caseMixNumber",
              tableKey: "table"
            },
            {
              label: "Resource intensity weight",
              pageDataKey: "caseMixGroup",
              level2Key: "table",
              elementKey: "resourceIntensity",
              inputType: "text",
              formRow: "3",
              formColumn: "1",
              formCss: "is-one-third",
              tableColumn: "7",
              dataParent: "caseMixGroup.table",
              fqn: "caseMixGroup.table.resourceIntensity",
              tableKey: "table"
            },
            {
              label: "Expected length of stay",
              pageDataKey: "caseMixGroup",
              level2Key: "table",
              elementKey: "expectedStay",
              inputType: "text",
              formRow: "3",
              formColumn: "2",
              formCss: "is-one-third",
              tableColumn: "8",
              dataParent: "caseMixGroup.table",
              fqn: "caseMixGroup.table.expectedStay",
              tableKey: "table"
            },
            {
              label: "Analysis",
              pageDataKey: "caseMixGroup",
              level2Key: "table",
              elementKey: "analysis",
              inputType: "textarea",
              formRow: "4",
              formColumn: "1",
              tableColumn: "9",
              dataParent: "caseMixGroup.table",
              fqn: "caseMixGroup.table.analysis",
              tableKey: "table"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    label: "Entered by name",
                    pageDataKey: "caseMixGroup",
                    level2Key: "table",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    formCss: "user_name",
                    tableColumn: "1",
                    assetBase: "?",
                    dataParent: "caseMixGroup.table",
                    fqn: "caseMixGroup.table.name",
                    tableKey: "table"
                  },
                  {
                    label: "Entered by profession",
                    pageDataKey: "caseMixGroup",
                    level2Key: "table",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    tableColumn: "2",
                    assetBase: "?",
                    dataParent: "caseMixGroup.table",
                    fqn: "caseMixGroup.table.profession",
                    tableKey: "table"
                  },
                  {
                    label: "Entered on day",
                    pageDataKey: "caseMixGroup",
                    level2Key: "table",
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    tableColumn: "3",
                    assetBase: "?",
                    dataParent: "caseMixGroup.table",
                    fqn: "caseMixGroup.table.day",
                    tableKey: "table"
                  },
                  {
                    label: "Entered at time",
                    pageDataKey: "caseMixGroup",
                    level2Key: "table",
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    tableColumn: "4",
                    tableCss: "hr-table",
                    assetBase: "?",
                    dataParent: "caseMixGroup.table",
                    fqn: "caseMixGroup.table.time",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "Major clinical category",
                    pageDataKey: "caseMixGroup",
                    level2Key: "table",
                    elementKey: "clinicalCategory",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "1",
                    formCss: "is-one-third",
                    tableColumn: "5",
                    dataParent: "caseMixGroup.table",
                    fqn: "caseMixGroup.table.clinicalCategory",
                    tableKey: "table"
                  },
                  {
                    label: "Case mix number",
                    pageDataKey: "caseMixGroup",
                    level2Key: "table",
                    elementKey: "caseMixNumber",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "2",
                    formCss: "is-one-third",
                    tableColumn: "6",
                    dataParent: "caseMixGroup.table",
                    fqn: "caseMixGroup.table.caseMixNumber",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    label: "Resource intensity weight",
                    pageDataKey: "caseMixGroup",
                    level2Key: "table",
                    elementKey: "resourceIntensity",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "1",
                    formCss: "is-one-third",
                    tableColumn: "7",
                    dataParent: "caseMixGroup.table",
                    fqn: "caseMixGroup.table.resourceIntensity",
                    tableKey: "table"
                  },
                  {
                    label: "Expected length of stay",
                    pageDataKey: "caseMixGroup",
                    level2Key: "table",
                    elementKey: "expectedStay",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "2",
                    formCss: "is-one-third",
                    tableColumn: "8",
                    dataParent: "caseMixGroup.table",
                    fqn: "caseMixGroup.table.expectedStay",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    label: "Analysis",
                    pageDataKey: "caseMixGroup",
                    level2Key: "table",
                    elementKey: "analysis",
                    inputType: "textarea",
                    formRow: "4",
                    formColumn: "1",
                    tableColumn: "9",
                    dataParent: "caseMixGroup.table",
                    fqn: "caseMixGroup.table.analysis",
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
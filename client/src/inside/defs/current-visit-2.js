/* eslint-disable quotes */
export default function () {
  return {
    genitourinary: {
      pageTitle: "Genitourinary assessment",
      pageDataKey: "genitourinary",
      pageChildren: [
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "genitourinary.table.name",
          dataCaseStudy: "Jason"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "genitourinary.table.profession",
          assetBase: "standardized-assessment-tools",
          assetName: "the-canadian-ed-triage-and-acuity-scale.gif",
          dataCaseStudy: "RN"
        },
        {
          label: "Entered on day",
          elementKey: "day",
          fqn: "genitourinary.table.day",
          assetBase: "standardized-assessment-tools",
          assetName: "patient-health-questionnaire.pdf",
          dataCaseStudy: "0"
        },
        {
          label: "Entered at time",
          elementKey: "time",
          fqn: "genitourinary.table.time",
          assetBase: "standardized-assessment-tools",
          assetName: "audit.pdf",
          dataCaseStudy: "0.8125"
        },
        {
          label: "None",
          elementKey: "none",
          fqn: "genitourinary.table.urinaryGroup1.none",
          assetBase: "standardized-assessment-tools",
          assetName: "opqrstuv.pdf",
          dataCaseStudy: "None"
        },
        {
          label: "Increased frequency",
          elementKey: "increasedFrequency",
          fqn: "genitourinary.table.urinaryGroup1.increasedFrequency",
          assetBase: "standardized-assessment-tools",
          assetName: "numeric-rating-scale.pdf",
          dataCaseStudy: "None"
        },
        {
          label: "Dysuria",
          elementKey: "dysuria",
          fqn: "genitourinary.table.urinaryGroup1.dysuria",
          dataCaseStudy: "None"
        },
        {
          label: "Hermaturia",
          elementKey: "hernaturia",
          fqn: "genitourinary.table.urinaryGroup1.hernaturia",
          assetBase: "standardized-assessment-tools",
          assetName: "glasgow-coma-scale.pdf",
          dataCaseStudy: "None"
        },
        {
          label: "Oliguria",
          elementKey: "oliguria",
          fqn: "genitourinary.table.urinaryGroup1.oliguria",
          assetBase: "standardized-assessment-tools",
          assetName: "mini-mental-health-screen.pdf",
          dataCaseStudy: "None"
        },
        {
          label: "Incontinence",
          elementKey: "incontinence",
          fqn: "genitourinary.table.urinaryGroup1.incontinence",
          assetBase: "standardized-assessment-tools",
          assetName: "richmond-agitation-sedation-scale-rass.pdf",
          dataCaseStudy: "None"
        },
        {
          label: "Retention",
          elementKey: "retention",
          fqn: "genitourinary.table.urinaryGroup1.retention",
          dataCaseStudy: "None"
        },
        {
          label: "Distention",
          elementKey: "distention",
          fqn: "genitourinary.table.urinaryGroup1.distention",
          assetBase: "standardized-assessment-tools",
          assetName: "fall-risk-assessment-tool.pdf",
          dataCaseStudy: "None"
        },
        {
          label: "Last voided day",
          elementKey: "lastVoidedDay",
          fqn: "genitourinary.table.urinaryGroup2.lastVoidedDay",
          dataCaseStudy: "0"
        },
        {
          label: "Last voided time",
          elementKey: "lastVoidedTime",
          fqn: "genitourinary.table.urinaryGroup2.lastVoidedTime",
          assetBase: "standardized-assessment-tools",
          assetName: "consultation-form.pdf",
          dataCaseStudy: "0.666666666666667"
        },
        {
          label: "Urine colour",
          elementKey: "colour",
          fqn: "genitourinary.table.urinaryGroup2.colour",
          options: [
            {
              text: "Pale yellow"
            },
            {
              text: "Dark yellow"
            },
            {
              text: "Amber"
            },
            {
              text: "Red/blood"
            },
            {
              text: "Other"
            }
          ],
          dataCaseStudy: "Pale yellow"
        },
        {
          label: "Urine consistency",
          elementKey: "consistency",
          fqn: "genitourinary.table.urinaryGroup2.consistency",
          options: [
            {
              text: "Clear"
            },
            {
              text: "Cloudy"
            },
            {
              text: "Foamy"
            },
            {
              text: "Other"
            }
          ],
          assetBase: "standardized-assessment-tools",
          assetName: "copd-assessment-test.pdf",
          dataCaseStudy: "Clear"
        },
        {
          label: "Diaper",
          elementKey: "diaper",
          fqn: "genitourinary.table.urinaryGroup2.diaper",
          options: [
            {
              text: "Yes"
            },
            {
              text: "No"
            }
          ],
          assetBase: "standardized-assessment-tools",
          assetName: "bristol-stool-chart.pdf",
          dataCaseStudy: "No"
        },
        {
          label: "Foley",
          elementKey: "foley",
          fqn: "genitourinary.table.foleyGroup.foley",
          options: [
            {
              text: "Yes"
            },
            {
              text: "No"
            }
          ],
          assetBase: "standardized-assessment-tools",
          assetName: "braden-scale.pdf",
          dataCaseStudy: "No"
        },
        {
          label: "Type",
          elementKey: "foleyType",
          fqn: "genitourinary.table.foleyGroup.foleyType",
          helperText: "eg. indwelling catheter",
          dataCaseStudy: "(not filled)",
          helperHtml: "<p>eg. indwelling catheter</p>"
        },
        {
          label: "Size",
          elementKey: "foleySize",
          fqn: "genitourinary.table.foleyGroup.foleySize",
          assetBase: "standardized-assessment-tools",
          assetName: "best_possible_medication.pdf",
          dataCaseStudy: "(not filled)"
        },
        {
          label: "Last catheter change",
          elementKey: "lastChange",
          fqn: "genitourinary.table.foleyGroup.lastChange"
        },
        {
          label: "Pelvic pain",
          elementKey: "pelvicPain",
          fqn: "genitourinary.table.pelvicGroup.pelvicPain",
          options: [
            {
              text: "Yes"
            },
            {
              text: "No"
            }
          ],
          dataCaseStudy: "No"
        },
        {
          label: "Location",
          elementKey: "location",
          fqn: "genitourinary.table.pelvicGroup.location",
          dataCaseStudy: "(not filled)"
        },
        {
          label: "Pelvic pain source",
          elementKey: "pelvicPainSource",
          fqn: "genitourinary.table.pelvicGroup.pelvicPainSource",
          options: [
            {
              text: "Observed"
            },
            {
              text: "As per patient observed"
            },
            {
              text: "Not observed"
            }
          ],
          dataCaseStudy: "(not filled)"
        },
        {
          label: "If answered yes, please complete the pain assessment",
          elementKey: "aLabel",
          fqn: "genitourinary.table.pelvicGroup.aLabel",
          dataCaseStudy: "(not filled)"
        },
        {
          label: "Discharge",
          elementKey: "discharge",
          fqn: "genitourinary.table.vaginal.discharge",
          assetBase: "?",
          dataCaseStudy: "(not filled)"
        },
        {
          label: "Bleeding",
          elementKey: "bleeding",
          fqn: "genitourinary.table.vaginal.bleeding",
          assetBase: "?",
          dataCaseStudy: "(not filled)"
        },
        {
          label: "Description",
          elementKey: "description",
          fqn: "genitourinary.table.vaginal.description",
          assetBase: "?",
          dataCaseStudy: "(not filled)"
        },
        {
          label: "Last menstrual period date",
          elementKey: "lastMenstrualPeriodDate",
          fqn: "genitourinary.table.vaginal.lastMenstrualPeriodDate",
          assetBase: "static-databases",
          assetName: "icd-10-medical-diagnosis-codes.pdf"
        },
        {
          label: "Pregnant",
          elementKey: "pregnant",
          fqn: "genitourinary.table.pregnantGroup.pregnant",
          options: [
            {
              text: "Yes"
            },
            {
              text: "No"
            },
            {
              text: "Unknown"
            }
          ],
          dataCaseStudy: "no"
        },
        {
          label: "Gravida (number of pregnancies)",
          elementKey: "gravida",
          fqn: "genitourinary.table.pregnantGroup.gravida",
          dataCaseStudy: "5"
        },
        {
          label: "Para (number of children)",
          elementKey: "para",
          fqn: "genitourinary.table.pregnantGroup.para",
          dataCaseStudy: "4"
        },
        {
          label: "Living children",
          elementKey: "livingChildren",
          fqn: "genitourinary.table.pregnantGroup.livingChildren",
          dataCaseStudy: "4"
        },
        {
          label: "Comments",
          elementKey: "comments",
          fqn: "genitourinary.table.pregnantGroup.comments",
          dataCaseStudy: "(not filled)"
        }
      ],
      generated: "2019-08-02T17:59:37-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "genitourinary",
          tableKey: "table",
          addButtonText: "Add a genitourinary assessment",
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
              tableCss: "hr-table",
              inputType: "time"
            },
            {
              elementKey: "urinaryGroup1",
              label: "Urinary symptoms",
              tableColumn: "5",
              inputType: "fieldset",
              tableCss: "undefinedhide-table-element"
            },
            {
              elementKey: "none",
              label: "None",
              tableColumn: "6",
              inputType: "checkbox"
            },
            {
              elementKey: "increasedFrequency",
              label: "Increased frequency",
              tableColumn: "7",
              inputType: "checkbox"
            },
            {
              elementKey: "dysuria",
              label: "Dysuria",
              tableColumn: "8",
              inputType: "checkbox"
            },
            {
              elementKey: "hernaturia",
              label: "Hermaturia",
              tableColumn: "9",
              inputType: "checkbox"
            },
            {
              elementKey: "oliguria",
              label: "Oliguria",
              tableColumn: "10",
              inputType: "checkbox"
            },
            {
              elementKey: "incontinence",
              label: "Incontinence",
              tableColumn: "11",
              inputType: "checkbox"
            },
            {
              elementKey: "retention",
              label: "Retention",
              tableColumn: "12",
              inputType: "checkbox"
            },
            {
              elementKey: "distention",
              label: "Distention",
              tableColumn: "13",
              inputType: "checkbox"
            },
            {
              elementKey: "lastVoidedDay",
              label: "Last voided day",
              tableColumn: "14",
              inputType: "day"
            },
            {
              elementKey: "lastVoidedTime",
              label: "Last voided time",
              tableColumn: "15",
              inputType: "time"
            },
            {
              elementKey: "colour",
              label: "Urine colour",
              tableColumn: "16",
              inputType: "select"
            },
            {
              elementKey: "consistency",
              label: "Urine consistency",
              tableColumn: "17",
              inputType: "select"
            },
            {
              elementKey: "diaper",
              label: "Diaper",
              tableColumn: "18",
              inputType: "select"
            },
            {
              elementKey: "foley",
              label: "Foley",
              tableColumn: "19",
              inputType: "select"
            },
            {
              elementKey: "foleyType",
              label: "Type",
              tableColumn: "20",
              inputType: "text"
            },
            {
              elementKey: "foleySize",
              label: "Size",
              tableColumn: "21",
              inputType: "text"
            },
            {
              elementKey: "lastChange",
              label: "Last catheter change",
              tableColumn: "22",
              inputType: "day"
            },
            {
              elementKey: "pelvicPain",
              label: "Pelvic pain",
              tableColumn: "23",
              inputType: "select"
            },
            {
              elementKey: "location",
              label: "Location",
              tableColumn: "24",
              inputType: "text"
            },
            {
              elementKey: "pelvicPainSource",
              label: "Pelvic pain source",
              tableColumn: "26",
              inputType: "select"
            },
            {
              elementKey: "discharge",
              label: "Discharge",
              tableColumn: "27",
              inputType: "checkbox"
            },
            {
              elementKey: "bleeding",
              label: "Bleeding",
              tableColumn: "28",
              inputType: "checkbox"
            },
            {
              elementKey: "description",
              label: "Description",
              tableColumn: "29",
              inputType: "text"
            },
            {
              elementKey: "lastMenstrualPeriodDate",
              label: "Last menstrual period date",
              tableColumn: "30",
              inputType: "date"
            },
            {
              elementKey: "pregnant",
              label: "Pregnant",
              tableColumn: "31",
              inputType: "select"
            },
            {
              elementKey: "gravida",
              label: "Gravida (number of pregnancies)",
              tableColumn: "32",
              inputType: "text"
            },
            {
              elementKey: "para",
              label: "Para (number of children)",
              tableColumn: "33",
              inputType: "text"
            },
            {
              elementKey: "livingChildren",
              label: "Living children",
              tableColumn: "34",
              inputType: "text"
            },
            {
              elementKey: "comments",
              label: "Comments",
              tableColumn: "35",
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
                    dataParent: "genitourinary.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    label: "Entered by profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    dataParent: "genitourinary.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    label: "Entered on day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    dataParent: "genitourinary.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    label: "Entered at time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    dataParent: "genitourinary.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "urinaryGroup1",
                    label: "Urinary symptoms",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "genitourinary.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "none",
                              label: "None",
                              inputType: "checkbox",
                              fsetRow: "1",
                              dataParent: "genitourinary.table.urinaryGroup1",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "increasedFrequency",
                              label: "Increased frequency",
                              inputType: "checkbox",
                              fsetRow: "2",
                              dataParent: "genitourinary.table.urinaryGroup1",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "dysuria",
                              label: "Dysuria",
                              inputType: "checkbox",
                              fsetRow: "3",
                              dataParent: "genitourinary.table.urinaryGroup1",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "hernaturia",
                              label: "Hermaturia",
                              inputType: "checkbox",
                              fsetRow: "4",
                              dataParent: "genitourinary.table.urinaryGroup1",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "oliguria",
                              label: "Oliguria",
                              inputType: "checkbox",
                              fsetRow: "5",
                              dataParent: "genitourinary.table.urinaryGroup1",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              elementKey: "incontinence",
                              label: "Incontinence",
                              inputType: "checkbox",
                              fsetRow: "6",
                              dataParent: "genitourinary.table.urinaryGroup1",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "7",
                          elements: [
                            {
                              elementKey: "retention",
                              label: "Retention",
                              inputType: "checkbox",
                              fsetRow: "7",
                              dataParent: "genitourinary.table.urinaryGroup1",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "8",
                          elements: [
                            {
                              elementKey: "distention",
                              label: "Distention",
                              inputType: "checkbox",
                              fsetRow: "8",
                              dataParent: "genitourinary.table.urinaryGroup1",
                              tableKey: "table"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "urinaryGroup2",
                    label: "Urinary",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "2",
                    dataParent: "genitourinary.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "lastVoidedDay",
                              label: "Last voided day",
                              inputType: "day",
                              fsetRow: "1",
                              dataParent: "genitourinary.table.urinaryGroup2",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "lastVoidedTime",
                              label: "Last voided time",
                              inputType: "time",
                              fsetRow: "2",
                              dataParent: "genitourinary.table.urinaryGroup2",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "colour",
                              label: "Urine colour",
                              inputType: "select",
                              fsetRow: "3",
                              dataParent: "genitourinary.table.urinaryGroup2",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "consistency",
                              label: "Urine consistency",
                              inputType: "select",
                              fsetRow: "4",
                              dataParent: "genitourinary.table.urinaryGroup2",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "diaper",
                              label: "Diaper",
                              inputType: "select",
                              fsetRow: "5",
                              dataParent: "genitourinary.table.urinaryGroup2",
                              tableKey: "table"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "foleyGroup",
                    label: "Foley",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "3",
                    dataParent: "genitourinary.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "foley",
                              label: "Foley",
                              inputType: "select",
                              fsetRow: "1",
                              dataParent: "genitourinary.table.foleyGroup",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "foleyType",
                              label: "Type",
                              inputType: "text",
                              fsetRow: "2",
                              dataParent: "genitourinary.table.foleyGroup",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "foleySize",
                              label: "Size",
                              inputType: "text",
                              fsetRow: "3",
                              dataParent: "genitourinary.table.foleyGroup",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "lastChange",
                              label: "Last catheter change",
                              inputType: "day",
                              fsetRow: "4",
                              dataParent: "genitourinary.table.foleyGroup",
                              tableKey: "table"
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
                    elementKey: "pelvicGroup",
                    label: "Pelvic",
                    inputType: "fieldset",
                    formRow: "3",
                    formColumn: "1",
                    dataParent: "genitourinary.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "pelvicPain",
                              label: "Pelvic pain",
                              inputType: "select",
                              fsetRow: "1",
                              dataParent: "genitourinary.table.pelvicGroup",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "location",
                              label: "Location",
                              inputType: "text",
                              fsetRow: "2",
                              dataParent: "genitourinary.table.pelvicGroup",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "aLabel",
                              label: "If answered yes, please complete the pain assessment",
                              inputType: "form_label",
                              fsetRow: "3",
                              dataParent: "genitourinary.table.pelvicGroup",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "pelvicPainSource",
                              label: "Pelvic pain source",
                              inputType: "select",
                              fsetRow: "4",
                              dataParent: "genitourinary.table.pelvicGroup",
                              tableKey: "table"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "vaginal",
                    label: "Vaginal",
                    inputType: "fieldset",
                    formRow: "3",
                    formColumn: "2",
                    dataParent: "genitourinary.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "discharge",
                              label: "Discharge",
                              inputType: "checkbox",
                              fsetRow: "1",
                              dataParent: "genitourinary.table.vaginal",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "bleeding",
                              label: "Bleeding",
                              inputType: "checkbox",
                              fsetRow: "2",
                              dataParent: "genitourinary.table.vaginal",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "description",
                              label: "Description",
                              inputType: "text",
                              fsetRow: "3",
                              dataParent: "genitourinary.table.vaginal",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "lastMenstrualPeriodDate",
                              label: "Last menstrual period date",
                              inputType: "date",
                              fsetRow: "4",
                              dataParent: "genitourinary.table.vaginal",
                              tableKey: "table"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "pregnantGroup",
                    label: "Pregnancy",
                    inputType: "fieldset",
                    formRow: "3",
                    formColumn: "3",
                    dataParent: "genitourinary.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "pregnant",
                              label: "Pregnant",
                              inputType: "select",
                              fsetRow: "1",
                              dataParent: "genitourinary.table.pregnantGroup",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "gravida",
                              label: "Gravida (number of pregnancies)",
                              inputType: "text",
                              fsetRow: "2",
                              dataParent: "genitourinary.table.pregnantGroup",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "para",
                              label: "Para (number of children)",
                              inputType: "text",
                              fsetRow: "3",
                              dataParent: "genitourinary.table.pregnantGroup",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "livingChildren",
                              label: "Living children",
                              inputType: "text",
                              fsetRow: "4",
                              dataParent: "genitourinary.table.pregnantGroup",
                              tableKey: "table"
                            },
                            {
                              elementKey: "comments",
                              label: "Comments",
                              inputType: "textarea",
                              formRow: "4",
                              dataParent: "genitourinary.table.pregnantGroup",
                              tableKey: "table"
                            }
                          ]
                        }
                      ],
                      columnsCount: 2
                    }
                  }
                ]
              }
            ],
            columnsCount: 4
          }
        }
      ]
    },
    musculoskeletal: {
      pageTitle: "Musculoskeletal assessment",
      pageDataKey: "musculoskeletal",
      pageChildren: [
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "musculoskeletal.table.name",
          assetBase: "?",
          dataCaseStudy: "Jason"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "musculoskeletal.table.profession",
          assetBase: "?",
          dataCaseStudy: "RN"
        },
        {
          label: "Entered on day",
          elementKey: "day",
          fqn: "musculoskeletal.table.day",
          assetBase: "?",
          dataCaseStudy: "0"
        },
        {
          label: "Entered at time",
          elementKey: "time",
          fqn: "musculoskeletal.table.time",
          assetBase: "?",
          dataCaseStudy: "0.8125"
        },
        {
          label: "Swelling",
          elementKey: "swelling",
          fqn: "musculoskeletal.table.swelling",
          options: [
            {
              text: "Present"
            },
            {
              text: "Absent"
            }
          ],
          dataCaseStudy: "Absent"
        },
        {
          label: "Pain",
          elementKey: "pain",
          fqn: "musculoskeletal.table.pain",
          options: [
            {
              text: "Present"
            },
            {
              text: "Absent"
            }
          ],
          dataCaseStudy: "Absent"
        },
        {
          label: "Deformity",
          elementKey: "deformity",
          fqn: "musculoskeletal.table.deformity",
          options: [
            {
              text: "Present"
            },
            {
              text: "Absent"
            }
          ],
          dataCaseStudy: "Absent"
        },
        {
          label: "Movement",
          elementKey: "movement",
          fqn: "musculoskeletal.table.movement",
          options: [
            {
              text: "Normal"
            },
            {
              text: "Decreased"
            },
            {
              text: "Absent"
            }
          ],
          dataCaseStudy: "Normal"
        },
        {
          label: "Sensation",
          elementKey: "sensation",
          fqn: "musculoskeletal.table.sensation",
          options: [
            {
              text: "Present"
            },
            {
              text: "Absent"
            },
            {
              text: "Numb"
            }
          ],
          dataCaseStudy: "Present"
        },
        {
          label: "Pulse",
          elementKey: "pulse",
          fqn: "musculoskeletal.table.pulse",
          options: [
            {
              text: "Absent"
            },
            {
              text: "Weak"
            },
            {
              text: "Moderate"
            },
            {
              text: "Strong"
            },
            {
              text: "Bounding"
            }
          ],
          dataCaseStudy: "Moderate"
        },
        {
          label: "Colour",
          elementKey: "colour",
          fqn: "musculoskeletal.table.colour",
          options: [
            {
              text: "Flesh"
            },
            {
              text: "Pale"
            },
            {
              text: "Cynanotic"
            }
          ],
          dataCaseStudy: "Flesh"
        },
        {
          label: "Temp",
          elementKey: "temp",
          fqn: "musculoskeletal.table.temp",
          options: [
            {
              text: "Hot"
            },
            {
              text: "Warm"
            },
            {
              text: "Cold"
            }
          ],
          assetBase: "?",
          dataCaseStudy: "Warm"
        },
        {
          label: "Use of ambulatory aid",
          elementKey: "useOfAmbulatoryAid",
          fqn: "musculoskeletal.table.useOfAmbulatoryAid",
          options: [
            {
              text: "Yes"
            },
            {
              text: "No"
            }
          ],
          assetBase: "?",
          dataCaseStudy: "No"
        },
        {
          label: "Type",
          elementKey: "type",
          fqn: "musculoskeletal.table.type",
          options: [
            {
              text: "Walker"
            },
            {
              text: "Cane"
            },
            {
              text: "One crutch"
            },
            {
              text: "Two crutches"
            },
            {
              text: "Wheelchair"
            },
            {
              text: "Other"
            }
          ],
          assetBase: "?",
          dataCaseStudy: "(none selected)"
        },
        {
          label: "Comments",
          elementKey: "comments",
          fqn: "musculoskeletal.table.comments",
          assetBase: "?",
          dataCaseStudy: "(not filled)"
        }
      ],
      generated: "2019-08-02T17:59:37-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "musculoskeletal",
          tableKey: "table",
          addButtonText: "Add a musculoskeletal assessment",
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
              tableCss: "hr-table",
              inputType: "time"
            },
            {
              elementKey: "swelling",
              label: "Swelling",
              tableColumn: "5",
              inputType: "select"
            },
            {
              elementKey: "pain",
              label: "Pain",
              tableColumn: "6",
              inputType: "select"
            },
            {
              elementKey: "deformity",
              label: "Deformity",
              tableColumn: "7",
              inputType: "select"
            },
            {
              elementKey: "movement",
              label: "Movement",
              tableColumn: "8",
              inputType: "select"
            },
            {
              elementKey: "sensation",
              label: "Sensation",
              tableColumn: "9",
              inputType: "select"
            },
            {
              elementKey: "pulse",
              label: "Pulse",
              tableColumn: "10",
              inputType: "select"
            },
            {
              elementKey: "colour",
              label: "Colour",
              tableColumn: "11",
              inputType: "select"
            },
            {
              elementKey: "temp",
              label: "Temp",
              tableColumn: "12",
              inputType: "select"
            },
            {
              elementKey: "useOfAmbulatoryAid",
              label: "Use of ambulatory aid",
              tableColumn: "13",
              inputType: "select"
            },
            {
              elementKey: "type",
              label: "Type",
              tableColumn: "14",
              inputType: "select"
            },
            {
              elementKey: "comments",
              label: "Comments",
              tableColumn: "15",
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
                    dataParent: "musculoskeletal.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    label: "Entered by profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    dataParent: "musculoskeletal.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    label: "Entered on day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    dataParent: "musculoskeletal.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    label: "Entered at time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    dataParent: "musculoskeletal.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "swelling",
                    label: "Swelling",
                    inputType: "select",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "musculoskeletal.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "pain",
                    label: "Pain",
                    inputType: "select",
                    formRow: "2",
                    formColumn: "2",
                    dataParent: "musculoskeletal.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "deformity",
                    label: "Deformity",
                    inputType: "select",
                    formRow: "2",
                    formColumn: "3",
                    dataParent: "musculoskeletal.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "movement",
                    label: "Movement",
                    inputType: "select",
                    formRow: "2",
                    formColumn: "4",
                    dataParent: "musculoskeletal.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "sensation",
                    label: "Sensation",
                    inputType: "select",
                    formRow: "3",
                    formColumn: "1",
                    dataParent: "musculoskeletal.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "pulse",
                    label: "Pulse",
                    inputType: "select",
                    formRow: "3",
                    formColumn: "2",
                    dataParent: "musculoskeletal.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "colour",
                    label: "Colour",
                    inputType: "select",
                    formRow: "3",
                    formColumn: "3",
                    dataParent: "musculoskeletal.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "temp",
                    label: "Temp",
                    inputType: "select",
                    formRow: "3",
                    formColumn: "4",
                    dataParent: "musculoskeletal.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    elementKey: "useOfAmbulatoryAid",
                    label: "Use of ambulatory aid",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "1",
                    dataParent: "musculoskeletal.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "type",
                    label: "Type",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "2",
                    dataParent: "musculoskeletal.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "5",
                elements: [
                  {
                    elementKey: "comments",
                    label: "Comments",
                    inputType: "textarea",
                    formRow: "5",
                    formColumn: "1",
                    dataParent: "musculoskeletal.table",
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
    pain: {
      pageTitle: "Pain assessment",
      pageDataKey: "pain",
      pageChildren: [
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "pain.table.name",
          dataCaseStudy: "Jason"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "pain.table.profession",
          dataCaseStudy: "RN"
        },
        {
          label: "Entered on day",
          elementKey: "day",
          fqn: "pain.table.day",
          dataCaseStudy: "0"
        },
        {
          label: "Entered at time",
          elementKey: "time",
          fqn: "pain.table.time",
          dataCaseStudy: "0.8125"
        },
        {
          label: "Location",
          elementKey: "location",
          fqn: "pain.table.primarySite.location"
        },
        {
          label: "Pain intensity (0-10)",
          elementKey: "painScale",
          fqn: "pain.table.primarySite.painScale",
          dataCaseStudy: "0"
        },
        {
          label: "Respiratory rate (br/min)",
          elementKey: "respiratoryRate",
          fqn: "pain.table.primarySite.respiratoryRate",
          dataCaseStudy: "28"
        },
        {
          label: "Onset",
          elementKey: "onset",
          fqn: "pain.table.primarySite.onset"
        },
        {
          label: "Type",
          elementKey: "type",
          fqn: "pain.table.primarySite.type"
        },
        {
          label: "Alleviation & associated symptoms",
          elementKey: "alleviationAssociatedSymptoms",
          fqn: "pain.table.primarySite.alleviationAssociatedSymptoms"
        },
        {
          label: "Radiation",
          elementKey: "radiation",
          fqn: "pain.table.primarySite.radiation"
        },
        {
          label: "Precipitating events",
          elementKey: "precipitatingEvents",
          fqn: "pain.table.primarySite.precipitatingEvents"
        },
        {
          label: "Comments",
          elementKey: "comments",
          fqn: "pain.table.primarySite.comments"
        },
        {
          label: "Location",
          elementKey: "location",
          fqn: "pain.table.secondarySite.location"
        },
        {
          label: "Pain scale (0-10)",
          elementKey: "painScale",
          fqn: "pain.table.secondarySite.painScale"
        },
        {
          label: "Respiratory rate (br/min)",
          elementKey: "respiratoryRate",
          fqn: "pain.table.secondarySite.respiratoryRate"
        },
        {
          label: "Onset",
          elementKey: "onset",
          fqn: "pain.table.secondarySite.onset"
        },
        {
          label: "Type",
          elementKey: "type",
          fqn: "pain.table.secondarySite.type"
        },
        {
          label: "Alleviation & associated symptoms",
          elementKey: "alleviationAssociatedSymptoms",
          fqn: "pain.table.secondarySite.alleviationAssociatedSymptoms"
        },
        {
          label: "Radiation",
          elementKey: "radiation",
          fqn: "pain.table.secondarySite.radiation"
        },
        {
          label: "Precipitating events",
          elementKey: "precipitatingEvents",
          fqn: "pain.table.secondarySite.precipitatingEvents"
        },
        {
          label: "Comments",
          elementKey: "comments",
          fqn: "pain.table.secondarySite.comments"
        }
      ],
      generated: "2019-08-02T17:59:37-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "pain",
          tableKey: "table",
          addButtonText: "Add a pain assessment",
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
              tableCss: "hr-table",
              inputType: "time"
            },
            {
              elementKey: "location",
              label: "Location",
              tableColumn: "5",
              inputType: "text"
            },
            {
              elementKey: "painScale",
              label: "Pain intensity (0-10)",
              tableColumn: "6",
              inputType: "text"
            },
            {
              elementKey: "respiratoryRate",
              label: "Respiratory rate (br/min)",
              tableColumn: "7",
              inputType: "text"
            },
            {
              elementKey: "onset",
              label: "Onset",
              tableColumn: "8",
              inputType: "text"
            },
            {
              elementKey: "type",
              label: "Type",
              tableColumn: "9",
              inputType: "text"
            },
            {
              elementKey: "alleviationAssociatedSymptoms",
              label: "Alleviation & associated symptoms",
              tableColumn: "10",
              inputType: "text"
            },
            {
              elementKey: "radiation",
              label: "Radiation",
              tableColumn: "11",
              tableCss: "is-one-third",
              inputType: "text"
            },
            {
              elementKey: "precipitatingEvents",
              label: "Precipitating events",
              tableColumn: "12",
              tableCss: "is-one-third",
              inputType: "text"
            },
            {
              elementKey: "comments",
              label: "Comments",
              tableColumn: "13",
              inputType: "textarea"
            },
            {
              elementKey: "location",
              label: "Location",
              tableColumn: "14",
              inputType: "text"
            },
            {
              elementKey: "painScale",
              label: "Pain scale (0-10)",
              tableColumn: "15",
              inputType: "text"
            },
            {
              elementKey: "respiratoryRate",
              label: "Respiratory rate (br/min)",
              tableColumn: "16",
              inputType: "text"
            },
            {
              elementKey: "onset",
              label: "Onset",
              tableColumn: "17",
              inputType: "text"
            },
            {
              elementKey: "type",
              label: "Type",
              tableColumn: "18",
              inputType: "text"
            },
            {
              elementKey: "alleviationAssociatedSymptoms",
              label: "Alleviation & associated symptoms",
              tableColumn: "19",
              inputType: "text"
            },
            {
              elementKey: "radiation",
              label: "Radiation",
              tableColumn: "20",
              tableCss: "is-one-third",
              inputType: "text"
            },
            {
              elementKey: "precipitatingEvents",
              label: "Precipitating events",
              tableColumn: "21",
              tableCss: "is-one-third",
              inputType: "text"
            },
            {
              elementKey: "comments",
              label: "Comments",
              tableColumn: "22",
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
                    dataParent: "pain.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    label: "Entered by profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    dataParent: "pain.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    label: "Entered on day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_day",
                    dataParent: "pain.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    label: "Entered at time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "5",
                    formCss: "user_time",
                    dataParent: "pain.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "primarySite",
                    label: "Primary pain site",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "pain.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "location",
                              label: "Location",
                              inputType: "text",
                              fsetRow: "1",
                              dataParent: "pain.table.primarySite",
                              tableKey: "table"
                            },
                            {
                              elementKey: "painScale",
                              label: "Pain intensity (0-10)",
                              inputType: "text",
                              fsetRow: "1",
                              dataParent: "pain.table.primarySite",
                              tableKey: "table"
                            },
                            {
                              elementKey: "respiratoryRate",
                              label: "Respiratory rate (br/min)",
                              inputType: "text",
                              fsetRow: "1",
                              dataParent: "pain.table.primarySite",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "onset",
                              label: "Onset",
                              inputType: "text",
                              fsetRow: "2",
                              dataParent: "pain.table.primarySite",
                              tableKey: "table"
                            },
                            {
                              elementKey: "type",
                              label: "Type",
                              inputType: "text",
                              fsetRow: "2",
                              dataParent: "pain.table.primarySite",
                              tableKey: "table"
                            },
                            {
                              elementKey: "alleviationAssociatedSymptoms",
                              label: "Alleviation & associated symptoms",
                              inputType: "text",
                              fsetRow: "2",
                              dataParent: "pain.table.primarySite",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "radiation",
                              label: "Radiation",
                              inputType: "text",
                              fsetRow: "3",
                              dataParent: "pain.table.primarySite",
                              tableKey: "table"
                            },
                            {
                              elementKey: "precipitatingEvents",
                              label: "Precipitating events",
                              inputType: "text",
                              fsetRow: "3",
                              dataParent: "pain.table.primarySite",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "comments",
                              label: "Comments",
                              inputType: "textarea",
                              fsetRow: "4",
                              dataParent: "pain.table.primarySite",
                              tableKey: "table"
                            }
                          ]
                        }
                      ],
                      columnsCount: 3
                    }
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "secondarySite",
                    label: "Secondary pain site",
                    inputType: "fieldset",
                    formRow: "3",
                    formColumn: "1",
                    dataParent: "pain.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "location",
                              label: "Location",
                              inputType: "text",
                              fsetRow: "1",
                              dataParent: "pain.table.secondarySite",
                              tableKey: "table"
                            },
                            {
                              elementKey: "painScale",
                              label: "Pain scale (0-10)",
                              inputType: "text",
                              fsetRow: "1",
                              dataParent: "pain.table.secondarySite",
                              tableKey: "table"
                            },
                            {
                              elementKey: "respiratoryRate",
                              label: "Respiratory rate (br/min)",
                              inputType: "text",
                              fsetRow: "1",
                              dataParent: "pain.table.secondarySite",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "onset",
                              label: "Onset",
                              inputType: "text",
                              fsetRow: "2",
                              dataParent: "pain.table.secondarySite",
                              tableKey: "table"
                            },
                            {
                              elementKey: "type",
                              label: "Type",
                              inputType: "text",
                              fsetRow: "2",
                              dataParent: "pain.table.secondarySite",
                              tableKey: "table"
                            },
                            {
                              elementKey: "alleviationAssociatedSymptoms",
                              label: "Alleviation & associated symptoms",
                              inputType: "text",
                              fsetRow: "2",
                              dataParent: "pain.table.secondarySite",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "radiation",
                              label: "Radiation",
                              inputType: "text",
                              fsetRow: "3",
                              dataParent: "pain.table.secondarySite",
                              tableKey: "table"
                            },
                            {
                              elementKey: "precipitatingEvents",
                              label: "Precipitating events",
                              inputType: "text",
                              fsetRow: "3",
                              dataParent: "pain.table.secondarySite",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "comments",
                              label: "Comments",
                              inputType: "textarea",
                              fsetRow: "4",
                              dataParent: "pain.table.secondarySite",
                              tableKey: "table"
                            }
                          ]
                        }
                      ],
                      columnsCount: 3
                    }
                  }
                ]
              }
            ],
            columnsCount: 4
          }
        }
      ]
    },
    biopsychosocial: {
      pageTitle: "Biopsychosocial",
      pageDataKey: "biopsychosocial",
      pageChildren: [
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "biopsychosocial.table.name",
          dataCaseStudy: "Jason"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "biopsychosocial.table.profession",
          dataCaseStudy: "RN"
        },
        {
          label: "Entered on day",
          elementKey: "day",
          fqn: "biopsychosocial.table.day",
          dataCaseStudy: "0"
        },
        {
          label: "Entered at time",
          elementKey: "time",
          fqn: "biopsychosocial.table.time",
          dataCaseStudy: "0.8125"
        },
        {
          label: "From our experience in the hospital, we know that domestic violence can be a problem. Is this a factor in your life?",
          elementKey: "domesticViolence",
          fqn: "biopsychosocial.table.domesticViolence",
          options: [
            {
              text: "Didn\'t ask"
            },
            {
              text: "Yes"
            },
            {
              text: "No"
            }
          ],
          dataCaseStudy: "no"
        },
        {
          label: "Would you like to speak to a social worker?",
          elementKey: "requestContact",
          fqn: "biopsychosocial.table.requestContact",
          options: [
            {
              text: "Didn\'t ask"
            },
            {
              text: "Yes"
            },
            {
              text: "No"
            }
          ],
          dataCaseStudy: "no"
        },
        {
          label: "Hygiene",
          elementKey: "hygieneGrooming",
          fqn: "biopsychosocial.table.hygiene.hygieneGrooming",
          options: [
            {
              text: "Good"
            },
            {
              text: "Requires attention"
            }
          ],
          dataCaseStudy: "Good"
        },
        {
          label: "Hygiene comments",
          elementKey: "hygieneComments",
          fqn: "biopsychosocial.table.hygiene.hygieneComments",
          dataCaseStudy: "(not filled)"
        },
        {
          label: "Calm",
          elementKey: "calm",
          fqn: "biopsychosocial.table.behaviour.calm",
          dataCaseStudy: "Calm-NL-Cooperative"
        },
        {
          label: "Cooperative",
          elementKey: "cooperative",
          fqn: "biopsychosocial.table.behaviour.cooperative",
          dataCaseStudy: "Calm-NL-Cooperative"
        },
        {
          label: "Agitated",
          elementKey: "agitated",
          fqn: "biopsychosocial.table.behaviour.agitated",
          dataCaseStudy: "Calm-NL-Cooperative"
        },
        {
          label: "Flat affect",
          elementKey: "flat",
          fqn: "biopsychosocial.table.behaviour.flat",
          dataCaseStudy: "Calm-NL-Cooperative"
        },
        {
          label: "Threatening",
          elementKey: "threatening",
          fqn: "biopsychosocial.table.behaviour.threatening",
          dataCaseStudy: "Calm-NL-Cooperative"
        },
        {
          label: "Physically agressive",
          elementKey: "agressive",
          fqn: "biopsychosocial.table.behaviour.agressive",
          dataCaseStudy: "Calm-NL-Cooperative"
        },
        {
          label: "Uncommunicative",
          elementKey: "uncommunicative",
          fqn: "biopsychosocial.table.behaviour.uncommunicative",
          dataCaseStudy: "Calm-NL-Cooperative"
        },
        {
          label: "None",
          elementKey: "none",
          fqn: "biopsychosocial.table.hallucinations.none",
          dataCaseStudy: "None"
        },
        {
          label: "Visual",
          elementKey: "visual",
          fqn: "biopsychosocial.table.hallucinations.visual",
          dataCaseStudy: "None"
        },
        {
          label: "Auditory",
          elementKey: "auditory",
          fqn: "biopsychosocial.table.hallucinations.auditory",
          dataCaseStudy: "None"
        },
        {
          label: "Olafactory",
          elementKey: "olafactory",
          fqn: "biopsychosocial.table.hallucinations.olafactory",
          dataCaseStudy: "None"
        },
        {
          label: "Suicidal",
          elementKey: "suicidal",
          fqn: "biopsychosocial.table.state.suicidal",
          options: [
            {
              text: "None"
            },
            {
              text: "Ideation"
            },
            {
              text: "Attempt"
            }
          ],
          dataCaseStudy: "None"
        },
        {
          label: "Homicidal",
          elementKey: "homicidal",
          fqn: "biopsychosocial.table.state.homicidal",
          options: [
            {
              text: "None"
            },
            {
              text: "Ideation"
            }
          ],
          dataCaseStudy: "None"
        },
        {
          label: "Speech",
          elementKey: "speech",
          fqn: "biopsychosocial.table.state.speech",
          options: [
            {
              text: "Clear and coherent"
            },
            {
              text: "Other"
            }
          ],
          dataCaseStudy: "Clear and coherent"
        },
        {
          label: "Support person",
          elementKey: "supportPerson",
          fqn: "biopsychosocial.table.support.supportPerson",
          dataCaseStudy: "Thomas"
        },
        {
          label: "Support comments",
          elementKey: "supportComments",
          fqn: "biopsychosocial.table.support.supportComments",
          dataCaseStudy: "(not filled)"
        },
        {
          label: "Security/police present",
          elementKey: "securityPolicePresent",
          fqn: "biopsychosocial.table.security.securityPolicePresent",
          dataCaseStudy: "No"
        },
        {
          label: "Security comments",
          elementKey: "securityComments",
          fqn: "biopsychosocial.table.security.securityComments",
          dataCaseStudy: "(not filled)"
        },
        {
          label: "Patient restrained",
          elementKey: "patientRestrained",
          fqn: "biopsychosocial.table.restraint.patientRestrained",
          options: [
            {
              text: "Yes"
            },
            {
              text: "No"
            }
          ],
          dataCaseStudy: "No"
        },
        {
          label: "Day",
          elementKey: "restraintDay",
          fqn: "biopsychosocial.table.restraint.restraintDay",
          dataCaseStudy: "(not filled)"
        },
        {
          label: "Time",
          elementKey: "restraintTime",
          fqn: "biopsychosocial.table.restraint.restraintTime",
          dataCaseStudy: "(not filled)"
        },
        {
          label: "Restraint comments",
          elementKey: "restraintComments",
          fqn: "biopsychosocial.table.restraint.restraintComments",
          dataCaseStudy: "(not filled)"
        },
        {
          label: "General comments",
          elementKey: "generalComments",
          fqn: "biopsychosocial.table.generalComments",
          dataCaseStudy: "(not filled)"
        }
      ],
      generated: "2019-08-02T17:59:37-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "biopsychosocial",
          tableKey: "table",
          addButtonText: "Add a biopsychosocial assessment",
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
              tableCss: "hr-table",
              inputType: "time"
            },
            {
              elementKey: "domesticViolence",
              label: "From our experience in the hospital, we know that domestic violence can be a problem. Is this a factor in your life?",
              tableColumn: "5",
              inputType: "select"
            },
            {
              elementKey: "requestContact",
              label: "Would you like to speak to a social worker?",
              tableColumn: "6",
              tableCss: "hr-table",
              inputType: "select"
            },
            {
              elementKey: "hygieneGrooming",
              label: "Hygiene",
              tableColumn: "7",
              inputType: "select"
            },
            {
              elementKey: "hygieneComments",
              label: "Hygiene comments",
              tableColumn: "8",
              tableCss: "hr-table",
              inputType: "textarea"
            },
            {
              elementKey: "calm",
              label: "Calm",
              tableColumn: "9",
              inputType: "checkbox"
            },
            {
              elementKey: "cooperative",
              label: "Cooperative",
              tableColumn: "10",
              inputType: "checkbox"
            },
            {
              elementKey: "agitated",
              label: "Agitated",
              tableColumn: "11",
              inputType: "checkbox"
            },
            {
              elementKey: "flat",
              label: "Flat affect",
              tableColumn: "12",
              inputType: "checkbox"
            },
            {
              elementKey: "threatening",
              label: "Threatening",
              tableColumn: "13",
              inputType: "checkbox"
            },
            {
              elementKey: "agressive",
              label: "Physically agressive",
              tableColumn: "14",
              inputType: "checkbox"
            },
            {
              elementKey: "uncommunicative",
              label: "Uncommunicative",
              tableColumn: "15",
              tableCss: "hr-table",
              inputType: "checkbox"
            },
            {
              elementKey: "none",
              label: "None",
              tableColumn: "16",
              inputType: "checkbox"
            },
            {
              elementKey: "visual",
              label: "Visual",
              tableColumn: "17",
              inputType: "checkbox"
            },
            {
              elementKey: "auditory",
              label: "Auditory",
              tableColumn: "18",
              inputType: "checkbox"
            },
            {
              elementKey: "olafactory",
              label: "Olafactory",
              tableColumn: "19",
              tableCss: "hr-table",
              inputType: "checkbox"
            },
            {
              elementKey: "suicidal",
              label: "Suicidal",
              tableColumn: "20",
              inputType: "select"
            },
            {
              elementKey: "homicidal",
              label: "Homicidal",
              tableColumn: "21",
              inputType: "select"
            },
            {
              elementKey: "speech",
              label: "Speech",
              tableColumn: "22",
              tableCss: "hr-table",
              inputType: "select"
            },
            {
              elementKey: "supportPerson",
              label: "Support person",
              tableColumn: "23",
              inputType: "text"
            },
            {
              elementKey: "supportComments",
              label: "Support comments",
              tableColumn: "24",
              tableCss: "hr-table",
              inputType: "textarea"
            },
            {
              elementKey: "securityPolicePresent",
              label: "Security/police present",
              tableColumn: "25",
              inputType: "text"
            },
            {
              elementKey: "securityComments",
              label: "Security comments",
              tableColumn: "26",
              tableCss: "hr-table",
              inputType: "textarea"
            },
            {
              elementKey: "patientRestrained",
              label: "Patient restrained",
              tableColumn: "27",
              inputType: "select"
            },
            {
              elementKey: "restraintDay",
              label: "Day",
              tableColumn: "28",
              inputType: "day"
            },
            {
              elementKey: "restraintTime",
              label: "Time",
              tableColumn: "29",
              inputType: "time"
            },
            {
              elementKey: "restraintComments",
              label: "Restraint comments",
              tableColumn: "30",
              tableCss: "hr-table",
              inputType: "textarea"
            },
            {
              elementKey: "generalComments",
              label: "General comments",
              tableColumn: "31",
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
                    dataParent: "biopsychosocial.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    label: "Entered by profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    dataParent: "biopsychosocial.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    label: "Entered on day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    dataParent: "biopsychosocial.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    label: "Entered at time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    dataParent: "biopsychosocial.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "domesticViolence",
                    label: "From our experience in the hospital, we know that domestic violence can be a problem. Is this a factor in your life?",
                    inputType: "select",
                    formRow: "2",
                    formColumn: "1",
                    formCss: "is-one-third",
                    dataParent: "biopsychosocial.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "requestContact",
                    label: "Would you like to speak to a social worker?",
                    inputType: "select",
                    formRow: "2",
                    formColumn: "2",
                    formCss: "is-one-third",
                    dataParent: "biopsychosocial.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "hygiene",
                    label: "Hygiene and grooming",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "3",
                    dataParent: "biopsychosocial.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "hygieneGrooming",
                              label: "Hygiene",
                              inputType: "select",
                              fsetRow: "1",
                              dataParent: "biopsychosocial.table.hygiene",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "hygieneComments",
                              label: "Hygiene comments",
                              inputType: "textarea",
                              fsetRow: "2",
                              dataParent: "biopsychosocial.table.hygiene",
                              tableKey: "table"
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
                    elementKey: "behaviour",
                    label: "Behaviour",
                    inputType: "fieldset",
                    formRow: "3",
                    formColumn: "1",
                    dataParent: "biopsychosocial.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "calm",
                              label: "Calm",
                              inputType: "checkbox",
                              fsetRow: "1",
                              dataParent: "biopsychosocial.table.behaviour",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "cooperative",
                              label: "Cooperative",
                              inputType: "checkbox",
                              fsetRow: "2",
                              dataParent: "biopsychosocial.table.behaviour",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "agitated",
                              label: "Agitated",
                              inputType: "checkbox",
                              fsetRow: "3",
                              dataParent: "biopsychosocial.table.behaviour",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "flat",
                              label: "Flat affect",
                              inputType: "checkbox",
                              fsetRow: "4",
                              dataParent: "biopsychosocial.table.behaviour",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "threatening",
                              label: "Threatening",
                              inputType: "checkbox",
                              fsetRow: "5",
                              dataParent: "biopsychosocial.table.behaviour",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              elementKey: "agressive",
                              label: "Physically agressive",
                              inputType: "checkbox",
                              fsetRow: "6",
                              dataParent: "biopsychosocial.table.behaviour",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "7",
                          elements: [
                            {
                              elementKey: "uncommunicative",
                              label: "Uncommunicative",
                              inputType: "checkbox",
                              fsetRow: "7",
                              dataParent: "biopsychosocial.table.behaviour",
                              tableKey: "table"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "hallucinations",
                    label: "Hallucinations",
                    inputType: "fieldset",
                    formRow: "3",
                    formColumn: "2",
                    dataParent: "biopsychosocial.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "none",
                              label: "None",
                              inputType: "checkbox",
                              fsetRow: "1",
                              dataParent: "biopsychosocial.table.hallucinations",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "visual",
                              label: "Visual",
                              inputType: "checkbox",
                              fsetRow: "2",
                              dataParent: "biopsychosocial.table.hallucinations",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "auditory",
                              label: "Auditory",
                              inputType: "checkbox",
                              fsetRow: "3",
                              dataParent: "biopsychosocial.table.hallucinations",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "olafactory",
                              label: "Olafactory",
                              inputType: "checkbox",
                              fsetRow: "4",
                              dataParent: "biopsychosocial.table.hallucinations",
                              tableKey: "table"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "state",
                    label: "Psychological state",
                    inputType: "fieldset",
                    formRow: "3",
                    formColumn: "3",
                    dataParent: "biopsychosocial.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "suicidal",
                              label: "Suicidal",
                              inputType: "select",
                              fsetRow: "1",
                              dataParent: "biopsychosocial.table.state",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "homicidal",
                              label: "Homicidal",
                              inputType: "select",
                              fsetRow: "2",
                              dataParent: "biopsychosocial.table.state",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "speech",
                              label: "Speech",
                              inputType: "select",
                              fsetRow: "3",
                              dataParent: "biopsychosocial.table.state",
                              tableKey: "table"
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
                formRow: "4",
                elements: [
                  {
                    elementKey: "support",
                    label: "Support",
                    inputType: "fieldset",
                    formRow: "4",
                    formColumn: "1",
                    dataParent: "biopsychosocial.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "supportPerson",
                              label: "Support person",
                              inputType: "text",
                              fsetRow: "1",
                              dataParent: "biopsychosocial.table.support",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "supportComments",
                              label: "Support comments",
                              inputType: "textarea",
                              fsetRow: "2",
                              dataParent: "biopsychosocial.table.support",
                              tableKey: "table"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "security",
                    label: "Security",
                    inputType: "fieldset",
                    formRow: "4",
                    formColumn: "2",
                    dataParent: "biopsychosocial.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "securityPolicePresent",
                              label: "Security/police present",
                              inputType: "text",
                              fsetRow: "1",
                              dataParent: "biopsychosocial.table.security",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "securityComments",
                              label: "Security comments",
                              inputType: "textarea",
                              fsetRow: "2",
                              dataParent: "biopsychosocial.table.security",
                              tableKey: "table"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "restraint",
                    label: "Restraint",
                    inputType: "fieldset",
                    formRow: "4",
                    formColumn: "3",
                    dataParent: "biopsychosocial.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "patientRestrained",
                              label: "Patient restrained",
                              inputType: "select",
                              fsetRow: "1",
                              dataParent: "biopsychosocial.table.restraint",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "restraintDay",
                              label: "Day",
                              inputType: "day",
                              fsetRow: "2",
                              dataParent: "biopsychosocial.table.restraint",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "restraintTime",
                              label: "Time",
                              inputType: "time",
                              fsetRow: "3",
                              dataParent: "biopsychosocial.table.restraint",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "restraintComments",
                              label: "Restraint comments",
                              inputType: "textarea",
                              fsetRow: "4",
                              dataParent: "biopsychosocial.table.restraint",
                              tableKey: "table"
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
                formRow: "5",
                elements: [
                  {
                    elementKey: "generalComments",
                    label: "General comments",
                    inputType: "textarea",
                    formRow: "5",
                    formColumn: "1",
                    dataParent: "biopsychosocial.table",
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
    nonmedOrders: {
      pageTitle: "Orders",
      pageDataKey: "nonmedOrders",
      pageChildren: [
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "nonmedOrders.table.name",
          dataCaseStudy: "1) Chest xray-NL-2) ABG-NL-3) CBC, electrolytes, BUN, creatine-NL-4) Spirometry"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "nonmedOrders.table.profession",
          dataCaseStudy: "1) Chest xray-NL-2) ABG-NL-3) CBC, electrolytes, BUN, creatine-NL-4) Spirometry"
        },
        {
          label: "Entered on day",
          elementKey: "day",
          fqn: "nonmedOrders.table.day",
          dataCaseStudy: "1) Chest xray-NL-2) ABG-NL-3) CBC, electrolytes, BUN, creatine-NL-4) Spirometry"
        },
        {
          label: "Entered at time",
          elementKey: "time",
          fqn: "nonmedOrders.table.time",
          dataCaseStudy: "1) Chest xray-NL-2) ABG-NL-3) CBC, electrolytes, BUN, creatine-NL-4) Spirometry"
        },
        {
          label: "Order",
          elementKey: "order",
          fqn: "nonmedOrders.table.order",
          dataCaseStudy: "1) Chest xray-NL-2) ABG-NL-3) CBC, electrolytes, BUN, creatine-NL-4) Spirometry"
        },
        {
          label: "Ordered by",
          elementKey: "orderedBy",
          fqn: "nonmedOrders.table.orderedBy",
          dataCaseStudy: "1 - 4) Dr. Singh"
        },
        {
          label: "Reason",
          elementKey: "reason",
          fqn: "nonmedOrders.table.reason"
        },
        {
          label: "Status",
          elementKey: "status",
          fqn: "nonmedOrders.table.status",
          options: [
            {
              text: "Ordered"
            },
            {
              text: "In process"
            },
            {
              text: "Cancelled"
            },
            {
              text: "Completed"
            },
            {
              text: "Discontinued"
            }
          ],
          dataCaseStudy: "1 - 4) Ordered"
        },
        {
          label: "Comment",
          elementKey: "comment",
          fqn: "nonmedOrders.table.comment"
        }
      ],
      generated: "2019-08-02T17:59:37-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "nonmedOrders",
          tableKey: "table",
          addButtonText: "Add an order",
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
              tableCss: "hr-table",
              inputType: "time"
            },
            {
              elementKey: "order",
              label: "Order",
              tableColumn: "5",
              inputType: "text"
            },
            {
              elementKey: "orderedBy",
              label: "Ordered by",
              tableColumn: "6",
              inputType: "text"
            },
            {
              elementKey: "reason",
              label: "Reason",
              tableColumn: "7",
              inputType: "text"
            },
            {
              elementKey: "status",
              label: "Status",
              tableColumn: "8",
              tableCss: "hr-table",
              inputType: "select"
            },
            {
              elementKey: "comment",
              label: "Comment",
              tableColumn: "9",
              tableCss: "hr-table",
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
                    dataParent: "nonmedOrders.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    label: "Entered by profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    dataParent: "nonmedOrders.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    label: "Entered on day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    dataParent: "nonmedOrders.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    label: "Entered at time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    dataParent: "nonmedOrders.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "order",
                    label: "Order",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "1",
                    formCss: "is-two-thirds",
                    dataParent: "nonmedOrders.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "orderedBy",
                    label: "Ordered by",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "2",
                    formCss: "is-one-third",
                    dataParent: "nonmedOrders.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "reason",
                    label: "Reason",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "1",
                    formCss: "is-two-thirds",
                    dataParent: "nonmedOrders.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "status",
                    label: "Status",
                    inputType: "select",
                    formRow: "3",
                    formColumn: "2",
                    formCss: "is-one-third",
                    dataParent: "nonmedOrders.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    elementKey: "comment",
                    label: "Comment",
                    inputType: "textarea",
                    formRow: "4",
                    formColumn: "1",
                    dataParent: "nonmedOrders.table",
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
    referrals: {
      pageTitle: "Referrals to other disciplines",
      pageDataKey: "referrals",
      pageChildren: [
        {
          label: "Entered",
          elementKey: "name",
          fqn: "referrals.table.name",
          dataCaseStudy: "Dr. Singh"
        },
        {
          elementKey: "profession",
          fqn: "referrals.table.profession",
          dataCaseStudy: "Physician"
        },
        {
          elementKey: "day",
          fqn: "referrals.table.day",
          dataCaseStudy: "0"
        },
        {
          elementKey: "time",
          fqn: "referrals.table.time",
          dataCaseStudy: "0.8125"
        },
        {
          label: "Referral",
          elementKey: "referralName",
          fqn: "referrals.table.referralName",
          dataCaseStudy: "Matt"
        },
        {
          elementKey: "referralProfession",
          fqn: "referrals.table.referralProfession",
          dataCaseStudy: "Resp therapy"
        },
        {
          label: "Appointment",
          elementKey: "appointmentDate",
          fqn: "referrals.table.appointmentDate",
          dataCaseStudy: "0"
        },
        {
          elementKey: "appointmentTime",
          fqn: "referrals.table.appointmentTime",
          dataCaseStudy: "0.833333333333333"
        },
        {
          label: "Status",
          elementKey: "status",
          fqn: "referrals.table.status",
          options: [
            {
              text: "Active"
            },
            {
              text: "Discharged"
            }
          ],
          dataCaseStudy: "Active"
        }
      ],
      generated: "2019-08-02T17:59:37-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "referrals",
          tableKey: "table",
          addButtonText: "Add a referral",
          tableCells: [
            {
              elementKey: "name",
              label: "Entered",
              tableColumn: "1",
              inputType: "text"
            },
            {
              elementKey: "profession",
              tableColumn: "1",
              inputType: "text"
            },
            {
              elementKey: "day",
              tableColumn: "1",
              inputType: "day"
            },
            {
              elementKey: "time",
              tableColumn: "1",
              tableCss: "hr-table",
              inputType: "time"
            },
            {
              elementKey: "referralName",
              label: "Referral",
              tableColumn: "2",
              inputType: "text"
            },
            {
              elementKey: "referralProfession",
              tableColumn: "2",
              tableCss: "hr-table",
              inputType: "text"
            },
            {
              elementKey: "appointmentDate",
              label: "Appointment",
              tableColumn: "3",
              inputType: "date"
            },
            {
              elementKey: "appointmentTime",
              tableColumn: "3",
              inputType: "time"
            },
            {
              elementKey: "status",
              label: "Status",
              tableColumn: "4",
              inputType: "select"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "name",
                    label: "Entered",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    formCss: "user_name",
                    dataParent: "referrals.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    dataParent: "referrals.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    dataParent: "referrals.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    dataParent: "referrals.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "referralName",
                    label: "Referral",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "referrals.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "referralProfession",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "2",
                    dataParent: "referrals.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "appointmentDate",
                    label: "Appointment",
                    inputType: "date",
                    formRow: "3",
                    formColumn: "1",
                    dataParent: "referrals.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "appointmentTime",
                    inputType: "time",
                    formRow: "3",
                    formColumn: "2",
                    dataParent: "referrals.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "status",
                    label: "Status",
                    inputType: "select",
                    formRow: "3",
                    formColumn: "3",
                    dataParent: "referrals.table",
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
    labRequisitions: {
      pageTitle: "Lab requisitions",
      pageDataKey: "labRequisitions",
      pageChildren: [
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "labRequisitions.table.name",
          dataCaseStudy: "Dr. Singh"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "labRequisitions.table.profession",
          dataCaseStudy: "Physician"
        },
        {
          label: "Entered on day",
          elementKey: "day",
          fqn: "labRequisitions.table.day",
          dataCaseStudy: "0"
        },
        {
          label: "Entered at time",
          elementKey: "time",
          fqn: "labRequisitions.table.time",
          dataCaseStudy: "0.8125"
        },
        {
          label: "Requisition",
          elementKey: "requisition",
          fqn: "labRequisitions.table.requisition"
        },
        {
          label: "Ordered (day)",
          elementKey: "ordered",
          fqn: "labRequisitions.table.ordered"
        },
        {
          label: "Collected (day)",
          elementKey: "collected",
          fqn: "labRequisitions.table.collected"
        }
      ],
      generated: "2019-08-02T17:59:37-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "labRequisitions",
          tableKey: "table",
          addButtonText: "Add a lab requisition",
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
              tableCss: "hr-table",
              inputType: "time"
            },
            {
              elementKey: "requisition",
              label: "Requisition",
              tableColumn: "5",
              inputType: "assetLink"
            },
            {
              elementKey: "ordered",
              label: "Ordered (day)",
              tableColumn: "6",
              inputType: "day"
            },
            {
              elementKey: "collected",
              label: "Collected (day)",
              tableColumn: "7",
              inputType: "day"
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
                    dataParent: "labRequisitions.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    label: "Entered by profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    dataParent: "labRequisitions.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    label: "Entered on day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    dataParent: "labRequisitions.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    label: "Entered at time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    dataParent: "labRequisitions.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "requisition",
                    label: "Requisition",
                    inputType: "assetLink",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "labRequisitions.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "ordered",
                    label: "Ordered (day)",
                    inputType: "day",
                    formRow: "2",
                    formColumn: "2",
                    dataParent: "labRequisitions.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "collected",
                    label: "Collected (day)",
                    inputType: "day",
                    formRow: "2",
                    formColumn: "3",
                    dataParent: "labRequisitions.table",
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
    medicationOrders: {
      pageTitle: "Medication orders",
      pageDataKey: "medicationOrders",
      pageChildren: [
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "medicationOrders.table.name",
          dataCaseStudy: "Dr. Singh"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "medicationOrders.table.profession",
          dataCaseStudy: "Physician"
        },
        {
          label: "Entered on day",
          elementKey: "day",
          fqn: "medicationOrders.table.day",
          dataCaseStudy: "0"
        },
        {
          label: "Entered at time",
          elementKey: "time",
          fqn: "medicationOrders.table.time",
          dataCaseStudy: "0.8125"
        },
        {
          label: "<a href=\"/assets/static-databases/drug.txt\" target=\"_blank\">Medication</a>",
          elementKey: "medication",
          fqn: "medicationOrders.table.medication"
        },
        {
          label: "Dose",
          elementKey: "dose",
          fqn: "medicationOrders.table.dose"
        },
        {
          label: "Route",
          elementKey: "route",
          fqn: "medicationOrders.table.route",
          options: [
            {
              text: "Oral"
            },
            {
              text: "Sublingual"
            },
            {
              text: "Inhalation"
            },
            {
              text: "Nasal"
            },
            {
              text: "Anal"
            },
            {
              text: "Vaginal"
            },
            {
              text: "Intravenous"
            },
            {
              text: "Intramuscular"
            },
            {
              text: "Subcutaneous"
            }
          ]
        },
        {
          label: "Start day",
          elementKey: "startMeds",
          fqn: "medicationOrders.table.startMeds"
        },
        {
          label: "End day",
          elementKey: "endMeds",
          fqn: "medicationOrders.table.endMeds"
        },
        {
          label: "Schedule type",
          elementKey: "scheduleType",
          fqn: "medicationOrders.table.scheduleType",
          options: [
            {
              text: "Scheduled"
            },
            {
              text: "PRN (as needed)"
            },
            {
              text: "Once"
            },
            {
              text: "Stat"
            }
          ]
        },
        {
          label: "Morning",
          elementKey: "startDay",
          fqn: "medicationOrders.table.schedule.startDay",
          specialProperties: "marScheduleOption"
        },
        {
          label: "Mid day",
          elementKey: "midDay",
          fqn: "medicationOrders.table.schedule.midDay",
          specialProperties: "marScheduleOption"
        },
        {
          label: "Bedtime",
          elementKey: "endDay",
          fqn: "medicationOrders.table.schedule.endDay",
          specialProperties: "marScheduleOption"
        },
        {
          label: "Instructions",
          elementKey: "instructions",
          fqn: "medicationOrders.table.instructions"
        },
        {
          label: "Reason",
          elementKey: "reason",
          fqn: "medicationOrders.table.reason"
        },
        {
          label: "Notes",
          elementKey: "notes",
          fqn: "medicationOrders.table.notes"
        }
      ],
      medSchedule: [
        {
          label: "Morning",
          elementKey: "startDay",
          fqn: "medicationOrders.table.schedule.startDay",
          specialProperties: "marScheduleOption"
        },
        {
          label: "Mid day",
          elementKey: "midDay",
          fqn: "medicationOrders.table.schedule.midDay",
          specialProperties: "marScheduleOption"
        },
        {
          label: "Bedtime",
          elementKey: "endDay",
          fqn: "medicationOrders.table.schedule.endDay",
          specialProperties: "marScheduleOption"
        }
      ],
      generated: "2019-08-02T17:59:37-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "medicationOrders",
          tableKey: "table",
          addButtonText: "Add a medication order",
          tableCells: [
            {
              elementKey: "name",
              label: "Entered by name",
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
              tableCss: "hr-table",
              inputType: "time"
            },
            {
              elementKey: "profession",
              label: "Entered by profession",
              tableColumn: "1",
              inputType: "text"
            },
            {
              elementKey: "medication",
              label: "<a href=\"/assets/static-databases/drug.txt\" target=\"_blank\">Medication</a>",
              tableColumn: "2",
              inputType: "text"
            },
            {
              elementKey: "dose",
              label: "Dose",
              tableColumn: "2",
              inputType: "text"
            },
            {
              elementKey: "route",
              label: "Route",
              tableColumn: "3",
              tableCss: "hr-table",
              inputType: "select"
            },
            {
              elementKey: "startMeds",
              label: "Start day",
              tableColumn: "4",
              inputType: "day"
            },
            {
              elementKey: "endMeds",
              label: "End day",
              tableColumn: "4",
              inputType: "day"
            },
            {
              elementKey: "scheduleType",
              label: "Schedule type",
              tableColumn: "5",
              inputType: "select"
            },
            {
              elementKey: "startDay",
              label: "Morning",
              tableColumn: "5",
              inputType: "checkbox"
            },
            {
              elementKey: "midDay",
              label: "Mid day",
              tableColumn: "5",
              inputType: "checkbox"
            },
            {
              elementKey: "endDay",
              label: "Bedtime",
              tableColumn: "5",
              inputType: "checkbox"
            },
            {
              elementKey: "schedule",
              label: "Schedule time",
              tableColumn: "5",
              tableCss: "hr-table hide-table-element",
              inputType: "fieldset"
            },
            {
              elementKey: "instructions",
              label: "Instructions",
              tableColumn: "6",
              inputType: "text"
            },
            {
              elementKey: "reason",
              label: "Reason",
              tableColumn: "7",
              tableCss: "hr-table",
              inputType: "text"
            },
            {
              elementKey: "notes",
              label: "Notes",
              tableColumn: "10",
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
                    dataParent: "medicationOrders.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    label: "Entered by profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    dataParent: "medicationOrders.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    label: "Entered on day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    dataParent: "medicationOrders.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    label: "Entered at time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    dataParent: "medicationOrders.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "medication",
                    label: "<a href=\"/assets/static-databases/drug.txt\" target=\"_blank\">Medication</a>",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "1",
                    formCss: "is-two-thirds",
                    dataParent: "medicationOrders.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "dose",
                    label: "Dose",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "2",
                    formCss: "is-one-third",
                    dataParent: "medicationOrders.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "route",
                    label: "Route",
                    inputType: "select",
                    formRow: "3",
                    formColumn: "1",
                    formCss: "is-one-third",
                    dataParent: "medicationOrders.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "startMeds",
                    label: "Start day",
                    inputType: "day",
                    formRow: "3",
                    formColumn: "2",
                    formCss: "is-one-third",
                    dataParent: "medicationOrders.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "endMeds",
                    label: "End day",
                    inputType: "day",
                    formRow: "3",
                    formColumn: "3",
                    formCss: "is-one-third",
                    dataParent: "medicationOrders.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    elementKey: "scheduleType",
                    label: "Schedule type",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "1",
                    formCss: "is-one-third",
                    dataParent: "medicationOrders.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "schedule",
                    label: "Schedule time",
                    inputType: "fieldset",
                    formRow: "4",
                    formColumn: "2",
                    formCss: "is-one-third",
                    dataParent: "medicationOrders.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "startDay",
                              label: "Morning",
                              inputType: "checkbox",
                              fsetRow: "1",
                              dataParent: "medicationOrders.table.schedule",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "midDay",
                              label: "Mid day",
                              inputType: "checkbox",
                              fsetRow: "2",
                              dataParent: "medicationOrders.table.schedule",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "endDay",
                              label: "Bedtime",
                              inputType: "checkbox",
                              fsetRow: "3",
                              dataParent: "medicationOrders.table.schedule",
                              tableKey: "table"
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
                formRow: "5",
                elements: [
                  {
                    elementKey: "instructions",
                    label: "Instructions",
                    inputType: "text",
                    formRow: "5",
                    formColumn: "1",
                    dataParent: "medicationOrders.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "6",
                elements: [
                  {
                    elementKey: "reason",
                    label: "Reason",
                    inputType: "text",
                    formRow: "6",
                    formColumn: "1",
                    dataParent: "medicationOrders.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "7",
                elements: [
                  {
                    elementKey: "notes",
                    label: "Notes",
                    inputType: "textarea",
                    formRow: "7",
                    formColumn: "1",
                    dataParent: "medicationOrders.table",
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
    medAdminRec: {
      pageTitle: "Medication administration records",
      pageDataKey: "medAdminRec",
      pageChildren: [
        {
          label: "Medication status",
          elementKey: "medStatus",
          fqn: "medAdminRec.table.medStatus",
          options: [
            {
              text: "Active"
            },
            {
              text: "Hold"
            },
            {
              text: "Discontinued"
            },
            {
              text: ""
            }
          ]
        },
        {
          label: "Administration status",
          elementKey: "adminStatus",
          fqn: "medAdminRec.table.adminStatus",
          options: [
            {
              text: "Administered"
            },
            {
              text: "Refused"
            },
            {
              text: "Missed"
            },
            {
              text: "Skipped"
            }
          ]
        },
        {
          label: "Medication",
          elementKey: "medication",
          fqn: "medAdminRec.table.medication"
        },
        {
          label: "Route",
          elementKey: "route",
          fqn: "medAdminRec.table.route"
        },
        {
          label: "Yesterday",
          elementKey: "yesterday",
          fqn: "medAdminRec.table.yesterday",
          options: [
            {
              text: "[Yesterday\'s day]"
            },
            {
              text: "(Previous times)"
            }
          ]
        },
        {
          label: "Today\'s plan",
          elementKey: "todayPlan",
          fqn: "medAdminRec.table.todayPlan",
          options: [
            {
              text: "[Today\'s day] plan"
            }
          ]
        },
        {
          label: "Today\'s given",
          elementKey: "todayGiven",
          fqn: "medAdminRec.table.todayGiven",
          options: [
            {
              text: "[Today\'s day] given"
            }
          ]
        },
        {
          label: "Administered by",
          elementKey: "administeredBy",
          fqn: "medAdminRec.table.administeredBy"
        },
        {
          label: "Actual time",
          elementKey: "actualTime",
          fqn: "medAdminRec.table.actualTime",
          helperText: "Enter time delivered or say if not delivered.",
          helperHtml: "<p>Enter time delivered or say if not delivered.</p>"
        }
      ],
      generated: "2019-08-02T17:59:37-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "medAdminRec",
          tableKey: "table",
          addButtonText: "Add an administration record",
          tableCells: [
            {
              elementKey: "medStatus",
              label: "Medication status",
              tableColumn: "1",
              inputType: "select"
            },
            {
              elementKey: "adminStatus",
              label: "Administration status",
              tableColumn: "2",
              inputType: "select"
            },
            {
              elementKey: "medication",
              label: "Medication",
              tableColumn: "3",
              inputType: "text"
            },
            {
              elementKey: "route",
              label: "Route",
              tableColumn: "4",
              inputType: "text"
            },
            {
              elementKey: "yesterday",
              label: "Yesterday",
              tableColumn: "5",
              inputType: "calculated"
            },
            {
              elementKey: "todayPlan",
              label: "Today\'s plan",
              tableColumn: "6",
              inputType: "text"
            },
            {
              elementKey: "todayGiven",
              label: "Today\'s given",
              tableColumn: "7",
              inputType: "text"
            },
            {
              elementKey: "administeredBy",
              label: "Administered by",
              tableColumn: "8",
              inputType: "text"
            },
            {
              elementKey: "actualTime",
              label: "Actual time",
              tableColumn: "9",
              inputType: "text"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "medStatus",
                    label: "Medication status",
                    inputType: "select",
                    formRow: "1",
                    formColumn: "1",
                    dataParent: "medAdminRec.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "adminStatus",
                    label: "Administration status",
                    inputType: "select",
                    formRow: "1",
                    formColumn: "2",
                    dataParent: "medAdminRec.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "medication",
                    label: "Medication",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "medAdminRec.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "route",
                    label: "Route",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "2",
                    dataParent: "medAdminRec.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "yesterday",
                    label: "Yesterday",
                    inputType: "calculated",
                    formRow: "3",
                    formColumn: "1",
                    dataParent: "medAdminRec.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "todayPlan",
                    label: "Today\'s plan",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "2",
                    dataParent: "medAdminRec.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "todayGiven",
                    label: "Today\'s given",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "3",
                    dataParent: "medAdminRec.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    elementKey: "administeredBy",
                    label: "Administered by",
                    inputType: "text",
                    formRow: "4",
                    formColumn: "1",
                    dataParent: "medAdminRec.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "actualTime",
                    label: "Actual time",
                    inputType: "text",
                    formRow: "4",
                    formColumn: "2",
                    dataParent: "medAdminRec.table",
                    tableKey: "table"
                  }
                ]
              }
            ],
            columnsCount: 3
          }
        }
      ]
    },
    dischargeSummary: {
      pageTitle: "Discharge summary",
      pageDataKey: "dischargeSummary",
      pageChildren: [
        {
          label: "Admission day",
          defaultValue: "Day 0",
          elementKey: "admissionDay",
          fqn: "dischargeSummary.admissionDay"
        },
        {
          label: "Clinical summary",
          elementKey: "clinicalSummary",
          fqn: "dischargeSummary.clinicalSummary",
          dataCaseStudy: "Patient arrived with chronic COPD in acute form-NL-Previously diagnosed with hypertension-NL-Developed bilateral gram positive cocci pneunoma (what kind of cocci? Need a lab report)-NL-Treated with intravenous antibiotics and responded well"
        },
        {
          label: "Discharging physician/NP",
          elementKey: "dischargingPhysician/np",
          fqn: "dischargeSummary.dischargingPhysician/np",
          options: [
            {
              text: "Dr. Notley"
            },
            {
              text: "Dr. Hunicutt"
            },
            {
              text: "Dr. Lee"
            },
            {
              text: "Dr. Malik"
            },
            {
              text: "Dr. Ng"
            },
            {
              text: "Dr. Walker"
            },
            {
              text: "Dr. Brooks"
            }
          ]
        },
        {
          label: "Role",
          elementKey: "dischargeRole",
          fqn: "dischargeSummary.dischargeRole",
          options: [
            {
              text: "Doctor"
            },
            {
              text: "Nurse practitioner"
            }
          ]
        },
        {
          label: "Discharge day",
          elementKey: "dischargeDay",
          fqn: "dischargeSummary.dischargeDay",
          dataCaseStudy: "Day 1"
        },
        {
          label: "Discharge time",
          elementKey: "dischargeTime",
          fqn: "dischargeSummary.dischargeTime",
          dataCaseStudy: "0.333333333333333"
        },
        {
          label: "Discharged to",
          elementKey: "dischargedTo",
          fqn: "dischargeSummary.dischargedTo",
          options: [
            {
              text: "Home"
            },
            {
              text: "Expired"
            },
            {
              text: "Transferred"
            }
          ],
          dataCaseStudy: "home"
        },
        {
          label: "Transferred to",
          elementKey: "transferedTo",
          fqn: "dischargeSummary.transferedTo"
        },
        {
          label: "Leaving by",
          elementKey: "leavingBy",
          fqn: "dischargeSummary.leavingBy",
          options: [
            {
              text: "Taxi"
            },
            {
              text: "Family"
            },
            {
              text: "Ambulance"
            },
            {
              text: "Walk out/wheelchair"
            }
          ]
        },
        {
          label: "Discharge diagnosis",
          elementKey: "dischargeDiagnosis",
          fqn: "dischargeSummary.dischargeDiagnosis"
        },
        {
          label: "Discharge education",
          elementKey: "dischargeEducation",
          fqn: "dischargeSummary.dischargeEducation"
        }
      ],
      generated: "2019-08-02T17:59:37-07:00",
      hasForm: true,
      pageForm: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "admissionDay",
                label: "Admission day",
                inputType: "text",
                formRow: "1",
                formColumn: "1",
                dataParent: "dischargeSummary",
                tableKey: "pageForm"
              },
              {
                elementKey: "clinicalSummary",
                label: "Clinical summary",
                inputType: "textarea",
                formRow: "1",
                formColumn: "1",
                dataParent: "dischargeSummary",
                tableKey: "pageForm"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                elementKey: "dischargingPhysician/np",
                label: "Discharging physician/NP",
                inputType: "select",
                formRow: "2",
                formColumn: "2",
                formCss: "is--one-third",
                dataParent: "dischargeSummary",
                tableKey: "pageForm"
              },
              {
                elementKey: "dischargeRole",
                label: "Role",
                inputType: "select",
                formRow: "2",
                formColumn: "3",
                formCss: "is-one-third",
                dataParent: "dischargeSummary",
                tableKey: "pageForm"
              }
            ]
          },
          {
            formRow: "3",
            elements: [
              {
                elementKey: "dischargeDay",
                label: "Discharge day",
                inputType: "day",
                formRow: "3",
                formColumn: "1",
                dataParent: "dischargeSummary",
                tableKey: "pageForm"
              },
              {
                elementKey: "dischargeTime",
                label: "Discharge time",
                inputType: "time",
                formRow: "3",
                formColumn: "2",
                dataParent: "dischargeSummary",
                tableKey: "pageForm"
              },
              {
                elementKey: "dischargedTo",
                label: "Discharged to",
                inputType: "select",
                formRow: "3",
                formColumn: "3",
                dataParent: "dischargeSummary",
                tableKey: "pageForm"
              },
              {
                elementKey: "transferedTo",
                label: "Transferred to",
                inputType: "text",
                formRow: "3",
                formColumn: "4",
                dataParent: "dischargeSummary",
                tableKey: "pageForm"
              },
              {
                elementKey: "leavingBy",
                label: "Leaving by",
                inputType: "select",
                formRow: "3",
                formColumn: "5",
                dataParent: "dischargeSummary",
                tableKey: "pageForm"
              }
            ]
          },
          {
            formRow: "4",
            elements: [
              {
                elementKey: "dischargeDiagnosis",
                label: "Discharge diagnosis",
                inputType: "textarea",
                formRow: "4",
                formColumn: "1",
                dataParent: "dischargeSummary",
                tableKey: "pageForm"
              }
            ]
          },
          {
            formRow: "5",
            elements: [
              {
                elementKey: "dischargeEducation",
                label: "Discharge education",
                inputType: "textarea",
                formRow: "5",
                formColumn: "1",
                dataParent: "dischargeSummary",
                tableKey: "pageForm"
              }
            ]
          }
        ],
        columnsCount: 5
      }
    },
    billing: {
      pageTitle: "Billing",
      pageDataKey: "billing",
      pageChildren: [
        {
          label: "MSP",
          elementKey: "msp",
          fqn: "billing.msp",
          dataCaseStudy: "MSP"
        },
        {
          label: "Third party",
          elementKey: "thirdParty",
          fqn: "billing.thirdParty",
          dataCaseStudy: "MSP"
        },
        {
          label: "Federal",
          elementKey: "federal",
          fqn: "billing.federal",
          dataCaseStudy: "MSP"
        }
      ],
      generated: "2019-08-02T17:59:37-07:00",
      hasForm: true,
      pageForm: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "msp",
                label: "MSP",
                inputType: "checkbox",
                formRow: "1",
                formColumn: "1",
                dataParent: "billing",
                tableKey: "pageForm"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                elementKey: "thirdParty",
                label: "Third party",
                inputType: "checkbox",
                formRow: "2",
                formColumn: "1",
                dataParent: "billing",
                tableKey: "pageForm"
              }
            ]
          },
          {
            formRow: "3",
            elements: [
              {
                elementKey: "federal",
                label: "Federal",
                inputType: "checkbox",
                formRow: "3",
                formColumn: "1",
                dataParent: "billing",
                tableKey: "pageForm"
              }
            ]
          }
        ],
        columnsCount: 1
      }
    }
  }
}
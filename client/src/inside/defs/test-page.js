/* eslint-disable quotes */
export default function () {
  return {
    testPage: {
      pageTitle: "Test Page",
      pageDataKey: "testPage",
      pageChildren: [
        {
          label: "<b>a form <i>label</i></b>",
          elementKey: "pform_label",
          fqn: "testPage.pform_label"
        },
        {
          label: "spacer",
          elementKey: "pspacer",
          fqn: "testPage.pspacer"
        },
        {
          label: "text w def",
          defaultValue: "default content",
          elementKey: "ptext",
          fqn: "testPage.ptext",
          suffix: "lb"
        },
        {
          label: "checkbox",
          defaultValue: "TRUE",
          elementKey: "pcheckbox",
          fqn: "testPage.pcheckbox",
          helperText: "a checkbox iinput",
          helperHtml: "<p>a checkbox iinput</p>"
        },
        {
          label: "text",
          dependantOn: "pcheckbox",
          elementKey: "ptextpcheckbox",
          fqn: "testPage.ptextpcheckbox",
          helperText: "a text input",
          helperHtml: "<p>a text input</p>"
        },
        {
          label: "assetLink",
          elementKey: "passetLink",
          fqn: "testPage.passetLink",
          assetBase: "standardized-assessment-tools",
          assetName: "the-canadian-ed-triage-and-acuity-scale.gif"
        },
        {
          label: "select",
          elementKey: "pselect",
          fqn: "testPage.pselect",
          options: [
            {
              text: "1=a"
            },
            {
              text: "2=b"
            },
            {
              text: "3=c"
            }
          ],
          passToFunction: "p-cValue1"
        },
        {
          label: "select",
          elementKey: "pselect2",
          fqn: "testPage.pselect2",
          options: [
            {
              text: "1=a"
            },
            {
              text: "2=b"
            },
            {
              text: "3=c"
            }
          ],
          passToFunction: "p-cValue1"
        },
        {
          label: "calculatedValue",
          elementKey: "p-cValue1",
          fqn: "testPage.p-cValue1",
          helperText: "a calculated value based on the select \'pselect1\' on this page",
          helperHtml: "<p>a calculated value based on the select \'pselect1\' on this page</p>"
        },
        {
          label: "checkset",
          defaultValue: "check1,all",
          elementKey: "pcheckset",
          fqn: "testPage.pcheckset",
          options: [
            {
              text: "check1=check option 1"
            },
            {
              text: "check2=check option 2"
            },
            {
              text: "other=another option"
            },
            {
              text: "all=all options are selectable"
            }
          ]
        },
        {
          label: "textarea",
          elementKey: "ptextarea",
          fqn: "testPage.ptextarea"
        },
        {
          label: "text",
          elementKey: "ptext1",
          fqn: "testPage.pfieldset1.ptext1",
          formOption: "hideLabel"
        },
        {
          label: "textarea",
          elementKey: "ptextarea1",
          fqn: "testPage.pfieldset1.ptextarea1"
        },
        {
          label: "select",
          elementKey: "pselect1",
          fqn: "testPage.pfieldset1.pselect1",
          options: [
            {
              text: "1 = Yes"
            },
            {
              text: "2 = No"
            }
          ],
          passToFunction: "p-cValue2"
        },
        {
          label: "calculatedValue",
          elementKey: "p-cValue2",
          fqn: "testPage.pfieldset1.p-cValue2"
        },
        {
          label: "checkbox",
          elementKey: "pcheckbox2",
          fqn: "testPage.pfieldset2.pcheckbox2"
        },
        {
          label: "text",
          dependantOn: "pcheckbox2",
          elementKey: "ptext2",
          fqn: "testPage.pfieldset2.ptext2"
        },
        {
          label: "<b>a form <i>label</i></b>",
          elementKey: "pform_label2",
          fqn: "testPage.pfieldset2.pform_label2"
        },
        {
          label: "spacer",
          elementKey: "pspacer2",
          fqn: "testPage.pfieldset2.pspacer2"
        },
        {
          label: "assetLink",
          elementKey: "passetLink2",
          fqn: "testPage.pfieldset2.passetLink2",
          assetBase: "standardized-assessment-tools",
          assetName: "the-canadian-ed-triage-and-acuity-scale.gif"
        },
        {
          label: "date",
          elementKey: "pdate2",
          fqn: "testPage.pfieldset2.pdate2"
        }
      ],
      generated: "2019-07-13T21:10:39-07:00",
      hasForm: true,
      pageForm: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "pform_label",
                label: "<b>a form <i>label</i></b>",
                inputType: "form_label",
                formRow: "1",
                formColumn: "1",
                dataParent: "testPage"
              },
              {
                elementKey: "pspacer",
                label: "spacer",
                inputType: "spacer",
                formRow: "1",
                formColumn: "2",
                dataParent: "testPage"
              },
              {
                elementKey: "ptext",
                label: "text w def",
                inputType: "text",
                formRow: "1",
                formColumn: "3",
                dataParent: "testPage"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                elementKey: "pcheckbox",
                label: "checkbox",
                inputType: "checkbox",
                formRow: "2",
                formColumn: "1",
                dataParent: "testPage"
              },
              {
                elementKey: "ptextpcheckbox",
                label: "text",
                inputType: "text",
                formRow: "2",
                formColumn: "2",
                dataParent: "testPage"
              },
              {
                elementKey: "passetLink",
                label: "assetLink",
                inputType: "assetLink",
                formRow: "2",
                formColumn: "3",
                dataParent: "testPage"
              }
            ]
          },
          {
            formRow: "3",
            elements: [
              {
                elementKey: "pselect",
                label: "select",
                inputType: "select",
                formRow: "3",
                formColumn: "1",
                dataParent: "testPage"
              },
              {
                elementKey: "pselect2",
                label: "select",
                inputType: "select",
                formRow: "3",
                formColumn: "2",
                dataParent: "testPage"
              },
              {
                elementKey: "p-cValue1",
                label: "calculatedValue",
                inputType: "calculatedValue",
                formRow: "3",
                formColumn: "3",
                dataParent: "testPage"
              }
            ]
          },
          {
            formRow: "4",
            elements: [
              {
                elementKey: "pcheckset",
                label: "checkset",
                inputType: "checkset",
                formRow: "4",
                formColumn: "1",
                dataParent: "testPage"
              },
              {
                elementKey: "pfieldset1",
                label: "fieldset",
                inputType: "fieldset",
                formRow: "4",
                formColumn: "2",
                dataParent: "testPage",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          elementKey: "ptext1",
                          label: "text",
                          inputType: "text",
                          fsetRow: "1",
                          dataParent: "testPage.pfieldset1"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          elementKey: "ptextarea1",
                          label: "textarea",
                          inputType: "textarea",
                          fsetRow: "2",
                          dataParent: "testPage.pfieldset1"
                        }
                      ]
                    },
                    {
                      formRow: "3",
                      elements: [
                        {
                          elementKey: "pselect1",
                          label: "select",
                          inputType: "select",
                          fsetRow: "3",
                          dataParent: "testPage.pfieldset1"
                        }
                      ]
                    },
                    {
                      formRow: "4",
                      elements: [
                        {
                          elementKey: "p-cValue2",
                          label: "calculatedValue",
                          inputType: "calculatedValue",
                          fsetRow: "4",
                          dataParent: "testPage.pfieldset1"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              },
              {
                elementKey: "pfieldset2",
                label: "fieldset",
                inputType: "fieldset",
                formRow: "4",
                formColumn: "3",
                dataParent: "testPage",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          elementKey: "pcheckbox2",
                          label: "checkbox",
                          inputType: "checkbox",
                          fsetRow: "1",
                          dataParent: "testPage.pfieldset2"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          elementKey: "ptext2",
                          label: "text",
                          inputType: "text",
                          fsetRow: "2",
                          dataParent: "testPage.pfieldset2"
                        }
                      ]
                    },
                    {
                      formRow: "3",
                      elements: [
                        {
                          elementKey: "pform_label2",
                          label: "<b>a form <i>label</i></b>",
                          inputType: "form_label",
                          fsetRow: "3",
                          dataParent: "testPage.pfieldset2"
                        }
                      ]
                    },
                    {
                      formRow: "4",
                      elements: [
                        {
                          elementKey: "pspacer2",
                          label: "spacer",
                          inputType: "spacer",
                          fsetRow: "4",
                          dataParent: "testPage.pfieldset2"
                        }
                      ]
                    },
                    {
                      formRow: "5",
                      elements: [
                        {
                          elementKey: "passetLink2",
                          label: "assetLink",
                          inputType: "assetLink",
                          fsetRow: "5",
                          dataParent: "testPage.pfieldset2"
                        }
                      ]
                    },
                    {
                      formRow: "6",
                      elements: [
                        {
                          elementKey: "pdate2",
                          label: "date",
                          inputType: "date",
                          fsetRow: "6",
                          dataParent: "testPage.pfieldset2"
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
                elementKey: "ptextarea",
                label: "textarea",
                inputType: "textarea",
                formRow: "5",
                formColumn: "1",
                formCss: "full-width",
                dataParent: "testPage"
              }
            ]
          }
        ],
        columnsCount: 3
      }
    },
    testTable: {
      pageTitle: "Test Table",
      pageDataKey: "testTable",
      pageChildren: [
        {
          label: "<b>a form <i>label</i></b>",
          elementKey: "pform_label",
          fqn: "testTable.table.pform_label"
        },
        {
          label: "spacer",
          elementKey: "pspacer",
          fqn: "testTable.table.pspacer"
        },
        {
          label: "text w def",
          defaultValue: "default content",
          elementKey: "ptext",
          fqn: "testTable.table.ptext"
        },
        {
          label: "checkbox",
          defaultValue: "TRUE",
          elementKey: "pcheckbox",
          fqn: "testTable.table.pcheckbox",
          helperText: "a checkbox iinput",
          helperHtml: "<p>a checkbox iinput</p>"
        },
        {
          label: "text",
          dependantOn: "pcheckbox",
          elementKey: "ptextpcheckbox",
          fqn: "testTable.table.ptextpcheckbox",
          helperText: "a text input",
          helperHtml: "<p>a text input</p>"
        },
        {
          label: "assetLink",
          elementKey: "passetLink",
          fqn: "testTable.table.passetLink",
          assetBase: "standardized-assessment-tools",
          assetName: "the-canadian-ed-triage-and-acuity-scale.gif"
        },
        {
          label: "select",
          elementKey: "pselect",
          fqn: "testTable.table.pselect",
          options: [
            {
              text: "1=a"
            },
            {
              text: "2=b"
            },
            {
              text: "3=c"
            }
          ],
          passToFunction: "p-cValue1"
        },
        {
          label: "select",
          elementKey: "pselect2",
          fqn: "testTable.table.pselect2",
          options: [
            {
              text: "1=a"
            },
            {
              text: "2=b"
            },
            {
              text: "3=c"
            }
          ],
          passToFunction: "p-cValue1"
        },
        {
          label: "calculatedValue",
          elementKey: "p-cValue1",
          fqn: "testTable.table.p-cValue1",
          helperText: "a calculated value based on the select \'pselect1\' on this page",
          helperHtml: "<p>a calculated value based on the select \'pselect1\' on this page</p>"
        },
        {
          label: "checkset",
          defaultValue: "check1,other",
          elementKey: "pcheckset",
          fqn: "testTable.table.pcheckset",
          options: [
            {
              text: "check1=check option 1"
            },
            {
              text: "check2=check option 2"
            },
            {
              text: "other=another option"
            },
            {
              text: "all=all options are selectable"
            }
          ]
        },
        {
          label: "textarea",
          elementKey: "ptextarea",
          fqn: "testTable.table.ptextarea"
        },
        {
          label: "text",
          elementKey: "ptext1",
          fqn: "testTable.table.pfieldset1.ptext1",
          formOption: "hideLabel"
        },
        {
          label: "textarea",
          elementKey: "ptextarea1",
          fqn: "testTable.table.pfieldset1.ptextarea1"
        },
        {
          label: "select",
          elementKey: "pselect1",
          fqn: "testTable.table.pfieldset1.pselect1",
          options: [
            {
              text: "1 = Yes"
            },
            {
              text: "2 = No"
            }
          ],
          passToFunction: "p-cValue2"
        },
        {
          label: "calculatedValue",
          elementKey: "p-cValue2",
          fqn: "testTable.table.pfieldset1.p-cValue2"
        },
        {
          label: "checkbox",
          elementKey: "pcheckbox2",
          fqn: "testTable.table.pfieldset2.pcheckbox2"
        },
        {
          label: "text",
          dependantOn: "pcheckbox2",
          elementKey: "ptext2",
          fqn: "testTable.table.pfieldset2.ptext2"
        },
        {
          label: "<b>a form <i>label</i></b>",
          elementKey: "pform_label2",
          fqn: "testTable.table.pfieldset2.pform_label2"
        },
        {
          label: "spacer",
          elementKey: "pspacer2",
          fqn: "testTable.table.pfieldset2.pspacer2"
        },
        {
          label: "assetLink",
          elementKey: "passetLink2",
          fqn: "testTable.table.pfieldset2.passetLink2",
          assetBase: "standardized-assessment-tools",
          assetName: "the-canadian-ed-triage-and-acuity-scale.gif"
        },
        {
          label: "date",
          elementKey: "pdate2",
          fqn: "testTable.table.pfieldset2.pdate2"
        },
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "testTable.stacked.name"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "testTable.stacked.profession"
        },
        {
          label: "Entered on day",
          elementKey: "day",
          fqn: "testTable.stacked.day"
        },
        {
          label: "Entered at time",
          elementKey: "time",
          fqn: "testTable.stacked.time"
        },
        {
          label: "Referral name",
          elementKey: "referralName",
          fqn: "testTable.stacked.referralName"
        },
        {
          label: "Referral profession",
          elementKey: "referralProfession",
          fqn: "testTable.stacked.referralProfession"
        },
        {
          label: "Appointment date",
          elementKey: "appointmentDate",
          fqn: "testTable.stacked.appointmentDate"
        },
        {
          label: "Appointment time",
          elementKey: "appointmentTime",
          fqn: "testTable.stacked.appointmentTime"
        },
        {
          label: "Status",
          elementKey: "status",
          fqn: "testTable.stacked.status",
          options: [
            {
              text: "Active"
            },
            {
              text: "Discharged"
            }
          ]
        }
      ],
      generated: "2019-07-13T21:10:39-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "testTable",
          tableKey: "table",
          label: "table",
          addButtonText: "Add a row",
          tableCells: [
            {
              elementKey: "pcheckbox",
              label: "checkbox",
              tableColumn: "1",
              inputType: "checkbox"
            },
            {
              elementKey: "ptext",
              label: "text w def",
              tableColumn: "2",
              inputType: "text"
            },
            {
              elementKey: "ptextpcheckbox",
              label: "text",
              tableColumn: "3",
              inputType: "text"
            },
            {
              elementKey: "pselect",
              label: "select",
              tableColumn: "4",
              inputType: "select"
            },
            {
              elementKey: "pselect2",
              label: "select",
              tableColumn: "4",
              inputType: "select"
            },
            {
              elementKey: "p-cValue1",
              label: "calculatedValue",
              tableColumn: "4",
              inputType: "calculatedValue"
            },
            {
              elementKey: "pcheckset",
              label: "checkset",
              tableColumn: "5",
              inputType: "checkset"
            },
            {
              elementKey: "ptextarea",
              label: "textarea",
              tableColumn: "6",
              inputType: "textarea"
            },
            {
              elementKey: "ptext1",
              label: "text",
              tableColumn: "7",
              inputType: "text"
            },
            {
              elementKey: "ptextarea1",
              label: "textarea",
              tableColumn: "8",
              inputType: "textarea"
            },
            {
              elementKey: "pselect1",
              label: "select",
              tableColumn: "9",
              inputType: "select"
            },
            {
              elementKey: "p-cValue2",
              label: "calculatedValue",
              tableColumn: "10",
              inputType: "calculatedValue"
            },
            {
              elementKey: "pcheckbox2",
              label: "checkbox",
              tableColumn: "11",
              inputType: "checkbox"
            },
            {
              elementKey: "ptext2",
              label: "text",
              tableColumn: "12",
              inputType: "text"
            },
            {
              elementKey: "pform_label2",
              label: "<b>a form <i>label</i></b>",
              tableColumn: "13",
              inputType: "form_label"
            },
            {
              elementKey: "pdate2",
              label: "date",
              tableColumn: "14",
              inputType: "date"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "pform_label",
                    label: "<b>a form <i>label</i></b>",
                    inputType: "form_label",
                    formRow: "1",
                    formColumn: "1",
                    dataParent: "testTable.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "pspacer",
                    label: "spacer",
                    inputType: "spacer",
                    formRow: "1",
                    formColumn: "2",
                    dataParent: "testTable.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "ptext",
                    label: "text w def",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "3",
                    dataParent: "testTable.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "pcheckbox",
                    label: "checkbox",
                    inputType: "checkbox",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "testTable.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "ptextpcheckbox",
                    label: "text",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "2",
                    dataParent: "testTable.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "passetLink",
                    label: "assetLink",
                    inputType: "assetLink",
                    formRow: "2",
                    formColumn: "3",
                    dataParent: "testTable.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "pselect",
                    label: "select",
                    inputType: "select",
                    formRow: "3",
                    formColumn: "1",
                    dataParent: "testTable.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "pselect2",
                    label: "select",
                    inputType: "select",
                    formRow: "3",
                    formColumn: "2",
                    dataParent: "testTable.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "p-cValue1",
                    label: "calculatedValue",
                    inputType: "calculatedValue",
                    formRow: "3",
                    formColumn: "3",
                    dataParent: "testTable.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    elementKey: "pcheckset",
                    label: "checkset",
                    inputType: "checkset",
                    formRow: "4",
                    formColumn: "1",
                    dataParent: "testTable.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "pfieldset1",
                    label: "fieldset",
                    inputType: "fieldset",
                    formRow: "4",
                    formColumn: "2",
                    dataParent: "testTable.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "ptext1",
                              label: "text",
                              inputType: "text",
                              fsetRow: "1",
                              dataParent: "testTable.table.pfieldset1",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "ptextarea1",
                              label: "textarea",
                              inputType: "textarea",
                              fsetRow: "2",
                              dataParent: "testTable.table.pfieldset1",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "pselect1",
                              label: "select",
                              inputType: "select",
                              fsetRow: "3",
                              dataParent: "testTable.table.pfieldset1",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "p-cValue2",
                              label: "calculatedValue",
                              inputType: "calculatedValue",
                              fsetRow: "4",
                              dataParent: "testTable.table.pfieldset1",
                              tableKey: "table"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "pfieldset2",
                    label: "fieldset",
                    inputType: "fieldset",
                    formRow: "4",
                    formColumn: "3",
                    dataParent: "testTable.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "pcheckbox2",
                              label: "checkbox",
                              inputType: "checkbox",
                              fsetRow: "1",
                              dataParent: "testTable.table.pfieldset2",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "ptext2",
                              label: "text",
                              inputType: "text",
                              fsetRow: "2",
                              dataParent: "testTable.table.pfieldset2",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "pform_label2",
                              label: "<b>a form <i>label</i></b>",
                              inputType: "form_label",
                              fsetRow: "3",
                              dataParent: "testTable.table.pfieldset2",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "pspacer2",
                              label: "spacer",
                              inputType: "spacer",
                              fsetRow: "4",
                              dataParent: "testTable.table.pfieldset2",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "passetLink2",
                              label: "assetLink",
                              inputType: "assetLink",
                              fsetRow: "5",
                              dataParent: "testTable.table.pfieldset2",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              elementKey: "pdate2",
                              label: "date",
                              inputType: "date",
                              fsetRow: "6",
                              dataParent: "testTable.table.pfieldset2",
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
                    elementKey: "ptextarea",
                    label: "textarea",
                    inputType: "textarea",
                    formRow: "5",
                    formColumn: "1",
                    formCss: "full-width",
                    dataParent: "testTable.table",
                    tableKey: "table"
                  }
                ]
              }
            ],
            columnsCount: 3
          }
        },
        {
          pageDataKey: "testTable",
          tableKey: "stacked",
          addButtonText: "Add a referral",
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
              tableColumn: "2",
              inputType: "day"
            },
            {
              elementKey: "time",
              label: "Entered at time",
              tableColumn: "2",
              inputType: "time"
            },
            {
              elementKey: "referralName",
              label: "Referral name",
              tableColumn: "3",
              inputType: "text"
            },
            {
              elementKey: "referralProfession",
              label: "Referral profession",
              tableColumn: "3",
              inputType: "text"
            },
            {
              elementKey: "appointmentDate",
              label: "Appointment date",
              tableColumn: "4",
              inputType: "date"
            },
            {
              elementKey: "appointmentTime",
              label: "Appointment time",
              tableColumn: "4",
              inputType: "time"
            },
            {
              elementKey: "status",
              label: "Status",
              tableColumn: "5",
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
                    label: "Entered by name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    formCss: "user_name",
                    dataParent: "testTable.stacked",
                    tableKey: "stacked"
                  },
                  {
                    elementKey: "profession",
                    label: "Entered by profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    dataParent: "testTable.stacked",
                    tableKey: "stacked"
                  },
                  {
                    elementKey: "day",
                    label: "Entered on day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    dataParent: "testTable.stacked",
                    tableKey: "stacked"
                  },
                  {
                    elementKey: "time",
                    label: "Entered at time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    dataParent: "testTable.stacked",
                    tableKey: "stacked"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "referralName",
                    label: "Referral name",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "testTable.stacked",
                    tableKey: "stacked"
                  },
                  {
                    elementKey: "referralProfession",
                    label: "Referral profession",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "2",
                    dataParent: "testTable.stacked",
                    tableKey: "stacked"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "appointmentDate",
                    label: "Appointment date",
                    inputType: "date",
                    formRow: "3",
                    formColumn: "1",
                    dataParent: "testTable.stacked",
                    tableKey: "stacked"
                  },
                  {
                    elementKey: "appointmentTime",
                    label: "Appointment time",
                    inputType: "time",
                    formRow: "3",
                    formColumn: "2",
                    dataParent: "testTable.stacked",
                    tableKey: "stacked"
                  },
                  {
                    elementKey: "status",
                    label: "Status",
                    inputType: "select",
                    formRow: "3",
                    formColumn: "3",
                    dataParent: "testTable.stacked",
                    tableKey: "stacked"
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
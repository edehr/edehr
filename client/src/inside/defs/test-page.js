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
          fqn: "testPage.ptext"
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
          fqn: "testPage.passetLink"
        },
        {
          label: "select",
          elementKey: "pselect",
          fqn: "testPage.pselect",
          passToFunction: "p-cValue1"
        },
        {
          label: "select",
          elementKey: "pselect2",
          fqn: "testPage.pselect2",
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
          fqn: "testPage.pcheckset"
        },
        {
          label: "textarea",
          elementKey: "ptextarea",
          fqn: "testPage.ptextarea"
        },
        {
          label: "text",
          elementKey: "ptext1",
          fqn: "testPage.pfieldset1.ptext1"
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
          fqn: "testPage.pfieldset2.passetLink2"
        },
        {
          label: "date",
          elementKey: "pdate2",
          fqn: "testPage.pfieldset2.pdate2"
        }
      ],
      generated: "2019-06-27T16:03:34-07:00",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                label: "<b>a form <i>label</i></b>",
                pageDataKey: "testPage",
                elementKey: "pform_label",
                inputType: "form_label",
                formRow: "1",
                formColumn: "1",
                dataParent: "testPage",
                fqn: "testPage.pform_label"
              },
              {
                label: "spacer",
                pageDataKey: "testPage",
                elementKey: "pspacer",
                inputType: "spacer",
                formRow: "1",
                formColumn: "2",
                dataParent: "testPage",
                fqn: "testPage.pspacer"
              },
              {
                label: "text w def",
                pageDataKey: "testPage",
                elementKey: "ptext",
                inputType: "text",
                formRow: "1",
                formColumn: "3",
                dataParent: "testPage",
                fqn: "testPage.ptext"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                label: "checkbox",
                pageDataKey: "testPage",
                elementKey: "pcheckbox",
                inputType: "checkbox",
                formRow: "2",
                formColumn: "1",
                dataParent: "testPage",
                fqn: "testPage.pcheckbox"
              },
              {
                label: "text",
                pageDataKey: "testPage",
                elementKey: "ptextpcheckbox",
                inputType: "text",
                formRow: "2",
                formColumn: "2",
                dataParent: "testPage",
                fqn: "testPage.ptextpcheckbox"
              },
              {
                label: "assetLink",
                pageDataKey: "testPage",
                elementKey: "passetLink",
                inputType: "assetLink",
                formRow: "2",
                formColumn: "3",
                assetBase: "standardized-assessment-tools",
                assetName: "the-canadian-ed-triage-and-acuity-scale.gif",
                dataParent: "testPage",
                fqn: "testPage.passetLink"
              }
            ]
          },
          {
            formRow: "3",
            elements: [
              {
                label: "select",
                pageDataKey: "testPage",
                elementKey: "pselect",
                inputType: "select",
                formRow: "3",
                formColumn: "1",
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
                dataParent: "testPage",
                fqn: "testPage.pselect"
              },
              {
                label: "select",
                pageDataKey: "testPage",
                elementKey: "pselect2",
                inputType: "select",
                formRow: "3",
                formColumn: "2",
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
                dataParent: "testPage",
                fqn: "testPage.pselect2"
              },
              {
                label: "calculatedValue",
                pageDataKey: "testPage",
                elementKey: "p-cValue1",
                inputType: "calculatedValue",
                formRow: "3",
                formColumn: "3",
                dataParent: "testPage",
                fqn: "testPage.p-cValue1"
              }
            ]
          },
          {
            formRow: "4",
            elements: [
              {
                label: "checkset",
                pageDataKey: "testPage",
                elementKey: "pcheckset",
                inputType: "checkset",
                formRow: "4",
                formColumn: "1",
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
                ],
                dataParent: "testPage",
                fqn: "testPage.pcheckset"
              },
              {
                label: "fieldset",
                pageDataKey: "testPage",
                elementKey: "pfieldset1",
                inputType: "fieldset",
                formRow: "4",
                formColumn: "2",
                dataParent: "testPage",
                fqn: "testPage.pfieldset1",
                elements: [
                  {
                    label: "text",
                    pageDataKey: "testPage",
                    level3Key: "pfieldset1",
                    elementKey: "ptext1",
                    inputType: "text",
                    formOption: "hideLabel",
                    fsetRow: "1",
                    fsetCol: "1",
                    dataParent: "testPage.pfieldset1",
                    fqn: "testPage.pfieldset1.ptext1",
                    formColumn: "1"
                  },
                  {
                    label: "textarea",
                    pageDataKey: "testPage",
                    level3Key: "pfieldset1",
                    elementKey: "ptextarea1",
                    inputType: "textarea",
                    fsetRow: "2",
                    fsetCol: "1",
                    dataParent: "testPage.pfieldset1",
                    fqn: "testPage.pfieldset1.ptextarea1",
                    formColumn: "1"
                  },
                  {
                    label: "select",
                    pageDataKey: "testPage",
                    level3Key: "pfieldset1",
                    elementKey: "pselect1",
                    inputType: "select",
                    fsetRow: "3",
                    fsetCol: "1",
                    options: [
                      {
                        text: "1 = Yes"
                      },
                      {
                        text: "2 = No"
                      }
                    ],
                    dataParent: "testPage.pfieldset1",
                    fqn: "testPage.pfieldset1.pselect1",
                    formColumn: "1"
                  },
                  {
                    label: "calculatedValue",
                    pageDataKey: "testPage",
                    level3Key: "pfieldset1",
                    elementKey: "p-cValue2",
                    inputType: "calculatedValue",
                    fsetRow: "4",
                    fsetCol: "1",
                    dataParent: "testPage.pfieldset1",
                    fqn: "testPage.pfieldset1.p-cValue2",
                    formColumn: "1"
                  }
                ],
                containerType: "fieldset",
                containerKey: "pfieldset1",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          label: "text",
                          pageDataKey: "testPage",
                          level3Key: "pfieldset1",
                          elementKey: "ptext1",
                          inputType: "text",
                          formOption: "hideLabel",
                          fsetRow: "1",
                          fsetCol: "1",
                          dataParent: "testPage.pfieldset1",
                          fqn: "testPage.pfieldset1.ptext1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          label: "textarea",
                          pageDataKey: "testPage",
                          level3Key: "pfieldset1",
                          elementKey: "ptextarea1",
                          inputType: "textarea",
                          fsetRow: "2",
                          fsetCol: "1",
                          dataParent: "testPage.pfieldset1",
                          fqn: "testPage.pfieldset1.ptextarea1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "3",
                      elements: [
                        {
                          label: "select",
                          pageDataKey: "testPage",
                          level3Key: "pfieldset1",
                          elementKey: "pselect1",
                          inputType: "select",
                          fsetRow: "3",
                          fsetCol: "1",
                          options: [
                            {
                              text: "1 = Yes"
                            },
                            {
                              text: "2 = No"
                            }
                          ],
                          dataParent: "testPage.pfieldset1",
                          fqn: "testPage.pfieldset1.pselect1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "4",
                      elements: [
                        {
                          label: "calculatedValue",
                          pageDataKey: "testPage",
                          level3Key: "pfieldset1",
                          elementKey: "p-cValue2",
                          inputType: "calculatedValue",
                          fsetRow: "4",
                          fsetCol: "1",
                          dataParent: "testPage.pfieldset1",
                          fqn: "testPage.pfieldset1.p-cValue2",
                          formColumn: "1"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              },
              {
                label: "fieldset",
                pageDataKey: "testPage",
                elementKey: "pfieldset2",
                inputType: "fieldset",
                formRow: "4",
                formColumn: "3",
                dataParent: "testPage",
                fqn: "testPage.pfieldset2",
                elements: [
                  {
                    label: "checkbox",
                    pageDataKey: "testPage",
                    level3Key: "pfieldset2",
                    elementKey: "pcheckbox2",
                    inputType: "checkbox",
                    fsetRow: "1",
                    fsetCol: "1",
                    dataParent: "testPage.pfieldset2",
                    fqn: "testPage.pfieldset2.pcheckbox2",
                    formColumn: "1"
                  },
                  {
                    label: "text",
                    pageDataKey: "testPage",
                    level3Key: "pfieldset2",
                    elementKey: "ptext2",
                    inputType: "text",
                    fsetRow: "2",
                    fsetCol: "1",
                    dataParent: "testPage.pfieldset2",
                    fqn: "testPage.pfieldset2.ptext2",
                    formColumn: "1"
                  },
                  {
                    label: "<b>a form <i>label</i></b>",
                    pageDataKey: "testPage",
                    level3Key: "pfieldset2",
                    elementKey: "pform_label2",
                    inputType: "form_label",
                    fsetRow: "3",
                    fsetCol: "1",
                    dataParent: "testPage.pfieldset2",
                    fqn: "testPage.pfieldset2.pform_label2",
                    formColumn: "1"
                  },
                  {
                    label: "spacer",
                    pageDataKey: "testPage",
                    level3Key: "pfieldset2",
                    elementKey: "pspacer2",
                    inputType: "spacer",
                    fsetRow: "4",
                    fsetCol: "1",
                    dataParent: "testPage.pfieldset2",
                    fqn: "testPage.pfieldset2.pspacer2",
                    formColumn: "1"
                  },
                  {
                    label: "assetLink",
                    pageDataKey: "testPage",
                    level3Key: "pfieldset2",
                    elementKey: "passetLink2",
                    inputType: "assetLink",
                    fsetRow: "5",
                    fsetCol: "1",
                    assetBase: "standardized-assessment-tools",
                    assetName: "the-canadian-ed-triage-and-acuity-scale.gif",
                    dataParent: "testPage.pfieldset2",
                    fqn: "testPage.pfieldset2.passetLink2",
                    formColumn: "1"
                  },
                  {
                    label: "date",
                    pageDataKey: "testPage",
                    level3Key: "pfieldset2",
                    elementKey: "pdate2",
                    inputType: "date",
                    fsetRow: "6",
                    fsetCol: "1",
                    dataParent: "testPage.pfieldset2",
                    fqn: "testPage.pfieldset2.pdate2",
                    formColumn: "1"
                  }
                ],
                containerType: "fieldset",
                containerKey: "pfieldset2",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          label: "checkbox",
                          pageDataKey: "testPage",
                          level3Key: "pfieldset2",
                          elementKey: "pcheckbox2",
                          inputType: "checkbox",
                          fsetRow: "1",
                          fsetCol: "1",
                          dataParent: "testPage.pfieldset2",
                          fqn: "testPage.pfieldset2.pcheckbox2",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          label: "text",
                          pageDataKey: "testPage",
                          level3Key: "pfieldset2",
                          elementKey: "ptext2",
                          inputType: "text",
                          fsetRow: "2",
                          fsetCol: "1",
                          dataParent: "testPage.pfieldset2",
                          fqn: "testPage.pfieldset2.ptext2",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "3",
                      elements: [
                        {
                          label: "<b>a form <i>label</i></b>",
                          pageDataKey: "testPage",
                          level3Key: "pfieldset2",
                          elementKey: "pform_label2",
                          inputType: "form_label",
                          fsetRow: "3",
                          fsetCol: "1",
                          dataParent: "testPage.pfieldset2",
                          fqn: "testPage.pfieldset2.pform_label2",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "4",
                      elements: [
                        {
                          label: "spacer",
                          pageDataKey: "testPage",
                          level3Key: "pfieldset2",
                          elementKey: "pspacer2",
                          inputType: "spacer",
                          fsetRow: "4",
                          fsetCol: "1",
                          dataParent: "testPage.pfieldset2",
                          fqn: "testPage.pfieldset2.pspacer2",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "5",
                      elements: [
                        {
                          label: "assetLink",
                          pageDataKey: "testPage",
                          level3Key: "pfieldset2",
                          elementKey: "passetLink2",
                          inputType: "assetLink",
                          fsetRow: "5",
                          fsetCol: "1",
                          assetBase: "standardized-assessment-tools",
                          assetName: "the-canadian-ed-triage-and-acuity-scale.gif",
                          dataParent: "testPage.pfieldset2",
                          fqn: "testPage.pfieldset2.passetLink2",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "6",
                      elements: [
                        {
                          label: "date",
                          pageDataKey: "testPage",
                          level3Key: "pfieldset2",
                          elementKey: "pdate2",
                          inputType: "date",
                          fsetRow: "6",
                          fsetCol: "1",
                          dataParent: "testPage.pfieldset2",
                          fqn: "testPage.pfieldset2.pdate2",
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
            formRow: "5",
            elements: [
              {
                label: "textarea",
                pageDataKey: "testPage",
                elementKey: "ptextarea",
                inputType: "textarea",
                formRow: "5",
                formColumn: "1",
                formCss: "full-width",
                dataParent: "testPage",
                fqn: "testPage.ptextarea"
              }
            ]
          }
        ],
        columnsCount: 3
      },
      pageData: {}
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
          fqn: "testTable.table.passetLink"
        },
        {
          label: "select",
          elementKey: "pselect",
          fqn: "testTable.table.pselect",
          passToFunction: "p-cValue1"
        },
        {
          label: "select",
          elementKey: "pselect2",
          fqn: "testTable.table.pselect2",
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
          fqn: "testTable.table.pcheckset"
        },
        {
          label: "textarea",
          elementKey: "ptextarea",
          fqn: "testTable.table.ptextarea"
        },
        {
          label: "text",
          elementKey: "ptext1",
          fqn: "testTable.table.pfieldset1.ptext1"
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
          fqn: "testTable.table.pfieldset2.passetLink2"
        },
        {
          label: "date",
          elementKey: "pdate2",
          fqn: "testTable.table.pfieldset2.pdate2"
        }
      ],
      generated: "2019-06-27T16:03:34-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          label: "table",
          addButtonText: "Add a row",
          tableCells: [
            {
              label: "<b>a form <i>label</i></b>",
              pageDataKey: "testTable",
              level2Key: "table",
              elementKey: "pform_label",
              inputType: "form_label",
              formRow: "1",
              formColumn: "1",
              dataParent: "testTable.table",
              fqn: "testTable.table.pform_label",
              tableKey: "table"
            },
            {
              label: "fieldset",
              pageDataKey: "testTable",
              level2Key: "table",
              elementKey: "pfieldset2",
              inputType: "fieldset",
              formRow: "4",
              formColumn: "3",
              dataParent: "testTable.table",
              fqn: "testTable.table.pfieldset2",
              containerType: "fieldset",
              containerKey: "pfieldset2",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "text w def",
              pageDataKey: "testTable",
              level2Key: "table",
              elementKey: "ptext",
              inputType: "text",
              formRow: "1",
              formColumn: "3",
              dataParent: "testTable.table",
              fqn: "testTable.table.ptext",
              tableKey: "table"
            },
            {
              label: "checkbox",
              pageDataKey: "testTable",
              level2Key: "table",
              elementKey: "pcheckbox",
              inputType: "checkbox",
              formRow: "2",
              formColumn: "1",
              dataParent: "testTable.table",
              fqn: "testTable.table.pcheckbox",
              tableKey: "table"
            },
            {
              label: "text",
              pageDataKey: "testTable",
              level2Key: "table",
              elementKey: "ptextpcheckbox",
              inputType: "text",
              formRow: "2",
              formColumn: "2",
              dataParent: "testTable.table",
              fqn: "testTable.table.ptextpcheckbox",
              tableKey: "table"
            },
            {
              label: "assetLink",
              pageDataKey: "testTable",
              level2Key: "table",
              elementKey: "passetLink",
              inputType: "assetLink",
              formRow: "2",
              formColumn: "3",
              assetBase: "standardized-assessment-tools",
              assetName: "the-canadian-ed-triage-and-acuity-scale.gif",
              dataParent: "testTable.table",
              fqn: "testTable.table.passetLink",
              tableKey: "table"
            },
            {
              label: "select",
              pageDataKey: "testTable",
              level2Key: "table",
              elementKey: "pselect",
              inputType: "select",
              formRow: "3",
              formColumn: "1",
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
              dataParent: "testTable.table",
              fqn: "testTable.table.pselect",
              tableKey: "table"
            },
            {
              label: "select",
              pageDataKey: "testTable",
              level2Key: "table",
              elementKey: "pselect2",
              inputType: "select",
              formRow: "3",
              formColumn: "2",
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
              dataParent: "testTable.table",
              fqn: "testTable.table.pselect2",
              tableKey: "table"
            },
            {
              label: "calculatedValue",
              pageDataKey: "testTable",
              level2Key: "table",
              elementKey: "p-cValue1",
              inputType: "calculatedValue",
              formRow: "3",
              formColumn: "3",
              dataParent: "testTable.table",
              fqn: "testTable.table.p-cValue1",
              tableKey: "table"
            },
            {
              label: "checkset",
              pageDataKey: "testTable",
              level2Key: "table",
              elementKey: "pcheckset",
              inputType: "checkset",
              formRow: "4",
              formColumn: "1",
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
              ],
              dataParent: "testTable.table",
              fqn: "testTable.table.pcheckset",
              tableKey: "table"
            },
            {
              label: "textarea",
              pageDataKey: "testTable",
              level2Key: "table",
              elementKey: "ptextarea",
              inputType: "textarea",
              formRow: "5",
              formColumn: "1",
              formCss: "full-width",
              dataParent: "testTable.table",
              fqn: "testTable.table.ptextarea",
              tableKey: "table"
            },
            {
              label: "spacer",
              pageDataKey: "testTable",
              level2Key: "table",
              elementKey: "pspacer",
              inputType: "spacer",
              formRow: "1",
              formColumn: "2",
              dataParent: "testTable.table",
              fqn: "testTable.table.pspacer",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "textarea",
              pageDataKey: "testTable",
              level2Key: "table",
              level3Key: "pfieldset1",
              elementKey: "ptextarea1",
              inputType: "textarea",
              fsetRow: "2",
              fsetCol: "1",
              dataParent: "testTable.table.pfieldset1",
              fqn: "testTable.table.pfieldset1.ptextarea1",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "select",
              pageDataKey: "testTable",
              level2Key: "table",
              level3Key: "pfieldset1",
              elementKey: "pselect1",
              inputType: "select",
              fsetRow: "3",
              fsetCol: "1",
              options: [
                {
                  text: "1 = Yes"
                },
                {
                  text: "2 = No"
                }
              ],
              dataParent: "testTable.table.pfieldset1",
              fqn: "testTable.table.pfieldset1.pselect1",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "calculatedValue",
              pageDataKey: "testTable",
              level2Key: "table",
              level3Key: "pfieldset1",
              elementKey: "p-cValue2",
              inputType: "calculatedValue",
              fsetRow: "4",
              fsetCol: "1",
              dataParent: "testTable.table.pfieldset1",
              fqn: "testTable.table.pfieldset1.p-cValue2",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "fieldset",
              pageDataKey: "testTable",
              level2Key: "table",
              elementKey: "pfieldset1",
              inputType: "fieldset",
              formRow: "4",
              formColumn: "2",
              dataParent: "testTable.table",
              fqn: "testTable.table.pfieldset1",
              containerType: "fieldset",
              containerKey: "pfieldset1",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "checkbox",
              pageDataKey: "testTable",
              level2Key: "table",
              level3Key: "pfieldset2",
              elementKey: "pcheckbox2",
              inputType: "checkbox",
              fsetRow: "1",
              fsetCol: "1",
              dataParent: "testTable.table.pfieldset2",
              fqn: "testTable.table.pfieldset2.pcheckbox2",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "text",
              pageDataKey: "testTable",
              level2Key: "table",
              level3Key: "pfieldset2",
              elementKey: "ptext2",
              inputType: "text",
              fsetRow: "2",
              fsetCol: "1",
              dataParent: "testTable.table.pfieldset2",
              fqn: "testTable.table.pfieldset2.ptext2",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "<b>a form <i>label</i></b>",
              pageDataKey: "testTable",
              level2Key: "table",
              level3Key: "pfieldset2",
              elementKey: "pform_label2",
              inputType: "form_label",
              fsetRow: "3",
              fsetCol: "1",
              dataParent: "testTable.table.pfieldset2",
              fqn: "testTable.table.pfieldset2.pform_label2",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "spacer",
              pageDataKey: "testTable",
              level2Key: "table",
              level3Key: "pfieldset2",
              elementKey: "pspacer2",
              inputType: "spacer",
              fsetRow: "4",
              fsetCol: "1",
              dataParent: "testTable.table.pfieldset2",
              fqn: "testTable.table.pfieldset2.pspacer2",
              tableCss: "hide-table-element",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "assetLink",
              pageDataKey: "testTable",
              level2Key: "table",
              level3Key: "pfieldset2",
              elementKey: "passetLink2",
              inputType: "assetLink",
              fsetRow: "5",
              fsetCol: "1",
              assetBase: "standardized-assessment-tools",
              assetName: "the-canadian-ed-triage-and-acuity-scale.gif",
              dataParent: "testTable.table.pfieldset2",
              fqn: "testTable.table.pfieldset2.passetLink2",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "date",
              pageDataKey: "testTable",
              level2Key: "table",
              level3Key: "pfieldset2",
              elementKey: "pdate2",
              inputType: "date",
              fsetRow: "6",
              fsetCol: "1",
              dataParent: "testTable.table.pfieldset2",
              fqn: "testTable.table.pfieldset2.pdate2",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "text",
              pageDataKey: "testTable",
              level2Key: "table",
              level3Key: "pfieldset1",
              elementKey: "ptext1",
              inputType: "text",
              formOption: "hideLabel",
              fsetRow: "1",
              fsetCol: "1",
              dataParent: "testTable.table.pfieldset1",
              fqn: "testTable.table.pfieldset1.ptext1",
              tableKey: "table",
              formColumn: "1"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    label: "<b>a form <i>label</i></b>",
                    pageDataKey: "testTable",
                    level2Key: "table",
                    elementKey: "pform_label",
                    inputType: "form_label",
                    formRow: "1",
                    formColumn: "1",
                    dataParent: "testTable.table",
                    fqn: "testTable.table.pform_label",
                    tableKey: "table"
                  },
                  {
                    label: "spacer",
                    pageDataKey: "testTable",
                    level2Key: "table",
                    elementKey: "pspacer",
                    inputType: "spacer",
                    formRow: "1",
                    formColumn: "2",
                    dataParent: "testTable.table",
                    fqn: "testTable.table.pspacer",
                    tableCss: "hide-table-element",
                    tableKey: "table"
                  },
                  {
                    label: "text w def",
                    pageDataKey: "testTable",
                    level2Key: "table",
                    elementKey: "ptext",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "3",
                    dataParent: "testTable.table",
                    fqn: "testTable.table.ptext",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "checkbox",
                    pageDataKey: "testTable",
                    level2Key: "table",
                    elementKey: "pcheckbox",
                    inputType: "checkbox",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "testTable.table",
                    fqn: "testTable.table.pcheckbox",
                    tableKey: "table"
                  },
                  {
                    label: "text",
                    pageDataKey: "testTable",
                    level2Key: "table",
                    elementKey: "ptextpcheckbox",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "2",
                    dataParent: "testTable.table",
                    fqn: "testTable.table.ptextpcheckbox",
                    tableKey: "table"
                  },
                  {
                    label: "assetLink",
                    pageDataKey: "testTable",
                    level2Key: "table",
                    elementKey: "passetLink",
                    inputType: "assetLink",
                    formRow: "2",
                    formColumn: "3",
                    assetBase: "standardized-assessment-tools",
                    assetName: "the-canadian-ed-triage-and-acuity-scale.gif",
                    dataParent: "testTable.table",
                    fqn: "testTable.table.passetLink",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    label: "select",
                    pageDataKey: "testTable",
                    level2Key: "table",
                    elementKey: "pselect",
                    inputType: "select",
                    formRow: "3",
                    formColumn: "1",
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
                    dataParent: "testTable.table",
                    fqn: "testTable.table.pselect",
                    tableKey: "table"
                  },
                  {
                    label: "select",
                    pageDataKey: "testTable",
                    level2Key: "table",
                    elementKey: "pselect2",
                    inputType: "select",
                    formRow: "3",
                    formColumn: "2",
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
                    dataParent: "testTable.table",
                    fqn: "testTable.table.pselect2",
                    tableKey: "table"
                  },
                  {
                    label: "calculatedValue",
                    pageDataKey: "testTable",
                    level2Key: "table",
                    elementKey: "p-cValue1",
                    inputType: "calculatedValue",
                    formRow: "3",
                    formColumn: "3",
                    dataParent: "testTable.table",
                    fqn: "testTable.table.p-cValue1",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    label: "checkset",
                    pageDataKey: "testTable",
                    level2Key: "table",
                    elementKey: "pcheckset",
                    inputType: "checkset",
                    formRow: "4",
                    formColumn: "1",
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
                    ],
                    dataParent: "testTable.table",
                    fqn: "testTable.table.pcheckset",
                    tableKey: "table"
                  },
                  {
                    label: "fieldset",
                    pageDataKey: "testTable",
                    level2Key: "table",
                    elementKey: "pfieldset1",
                    inputType: "fieldset",
                    formRow: "4",
                    formColumn: "2",
                    dataParent: "testTable.table",
                    fqn: "testTable.table.pfieldset1",
                    containerType: "fieldset",
                    containerKey: "pfieldset1",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              label: "text",
                              pageDataKey: "testTable",
                              level2Key: "table",
                              level3Key: "pfieldset1",
                              elementKey: "ptext1",
                              inputType: "text",
                              formOption: "hideLabel",
                              fsetRow: "1",
                              fsetCol: "1",
                              dataParent: "testTable.table.pfieldset1",
                              fqn: "testTable.table.pfieldset1.ptext1",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "textarea",
                              pageDataKey: "testTable",
                              level2Key: "table",
                              level3Key: "pfieldset1",
                              elementKey: "ptextarea1",
                              inputType: "textarea",
                              fsetRow: "2",
                              fsetCol: "1",
                              dataParent: "testTable.table.pfieldset1",
                              fqn: "testTable.table.pfieldset1.ptextarea1",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "select",
                              pageDataKey: "testTable",
                              level2Key: "table",
                              level3Key: "pfieldset1",
                              elementKey: "pselect1",
                              inputType: "select",
                              fsetRow: "3",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "1 = Yes"
                                },
                                {
                                  text: "2 = No"
                                }
                              ],
                              dataParent: "testTable.table.pfieldset1",
                              fqn: "testTable.table.pfieldset1.pselect1",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "calculatedValue",
                              pageDataKey: "testTable",
                              level2Key: "table",
                              level3Key: "pfieldset1",
                              elementKey: "p-cValue2",
                              inputType: "calculatedValue",
                              fsetRow: "4",
                              fsetCol: "1",
                              dataParent: "testTable.table.pfieldset1",
                              fqn: "testTable.table.pfieldset1.p-cValue2",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    label: "fieldset",
                    pageDataKey: "testTable",
                    level2Key: "table",
                    elementKey: "pfieldset2",
                    inputType: "fieldset",
                    formRow: "4",
                    formColumn: "3",
                    dataParent: "testTable.table",
                    fqn: "testTable.table.pfieldset2",
                    containerType: "fieldset",
                    containerKey: "pfieldset2",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              label: "checkbox",
                              pageDataKey: "testTable",
                              level2Key: "table",
                              level3Key: "pfieldset2",
                              elementKey: "pcheckbox2",
                              inputType: "checkbox",
                              fsetRow: "1",
                              fsetCol: "1",
                              dataParent: "testTable.table.pfieldset2",
                              fqn: "testTable.table.pfieldset2.pcheckbox2",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "text",
                              pageDataKey: "testTable",
                              level2Key: "table",
                              level3Key: "pfieldset2",
                              elementKey: "ptext2",
                              inputType: "text",
                              fsetRow: "2",
                              fsetCol: "1",
                              dataParent: "testTable.table.pfieldset2",
                              fqn: "testTable.table.pfieldset2.ptext2",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "<b>a form <i>label</i></b>",
                              pageDataKey: "testTable",
                              level2Key: "table",
                              level3Key: "pfieldset2",
                              elementKey: "pform_label2",
                              inputType: "form_label",
                              fsetRow: "3",
                              fsetCol: "1",
                              dataParent: "testTable.table.pfieldset2",
                              fqn: "testTable.table.pfieldset2.pform_label2",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "spacer",
                              pageDataKey: "testTable",
                              level2Key: "table",
                              level3Key: "pfieldset2",
                              elementKey: "pspacer2",
                              inputType: "spacer",
                              fsetRow: "4",
                              fsetCol: "1",
                              dataParent: "testTable.table.pfieldset2",
                              fqn: "testTable.table.pfieldset2.pspacer2",
                              tableCss: "hide-table-element",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              label: "assetLink",
                              pageDataKey: "testTable",
                              level2Key: "table",
                              level3Key: "pfieldset2",
                              elementKey: "passetLink2",
                              inputType: "assetLink",
                              fsetRow: "5",
                              fsetCol: "1",
                              assetBase: "standardized-assessment-tools",
                              assetName: "the-canadian-ed-triage-and-acuity-scale.gif",
                              dataParent: "testTable.table.pfieldset2",
                              fqn: "testTable.table.pfieldset2.passetLink2",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              label: "date",
                              pageDataKey: "testTable",
                              level2Key: "table",
                              level3Key: "pfieldset2",
                              elementKey: "pdate2",
                              inputType: "date",
                              fsetRow: "6",
                              fsetCol: "1",
                              dataParent: "testTable.table.pfieldset2",
                              fqn: "testTable.table.pfieldset2.pdate2",
                              tableKey: "table",
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
                formRow: "5",
                elements: [
                  {
                    label: "textarea",
                    pageDataKey: "testTable",
                    level2Key: "table",
                    elementKey: "ptextarea",
                    inputType: "textarea",
                    formRow: "5",
                    formColumn: "1",
                    formCss: "full-width",
                    dataParent: "testTable.table",
                    fqn: "testTable.table.ptextarea",
                    tableKey: "table"
                  }
                ]
              }
            ],
            columnsCount: 3
          }
        }
      ],
      pageData: {
        table: []
      }
    }
  }
}
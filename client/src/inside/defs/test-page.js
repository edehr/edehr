/* eslint-disable quotes */
export default function () {
  return {
    testPage: {
      pageTitle: "Test Page",
      pageDataKey: "testPage",
      pageChildren: [
        {
          label: "Page ptext",
          elementKey: "ptext",
          fqn: "testPage.ptext"
        },
        {
          label: "Page ttestarea",
          elementKey: "ttestarea",
          fqn: "testPage.ttestarea"
        },
        {
          label: "Page tselect",
          elementKey: "tselect",
          fqn: "testPage.tselect",
          passToFunction: "tcalculated"
        },
        {
          label: "Page tdate",
          elementKey: "tdate",
          fqn: "testPage.tdate"
        },
        {
          label: "Page tcheck",
          elementKey: "tcheck",
          fqn: "testPage.tcheck"
        },
        {
          label: "<b>a form <i>label</i></b>",
          elementKey: "tlabel",
          fqn: "testPage.tlabel"
        },
        {
          label: "Page tspacer",
          elementKey: "tspacer",
          fqn: "testPage.tspacer"
        },
        {
          label: "Page tasset",
          elementKey: "tasset",
          fqn: "testPage.tasset"
        },
        {
          label: "Page tcalculated",
          elementKey: "tcalculated",
          fqn: "testPage.tcalculated"
        },
        {
          label: "Page pftext",
          elementKey: "pftext",
          fqn: "testPage.tffieldset.pftext"
        },
        {
          label: "Page pftextarea",
          elementKey: "pftextarea",
          fqn: "testPage.tffieldset.pftextarea"
        },
        {
          label: "Page pfselect",
          elementKey: "pfselect",
          fqn: "testPage.tffieldset.pfselect",
          passToFunction: "pfcalculatedValue"
        },
        {
          label: "Page pfdate",
          elementKey: "pfdate",
          fqn: "testPage.tffieldset.pfdate"
        },
        {
          label: "Page pfcheckbox",
          elementKey: "pfcheckbox",
          fqn: "testPage.tffieldset.pfcheckbox"
        },
        {
          label: "<b>a form <i>label</i></b>",
          elementKey: "pfform_label",
          fqn: "testPage.tffieldset.pfform_label"
        },
        {
          label: "Page pfspacer",
          elementKey: "pfspacer",
          fqn: "testPage.tffieldset.pfspacer"
        },
        {
          label: "Page pfassetLink",
          elementKey: "pfassetLink",
          fqn: "testPage.tffieldset.pfassetLink"
        },
        {
          label: "Page pfcalculatedValue",
          elementKey: "pfcalculatedValue",
          fqn: "testPage.tffieldset.pfcalculatedValue"
        },
        {
          label: "Table tttext",
          elementKey: "tttext",
          fqn: "testPage.table.tttext"
        },
        {
          label: "Table tttextarea",
          elementKey: "tttextarea",
          fqn: "testPage.table.tttextarea"
        },
        {
          label: "Table ttselect",
          elementKey: "ttselect",
          fqn: "testPage.table.ttselect",
          passToFunction: "ttcalculatedValue"
        },
        {
          label: "Table ttdate",
          elementKey: "ttdate",
          fqn: "testPage.table.ttdate"
        },
        {
          label: "Table ttcheckbox",
          elementKey: "ttcheckbox",
          fqn: "testPage.table.ttcheckbox"
        },
        {
          label: "<b>a form <i>label</i></b>",
          elementKey: "ttform_label",
          fqn: "testPage.table.ttform_label"
        },
        {
          label: "Table ttspacer",
          elementKey: "ttspacer",
          fqn: "testPage.table.ttspacer"
        },
        {
          label: "Table ttassetLink",
          elementKey: "ttassetLink",
          fqn: "testPage.table.ttassetLink"
        },
        {
          label: "Table ttcalculatedValue",
          elementKey: "ttcalculatedValue",
          fqn: "testPage.table.ttcalculatedValue"
        },
        {
          label: "Table ttftext",
          elementKey: "ttftext",
          fqn: "testPage.table.ttfieldset.ttftext"
        },
        {
          label: "Table ttftextarea",
          elementKey: "ttftextarea",
          fqn: "testPage.table.ttfieldset.ttftextarea"
        },
        {
          label: "Table ttfselect",
          elementKey: "ttfselect",
          fqn: "testPage.table.ttfieldset.ttfselect",
          passToFunction: "ttfcalculatedValue"
        },
        {
          label: "Table ttfdate",
          elementKey: "ttfdate",
          fqn: "testPage.table.ttfieldset.ttfdate"
        },
        {
          label: "Table ttfcheckbox",
          elementKey: "ttfcheckbox",
          fqn: "testPage.table.ttfieldset.ttfcheckbox"
        },
        {
          label: "<b>a form <i>label</i></b>",
          elementKey: "ttfform_label",
          fqn: "testPage.table.ttfieldset.ttfform_label"
        },
        {
          label: "Table ttfspacer",
          elementKey: "ttfspacer",
          fqn: "testPage.table.ttfieldset.ttfspacer"
        },
        {
          label: "Table ttfassetLink",
          elementKey: "ttfassetLink",
          fqn: "testPage.table.ttfieldset.ttfassetLink"
        },
        {
          label: "Table ttfcalculatedValue",
          elementKey: "ttfcalculatedValue",
          fqn: "testPage.table.ttfieldset.ttfcalculatedValue"
        }
      ],
      generated: "2019-04-08T19:39:23-07:00",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                label: "Page ptext",
                pageDataKey: "testPage",
                elementKey: "ptext",
                inputType: "text",
                formRow: "1",
                formColumn: "1",
                formCss: "test_text_class",
                dataParent: "testPage",
                fqn: "testPage.ptext"
              },
              {
                label: "Page tspacer",
                pageDataKey: "testPage",
                elementKey: "tspacer",
                inputType: "spacer",
                formRow: "1",
                formColumn: "1",
                dataParent: "testPage",
                fqn: "testPage.tspacer"
              },
              {
                label: "<b>a form <i>label</i></b>",
                pageDataKey: "testPage",
                elementKey: "tlabel",
                inputType: "form_label",
                formRow: "1",
                formColumn: "3",
                dataParent: "testPage",
                fqn: "testPage.tlabel"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                label: "Page tselect",
                pageDataKey: "testPage",
                elementKey: "tselect",
                inputType: "select",
                formRow: "2",
                formColumn: "1",
                options: [
                  {
                    text: "1 = Yes"
                  },
                  {
                    text: "2 = No"
                  }
                ],
                passToFunction: "tcalculated",
                dataParent: "testPage",
                fqn: "testPage.tselect"
              },
              {
                label: "Page tcheck",
                pageDataKey: "testPage",
                elementKey: "tcheck",
                inputType: "checkbox",
                formRow: "2",
                formColumn: "2",
                dataParent: "testPage",
                fqn: "testPage.tcheck"
              },
              {
                label: "Page tasset",
                pageDataKey: "testPage",
                elementKey: "tasset",
                inputType: "assetLink",
                formRow: "2",
                formColumn: "2",
                assetBase: "Standardized assessment tools",
                assetName: "OPQRSTUV.pdf",
                dataParent: "testPage",
                fqn: "testPage.tasset"
              },
              {
                label: "Page tcalculated",
                pageDataKey: "testPage",
                elementKey: "tcalculated",
                inputType: "calculatedValue",
                formRow: "2",
                formColumn: "3",
                dataParent: "testPage",
                fqn: "testPage.tcalculated"
              }
            ]
          },
          {
            formRow: "3",
            elements: [
              {
                label: "Page tdate",
                pageDataKey: "testPage",
                elementKey: "tdate",
                inputType: "date",
                formRow: "3",
                formColumn: "1",
                formCss: "is-one-third",
                dataParent: "testPage",
                fqn: "testPage.tdate"
              },
              {
                label: "Page tffieldset",
                pageDataKey: "testPage",
                elementKey: "tffieldset",
                inputType: "fieldset",
                formRow: "3",
                formColumn: "2",
                formCss: "is-two-thirds",
                dataParent: "testPage",
                fqn: "testPage.tffieldset",
                elements: [
                  {
                    label: "Page pftext",
                    pageDataKey: "testPage",
                    level3Key: "tffieldset",
                    elementKey: "pftext",
                    inputType: "text",
                    fsetRow: "1",
                    fsetCol: "1",
                    dataParent: "testPage.tffieldset",
                    fqn: "testPage.tffieldset.pftext",
                    formColumn: "1"
                  },
                  {
                    label: "Page pftextarea",
                    pageDataKey: "testPage",
                    level3Key: "tffieldset",
                    elementKey: "pftextarea",
                    inputType: "textarea",
                    fsetRow: "5",
                    fsetCol: "1",
                    dataParent: "testPage.tffieldset",
                    fqn: "testPage.tffieldset.pftextarea",
                    formColumn: "1"
                  },
                  {
                    label: "Page pfselect",
                    pageDataKey: "testPage",
                    level3Key: "tffieldset",
                    elementKey: "pfselect",
                    inputType: "select",
                    fsetRow: "2",
                    fsetCol: "1",
                    options: [
                      {
                        text: "1 = Yes"
                      },
                      {
                        text: "2 = No"
                      }
                    ],
                    passToFunction: "pfcalculatedValue",
                    dataParent: "testPage.tffieldset",
                    fqn: "testPage.tffieldset.pfselect",
                    formColumn: "1"
                  },
                  {
                    label: "Page pfdate",
                    pageDataKey: "testPage",
                    level3Key: "tffieldset",
                    elementKey: "pfdate",
                    inputType: "date",
                    fsetRow: "4",
                    fsetCol: "2",
                    dataParent: "testPage.tffieldset",
                    fqn: "testPage.tffieldset.pfdate",
                    formColumn: "2"
                  },
                  {
                    label: "Page pfcheckbox",
                    pageDataKey: "testPage",
                    level3Key: "tffieldset",
                    elementKey: "pfcheckbox",
                    inputType: "checkbox",
                    fsetRow: "1",
                    fsetCol: "2",
                    dataParent: "testPage.tffieldset",
                    fqn: "testPage.tffieldset.pfcheckbox",
                    formColumn: "2"
                  },
                  {
                    label: "<b>a form <i>label</i></b>",
                    pageDataKey: "testPage",
                    level3Key: "tffieldset",
                    elementKey: "pfform_label",
                    inputType: "form_label",
                    fsetRow: "3",
                    fsetCol: "2",
                    dataParent: "testPage.tffieldset",
                    fqn: "testPage.tffieldset.pfform_label",
                    formColumn: "2"
                  },
                  {
                    label: "Page pfspacer",
                    pageDataKey: "testPage",
                    level3Key: "tffieldset",
                    elementKey: "pfspacer",
                    inputType: "spacer",
                    fsetRow: "3",
                    fsetCol: "1",
                    dataParent: "testPage.tffieldset",
                    fqn: "testPage.tffieldset.pfspacer",
                    formColumn: "1"
                  },
                  {
                    label: "Page pfassetLink",
                    pageDataKey: "testPage",
                    level3Key: "tffieldset",
                    elementKey: "pfassetLink",
                    inputType: "assetLink",
                    fsetRow: "4",
                    fsetCol: "1",
                    assetBase: "Standardized assessment tools",
                    assetName: "OPQRSTUV.pdf",
                    dataParent: "testPage.tffieldset",
                    fqn: "testPage.tffieldset.pfassetLink",
                    formColumn: "1"
                  },
                  {
                    label: "Page pfcalculatedValue",
                    pageDataKey: "testPage",
                    level3Key: "tffieldset",
                    elementKey: "pfcalculatedValue",
                    inputType: "calculatedValue",
                    fsetRow: "2",
                    fsetCol: "2",
                    dataParent: "testPage.tffieldset",
                    fqn: "testPage.tffieldset.pfcalculatedValue",
                    formColumn: "2"
                  }
                ],
                containerType: "fieldset",
                containerKey: "tffieldset",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          label: "Page pftext",
                          pageDataKey: "testPage",
                          level3Key: "tffieldset",
                          elementKey: "pftext",
                          inputType: "text",
                          fsetRow: "1",
                          fsetCol: "1",
                          dataParent: "testPage.tffieldset",
                          fqn: "testPage.tffieldset.pftext",
                          formColumn: "1"
                        },
                        {
                          label: "Page pfcheckbox",
                          pageDataKey: "testPage",
                          level3Key: "tffieldset",
                          elementKey: "pfcheckbox",
                          inputType: "checkbox",
                          fsetRow: "1",
                          fsetCol: "2",
                          dataParent: "testPage.tffieldset",
                          fqn: "testPage.tffieldset.pfcheckbox",
                          formColumn: "2"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          label: "Page pfselect",
                          pageDataKey: "testPage",
                          level3Key: "tffieldset",
                          elementKey: "pfselect",
                          inputType: "select",
                          fsetRow: "2",
                          fsetCol: "1",
                          options: [
                            {
                              text: "1 = Yes"
                            },
                            {
                              text: "2 = No"
                            }
                          ],
                          passToFunction: "pfcalculatedValue",
                          dataParent: "testPage.tffieldset",
                          fqn: "testPage.tffieldset.pfselect",
                          formColumn: "1"
                        },
                        {
                          label: "Page pfcalculatedValue",
                          pageDataKey: "testPage",
                          level3Key: "tffieldset",
                          elementKey: "pfcalculatedValue",
                          inputType: "calculatedValue",
                          fsetRow: "2",
                          fsetCol: "2",
                          dataParent: "testPage.tffieldset",
                          fqn: "testPage.tffieldset.pfcalculatedValue",
                          formColumn: "2"
                        }
                      ]
                    },
                    {
                      formRow: "3",
                      elements: [
                        {
                          label: "Page pfspacer",
                          pageDataKey: "testPage",
                          level3Key: "tffieldset",
                          elementKey: "pfspacer",
                          inputType: "spacer",
                          fsetRow: "3",
                          fsetCol: "1",
                          dataParent: "testPage.tffieldset",
                          fqn: "testPage.tffieldset.pfspacer",
                          formColumn: "1"
                        },
                        {
                          label: "<b>a form <i>label</i></b>",
                          pageDataKey: "testPage",
                          level3Key: "tffieldset",
                          elementKey: "pfform_label",
                          inputType: "form_label",
                          fsetRow: "3",
                          fsetCol: "2",
                          dataParent: "testPage.tffieldset",
                          fqn: "testPage.tffieldset.pfform_label",
                          formColumn: "2"
                        }
                      ]
                    },
                    {
                      formRow: "4",
                      elements: [
                        {
                          label: "Page pfassetLink",
                          pageDataKey: "testPage",
                          level3Key: "tffieldset",
                          elementKey: "pfassetLink",
                          inputType: "assetLink",
                          fsetRow: "4",
                          fsetCol: "1",
                          assetBase: "Standardized assessment tools",
                          assetName: "OPQRSTUV.pdf",
                          dataParent: "testPage.tffieldset",
                          fqn: "testPage.tffieldset.pfassetLink",
                          formColumn: "1"
                        },
                        {
                          label: "Page pfdate",
                          pageDataKey: "testPage",
                          level3Key: "tffieldset",
                          elementKey: "pfdate",
                          inputType: "date",
                          fsetRow: "4",
                          fsetCol: "2",
                          dataParent: "testPage.tffieldset",
                          fqn: "testPage.tffieldset.pfdate",
                          formColumn: "2"
                        }
                      ]
                    },
                    {
                      formRow: "5",
                      elements: [
                        {
                          label: "Page pftextarea",
                          pageDataKey: "testPage",
                          level3Key: "tffieldset",
                          elementKey: "pftextarea",
                          inputType: "textarea",
                          fsetRow: "5",
                          fsetCol: "1",
                          dataParent: "testPage.tffieldset",
                          fqn: "testPage.tffieldset.pftextarea",
                          formColumn: "1"
                        }
                      ]
                    }
                  ],
                  columnsCount: 2
                }
              }
            ]
          },
          {
            formRow: "4",
            elements: [
              {
                label: "Page ttestarea",
                pageDataKey: "testPage",
                elementKey: "ttestarea",
                inputType: "textarea",
                formRow: "4",
                formColumn: "1",
                formCss: "full-width",
                dataParent: "testPage",
                fqn: "testPage.ttestarea"
              }
            ]
          }
        ],
        columnsCount: 4
      },
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          label: "Table table",
          addButtonText: "Add a row",
          tableCells: [
            {
              label: "Table tttext",
              pageDataKey: "testPage",
              level2Key: "table",
              elementKey: "tttext",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              tableColumn: "1",
              dataParent: "testPage.table",
              fqn: "testPage.table.tttext",
              tableKey: "table"
            },
            {
              label: "Table tttextarea",
              pageDataKey: "testPage",
              level2Key: "table",
              elementKey: "tttextarea",
              inputType: "textarea",
              formRow: "4",
              formColumn: "1",
              tableColumn: "2",
              dataParent: "testPage.table",
              fqn: "testPage.table.tttextarea",
              tableKey: "table"
            },
            {
              label: "Table ttselect",
              pageDataKey: "testPage",
              level2Key: "table",
              elementKey: "ttselect",
              inputType: "select",
              formRow: "2",
              formColumn: "1",
              tableColumn: "3",
              options: [
                {
                  text: "1 = Yes"
                },
                {
                  text: "2 = No"
                }
              ],
              passToFunction: "ttcalculatedValue",
              dataParent: "testPage.table",
              fqn: "testPage.table.ttselect",
              tableKey: "table"
            },
            {
              label: "Table ttdate",
              pageDataKey: "testPage",
              level2Key: "table",
              elementKey: "ttdate",
              inputType: "date",
              formRow: "3",
              formColumn: "1",
              tableColumn: "4",
              dataParent: "testPage.table",
              fqn: "testPage.table.ttdate",
              tableKey: "table"
            },
            {
              label: "Table ttcheckbox",
              pageDataKey: "testPage",
              level2Key: "table",
              elementKey: "ttcheckbox",
              inputType: "checkbox",
              formRow: "2",
              formColumn: "2",
              tableColumn: "5",
              dataParent: "testPage.table",
              fqn: "testPage.table.ttcheckbox",
              tableKey: "table"
            },
            {
              label: "<b>a form <i>label</i></b>",
              pageDataKey: "testPage",
              level2Key: "table",
              elementKey: "ttform_label",
              inputType: "form_label",
              formRow: "1",
              formColumn: "3",
              tableColumn: "6",
              dataParent: "testPage.table",
              fqn: "testPage.table.ttform_label",
              tableKey: "table"
            },
            {
              label: "Table ttspacer",
              pageDataKey: "testPage",
              level2Key: "table",
              elementKey: "ttspacer",
              inputType: "spacer",
              formRow: "1",
              formColumn: "1",
              tableColumn: "7",
              dataParent: "testPage.table",
              fqn: "testPage.table.ttspacer",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Table ttassetLink",
              pageDataKey: "testPage",
              level2Key: "table",
              elementKey: "ttassetLink",
              inputType: "assetLink",
              formRow: "2",
              formColumn: "2",
              tableColumn: "8",
              assetBase: "Standardized assessment tools",
              assetName: "OPQRSTUV.pdf",
              dataParent: "testPage.table",
              fqn: "testPage.table.ttassetLink",
              tableKey: "table"
            },
            {
              label: "Table ttcalculatedValue",
              pageDataKey: "testPage",
              level2Key: "table",
              elementKey: "ttcalculatedValue",
              inputType: "calculatedValue",
              formRow: "2",
              formColumn: "3",
              tableColumn: "9",
              dataParent: "testPage.table",
              fqn: "testPage.table.ttcalculatedValue",
              tableKey: "table"
            },
            {
              label: "Table ttfieldset",
              pageDataKey: "testPage",
              level2Key: "table",
              elementKey: "ttfieldset",
              inputType: "fieldset",
              formRow: "3",
              formColumn: "2",
              tableColumn: "10",
              dataParent: "testPage.table",
              fqn: "testPage.table.ttfieldset",
              containerType: "fieldset",
              containerKey: "ttfieldset",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Table ttftext",
              pageDataKey: "testPage",
              level2Key: "table",
              level3Key: "ttfieldset",
              elementKey: "ttftext",
              inputType: "text",
              tableColumn: "11",
              fsetRow: "1",
              fsetCol: "1",
              dataParent: "testPage.table.ttfieldset",
              fqn: "testPage.table.ttfieldset.ttftext",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Table ttftextarea",
              pageDataKey: "testPage",
              level2Key: "table",
              level3Key: "ttfieldset",
              elementKey: "ttftextarea",
              inputType: "textarea",
              tableColumn: "12",
              fsetRow: "5",
              fsetCol: "1",
              dataParent: "testPage.table.ttfieldset",
              fqn: "testPage.table.ttfieldset.ttftextarea",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Table ttfselect",
              pageDataKey: "testPage",
              level2Key: "table",
              level3Key: "ttfieldset",
              elementKey: "ttfselect",
              inputType: "select",
              tableColumn: "13",
              fsetRow: "2",
              fsetCol: "1",
              options: [
                {
                  text: "1 = Yes"
                },
                {
                  text: "2 = No"
                }
              ],
              passToFunction: "ttfcalculatedValue",
              dataParent: "testPage.table.ttfieldset",
              fqn: "testPage.table.ttfieldset.ttfselect",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Table ttfdate",
              pageDataKey: "testPage",
              level2Key: "table",
              level3Key: "ttfieldset",
              elementKey: "ttfdate",
              inputType: "date",
              tableColumn: "14",
              fsetRow: "4",
              fsetCol: "2",
              dataParent: "testPage.table.ttfieldset",
              fqn: "testPage.table.ttfieldset.ttfdate",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Table ttfcheckbox",
              pageDataKey: "testPage",
              level2Key: "table",
              level3Key: "ttfieldset",
              elementKey: "ttfcheckbox",
              inputType: "checkbox",
              tableColumn: "15",
              fsetRow: "1",
              fsetCol: "2",
              dataParent: "testPage.table.ttfieldset",
              fqn: "testPage.table.ttfieldset.ttfcheckbox",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "<b>a form <i>label</i></b>",
              pageDataKey: "testPage",
              level2Key: "table",
              level3Key: "ttfieldset",
              elementKey: "ttfform_label",
              inputType: "form_label",
              tableColumn: "16",
              fsetRow: "3",
              fsetCol: "2",
              dataParent: "testPage.table.ttfieldset",
              fqn: "testPage.table.ttfieldset.ttfform_label",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Table ttfspacer",
              pageDataKey: "testPage",
              level2Key: "table",
              level3Key: "ttfieldset",
              elementKey: "ttfspacer",
              inputType: "spacer",
              tableColumn: "17",
              fsetRow: "3",
              fsetCol: "1",
              dataParent: "testPage.table.ttfieldset",
              fqn: "testPage.table.ttfieldset.ttfspacer",
              tableCss: "hide-table-element",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Table ttfassetLink",
              pageDataKey: "testPage",
              level2Key: "table",
              level3Key: "ttfieldset",
              elementKey: "ttfassetLink",
              inputType: "assetLink",
              tableColumn: "18",
              fsetRow: "4",
              fsetCol: "1",
              assetBase: "Standardized assessment tools",
              assetName: "OPQRSTUV.pdf",
              dataParent: "testPage.table.ttfieldset",
              fqn: "testPage.table.ttfieldset.ttfassetLink",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Table ttfcalculatedValue",
              pageDataKey: "testPage",
              level2Key: "table",
              level3Key: "ttfieldset",
              elementKey: "ttfcalculatedValue",
              inputType: "calculatedValue",
              tableColumn: "19",
              fsetRow: "2",
              fsetCol: "2",
              dataParent: "testPage.table.ttfieldset",
              fqn: "testPage.table.ttfieldset.ttfcalculatedValue",
              tableKey: "table",
              formColumn: "2"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    label: "Table tttext",
                    pageDataKey: "testPage",
                    level2Key: "table",
                    elementKey: "tttext",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    tableColumn: "1",
                    dataParent: "testPage.table",
                    fqn: "testPage.table.tttext",
                    tableKey: "table"
                  },
                  {
                    label: "Table ttspacer",
                    pageDataKey: "testPage",
                    level2Key: "table",
                    elementKey: "ttspacer",
                    inputType: "spacer",
                    formRow: "1",
                    formColumn: "1",
                    tableColumn: "7",
                    dataParent: "testPage.table",
                    fqn: "testPage.table.ttspacer",
                    tableCss: "hide-table-element",
                    tableKey: "table"
                  },
                  {
                    label: "<b>a form <i>label</i></b>",
                    pageDataKey: "testPage",
                    level2Key: "table",
                    elementKey: "ttform_label",
                    inputType: "form_label",
                    formRow: "1",
                    formColumn: "3",
                    tableColumn: "6",
                    dataParent: "testPage.table",
                    fqn: "testPage.table.ttform_label",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "Table ttselect",
                    pageDataKey: "testPage",
                    level2Key: "table",
                    elementKey: "ttselect",
                    inputType: "select",
                    formRow: "2",
                    formColumn: "1",
                    tableColumn: "3",
                    options: [
                      {
                        text: "1 = Yes"
                      },
                      {
                        text: "2 = No"
                      }
                    ],
                    passToFunction: "ttcalculatedValue",
                    dataParent: "testPage.table",
                    fqn: "testPage.table.ttselect",
                    tableKey: "table"
                  },
                  {
                    label: "Table ttcheckbox",
                    pageDataKey: "testPage",
                    level2Key: "table",
                    elementKey: "ttcheckbox",
                    inputType: "checkbox",
                    formRow: "2",
                    formColumn: "2",
                    tableColumn: "5",
                    dataParent: "testPage.table",
                    fqn: "testPage.table.ttcheckbox",
                    tableKey: "table"
                  },
                  {
                    label: "Table ttassetLink",
                    pageDataKey: "testPage",
                    level2Key: "table",
                    elementKey: "ttassetLink",
                    inputType: "assetLink",
                    formRow: "2",
                    formColumn: "2",
                    tableColumn: "8",
                    assetBase: "Standardized assessment tools",
                    assetName: "OPQRSTUV.pdf",
                    dataParent: "testPage.table",
                    fqn: "testPage.table.ttassetLink",
                    tableKey: "table"
                  },
                  {
                    label: "Table ttcalculatedValue",
                    pageDataKey: "testPage",
                    level2Key: "table",
                    elementKey: "ttcalculatedValue",
                    inputType: "calculatedValue",
                    formRow: "2",
                    formColumn: "3",
                    tableColumn: "9",
                    dataParent: "testPage.table",
                    fqn: "testPage.table.ttcalculatedValue",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    label: "Table ttdate",
                    pageDataKey: "testPage",
                    level2Key: "table",
                    elementKey: "ttdate",
                    inputType: "date",
                    formRow: "3",
                    formColumn: "1",
                    tableColumn: "4",
                    dataParent: "testPage.table",
                    fqn: "testPage.table.ttdate",
                    tableKey: "table"
                  },
                  {
                    label: "Table ttfieldset",
                    pageDataKey: "testPage",
                    level2Key: "table",
                    elementKey: "ttfieldset",
                    inputType: "fieldset",
                    formRow: "3",
                    formColumn: "2",
                    tableColumn: "10",
                    dataParent: "testPage.table",
                    fqn: "testPage.table.ttfieldset",
                    containerType: "fieldset",
                    containerKey: "ttfieldset",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              label: "Table ttftext",
                              pageDataKey: "testPage",
                              level2Key: "table",
                              level3Key: "ttfieldset",
                              elementKey: "ttftext",
                              inputType: "text",
                              tableColumn: "11",
                              fsetRow: "1",
                              fsetCol: "1",
                              dataParent: "testPage.table.ttfieldset",
                              fqn: "testPage.table.ttfieldset.ttftext",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Table ttfcheckbox",
                              pageDataKey: "testPage",
                              level2Key: "table",
                              level3Key: "ttfieldset",
                              elementKey: "ttfcheckbox",
                              inputType: "checkbox",
                              tableColumn: "15",
                              fsetRow: "1",
                              fsetCol: "2",
                              dataParent: "testPage.table.ttfieldset",
                              fqn: "testPage.table.ttfieldset.ttfcheckbox",
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Table ttfselect",
                              pageDataKey: "testPage",
                              level2Key: "table",
                              level3Key: "ttfieldset",
                              elementKey: "ttfselect",
                              inputType: "select",
                              tableColumn: "13",
                              fsetRow: "2",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "1 = Yes"
                                },
                                {
                                  text: "2 = No"
                                }
                              ],
                              passToFunction: "ttfcalculatedValue",
                              dataParent: "testPage.table.ttfieldset",
                              fqn: "testPage.table.ttfieldset.ttfselect",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Table ttfcalculatedValue",
                              pageDataKey: "testPage",
                              level2Key: "table",
                              level3Key: "ttfieldset",
                              elementKey: "ttfcalculatedValue",
                              inputType: "calculatedValue",
                              tableColumn: "19",
                              fsetRow: "2",
                              fsetCol: "2",
                              dataParent: "testPage.table.ttfieldset",
                              fqn: "testPage.table.ttfieldset.ttfcalculatedValue",
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "Table ttfspacer",
                              pageDataKey: "testPage",
                              level2Key: "table",
                              level3Key: "ttfieldset",
                              elementKey: "ttfspacer",
                              inputType: "spacer",
                              tableColumn: "17",
                              fsetRow: "3",
                              fsetCol: "1",
                              dataParent: "testPage.table.ttfieldset",
                              fqn: "testPage.table.ttfieldset.ttfspacer",
                              tableCss: "hide-table-element",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "<b>a form <i>label</i></b>",
                              pageDataKey: "testPage",
                              level2Key: "table",
                              level3Key: "ttfieldset",
                              elementKey: "ttfform_label",
                              inputType: "form_label",
                              tableColumn: "16",
                              fsetRow: "3",
                              fsetCol: "2",
                              dataParent: "testPage.table.ttfieldset",
                              fqn: "testPage.table.ttfieldset.ttfform_label",
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "Table ttfassetLink",
                              pageDataKey: "testPage",
                              level2Key: "table",
                              level3Key: "ttfieldset",
                              elementKey: "ttfassetLink",
                              inputType: "assetLink",
                              tableColumn: "18",
                              fsetRow: "4",
                              fsetCol: "1",
                              assetBase: "Standardized assessment tools",
                              assetName: "OPQRSTUV.pdf",
                              dataParent: "testPage.table.ttfieldset",
                              fqn: "testPage.table.ttfieldset.ttfassetLink",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Table ttfdate",
                              pageDataKey: "testPage",
                              level2Key: "table",
                              level3Key: "ttfieldset",
                              elementKey: "ttfdate",
                              inputType: "date",
                              tableColumn: "14",
                              fsetRow: "4",
                              fsetCol: "2",
                              dataParent: "testPage.table.ttfieldset",
                              fqn: "testPage.table.ttfieldset.ttfdate",
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              label: "Table ttftextarea",
                              pageDataKey: "testPage",
                              level2Key: "table",
                              level3Key: "ttfieldset",
                              elementKey: "ttftextarea",
                              inputType: "textarea",
                              tableColumn: "12",
                              fsetRow: "5",
                              fsetCol: "1",
                              dataParent: "testPage.table.ttfieldset",
                              fqn: "testPage.table.ttfieldset.ttftextarea",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        }
                      ],
                      columnsCount: 2
                    }
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    label: "Table tttextarea",
                    pageDataKey: "testPage",
                    level2Key: "table",
                    elementKey: "tttextarea",
                    inputType: "textarea",
                    formRow: "4",
                    formColumn: "1",
                    tableColumn: "2",
                    dataParent: "testPage.table",
                    fqn: "testPage.table.tttextarea",
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
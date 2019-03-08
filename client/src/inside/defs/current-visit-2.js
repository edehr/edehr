/* eslint-disable quotes */
export default function () {
  return {
    genitourinary: {
      pageTitle: "Genitourinary assessment",
      pageDataKey: "genitourinary",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a genitourinary assessment",
          tableCells: [
            {
              elementKey: "name",
              fqn: "genitourinary.table.name",
              inputType: "text",
              label: "Name",
              tableColumn: "1",
              formCss: "user_name",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table"
            },
            {
              elementKey: "pregnantGroup",
              fqn: "genitourinary.table.pregnantGroup",
              inputType: "fieldset",
              label: "Pregnancy",
              formColumn: "3",
              formRow: "3",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table",
              level2Key: "table",
              page: "Genitourinary assessment",
              containerType: "fieldset",
              containerKey: "pregnantGroup",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "day",
              fqn: "genitourinary.table.day",
              inputType: "day",
              label: "Day",
              tableColumn: "3",
              formCss: "user_day",
              formColumn: "3",
              formRow: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table"
            },
            {
              elementKey: "time",
              fqn: "genitourinary.table.time",
              inputType: "time",
              label: "Time",
              tableColumn: "4",
              formCss: "user_time",
              formColumn: "4",
              formRow: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table"
            },
            {
              elementKey: "none",
              fqn: "genitourinary.table.urinaryGroup1.none",
              inputType: "checkbox",
              label: "None",
              tableColumn: "6",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.urinaryGroup1",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "increasedFrequency",
              fqn: "genitourinary.table.urinaryGroup1.increasedFrequency",
              inputType: "checkbox",
              label: "Increased frequency",
              tableColumn: "7",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.urinaryGroup1",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "dysuria",
              fqn: "genitourinary.table.urinaryGroup1.dysuria",
              inputType: "checkbox",
              label: "Dysuria",
              tableColumn: "8",
              fsetRow: "3",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.urinaryGroup1",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "hernaturia",
              fqn: "genitourinary.table.urinaryGroup1.hernaturia",
              inputType: "checkbox",
              label: "Hermaturia",
              tableColumn: "9",
              fsetRow: "4",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.urinaryGroup1",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "oliguria",
              fqn: "genitourinary.table.urinaryGroup1.oliguria",
              inputType: "checkbox",
              label: "Oliguria",
              tableColumn: "10",
              fsetRow: "5",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.urinaryGroup1",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "incontinence",
              fqn: "genitourinary.table.urinaryGroup1.incontinence",
              inputType: "checkbox",
              label: "Incontinence",
              tableColumn: "11",
              fsetRow: "6",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.urinaryGroup1",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "retention",
              fqn: "genitourinary.table.urinaryGroup1.retention",
              inputType: "checkbox",
              label: "Retention",
              tableColumn: "12",
              fsetRow: "7",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.urinaryGroup1",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "distention",
              fqn: "genitourinary.table.urinaryGroup1.distention",
              inputType: "checkbox",
              label: "Distention",
              tableColumn: "13",
              fsetRow: "8",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.urinaryGroup1",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "urinaryGroup1",
              fqn: "genitourinary.table.urinaryGroup1",
              inputType: "fieldset",
              label: "Urinary Symptoms",
              tableColumn: "5",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table",
              level2Key: "table",
              page: "Genitourinary assessment",
              containerType: "fieldset",
              containerKey: "urinaryGroup1",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "lastVoidedDay",
              fqn: "genitourinary.table.urinaryGroup2.lastVoidedDay",
              inputType: "date",
              label: "Last voided day",
              tableColumn: "14",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.urinaryGroup2",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "lastVoidedTime",
              fqn: "genitourinary.table.urinaryGroup2.lastVoidedTime",
              inputType: "time",
              label: "Last voided time",
              tableColumn: "15",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.urinaryGroup2",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "colour",
              fqn: "genitourinary.table.urinaryGroup2.colour",
              inputType: "select",
              label: "Urine colour",
              tableColumn: "16",
              fsetRow: "3",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.urinaryGroup2",
              level2Key: "table",
              page: "Genitourinary assessment",
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
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "consistency",
              fqn: "genitourinary.table.urinaryGroup2.consistency",
              inputType: "select",
              label: "Urine consistency",
              tableColumn: "17",
              fsetRow: "4",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.urinaryGroup2",
              level2Key: "table",
              page: "Genitourinary assessment",
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
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "diaper",
              fqn: "genitourinary.table.urinaryGroup2.diaper",
              inputType: "select",
              label: "Diaper",
              tableColumn: "18",
              fsetRow: "5",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.urinaryGroup2",
              level2Key: "table",
              page: "Genitourinary assessment",
              options: [
                {
                  text: "Yes"
                },
                {
                  text: "No"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "urinaryGroup2",
              fqn: "genitourinary.table.urinaryGroup2",
              inputType: "fieldset",
              formColumn: "2",
              formRow: "2",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table",
              level2Key: "table",
              page: "Genitourinary assessment",
              containerType: "fieldset",
              containerKey: "urinaryGroup2",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "foley",
              fqn: "genitourinary.table.foleyGroup.foley",
              inputType: "select",
              label: "Foley",
              tableColumn: "19",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.foleyGroup",
              level2Key: "table",
              page: "Genitourinary assessment",
              options: [
                {
                  text: "Yes"
                },
                {
                  text: "No"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "profession",
              fqn: "genitourinary.table.profession",
              inputType: "text",
              label: "Profession",
              tableColumn: "2",
              formCss: "user_pro",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table"
            },
            {
              elementKey: "foleySize",
              fqn: "genitourinary.table.foleyGroup.foleySize",
              inputType: "text",
              label: "Size",
              tableColumn: "21",
              fsetRow: "3",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.foleyGroup",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "lastChange",
              fqn: "genitourinary.table.foleyGroup.lastChange",
              inputType: "day",
              label: "Last catheter change",
              tableColumn: "22",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.foleyGroup",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table"
            },
            {
              elementKey: "foleyGroup",
              fqn: "genitourinary.table.foleyGroup",
              inputType: "fieldset",
              label: "Foley",
              formColumn: "3",
              formRow: "2",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table",
              level2Key: "table",
              page: "Genitourinary assessment",
              containerType: "fieldset",
              containerKey: "foleyGroup",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "pelvicPain",
              fqn: "genitourinary.table.pelvicGroup.pelvicPain",
              inputType: "select",
              label: "Pelvic pain",
              tableColumn: "23",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.pelvicGroup",
              level2Key: "table",
              page: "Genitourinary assessment",
              options: [
                {
                  text: "Yes"
                },
                {
                  text: "No"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "location",
              fqn: "genitourinary.table.pelvicGroup.location",
              inputType: "text",
              label: "Location",
              tableColumn: "24",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.pelvicGroup",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "aLabel",
              fqn: "genitourinary.table.pelvicGroup.aLabel",
              inputType: "form-label",
              label: "If answered please complete the pain assessment",
              tableColumn: "25",
              fsetRow: "3",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.pelvicGroup",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableCss: "hide-table-element",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "pelvicPainSource",
              fqn: "genitourinary.table.pelvicGroup.pelvicPainSource",
              inputType: "select",
              label: "Pelvic pain source",
              tableColumn: "26",
              fsetRow: "4",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.pelvicGroup",
              level2Key: "table",
              page: "Genitourinary assessment",
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
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "pelvicGroup",
              fqn: "genitourinary.table.pelvicGroup",
              inputType: "fieldset",
              label: "Pelvic",
              formColumn: "1",
              formRow: "3",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table",
              level2Key: "table",
              page: "Genitourinary assessment",
              containerType: "fieldset",
              containerKey: "pelvicGroup",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "discharge",
              fqn: "genitourinary.table.vaginal.discharge",
              inputType: "checkbox",
              label: "Discharge",
              tableColumn: "27",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.vaginal",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "bleeing",
              fqn: "genitourinary.table.vaginal.bleeing",
              inputType: "checkbox",
              label: "Bleeing",
              tableColumn: "28",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.vaginal",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "description",
              fqn: "genitourinary.table.vaginal.description",
              inputType: "text",
              label: "Description",
              tableColumn: "29",
              fsetRow: "3",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.vaginal",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "lastMenstrualPeriodDate",
              fqn: "genitourinary.table.vaginal.lastMenstrualPeriodDate",
              inputType: "date",
              label: "Last menstrual period date",
              tableColumn: "30",
              fsetRow: "4",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.vaginal",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "vaginal",
              fqn: "genitourinary.table.vaginal",
              inputType: "fieldset",
              label: "Vaginal",
              formColumn: "2",
              formRow: "3",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table",
              level2Key: "table",
              page: "Genitourinary assessment",
              containerType: "fieldset",
              containerKey: "vaginal",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "pregnant",
              fqn: "genitourinary.table.pregnantGroup.pregnant",
              inputType: "select",
              label: "Pregnant",
              tableColumn: "31",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.pregnantGroup",
              level2Key: "table",
              page: "Genitourinary assessment",
              options: [
                {
                  text: "Yes"
                },
                {
                  text: "No"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "gravida",
              fqn: "genitourinary.table.pregnantGroup.gravida",
              inputType: "text",
              label: "Gravida (number of pregnancies)",
              tableColumn: "32",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.pregnantGroup",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "para",
              fqn: "genitourinary.table.pregnantGroup.para",
              inputType: "text",
              label: "Para (number of children)",
              tableColumn: "33",
              fsetRow: "3",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.pregnantGroup",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "livingChildren",
              fqn: "genitourinary.table.pregnantGroup.livingChildren",
              inputType: "text",
              label: "Living children",
              tableColumn: "34",
              fsetRow: "4",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.pregnantGroup",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "comments",
              fqn: "genitourinary.table.pregnantGroup.comments",
              inputType: "textarea",
              label: "Comments",
              tableColumn: "35",
              formRow: "4",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.pregnantGroup",
              level2Key: "table",
              page: "Genitourinary assessment",
              tableKey: "table"
            },
            {
              elementKey: "foleyType",
              fqn: "genitourinary.table.foleyGroup.foleyType",
              inputType: "text",
              label: "Type",
              tableColumn: "20",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "genitourinary",
              dataParent: "genitourinary.table.foleyGroup",
              level2Key: "table",
              page: "Genitourinary assessment",
              helperText: "eg. indwelling catheter",
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
                    elementKey: "name",
                    fqn: "genitourinary.table.name",
                    inputType: "text",
                    label: "Name",
                    tableColumn: "1",
                    formCss: "user_name",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "genitourinary",
                    dataParent: "genitourinary.table",
                    level2Key: "table",
                    page: "Genitourinary assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    fqn: "genitourinary.table.profession",
                    inputType: "text",
                    label: "Profession",
                    tableColumn: "2",
                    formCss: "user_pro",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "genitourinary",
                    dataParent: "genitourinary.table",
                    level2Key: "table",
                    page: "Genitourinary assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    fqn: "genitourinary.table.day",
                    inputType: "day",
                    label: "Day",
                    tableColumn: "3",
                    formCss: "user_day",
                    formColumn: "3",
                    formRow: "1",
                    pageDataKey: "genitourinary",
                    dataParent: "genitourinary.table",
                    level2Key: "table",
                    page: "Genitourinary assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    fqn: "genitourinary.table.time",
                    inputType: "time",
                    label: "Time",
                    tableColumn: "4",
                    formCss: "user_time",
                    formColumn: "4",
                    formRow: "1",
                    pageDataKey: "genitourinary",
                    dataParent: "genitourinary.table",
                    level2Key: "table",
                    page: "Genitourinary assessment",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "urinaryGroup1",
                    fqn: "genitourinary.table.urinaryGroup1",
                    inputType: "fieldset",
                    label: "Urinary Symptoms",
                    tableColumn: "5",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "genitourinary",
                    dataParent: "genitourinary.table",
                    level2Key: "table",
                    page: "Genitourinary assessment",
                    containerType: "fieldset",
                    containerKey: "urinaryGroup1",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "none",
                              fqn: "genitourinary.table.urinaryGroup1.none",
                              inputType: "checkbox",
                              label: "None",
                              tableColumn: "6",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.urinaryGroup1",
                              level2Key: "table",
                              page: "Genitourinary assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "increasedFrequency",
                              fqn: "genitourinary.table.urinaryGroup1.increasedFrequency",
                              inputType: "checkbox",
                              label: "Increased frequency",
                              tableColumn: "7",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.urinaryGroup1",
                              level2Key: "table",
                              page: "Genitourinary assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "dysuria",
                              fqn: "genitourinary.table.urinaryGroup1.dysuria",
                              inputType: "checkbox",
                              label: "Dysuria",
                              tableColumn: "8",
                              fsetRow: "3",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.urinaryGroup1",
                              level2Key: "table",
                              page: "Genitourinary assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "hernaturia",
                              fqn: "genitourinary.table.urinaryGroup1.hernaturia",
                              inputType: "checkbox",
                              label: "Hermaturia",
                              tableColumn: "9",
                              fsetRow: "4",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.urinaryGroup1",
                              level2Key: "table",
                              page: "Genitourinary assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "oliguria",
                              fqn: "genitourinary.table.urinaryGroup1.oliguria",
                              inputType: "checkbox",
                              label: "Oliguria",
                              tableColumn: "10",
                              fsetRow: "5",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.urinaryGroup1",
                              level2Key: "table",
                              page: "Genitourinary assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              elementKey: "incontinence",
                              fqn: "genitourinary.table.urinaryGroup1.incontinence",
                              inputType: "checkbox",
                              label: "Incontinence",
                              tableColumn: "11",
                              fsetRow: "6",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.urinaryGroup1",
                              level2Key: "table",
                              page: "Genitourinary assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "7",
                          elements: [
                            {
                              elementKey: "retention",
                              fqn: "genitourinary.table.urinaryGroup1.retention",
                              inputType: "checkbox",
                              label: "Retention",
                              tableColumn: "12",
                              fsetRow: "7",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.urinaryGroup1",
                              level2Key: "table",
                              page: "Genitourinary assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "8",
                          elements: [
                            {
                              elementKey: "distention",
                              fqn: "genitourinary.table.urinaryGroup1.distention",
                              inputType: "checkbox",
                              label: "Distention",
                              tableColumn: "13",
                              fsetRow: "8",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.urinaryGroup1",
                              level2Key: "table",
                              page: "Genitourinary assessment",
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
                    elementKey: "urinaryGroup2",
                    fqn: "genitourinary.table.urinaryGroup2",
                    inputType: "fieldset",
                    formColumn: "2",
                    formRow: "2",
                    pageDataKey: "genitourinary",
                    dataParent: "genitourinary.table",
                    level2Key: "table",
                    page: "Genitourinary assessment",
                    containerType: "fieldset",
                    containerKey: "urinaryGroup2",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "lastVoidedDay",
                              fqn: "genitourinary.table.urinaryGroup2.lastVoidedDay",
                              inputType: "date",
                              label: "Last voided day",
                              tableColumn: "14",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.urinaryGroup2",
                              level2Key: "table",
                              page: "Genitourinary assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "lastVoidedTime",
                              fqn: "genitourinary.table.urinaryGroup2.lastVoidedTime",
                              inputType: "time",
                              label: "Last voided time",
                              tableColumn: "15",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.urinaryGroup2",
                              level2Key: "table",
                              page: "Genitourinary assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "colour",
                              fqn: "genitourinary.table.urinaryGroup2.colour",
                              inputType: "select",
                              label: "Urine colour",
                              tableColumn: "16",
                              fsetRow: "3",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.urinaryGroup2",
                              level2Key: "table",
                              page: "Genitourinary assessment",
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
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "consistency",
                              fqn: "genitourinary.table.urinaryGroup2.consistency",
                              inputType: "select",
                              label: "Urine consistency",
                              tableColumn: "17",
                              fsetRow: "4",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.urinaryGroup2",
                              level2Key: "table",
                              page: "Genitourinary assessment",
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
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "diaper",
                              fqn: "genitourinary.table.urinaryGroup2.diaper",
                              inputType: "select",
                              label: "Diaper",
                              tableColumn: "18",
                              fsetRow: "5",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.urinaryGroup2",
                              level2Key: "table",
                              page: "Genitourinary assessment",
                              options: [
                                {
                                  text: "Yes"
                                },
                                {
                                  text: "No"
                                }
                              ],
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
                    elementKey: "foleyGroup",
                    fqn: "genitourinary.table.foleyGroup",
                    inputType: "fieldset",
                    label: "Foley",
                    formColumn: "3",
                    formRow: "2",
                    pageDataKey: "genitourinary",
                    dataParent: "genitourinary.table",
                    level2Key: "table",
                    page: "Genitourinary assessment",
                    containerType: "fieldset",
                    containerKey: "foleyGroup",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "foley",
                              fqn: "genitourinary.table.foleyGroup.foley",
                              inputType: "select",
                              label: "Foley",
                              tableColumn: "19",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.foleyGroup",
                              level2Key: "table",
                              page: "Genitourinary assessment",
                              options: [
                                {
                                  text: "Yes"
                                },
                                {
                                  text: "No"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "foleyType",
                              fqn: "genitourinary.table.foleyGroup.foleyType",
                              inputType: "text",
                              label: "Type",
                              tableColumn: "20",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.foleyGroup",
                              level2Key: "table",
                              page: "Genitourinary assessment",
                              helperText: "eg. indwelling catheter",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "foleySize",
                              fqn: "genitourinary.table.foleyGroup.foleySize",
                              inputType: "text",
                              label: "Size",
                              tableColumn: "21",
                              fsetRow: "3",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.foleyGroup",
                              level2Key: "table",
                              page: "Genitourinary assessment",
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
                formRow: "3",
                elements: [
                  {
                    elementKey: "pelvicGroup",
                    fqn: "genitourinary.table.pelvicGroup",
                    inputType: "fieldset",
                    label: "Pelvic",
                    formColumn: "1",
                    formRow: "3",
                    pageDataKey: "genitourinary",
                    dataParent: "genitourinary.table",
                    level2Key: "table",
                    page: "Genitourinary assessment",
                    containerType: "fieldset",
                    containerKey: "pelvicGroup",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "pelvicPain",
                              fqn: "genitourinary.table.pelvicGroup.pelvicPain",
                              inputType: "select",
                              label: "Pelvic pain",
                              tableColumn: "23",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.pelvicGroup",
                              level2Key: "table",
                              page: "Genitourinary assessment",
                              options: [
                                {
                                  text: "Yes"
                                },
                                {
                                  text: "No"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "location",
                              fqn: "genitourinary.table.pelvicGroup.location",
                              inputType: "text",
                              label: "Location",
                              tableColumn: "24",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.pelvicGroup",
                              level2Key: "table",
                              page: "Genitourinary assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "aLabel",
                              fqn: "genitourinary.table.pelvicGroup.aLabel",
                              inputType: "form-label",
                              label: "If answered please complete the pain assessment",
                              tableColumn: "25",
                              fsetRow: "3",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.pelvicGroup",
                              level2Key: "table",
                              page: "Genitourinary assessment",
                              tableCss: "hide-table-element",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "pelvicPainSource",
                              fqn: "genitourinary.table.pelvicGroup.pelvicPainSource",
                              inputType: "select",
                              label: "Pelvic pain source",
                              tableColumn: "26",
                              fsetRow: "4",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.pelvicGroup",
                              level2Key: "table",
                              page: "Genitourinary assessment",
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
                    elementKey: "vaginal",
                    fqn: "genitourinary.table.vaginal",
                    inputType: "fieldset",
                    label: "Vaginal",
                    formColumn: "2",
                    formRow: "3",
                    pageDataKey: "genitourinary",
                    dataParent: "genitourinary.table",
                    level2Key: "table",
                    page: "Genitourinary assessment",
                    containerType: "fieldset",
                    containerKey: "vaginal",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "discharge",
                              fqn: "genitourinary.table.vaginal.discharge",
                              inputType: "checkbox",
                              label: "Discharge",
                              tableColumn: "27",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.vaginal",
                              level2Key: "table",
                              page: "Genitourinary assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "bleeing",
                              fqn: "genitourinary.table.vaginal.bleeing",
                              inputType: "checkbox",
                              label: "Bleeing",
                              tableColumn: "28",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.vaginal",
                              level2Key: "table",
                              page: "Genitourinary assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "description",
                              fqn: "genitourinary.table.vaginal.description",
                              inputType: "text",
                              label: "Description",
                              tableColumn: "29",
                              fsetRow: "3",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.vaginal",
                              level2Key: "table",
                              page: "Genitourinary assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "lastMenstrualPeriodDate",
                              fqn: "genitourinary.table.vaginal.lastMenstrualPeriodDate",
                              inputType: "date",
                              label: "Last menstrual period date",
                              tableColumn: "30",
                              fsetRow: "4",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.vaginal",
                              level2Key: "table",
                              page: "Genitourinary assessment",
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
                    elementKey: "pregnantGroup",
                    fqn: "genitourinary.table.pregnantGroup",
                    inputType: "fieldset",
                    label: "Pregnancy",
                    formColumn: "3",
                    formRow: "3",
                    pageDataKey: "genitourinary",
                    dataParent: "genitourinary.table",
                    level2Key: "table",
                    page: "Genitourinary assessment",
                    containerType: "fieldset",
                    containerKey: "pregnantGroup",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "pregnant",
                              fqn: "genitourinary.table.pregnantGroup.pregnant",
                              inputType: "select",
                              label: "Pregnant",
                              tableColumn: "31",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.pregnantGroup",
                              level2Key: "table",
                              page: "Genitourinary assessment",
                              options: [
                                {
                                  text: "Yes"
                                },
                                {
                                  text: "No"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "gravida",
                              fqn: "genitourinary.table.pregnantGroup.gravida",
                              inputType: "text",
                              label: "Gravida (number of pregnancies)",
                              tableColumn: "32",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.pregnantGroup",
                              level2Key: "table",
                              page: "Genitourinary assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "para",
                              fqn: "genitourinary.table.pregnantGroup.para",
                              inputType: "text",
                              label: "Para (number of children)",
                              tableColumn: "33",
                              fsetRow: "3",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.pregnantGroup",
                              level2Key: "table",
                              page: "Genitourinary assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "livingChildren",
                              fqn: "genitourinary.table.pregnantGroup.livingChildren",
                              inputType: "text",
                              label: "Living children",
                              tableColumn: "34",
                              fsetRow: "4",
                              fsetCol: "1",
                              pageDataKey: "genitourinary",
                              dataParent: "genitourinary.table.pregnantGroup",
                              level2Key: "table",
                              page: "Genitourinary assessment",
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
    musculoskeletal: {
      pageTitle: "Musculoskeletal assessment",
      pageDataKey: "musculoskeletal",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a musculoskeletal assessment",
          tableCells: [
            {
              elementKey: "name",
              fqn: "musculoskeletal.table.name",
              inputType: "text",
              label: "Name",
              tableColumn: "1",
              formCss: "user_name",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "musculoskeletal",
              dataParent: "musculoskeletal.table",
              level2Key: "table",
              page: "Musculoskeletal assessment",
              tableKey: "table"
            },
            {
              elementKey: "profession",
              fqn: "musculoskeletal.table.profession",
              inputType: "text",
              label: "Profession",
              tableColumn: "2",
              formCss: "user_pro",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "musculoskeletal",
              dataParent: "musculoskeletal.table",
              level2Key: "table",
              page: "Musculoskeletal assessment",
              tableKey: "table"
            },
            {
              elementKey: "day",
              fqn: "musculoskeletal.table.day",
              inputType: "day",
              label: "Day",
              tableColumn: "3",
              formCss: "user_day",
              formColumn: "3",
              formRow: "1",
              pageDataKey: "musculoskeletal",
              dataParent: "musculoskeletal.table",
              level2Key: "table",
              page: "Musculoskeletal assessment",
              tableKey: "table"
            },
            {
              elementKey: "time",
              fqn: "musculoskeletal.table.time",
              inputType: "time",
              label: "Time",
              tableColumn: "4",
              formCss: "user_time",
              formColumn: "4",
              formRow: "1",
              pageDataKey: "musculoskeletal",
              dataParent: "musculoskeletal.table",
              level2Key: "table",
              page: "Musculoskeletal assessment",
              tableKey: "table"
            },
            {
              elementKey: "swelling",
              fqn: "musculoskeletal.table.swelling",
              inputType: "select",
              label: "Swelling",
              tableColumn: "5",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "musculoskeletal",
              dataParent: "musculoskeletal.table",
              level2Key: "table",
              page: "Musculoskeletal assessment",
              options: [
                {
                  text: "Present"
                },
                {
                  text: "Absent"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "pain",
              fqn: "musculoskeletal.table.pain",
              inputType: "select",
              label: "Pain",
              tableColumn: "6",
              formColumn: "2",
              formRow: "2",
              pageDataKey: "musculoskeletal",
              dataParent: "musculoskeletal.table",
              level2Key: "table",
              page: "Musculoskeletal assessment",
              options: [
                {
                  text: "Present"
                },
                {
                  text: "Absent"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "deformity",
              fqn: "musculoskeletal.table.deformity",
              inputType: "select",
              label: "Deformity",
              tableColumn: "7",
              formColumn: "3",
              formRow: "2",
              pageDataKey: "musculoskeletal",
              dataParent: "musculoskeletal.table",
              level2Key: "table",
              page: "Musculoskeletal assessment",
              options: [
                {
                  text: "Present"
                },
                {
                  text: "Absent"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "movement",
              fqn: "musculoskeletal.table.movement",
              inputType: "select",
              label: "Movement",
              tableColumn: "8",
              formColumn: "4",
              formRow: "2",
              pageDataKey: "musculoskeletal",
              dataParent: "musculoskeletal.table",
              level2Key: "table",
              page: "Musculoskeletal assessment",
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
              tableKey: "table"
            },
            {
              elementKey: "sensation",
              fqn: "musculoskeletal.table.sensation",
              inputType: "select",
              label: "Sensation",
              tableColumn: "9",
              formColumn: "1",
              formRow: "3",
              pageDataKey: "musculoskeletal",
              dataParent: "musculoskeletal.table",
              level2Key: "table",
              page: "Musculoskeletal assessment",
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
              tableKey: "table"
            },
            {
              elementKey: "pulse",
              fqn: "musculoskeletal.table.pulse",
              inputType: "select",
              label: "Pulse",
              tableColumn: "10",
              formColumn: "2",
              formRow: "3",
              pageDataKey: "musculoskeletal",
              dataParent: "musculoskeletal.table",
              level2Key: "table",
              page: "Musculoskeletal assessment",
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
              tableKey: "table"
            },
            {
              elementKey: "colour",
              fqn: "musculoskeletal.table.colour",
              inputType: "select",
              label: "Colour",
              tableColumn: "11",
              formColumn: "3",
              formRow: "3",
              pageDataKey: "musculoskeletal",
              dataParent: "musculoskeletal.table",
              level2Key: "table",
              page: "Musculoskeletal assessment",
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
              tableKey: "table"
            },
            {
              elementKey: "temp",
              fqn: "musculoskeletal.table.temp",
              inputType: "select",
              label: "Temp",
              tableColumn: "12",
              formColumn: "4",
              formRow: "3",
              pageDataKey: "musculoskeletal",
              dataParent: "musculoskeletal.table",
              level2Key: "table",
              page: "Musculoskeletal assessment",
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
              tableKey: "table"
            },
            {
              elementKey: "useOfAmbulatoryAid",
              fqn: "musculoskeletal.table.useOfAmbulatoryAid",
              inputType: "select",
              label: "Use of ambulatory aid",
              tableColumn: "13",
              formColumn: "1",
              formRow: "4",
              pageDataKey: "musculoskeletal",
              dataParent: "musculoskeletal.table",
              level2Key: "table",
              page: "Musculoskeletal assessment",
              options: [
                {
                  text: "Yes"
                },
                {
                  text: "No"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "type",
              fqn: "musculoskeletal.table.type",
              inputType: "select",
              label: "Type",
              tableColumn: "14",
              formColumn: "2",
              formRow: "4",
              pageDataKey: "musculoskeletal",
              dataParent: "musculoskeletal.table",
              level2Key: "table",
              page: "Musculoskeletal assessment",
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
              tableKey: "table"
            },
            {
              elementKey: "comments",
              fqn: "musculoskeletal.table.comments",
              inputType: "textarea",
              label: "Comments",
              tableColumn: "15",
              formColumn: "1",
              formRow: "5",
              pageDataKey: "musculoskeletal",
              dataParent: "musculoskeletal.table",
              level2Key: "table",
              page: "Musculoskeletal assessment",
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
                    fqn: "musculoskeletal.table.name",
                    inputType: "text",
                    label: "Name",
                    tableColumn: "1",
                    formCss: "user_name",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "musculoskeletal",
                    dataParent: "musculoskeletal.table",
                    level2Key: "table",
                    page: "Musculoskeletal assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    fqn: "musculoskeletal.table.profession",
                    inputType: "text",
                    label: "Profession",
                    tableColumn: "2",
                    formCss: "user_pro",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "musculoskeletal",
                    dataParent: "musculoskeletal.table",
                    level2Key: "table",
                    page: "Musculoskeletal assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    fqn: "musculoskeletal.table.day",
                    inputType: "day",
                    label: "Day",
                    tableColumn: "3",
                    formCss: "user_day",
                    formColumn: "3",
                    formRow: "1",
                    pageDataKey: "musculoskeletal",
                    dataParent: "musculoskeletal.table",
                    level2Key: "table",
                    page: "Musculoskeletal assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    fqn: "musculoskeletal.table.time",
                    inputType: "time",
                    label: "Time",
                    tableColumn: "4",
                    formCss: "user_time",
                    formColumn: "4",
                    formRow: "1",
                    pageDataKey: "musculoskeletal",
                    dataParent: "musculoskeletal.table",
                    level2Key: "table",
                    page: "Musculoskeletal assessment",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "swelling",
                    fqn: "musculoskeletal.table.swelling",
                    inputType: "select",
                    label: "Swelling",
                    tableColumn: "5",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "musculoskeletal",
                    dataParent: "musculoskeletal.table",
                    level2Key: "table",
                    page: "Musculoskeletal assessment",
                    options: [
                      {
                        text: "Present"
                      },
                      {
                        text: "Absent"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "pain",
                    fqn: "musculoskeletal.table.pain",
                    inputType: "select",
                    label: "Pain",
                    tableColumn: "6",
                    formColumn: "2",
                    formRow: "2",
                    pageDataKey: "musculoskeletal",
                    dataParent: "musculoskeletal.table",
                    level2Key: "table",
                    page: "Musculoskeletal assessment",
                    options: [
                      {
                        text: "Present"
                      },
                      {
                        text: "Absent"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "deformity",
                    fqn: "musculoskeletal.table.deformity",
                    inputType: "select",
                    label: "Deformity",
                    tableColumn: "7",
                    formColumn: "3",
                    formRow: "2",
                    pageDataKey: "musculoskeletal",
                    dataParent: "musculoskeletal.table",
                    level2Key: "table",
                    page: "Musculoskeletal assessment",
                    options: [
                      {
                        text: "Present"
                      },
                      {
                        text: "Absent"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "movement",
                    fqn: "musculoskeletal.table.movement",
                    inputType: "select",
                    label: "Movement",
                    tableColumn: "8",
                    formColumn: "4",
                    formRow: "2",
                    pageDataKey: "musculoskeletal",
                    dataParent: "musculoskeletal.table",
                    level2Key: "table",
                    page: "Musculoskeletal assessment",
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
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "sensation",
                    fqn: "musculoskeletal.table.sensation",
                    inputType: "select",
                    label: "Sensation",
                    tableColumn: "9",
                    formColumn: "1",
                    formRow: "3",
                    pageDataKey: "musculoskeletal",
                    dataParent: "musculoskeletal.table",
                    level2Key: "table",
                    page: "Musculoskeletal assessment",
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
                    tableKey: "table"
                  },
                  {
                    elementKey: "pulse",
                    fqn: "musculoskeletal.table.pulse",
                    inputType: "select",
                    label: "Pulse",
                    tableColumn: "10",
                    formColumn: "2",
                    formRow: "3",
                    pageDataKey: "musculoskeletal",
                    dataParent: "musculoskeletal.table",
                    level2Key: "table",
                    page: "Musculoskeletal assessment",
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
                    tableKey: "table"
                  },
                  {
                    elementKey: "colour",
                    fqn: "musculoskeletal.table.colour",
                    inputType: "select",
                    label: "Colour",
                    tableColumn: "11",
                    formColumn: "3",
                    formRow: "3",
                    pageDataKey: "musculoskeletal",
                    dataParent: "musculoskeletal.table",
                    level2Key: "table",
                    page: "Musculoskeletal assessment",
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
                    tableKey: "table"
                  },
                  {
                    elementKey: "temp",
                    fqn: "musculoskeletal.table.temp",
                    inputType: "select",
                    label: "Temp",
                    tableColumn: "12",
                    formColumn: "4",
                    formRow: "3",
                    pageDataKey: "musculoskeletal",
                    dataParent: "musculoskeletal.table",
                    level2Key: "table",
                    page: "Musculoskeletal assessment",
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
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    elementKey: "useOfAmbulatoryAid",
                    fqn: "musculoskeletal.table.useOfAmbulatoryAid",
                    inputType: "select",
                    label: "Use of ambulatory aid",
                    tableColumn: "13",
                    formColumn: "1",
                    formRow: "4",
                    pageDataKey: "musculoskeletal",
                    dataParent: "musculoskeletal.table",
                    level2Key: "table",
                    page: "Musculoskeletal assessment",
                    options: [
                      {
                        text: "Yes"
                      },
                      {
                        text: "No"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "type",
                    fqn: "musculoskeletal.table.type",
                    inputType: "select",
                    label: "Type",
                    tableColumn: "14",
                    formColumn: "2",
                    formRow: "4",
                    pageDataKey: "musculoskeletal",
                    dataParent: "musculoskeletal.table",
                    level2Key: "table",
                    page: "Musculoskeletal assessment",
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
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "5",
                elements: [
                  {
                    elementKey: "comments",
                    fqn: "musculoskeletal.table.comments",
                    inputType: "textarea",
                    label: "Comments",
                    tableColumn: "15",
                    formColumn: "1",
                    formRow: "5",
                    pageDataKey: "musculoskeletal",
                    dataParent: "musculoskeletal.table",
                    level2Key: "table",
                    page: "Musculoskeletal assessment",
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
    pain: {
      pageTitle: "Pain assessment",
      pageDataKey: "pain",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a pain assessment",
          tableCells: [
            {
              elementKey: "name",
              fqn: "pain.table.name",
              inputType: "text",
              label: "Name",
              tableColumn: "1",
              formCss: "user_name",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "pain",
              dataParent: "pain.table",
              level2Key: "table",
              page: "Pain assessment",
              tableKey: "table"
            },
            {
              elementKey: "secondarySite",
              fqn: "pain.table.secondarySite",
              inputType: "fieldset",
              label: "Secondary pain site",
              formColumn: "1",
              formRow: "3",
              pageDataKey: "pain",
              dataParent: "pain.table",
              level2Key: "table",
              page: "Pain assessment",
              containerType: "fieldset",
              containerKey: "secondarySite",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "unit",
              fqn: "pain.table.unit",
              inputType: "text",
              label: "Unit",
              tableColumn: "3",
              formCss: "user_unit",
              formColumn: "3",
              formRow: "1",
              pageDataKey: "pain",
              dataParent: "pain.table",
              level2Key: "table",
              page: "Pain assessment",
              tableKey: "table"
            },
            {
              elementKey: "day",
              fqn: "pain.table.day",
              inputType: "day",
              label: "Day",
              tableColumn: "4",
              formCss: "user_day",
              formColumn: "4",
              formRow: "1",
              pageDataKey: "pain",
              dataParent: "pain.table",
              level2Key: "table",
              page: "Pain assessment",
              tableKey: "table"
            },
            {
              elementKey: "time",
              fqn: "pain.table.time",
              inputType: "time",
              label: "Time",
              tableColumn: "5",
              formCss: "user_time",
              formColumn: "5",
              formRow: "1",
              pageDataKey: "pain",
              dataParent: "pain.table",
              level2Key: "table",
              page: "Pain assessment",
              tableKey: "table"
            },
            {
              elementKey: "location",
              fqn: "pain.table.primarySite.location",
              inputType: "text",
              label: "Location",
              tableColumn: "6",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "pain",
              dataParent: "pain.table.primarySite",
              level2Key: "table",
              page: "Pain assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "painScale",
              fqn: "pain.table.primarySite.painScale",
              inputType: "text",
              label: "Pain intensity (0-10)",
              tableColumn: "7",
              fsetRow: "1",
              fsetCol: "2",
              pageDataKey: "pain",
              dataParent: "pain.table.primarySite",
              level2Key: "table",
              page: "Pain assessment",
              tableKey: "table",
              formColumn: "2"
            },
            {
              elementKey: "respiratoryRate",
              fqn: "pain.table.primarySite.respiratoryRate",
              inputType: "text",
              label: "Respiratory rate (br/min)",
              tableColumn: "8",
              fsetRow: "1",
              fsetCol: "3",
              pageDataKey: "pain",
              dataParent: "pain.table.primarySite",
              level2Key: "table",
              page: "Pain assessment",
              tableKey: "table",
              formColumn: "3"
            },
            {
              elementKey: "onset",
              fqn: "pain.table.primarySite.onset",
              inputType: "text",
              label: "Onset",
              tableColumn: "9",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "pain",
              dataParent: "pain.table.primarySite",
              level2Key: "table",
              page: "Pain assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "type",
              fqn: "pain.table.primarySite.type",
              inputType: "text",
              label: "Type",
              tableColumn: "10",
              fsetRow: "2",
              fsetCol: "2",
              pageDataKey: "pain",
              dataParent: "pain.table.primarySite",
              level2Key: "table",
              page: "Pain assessment",
              tableKey: "table",
              formColumn: "2"
            },
            {
              elementKey: "alleviationAssociatedSymptoms",
              fqn: "pain.table.primarySite.alleviationAssociatedSymptoms",
              inputType: "text",
              label: "Alleviation & associated symptoms",
              tableColumn: "11",
              fsetRow: "2",
              fsetCol: "3",
              pageDataKey: "pain",
              dataParent: "pain.table.primarySite",
              level2Key: "table",
              page: "Pain assessment",
              tableKey: "table",
              formColumn: "3"
            },
            {
              elementKey: "radiation",
              fqn: "pain.table.primarySite.radiation",
              inputType: "text",
              label: "Radiation",
              tableColumn: "12",
              fsetRow: "3",
              fsetCol: "1",
              pageDataKey: "pain",
              dataParent: "pain.table.primarySite",
              level2Key: "table",
              page: "Pain assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "precipitatingEvents",
              fqn: "pain.table.primarySite.precipitatingEvents",
              inputType: "text",
              label: "Precipitating events",
              tableColumn: "13",
              fsetRow: "3",
              fsetCol: "2",
              pageDataKey: "pain",
              dataParent: "pain.table.primarySite",
              level2Key: "table",
              page: "Pain assessment",
              tableKey: "table",
              formColumn: "2"
            },
            {
              elementKey: "profession",
              fqn: "pain.table.profession",
              inputType: "text",
              label: "Profession",
              tableColumn: "2",
              formCss: "user_pro",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "pain",
              dataParent: "pain.table",
              level2Key: "table",
              page: "Pain assessment",
              tableKey: "table"
            },
            {
              elementKey: "comments",
              fqn: "pain.table.primarySite.comments",
              inputType: "textarea",
              label: "Comments",
              tableColumn: "15",
              fsetRow: "4",
              fsetCol: "1",
              pageDataKey: "pain",
              dataParent: "pain.table.primarySite",
              level2Key: "table",
              page: "Pain assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "primarySite",
              fqn: "pain.table.primarySite",
              inputType: "fieldset",
              label: "Primary pain site",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "pain",
              dataParent: "pain.table",
              level2Key: "table",
              page: "Pain assessment",
              containerType: "fieldset",
              containerKey: "primarySite",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "location",
              fqn: "pain.table.secondarySite.location",
              inputType: "text",
              label: "Location",
              tableColumn: "16",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "pain",
              dataParent: "pain.table.secondarySite",
              level2Key: "table",
              page: "Pain assessment"
            },
            {
              elementKey: "painScale",
              fqn: "pain.table.secondarySite.painScale",
              inputType: "text",
              label: "Pain scale (0-10)",
              tableColumn: "17",
              fsetRow: "1",
              fsetCol: "2",
              pageDataKey: "pain",
              dataParent: "pain.table.secondarySite",
              level2Key: "table",
              page: "Pain assessment"
            },
            {
              elementKey: "respiratoryRate",
              fqn: "pain.table.secondarySite.respiratoryRate",
              inputType: "text",
              label: "Respiratory rate (br/min)",
              tableColumn: "18",
              fsetRow: "1",
              fsetCol: "3",
              pageDataKey: "pain",
              dataParent: "pain.table.secondarySite",
              level2Key: "table",
              page: "Pain assessment"
            },
            {
              elementKey: "onset",
              fqn: "pain.table.secondarySite.onset",
              inputType: "text",
              label: "Onset",
              tableColumn: "19",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "pain",
              dataParent: "pain.table.secondarySite",
              level2Key: "table",
              page: "Pain assessment"
            },
            {
              elementKey: "type",
              fqn: "pain.table.secondarySite.type",
              inputType: "text",
              label: "Type",
              tableColumn: "20",
              fsetRow: "2",
              fsetCol: "2",
              pageDataKey: "pain",
              dataParent: "pain.table.secondarySite",
              level2Key: "table",
              page: "Pain assessment"
            },
            {
              elementKey: "alleviationAssociatedSymptoms",
              fqn: "pain.table.secondarySite.alleviationAssociatedSymptoms",
              inputType: "text",
              label: "Alleviation & associated symptoms",
              tableColumn: "21",
              fsetRow: "2",
              fsetCol: "3",
              pageDataKey: "pain",
              dataParent: "pain.table.secondarySite",
              level2Key: "table",
              page: "Pain assessment"
            },
            {
              elementKey: "radiation",
              fqn: "pain.table.secondarySite.radiation",
              inputType: "text",
              label: "Radiation",
              tableColumn: "22",
              fsetRow: "3",
              fsetCol: "1",
              pageDataKey: "pain",
              dataParent: "pain.table.secondarySite",
              level2Key: "table",
              page: "Pain assessment"
            },
            {
              elementKey: "precipitatingEvents",
              fqn: "pain.table.secondarySite.precipitatingEvents",
              inputType: "text",
              label: "Precipitating events",
              tableColumn: "23",
              fsetRow: "3",
              fsetCol: "2",
              pageDataKey: "pain",
              dataParent: "pain.table.secondarySite",
              level2Key: "table",
              page: "Pain assessment"
            },
            {
              elementKey: "aLabel",
              fqn: "pain.table.secondarySite.aLabel",
              inputType: "form-label",
              tableColumn: "24",
              fsetRow: "3",
              fsetCol: "3",
              pageDataKey: "pain",
              dataParent: "pain.table.secondarySite",
              level2Key: "table",
              page: "Pain assessment",
              tableCss: "hide-table-element",
              tableKey: "table",
              formColumn: "3"
            },
            {
              elementKey: "comments",
              fqn: "pain.table.secondarySite.comments",
              inputType: "textarea",
              label: "Comments",
              tableColumn: "25",
              fsetRow: "4",
              fsetCol: "1",
              pageDataKey: "pain",
              dataParent: "pain.table.secondarySite",
              level2Key: "table",
              page: "Pain assessment"
            },
            {
              elementKey: "aLabel",
              fqn: "pain.table.primarySite.aLabel",
              inputType: "form-label",
              tableColumn: "14",
              fsetRow: "3",
              fsetCol: "3",
              pageDataKey: "pain",
              dataParent: "pain.table.primarySite",
              level2Key: "table",
              page: "Pain assessment",
              tableCss: "hide-table-element"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "name",
                    fqn: "pain.table.name",
                    inputType: "text",
                    label: "Name",
                    tableColumn: "1",
                    formCss: "user_name",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "pain",
                    dataParent: "pain.table",
                    level2Key: "table",
                    page: "Pain assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    fqn: "pain.table.profession",
                    inputType: "text",
                    label: "Profession",
                    tableColumn: "2",
                    formCss: "user_pro",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "pain",
                    dataParent: "pain.table",
                    level2Key: "table",
                    page: "Pain assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "unit",
                    fqn: "pain.table.unit",
                    inputType: "text",
                    label: "Unit",
                    tableColumn: "3",
                    formCss: "user_unit",
                    formColumn: "3",
                    formRow: "1",
                    pageDataKey: "pain",
                    dataParent: "pain.table",
                    level2Key: "table",
                    page: "Pain assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    fqn: "pain.table.day",
                    inputType: "day",
                    label: "Day",
                    tableColumn: "4",
                    formCss: "user_day",
                    formColumn: "4",
                    formRow: "1",
                    pageDataKey: "pain",
                    dataParent: "pain.table",
                    level2Key: "table",
                    page: "Pain assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    fqn: "pain.table.time",
                    inputType: "time",
                    label: "Time",
                    tableColumn: "5",
                    formCss: "user_time",
                    formColumn: "5",
                    formRow: "1",
                    pageDataKey: "pain",
                    dataParent: "pain.table",
                    level2Key: "table",
                    page: "Pain assessment",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "primarySite",
                    fqn: "pain.table.primarySite",
                    inputType: "fieldset",
                    label: "Primary pain site",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "pain",
                    dataParent: "pain.table",
                    level2Key: "table",
                    page: "Pain assessment",
                    containerType: "fieldset",
                    containerKey: "primarySite",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "location",
                              fqn: "pain.table.primarySite.location",
                              inputType: "text",
                              label: "Location",
                              tableColumn: "6",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "pain",
                              dataParent: "pain.table.primarySite",
                              level2Key: "table",
                              page: "Pain assessment",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "painScale",
                              fqn: "pain.table.primarySite.painScale",
                              inputType: "text",
                              label: "Pain intensity (0-10)",
                              tableColumn: "7",
                              fsetRow: "1",
                              fsetCol: "2",
                              pageDataKey: "pain",
                              dataParent: "pain.table.primarySite",
                              level2Key: "table",
                              page: "Pain assessment",
                              tableKey: "table",
                              formColumn: "2"
                            },
                            {
                              elementKey: "respiratoryRate",
                              fqn: "pain.table.primarySite.respiratoryRate",
                              inputType: "text",
                              label: "Respiratory rate (br/min)",
                              tableColumn: "8",
                              fsetRow: "1",
                              fsetCol: "3",
                              pageDataKey: "pain",
                              dataParent: "pain.table.primarySite",
                              level2Key: "table",
                              page: "Pain assessment",
                              tableKey: "table",
                              formColumn: "3"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "onset",
                              fqn: "pain.table.primarySite.onset",
                              inputType: "text",
                              label: "Onset",
                              tableColumn: "9",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "pain",
                              dataParent: "pain.table.primarySite",
                              level2Key: "table",
                              page: "Pain assessment",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "type",
                              fqn: "pain.table.primarySite.type",
                              inputType: "text",
                              label: "Type",
                              tableColumn: "10",
                              fsetRow: "2",
                              fsetCol: "2",
                              pageDataKey: "pain",
                              dataParent: "pain.table.primarySite",
                              level2Key: "table",
                              page: "Pain assessment",
                              tableKey: "table",
                              formColumn: "2"
                            },
                            {
                              elementKey: "alleviationAssociatedSymptoms",
                              fqn: "pain.table.primarySite.alleviationAssociatedSymptoms",
                              inputType: "text",
                              label: "Alleviation & associated symptoms",
                              tableColumn: "11",
                              fsetRow: "2",
                              fsetCol: "3",
                              pageDataKey: "pain",
                              dataParent: "pain.table.primarySite",
                              level2Key: "table",
                              page: "Pain assessment",
                              tableKey: "table",
                              formColumn: "3"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "radiation",
                              fqn: "pain.table.primarySite.radiation",
                              inputType: "text",
                              label: "Radiation",
                              tableColumn: "12",
                              fsetRow: "3",
                              fsetCol: "1",
                              pageDataKey: "pain",
                              dataParent: "pain.table.primarySite",
                              level2Key: "table",
                              page: "Pain assessment",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "precipitatingEvents",
                              fqn: "pain.table.primarySite.precipitatingEvents",
                              inputType: "text",
                              label: "Precipitating events",
                              tableColumn: "13",
                              fsetRow: "3",
                              fsetCol: "2",
                              pageDataKey: "pain",
                              dataParent: "pain.table.primarySite",
                              level2Key: "table",
                              page: "Pain assessment",
                              tableKey: "table",
                              formColumn: "2"
                            },
                            {
                              elementKey: "aLabel",
                              fqn: "pain.table.secondarySite.aLabel",
                              inputType: "form-label",
                              tableColumn: "24",
                              fsetRow: "3",
                              fsetCol: "3",
                              pageDataKey: "pain",
                              dataParent: "pain.table.secondarySite",
                              level2Key: "table",
                              page: "Pain assessment",
                              tableCss: "hide-table-element",
                              tableKey: "table",
                              formColumn: "3"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "comments",
                              fqn: "pain.table.primarySite.comments",
                              inputType: "textarea",
                              label: "Comments",
                              tableColumn: "15",
                              fsetRow: "4",
                              fsetCol: "1",
                              pageDataKey: "pain",
                              dataParent: "pain.table.primarySite",
                              level2Key: "table",
                              page: "Pain assessment",
                              tableKey: "table",
                              formColumn: "1"
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
                    fqn: "pain.table.secondarySite",
                    inputType: "fieldset",
                    label: "Secondary pain site",
                    formColumn: "1",
                    formRow: "3",
                    pageDataKey: "pain",
                    dataParent: "pain.table",
                    level2Key: "table",
                    page: "Pain assessment",
                    containerType: "fieldset",
                    containerKey: "secondarySite",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "location",
                              fqn: "pain.table.primarySite.location",
                              inputType: "text",
                              label: "Location",
                              tableColumn: "6",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "pain",
                              dataParent: "pain.table.primarySite",
                              level2Key: "table",
                              page: "Pain assessment",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "painScale",
                              fqn: "pain.table.primarySite.painScale",
                              inputType: "text",
                              label: "Pain intensity (0-10)",
                              tableColumn: "7",
                              fsetRow: "1",
                              fsetCol: "2",
                              pageDataKey: "pain",
                              dataParent: "pain.table.primarySite",
                              level2Key: "table",
                              page: "Pain assessment",
                              tableKey: "table",
                              formColumn: "2"
                            },
                            {
                              elementKey: "respiratoryRate",
                              fqn: "pain.table.primarySite.respiratoryRate",
                              inputType: "text",
                              label: "Respiratory rate (br/min)",
                              tableColumn: "8",
                              fsetRow: "1",
                              fsetCol: "3",
                              pageDataKey: "pain",
                              dataParent: "pain.table.primarySite",
                              level2Key: "table",
                              page: "Pain assessment",
                              tableKey: "table",
                              formColumn: "3"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "onset",
                              fqn: "pain.table.primarySite.onset",
                              inputType: "text",
                              label: "Onset",
                              tableColumn: "9",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "pain",
                              dataParent: "pain.table.primarySite",
                              level2Key: "table",
                              page: "Pain assessment",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "type",
                              fqn: "pain.table.primarySite.type",
                              inputType: "text",
                              label: "Type",
                              tableColumn: "10",
                              fsetRow: "2",
                              fsetCol: "2",
                              pageDataKey: "pain",
                              dataParent: "pain.table.primarySite",
                              level2Key: "table",
                              page: "Pain assessment",
                              tableKey: "table",
                              formColumn: "2"
                            },
                            {
                              elementKey: "alleviationAssociatedSymptoms",
                              fqn: "pain.table.primarySite.alleviationAssociatedSymptoms",
                              inputType: "text",
                              label: "Alleviation & associated symptoms",
                              tableColumn: "11",
                              fsetRow: "2",
                              fsetCol: "3",
                              pageDataKey: "pain",
                              dataParent: "pain.table.primarySite",
                              level2Key: "table",
                              page: "Pain assessment",
                              tableKey: "table",
                              formColumn: "3"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "radiation",
                              fqn: "pain.table.primarySite.radiation",
                              inputType: "text",
                              label: "Radiation",
                              tableColumn: "12",
                              fsetRow: "3",
                              fsetCol: "1",
                              pageDataKey: "pain",
                              dataParent: "pain.table.primarySite",
                              level2Key: "table",
                              page: "Pain assessment",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "precipitatingEvents",
                              fqn: "pain.table.primarySite.precipitatingEvents",
                              inputType: "text",
                              label: "Precipitating events",
                              tableColumn: "13",
                              fsetRow: "3",
                              fsetCol: "2",
                              pageDataKey: "pain",
                              dataParent: "pain.table.primarySite",
                              level2Key: "table",
                              page: "Pain assessment",
                              tableKey: "table",
                              formColumn: "2"
                            },
                            {
                              elementKey: "aLabel",
                              fqn: "pain.table.secondarySite.aLabel",
                              inputType: "form-label",
                              tableColumn: "24",
                              fsetRow: "3",
                              fsetCol: "3",
                              pageDataKey: "pain",
                              dataParent: "pain.table.secondarySite",
                              level2Key: "table",
                              page: "Pain assessment",
                              tableCss: "hide-table-element",
                              tableKey: "table",
                              formColumn: "3"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "comments",
                              fqn: "pain.table.primarySite.comments",
                              inputType: "textarea",
                              label: "Comments",
                              tableColumn: "15",
                              fsetRow: "4",
                              fsetCol: "1",
                              pageDataKey: "pain",
                              dataParent: "pain.table.primarySite",
                              level2Key: "table",
                              page: "Pain assessment",
                              tableKey: "table",
                              formColumn: "1"
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
            columnsCount: 5
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    biopsychosocial: {
      pageTitle: "Biopsychosocial assessment",
      pageDataKey: "biopsychosocial",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a biopsychosocial assessment",
          tableCells: [
            {
              elementKey: "name",
              fqn: "biopsychosocial.table.name",
              inputType: "text",
              label: "Name",
              tableColumn: "1",
              formCss: "user_name",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table"
            },
            {
              elementKey: "profession",
              fqn: "biopsychosocial.table.profession",
              inputType: "text",
              label: "Profession",
              tableColumn: "2",
              formCss: "user_pro",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table"
            },
            {
              elementKey: "day",
              fqn: "biopsychosocial.table.day",
              inputType: "day",
              label: "Day",
              tableColumn: "3",
              formCss: "user_day",
              formColumn: "3",
              formRow: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table"
            },
            {
              elementKey: "time",
              fqn: "biopsychosocial.table.time",
              inputType: "time",
              label: "Time",
              tableColumn: "4",
              formCss: "user_time",
              formColumn: "4",
              formRow: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table"
            },
            {
              elementKey: "dvLabel",
              fqn: "biopsychosocial.table.dvLabel",
              inputType: "form-label",
              label: "From our experience in the hospital, we know that domestic violence can be a problem. Is this a factor in your life?",
              tableColumn: "5",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "domesticViolence",
              fqn: "biopsychosocial.table.domesticViolence",
              inputType: "select",
              label: "Domestic",
              tableColumn: "6",
              formCss: "is-one-third",
              formColumn: "2",
              formRow: "2",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              options: [
                {
                  text: "didn\'t ask"
                },
                {
                  text: "yes"
                },
                {
                  text: "no"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "rcLabel",
              fqn: "biopsychosocial.table.rcLabel",
              inputType: "form-label",
              label: "Would you like to speak to a social worker?",
              tableColumn: "7",
              formColumn: "1",
              formRow: "3",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "requestContact",
              fqn: "biopsychosocial.table.requestContact",
              inputType: "select",
              label: "Request contact",
              tableColumn: "8",
              formCss: "is-one-third",
              formColumn: "2",
              formRow: "3",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              options: [
                {
                  text: "didn\'t ask"
                },
                {
                  text: "yes"
                },
                {
                  text: "no"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "calm",
              fqn: "biopsychosocial.table.behaviour.calm",
              inputType: "checkbox",
              label: "Calm",
              tableColumn: "9",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.behaviour",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "cooperative",
              fqn: "biopsychosocial.table.behaviour.cooperative",
              inputType: "checkbox",
              label: "Cooperative",
              tableColumn: "10",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.behaviour",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "agitated",
              fqn: "biopsychosocial.table.behaviour.agitated",
              inputType: "checkbox",
              label: "Agitated",
              tableColumn: "11",
              fsetRow: "3",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.behaviour",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "flat",
              fqn: "biopsychosocial.table.behaviour.flat",
              inputType: "checkbox",
              label: "Flat affect",
              tableColumn: "12",
              fsetRow: "4",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.behaviour",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "threatening",
              fqn: "biopsychosocial.table.behaviour.threatening",
              inputType: "checkbox",
              label: "Threatening",
              tableColumn: "13",
              fsetRow: "5",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.behaviour",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "agressive",
              fqn: "biopsychosocial.table.behaviour.agressive",
              inputType: "checkbox",
              label: "Physically agressive",
              tableColumn: "14",
              fsetRow: "6",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.behaviour",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "uncommunicative",
              fqn: "biopsychosocial.table.behaviour.uncommunicative",
              inputType: "checkbox",
              label: "Uncommunicative",
              tableColumn: "15",
              fsetRow: "7",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.behaviour",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "none",
              fqn: "biopsychosocial.table.hallucinations.none",
              inputType: "checkbox",
              label: "None",
              tableColumn: "16",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.hallucinations",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "visual",
              fqn: "biopsychosocial.table.hallucinations.visual",
              inputType: "checkbox",
              label: "Visual",
              tableColumn: "17",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.hallucinations",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "auditory",
              fqn: "biopsychosocial.table.hallucinations.auditory",
              inputType: "checkbox",
              label: "Auditory",
              tableColumn: "18",
              fsetRow: "3",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.hallucinations",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "olafactory",
              fqn: "biopsychosocial.table.hallucinations.olafactory",
              inputType: "checkbox",
              label: "Olafactory",
              tableColumn: "19",
              fsetRow: "4",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.hallucinations",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "suicidal",
              fqn: "biopsychosocial.table.state.suicidal",
              inputType: "select",
              label: "Suicidal",
              tableColumn: "20",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.state",
              level2Key: "table",
              page: "Biopsychosocial assessment",
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
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "homicidal",
              fqn: "biopsychosocial.table.state.homicidal",
              inputType: "select",
              label: "Homicidal",
              tableColumn: "21",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.state",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              options: [
                {
                  text: "None"
                },
                {
                  text: "Ideation"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "speech",
              fqn: "biopsychosocial.table.state.speech",
              inputType: "select",
              label: "Speech",
              tableColumn: "22",
              fsetRow: "3",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.state",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              options: [
                {
                  text: "Clear and coherent"
                },
                {
                  text: "Other"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "hygieneGrooming",
              fqn: "biopsychosocial.table.hygiene.hygieneGrooming",
              inputType: "select",
              label: "Hygiene",
              tableColumn: "23",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.hygiene",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              options: [
                {
                  text: "Good"
                },
                {
                  text: "Requires attention"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "hygieneComments",
              fqn: "biopsychosocial.table.hygiene.hygieneComments",
              inputType: "text",
              label: "Comments",
              tableColumn: "24",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.hygiene",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "supportPerson",
              fqn: "biopsychosocial.table.support.supportPerson",
              inputType: "text",
              label: "Support person",
              tableColumn: "25",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.support",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "supportComments",
              fqn: "biopsychosocial.table.support.supportComments",
              inputType: "textarea",
              label: "Comments",
              tableColumn: "26",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.support",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "securityPolicePresent",
              fqn: "biopsychosocial.table.security.securityPolicePresent",
              inputType: "text",
              label: "Security/police present",
              tableColumn: "27",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.security",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "securityComments",
              fqn: "biopsychosocial.table.security.securityComments",
              inputType: "textarea",
              label: "Comments",
              tableColumn: "28",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.security",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "patientRestrained",
              fqn: "biopsychosocial.table.restraint.patientRestrained",
              inputType: "select",
              label: "Patient restrained",
              tableColumn: "29",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.restraint",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              options: [
                {
                  text: "yes"
                },
                {
                  text: "no"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "restraintDay",
              fqn: "biopsychosocial.table.restraint.restraintDay",
              inputType: "day",
              label: "Day",
              tableColumn: "30",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.restraint",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "restraintTime",
              fqn: "biopsychosocial.table.restraint.restraintTime",
              inputType: "time",
              label: "Time",
              tableColumn: "31",
              fsetRow: "3",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.restraint",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "restraintComments",
              fqn: "biopsychosocial.table.restraint.restraintComments",
              inputType: "textarea",
              label: "Comments",
              tableColumn: "32",
              fsetRow: "4",
              fsetCol: "1",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table.restraint",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "hygiene",
              fqn: "biopsychosocial.table.hygiene",
              inputType: "fieldset",
              label: "Hygiene and grooming",
              formCss: "is-one-third",
              formColumn: "1",
              formRow: "5",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              containerType: "fieldset",
              containerKey: "hygiene",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "security",
              fqn: "biopsychosocial.table.security",
              inputType: "fieldset",
              label: "Security",
              formColumn: "2",
              formRow: "6",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              containerType: "fieldset",
              containerKey: "security",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "state",
              fqn: "biopsychosocial.table.state",
              inputType: "fieldset",
              label: "State",
              formColumn: "3",
              formRow: "4",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              containerType: "fieldset",
              containerKey: "state",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "generalComments",
              fqn: "biopsychosocial.table.generalComments",
              inputType: "textarea",
              label: "General comments",
              tableColumn: "33",
              formColumn: "1",
              formRow: "7",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              tableKey: "table"
            },
            {
              elementKey: "support",
              fqn: "biopsychosocial.table.support",
              inputType: "fieldset",
              label: "Support",
              formColumn: "1",
              formRow: "6",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              containerType: "fieldset",
              containerKey: "support",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "behaviour",
              fqn: "biopsychosocial.table.behaviour",
              inputType: "fieldset",
              label: "Behaviour",
              formColumn: "1",
              formRow: "4",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              containerType: "fieldset",
              containerKey: "behaviour",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "restraint",
              fqn: "biopsychosocial.table.restraint",
              inputType: "fieldset",
              label: "Restraint",
              formColumn: "3",
              formRow: "6",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              containerType: "fieldset",
              containerKey: "restraint",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "hallucinations",
              fqn: "biopsychosocial.table.hallucinations",
              inputType: "fieldset",
              label: "Hallucinations",
              formColumn: "2",
              formRow: "4",
              pageDataKey: "biopsychosocial",
              dataParent: "biopsychosocial.table",
              level2Key: "table",
              page: "Biopsychosocial assessment",
              containerType: "fieldset",
              containerKey: "hallucinations",
              tableCss: "hide-table-element",
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
                    fqn: "biopsychosocial.table.name",
                    inputType: "text",
                    label: "Name",
                    tableColumn: "1",
                    formCss: "user_name",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "biopsychosocial",
                    dataParent: "biopsychosocial.table",
                    level2Key: "table",
                    page: "Biopsychosocial assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    fqn: "biopsychosocial.table.profession",
                    inputType: "text",
                    label: "Profession",
                    tableColumn: "2",
                    formCss: "user_pro",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "biopsychosocial",
                    dataParent: "biopsychosocial.table",
                    level2Key: "table",
                    page: "Biopsychosocial assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    fqn: "biopsychosocial.table.day",
                    inputType: "day",
                    label: "Day",
                    tableColumn: "3",
                    formCss: "user_day",
                    formColumn: "3",
                    formRow: "1",
                    pageDataKey: "biopsychosocial",
                    dataParent: "biopsychosocial.table",
                    level2Key: "table",
                    page: "Biopsychosocial assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    fqn: "biopsychosocial.table.time",
                    inputType: "time",
                    label: "Time",
                    tableColumn: "4",
                    formCss: "user_time",
                    formColumn: "4",
                    formRow: "1",
                    pageDataKey: "biopsychosocial",
                    dataParent: "biopsychosocial.table",
                    level2Key: "table",
                    page: "Biopsychosocial assessment",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "dvLabel",
                    fqn: "biopsychosocial.table.dvLabel",
                    inputType: "form-label",
                    label: "From our experience in the hospital, we know that domestic violence can be a problem. Is this a factor in your life?",
                    tableColumn: "5",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "biopsychosocial",
                    dataParent: "biopsychosocial.table",
                    level2Key: "table",
                    page: "Biopsychosocial assessment",
                    tableCss: "hide-table-element",
                    tableKey: "table"
                  },
                  {
                    elementKey: "domesticViolence",
                    fqn: "biopsychosocial.table.domesticViolence",
                    inputType: "select",
                    label: "Domestic",
                    tableColumn: "6",
                    formCss: "is-one-third",
                    formColumn: "2",
                    formRow: "2",
                    pageDataKey: "biopsychosocial",
                    dataParent: "biopsychosocial.table",
                    level2Key: "table",
                    page: "Biopsychosocial assessment",
                    options: [
                      {
                        text: "didn\'t ask"
                      },
                      {
                        text: "yes"
                      },
                      {
                        text: "no"
                      }
                    ],
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "rcLabel",
                    fqn: "biopsychosocial.table.rcLabel",
                    inputType: "form-label",
                    label: "Would you like to speak to a social worker?",
                    tableColumn: "7",
                    formColumn: "1",
                    formRow: "3",
                    pageDataKey: "biopsychosocial",
                    dataParent: "biopsychosocial.table",
                    level2Key: "table",
                    page: "Biopsychosocial assessment",
                    tableCss: "hide-table-element",
                    tableKey: "table"
                  },
                  {
                    elementKey: "requestContact",
                    fqn: "biopsychosocial.table.requestContact",
                    inputType: "select",
                    label: "Request contact",
                    tableColumn: "8",
                    formCss: "is-one-third",
                    formColumn: "2",
                    formRow: "3",
                    pageDataKey: "biopsychosocial",
                    dataParent: "biopsychosocial.table",
                    level2Key: "table",
                    page: "Biopsychosocial assessment",
                    options: [
                      {
                        text: "didn\'t ask"
                      },
                      {
                        text: "yes"
                      },
                      {
                        text: "no"
                      }
                    ],
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    elementKey: "behaviour",
                    fqn: "biopsychosocial.table.behaviour",
                    inputType: "fieldset",
                    label: "Behaviour",
                    formColumn: "1",
                    formRow: "4",
                    pageDataKey: "biopsychosocial",
                    dataParent: "biopsychosocial.table",
                    level2Key: "table",
                    page: "Biopsychosocial assessment",
                    containerType: "fieldset",
                    containerKey: "behaviour",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "calm",
                              fqn: "biopsychosocial.table.behaviour.calm",
                              inputType: "checkbox",
                              label: "Calm",
                              tableColumn: "9",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.behaviour",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "cooperative",
                              fqn: "biopsychosocial.table.behaviour.cooperative",
                              inputType: "checkbox",
                              label: "Cooperative",
                              tableColumn: "10",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.behaviour",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "agitated",
                              fqn: "biopsychosocial.table.behaviour.agitated",
                              inputType: "checkbox",
                              label: "Agitated",
                              tableColumn: "11",
                              fsetRow: "3",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.behaviour",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "flat",
                              fqn: "biopsychosocial.table.behaviour.flat",
                              inputType: "checkbox",
                              label: "Flat affect",
                              tableColumn: "12",
                              fsetRow: "4",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.behaviour",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "threatening",
                              fqn: "biopsychosocial.table.behaviour.threatening",
                              inputType: "checkbox",
                              label: "Threatening",
                              tableColumn: "13",
                              fsetRow: "5",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.behaviour",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              elementKey: "agressive",
                              fqn: "biopsychosocial.table.behaviour.agressive",
                              inputType: "checkbox",
                              label: "Physically agressive",
                              tableColumn: "14",
                              fsetRow: "6",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.behaviour",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "7",
                          elements: [
                            {
                              elementKey: "uncommunicative",
                              fqn: "biopsychosocial.table.behaviour.uncommunicative",
                              inputType: "checkbox",
                              label: "Uncommunicative",
                              tableColumn: "15",
                              fsetRow: "7",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.behaviour",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
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
                    elementKey: "hallucinations",
                    fqn: "biopsychosocial.table.hallucinations",
                    inputType: "fieldset",
                    label: "Hallucinations",
                    formColumn: "2",
                    formRow: "4",
                    pageDataKey: "biopsychosocial",
                    dataParent: "biopsychosocial.table",
                    level2Key: "table",
                    page: "Biopsychosocial assessment",
                    containerType: "fieldset",
                    containerKey: "hallucinations",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "none",
                              fqn: "biopsychosocial.table.hallucinations.none",
                              inputType: "checkbox",
                              label: "None",
                              tableColumn: "16",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.hallucinations",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "visual",
                              fqn: "biopsychosocial.table.hallucinations.visual",
                              inputType: "checkbox",
                              label: "Visual",
                              tableColumn: "17",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.hallucinations",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "auditory",
                              fqn: "biopsychosocial.table.hallucinations.auditory",
                              inputType: "checkbox",
                              label: "Auditory",
                              tableColumn: "18",
                              fsetRow: "3",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.hallucinations",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "olafactory",
                              fqn: "biopsychosocial.table.hallucinations.olafactory",
                              inputType: "checkbox",
                              label: "Olafactory",
                              tableColumn: "19",
                              fsetRow: "4",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.hallucinations",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
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
                    elementKey: "state",
                    fqn: "biopsychosocial.table.state",
                    inputType: "fieldset",
                    label: "State",
                    formColumn: "3",
                    formRow: "4",
                    pageDataKey: "biopsychosocial",
                    dataParent: "biopsychosocial.table",
                    level2Key: "table",
                    page: "Biopsychosocial assessment",
                    containerType: "fieldset",
                    containerKey: "state",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "suicidal",
                              fqn: "biopsychosocial.table.state.suicidal",
                              inputType: "select",
                              label: "Suicidal",
                              tableColumn: "20",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.state",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
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
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "homicidal",
                              fqn: "biopsychosocial.table.state.homicidal",
                              inputType: "select",
                              label: "Homicidal",
                              tableColumn: "21",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.state",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
                              options: [
                                {
                                  text: "None"
                                },
                                {
                                  text: "Ideation"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "speech",
                              fqn: "biopsychosocial.table.state.speech",
                              inputType: "select",
                              label: "Speech",
                              tableColumn: "22",
                              fsetRow: "3",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.state",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
                              options: [
                                {
                                  text: "Clear and coherent"
                                },
                                {
                                  text: "Other"
                                }
                              ],
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
                    elementKey: "hygiene",
                    fqn: "biopsychosocial.table.hygiene",
                    inputType: "fieldset",
                    label: "Hygiene and grooming",
                    formCss: "is-one-third",
                    formColumn: "1",
                    formRow: "5",
                    pageDataKey: "biopsychosocial",
                    dataParent: "biopsychosocial.table",
                    level2Key: "table",
                    page: "Biopsychosocial assessment",
                    containerType: "fieldset",
                    containerKey: "hygiene",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "hygieneGrooming",
                              fqn: "biopsychosocial.table.hygiene.hygieneGrooming",
                              inputType: "select",
                              label: "Hygiene",
                              tableColumn: "23",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.hygiene",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
                              options: [
                                {
                                  text: "Good"
                                },
                                {
                                  text: "Requires attention"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "hygieneComments",
                              fqn: "biopsychosocial.table.hygiene.hygieneComments",
                              inputType: "text",
                              label: "Comments",
                              tableColumn: "24",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.hygiene",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
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
                formRow: "6",
                elements: [
                  {
                    elementKey: "support",
                    fqn: "biopsychosocial.table.support",
                    inputType: "fieldset",
                    label: "Support",
                    formColumn: "1",
                    formRow: "6",
                    pageDataKey: "biopsychosocial",
                    dataParent: "biopsychosocial.table",
                    level2Key: "table",
                    page: "Biopsychosocial assessment",
                    containerType: "fieldset",
                    containerKey: "support",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "supportPerson",
                              fqn: "biopsychosocial.table.support.supportPerson",
                              inputType: "text",
                              label: "Support person",
                              tableColumn: "25",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.support",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "supportComments",
                              fqn: "biopsychosocial.table.support.supportComments",
                              inputType: "textarea",
                              label: "Comments",
                              tableColumn: "26",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.support",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
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
                    elementKey: "security",
                    fqn: "biopsychosocial.table.security",
                    inputType: "fieldset",
                    label: "Security",
                    formColumn: "2",
                    formRow: "6",
                    pageDataKey: "biopsychosocial",
                    dataParent: "biopsychosocial.table",
                    level2Key: "table",
                    page: "Biopsychosocial assessment",
                    containerType: "fieldset",
                    containerKey: "security",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "securityPolicePresent",
                              fqn: "biopsychosocial.table.security.securityPolicePresent",
                              inputType: "text",
                              label: "Security/police present",
                              tableColumn: "27",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.security",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "securityComments",
                              fqn: "biopsychosocial.table.security.securityComments",
                              inputType: "textarea",
                              label: "Comments",
                              tableColumn: "28",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.security",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
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
                    elementKey: "restraint",
                    fqn: "biopsychosocial.table.restraint",
                    inputType: "fieldset",
                    label: "Restraint",
                    formColumn: "3",
                    formRow: "6",
                    pageDataKey: "biopsychosocial",
                    dataParent: "biopsychosocial.table",
                    level2Key: "table",
                    page: "Biopsychosocial assessment",
                    containerType: "fieldset",
                    containerKey: "restraint",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "patientRestrained",
                              fqn: "biopsychosocial.table.restraint.patientRestrained",
                              inputType: "select",
                              label: "Patient restrained",
                              tableColumn: "29",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.restraint",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
                              options: [
                                {
                                  text: "yes"
                                },
                                {
                                  text: "no"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "restraintDay",
                              fqn: "biopsychosocial.table.restraint.restraintDay",
                              inputType: "day",
                              label: "Day",
                              tableColumn: "30",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.restraint",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "restraintTime",
                              fqn: "biopsychosocial.table.restraint.restraintTime",
                              inputType: "time",
                              label: "Time",
                              tableColumn: "31",
                              fsetRow: "3",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.restraint",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "restraintComments",
                              fqn: "biopsychosocial.table.restraint.restraintComments",
                              inputType: "textarea",
                              label: "Comments",
                              tableColumn: "32",
                              fsetRow: "4",
                              fsetCol: "1",
                              pageDataKey: "biopsychosocial",
                              dataParent: "biopsychosocial.table.restraint",
                              level2Key: "table",
                              page: "Biopsychosocial assessment",
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
                formRow: "7",
                elements: [
                  {
                    elementKey: "generalComments",
                    fqn: "biopsychosocial.table.generalComments",
                    inputType: "textarea",
                    label: "General comments",
                    tableColumn: "33",
                    formColumn: "1",
                    formRow: "7",
                    pageDataKey: "biopsychosocial",
                    dataParent: "biopsychosocial.table",
                    level2Key: "table",
                    page: "Biopsychosocial assessment",
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
    nonmedOrders: {
      pageTitle: "Orders",
      pageDataKey: "nonmedOrders",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add an order",
          tableCells: [
            {
              elementKey: "name",
              fqn: "nonmedOrders.table.name",
              inputType: "text",
              label: "Name",
              tableColumn: "1",
              formCss: "user_name",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "nonmedOrders",
              dataParent: "nonmedOrders.table",
              level2Key: "table",
              page: "Orders",
              tableKey: "table"
            },
            {
              elementKey: "profession",
              fqn: "nonmedOrders.table.profession",
              inputType: "text",
              label: "Profession",
              tableColumn: "2",
              formCss: "user_pro",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "nonmedOrders",
              dataParent: "nonmedOrders.table",
              level2Key: "table",
              page: "Orders",
              tableKey: "table"
            },
            {
              elementKey: "day",
              fqn: "nonmedOrders.table.day",
              inputType: "day",
              label: "Day",
              tableColumn: "3",
              formCss: "user_day",
              formColumn: "3",
              formRow: "1",
              pageDataKey: "nonmedOrders",
              dataParent: "nonmedOrders.table",
              level2Key: "table",
              page: "Orders",
              tableKey: "table"
            },
            {
              elementKey: "time",
              fqn: "nonmedOrders.table.time",
              inputType: "time",
              label: "Time",
              tableColumn: "4",
              formCss: "user_time",
              formColumn: "4",
              formRow: "1",
              pageDataKey: "nonmedOrders",
              dataParent: "nonmedOrders.table",
              level2Key: "table",
              page: "Orders",
              tableKey: "table"
            },
            {
              elementKey: "order",
              fqn: "nonmedOrders.table.order",
              inputType: "text",
              label: "Order",
              tableColumn: "5",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "nonmedOrders",
              dataParent: "nonmedOrders.table",
              level2Key: "table",
              page: "Orders",
              tableKey: "table"
            },
            {
              elementKey: "orderedBy",
              fqn: "nonmedOrders.table.orderedBy",
              inputType: "text",
              label: "Ordered by",
              tableColumn: "6",
              formColumn: "2",
              formRow: "2",
              pageDataKey: "nonmedOrders",
              dataParent: "nonmedOrders.table",
              level2Key: "table",
              page: "Orders",
              mandatory: "If order is filled, this is mandatory",
              tableKey: "table"
            },
            {
              elementKey: "dayOfReferral",
              fqn: "nonmedOrders.table.dayOfReferral",
              inputType: "day",
              label: "Day of referral",
              tableColumn: "7",
              formColumn: "3",
              formRow: "2",
              pageDataKey: "nonmedOrders",
              dataParent: "nonmedOrders.table",
              level2Key: "table",
              page: "Orders",
              mandatory: "?",
              tableKey: "table"
            },
            {
              elementKey: "details",
              fqn: "nonmedOrders.table.details",
              inputType: "textarea",
              label: "Details",
              tableColumn: "8",
              formColumn: "4",
              formRow: "2",
              pageDataKey: "nonmedOrders",
              dataParent: "nonmedOrders.table",
              level2Key: "table",
              page: "Orders",
              mandatory: "?",
              tableKey: "table"
            },
            {
              elementKey: "startDay",
              fqn: "nonmedOrders.table.startDay",
              inputType: "day",
              label: "Start day",
              tableColumn: "9",
              formColumn: "1",
              formRow: "3",
              pageDataKey: "nonmedOrders",
              dataParent: "nonmedOrders.table",
              level2Key: "table",
              page: "Orders",
              mandatory: "If order is filled, this is mandatory",
              tableKey: "table"
            },
            {
              elementKey: "startTime",
              fqn: "nonmedOrders.table.startTime",
              inputType: "time",
              label: "Start time",
              tableColumn: "10",
              formColumn: "2",
              formRow: "3",
              pageDataKey: "nonmedOrders",
              dataParent: "nonmedOrders.table",
              level2Key: "table",
              page: "Orders",
              mandatory: "?",
              tableKey: "table"
            },
            {
              elementKey: "startTime",
              fqn: "nonmedOrders.table.startTime",
              inputType: "day",
              label: "End day",
              tableColumn: "11",
              formColumn: "3",
              formRow: "3",
              pageDataKey: "nonmedOrders",
              dataParent: "nonmedOrders.table",
              level2Key: "table",
              page: "Orders",
              mandatory: "?"
            },
            {
              elementKey: "endTime",
              fqn: "nonmedOrders.table.endTime",
              inputType: "time",
              label: "End time",
              tableColumn: "12",
              formColumn: "4",
              formRow: "3",
              pageDataKey: "nonmedOrders",
              dataParent: "nonmedOrders.table",
              level2Key: "table",
              page: "Orders",
              mandatory: "?",
              tableKey: "table"
            },
            {
              elementKey: "status",
              fqn: "nonmedOrders.table.status",
              inputType: "select",
              label: "Status",
              tableColumn: "13",
              formColumn: "1",
              formRow: "4",
              pageDataKey: "nonmedOrders",
              dataParent: "nonmedOrders.table",
              level2Key: "table",
              page: "Orders",
              mandatory: "?",
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
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "reconciliationComplete",
              fqn: "nonmedOrders.table.reconciliationComplete",
              inputType: "checkbox",
              label: "Reconciliation complete",
              tableColumn: "13",
              formColumn: "2",
              formRow: "4",
              pageDataKey: "nonmedOrders",
              dataParent: "nonmedOrders.table",
              level2Key: "table",
              page: "Orders",
              tableKey: "table"
            },
            {
              elementKey: "comment",
              fqn: "nonmedOrders.table.comment",
              inputType: "textarea",
              label: "Comment",
              tableColumn: "14",
              formColumn: "1",
              formRow: "5",
              pageDataKey: "nonmedOrders",
              dataParent: "nonmedOrders.table",
              level2Key: "table",
              page: "Orders",
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
                    fqn: "nonmedOrders.table.name",
                    inputType: "text",
                    label: "Name",
                    tableColumn: "1",
                    formCss: "user_name",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "nonmedOrders",
                    dataParent: "nonmedOrders.table",
                    level2Key: "table",
                    page: "Orders",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    fqn: "nonmedOrders.table.profession",
                    inputType: "text",
                    label: "Profession",
                    tableColumn: "2",
                    formCss: "user_pro",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "nonmedOrders",
                    dataParent: "nonmedOrders.table",
                    level2Key: "table",
                    page: "Orders",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    fqn: "nonmedOrders.table.day",
                    inputType: "day",
                    label: "Day",
                    tableColumn: "3",
                    formCss: "user_day",
                    formColumn: "3",
                    formRow: "1",
                    pageDataKey: "nonmedOrders",
                    dataParent: "nonmedOrders.table",
                    level2Key: "table",
                    page: "Orders",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    fqn: "nonmedOrders.table.time",
                    inputType: "time",
                    label: "Time",
                    tableColumn: "4",
                    formCss: "user_time",
                    formColumn: "4",
                    formRow: "1",
                    pageDataKey: "nonmedOrders",
                    dataParent: "nonmedOrders.table",
                    level2Key: "table",
                    page: "Orders",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "order",
                    fqn: "nonmedOrders.table.order",
                    inputType: "text",
                    label: "Order",
                    tableColumn: "5",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "nonmedOrders",
                    dataParent: "nonmedOrders.table",
                    level2Key: "table",
                    page: "Orders",
                    tableKey: "table"
                  },
                  {
                    elementKey: "orderedBy",
                    fqn: "nonmedOrders.table.orderedBy",
                    inputType: "text",
                    label: "Ordered by",
                    tableColumn: "6",
                    formColumn: "2",
                    formRow: "2",
                    pageDataKey: "nonmedOrders",
                    dataParent: "nonmedOrders.table",
                    level2Key: "table",
                    page: "Orders",
                    mandatory: "If order is filled, this is mandatory",
                    tableKey: "table"
                  },
                  {
                    elementKey: "dayOfReferral",
                    fqn: "nonmedOrders.table.dayOfReferral",
                    inputType: "day",
                    label: "Day of referral",
                    tableColumn: "7",
                    formColumn: "3",
                    formRow: "2",
                    pageDataKey: "nonmedOrders",
                    dataParent: "nonmedOrders.table",
                    level2Key: "table",
                    page: "Orders",
                    mandatory: "?",
                    tableKey: "table"
                  },
                  {
                    elementKey: "details",
                    fqn: "nonmedOrders.table.details",
                    inputType: "textarea",
                    label: "Details",
                    tableColumn: "8",
                    formColumn: "4",
                    formRow: "2",
                    pageDataKey: "nonmedOrders",
                    dataParent: "nonmedOrders.table",
                    level2Key: "table",
                    page: "Orders",
                    mandatory: "?",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "startDay",
                    fqn: "nonmedOrders.table.startDay",
                    inputType: "day",
                    label: "Start day",
                    tableColumn: "9",
                    formColumn: "1",
                    formRow: "3",
                    pageDataKey: "nonmedOrders",
                    dataParent: "nonmedOrders.table",
                    level2Key: "table",
                    page: "Orders",
                    mandatory: "If order is filled, this is mandatory",
                    tableKey: "table"
                  },
                  {
                    elementKey: "startTime",
                    fqn: "nonmedOrders.table.startTime",
                    inputType: "time",
                    label: "Start time",
                    tableColumn: "10",
                    formColumn: "2",
                    formRow: "3",
                    pageDataKey: "nonmedOrders",
                    dataParent: "nonmedOrders.table",
                    level2Key: "table",
                    page: "Orders",
                    mandatory: "?",
                    tableKey: "table"
                  },
                  {
                    elementKey: "startTime",
                    fqn: "nonmedOrders.table.startTime",
                    inputType: "time",
                    label: "Start time",
                    tableColumn: "10",
                    formColumn: "2",
                    formRow: "3",
                    pageDataKey: "nonmedOrders",
                    dataParent: "nonmedOrders.table",
                    level2Key: "table",
                    page: "Orders",
                    mandatory: "?",
                    tableKey: "table"
                  },
                  {
                    elementKey: "endTime",
                    fqn: "nonmedOrders.table.endTime",
                    inputType: "time",
                    label: "End time",
                    tableColumn: "12",
                    formColumn: "4",
                    formRow: "3",
                    pageDataKey: "nonmedOrders",
                    dataParent: "nonmedOrders.table",
                    level2Key: "table",
                    page: "Orders",
                    mandatory: "?",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    elementKey: "status",
                    fqn: "nonmedOrders.table.status",
                    inputType: "select",
                    label: "Status",
                    tableColumn: "13",
                    formColumn: "1",
                    formRow: "4",
                    pageDataKey: "nonmedOrders",
                    dataParent: "nonmedOrders.table",
                    level2Key: "table",
                    page: "Orders",
                    mandatory: "?",
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
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "reconciliationComplete",
                    fqn: "nonmedOrders.table.reconciliationComplete",
                    inputType: "checkbox",
                    label: "Reconciliation complete",
                    tableColumn: "13",
                    formColumn: "2",
                    formRow: "4",
                    pageDataKey: "nonmedOrders",
                    dataParent: "nonmedOrders.table",
                    level2Key: "table",
                    page: "Orders",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "5",
                elements: [
                  {
                    elementKey: "comment",
                    fqn: "nonmedOrders.table.comment",
                    inputType: "textarea",
                    label: "Comment",
                    tableColumn: "14",
                    formColumn: "1",
                    formRow: "5",
                    pageDataKey: "nonmedOrders",
                    dataParent: "nonmedOrders.table",
                    level2Key: "table",
                    page: "Orders",
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
    referrals: {
      pageTitle: "Referrals to other disciplines",
      pageDataKey: "referrals",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a referral",
          tableCells: [
            {
              elementKey: "name",
              fqn: "referrals.table.name",
              inputType: "text",
              label: "Name",
              tableColumn: "1",
              formCss: "user_name",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "referrals",
              dataParent: "referrals.table",
              level2Key: "table",
              page: "Referrals",
              tableKey: "table"
            },
            {
              elementKey: "profession",
              fqn: "referrals.table.profession",
              inputType: "text",
              label: "Profession",
              tableColumn: "2",
              formCss: "user_pro",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "referrals",
              dataParent: "referrals.table",
              level2Key: "table",
              page: "Referrals",
              tableKey: "table"
            },
            {
              elementKey: "day",
              fqn: "referrals.table.day",
              inputType: "day",
              label: "Day",
              tableColumn: "3",
              formCss: "user_day",
              formColumn: "3",
              formRow: "1",
              pageDataKey: "referrals",
              dataParent: "referrals.table",
              level2Key: "table",
              page: "Referrals",
              tableKey: "table"
            },
            {
              elementKey: "time",
              fqn: "referrals.table.time",
              inputType: "time",
              label: "Time",
              tableColumn: "4",
              formCss: "user_time",
              formColumn: "4",
              formRow: "1",
              pageDataKey: "referrals",
              dataParent: "referrals.table",
              level2Key: "table",
              page: "Referrals",
              tableKey: "table"
            },
            {
              elementKey: "referralName",
              fqn: "referrals.table.referralName",
              inputType: "text",
              label: "Referral name",
              tableColumn: "5",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "referrals",
              dataParent: "referrals.table",
              level2Key: "table",
              page: "Referrals",
              tableKey: "table"
            },
            {
              elementKey: "referralProfession",
              fqn: "referrals.table.referralProfession",
              inputType: "text",
              label: "Referral profession",
              tableColumn: "6",
              formColumn: "2",
              formRow: "2",
              pageDataKey: "referrals",
              dataParent: "referrals.table",
              level2Key: "table",
              page: "Referrals",
              tableKey: "table"
            },
            {
              elementKey: "aSpacer",
              fqn: "referrals.table.aSpacer",
              inputType: "spacer",
              tableColumn: "7",
              formColumn: "3",
              formRow: "2",
              pageDataKey: "referrals",
              dataParent: "referrals.table",
              level2Key: "table",
              page: "Referrals",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "appointmentDate",
              fqn: "referrals.table.appointmentDate",
              inputType: "date",
              label: "Appointment date",
              tableColumn: "8",
              formColumn: "1",
              formRow: "3",
              pageDataKey: "referrals",
              dataParent: "referrals.table",
              level2Key: "table",
              page: "Referrals",
              tableKey: "table"
            },
            {
              elementKey: "appointmentTime",
              fqn: "referrals.table.appointmentTime",
              inputType: "time",
              label: "Appointment time",
              tableColumn: "9",
              formColumn: "2",
              formRow: "3",
              pageDataKey: "referrals",
              dataParent: "referrals.table",
              level2Key: "table",
              page: "Referrals",
              tableKey: "table"
            },
            {
              elementKey: "status",
              fqn: "referrals.table.status",
              inputType: "select",
              label: "Status",
              tableColumn: "10",
              formColumn: "3",
              formRow: "3",
              pageDataKey: "referrals",
              dataParent: "referrals.table",
              level2Key: "table",
              page: "Referrals",
              options: [
                {
                  text: "Active"
                },
                {
                  text: "Discharged"
                }
              ],
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
                    fqn: "referrals.table.name",
                    inputType: "text",
                    label: "Name",
                    tableColumn: "1",
                    formCss: "user_name",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "referrals",
                    dataParent: "referrals.table",
                    level2Key: "table",
                    page: "Referrals",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    fqn: "referrals.table.profession",
                    inputType: "text",
                    label: "Profession",
                    tableColumn: "2",
                    formCss: "user_pro",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "referrals",
                    dataParent: "referrals.table",
                    level2Key: "table",
                    page: "Referrals",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    fqn: "referrals.table.day",
                    inputType: "day",
                    label: "Day",
                    tableColumn: "3",
                    formCss: "user_day",
                    formColumn: "3",
                    formRow: "1",
                    pageDataKey: "referrals",
                    dataParent: "referrals.table",
                    level2Key: "table",
                    page: "Referrals",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    fqn: "referrals.table.time",
                    inputType: "time",
                    label: "Time",
                    tableColumn: "4",
                    formCss: "user_time",
                    formColumn: "4",
                    formRow: "1",
                    pageDataKey: "referrals",
                    dataParent: "referrals.table",
                    level2Key: "table",
                    page: "Referrals",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "referralName",
                    fqn: "referrals.table.referralName",
                    inputType: "text",
                    label: "Referral name",
                    tableColumn: "5",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "referrals",
                    dataParent: "referrals.table",
                    level2Key: "table",
                    page: "Referrals",
                    tableKey: "table"
                  },
                  {
                    elementKey: "referralProfession",
                    fqn: "referrals.table.referralProfession",
                    inputType: "text",
                    label: "Referral profession",
                    tableColumn: "6",
                    formColumn: "2",
                    formRow: "2",
                    pageDataKey: "referrals",
                    dataParent: "referrals.table",
                    level2Key: "table",
                    page: "Referrals",
                    tableKey: "table"
                  },
                  {
                    elementKey: "aSpacer",
                    fqn: "referrals.table.aSpacer",
                    inputType: "spacer",
                    tableColumn: "7",
                    formColumn: "3",
                    formRow: "2",
                    pageDataKey: "referrals",
                    dataParent: "referrals.table",
                    level2Key: "table",
                    page: "Referrals",
                    tableCss: "hide-table-element",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "appointmentDate",
                    fqn: "referrals.table.appointmentDate",
                    inputType: "date",
                    label: "Appointment date",
                    tableColumn: "8",
                    formColumn: "1",
                    formRow: "3",
                    pageDataKey: "referrals",
                    dataParent: "referrals.table",
                    level2Key: "table",
                    page: "Referrals",
                    tableKey: "table"
                  },
                  {
                    elementKey: "appointmentTime",
                    fqn: "referrals.table.appointmentTime",
                    inputType: "time",
                    label: "Appointment time",
                    tableColumn: "9",
                    formColumn: "2",
                    formRow: "3",
                    pageDataKey: "referrals",
                    dataParent: "referrals.table",
                    level2Key: "table",
                    page: "Referrals",
                    tableKey: "table"
                  },
                  {
                    elementKey: "status",
                    fqn: "referrals.table.status",
                    inputType: "select",
                    label: "Status",
                    tableColumn: "10",
                    formColumn: "3",
                    formRow: "3",
                    pageDataKey: "referrals",
                    dataParent: "referrals.table",
                    level2Key: "table",
                    page: "Referrals",
                    options: [
                      {
                        text: "Active"
                      },
                      {
                        text: "Discharged"
                      }
                    ],
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
    labRequisitions: {
      pageTitle: "Lab requisitions",
      pageDataKey: "labRequisitions",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a requisition",
          tableCells: [
            {
              elementKey: "name",
              fqn: "labRequisitions.table.name",
              inputType: "text",
              label: "Name",
              tableColumn: "1",
              formCss: "user_name",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "labRequisitions",
              dataParent: "labRequisitions.table",
              level2Key: "table",
              page: "LabRequisitions",
              tableKey: "table"
            },
            {
              elementKey: "profession",
              fqn: "labRequisitions.table.profession",
              inputType: "text",
              label: "Profession",
              tableColumn: "2",
              formCss: "user_pro",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "labRequisitions",
              dataParent: "labRequisitions.table",
              level2Key: "table",
              page: "LabRequisitions",
              tableKey: "table"
            },
            {
              elementKey: "day",
              fqn: "labRequisitions.table.day",
              inputType: "day",
              label: "Day",
              tableColumn: "3",
              formCss: "user_day",
              formColumn: "3",
              formRow: "1",
              pageDataKey: "labRequisitions",
              dataParent: "labRequisitions.table",
              level2Key: "table",
              page: "LabRequisitions",
              tableKey: "table"
            },
            {
              elementKey: "time",
              fqn: "labRequisitions.table.time",
              inputType: "time",
              label: "Time",
              tableColumn: "4",
              formCss: "user_time",
              formColumn: "4",
              formRow: "1",
              pageDataKey: "labRequisitions",
              dataParent: "labRequisitions.table",
              level2Key: "table",
              page: "LabRequisitions",
              tableKey: "table"
            },
            {
              elementKey: "requisition",
              fqn: "labRequisitions.table.requisition",
              inputType: "text",
              label: "Requisition",
              tableColumn: "5",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "labRequisitions",
              dataParent: "labRequisitions.table",
              level2Key: "table",
              page: "LabRequisitions",
              tableKey: "table"
            },
            {
              elementKey: "ordered",
              fqn: "labRequisitions.table.ordered",
              inputType: "text",
              label: "Ordered",
              tableColumn: "6",
              formColumn: "2",
              formRow: "2",
              pageDataKey: "labRequisitions",
              dataParent: "labRequisitions.table",
              level2Key: "table",
              page: "LabRequisitions",
              tableKey: "table"
            },
            {
              elementKey: "collected",
              fqn: "labRequisitions.table.collected",
              inputType: "text",
              label: "Collected",
              tableColumn: "7",
              formColumn: "3",
              formRow: "2",
              pageDataKey: "labRequisitions",
              dataParent: "labRequisitions.table",
              level2Key: "table",
              page: "LabRequisitions",
              tableKey: "table"
            },
            {
              elementKey: "report",
              fqn: "labRequisitions.table.report",
              inputType: "text",
              label: "Report",
              tableColumn: "8",
              formColumn: "1",
              formRow: "3",
              pageDataKey: "labRequisitions",
              dataParent: "labRequisitions.table",
              level2Key: "table",
              page: "LabRequisitions",
              tableKey: "table"
            },
            {
              elementKey: "status",
              fqn: "labRequisitions.table.status",
              inputType: "select",
              label: "Status",
              tableColumn: "9",
              formColumn: "2",
              formRow: "3",
              pageDataKey: "labRequisitions",
              dataParent: "labRequisitions.table",
              level2Key: "table",
              page: "LabRequisitions",
              options: [
                {
                  text: "Ordered"
                },
                {
                  text: "In progress"
                },
                {
                  text: "Pending"
                },
                {
                  text: "Complete"
                }
              ],
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
                    fqn: "labRequisitions.table.name",
                    inputType: "text",
                    label: "Name",
                    tableColumn: "1",
                    formCss: "user_name",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "labRequisitions",
                    dataParent: "labRequisitions.table",
                    level2Key: "table",
                    page: "LabRequisitions",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    fqn: "labRequisitions.table.profession",
                    inputType: "text",
                    label: "Profession",
                    tableColumn: "2",
                    formCss: "user_pro",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "labRequisitions",
                    dataParent: "labRequisitions.table",
                    level2Key: "table",
                    page: "LabRequisitions",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    fqn: "labRequisitions.table.day",
                    inputType: "day",
                    label: "Day",
                    tableColumn: "3",
                    formCss: "user_day",
                    formColumn: "3",
                    formRow: "1",
                    pageDataKey: "labRequisitions",
                    dataParent: "labRequisitions.table",
                    level2Key: "table",
                    page: "LabRequisitions",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    fqn: "labRequisitions.table.time",
                    inputType: "time",
                    label: "Time",
                    tableColumn: "4",
                    formCss: "user_time",
                    formColumn: "4",
                    formRow: "1",
                    pageDataKey: "labRequisitions",
                    dataParent: "labRequisitions.table",
                    level2Key: "table",
                    page: "LabRequisitions",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "requisition",
                    fqn: "labRequisitions.table.requisition",
                    inputType: "text",
                    label: "Requisition",
                    tableColumn: "5",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "labRequisitions",
                    dataParent: "labRequisitions.table",
                    level2Key: "table",
                    page: "LabRequisitions",
                    tableKey: "table"
                  },
                  {
                    elementKey: "ordered",
                    fqn: "labRequisitions.table.ordered",
                    inputType: "text",
                    label: "Ordered",
                    tableColumn: "6",
                    formColumn: "2",
                    formRow: "2",
                    pageDataKey: "labRequisitions",
                    dataParent: "labRequisitions.table",
                    level2Key: "table",
                    page: "LabRequisitions",
                    tableKey: "table"
                  },
                  {
                    elementKey: "collected",
                    fqn: "labRequisitions.table.collected",
                    inputType: "text",
                    label: "Collected",
                    tableColumn: "7",
                    formColumn: "3",
                    formRow: "2",
                    pageDataKey: "labRequisitions",
                    dataParent: "labRequisitions.table",
                    level2Key: "table",
                    page: "LabRequisitions",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "report",
                    fqn: "labRequisitions.table.report",
                    inputType: "text",
                    label: "Report",
                    tableColumn: "8",
                    formColumn: "1",
                    formRow: "3",
                    pageDataKey: "labRequisitions",
                    dataParent: "labRequisitions.table",
                    level2Key: "table",
                    page: "LabRequisitions",
                    tableKey: "table"
                  },
                  {
                    elementKey: "status",
                    fqn: "labRequisitions.table.status",
                    inputType: "select",
                    label: "Status",
                    tableColumn: "9",
                    formColumn: "2",
                    formRow: "3",
                    pageDataKey: "labRequisitions",
                    dataParent: "labRequisitions.table",
                    level2Key: "table",
                    page: "LabRequisitions",
                    options: [
                      {
                        text: "Ordered"
                      },
                      {
                        text: "In progress"
                      },
                      {
                        text: "Pending"
                      },
                      {
                        text: "Complete"
                      }
                    ],
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
    medicationOrders: {
      pageTitle: "Medication orders",
      pageDataKey: "medicationOrders",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a medication order",
          tableCells: [
            {
              elementKey: "name",
              fqn: "medicationOrders.table.name",
              inputType: "text",
              label: "Name",
              tableColumn: "1",
              formCss: "user_name",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "medicationOrders",
              dataParent: "medicationOrders.table",
              level2Key: "table",
              page: "Medication orders",
              tableKey: "table"
            },
            {
              elementKey: "profession",
              fqn: "medicationOrders.table.profession",
              inputType: "text",
              label: "Profession",
              tableColumn: "2",
              formCss: "user_pro",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "medicationOrders",
              dataParent: "medicationOrders.table",
              level2Key: "table",
              page: "Medication orders",
              tableKey: "table"
            },
            {
              elementKey: "day",
              fqn: "medicationOrders.table.day",
              inputType: "day",
              label: "Day",
              tableColumn: "3",
              formCss: "user_day",
              formColumn: "3",
              formRow: "1",
              pageDataKey: "medicationOrders",
              dataParent: "medicationOrders.table",
              level2Key: "table",
              page: "Medication orders",
              tableKey: "table"
            },
            {
              elementKey: "time",
              fqn: "medicationOrders.table.time",
              inputType: "time",
              label: "Time",
              tableColumn: "4",
              formCss: "user_time",
              formColumn: "4",
              formRow: "1",
              pageDataKey: "medicationOrders",
              dataParent: "medicationOrders.table",
              level2Key: "table",
              page: "Medication orders",
              tableKey: "table"
            },
            {
              elementKey: "medication",
              fqn: "medicationOrders.table.medication",
              inputType: "text",
              label: "Medication",
              tableColumn: "5",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "medicationOrders",
              dataParent: "medicationOrders.table",
              level2Key: "table",
              page: "Medication orders",
              tableKey: "table"
            },
            {
              elementKey: "dose",
              fqn: "medicationOrders.table.details.dose",
              inputType: "text",
              label: "Dose",
              tableColumn: "6",
              fsetRow: "1",
              pageDataKey: "medicationOrders",
              dataParent: "medicationOrders.table.details",
              level2Key: "table",
              page: "Medication orders",
              tableKey: "table"
            },
            {
              elementKey: "route",
              fqn: "medicationOrders.table.details.route",
              inputType: "text",
              label: "Route",
              tableColumn: "7",
              fsetRow: "2",
              pageDataKey: "medicationOrders",
              dataParent: "medicationOrders.table.details",
              level2Key: "table",
              page: "Medication orders",
              tableKey: "table"
            },
            {
              elementKey: "reason",
              fqn: "medicationOrders.table.details.reason",
              inputType: "text",
              label: "Reason",
              tableColumn: "8",
              fsetRow: "3",
              pageDataKey: "medicationOrders",
              dataParent: "medicationOrders.table.details",
              level2Key: "table",
              page: "Medication orders",
              tableKey: "table"
            },
            {
              elementKey: "details",
              fqn: "medicationOrders.table.details",
              inputType: "fieldset",
              formColumn: "1",
              formRow: "3",
              pageDataKey: "medicationOrders",
              dataParent: "medicationOrders.table",
              level2Key: "table",
              page: "Medication orders",
              containerType: "fieldset",
              containerKey: "details",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "scheduleType",
              fqn: "medicationOrders.table.schedule.scheduleType",
              inputType: "select",
              label: "Schedule Type",
              tableColumn: "9",
              fsetRow: "1",
              pageDataKey: "medicationOrders",
              dataParent: "medicationOrders.table.schedule",
              level2Key: "table",
              page: "Medication orders",
              helperText: "PRN = as needed",
              options: [
                {
                  text: "scheduled"
                },
                {
                  text: "PRN"
                },
                {
                  text: "once"
                },
                {
                  text: "stat"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "schedule",
              fqn: "medicationOrders.table.schedule",
              inputType: "fieldset",
              formColumn: "2",
              formRow: "3",
              pageDataKey: "medicationOrders",
              dataParent: "medicationOrders.table",
              level2Key: "table",
              page: "Medication orders",
              containerType: "fieldset",
              containerKey: "schedule",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "breakfast",
              fqn: "medicationOrders.table.schedule.breakfast",
              inputType: "checkbox",
              label: "With breakfast",
              tableColumn: "10",
              fsetRow: "2",
              pageDataKey: "medicationOrders",
              dataParent: "medicationOrders.table.schedule",
              level2Key: "table",
              page: "Medication orders",
              tableKey: "table"
            },
            {
              elementKey: "midmorning",
              fqn: "medicationOrders.table.schedule.midmorning",
              inputType: "checkbox",
              label: "Morning without food",
              tableColumn: "11",
              fsetRow: "3",
              pageDataKey: "medicationOrders",
              dataParent: "medicationOrders.table.schedule",
              level2Key: "table",
              page: "Medication orders",
              tableKey: "table"
            },
            {
              elementKey: "lunch",
              fqn: "medicationOrders.table.schedule.lunch",
              inputType: "checkbox",
              label: "With lunch",
              tableColumn: "12",
              fsetRow: "4",
              pageDataKey: "medicationOrders",
              dataParent: "medicationOrders.table.schedule",
              level2Key: "table",
              page: "Medication orders",
              tableKey: "table"
            },
            {
              elementKey: "midafternoon",
              fqn: "medicationOrders.table.schedule.midafternoon",
              inputType: "checkbox",
              label: "Mid afternoon without food",
              tableColumn: "13",
              fsetRow: "5",
              pageDataKey: "medicationOrders",
              dataParent: "medicationOrders.table.schedule",
              level2Key: "table",
              page: "Medication orders",
              tableKey: "table"
            },
            {
              elementKey: "dinner",
              fqn: "medicationOrders.table.schedule.dinner",
              inputType: "checkbox",
              label: "With dinner",
              tableColumn: "14",
              fsetRow: "6",
              pageDataKey: "medicationOrders",
              dataParent: "medicationOrders.table.schedule",
              level2Key: "table",
              page: "Medication orders",
              tableKey: "table"
            },
            {
              elementKey: "bedtime",
              fqn: "medicationOrders.table.bedtime",
              inputType: "checkbox",
              label: "At bedtime",
              tableColumn: "15",
              fsetRow: "7",
              pageDataKey: "medicationOrders",
              dataParent: "medicationOrders.table",
              level2Key: "table",
              page: "Medication orders",
              tableKey: "table"
            },
            {
              elementKey: "notes",
              fqn: "medicationOrders.table.notes",
              inputType: "textarea",
              label: "Notes",
              tableColumn: "16",
              formColumn: "1",
              formRow: "4",
              pageDataKey: "medicationOrders",
              dataParent: "medicationOrders.table",
              level2Key: "table",
              page: "Medication orders",
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
                    fqn: "medicationOrders.table.name",
                    inputType: "text",
                    label: "Name",
                    tableColumn: "1",
                    formCss: "user_name",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "medicationOrders",
                    dataParent: "medicationOrders.table",
                    level2Key: "table",
                    page: "Medication orders",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    fqn: "medicationOrders.table.profession",
                    inputType: "text",
                    label: "Profession",
                    tableColumn: "2",
                    formCss: "user_pro",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "medicationOrders",
                    dataParent: "medicationOrders.table",
                    level2Key: "table",
                    page: "Medication orders",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    fqn: "medicationOrders.table.day",
                    inputType: "day",
                    label: "Day",
                    tableColumn: "3",
                    formCss: "user_day",
                    formColumn: "3",
                    formRow: "1",
                    pageDataKey: "medicationOrders",
                    dataParent: "medicationOrders.table",
                    level2Key: "table",
                    page: "Medication orders",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    fqn: "medicationOrders.table.time",
                    inputType: "time",
                    label: "Time",
                    tableColumn: "4",
                    formCss: "user_time",
                    formColumn: "4",
                    formRow: "1",
                    pageDataKey: "medicationOrders",
                    dataParent: "medicationOrders.table",
                    level2Key: "table",
                    page: "Medication orders",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "medication",
                    fqn: "medicationOrders.table.medication",
                    inputType: "text",
                    label: "Medication",
                    tableColumn: "5",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "medicationOrders",
                    dataParent: "medicationOrders.table",
                    level2Key: "table",
                    page: "Medication orders",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "details",
                    fqn: "medicationOrders.table.details",
                    inputType: "fieldset",
                    formColumn: "1",
                    formRow: "3",
                    pageDataKey: "medicationOrders",
                    dataParent: "medicationOrders.table",
                    level2Key: "table",
                    page: "Medication orders",
                    containerType: "fieldset",
                    containerKey: "details",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "dose",
                              fqn: "medicationOrders.table.details.dose",
                              inputType: "text",
                              label: "Dose",
                              tableColumn: "6",
                              fsetRow: "1",
                              pageDataKey: "medicationOrders",
                              dataParent: "medicationOrders.table.details",
                              level2Key: "table",
                              page: "Medication orders",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "route",
                              fqn: "medicationOrders.table.details.route",
                              inputType: "text",
                              label: "Route",
                              tableColumn: "7",
                              fsetRow: "2",
                              pageDataKey: "medicationOrders",
                              dataParent: "medicationOrders.table.details",
                              level2Key: "table",
                              page: "Medication orders",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "reason",
                              fqn: "medicationOrders.table.details.reason",
                              inputType: "text",
                              label: "Reason",
                              tableColumn: "8",
                              fsetRow: "3",
                              pageDataKey: "medicationOrders",
                              dataParent: "medicationOrders.table.details",
                              level2Key: "table",
                              page: "Medication orders",
                              tableKey: "table"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "schedule",
                    fqn: "medicationOrders.table.schedule",
                    inputType: "fieldset",
                    formColumn: "2",
                    formRow: "3",
                    pageDataKey: "medicationOrders",
                    dataParent: "medicationOrders.table",
                    level2Key: "table",
                    page: "Medication orders",
                    containerType: "fieldset",
                    containerKey: "schedule",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "scheduleType",
                              fqn: "medicationOrders.table.schedule.scheduleType",
                              inputType: "select",
                              label: "Schedule Type",
                              tableColumn: "9",
                              fsetRow: "1",
                              pageDataKey: "medicationOrders",
                              dataParent: "medicationOrders.table.schedule",
                              level2Key: "table",
                              page: "Medication orders",
                              helperText: "PRN = as needed",
                              options: [
                                {
                                  text: "scheduled"
                                },
                                {
                                  text: "PRN"
                                },
                                {
                                  text: "once"
                                },
                                {
                                  text: "stat"
                                }
                              ],
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "breakfast",
                              fqn: "medicationOrders.table.schedule.breakfast",
                              inputType: "checkbox",
                              label: "With breakfast",
                              tableColumn: "10",
                              fsetRow: "2",
                              pageDataKey: "medicationOrders",
                              dataParent: "medicationOrders.table.schedule",
                              level2Key: "table",
                              page: "Medication orders",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "midmorning",
                              fqn: "medicationOrders.table.schedule.midmorning",
                              inputType: "checkbox",
                              label: "Morning without food",
                              tableColumn: "11",
                              fsetRow: "3",
                              pageDataKey: "medicationOrders",
                              dataParent: "medicationOrders.table.schedule",
                              level2Key: "table",
                              page: "Medication orders",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "lunch",
                              fqn: "medicationOrders.table.schedule.lunch",
                              inputType: "checkbox",
                              label: "With lunch",
                              tableColumn: "12",
                              fsetRow: "4",
                              pageDataKey: "medicationOrders",
                              dataParent: "medicationOrders.table.schedule",
                              level2Key: "table",
                              page: "Medication orders",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "midafternoon",
                              fqn: "medicationOrders.table.schedule.midafternoon",
                              inputType: "checkbox",
                              label: "Mid afternoon without food",
                              tableColumn: "13",
                              fsetRow: "5",
                              pageDataKey: "medicationOrders",
                              dataParent: "medicationOrders.table.schedule",
                              level2Key: "table",
                              page: "Medication orders",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              elementKey: "dinner",
                              fqn: "medicationOrders.table.schedule.dinner",
                              inputType: "checkbox",
                              label: "With dinner",
                              tableColumn: "14",
                              fsetRow: "6",
                              pageDataKey: "medicationOrders",
                              dataParent: "medicationOrders.table.schedule",
                              level2Key: "table",
                              page: "Medication orders",
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
                    elementKey: "notes",
                    fqn: "medicationOrders.table.notes",
                    inputType: "textarea",
                    label: "Notes",
                    tableColumn: "16",
                    formColumn: "1",
                    formRow: "4",
                    pageDataKey: "medicationOrders",
                    dataParent: "medicationOrders.table",
                    level2Key: "table",
                    page: "Medication orders",
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
    medAdminRec: {
      pageTitle: "Medication administration records",
      pageDataKey: "medAdminRec",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a MAR",
          tableCells: [
            {
              elementKey: "status",
              fqn: "medAdminRec.table.status",
              inputType: "select",
              label: "Status",
              tableColumn: "1",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "medAdminRec",
              dataParent: "medAdminRec.table",
              level2Key: "table",
              page: "Medication administration record",
              options: [
                {
                  text: "active"
                },
                {
                  text: "as needed"
                },
                {
                  text: "hold"
                },
                {
                  text: "discontinued"
                },
                {
                  text: ""
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "medication",
              fqn: "medAdminRec.table.medication",
              inputType: "text",
              label: "Medication",
              tableColumn: "2",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "medAdminRec",
              dataParent: "medAdminRec.table",
              level2Key: "table",
              page: "Medication administration record",
              helperText: "Medication-NL-(Medication name-NL-Dose-NL-Route-NL-Frequency-NL-Notes-NL-Prescriber)",
              tableKey: "table"
            },
            {
              elementKey: "yesterday",
              fqn: "medAdminRec.table.yesterday",
              inputType: "calculated",
              label: "Yesterday",
              tableColumn: "3",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "medAdminRec",
              dataParent: "medAdminRec.table",
              level2Key: "table",
              page: "Medication administration record",
              options: [
                {
                  text: "[Yesterday\'s day]"
                },
                {
                  text: "(Previous times)"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "todayPlan",
              fqn: "medAdminRec.table.todayPlan",
              inputType: "text",
              label: "Today plan",
              tableColumn: "4",
              formColumn: "2",
              formRow: "2",
              pageDataKey: "medAdminRec",
              dataParent: "medAdminRec.table",
              level2Key: "table",
              page: "Medication administration record",
              options: [
                {
                  text: "[Today\'s day] plan"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "todayGiven",
              fqn: "medAdminRec.table.todayGiven",
              inputType: "text",
              label: "Today given",
              tableColumn: "5",
              formColumn: "3",
              formRow: "2",
              pageDataKey: "medAdminRec",
              dataParent: "medAdminRec.table",
              level2Key: "table",
              page: "Medication administration record",
              options: [
                {
                  text: "[Today\'s day] given"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "administeredBy",
              fqn: "medAdminRec.table.administeredBy",
              inputType: "text",
              label: "Administered by",
              tableColumn: "6",
              formColumn: "1",
              formRow: "3",
              pageDataKey: "medAdminRec",
              dataParent: "medAdminRec.table",
              level2Key: "table",
              page: "Medication administration record",
              tableKey: "table"
            },
            {
              elementKey: "actualTime",
              fqn: "medAdminRec.table.actualTime",
              inputType: "text",
              label: "Actual time",
              tableColumn: "7",
              formColumn: "2",
              formRow: "3",
              pageDataKey: "medAdminRec",
              dataParent: "medAdminRec.table",
              level2Key: "table",
              page: "Medication administration record",
              tableKey: "table"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "status",
                    fqn: "medAdminRec.table.status",
                    inputType: "select",
                    label: "Status",
                    tableColumn: "1",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "medAdminRec",
                    dataParent: "medAdminRec.table",
                    level2Key: "table",
                    page: "Medication administration record",
                    options: [
                      {
                        text: "active"
                      },
                      {
                        text: "as needed"
                      },
                      {
                        text: "hold"
                      },
                      {
                        text: "discontinued"
                      },
                      {
                        text: ""
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "medication",
                    fqn: "medAdminRec.table.medication",
                    inputType: "text",
                    label: "Medication",
                    tableColumn: "2",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "medAdminRec",
                    dataParent: "medAdminRec.table",
                    level2Key: "table",
                    page: "Medication administration record",
                    helperText: "Medication-NL-(Medication name-NL-Dose-NL-Route-NL-Frequency-NL-Notes-NL-Prescriber)",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "yesterday",
                    fqn: "medAdminRec.table.yesterday",
                    inputType: "calculated",
                    label: "Yesterday",
                    tableColumn: "3",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "medAdminRec",
                    dataParent: "medAdminRec.table",
                    level2Key: "table",
                    page: "Medication administration record",
                    options: [
                      {
                        text: "[Yesterday\'s day]"
                      },
                      {
                        text: "(Previous times)"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "todayPlan",
                    fqn: "medAdminRec.table.todayPlan",
                    inputType: "text",
                    label: "Today plan",
                    tableColumn: "4",
                    formColumn: "2",
                    formRow: "2",
                    pageDataKey: "medAdminRec",
                    dataParent: "medAdminRec.table",
                    level2Key: "table",
                    page: "Medication administration record",
                    options: [
                      {
                        text: "[Today\'s day] plan"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "todayGiven",
                    fqn: "medAdminRec.table.todayGiven",
                    inputType: "text",
                    label: "Today given",
                    tableColumn: "5",
                    formColumn: "3",
                    formRow: "2",
                    pageDataKey: "medAdminRec",
                    dataParent: "medAdminRec.table",
                    level2Key: "table",
                    page: "Medication administration record",
                    options: [
                      {
                        text: "[Today\'s day] given"
                      }
                    ],
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "administeredBy",
                    fqn: "medAdminRec.table.administeredBy",
                    inputType: "text",
                    label: "Administered by",
                    tableColumn: "6",
                    formColumn: "1",
                    formRow: "3",
                    pageDataKey: "medAdminRec",
                    dataParent: "medAdminRec.table",
                    level2Key: "table",
                    page: "Medication administration record",
                    tableKey: "table"
                  },
                  {
                    elementKey: "actualTime",
                    fqn: "medAdminRec.table.actualTime",
                    inputType: "text",
                    label: "Actual time",
                    tableColumn: "7",
                    formColumn: "2",
                    formRow: "3",
                    pageDataKey: "medAdminRec",
                    dataParent: "medAdminRec.table",
                    level2Key: "table",
                    page: "Medication administration record",
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
    },
    dischargeSummary: {
      pageTitle: "Discharge summary",
      pageDataKey: "dischargeSummary",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "admissionDay",
                fqn: "dischargeSummary.admissionDay",
                inputType: "text",
                label: "Admission day",
                formColumn: "1",
                formRow: "1",
                pageDataKey: "dischargeSummary",
                dataParent: "dischargeSummary",
                page: "Discharge summary"
              },
              {
                elementKey: "clinicalSummary",
                fqn: "dischargeSummary.clinicalSummary",
                inputType: "textarea",
                label: "Clinical summary",
                formColumn: "2",
                formRow: "1",
                pageDataKey: "dischargeSummary",
                dataParent: "dischargeSummary",
                page: "Discharge summary"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                elementKey: "dischargingPhysician/np",
                fqn: "dischargeSummary.dischargingPhysician/np",
                inputType: "select",
                label: "Discharging physician/NP",
                formColumn: "1",
                formRow: "2",
                pageDataKey: "dischargeSummary",
                dataParent: "dischargeSummary",
                page: "Discharge summary",
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
              }
            ]
          },
          {
            formRow: "3",
            elements: [
              {
                elementKey: "role",
                fqn: "dischargeSummary.role",
                inputType: "select",
                label: "Role",
                formColumn: "1",
                formRow: "3",
                pageDataKey: "dischargeSummary",
                dataParent: "dischargeSummary",
                page: "Discharge summary",
                options: [
                  {
                    text: "physician"
                  },
                  {
                    text: "nurse practitioner"
                  }
                ]
              }
            ]
          },
          {
            formRow: "4",
            elements: [
              {
                elementKey: "dischargeDay",
                fqn: "dischargeSummary.dischargeDay",
                inputType: "day",
                label: "Discharge day",
                formColumn: "1",
                formRow: "4",
                pageDataKey: "dischargeSummary",
                dataParent: "dischargeSummary",
                page: "Discharge summary"
              }
            ]
          },
          {
            formRow: "5",
            elements: [
              {
                elementKey: "dischargeTime",
                fqn: "dischargeSummary.dischargeTime",
                inputType: "time",
                label: "Discharge time",
                formColumn: "1",
                formRow: "5",
                pageDataKey: "dischargeSummary",
                dataParent: "dischargeSummary",
                page: "Discharge summary"
              }
            ]
          },
          {
            formRow: "6",
            elements: [
              {
                elementKey: "dischargedTo",
                fqn: "dischargeSummary.dischargedTo",
                inputType: "select",
                label: "Discharged to",
                formColumn: "1",
                formRow: "6",
                pageDataKey: "dischargeSummary",
                dataParent: "dischargeSummary",
                page: "Discharge summary",
                options: [
                  {
                    text: "home"
                  },
                  {
                    text: "expired"
                  },
                  {
                    text: "transferred"
                  }
                ]
              },
              {
                elementKey: "transferedTo",
                fqn: "dischargeSummary.transferedTo",
                inputType: "text",
                label: "Transferred to",
                formColumn: "2",
                formRow: "6",
                pageDataKey: "dischargeSummary",
                dataParent: "dischargeSummary",
                page: "Discharge summary"
              },
              {
                elementKey: "leavingBy",
                fqn: "dischargeSummary.leavingBy",
                inputType: "select",
                label: "Leaving by",
                formColumn: "3",
                formRow: "6",
                pageDataKey: "dischargeSummary",
                dataParent: "dischargeSummary",
                page: "Discharge summary",
                options: [
                  {
                    text: "taxi"
                  },
                  {
                    text: "family"
                  },
                  {
                    text: "ambulance"
                  },
                  {
                    text: "walk out/wheelchair"
                  }
                ]
              }
            ]
          },
          {
            formRow: "7",
            elements: [
              {
                elementKey: "proceduresTreatment",
                fqn: "dischargeSummary.proceduresTreatment",
                inputType: "text",
                label: "Procedures and treatment",
                formColumn: "1",
                formRow: "7",
                pageDataKey: "dischargeSummary",
                dataParent: "dischargeSummary",
                page: "Discharge summary"
              }
            ]
          },
          {
            formRow: "8",
            elements: [
              {
                elementKey: "medicationsAdministered",
                fqn: "dischargeSummary.medicationsAdministered",
                inputType: "text",
                label: "Medications administered while in care",
                formColumn: "1",
                formRow: "8",
                pageDataKey: "dischargeSummary",
                dataParent: "dischargeSummary",
                page: "Discharge summary"
              },
              {
                elementKey: "dischargeRx",
                fqn: "dischargeSummary.dischargeRx",
                inputType: "text",
                label: "Discharge Rx",
                formColumn: "2",
                formRow: "8",
                pageDataKey: "dischargeSummary",
                dataParent: "dischargeSummary",
                page: "Discharge summary"
              }
            ]
          },
          {
            formRow: "9",
            elements: [
              {
                elementKey: "followUpAppointment",
                fqn: "dischargeSummary.followUpAppointment",
                inputType: "text",
                label: "Follow up appointments",
                formColumn: "1",
                formRow: "9",
                pageDataKey: "dischargeSummary",
                dataParent: "dischargeSummary",
                page: "Discharge summary"
              },
              {
                elementKey: "referredTo",
                fqn: "dischargeSummary.referredTo",
                inputType: "text",
                label: "Referrals/receiving team",
                formColumn: "2",
                formRow: "9",
                pageDataKey: "dischargeSummary",
                dataParent: "dischargeSummary",
                page: "Discharge summary"
              },
              {
                elementKey: "dischargeDiagnosis",
                fqn: "dischargeSummary.dischargeDiagnosis",
                inputType: "text",
                label: "Discharge diagnosis",
                formColumn: "3",
                formRow: "9",
                pageDataKey: "dischargeSummary",
                dataParent: "dischargeSummary",
                page: "Discharge summary"
              }
            ]
          },
          {
            formRow: "10",
            elements: [
              {
                elementKey: "labMedicalImaging",
                fqn: "dischargeSummary.labMedicalImaging",
                inputType: "files",
                label: "Lab and medical imaging requisitions",
                formColumn: "1",
                formRow: "10",
                pageDataKey: "dischargeSummary",
                dataParent: "dischargeSummary",
                page: "Discharge summary"
              }
            ]
          },
          {
            formRow: "11",
            elements: [
              {
                elementKey: "dischargePlan",
                fqn: "dischargeSummary.dischargePlan",
                inputType: "textarea",
                label: "Discharge plan",
                formColumn: "1",
                formRow: "11",
                pageDataKey: "dischargeSummary",
                dataParent: "dischargeSummary",
                page: "Discharge summary"
              },
              {
                elementKey: "dischargeEducation",
                fqn: "dischargeSummary.dischargeEducation",
                inputType: "textarea",
                label: "Discharge education",
                formColumn: "2",
                formRow: "11",
                pageDataKey: "dischargeSummary",
                dataParent: "dischargeSummary",
                page: "Discharge summary"
              }
            ]
          }
        ],
        columnsCount: 3
      },
      pageData: {}
    },
    billing: {
      pageTitle: "Billing",
      pageDataKey: "billing",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "msp",
                fqn: "billing.msp",
                inputType: "checkbox",
                label: "MSP",
                formColumn: "1",
                formRow: "1",
                pageDataKey: "billing",
                dataParent: "billing",
                page: "Billing"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                elementKey: "thirdParty",
                fqn: "billing.thirdParty",
                inputType: "checkbox",
                label: "Third party",
                formColumn: "1",
                formRow: "2",
                pageDataKey: "billing",
                dataParent: "billing",
                page: "Billing"
              }
            ]
          },
          {
            formRow: "3",
            elements: [
              {
                elementKey: "federal",
                fqn: "billing.federal",
                inputType: "checkbox",
                label: "Federal",
                formColumn: "1",
                formRow: "3",
                pageDataKey: "billing",
                dataParent: "billing",
                page: "Billing"
              }
            ]
          }
        ],
        columnsCount: 1
      },
      pageData: {}
    }
  }
}
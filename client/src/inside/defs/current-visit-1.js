/* eslint-disable quotes */
export default function () {
  return {
    visit: {
      pageTitle: "Visit details",
      pageDataKey: "visit",
      pageChildren: [
        {
          label: "Admission day",
          elementKey: "admissionDay",
          fqn: "visit.admissionDay",
          dataCaseStudy: "Day 0-NL-Day 1"
        },
        {
          label: "Admission time",
          elementKey: "admissionTime",
          fqn: "visit.admissionTime",
          dataCaseStudy: "6:00-NL-10:30"
        },
        {
          label: "Consent for treatment",
          elementKey: "consentForTreatment",
          fqn: "visit.consentForTreatment",
          dataCaseStudy: "TRUE"
        },
        {
          label: "Consent for blood products",
          elementKey: "consentForBlood",
          fqn: "visit.consentForBlood",
          dataCaseStudy: "TRUE"
        },
        {
          label: "Admission status",
          elementKey: "status",
          fqn: "visit.status",
          dataCaseStudy: "Admitted-NL-Admitted"
        },
        {
          label: "Physician admitting diagnosis",
          elementKey: "diagnosis",
          fqn: "visit.diagnosis",
          dataCaseStudy: "COPD-NL-Shortness of breath-NL-Dizzy"
        },
        {
          label: "Patient location",
          elementKey: "location",
          fqn: "visit.table.location",
          dataCaseStudy: "Emergency room"
        },
        {
          label: "Transfer in day",
          elementKey: "transferInDay",
          fqn: "visit.table.transferInDay"
        },
        {
          label: "Transfer in time",
          elementKey: "transferInTime",
          fqn: "visit.table.transferInTime"
        }
      ],
      generated: "2019-05-02T12:22:22-07:00",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                label: "Admission day",
                pageDataKey: "visit",
                elementKey: "admissionDay",
                inputType: "day",
                formRow: "1",
                formColumn: "1",
                formCss: "is-one-third",
                mandatory: "yes",
                dataParent: "visit",
                fqn: "visit.admissionDay"
              },
              {
                label: "Admission time",
                pageDataKey: "visit",
                elementKey: "admissionTime",
                inputType: "time",
                formRow: "1",
                formColumn: "2",
                formCss: "is-one-third",
                mandatory: "yes",
                dataParent: "visit",
                fqn: "visit.admissionTime"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                label: "Consent for treatment",
                pageDataKey: "visit",
                elementKey: "consentForTreatment",
                inputType: "checkbox",
                formRow: "2",
                formColumn: "1",
                formCss: "is-one-third",
                dataParent: "visit",
                fqn: "visit.consentForTreatment"
              },
              {
                label: "Consent for blood products",
                pageDataKey: "visit",
                elementKey: "consentForBlood",
                inputType: "checkbox",
                formRow: "2",
                formColumn: "2",
                formCss: "is-one-third",
                dataParent: "visit",
                fqn: "visit.consentForBlood"
              }
            ]
          },
          {
            formRow: "3",
            elements: [
              {
                label: "Physician admitting diagnosis",
                pageDataKey: "visit",
                elementKey: "diagnosis",
                inputType: "textarea",
                formRow: "3",
                formColumn: "1",
                formCss: "is-two-thirds",
                dataParent: "visit",
                fqn: "visit.diagnosis"
              },
              {
                label: "Admission status",
                pageDataKey: "visit",
                elementKey: "status",
                inputType: "select",
                formRow: "3",
                formColumn: "3",
                formCss: "is-one-third",
                options: [
                  {
                    text: "Admission in progress"
                  },
                  {
                    text: "Admitted"
                  },
                  {
                    text: "Inpatient"
                  },
                  {
                    text: "Outpatient"
                  },
                  {
                    text: "Surgical day care"
                  },
                  {
                    text: "Discharge pending"
                  },
                  {
                    text: "Discharged"
                  }
                ],
                mandatory: "yes",
                dataParent: "visit",
                fqn: "visit.status"
              }
            ]
          }
        ],
        columnsCount: 2
      },
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a patient location",
          tableCells: [
            {
              label: "Patient location",
              pageDataKey: "visit",
              level2Key: "table",
              elementKey: "location",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              tableColumn: "1",
              mandatory: "yes",
              helperText: "hospital, ward #, room #, home, out patient clinic",
              dataParent: "visit.table",
              fqn: "visit.table.location",
              tableKey: "table"
            },
            {
              label: "Transfer in day",
              pageDataKey: "visit",
              level2Key: "table",
              elementKey: "transferInDay",
              inputType: "day",
              formRow: "1",
              formColumn: "2",
              tableColumn: "2",
              dataParent: "visit.table",
              fqn: "visit.table.transferInDay",
              tableKey: "table"
            },
            {
              label: "Transfer in time",
              pageDataKey: "visit",
              level2Key: "table",
              elementKey: "transferInTime",
              inputType: "time",
              formRow: "1",
              formColumn: "3",
              tableColumn: "3",
              dataParent: "visit.table",
              fqn: "visit.table.transferInTime",
              tableKey: "table"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    label: "Patient location",
                    pageDataKey: "visit",
                    level2Key: "table",
                    elementKey: "location",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    tableColumn: "1",
                    mandatory: "yes",
                    helperText: "hospital, ward #, room #, home, out patient clinic",
                    dataParent: "visit.table",
                    fqn: "visit.table.location",
                    tableKey: "table"
                  },
                  {
                    label: "Transfer in day",
                    pageDataKey: "visit",
                    level2Key: "table",
                    elementKey: "transferInDay",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "2",
                    tableColumn: "2",
                    dataParent: "visit.table",
                    fqn: "visit.table.transferInDay",
                    tableKey: "table"
                  },
                  {
                    label: "Transfer in time",
                    pageDataKey: "visit",
                    level2Key: "table",
                    elementKey: "transferInTime",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "3",
                    tableColumn: "3",
                    dataParent: "visit.table",
                    fqn: "visit.table.transferInTime",
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
    vitals: {
      pageTitle: "Vital signs",
      pageDataKey: "vitals",
      pageChildren: [
        {
          label: "Name",
          elementKey: "name",
          fqn: "vitals.table.name"
        },
        {
          label: "Profession",
          elementKey: "profession",
          fqn: "vitals.table.profession"
        },
        {
          label: "Entry day",
          elementKey: "entryDay",
          fqn: "vitals.table.entryDay"
        },
        {
          label: "Entry time",
          elementKey: "entryTime",
          fqn: "vitals.table.entryTime"
        },
        {
          label: "Day",
          elementKey: "day",
          fqn: "vitals.table.day"
        },
        {
          label: "Time",
          elementKey: "time",
          fqn: "vitals.table.time"
        },
        {
          label: "Temperature",
          elementKey: "temperature",
          fqn: "vitals.table.temperature",
          dataCaseStudy: "36.5 C"
        },
        {
          label: "Temperature source",
          elementKey: "source",
          fqn: "vitals.table.source",
          dataCaseStudy: "Axilla"
        },
        {
          label: "Pulse site",
          elementKey: "strength",
          fqn: "vitals.table.strength",
          dataCaseStudy: "strong"
        },
        {
          label: "Pulse rate",
          elementKey: "rate",
          fqn: "vitals.table.rate",
          dataCaseStudy: "96"
        },
        {
          label: "Pulse rhythm",
          elementKey: "rhythm",
          fqn: "vitals.table.rhythm",
          dataCaseStudy: "regular"
        },
        {
          label: "Systolic blood pressure",
          elementKey: "systolic",
          fqn: "vitals.table.systolic",
          dataCaseStudy: "180"
        },
        {
          label: "Diastolic blood pressure",
          elementKey: "diastolic",
          fqn: "vitals.table.diastolic",
          dataCaseStudy: "90"
        },
        {
          label: "Patient position",
          elementKey: "patientPosition",
          fqn: "vitals.table.patientPosition",
          dataCaseStudy: "sitting"
        },
        {
          label: "Respiration rate",
          elementKey: "respirationRate",
          fqn: "vitals.table.respirationRate",
          dataCaseStudy: "28"
        },
        {
          label: "Oxygen saturation",
          elementKey: "oxygenSaturation",
          fqn: "vitals.table.oxygenSaturation",
          dataCaseStudy: "0.85"
        },
        {
          label: "Oxygen mode",
          elementKey: "oxygenMode",
          fqn: "vitals.table.oxygenMode"
        },
        {
          label: "Flow rate",
          elementKey: "flowRate",
          fqn: "vitals.table.flowRate"
        }
      ],
      generated: "2019-05-02T12:22:22-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add vital signs",
          tableCells: [
            {
              label: "Name",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              formCss: "user_name",
              tableColumn: "1",
              dataParent: "vitals.table",
              fqn: "vitals.table.name",
              tableKey: "table"
            },
            {
              label: "Profession",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              formCss: "user_pro",
              tableColumn: "2",
              dataParent: "vitals.table",
              fqn: "vitals.table.profession",
              tableKey: "table"
            },
            {
              label: "Entry day",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "entryDay",
              inputType: "text",
              formRow: "1",
              formColumn: "3",
              formCss: "user_day",
              tableColumn: "3",
              dataParent: "vitals.table",
              fqn: "vitals.table.entryDay",
              tableKey: "table"
            },
            {
              label: "Entry time",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "entryTime",
              inputType: "text",
              formRow: "1",
              formColumn: "4",
              formCss: "user_time",
              tableColumn: "4",
              tableCss: "hr-table",
              dataParent: "vitals.table",
              fqn: "vitals.table.entryTime",
              tableKey: "table"
            },
            {
              label: "Day",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "day",
              inputType: "text",
              formRow: "2",
              formColumn: "1",
              formCss: "is-one-third",
              tableColumn: "5",
              dataParent: "vitals.table",
              fqn: "vitals.table.day",
              tableKey: "table"
            },
            {
              label: "Time",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "time",
              inputType: "text",
              formRow: "2",
              formColumn: "2",
              formCss: "is-one-third",
              tableColumn: "6",
              tableCss: "hr-table",
              dataParent: "vitals.table",
              fqn: "vitals.table.time",
              tableKey: "table"
            },
            {
              label: "Temperature",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "temperature",
              inputType: "text",
              formRow: "3",
              formColumn: "1",
              formCss: "is-one-third",
              tableColumn: "7",
              suffix: "Celcius",
              dataParent: "vitals.table",
              fqn: "vitals.table.temperature",
              tableKey: "table"
            },
            {
              label: "Temperature source",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "source",
              inputType: "select",
              formRow: "3",
              formColumn: "2",
              formCss: "is-one-third",
              tableColumn: "8",
              tableCss: "hr-table",
              options: [
                {
                  text: "oral"
                },
                {
                  text: "axilla"
                },
                {
                  text: "rectal"
                },
                {
                  text: "tympanic"
                }
              ],
              dataParent: "vitals.table",
              fqn: "vitals.table.source",
              tableKey: "table"
            },
            {
              label: "Pulse site",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "strength",
              inputType: "select",
              formRow: "4",
              formColumn: "1",
              formCss: "is-one-third",
              tableColumn: "9",
              options: [
                {
                  text: "peripheral"
                }
              ],
              dataParent: "vitals.table",
              fqn: "vitals.table.strength",
              tableKey: "table"
            },
            {
              label: "Pulse rate",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "rate",
              inputType: "text",
              formRow: "4",
              formColumn: "2",
              formCss: "is-one-third",
              tableColumn: "10",
              dataParent: "vitals.table",
              fqn: "vitals.table.rate",
              tableKey: "table"
            },
            {
              label: "Pulse rhythm",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "rhythm",
              inputType: "select",
              formRow: "4",
              formColumn: "3",
              formCss: "is-one-third",
              tableColumn: "11",
              tableCss: "hr-table",
              options: [
                {
                  text: "regular"
                },
                {
                  text: "irregular"
                }
              ],
              dataParent: "vitals.table",
              fqn: "vitals.table.rhythm",
              tableKey: "table"
            },
            {
              label: "Systolic blood pressure",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "systolic",
              inputType: "text",
              formRow: "5",
              formColumn: "1",
              tableColumn: "12",
              dataParent: "vitals.table",
              fqn: "vitals.table.systolic",
              tableKey: "table"
            },
            {
              label: "Diastolic blood pressure",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "diastolic",
              inputType: "text",
              formRow: "5",
              formColumn: "2",
              tableColumn: "13",
              dataParent: "vitals.table",
              fqn: "vitals.table.diastolic",
              tableKey: "table"
            },
            {
              label: "Patient position",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "patientPosition",
              inputType: "select",
              formRow: "5",
              formColumn: "3",
              tableColumn: "14",
              tableCss: "hr-table",
              options: [
                {
                  text: "supine"
                },
                {
                  text: "sitting"
                },
                {
                  text: "standing"
                }
              ],
              dataParent: "vitals.table",
              fqn: "vitals.table.patientPosition",
              tableKey: "table"
            },
            {
              label: "Respiration rate",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "respirationRate",
              inputType: "text",
              formRow: "6",
              formColumn: "1",
              formCss: "is-one-third",
              tableColumn: "15",
              dataParent: "vitals.table",
              fqn: "vitals.table.respirationRate",
              tableKey: "table"
            },
            {
              label: "Oxygen saturation",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "oxygenSaturation",
              inputType: "text",
              formRow: "7",
              formColumn: "1",
              tableColumn: "16",
              dataParent: "vitals.table",
              fqn: "vitals.table.oxygenSaturation",
              tableKey: "table"
            },
            {
              label: "Oxygen mode",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "oxygenMode",
              inputType: "select",
              formRow: "7",
              formColumn: "2",
              tableColumn: "17",
              options: [
                {
                  text: "room air"
                },
                {
                  text: "nasal prongs"
                },
                {
                  text: "simple face mask"
                },
                {
                  text: "rebreathing face mask"
                },
                {
                  text: "optiflow"
                }
              ],
              dataParent: "vitals.table",
              fqn: "vitals.table.oxygenMode",
              tableKey: "table"
            },
            {
              label: "Flow rate",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "flowRate",
              inputType: "text",
              formRow: "7",
              formColumn: "3",
              tableColumn: "18",
              suffix: "/lpm",
              dataParent: "vitals.table",
              fqn: "vitals.table.flowRate",
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
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    formCss: "user_name",
                    tableColumn: "1",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.name",
                    tableKey: "table"
                  },
                  {
                    label: "Profession",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    tableColumn: "2",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.profession",
                    tableKey: "table"
                  },
                  {
                    label: "Entry day",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "entryDay",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    tableColumn: "3",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.entryDay",
                    tableKey: "table"
                  },
                  {
                    label: "Entry time",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "entryTime",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    tableColumn: "4",
                    tableCss: "hr-table",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.entryTime",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "Day",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "day",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "1",
                    formCss: "is-one-third",
                    tableColumn: "5",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.day",
                    tableKey: "table"
                  },
                  {
                    label: "Time",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "time",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "2",
                    formCss: "is-one-third",
                    tableColumn: "6",
                    tableCss: "hr-table",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.time",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    label: "Temperature",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "temperature",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "1",
                    formCss: "is-one-third",
                    tableColumn: "7",
                    suffix: "Celcius",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.temperature",
                    tableKey: "table"
                  },
                  {
                    label: "Temperature source",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "source",
                    inputType: "select",
                    formRow: "3",
                    formColumn: "2",
                    formCss: "is-one-third",
                    tableColumn: "8",
                    tableCss: "hr-table",
                    options: [
                      {
                        text: "oral"
                      },
                      {
                        text: "axilla"
                      },
                      {
                        text: "rectal"
                      },
                      {
                        text: "tympanic"
                      }
                    ],
                    dataParent: "vitals.table",
                    fqn: "vitals.table.source",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    label: "Pulse site",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "strength",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "1",
                    formCss: "is-one-third",
                    tableColumn: "9",
                    options: [
                      {
                        text: "peripheral"
                      }
                    ],
                    dataParent: "vitals.table",
                    fqn: "vitals.table.strength",
                    tableKey: "table"
                  },
                  {
                    label: "Pulse rate",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "rate",
                    inputType: "text",
                    formRow: "4",
                    formColumn: "2",
                    formCss: "is-one-third",
                    tableColumn: "10",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.rate",
                    tableKey: "table"
                  },
                  {
                    label: "Pulse rhythm",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "rhythm",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "3",
                    formCss: "is-one-third",
                    tableColumn: "11",
                    tableCss: "hr-table",
                    options: [
                      {
                        text: "regular"
                      },
                      {
                        text: "irregular"
                      }
                    ],
                    dataParent: "vitals.table",
                    fqn: "vitals.table.rhythm",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "5",
                elements: [
                  {
                    label: "Systolic blood pressure",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "systolic",
                    inputType: "text",
                    formRow: "5",
                    formColumn: "1",
                    tableColumn: "12",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.systolic",
                    tableKey: "table"
                  },
                  {
                    label: "Diastolic blood pressure",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "diastolic",
                    inputType: "text",
                    formRow: "5",
                    formColumn: "2",
                    tableColumn: "13",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.diastolic",
                    tableKey: "table"
                  },
                  {
                    label: "Patient position",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "patientPosition",
                    inputType: "select",
                    formRow: "5",
                    formColumn: "3",
                    tableColumn: "14",
                    tableCss: "hr-table",
                    options: [
                      {
                        text: "supine"
                      },
                      {
                        text: "sitting"
                      },
                      {
                        text: "standing"
                      }
                    ],
                    dataParent: "vitals.table",
                    fqn: "vitals.table.patientPosition",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "6",
                elements: [
                  {
                    label: "Respiration rate",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "respirationRate",
                    inputType: "text",
                    formRow: "6",
                    formColumn: "1",
                    formCss: "is-one-third",
                    tableColumn: "15",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.respirationRate",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "7",
                elements: [
                  {
                    label: "Oxygen saturation",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "oxygenSaturation",
                    inputType: "text",
                    formRow: "7",
                    formColumn: "1",
                    tableColumn: "16",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.oxygenSaturation",
                    tableKey: "table"
                  },
                  {
                    label: "Oxygen mode",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "oxygenMode",
                    inputType: "select",
                    formRow: "7",
                    formColumn: "2",
                    tableColumn: "17",
                    options: [
                      {
                        text: "room air"
                      },
                      {
                        text: "nasal prongs"
                      },
                      {
                        text: "simple face mask"
                      },
                      {
                        text: "rebreathing face mask"
                      },
                      {
                        text: "optiflow"
                      }
                    ],
                    dataParent: "vitals.table",
                    fqn: "vitals.table.oxygenMode",
                    tableKey: "table"
                  },
                  {
                    label: "Flow rate",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "flowRate",
                    inputType: "text",
                    formRow: "7",
                    formColumn: "3",
                    tableColumn: "18",
                    suffix: "/lpm",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.flowRate",
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
    fluidBalance: {
      pageTitle: "Fluid balance",
      pageDataKey: "fluidBalance",
      pageChildren: [
        {
          label: "Name",
          elementKey: "name",
          fqn: "fluidBalance.table.name",
          dataCaseStudy: "Jason"
        },
        {
          label: "Profession",
          elementKey: "profession",
          fqn: "fluidBalance.table.profession",
          dataCaseStudy: "RN"
        },
        {
          label: "Day",
          elementKey: "day",
          fqn: "fluidBalance.table.day",
          dataCaseStudy: "0"
        },
        {
          label: "Time",
          elementKey: "time",
          fqn: "fluidBalance.table.time",
          dataCaseStudy: "0.8125"
        },
        {
          label: "Fluid In",
          elementKey: "fluidIn",
          fqn: "fluidBalance.table.fluidIn"
        },
        {
          label: "Fluid Out",
          elementKey: "fluidOut",
          fqn: "fluidBalance.table.fluidOut"
        }
      ],
      generated: "2019-05-02T12:22:22-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a fluid in/out record",
          tableCells: [
            {
              label: "Name",
              pageDataKey: "fluidBalance",
              level2Key: "table",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              formCss: "user_name",
              tableColumn: "1",
              dataParent: "fluidBalance.table",
              fqn: "fluidBalance.table.name",
              tableKey: "table"
            },
            {
              label: "Profession",
              pageDataKey: "fluidBalance",
              level2Key: "table",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              formCss: "user_pro",
              tableColumn: "2",
              dataParent: "fluidBalance.table",
              fqn: "fluidBalance.table.profession",
              tableKey: "table"
            },
            {
              label: "Day",
              pageDataKey: "fluidBalance",
              level2Key: "table",
              elementKey: "day",
              inputType: "day",
              formRow: "1",
              formColumn: "3",
              formCss: "user_day",
              tableColumn: "3",
              dataParent: "fluidBalance.table",
              fqn: "fluidBalance.table.day",
              tableKey: "table"
            },
            {
              label: "Time",
              pageDataKey: "fluidBalance",
              level2Key: "table",
              elementKey: "time",
              inputType: "time",
              formRow: "1",
              formColumn: "4",
              formCss: "user_time",
              tableColumn: "4",
              tableCss: "hr-table",
              dataParent: "fluidBalance.table",
              fqn: "fluidBalance.table.time",
              tableKey: "table"
            },
            {
              label: "Fluid In",
              pageDataKey: "fluidBalance",
              level2Key: "table",
              elementKey: "fluidIn",
              inputType: "text",
              formRow: "2",
              formColumn: "1",
              tableColumn: "5",
              dataParent: "fluidBalance.table",
              fqn: "fluidBalance.table.fluidIn",
              tableKey: "table"
            },
            {
              label: "Fluid Out",
              pageDataKey: "fluidBalance",
              level2Key: "table",
              elementKey: "fluidOut",
              inputType: "text",
              formRow: "2",
              formColumn: "2",
              tableColumn: "6",
              dataParent: "fluidBalance.table",
              fqn: "fluidBalance.table.fluidOut",
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
                    pageDataKey: "fluidBalance",
                    level2Key: "table",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    formCss: "user_name",
                    tableColumn: "1",
                    dataParent: "fluidBalance.table",
                    fqn: "fluidBalance.table.name",
                    tableKey: "table"
                  },
                  {
                    label: "Profession",
                    pageDataKey: "fluidBalance",
                    level2Key: "table",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    tableColumn: "2",
                    dataParent: "fluidBalance.table",
                    fqn: "fluidBalance.table.profession",
                    tableKey: "table"
                  },
                  {
                    label: "Day",
                    pageDataKey: "fluidBalance",
                    level2Key: "table",
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    tableColumn: "3",
                    dataParent: "fluidBalance.table",
                    fqn: "fluidBalance.table.day",
                    tableKey: "table"
                  },
                  {
                    label: "Time",
                    pageDataKey: "fluidBalance",
                    level2Key: "table",
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    tableColumn: "4",
                    tableCss: "hr-table",
                    dataParent: "fluidBalance.table",
                    fqn: "fluidBalance.table.time",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "Fluid In",
                    pageDataKey: "fluidBalance",
                    level2Key: "table",
                    elementKey: "fluidIn",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "1",
                    tableColumn: "5",
                    dataParent: "fluidBalance.table",
                    fqn: "fluidBalance.table.fluidIn",
                    tableKey: "table"
                  },
                  {
                    label: "Fluid Out",
                    pageDataKey: "fluidBalance",
                    level2Key: "table",
                    elementKey: "fluidOut",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "2",
                    tableColumn: "6",
                    dataParent: "fluidBalance.table",
                    fqn: "fluidBalance.table.fluidOut",
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
    neurological: {
      pageTitle: "Neurological assessment",
      pageDataKey: "neurological",
      pageChildren: [
        {
          label: "Name",
          elementKey: "name",
          fqn: "neurological.table.name",
          dataCaseStudy: "Jason"
        },
        {
          label: "Profession",
          elementKey: "profession",
          fqn: "neurological.table.profession",
          dataCaseStudy: "RN"
        },
        {
          label: "Day",
          elementKey: "day",
          fqn: "neurological.table.day",
          dataCaseStudy: "0"
        },
        {
          label: "Time",
          elementKey: "time",
          fqn: "neurological.table.time",
          dataCaseStudy: "0.8125"
        },
        {
          label: "Alert",
          elementKey: "alert",
          fqn: "neurological.table.status.alert"
        },
        {
          label: "Oriented",
          elementKey: "oriented",
          fqn: "neurological.table.status.oriented",
          dataCaseStudy: "TRUE"
        },
        {
          label: "Confused",
          elementKey: "confused",
          fqn: "neurological.table.status.confused",
          dataCaseStudy: "TRUE"
        },
        {
          label: "Drowsy",
          elementKey: "drowsy",
          fqn: "neurological.table.status.drowsy"
        },
        {
          label: "Unresponsive",
          elementKey: "unresponsive",
          fqn: "neurological.table.status.unresponsive"
        },
        {
          label: "Dizziness",
          elementKey: "dizziness",
          fqn: "neurological.table.status.dizziness"
        },
        {
          label: "Eye opening",
          elementKey: "blurredVision",
          fqn: "neurological.table.status.blurredVision"
        },
        {
          label: "Eye opening",
          elementKey: "eyeOpening",
          fqn: "neurological.table.glasgowComaScale.eyeOpening",
          dataCaseStudy: "Spontaneous",
          passToFunction: "glasgowCalculation"
        },
        {
          label: "Verbal response",
          elementKey: "verbalResponse",
          fqn: "neurological.table.glasgowComaScale.verbalResponse",
          dataCaseStudy: "Oriented",
          passToFunction: "glasgowCalculation"
        },
        {
          label: "Best motor response",
          elementKey: "bestMotorResponse",
          fqn: "neurological.table.glasgowComaScale.bestMotorResponse",
          dataCaseStudy: "Obeys commands",
          passToFunction: "glasgowCalculation"
        },
        {
          label: "<b>Glasgow Coma Scale calculation</b>",
          elementKey: "glasgowCalculation",
          fqn: "neurological.table.glasgowComaScale.glasgowCalculation",
          defaultValue: "0",
          dataCaseStudy: "(15 - calculated by system)"
        },
        {
          label: "Loss of conciousness",
          elementKey: "loss",
          fqn: "neurological.table.glasgowComaScale.loss",
          dataCaseStudy: "No"
        },
        {
          label: "Duration",
          elementKey: "duration",
          fqn: "neurological.table.glasgowComaScale.duration",
          dataCaseStudy: "No"
        },
        {
          label: "Left pupil size",
          elementKey: "leftPupilSize",
          fqn: "neurological.table.pupils.leftPupilSize",
          dataCaseStudy: "2"
        },
        {
          label: "Left pupil response to light",
          elementKey: "leftPupilResponseToLight",
          fqn: "neurological.table.pupils.leftPupilResponseToLight",
          dataCaseStudy: "Brisk"
        },
        {
          label: "Right pupil size",
          elementKey: "rightPupilSize",
          fqn: "neurological.table.pupils.rightPupilSize",
          dataCaseStudy: "2"
        },
        {
          label: "Right pupil response to light",
          elementKey: "rightPupilResponseToLight",
          fqn: "neurological.table.pupils.rightPupilResponseToLight",
          dataCaseStudy: "Brisk"
        },
        {
          label: "Both pupils",
          elementKey: "bothPupils",
          fqn: "neurological.table.pupils.bothPupils",
          dataCaseStudy: "Equal"
        },
        {
          elementKey: "aSpacer",
          fqn: "neurological.table.pupils.aSpacer",
          dataCaseStudy: "Equal"
        },
        {
          label: "Level of conciousness",
          elementKey: "levelOfConciousness",
          fqn: "neurological.table.stroke.levelOfConciousness",
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Level of conciousness questions",
          elementKey: "levelOfConciousnessQuestions",
          fqn: "neurological.table.stroke.levelOfConciousnessQuestions",
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Level of conciousness commands",
          elementKey: "levelOfConciousnessCommands",
          fqn: "neurological.table.stroke.levelOfConciousnessCommands",
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Motor - left arm",
          elementKey: "motorLeftArm",
          fqn: "neurological.table.stroke.motorLeftArm",
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Motor - right arm",
          elementKey: "motorRightArm",
          fqn: "neurological.table.stroke.motorRightArm",
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Motor - left leg",
          elementKey: "motorLeftLeg",
          fqn: "neurological.table.stroke.motorLeftLeg",
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Motor - right leg",
          elementKey: "motorRightLeg",
          fqn: "neurological.table.stroke.motorRightLeg",
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Limb ataxia",
          elementKey: "limbAtaxia",
          fqn: "neurological.table.stroke.limbAtaxia",
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Best gaze",
          elementKey: "bestGaze",
          fqn: "neurological.table.stroke.bestGaze",
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Visual",
          elementKey: "visual",
          fqn: "neurological.table.stroke.visual",
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Facial palsy",
          elementKey: "facialPalsy",
          fqn: "neurological.table.stroke.facialPalsy",
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Sensory",
          elementKey: "sensory",
          fqn: "neurological.table.stroke.sensory",
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Best language",
          elementKey: "bestLanguage",
          fqn: "neurological.table.stroke.bestLanguage",
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Dysarthria",
          elementKey: "dysarthria",
          fqn: "neurological.table.stroke.dysarthria",
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Extinction and inattention",
          elementKey: "extinctionAndInattention",
          fqn: "neurological.table.stroke.extinctionAndInattention",
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "<b>Stroke assessment calculation</b>",
          elementKey: "strokeAssessmentCalculation",
          fqn: "neurological.table.stroke.strokeAssessmentCalculation",
          defaultValue: "0"
        },
        {
          label: "Comments",
          elementKey: "comments",
          fqn: "neurological.table.comments",
          dataCaseStudy: "(no comments)"
        },
        {
          label: "<b>Resources</b><p><a target=\"_blank\" href=\"/assets/standardized-assessment-tools/Morse-Fall-Scale-score.png\">Morse Fall Score </a></br><a target=\"_blank\" href=\"/assets/standardized-assessment-tools/mini-mental-health-screen.pdf\">Mini-mental state examination (MMSE)</a></p>",
          elementKey: "resources",
          fqn: "neurological.table.resources",
          dataCaseStudy: "(no comments)"
        }
      ],
      generated: "2019-05-02T12:22:22-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          label: "Neurological",
          addButtonText: "Add a neurological assessment",
          tableCells: [
            {
              label: "Name",
              pageDataKey: "neurological",
              level2Key: "table",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              formCss: "user_name",
              tableColumn: "1",
              dataParent: "neurological.table",
              fqn: "neurological.table.name",
              tableKey: "table"
            },
            {
              label: "Profession",
              pageDataKey: "neurological",
              level2Key: "table",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              formCss: "user_pro",
              tableColumn: "2",
              dataParent: "neurological.table",
              fqn: "neurological.table.profession",
              tableKey: "table"
            },
            {
              label: "Day",
              pageDataKey: "neurological",
              level2Key: "table",
              elementKey: "day",
              inputType: "day",
              formRow: "1",
              formColumn: "3",
              formCss: "user_day",
              tableColumn: "3",
              dataParent: "neurological.table",
              fqn: "neurological.table.day",
              tableKey: "table"
            },
            {
              label: "Time",
              pageDataKey: "neurological",
              level2Key: "table",
              elementKey: "time",
              inputType: "time",
              formRow: "1",
              formColumn: "4",
              formCss: "user_time",
              tableColumn: "4",
              tableCss: "hr-table",
              dataParent: "neurological.table",
              fqn: "neurological.table.time",
              tableKey: "table"
            },
            {
              label: "Status",
              pageDataKey: "neurological",
              level2Key: "table",
              elementKey: "status",
              inputType: "fieldset",
              formRow: "2",
              formColumn: "1",
              formCss: "is-one-third",
              tableColumn: "5",
              dataParent: "neurological.table",
              fqn: "neurological.table.status",
              containerType: "fieldset",
              containerKey: "status",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Alert",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "status",
              elementKey: "alert",
              inputType: "checkbox",
              tableColumn: "6",
              fsetRow: "1",
              fsetCol: "1",
              dataParent: "neurological.table.status",
              fqn: "neurological.table.status.alert",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Oriented",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "status",
              elementKey: "oriented",
              inputType: "checkbox",
              tableColumn: "7",
              fsetRow: "2",
              fsetCol: "1",
              dataParent: "neurological.table.status",
              fqn: "neurological.table.status.oriented",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Confused",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "status",
              elementKey: "confused",
              inputType: "checkbox",
              tableColumn: "8",
              fsetRow: "3",
              fsetCol: "1",
              dataParent: "neurological.table.status",
              fqn: "neurological.table.status.confused",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Drowsy",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "status",
              elementKey: "drowsy",
              inputType: "checkbox",
              tableColumn: "9",
              fsetRow: "4",
              fsetCol: "1",
              dataParent: "neurological.table.status",
              fqn: "neurological.table.status.drowsy",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Unresponsive",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "status",
              elementKey: "unresponsive",
              inputType: "checkbox",
              tableColumn: "10",
              fsetRow: "5",
              fsetCol: "1",
              dataParent: "neurological.table.status",
              fqn: "neurological.table.status.unresponsive",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Dizziness",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "status",
              elementKey: "dizziness",
              inputType: "checkbox",
              tableColumn: "11",
              fsetRow: "6",
              fsetCol: "1",
              dataParent: "neurological.table.status",
              fqn: "neurological.table.status.dizziness",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Eye opening",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "status",
              elementKey: "blurredVision",
              inputType: "checkbox",
              tableColumn: "12",
              tableCss: "hr-table",
              fsetRow: "7",
              fsetCol: "1",
              dataParent: "neurological.table.status",
              fqn: "neurological.table.status.blurredVision",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Glasgow Coma Scale",
              pageDataKey: "neurological",
              level2Key: "table",
              elementKey: "glasgowComaScale",
              inputType: "fieldset",
              formRow: "2",
              formColumn: "2",
              tableColumn: "13",
              dataParent: "neurological.table",
              fqn: "neurological.table.glasgowComaScale",
              containerType: "fieldset",
              containerKey: "glasgowComaScale",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Eye opening",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "glasgowComaScale",
              elementKey: "eyeOpening",
              inputType: "select",
              tableColumn: "14",
              fsetRow: "1",
              fsetCol: "1",
              options: [
                {
                  text: "0 = Non testable"
                },
                {
                  text: "1 = None"
                },
                {
                  text: "2 = To pressure"
                },
                {
                  text: "3 = To sound"
                },
                {
                  text: "4 = Spontaneous"
                }
              ],
              passToFunction: "glasgowCalculation",
              dataParent: "neurological.table.glasgowComaScale",
              fqn: "neurological.table.glasgowComaScale.eyeOpening",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Verbal response",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "glasgowComaScale",
              elementKey: "verbalResponse",
              inputType: "select",
              tableColumn: "15",
              fsetRow: "2",
              fsetCol: "1",
              options: [
                {
                  text: "0 = Non testable"
                },
                {
                  text: "1 = None"
                },
                {
                  text: "2 = Sounds"
                },
                {
                  text: "3 = Words"
                },
                {
                  text: "4 = Confused"
                },
                {
                  text: "5 = Oriented"
                }
              ],
              passToFunction: "glasgowCalculation",
              dataParent: "neurological.table.glasgowComaScale",
              fqn: "neurological.table.glasgowComaScale.verbalResponse",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Best motor response",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "glasgowComaScale",
              elementKey: "bestMotorResponse",
              inputType: "select",
              formCss: "is-one-third",
              tableColumn: "16",
              tableCss: "hr-table",
              fsetRow: "3",
              fsetCol: "1",
              options: [
                {
                  text: "0 = Non testable"
                },
                {
                  text: "1 = None"
                },
                {
                  text: "2 = Extension"
                },
                {
                  text: "3 = Normal flexion"
                },
                {
                  text: "4 = Localising"
                },
                {
                  text: "5 = Obeys commands"
                }
              ],
              passToFunction: "glasgowCalculation",
              dataParent: "neurological.table.glasgowComaScale",
              fqn: "neurological.table.glasgowComaScale.bestMotorResponse",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "<b>Glasgow Coma Scale calculation</b>",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "glasgowComaScale",
              elementKey: "glasgowCalculation",
              inputType: "calculatedValue",
              tableColumn: "17",
              tableCss: "hr-table",
              fsetRow: "4",
              fsetCol: "1",
              defaultValue: "0",
              options: [
                {
                  text: "=eyeOpening+verbalResponse+bestMotorResponse"
                }
              ],
              dataParent: "neurological.table.glasgowComaScale",
              fqn: "neurological.table.glasgowComaScale.glasgowCalculation",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Loss of conciousness",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "glasgowComaScale",
              elementKey: "loss",
              inputType: "select",
              tableColumn: "18",
              fsetRow: "1",
              fsetCol: "1",
              options: [
                {
                  text: "No"
                },
                {
                  text: "Yes"
                },
                {
                  text: "Unknown"
                }
              ],
              dataParent: "neurological.table.glasgowComaScale",
              fqn: "neurological.table.glasgowComaScale.loss",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Conciousness",
              pageDataKey: "neurological",
              level2Key: "table",
              elementKey: "conciousness",
              inputType: "fieldset",
              formRow: "2",
              formColumn: "3",
              tableColumn: "18",
              dataParent: "neurological.table",
              fqn: "neurological.table.conciousness",
              containerType: "fieldset",
              containerKey: "conciousness",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Pupils",
              pageDataKey: "neurological",
              level2Key: "table",
              elementKey: "pupils",
              inputType: "fieldset",
              formRow: "3",
              formColumn: "1",
              tableColumn: "18",
              dataParent: "neurological.table",
              fqn: "neurological.table.pupils",
              containerType: "fieldset",
              containerKey: "pupils",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Duration",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "glasgowComaScale",
              elementKey: "duration",
              inputType: "text",
              tableColumn: "19",
              tableCss: "hr-table",
              fsetRow: "2",
              fsetCol: "1",
              dataParent: "neurological.table.glasgowComaScale",
              fqn: "neurological.table.glasgowComaScale.duration",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Left pupil size",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "pupils",
              elementKey: "leftPupilSize",
              inputType: "select",
              formCss: "is-one-quarter",
              tableColumn: "19",
              fsetRow: "1",
              fsetCol: "1",
              options: [
                {
                  text: "1"
                },
                {
                  text: "2"
                },
                {
                  text: "3"
                },
                {
                  text: "4"
                },
                {
                  text: "5"
                },
                {
                  text: "6"
                },
                {
                  text: "7"
                },
                {
                  text: "8"
                }
              ],
              dataParent: "neurological.table.pupils",
              fqn: "neurological.table.pupils.leftPupilSize",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Left pupil response to light",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "pupils",
              elementKey: "leftPupilResponseToLight",
              inputType: "select",
              formCss: "is-one-quarter",
              tableColumn: "20",
              fsetRow: "2",
              fsetCol: "1",
              options: [
                {
                  text: "Brisk"
                },
                {
                  text: "Sluggish"
                },
                {
                  text: "Fixed"
                }
              ],
              dataParent: "neurological.table.pupils",
              fqn: "neurological.table.pupils.leftPupilResponseToLight",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Right pupil size",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "pupils",
              elementKey: "rightPupilSize",
              inputType: "select",
              formCss: "is-one-quarter",
              tableColumn: "21",
              fsetRow: "1",
              fsetCol: "2",
              options: [
                {
                  text: "1"
                },
                {
                  text: "2"
                },
                {
                  text: "3"
                },
                {
                  text: "4"
                },
                {
                  text: "5"
                },
                {
                  text: "6"
                },
                {
                  text: "7"
                },
                {
                  text: "8"
                }
              ],
              dataParent: "neurological.table.pupils",
              fqn: "neurological.table.pupils.rightPupilSize",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Right pupil response to light",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "pupils",
              elementKey: "rightPupilResponseToLight",
              inputType: "select",
              formCss: "is-one-quarter",
              tableColumn: "22",
              fsetRow: "2",
              fsetCol: "2",
              options: [
                {
                  text: "Brisk"
                },
                {
                  text: "Sluggish"
                },
                {
                  text: "Fixed"
                }
              ],
              dataParent: "neurological.table.pupils",
              fqn: "neurological.table.pupils.rightPupilResponseToLight",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Both pupils",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "pupils",
              elementKey: "bothPupils",
              inputType: "select",
              formCss: "is-one-quarter",
              tableColumn: "23",
              tableCss: "hr-table",
              fsetRow: "1",
              fsetCol: "3",
              options: [
                {
                  text: "Equal"
                },
                {
                  text: "Unequal"
                }
              ],
              dataParent: "neurological.table.pupils",
              fqn: "neurological.table.pupils.bothPupils",
              tableKey: "table",
              formColumn: "3"
            },
            {
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "pupils",
              elementKey: "aSpacer",
              inputType: "spacer",
              tableColumn: "24",
              fsetRow: "2",
              fsetCol: "3",
              dataParent: "neurological.table.pupils",
              fqn: "neurological.table.pupils.aSpacer",
              tableCss: "hide-table-element",
              tableKey: "table",
              formColumn: "3"
            },
            {
              label: "Stroke Assessment",
              pageDataKey: "neurological",
              level2Key: "table",
              elementKey: "stroke",
              inputType: "fieldset",
              formRow: "4",
              formColumn: "1",
              formCss: "fieldset_row",
              tableColumn: "24",
              dataParent: "neurological.table",
              fqn: "neurological.table.stroke",
              containerType: "fieldset",
              containerKey: "stroke",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Level of conciousness",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "levelOfConciousness",
              inputType: "select",
              formCss: "is-one-third",
              tableColumn: "25",
              fsetRow: "1",
              fsetCol: "1",
              options: [
                {
                  text: "0 = Alert; keenly responsive"
                },
                {
                  text: "1 = Not alert; but arousable by minor stimulation"
                },
                {
                  text: "2 = Not alert; requires repeated stimulation"
                },
                {
                  text: "3 = Unresponsive or responds only with reflex"
                }
              ],
              passToFunction: "strokeAssessmentCalculation",
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.levelOfConciousness",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Level of conciousness questions",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "levelOfConciousnessQuestions",
              inputType: "select",
              formCss: "is-one-third",
              tableColumn: "26",
              fsetRow: "1",
              fsetCol: "2",
              options: [
                {
                  text: "0 = Answers two questions correctly"
                },
                {
                  text: "1 = Answers one question correctly"
                },
                {
                  text: "2 = Answers neither question correctly"
                }
              ],
              passToFunction: "strokeAssessmentCalculation",
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.levelOfConciousnessQuestions",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Level of conciousness commands",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "levelOfConciousnessCommands",
              inputType: "select",
              formCss: "is-one-third",
              tableColumn: "27",
              tableCss: "hr-table",
              fsetRow: "1",
              fsetCol: "3",
              options: [
                {
                  text: "0 = Performs both tasks correctly"
                },
                {
                  text: "1 = Performs one task correctly"
                },
                {
                  text: "2 = Performs neither task correctly"
                }
              ],
              passToFunction: "strokeAssessmentCalculation",
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.levelOfConciousnessCommands",
              tableKey: "table",
              formColumn: "3"
            },
            {
              label: "Motor - left arm",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "motorLeftArm",
              inputType: "select",
              formCss: "is-one-third",
              tableColumn: "28",
              fsetRow: "2",
              fsetCol: "1",
              options: [
                {
                  text: "0 = No drift"
                },
                {
                  text: "1 = Drift"
                },
                {
                  text: "2 = Some effort against gravity"
                },
                {
                  text: "3 = No effort against gravity; limb falls"
                },
                {
                  text: "4 = No movement"
                }
              ],
              passToFunction: "strokeAssessmentCalculation",
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.motorLeftArm",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Motor - right arm",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "motorRightArm",
              inputType: "select",
              formCss: "is-one-third",
              tableColumn: "29",
              fsetRow: "2",
              fsetCol: "2",
              options: [
                {
                  text: "0 = No drift"
                },
                {
                  text: "1 = Drift"
                },
                {
                  text: "2 = Some effort against gravity"
                },
                {
                  text: "3 = No effort against gravity; limb falls"
                },
                {
                  text: "4 = No movement"
                }
              ],
              passToFunction: "strokeAssessmentCalculation",
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.motorRightArm",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Motor - left leg",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "motorLeftLeg",
              inputType: "select",
              formCss: "is-one-third",
              tableColumn: "30",
              fsetRow: "3",
              fsetCol: "1",
              options: [
                {
                  text: "0 = No drift"
                },
                {
                  text: "1 = Drift"
                },
                {
                  text: "2 = Some effort against gravity"
                },
                {
                  text: "3 = No effort against gravity"
                },
                {
                  text: "4 = No movement"
                }
              ],
              passToFunction: "strokeAssessmentCalculation",
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.motorLeftLeg",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Motor - right leg",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "motorRightLeg",
              inputType: "select",
              formCss: "is-one-third",
              tableColumn: "31",
              fsetRow: "3",
              fsetCol: "2",
              options: [
                {
                  text: "0 = No drift"
                },
                {
                  text: "1 = Drift"
                },
                {
                  text: "2 = Some effort against gravity"
                },
                {
                  text: "3 = No effort against gravity"
                },
                {
                  text: "4 = No movement"
                }
              ],
              passToFunction: "strokeAssessmentCalculation",
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.motorRightLeg",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Limb ataxia",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "limbAtaxia",
              inputType: "select",
              formCss: "is-one-third",
              tableColumn: "32",
              tableCss: "hr-table",
              fsetRow: "3",
              fsetCol: "3",
              options: [
                {
                  text: "0 = Absent"
                },
                {
                  text: "1 = Present in one limb"
                },
                {
                  text: "2 = Present in two limbs"
                }
              ],
              passToFunction: "strokeAssessmentCalculation",
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.limbAtaxia",
              tableKey: "table",
              formColumn: "3"
            },
            {
              label: "Best gaze",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "bestGaze",
              inputType: "select",
              formCss: "is-one-third",
              tableColumn: "33",
              fsetRow: "4",
              fsetCol: "1",
              options: [
                {
                  text: "0 = Normal"
                },
                {
                  text: "1 = Partial gaze palsy"
                },
                {
                  text: "2 = Forced deviation"
                }
              ],
              passToFunction: "strokeAssessmentCalculation",
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.bestGaze",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Visual",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "visual",
              inputType: "select",
              formCss: "is-one-third",
              tableColumn: "34",
              fsetRow: "4",
              fsetCol: "2",
              options: [
                {
                  text: "0 = No visual loss"
                },
                {
                  text: "1 = Partial hemianopia"
                },
                {
                  text: "2 = Partial paralysis"
                },
                {
                  text: "3 = Complete paralysis of one or both sides"
                }
              ],
              passToFunction: "strokeAssessmentCalculation",
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.visual",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Facial palsy",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "facialPalsy",
              inputType: "select",
              formCss: "is-one-third",
              tableColumn: "35",
              fsetRow: "4",
              fsetCol: "3",
              options: [
                {
                  text: "0 = Normal symmetric movements"
                },
                {
                  text: "1 = Minor paralysis"
                },
                {
                  text: "2 = Partial paralysis"
                },
                {
                  text: "3 = Complete paralysis of one or both sides"
                }
              ],
              passToFunction: "strokeAssessmentCalculation",
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.facialPalsy",
              tableKey: "table",
              formColumn: "3"
            },
            {
              label: "Sensory",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "sensory",
              inputType: "select",
              formCss: "is-one-third",
              tableColumn: "36",
              fsetRow: "5",
              fsetCol: "1",
              options: [
                {
                  text: "0 = Normal; no sensory loss"
                },
                {
                  text: "1 = Mild-to-moderate sensory loss"
                },
                {
                  text: "2 = Severe to total sensory loss"
                }
              ],
              passToFunction: "strokeAssessmentCalculation",
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.sensory",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Best language",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "bestLanguage",
              inputType: "select",
              formCss: "is-one-third",
              tableColumn: "37",
              fsetRow: "5",
              fsetCol: "2",
              options: [
                {
                  text: "0 = No aphasia; normal"
                },
                {
                  text: "1 = Mild to moderate aphasia"
                },
                {
                  text: "2 = Severe aphasia"
                },
                {
                  text: "3 = Mute, global aphasia"
                }
              ],
              passToFunction: "strokeAssessmentCalculation",
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.bestLanguage",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Dysarthria",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "dysarthria",
              inputType: "select",
              formCss: "is-one-third",
              tableColumn: "38",
              fsetRow: "5",
              fsetCol: "3",
              options: [
                {
                  text: "0 = Normal"
                },
                {
                  text: "1 = Mild to moderate"
                },
                {
                  text: "2 = Severe dysarthria"
                }
              ],
              passToFunction: "strokeAssessmentCalculation",
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.dysarthria",
              tableKey: "table",
              formColumn: "3"
            },
            {
              label: "Extinction and inattention",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "extinctionAndInattention",
              inputType: "select",
              formCss: "is-one-third",
              tableColumn: "39",
              tableCss: "hr-table",
              fsetRow: "6",
              fsetCol: "1",
              options: [
                {
                  text: "0 = No abnormality"
                },
                {
                  text: "1 = Visual, tactile, auditory, spatial, or personal inattention"
                },
                {
                  text: "2 = Profound hemi-inattention or extinction"
                }
              ],
              passToFunction: "strokeAssessmentCalculation",
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.extinctionAndInattention",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "<b>Stroke assessment calculation</b>",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "strokeAssessmentCalculation",
              inputType: "calculatedValue",
              formCss: "is-one-third",
              tableColumn: "40",
              tableCss: "hr-table",
              fsetRow: "7",
              fsetCol: "1",
              defaultValue: "0",
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.strokeAssessmentCalculation",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Comments",
              pageDataKey: "neurological",
              level2Key: "table",
              elementKey: "comments",
              inputType: "textarea",
              formRow: "5",
              formColumn: "1",
              formCss: "is-two-thirds",
              tableColumn: "41",
              fsetRow: "8",
              fsetCol: "1",
              dataParent: "neurological.table",
              fqn: "neurological.table.comments",
              tableKey: "table"
            },
            {
              label: "<b>Resources</b><p><a target=\"_blank\" href=\"/assets/standardized-assessment-tools/Morse-Fall-Scale-score.png\">Morse Fall Score </a></br><a target=\"_blank\" href=\"/assets/standardized-assessment-tools/mini-mental-health-screen.pdf\">Mini-mental state examination (MMSE)</a></p>",
              pageDataKey: "neurological",
              level2Key: "table",
              elementKey: "resources",
              inputType: "form_label",
              formRow: "5",
              formColumn: "1",
              formCss: "is-one-third",
              fsetRow: "8",
              fsetCol: "2",
              dataParent: "neurological.table",
              fqn: "neurological.table.resources",
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
                    pageDataKey: "neurological",
                    level2Key: "table",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    formCss: "user_name",
                    tableColumn: "1",
                    dataParent: "neurological.table",
                    fqn: "neurological.table.name",
                    tableKey: "table"
                  },
                  {
                    label: "Profession",
                    pageDataKey: "neurological",
                    level2Key: "table",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    tableColumn: "2",
                    dataParent: "neurological.table",
                    fqn: "neurological.table.profession",
                    tableKey: "table"
                  },
                  {
                    label: "Day",
                    pageDataKey: "neurological",
                    level2Key: "table",
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    tableColumn: "3",
                    dataParent: "neurological.table",
                    fqn: "neurological.table.day",
                    tableKey: "table"
                  },
                  {
                    label: "Time",
                    pageDataKey: "neurological",
                    level2Key: "table",
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    tableColumn: "4",
                    tableCss: "hr-table",
                    dataParent: "neurological.table",
                    fqn: "neurological.table.time",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "Status",
                    pageDataKey: "neurological",
                    level2Key: "table",
                    elementKey: "status",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "1",
                    formCss: "is-one-third",
                    tableColumn: "5",
                    dataParent: "neurological.table",
                    fqn: "neurological.table.status",
                    containerType: "fieldset",
                    containerKey: "status",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              label: "Alert",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "status",
                              elementKey: "alert",
                              inputType: "checkbox",
                              tableColumn: "6",
                              fsetRow: "1",
                              fsetCol: "1",
                              dataParent: "neurological.table.status",
                              fqn: "neurological.table.status.alert",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Oriented",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "status",
                              elementKey: "oriented",
                              inputType: "checkbox",
                              tableColumn: "7",
                              fsetRow: "2",
                              fsetCol: "1",
                              dataParent: "neurological.table.status",
                              fqn: "neurological.table.status.oriented",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "Confused",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "status",
                              elementKey: "confused",
                              inputType: "checkbox",
                              tableColumn: "8",
                              fsetRow: "3",
                              fsetCol: "1",
                              dataParent: "neurological.table.status",
                              fqn: "neurological.table.status.confused",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "Drowsy",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "status",
                              elementKey: "drowsy",
                              inputType: "checkbox",
                              tableColumn: "9",
                              fsetRow: "4",
                              fsetCol: "1",
                              dataParent: "neurological.table.status",
                              fqn: "neurological.table.status.drowsy",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              label: "Unresponsive",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "status",
                              elementKey: "unresponsive",
                              inputType: "checkbox",
                              tableColumn: "10",
                              fsetRow: "5",
                              fsetCol: "1",
                              dataParent: "neurological.table.status",
                              fqn: "neurological.table.status.unresponsive",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              label: "Dizziness",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "status",
                              elementKey: "dizziness",
                              inputType: "checkbox",
                              tableColumn: "11",
                              fsetRow: "6",
                              fsetCol: "1",
                              dataParent: "neurological.table.status",
                              fqn: "neurological.table.status.dizziness",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "7",
                          elements: [
                            {
                              label: "Eye opening",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "status",
                              elementKey: "blurredVision",
                              inputType: "checkbox",
                              tableColumn: "12",
                              tableCss: "hr-table",
                              fsetRow: "7",
                              fsetCol: "1",
                              dataParent: "neurological.table.status",
                              fqn: "neurological.table.status.blurredVision",
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
                    label: "Glasgow Coma Scale",
                    pageDataKey: "neurological",
                    level2Key: "table",
                    elementKey: "glasgowComaScale",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "2",
                    tableColumn: "13",
                    dataParent: "neurological.table",
                    fqn: "neurological.table.glasgowComaScale",
                    containerType: "fieldset",
                    containerKey: "glasgowComaScale",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              label: "Eye opening",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "glasgowComaScale",
                              elementKey: "eyeOpening",
                              inputType: "select",
                              tableColumn: "14",
                              fsetRow: "1",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "0 = Non testable"
                                },
                                {
                                  text: "1 = None"
                                },
                                {
                                  text: "2 = To pressure"
                                },
                                {
                                  text: "3 = To sound"
                                },
                                {
                                  text: "4 = Spontaneous"
                                }
                              ],
                              passToFunction: "glasgowCalculation",
                              dataParent: "neurological.table.glasgowComaScale",
                              fqn: "neurological.table.glasgowComaScale.eyeOpening",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Loss of conciousness",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "glasgowComaScale",
                              elementKey: "loss",
                              inputType: "select",
                              tableColumn: "18",
                              fsetRow: "1",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "No"
                                },
                                {
                                  text: "Yes"
                                },
                                {
                                  text: "Unknown"
                                }
                              ],
                              dataParent: "neurological.table.glasgowComaScale",
                              fqn: "neurological.table.glasgowComaScale.loss",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Verbal response",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "glasgowComaScale",
                              elementKey: "verbalResponse",
                              inputType: "select",
                              tableColumn: "15",
                              fsetRow: "2",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "0 = Non testable"
                                },
                                {
                                  text: "1 = None"
                                },
                                {
                                  text: "2 = Sounds"
                                },
                                {
                                  text: "3 = Words"
                                },
                                {
                                  text: "4 = Confused"
                                },
                                {
                                  text: "5 = Oriented"
                                }
                              ],
                              passToFunction: "glasgowCalculation",
                              dataParent: "neurological.table.glasgowComaScale",
                              fqn: "neurological.table.glasgowComaScale.verbalResponse",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Duration",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "glasgowComaScale",
                              elementKey: "duration",
                              inputType: "text",
                              tableColumn: "19",
                              tableCss: "hr-table",
                              fsetRow: "2",
                              fsetCol: "1",
                              dataParent: "neurological.table.glasgowComaScale",
                              fqn: "neurological.table.glasgowComaScale.duration",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "Best motor response",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "glasgowComaScale",
                              elementKey: "bestMotorResponse",
                              inputType: "select",
                              formCss: "is-one-third",
                              tableColumn: "16",
                              tableCss: "hr-table",
                              fsetRow: "3",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "0 = Non testable"
                                },
                                {
                                  text: "1 = None"
                                },
                                {
                                  text: "2 = Extension"
                                },
                                {
                                  text: "3 = Normal flexion"
                                },
                                {
                                  text: "4 = Localising"
                                },
                                {
                                  text: "5 = Obeys commands"
                                }
                              ],
                              passToFunction: "glasgowCalculation",
                              dataParent: "neurological.table.glasgowComaScale",
                              fqn: "neurological.table.glasgowComaScale.bestMotorResponse",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "<b>Glasgow Coma Scale calculation</b>",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "glasgowComaScale",
                              elementKey: "glasgowCalculation",
                              inputType: "calculatedValue",
                              tableColumn: "17",
                              tableCss: "hr-table",
                              fsetRow: "4",
                              fsetCol: "1",
                              defaultValue: "0",
                              options: [
                                {
                                  text: "=eyeOpening+verbalResponse+bestMotorResponse"
                                }
                              ],
                              dataParent: "neurological.table.glasgowComaScale",
                              fqn: "neurological.table.glasgowComaScale.glasgowCalculation",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        }
                      ],
                      columnsCount: 2
                    }
                  },
                  {
                    label: "Conciousness",
                    pageDataKey: "neurological",
                    level2Key: "table",
                    elementKey: "conciousness",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "3",
                    tableColumn: "18",
                    dataParent: "neurological.table",
                    fqn: "neurological.table.conciousness",
                    containerType: "fieldset",
                    containerKey: "conciousness",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [],
                      columnsCount: 0
                    }
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    label: "Pupils",
                    pageDataKey: "neurological",
                    level2Key: "table",
                    elementKey: "pupils",
                    inputType: "fieldset",
                    formRow: "3",
                    formColumn: "1",
                    tableColumn: "18",
                    dataParent: "neurological.table",
                    fqn: "neurological.table.pupils",
                    containerType: "fieldset",
                    containerKey: "pupils",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              label: "Left pupil size",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "pupils",
                              elementKey: "leftPupilSize",
                              inputType: "select",
                              formCss: "is-one-quarter",
                              tableColumn: "19",
                              fsetRow: "1",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "1"
                                },
                                {
                                  text: "2"
                                },
                                {
                                  text: "3"
                                },
                                {
                                  text: "4"
                                },
                                {
                                  text: "5"
                                },
                                {
                                  text: "6"
                                },
                                {
                                  text: "7"
                                },
                                {
                                  text: "8"
                                }
                              ],
                              dataParent: "neurological.table.pupils",
                              fqn: "neurological.table.pupils.leftPupilSize",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Right pupil size",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "pupils",
                              elementKey: "rightPupilSize",
                              inputType: "select",
                              formCss: "is-one-quarter",
                              tableColumn: "21",
                              fsetRow: "1",
                              fsetCol: "2",
                              options: [
                                {
                                  text: "1"
                                },
                                {
                                  text: "2"
                                },
                                {
                                  text: "3"
                                },
                                {
                                  text: "4"
                                },
                                {
                                  text: "5"
                                },
                                {
                                  text: "6"
                                },
                                {
                                  text: "7"
                                },
                                {
                                  text: "8"
                                }
                              ],
                              dataParent: "neurological.table.pupils",
                              fqn: "neurological.table.pupils.rightPupilSize",
                              tableKey: "table",
                              formColumn: "2"
                            },
                            {
                              label: "Both pupils",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "pupils",
                              elementKey: "bothPupils",
                              inputType: "select",
                              formCss: "is-one-quarter",
                              tableColumn: "23",
                              tableCss: "hr-table",
                              fsetRow: "1",
                              fsetCol: "3",
                              options: [
                                {
                                  text: "Equal"
                                },
                                {
                                  text: "Unequal"
                                }
                              ],
                              dataParent: "neurological.table.pupils",
                              fqn: "neurological.table.pupils.bothPupils",
                              tableKey: "table",
                              formColumn: "3"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Left pupil response to light",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "pupils",
                              elementKey: "leftPupilResponseToLight",
                              inputType: "select",
                              formCss: "is-one-quarter",
                              tableColumn: "20",
                              fsetRow: "2",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "Brisk"
                                },
                                {
                                  text: "Sluggish"
                                },
                                {
                                  text: "Fixed"
                                }
                              ],
                              dataParent: "neurological.table.pupils",
                              fqn: "neurological.table.pupils.leftPupilResponseToLight",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Right pupil response to light",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "pupils",
                              elementKey: "rightPupilResponseToLight",
                              inputType: "select",
                              formCss: "is-one-quarter",
                              tableColumn: "22",
                              fsetRow: "2",
                              fsetCol: "2",
                              options: [
                                {
                                  text: "Brisk"
                                },
                                {
                                  text: "Sluggish"
                                },
                                {
                                  text: "Fixed"
                                }
                              ],
                              dataParent: "neurological.table.pupils",
                              fqn: "neurological.table.pupils.rightPupilResponseToLight",
                              tableKey: "table",
                              formColumn: "2"
                            },
                            {
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "pupils",
                              elementKey: "aSpacer",
                              inputType: "spacer",
                              tableColumn: "24",
                              fsetRow: "2",
                              fsetCol: "3",
                              dataParent: "neurological.table.pupils",
                              fqn: "neurological.table.pupils.aSpacer",
                              tableCss: "hide-table-element",
                              tableKey: "table",
                              formColumn: "3"
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
                formRow: "4",
                elements: [
                  {
                    label: "Stroke Assessment",
                    pageDataKey: "neurological",
                    level2Key: "table",
                    elementKey: "stroke",
                    inputType: "fieldset",
                    formRow: "4",
                    formColumn: "1",
                    formCss: "fieldset_row",
                    tableColumn: "24",
                    dataParent: "neurological.table",
                    fqn: "neurological.table.stroke",
                    containerType: "fieldset",
                    containerKey: "stroke",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              label: "Level of conciousness",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "levelOfConciousness",
                              inputType: "select",
                              formCss: "is-one-third",
                              tableColumn: "25",
                              fsetRow: "1",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "0 = Alert; keenly responsive"
                                },
                                {
                                  text: "1 = Not alert; but arousable by minor stimulation"
                                },
                                {
                                  text: "2 = Not alert; requires repeated stimulation"
                                },
                                {
                                  text: "3 = Unresponsive or responds only with reflex"
                                }
                              ],
                              passToFunction: "strokeAssessmentCalculation",
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.levelOfConciousness",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Level of conciousness questions",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "levelOfConciousnessQuestions",
                              inputType: "select",
                              formCss: "is-one-third",
                              tableColumn: "26",
                              fsetRow: "1",
                              fsetCol: "2",
                              options: [
                                {
                                  text: "0 = Answers two questions correctly"
                                },
                                {
                                  text: "1 = Answers one question correctly"
                                },
                                {
                                  text: "2 = Answers neither question correctly"
                                }
                              ],
                              passToFunction: "strokeAssessmentCalculation",
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.levelOfConciousnessQuestions",
                              tableKey: "table",
                              formColumn: "2"
                            },
                            {
                              label: "Level of conciousness commands",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "levelOfConciousnessCommands",
                              inputType: "select",
                              formCss: "is-one-third",
                              tableColumn: "27",
                              tableCss: "hr-table",
                              fsetRow: "1",
                              fsetCol: "3",
                              options: [
                                {
                                  text: "0 = Performs both tasks correctly"
                                },
                                {
                                  text: "1 = Performs one task correctly"
                                },
                                {
                                  text: "2 = Performs neither task correctly"
                                }
                              ],
                              passToFunction: "strokeAssessmentCalculation",
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.levelOfConciousnessCommands",
                              tableKey: "table",
                              formColumn: "3"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Motor - left arm",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "motorLeftArm",
                              inputType: "select",
                              formCss: "is-one-third",
                              tableColumn: "28",
                              fsetRow: "2",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "0 = No drift"
                                },
                                {
                                  text: "1 = Drift"
                                },
                                {
                                  text: "2 = Some effort against gravity"
                                },
                                {
                                  text: "3 = No effort against gravity; limb falls"
                                },
                                {
                                  text: "4 = No movement"
                                }
                              ],
                              passToFunction: "strokeAssessmentCalculation",
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.motorLeftArm",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Motor - right arm",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "motorRightArm",
                              inputType: "select",
                              formCss: "is-one-third",
                              tableColumn: "29",
                              fsetRow: "2",
                              fsetCol: "2",
                              options: [
                                {
                                  text: "0 = No drift"
                                },
                                {
                                  text: "1 = Drift"
                                },
                                {
                                  text: "2 = Some effort against gravity"
                                },
                                {
                                  text: "3 = No effort against gravity; limb falls"
                                },
                                {
                                  text: "4 = No movement"
                                }
                              ],
                              passToFunction: "strokeAssessmentCalculation",
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.motorRightArm",
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "Motor - left leg",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "motorLeftLeg",
                              inputType: "select",
                              formCss: "is-one-third",
                              tableColumn: "30",
                              fsetRow: "3",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "0 = No drift"
                                },
                                {
                                  text: "1 = Drift"
                                },
                                {
                                  text: "2 = Some effort against gravity"
                                },
                                {
                                  text: "3 = No effort against gravity"
                                },
                                {
                                  text: "4 = No movement"
                                }
                              ],
                              passToFunction: "strokeAssessmentCalculation",
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.motorLeftLeg",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Motor - right leg",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "motorRightLeg",
                              inputType: "select",
                              formCss: "is-one-third",
                              tableColumn: "31",
                              fsetRow: "3",
                              fsetCol: "2",
                              options: [
                                {
                                  text: "0 = No drift"
                                },
                                {
                                  text: "1 = Drift"
                                },
                                {
                                  text: "2 = Some effort against gravity"
                                },
                                {
                                  text: "3 = No effort against gravity"
                                },
                                {
                                  text: "4 = No movement"
                                }
                              ],
                              passToFunction: "strokeAssessmentCalculation",
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.motorRightLeg",
                              tableKey: "table",
                              formColumn: "2"
                            },
                            {
                              label: "Limb ataxia",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "limbAtaxia",
                              inputType: "select",
                              formCss: "is-one-third",
                              tableColumn: "32",
                              tableCss: "hr-table",
                              fsetRow: "3",
                              fsetCol: "3",
                              options: [
                                {
                                  text: "0 = Absent"
                                },
                                {
                                  text: "1 = Present in one limb"
                                },
                                {
                                  text: "2 = Present in two limbs"
                                }
                              ],
                              passToFunction: "strokeAssessmentCalculation",
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.limbAtaxia",
                              tableKey: "table",
                              formColumn: "3"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "Best gaze",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "bestGaze",
                              inputType: "select",
                              formCss: "is-one-third",
                              tableColumn: "33",
                              fsetRow: "4",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "0 = Normal"
                                },
                                {
                                  text: "1 = Partial gaze palsy"
                                },
                                {
                                  text: "2 = Forced deviation"
                                }
                              ],
                              passToFunction: "strokeAssessmentCalculation",
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.bestGaze",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Visual",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "visual",
                              inputType: "select",
                              formCss: "is-one-third",
                              tableColumn: "34",
                              fsetRow: "4",
                              fsetCol: "2",
                              options: [
                                {
                                  text: "0 = No visual loss"
                                },
                                {
                                  text: "1 = Partial hemianopia"
                                },
                                {
                                  text: "2 = Partial paralysis"
                                },
                                {
                                  text: "3 = Complete paralysis of one or both sides"
                                }
                              ],
                              passToFunction: "strokeAssessmentCalculation",
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.visual",
                              tableKey: "table",
                              formColumn: "2"
                            },
                            {
                              label: "Facial palsy",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "facialPalsy",
                              inputType: "select",
                              formCss: "is-one-third",
                              tableColumn: "35",
                              fsetRow: "4",
                              fsetCol: "3",
                              options: [
                                {
                                  text: "0 = Normal symmetric movements"
                                },
                                {
                                  text: "1 = Minor paralysis"
                                },
                                {
                                  text: "2 = Partial paralysis"
                                },
                                {
                                  text: "3 = Complete paralysis of one or both sides"
                                }
                              ],
                              passToFunction: "strokeAssessmentCalculation",
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.facialPalsy",
                              tableKey: "table",
                              formColumn: "3"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              label: "Sensory",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "sensory",
                              inputType: "select",
                              formCss: "is-one-third",
                              tableColumn: "36",
                              fsetRow: "5",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "0 = Normal; no sensory loss"
                                },
                                {
                                  text: "1 = Mild-to-moderate sensory loss"
                                },
                                {
                                  text: "2 = Severe to total sensory loss"
                                }
                              ],
                              passToFunction: "strokeAssessmentCalculation",
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.sensory",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Best language",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "bestLanguage",
                              inputType: "select",
                              formCss: "is-one-third",
                              tableColumn: "37",
                              fsetRow: "5",
                              fsetCol: "2",
                              options: [
                                {
                                  text: "0 = No aphasia; normal"
                                },
                                {
                                  text: "1 = Mild to moderate aphasia"
                                },
                                {
                                  text: "2 = Severe aphasia"
                                },
                                {
                                  text: "3 = Mute, global aphasia"
                                }
                              ],
                              passToFunction: "strokeAssessmentCalculation",
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.bestLanguage",
                              tableKey: "table",
                              formColumn: "2"
                            },
                            {
                              label: "Dysarthria",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "dysarthria",
                              inputType: "select",
                              formCss: "is-one-third",
                              tableColumn: "38",
                              fsetRow: "5",
                              fsetCol: "3",
                              options: [
                                {
                                  text: "0 = Normal"
                                },
                                {
                                  text: "1 = Mild to moderate"
                                },
                                {
                                  text: "2 = Severe dysarthria"
                                }
                              ],
                              passToFunction: "strokeAssessmentCalculation",
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.dysarthria",
                              tableKey: "table",
                              formColumn: "3"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              label: "Extinction and inattention",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "extinctionAndInattention",
                              inputType: "select",
                              formCss: "is-one-third",
                              tableColumn: "39",
                              tableCss: "hr-table",
                              fsetRow: "6",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "0 = No abnormality"
                                },
                                {
                                  text: "1 = Visual, tactile, auditory, spatial, or personal inattention"
                                },
                                {
                                  text: "2 = Profound hemi-inattention or extinction"
                                }
                              ],
                              passToFunction: "strokeAssessmentCalculation",
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.extinctionAndInattention",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "7",
                          elements: [
                            {
                              label: "<b>Stroke assessment calculation</b>",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "strokeAssessmentCalculation",
                              inputType: "calculatedValue",
                              formCss: "is-one-third",
                              tableColumn: "40",
                              tableCss: "hr-table",
                              fsetRow: "7",
                              fsetCol: "1",
                              defaultValue: "0",
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.strokeAssessmentCalculation",
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
                formRow: "5",
                elements: [
                  {
                    label: "Comments",
                    pageDataKey: "neurological",
                    level2Key: "table",
                    elementKey: "comments",
                    inputType: "textarea",
                    formRow: "5",
                    formColumn: "1",
                    formCss: "is-two-thirds",
                    tableColumn: "41",
                    fsetRow: "8",
                    fsetCol: "1",
                    dataParent: "neurological.table",
                    fqn: "neurological.table.comments",
                    tableKey: "table"
                  },
                  {
                    label: "<b>Resources</b><p><a target=\"_blank\" href=\"/assets/standardized-assessment-tools/Morse-Fall-Scale-score.png\">Morse Fall Score </a></br><a target=\"_blank\" href=\"/assets/standardized-assessment-tools/mini-mental-health-screen.pdf\">Mini-mental state examination (MMSE)</a></p>",
                    pageDataKey: "neurological",
                    level2Key: "table",
                    elementKey: "resources",
                    inputType: "form_label",
                    formRow: "5",
                    formColumn: "1",
                    formCss: "is-one-third",
                    fsetRow: "8",
                    fsetCol: "2",
                    dataParent: "neurological.table",
                    fqn: "neurological.table.resources",
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
    respiratory: {
      pageTitle: "Respiratory assessment",
      pageDataKey: "respiratory",
      pageChildren: [
        {
          label: "Name",
          elementKey: "name",
          fqn: "respiratory.table.name",
          dataCaseStudy: "Jason"
        },
        {
          label: "Profession",
          elementKey: "profession",
          fqn: "respiratory.table.profession",
          dataCaseStudy: "RN"
        },
        {
          label: "Day",
          elementKey: "day",
          fqn: "respiratory.table.day",
          dataCaseStudy: "0"
        },
        {
          label: "Time",
          elementKey: "time",
          fqn: "respiratory.table.time",
          dataCaseStudy: "0.8125"
        },
        {
          label: "Patent",
          elementKey: "patent",
          fqn: "respiratory.table.airway.patent",
          dataCaseStudy: "TRUE"
        },
        {
          label: "Obstructed",
          elementKey: "obstructed",
          fqn: "respiratory.table.airway.obstructed"
        },
        {
          label: "Oral endotracheal tube",
          elementKey: "oett",
          fqn: "respiratory.table.airway.oett"
        },
        {
          label: "Other",
          elementKey: "otherValue",
          fqn: "respiratory.table.airway.otherValue"
        },
        {
          label: "Oxygen therapy",
          elementKey: "oxygenTherapy",
          fqn: "respiratory.table.airway.oxygenTherapy"
        },
        {
          label: "Flow rate",
          elementKey: "flowRate",
          fqn: "respiratory.table.airway.flowRate"
        },
        {
          label: "Left upper lung",
          elementKey: "lul",
          fqn: "respiratory.table.breath.lul",
          dataCaseStudy: "Normal"
        },
        {
          label: "Right upper lung",
          elementKey: "rul",
          fqn: "respiratory.table.breath.rul",
          dataCaseStudy: "Normal"
        },
        {
          elementKey: "aSpacer",
          fqn: "respiratory.table.breath.aSpacer",
          dataCaseStudy: "Normal"
        },
        {
          label: "Right middle lung",
          elementKey: "rml",
          fqn: "respiratory.table.breath.rml",
          dataCaseStudy: "Decreased"
        },
        {
          label: "Left lower lung",
          elementKey: "lll",
          fqn: "respiratory.table.breath.lll",
          dataCaseStudy: "Decreased"
        },
        {
          label: "Right lower lung",
          elementKey: "rll",
          fqn: "respiratory.table.breath.rll",
          dataCaseStudy: "Decreased"
        },
        {
          label: "Respiratory rhythm",
          elementKey: "respiratoryRhythm",
          fqn: "respiratory.table.breath.respiratoryRhythm",
          dataCaseStudy: "Regular"
        },
        {
          label: "Respiratory depth",
          elementKey: "respiratoryDepth",
          fqn: "respiratory.table.breath.respiratoryDepth",
          dataCaseStudy: "Shallow"
        },
        {
          label: "Cough",
          elementKey: "cough",
          fqn: "respiratory.table.sputum.cough",
          dataCaseStudy: "No"
        },
        {
          label: "Sputum colour",
          elementKey: "sputumColour",
          fqn: "respiratory.table.sputum.sputumColour",
          dataCaseStudy: "(nothing selected)"
        },
        {
          elementKey: "aSpacer",
          fqn: "respiratory.table.sputum.aSpacer",
          dataCaseStudy: "Normal"
        },
        {
          label: "Sputum comments",
          elementKey: "sputumComments",
          fqn: "respiratory.table.sputum.sputumComments",
          dataCaseStudy: "(no notes)"
        },
        {
          label: "General comments",
          elementKey: "generalComments",
          fqn: "respiratory.table.generalComments",
          dataCaseStudy: "(no notes)"
        }
      ],
      generated: "2019-05-02T12:22:22-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a respiratory assessment",
          tableCells: [
            {
              label: "Name",
              pageDataKey: "respiratory",
              level2Key: "table",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              formCss: "user_name",
              tableColumn: "1",
              dataParent: "respiratory.table",
              fqn: "respiratory.table.name",
              tableKey: "table"
            },
            {
              label: "Profession",
              pageDataKey: "respiratory",
              level2Key: "table",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              formCss: "user_pro",
              tableColumn: "2",
              dataParent: "respiratory.table",
              fqn: "respiratory.table.profession",
              tableKey: "table"
            },
            {
              label: "Day",
              pageDataKey: "respiratory",
              level2Key: "table",
              elementKey: "day",
              inputType: "day",
              formRow: "1",
              formColumn: "3",
              formCss: "user_day",
              tableColumn: "3",
              dataParent: "respiratory.table",
              fqn: "respiratory.table.day",
              tableKey: "table"
            },
            {
              label: "Time",
              pageDataKey: "respiratory",
              level2Key: "table",
              elementKey: "time",
              inputType: "time",
              formRow: "1",
              formColumn: "4",
              formCss: "user_time",
              tableColumn: "4",
              tableCss: "hr-table",
              dataParent: "respiratory.table",
              fqn: "respiratory.table.time",
              tableKey: "table"
            },
            {
              label: "Patent",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "airway",
              elementKey: "patent",
              inputType: "checkbox",
              tableColumn: "5",
              fsetRow: "1",
              fsetCol: "1",
              dataParent: "respiratory.table.airway",
              fqn: "respiratory.table.airway.patent",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Obstructed",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "airway",
              elementKey: "obstructed",
              inputType: "checkbox",
              tableColumn: "6",
              fsetRow: "2",
              fsetCol: "1",
              dataParent: "respiratory.table.airway",
              fqn: "respiratory.table.airway.obstructed",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Oral endotracheal tube",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "airway",
              elementKey: "oett",
              inputType: "checkbox",
              tableColumn: "7",
              fsetRow: "3",
              fsetCol: "1",
              dataParent: "respiratory.table.airway",
              fqn: "respiratory.table.airway.oett",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Other",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "airway",
              elementKey: "otherValue",
              inputType: "checkbox",
              tableColumn: "8",
              tableCss: "hr-table",
              fsetRow: "4",
              fsetCol: "1",
              dataParent: "respiratory.table.airway",
              fqn: "respiratory.table.airway.otherValue",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Oxygen therapy",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "airway",
              elementKey: "oxygenTherapy",
              inputType: "text",
              tableColumn: "9",
              fsetRow: "5",
              fsetCol: "1",
              dataParent: "respiratory.table.airway",
              fqn: "respiratory.table.airway.oxygenTherapy",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Flow rate",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "airway",
              elementKey: "flowRate",
              inputType: "text",
              tableColumn: "10",
              tableCss: "hr-table",
              fsetRow: "6",
              fsetCol: "1",
              suffix: "/lpm",
              dataParent: "respiratory.table.airway",
              fqn: "respiratory.table.airway.flowRate",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Airway",
              pageDataKey: "respiratory",
              level2Key: "table",
              elementKey: "airway",
              inputType: "fieldset",
              formRow: "2",
              formColumn: "1",
              dataParent: "respiratory.table",
              fqn: "respiratory.table.airway",
              containerType: "fieldset",
              containerKey: "airway",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Left upper lung",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "breath",
              elementKey: "lul",
              inputType: "select",
              tableColumn: "11",
              fsetRow: "1",
              fsetCol: "1",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Wheeze"
                },
                {
                  text: "Crackles"
                },
                {
                  text: "Absent"
                },
                {
                  text: "Deceased"
                }
              ],
              dataParent: "respiratory.table.breath",
              fqn: "respiratory.table.breath.lul",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Right upper lung",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "breath",
              elementKey: "rul",
              inputType: "select",
              tableColumn: "12",
              fsetRow: "1",
              fsetCol: "2",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Wheeze"
                },
                {
                  text: "Crackles"
                },
                {
                  text: "Absent"
                },
                {
                  text: "Deceased"
                }
              ],
              dataParent: "respiratory.table.breath",
              fqn: "respiratory.table.breath.rul",
              tableKey: "table",
              formColumn: "2"
            },
            {
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "breath",
              elementKey: "aSpacer",
              inputType: "spacer",
              tableColumn: "13",
              fsetRow: "2",
              fsetCol: "1",
              dataParent: "respiratory.table.breath",
              fqn: "respiratory.table.breath.aSpacer",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Right middle lung",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "breath",
              elementKey: "rml",
              inputType: "select",
              tableColumn: "14",
              fsetRow: "2",
              fsetCol: "2",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Wheeze"
                },
                {
                  text: "Crackles"
                },
                {
                  text: "Absent"
                },
                {
                  text: "Deceased"
                }
              ],
              dataParent: "respiratory.table.breath",
              fqn: "respiratory.table.breath.rml",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Left lower lung",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "breath",
              elementKey: "lll",
              inputType: "select",
              tableColumn: "15",
              fsetRow: "3",
              fsetCol: "1",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Wheeze"
                },
                {
                  text: "Crackles"
                },
                {
                  text: "Absent"
                },
                {
                  text: "Deceased"
                }
              ],
              dataParent: "respiratory.table.breath",
              fqn: "respiratory.table.breath.lll",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Right lower lung",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "breath",
              elementKey: "rll",
              inputType: "select",
              tableColumn: "16",
              tableCss: "hr-table",
              fsetRow: "3",
              fsetCol: "2",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Wheeze"
                },
                {
                  text: "Crackles"
                },
                {
                  text: "Absent"
                },
                {
                  text: "Deceased"
                }
              ],
              dataParent: "respiratory.table.breath",
              fqn: "respiratory.table.breath.rll",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Respiratory rhythm",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "breath",
              elementKey: "respiratoryRhythm",
              inputType: "select",
              tableColumn: "17",
              fsetRow: "4",
              fsetCol: "1",
              options: [
                {
                  text: "Regular"
                },
                {
                  text: "Irregular"
                },
                {
                  text: "Paradoxical"
                }
              ],
              dataParent: "respiratory.table.breath",
              fqn: "respiratory.table.breath.respiratoryRhythm",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Respiratory depth",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "breath",
              elementKey: "respiratoryDepth",
              inputType: "select",
              tableColumn: "18",
              tableCss: "hr-table",
              fsetRow: "5",
              fsetCol: "1",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Shallow"
                },
                {
                  text: "Deep"
                }
              ],
              dataParent: "respiratory.table.breath",
              fqn: "respiratory.table.breath.respiratoryDepth",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Breath sounds",
              pageDataKey: "respiratory",
              level2Key: "table",
              elementKey: "breath",
              inputType: "fieldset",
              formRow: "2",
              formColumn: "2",
              dataParent: "respiratory.table",
              fqn: "respiratory.table.breath",
              containerType: "fieldset",
              containerKey: "breath",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Cough",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "sputum",
              elementKey: "cough",
              inputType: "select",
              tableColumn: "19",
              fsetRow: "1",
              fsetCol: "1",
              options: [
                {
                  text: "No"
                },
                {
                  text: "Nonreproductive"
                },
                {
                  text: "Productive"
                }
              ],
              dataParent: "respiratory.table.sputum",
              fqn: "respiratory.table.sputum.cough",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Sputum colour",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "sputum",
              elementKey: "sputumColour",
              inputType: "select",
              tableColumn: "20",
              fsetRow: "2",
              fsetCol: "1",
              options: [
                {
                  text: "Mucoid"
                },
                {
                  text: "Purulent"
                },
                {
                  text: "Yellow-green"
                },
                {
                  text: "Rust-coloured"
                },
                {
                  text: "Pink, blood tinged"
                },
                {
                  text: "Pink, frothy"
                },
                {
                  text: "Profuse, colourless"
                },
                {
                  text: "Bloody"
                }
              ],
              dataParent: "respiratory.table.sputum",
              fqn: "respiratory.table.sputum.sputumColour",
              tableKey: "table",
              formColumn: "1"
            },
            {
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "sputum",
              elementKey: "aSpacer",
              inputType: "spacer",
              tableColumn: "21",
              dataParent: "respiratory.table.sputum",
              fqn: "respiratory.table.sputum.aSpacer",
              tableCss: "hide-table-element"
            },
            {
              label: "Sputum comments",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "sputum",
              elementKey: "sputumComments",
              inputType: "text",
              tableColumn: "22",
              tableCss: "hr-table",
              fsetRow: "3",
              fsetCol: "1",
              dataParent: "respiratory.table.sputum",
              fqn: "respiratory.table.sputum.sputumComments",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Sputum",
              pageDataKey: "respiratory",
              level2Key: "table",
              elementKey: "sputum",
              inputType: "fieldset",
              formRow: "2",
              formColumn: "3",
              dataParent: "respiratory.table",
              fqn: "respiratory.table.sputum",
              containerType: "fieldset",
              containerKey: "sputum",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "General comments",
              pageDataKey: "respiratory",
              level2Key: "table",
              elementKey: "generalComments",
              inputType: "textarea",
              formRow: "3",
              formColumn: "1",
              tableColumn: "23",
              dataParent: "respiratory.table",
              fqn: "respiratory.table.generalComments",
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
                    pageDataKey: "respiratory",
                    level2Key: "table",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    formCss: "user_name",
                    tableColumn: "1",
                    dataParent: "respiratory.table",
                    fqn: "respiratory.table.name",
                    tableKey: "table"
                  },
                  {
                    label: "Profession",
                    pageDataKey: "respiratory",
                    level2Key: "table",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    tableColumn: "2",
                    dataParent: "respiratory.table",
                    fqn: "respiratory.table.profession",
                    tableKey: "table"
                  },
                  {
                    label: "Day",
                    pageDataKey: "respiratory",
                    level2Key: "table",
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    tableColumn: "3",
                    dataParent: "respiratory.table",
                    fqn: "respiratory.table.day",
                    tableKey: "table"
                  },
                  {
                    label: "Time",
                    pageDataKey: "respiratory",
                    level2Key: "table",
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    tableColumn: "4",
                    tableCss: "hr-table",
                    dataParent: "respiratory.table",
                    fqn: "respiratory.table.time",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "Airway",
                    pageDataKey: "respiratory",
                    level2Key: "table",
                    elementKey: "airway",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "respiratory.table",
                    fqn: "respiratory.table.airway",
                    containerType: "fieldset",
                    containerKey: "airway",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              label: "Patent",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "airway",
                              elementKey: "patent",
                              inputType: "checkbox",
                              tableColumn: "5",
                              fsetRow: "1",
                              fsetCol: "1",
                              dataParent: "respiratory.table.airway",
                              fqn: "respiratory.table.airway.patent",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Obstructed",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "airway",
                              elementKey: "obstructed",
                              inputType: "checkbox",
                              tableColumn: "6",
                              fsetRow: "2",
                              fsetCol: "1",
                              dataParent: "respiratory.table.airway",
                              fqn: "respiratory.table.airway.obstructed",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "Oral endotracheal tube",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "airway",
                              elementKey: "oett",
                              inputType: "checkbox",
                              tableColumn: "7",
                              fsetRow: "3",
                              fsetCol: "1",
                              dataParent: "respiratory.table.airway",
                              fqn: "respiratory.table.airway.oett",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "Other",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "airway",
                              elementKey: "otherValue",
                              inputType: "checkbox",
                              tableColumn: "8",
                              tableCss: "hr-table",
                              fsetRow: "4",
                              fsetCol: "1",
                              dataParent: "respiratory.table.airway",
                              fqn: "respiratory.table.airway.otherValue",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              label: "Oxygen therapy",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "airway",
                              elementKey: "oxygenTherapy",
                              inputType: "text",
                              tableColumn: "9",
                              fsetRow: "5",
                              fsetCol: "1",
                              dataParent: "respiratory.table.airway",
                              fqn: "respiratory.table.airway.oxygenTherapy",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              label: "Flow rate",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "airway",
                              elementKey: "flowRate",
                              inputType: "text",
                              tableColumn: "10",
                              tableCss: "hr-table",
                              fsetRow: "6",
                              fsetCol: "1",
                              suffix: "/lpm",
                              dataParent: "respiratory.table.airway",
                              fqn: "respiratory.table.airway.flowRate",
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
                    label: "Breath sounds",
                    pageDataKey: "respiratory",
                    level2Key: "table",
                    elementKey: "breath",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "2",
                    dataParent: "respiratory.table",
                    fqn: "respiratory.table.breath",
                    containerType: "fieldset",
                    containerKey: "breath",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              label: "Left upper lung",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "breath",
                              elementKey: "lul",
                              inputType: "select",
                              tableColumn: "11",
                              fsetRow: "1",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "Normal"
                                },
                                {
                                  text: "Wheeze"
                                },
                                {
                                  text: "Crackles"
                                },
                                {
                                  text: "Absent"
                                },
                                {
                                  text: "Deceased"
                                }
                              ],
                              dataParent: "respiratory.table.breath",
                              fqn: "respiratory.table.breath.lul",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Right upper lung",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "breath",
                              elementKey: "rul",
                              inputType: "select",
                              tableColumn: "12",
                              fsetRow: "1",
                              fsetCol: "2",
                              options: [
                                {
                                  text: "Normal"
                                },
                                {
                                  text: "Wheeze"
                                },
                                {
                                  text: "Crackles"
                                },
                                {
                                  text: "Absent"
                                },
                                {
                                  text: "Deceased"
                                }
                              ],
                              dataParent: "respiratory.table.breath",
                              fqn: "respiratory.table.breath.rul",
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "breath",
                              elementKey: "aSpacer",
                              inputType: "spacer",
                              tableColumn: "13",
                              fsetRow: "2",
                              fsetCol: "1",
                              dataParent: "respiratory.table.breath",
                              fqn: "respiratory.table.breath.aSpacer",
                              tableCss: "hide-table-element",
                              tableKey: "table"
                            },
                            {
                              label: "Right middle lung",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "breath",
                              elementKey: "rml",
                              inputType: "select",
                              tableColumn: "14",
                              fsetRow: "2",
                              fsetCol: "2",
                              options: [
                                {
                                  text: "Normal"
                                },
                                {
                                  text: "Wheeze"
                                },
                                {
                                  text: "Crackles"
                                },
                                {
                                  text: "Absent"
                                },
                                {
                                  text: "Deceased"
                                }
                              ],
                              dataParent: "respiratory.table.breath",
                              fqn: "respiratory.table.breath.rml",
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "Left lower lung",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "breath",
                              elementKey: "lll",
                              inputType: "select",
                              tableColumn: "15",
                              fsetRow: "3",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "Normal"
                                },
                                {
                                  text: "Wheeze"
                                },
                                {
                                  text: "Crackles"
                                },
                                {
                                  text: "Absent"
                                },
                                {
                                  text: "Deceased"
                                }
                              ],
                              dataParent: "respiratory.table.breath",
                              fqn: "respiratory.table.breath.lll",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Right lower lung",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "breath",
                              elementKey: "rll",
                              inputType: "select",
                              tableColumn: "16",
                              tableCss: "hr-table",
                              fsetRow: "3",
                              fsetCol: "2",
                              options: [
                                {
                                  text: "Normal"
                                },
                                {
                                  text: "Wheeze"
                                },
                                {
                                  text: "Crackles"
                                },
                                {
                                  text: "Absent"
                                },
                                {
                                  text: "Deceased"
                                }
                              ],
                              dataParent: "respiratory.table.breath",
                              fqn: "respiratory.table.breath.rll",
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "Respiratory rhythm",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "breath",
                              elementKey: "respiratoryRhythm",
                              inputType: "select",
                              tableColumn: "17",
                              fsetRow: "4",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "Regular"
                                },
                                {
                                  text: "Irregular"
                                },
                                {
                                  text: "Paradoxical"
                                }
                              ],
                              dataParent: "respiratory.table.breath",
                              fqn: "respiratory.table.breath.respiratoryRhythm",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              label: "Respiratory depth",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "breath",
                              elementKey: "respiratoryDepth",
                              inputType: "select",
                              tableColumn: "18",
                              tableCss: "hr-table",
                              fsetRow: "5",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "Normal"
                                },
                                {
                                  text: "Shallow"
                                },
                                {
                                  text: "Deep"
                                }
                              ],
                              dataParent: "respiratory.table.breath",
                              fqn: "respiratory.table.breath.respiratoryDepth",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        }
                      ],
                      columnsCount: 2
                    }
                  },
                  {
                    label: "Sputum",
                    pageDataKey: "respiratory",
                    level2Key: "table",
                    elementKey: "sputum",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "3",
                    dataParent: "respiratory.table",
                    fqn: "respiratory.table.sputum",
                    containerType: "fieldset",
                    containerKey: "sputum",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              label: "Cough",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "sputum",
                              elementKey: "cough",
                              inputType: "select",
                              tableColumn: "19",
                              fsetRow: "1",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "No"
                                },
                                {
                                  text: "Nonreproductive"
                                },
                                {
                                  text: "Productive"
                                }
                              ],
                              dataParent: "respiratory.table.sputum",
                              fqn: "respiratory.table.sputum.cough",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Sputum colour",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "sputum",
                              elementKey: "sputumColour",
                              inputType: "select",
                              tableColumn: "20",
                              fsetRow: "2",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "Mucoid"
                                },
                                {
                                  text: "Purulent"
                                },
                                {
                                  text: "Yellow-green"
                                },
                                {
                                  text: "Rust-coloured"
                                },
                                {
                                  text: "Pink, blood tinged"
                                },
                                {
                                  text: "Pink, frothy"
                                },
                                {
                                  text: "Profuse, colourless"
                                },
                                {
                                  text: "Bloody"
                                }
                              ],
                              dataParent: "respiratory.table.sputum",
                              fqn: "respiratory.table.sputum.sputumColour",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "Sputum comments",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "sputum",
                              elementKey: "sputumComments",
                              inputType: "text",
                              tableColumn: "22",
                              tableCss: "hr-table",
                              fsetRow: "3",
                              fsetCol: "1",
                              dataParent: "respiratory.table.sputum",
                              fqn: "respiratory.table.sputum.sputumComments",
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
                    label: "General comments",
                    pageDataKey: "respiratory",
                    level2Key: "table",
                    elementKey: "generalComments",
                    inputType: "textarea",
                    formRow: "3",
                    formColumn: "1",
                    tableColumn: "23",
                    dataParent: "respiratory.table",
                    fqn: "respiratory.table.generalComments",
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
    cardiovascular: {
      pageTitle: "Cardiovascular assessment",
      pageDataKey: "cardiovascular",
      pageChildren: [
        {
          label: "Name",
          elementKey: "name",
          fqn: "cardiovascular.table.name",
          dataCaseStudy: "Jason"
        },
        {
          label: "Profession",
          elementKey: "profession",
          fqn: "cardiovascular.table.profession",
          dataCaseStudy: "RN"
        },
        {
          label: "Day",
          elementKey: "day",
          fqn: "cardiovascular.table.day",
          dataCaseStudy: "0"
        },
        {
          label: "Time",
          elementKey: "time",
          fqn: "cardiovascular.table.time",
          dataCaseStudy: "0.8125"
        },
        {
          label: "Pulse",
          elementKey: "pulse",
          fqn: "cardiovascular.table.pulse",
          dataCaseStudy: "Regular"
        },
        {
          label: "Skin appearance",
          elementKey: "skinAppearance",
          fqn: "cardiovascular.table.skinAppearance",
          dataCaseStudy: "Normal"
        },
        {
          elementKey: "spacer1",
          fqn: "cardiovascular.table.spacer1",
          dataCaseStudy: "Normal"
        },
        {
          label: "Cap refill",
          elementKey: "labelCapRefill",
          fqn: "cardiovascular.table.labelCapRefill",
          dataCaseStudy: "Normal"
        },
        {
          label: "Temperature",
          elementKey: "labelTemperature",
          fqn: "cardiovascular.table.labelTemperature",
          dataCaseStudy: "Normal"
        },
        {
          label: "Peripheral edema",
          elementKey: "labelPeripheral",
          fqn: "cardiovascular.table.labelPeripheral",
          dataCaseStudy: "Normal"
        },
        {
          label: "Nail bed colour",
          elementKey: "labelNailBed",
          fqn: "cardiovascular.table.labelNailBed",
          dataCaseStudy: "Normal"
        },
        {
          label: "Right hand",
          elementKey: "labelRight",
          fqn: "cardiovascular.table.labelRight",
          dataCaseStudy: "Normal"
        },
        {
          label: "Left hand",
          elementKey: "labelLeftHand",
          fqn: "cardiovascular.table.labelLeftHand",
          dataCaseStudy: "Normal"
        },
        {
          label: "Right foot",
          elementKey: "labelRightFoot",
          fqn: "cardiovascular.table.labelRightFoot",
          dataCaseStudy: "Normal"
        },
        {
          label: "Left foot",
          elementKey: "labelLeftFoot",
          fqn: "cardiovascular.table.labelLeftFoot",
          dataCaseStudy: "Normal"
        },
        {
          label: "Cap refill: Left hand",
          elementKey: "capRefillRightHand",
          fqn: "cardiovascular.table.capRefillRightHand",
          dataCaseStudy: "Normal"
        },
        {
          label: "Cap refill: Right foot",
          elementKey: "capRefillLeftHand",
          fqn: "cardiovascular.table.capRefillLeftHand",
          dataCaseStudy: "Normal"
        },
        {
          label: "Cap refill: Left foot",
          elementKey: "capRefillRightFoot",
          fqn: "cardiovascular.table.capRefillRightFoot",
          dataCaseStudy: "Normal"
        },
        {
          label: "Temperature: Right hand",
          elementKey: "capRefillLeftFoot",
          fqn: "cardiovascular.table.capRefillLeftFoot",
          dataCaseStudy: "Normal"
        },
        {
          label: "Temperature: Left hand",
          elementKey: "temperatureRightHand",
          fqn: "cardiovascular.table.temperatureRightHand",
          dataCaseStudy: "Warm"
        },
        {
          label: "Temperature: Right foot",
          elementKey: "temperatureLeftHand",
          fqn: "cardiovascular.table.temperatureLeftHand",
          dataCaseStudy: "Warm"
        },
        {
          label: "Temperature: Left foot",
          elementKey: "temperatureRightFoot",
          fqn: "cardiovascular.table.temperatureRightFoot",
          dataCaseStudy: "Warm"
        },
        {
          label: "Peripheral edema: Right hand",
          elementKey: "temperatureLeftFoot",
          fqn: "cardiovascular.table.temperatureLeftFoot",
          dataCaseStudy: "Warm"
        },
        {
          label: "Peripheral edema: Left hand",
          elementKey: "peripheralEdemaRightHand",
          fqn: "cardiovascular.table.peripheralEdemaRightHand",
          dataCaseStudy: "No"
        },
        {
          label: "Peripheral edema: Right foot",
          elementKey: "peripheralEdemaLeftHand",
          fqn: "cardiovascular.table.peripheralEdemaLeftHand",
          dataCaseStudy: "No"
        },
        {
          label: "Peripheral edema: Left foot",
          elementKey: "peripheralEdemaRightFoot",
          fqn: "cardiovascular.table.peripheralEdemaRightFoot",
          dataCaseStudy: "No"
        },
        {
          label: "Nail bed colour: Right hand",
          elementKey: "peripheralEdemaLeftFoot",
          fqn: "cardiovascular.table.peripheralEdemaLeftFoot",
          dataCaseStudy: "No"
        },
        {
          label: "Nail bed colour: Left hand",
          elementKey: "nailBedColourRightHand",
          fqn: "cardiovascular.table.nailBedColourRightHand",
          dataCaseStudy: "Pink"
        },
        {
          label: "Nail bed colour: Right Foot",
          elementKey: "nailBedColourLeftHand",
          fqn: "cardiovascular.table.nailBedColourLeftHand",
          dataCaseStudy: "Pink"
        },
        {
          label: "Nail bed colour: Left foot",
          elementKey: "nailBedColourRightFoot",
          fqn: "cardiovascular.table.nailBedColourRightFoot",
          dataCaseStudy: "Pink"
        },
        {
          elementKey: "nailBedColourLeftFoot",
          fqn: "cardiovascular.table.nailBedColourLeftFoot",
          dataCaseStudy: "Pink"
        },
        {
          label: "Comments",
          elementKey: "comments",
          fqn: "cardiovascular.table.comments",
          dataCaseStudy: "(blank)"
        }
      ],
      generated: "2019-05-02T12:22:22-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a cardiovascular assessment",
          tableCells: [
            {
              label: "Name",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              formCss: "user_name",
              tableColumn: "1",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.name",
              tableKey: "table"
            },
            {
              label: "Profession",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              formCss: "user_pro",
              tableColumn: "2",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.profession",
              tableKey: "table"
            },
            {
              label: "Day",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "day",
              inputType: "day",
              formRow: "1",
              formColumn: "3",
              formCss: "user_day",
              tableColumn: "3",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.day",
              tableKey: "table"
            },
            {
              label: "Time",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "time",
              inputType: "time",
              formRow: "1",
              formColumn: "4",
              formCss: "user_time",
              tableColumn: "4",
              tableCss: "hr-table",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.time",
              tableKey: "table"
            },
            {
              label: "Pulse",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "pulse",
              inputType: "select",
              formRow: "2",
              formColumn: "1",
              formCss: "is_one_third",
              tableColumn: "5",
              options: [
                {
                  text: "Regular"
                },
                {
                  text: "Irregular"
                },
                {
                  text: "Normal"
                },
                {
                  text: "Weak"
                },
                {
                  text: "Bounding"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.pulse",
              tableKey: "table"
            },
            {
              label: "Skin appearance",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "skinAppearance",
              inputType: "select",
              formRow: "2",
              formColumn: "2",
              formCss: "is_one_third",
              tableColumn: "6",
              tableCss: "hr-table",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Pale"
                },
                {
                  text: "Mottled"
                },
                {
                  text: "Cyanotic"
                },
                {
                  text: "Flushed"
                },
                {
                  text: "Jaundiced"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.skinAppearance",
              tableKey: "table"
            },
            {
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "spacer1",
              inputType: "form_label",
              formRow: "3",
              formColumn: "1",
              formOption: "spacer",
              tableColumn: "7",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.spacer1",
              tableKey: "table"
            },
            {
              label: "Cap refill",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "labelCapRefill",
              inputType: "form_label",
              formRow: "3",
              formColumn: "2",
              tableColumn: "8",
              helperText: "Normal < 3 seconds-NL-Delayed > 3 seconds",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.labelCapRefill",
              tableKey: "table"
            },
            {
              label: "Temperature",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "labelTemperature",
              inputType: "form_label",
              formRow: "3",
              formColumn: "3",
              tableColumn: "9",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.labelTemperature",
              tableKey: "table"
            },
            {
              label: "Peripheral edema",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "labelPeripheral",
              inputType: "form_label",
              formRow: "3",
              formColumn: "4",
              tableColumn: "10",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.labelPeripheral",
              tableKey: "table"
            },
            {
              label: "Nail bed colour",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "labelNailBed",
              inputType: "form_label",
              formRow: "3",
              formColumn: "5",
              tableColumn: "11",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.labelNailBed",
              tableKey: "table"
            },
            {
              label: "Right hand",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "labelRight",
              inputType: "form_label",
              formRow: "4",
              formColumn: "1",
              tableColumn: "12",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.labelRight",
              tableKey: "table"
            },
            {
              label: "Left hand",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "labelLeftHand",
              inputType: "form_label",
              formRow: "5",
              formColumn: "1",
              tableColumn: "13",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.labelLeftHand",
              tableKey: "table"
            },
            {
              label: "Right foot",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "labelRightFoot",
              inputType: "form_label",
              formRow: "6",
              formColumn: "1",
              tableColumn: "14",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.labelRightFoot",
              tableKey: "table"
            },
            {
              label: "Left foot",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "labelLeftFoot",
              inputType: "form_label",
              formRow: "7",
              formColumn: "1",
              tableColumn: "15",
              tableCss: "hr-table",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.labelLeftFoot",
              tableKey: "table"
            },
            {
              label: "Cap refill: Left hand",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "capRefillRightHand",
              inputType: "select",
              formRow: "4",
              formColumn: "2",
              formOption: "hideLabel",
              tableColumn: "16",
              options: [
                {
                  text: "Normal < 3 seconds"
                },
                {
                  text: "Delayed > 3 seconds"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.capRefillRightHand",
              tableKey: "table"
            },
            {
              label: "Cap refill: Right foot",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "capRefillLeftHand",
              inputType: "select",
              formRow: "5",
              formColumn: "2",
              formOption: "hideLabel",
              tableColumn: "17",
              options: [
                {
                  text: "Normal < 3 seconds"
                },
                {
                  text: "Delayed > 3 seconds"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.capRefillLeftHand",
              tableKey: "table"
            },
            {
              label: "Cap refill: Left foot",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "capRefillRightFoot",
              inputType: "select",
              formRow: "6",
              formColumn: "2",
              formOption: "hideLabel",
              tableColumn: "18",
              options: [
                {
                  text: "Normal < 3 seconds"
                },
                {
                  text: "Delayed > 3 seconds"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.capRefillRightFoot",
              tableKey: "table"
            },
            {
              label: "Temperature: Right hand",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "capRefillLeftFoot",
              inputType: "select",
              formRow: "7",
              formColumn: "2",
              formOption: "hideLabel",
              tableColumn: "19",
              tableCss: "hr-table",
              options: [
                {
                  text: "Normal < 3 seconds"
                },
                {
                  text: "Delayed > 3 seconds"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.capRefillLeftFoot",
              tableKey: "table"
            },
            {
              label: "Temperature: Left hand",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "temperatureRightHand",
              inputType: "select",
              formRow: "4",
              formColumn: "3",
              formOption: "hideLabel",
              tableColumn: "20",
              options: [
                {
                  text: "Warm"
                },
                {
                  text: "Cool"
                },
                {
                  text: "Hot"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.temperatureRightHand",
              tableKey: "table"
            },
            {
              label: "Temperature: Right foot",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "temperatureLeftHand",
              inputType: "select",
              formRow: "5",
              formColumn: "3",
              formOption: "hideLabel",
              tableColumn: "21",
              options: [
                {
                  text: "Warm"
                },
                {
                  text: "Cool"
                },
                {
                  text: "Hot"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.temperatureLeftHand",
              tableKey: "table"
            },
            {
              label: "Temperature: Left foot",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "temperatureRightFoot",
              inputType: "select",
              formRow: "6",
              formColumn: "3",
              formOption: "hideLabel",
              tableColumn: "22",
              options: [
                {
                  text: "Warm"
                },
                {
                  text: "Cool"
                },
                {
                  text: "Hot"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.temperatureRightFoot",
              tableKey: "table"
            },
            {
              label: "Peripheral edema: Right hand",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "temperatureLeftFoot",
              inputType: "select",
              formRow: "7",
              formColumn: "3",
              formOption: "hideLabel",
              tableColumn: "23",
              tableCss: "hr-table",
              options: [
                {
                  text: "Warm"
                },
                {
                  text: "Cool"
                },
                {
                  text: "Hot"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.temperatureLeftFoot",
              tableKey: "table"
            },
            {
              label: "Peripheral edema: Left hand",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "peripheralEdemaRightHand",
              inputType: "select",
              formRow: "4",
              formColumn: "4",
              formOption: "hideLabel",
              tableColumn: "24",
              options: [
                {
                  text: "No"
                },
                {
                  text: "Ankle"
                },
                {
                  text: "Pedal"
                },
                {
                  text: "Sacral"
                },
                {
                  text: "Pitting"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.peripheralEdemaRightHand",
              tableKey: "table"
            },
            {
              label: "Peripheral edema: Right foot",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "peripheralEdemaLeftHand",
              inputType: "select",
              formRow: "5",
              formColumn: "4",
              formOption: "hideLabel",
              tableColumn: "25",
              options: [
                {
                  text: "No"
                },
                {
                  text: "Ankle"
                },
                {
                  text: "Pedal"
                },
                {
                  text: "Sacral"
                },
                {
                  text: "Pitting"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.peripheralEdemaLeftHand",
              tableKey: "table"
            },
            {
              label: "Peripheral edema: Left foot",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "peripheralEdemaRightFoot",
              inputType: "select",
              formRow: "6",
              formColumn: "4",
              formOption: "hideLabel",
              tableColumn: "26",
              options: [
                {
                  text: "No"
                },
                {
                  text: "Ankle"
                },
                {
                  text: "Pedal"
                },
                {
                  text: "Sacral"
                },
                {
                  text: "Pitting"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.peripheralEdemaRightFoot",
              tableKey: "table"
            },
            {
              label: "Nail bed colour: Right hand",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "peripheralEdemaLeftFoot",
              inputType: "select",
              formRow: "7",
              formColumn: "4",
              formOption: "hideLabel",
              tableColumn: "27",
              tableCss: "hr-table",
              options: [
                {
                  text: "No"
                },
                {
                  text: "Ankle"
                },
                {
                  text: "Pedal"
                },
                {
                  text: "Sacral"
                },
                {
                  text: "Pitting"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.peripheralEdemaLeftFoot",
              tableKey: "table"
            },
            {
              label: "Nail bed colour: Left hand",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "nailBedColourRightHand",
              inputType: "select",
              formRow: "4",
              formColumn: "5",
              formOption: "hideLabel",
              tableColumn: "28",
              options: [
                {
                  text: "Pink"
                },
                {
                  text: "Cyanotic"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.nailBedColourRightHand",
              tableKey: "table"
            },
            {
              label: "Nail bed colour: Right Foot",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "nailBedColourLeftHand",
              inputType: "select",
              formRow: "5",
              formColumn: "5",
              formOption: "hideLabel",
              tableColumn: "29",
              options: [
                {
                  text: "Pink"
                },
                {
                  text: "Cyanotic"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.nailBedColourLeftHand",
              tableKey: "table"
            },
            {
              label: "Nail bed colour: Left foot",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "nailBedColourRightFoot",
              inputType: "select",
              formRow: "6",
              formColumn: "5",
              formOption: "hideLabel",
              tableColumn: "30",
              options: [
                {
                  text: "Pink"
                },
                {
                  text: "Cyanotic"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.nailBedColourRightFoot",
              tableKey: "table"
            },
            {
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "nailBedColourLeftFoot",
              inputType: "select",
              formRow: "7",
              formColumn: "5",
              formOption: "hideLabel",
              tableColumn: "31",
              tableCss: "hr-table",
              options: [
                {
                  text: "Pink"
                },
                {
                  text: "Cyanotic"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.nailBedColourLeftFoot",
              tableKey: "table"
            },
            {
              label: "Comments",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "comments",
              inputType: "textarea",
              formRow: "8",
              formColumn: "1",
              tableColumn: "32",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.comments",
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
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    formCss: "user_name",
                    tableColumn: "1",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.name",
                    tableKey: "table"
                  },
                  {
                    label: "Profession",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    tableColumn: "2",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.profession",
                    tableKey: "table"
                  },
                  {
                    label: "Day",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    tableColumn: "3",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.day",
                    tableKey: "table"
                  },
                  {
                    label: "Time",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    tableColumn: "4",
                    tableCss: "hr-table",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.time",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "Pulse",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "pulse",
                    inputType: "select",
                    formRow: "2",
                    formColumn: "1",
                    formCss: "is_one_third",
                    tableColumn: "5",
                    options: [
                      {
                        text: "Regular"
                      },
                      {
                        text: "Irregular"
                      },
                      {
                        text: "Normal"
                      },
                      {
                        text: "Weak"
                      },
                      {
                        text: "Bounding"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.pulse",
                    tableKey: "table"
                  },
                  {
                    label: "Skin appearance",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "skinAppearance",
                    inputType: "select",
                    formRow: "2",
                    formColumn: "2",
                    formCss: "is_one_third",
                    tableColumn: "6",
                    tableCss: "hr-table",
                    options: [
                      {
                        text: "Normal"
                      },
                      {
                        text: "Pale"
                      },
                      {
                        text: "Mottled"
                      },
                      {
                        text: "Cyanotic"
                      },
                      {
                        text: "Flushed"
                      },
                      {
                        text: "Jaundiced"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.skinAppearance",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "spacer1",
                    inputType: "form_label",
                    formRow: "3",
                    formColumn: "1",
                    formOption: "spacer",
                    tableColumn: "7",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.spacer1",
                    tableKey: "table"
                  },
                  {
                    label: "Cap refill",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "labelCapRefill",
                    inputType: "form_label",
                    formRow: "3",
                    formColumn: "2",
                    tableColumn: "8",
                    helperText: "Normal < 3 seconds-NL-Delayed > 3 seconds",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.labelCapRefill",
                    tableKey: "table"
                  },
                  {
                    label: "Temperature",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "labelTemperature",
                    inputType: "form_label",
                    formRow: "3",
                    formColumn: "3",
                    tableColumn: "9",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.labelTemperature",
                    tableKey: "table"
                  },
                  {
                    label: "Peripheral edema",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "labelPeripheral",
                    inputType: "form_label",
                    formRow: "3",
                    formColumn: "4",
                    tableColumn: "10",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.labelPeripheral",
                    tableKey: "table"
                  },
                  {
                    label: "Nail bed colour",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "labelNailBed",
                    inputType: "form_label",
                    formRow: "3",
                    formColumn: "5",
                    tableColumn: "11",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.labelNailBed",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    label: "Right hand",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "labelRight",
                    inputType: "form_label",
                    formRow: "4",
                    formColumn: "1",
                    tableColumn: "12",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.labelRight",
                    tableKey: "table"
                  },
                  {
                    label: "Cap refill: Left hand",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "capRefillRightHand",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "2",
                    formOption: "hideLabel",
                    tableColumn: "16",
                    options: [
                      {
                        text: "Normal < 3 seconds"
                      },
                      {
                        text: "Delayed > 3 seconds"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.capRefillRightHand",
                    tableKey: "table"
                  },
                  {
                    label: "Temperature: Left hand",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "temperatureRightHand",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "3",
                    formOption: "hideLabel",
                    tableColumn: "20",
                    options: [
                      {
                        text: "Warm"
                      },
                      {
                        text: "Cool"
                      },
                      {
                        text: "Hot"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.temperatureRightHand",
                    tableKey: "table"
                  },
                  {
                    label: "Peripheral edema: Left hand",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "peripheralEdemaRightHand",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "4",
                    formOption: "hideLabel",
                    tableColumn: "24",
                    options: [
                      {
                        text: "No"
                      },
                      {
                        text: "Ankle"
                      },
                      {
                        text: "Pedal"
                      },
                      {
                        text: "Sacral"
                      },
                      {
                        text: "Pitting"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.peripheralEdemaRightHand",
                    tableKey: "table"
                  },
                  {
                    label: "Nail bed colour: Left hand",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "nailBedColourRightHand",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "5",
                    formOption: "hideLabel",
                    tableColumn: "28",
                    options: [
                      {
                        text: "Pink"
                      },
                      {
                        text: "Cyanotic"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.nailBedColourRightHand",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "5",
                elements: [
                  {
                    label: "Left hand",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "labelLeftHand",
                    inputType: "form_label",
                    formRow: "5",
                    formColumn: "1",
                    tableColumn: "13",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.labelLeftHand",
                    tableKey: "table"
                  },
                  {
                    label: "Cap refill: Right foot",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "capRefillLeftHand",
                    inputType: "select",
                    formRow: "5",
                    formColumn: "2",
                    formOption: "hideLabel",
                    tableColumn: "17",
                    options: [
                      {
                        text: "Normal < 3 seconds"
                      },
                      {
                        text: "Delayed > 3 seconds"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.capRefillLeftHand",
                    tableKey: "table"
                  },
                  {
                    label: "Temperature: Right foot",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "temperatureLeftHand",
                    inputType: "select",
                    formRow: "5",
                    formColumn: "3",
                    formOption: "hideLabel",
                    tableColumn: "21",
                    options: [
                      {
                        text: "Warm"
                      },
                      {
                        text: "Cool"
                      },
                      {
                        text: "Hot"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.temperatureLeftHand",
                    tableKey: "table"
                  },
                  {
                    label: "Peripheral edema: Right foot",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "peripheralEdemaLeftHand",
                    inputType: "select",
                    formRow: "5",
                    formColumn: "4",
                    formOption: "hideLabel",
                    tableColumn: "25",
                    options: [
                      {
                        text: "No"
                      },
                      {
                        text: "Ankle"
                      },
                      {
                        text: "Pedal"
                      },
                      {
                        text: "Sacral"
                      },
                      {
                        text: "Pitting"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.peripheralEdemaLeftHand",
                    tableKey: "table"
                  },
                  {
                    label: "Nail bed colour: Right Foot",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "nailBedColourLeftHand",
                    inputType: "select",
                    formRow: "5",
                    formColumn: "5",
                    formOption: "hideLabel",
                    tableColumn: "29",
                    options: [
                      {
                        text: "Pink"
                      },
                      {
                        text: "Cyanotic"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.nailBedColourLeftHand",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "6",
                elements: [
                  {
                    label: "Right foot",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "labelRightFoot",
                    inputType: "form_label",
                    formRow: "6",
                    formColumn: "1",
                    tableColumn: "14",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.labelRightFoot",
                    tableKey: "table"
                  },
                  {
                    label: "Cap refill: Left foot",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "capRefillRightFoot",
                    inputType: "select",
                    formRow: "6",
                    formColumn: "2",
                    formOption: "hideLabel",
                    tableColumn: "18",
                    options: [
                      {
                        text: "Normal < 3 seconds"
                      },
                      {
                        text: "Delayed > 3 seconds"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.capRefillRightFoot",
                    tableKey: "table"
                  },
                  {
                    label: "Temperature: Left foot",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "temperatureRightFoot",
                    inputType: "select",
                    formRow: "6",
                    formColumn: "3",
                    formOption: "hideLabel",
                    tableColumn: "22",
                    options: [
                      {
                        text: "Warm"
                      },
                      {
                        text: "Cool"
                      },
                      {
                        text: "Hot"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.temperatureRightFoot",
                    tableKey: "table"
                  },
                  {
                    label: "Peripheral edema: Left foot",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "peripheralEdemaRightFoot",
                    inputType: "select",
                    formRow: "6",
                    formColumn: "4",
                    formOption: "hideLabel",
                    tableColumn: "26",
                    options: [
                      {
                        text: "No"
                      },
                      {
                        text: "Ankle"
                      },
                      {
                        text: "Pedal"
                      },
                      {
                        text: "Sacral"
                      },
                      {
                        text: "Pitting"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.peripheralEdemaRightFoot",
                    tableKey: "table"
                  },
                  {
                    label: "Nail bed colour: Left foot",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "nailBedColourRightFoot",
                    inputType: "select",
                    formRow: "6",
                    formColumn: "5",
                    formOption: "hideLabel",
                    tableColumn: "30",
                    options: [
                      {
                        text: "Pink"
                      },
                      {
                        text: "Cyanotic"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.nailBedColourRightFoot",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "7",
                elements: [
                  {
                    label: "Left foot",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "labelLeftFoot",
                    inputType: "form_label",
                    formRow: "7",
                    formColumn: "1",
                    tableColumn: "15",
                    tableCss: "hr-table",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.labelLeftFoot",
                    tableKey: "table"
                  },
                  {
                    label: "Temperature: Right hand",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "capRefillLeftFoot",
                    inputType: "select",
                    formRow: "7",
                    formColumn: "2",
                    formOption: "hideLabel",
                    tableColumn: "19",
                    tableCss: "hr-table",
                    options: [
                      {
                        text: "Normal < 3 seconds"
                      },
                      {
                        text: "Delayed > 3 seconds"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.capRefillLeftFoot",
                    tableKey: "table"
                  },
                  {
                    label: "Peripheral edema: Right hand",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "temperatureLeftFoot",
                    inputType: "select",
                    formRow: "7",
                    formColumn: "3",
                    formOption: "hideLabel",
                    tableColumn: "23",
                    tableCss: "hr-table",
                    options: [
                      {
                        text: "Warm"
                      },
                      {
                        text: "Cool"
                      },
                      {
                        text: "Hot"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.temperatureLeftFoot",
                    tableKey: "table"
                  },
                  {
                    label: "Nail bed colour: Right hand",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "peripheralEdemaLeftFoot",
                    inputType: "select",
                    formRow: "7",
                    formColumn: "4",
                    formOption: "hideLabel",
                    tableColumn: "27",
                    tableCss: "hr-table",
                    options: [
                      {
                        text: "No"
                      },
                      {
                        text: "Ankle"
                      },
                      {
                        text: "Pedal"
                      },
                      {
                        text: "Sacral"
                      },
                      {
                        text: "Pitting"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.peripheralEdemaLeftFoot",
                    tableKey: "table"
                  },
                  {
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "nailBedColourLeftFoot",
                    inputType: "select",
                    formRow: "7",
                    formColumn: "5",
                    formOption: "hideLabel",
                    tableColumn: "31",
                    tableCss: "hr-table",
                    options: [
                      {
                        text: "Pink"
                      },
                      {
                        text: "Cyanotic"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.nailBedColourLeftFoot",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "8",
                elements: [
                  {
                    label: "Comments",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "comments",
                    inputType: "textarea",
                    formRow: "8",
                    formColumn: "1",
                    tableColumn: "32",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.comments",
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
    gastrointestinal: {
      pageTitle: "Gastrointestinal assessment",
      pageDataKey: "gastrointestinal",
      pageChildren: [
        {
          label: "Name",
          elementKey: "name",
          fqn: "gastrointestinal.table.name",
          dataCaseStudy: "Jason"
        },
        {
          label: "Profession",
          elementKey: "profession",
          fqn: "gastrointestinal.table.profession",
          dataCaseStudy: "RN"
        },
        {
          label: "Day",
          elementKey: "day",
          fqn: "gastrointestinal.table.day",
          dataCaseStudy: "0"
        },
        {
          label: "Time",
          elementKey: "time",
          fqn: "gastrointestinal.table.time",
          dataCaseStudy: "0.8125"
        },
        {
          label: "Soft",
          elementKey: "soft",
          fqn: "gastrointestinal.table.abdomen.soft",
          dataCaseStudy: "Soft"
        },
        {
          label: "Tender",
          elementKey: "tender",
          fqn: "gastrointestinal.table.abdomen.tender",
          dataCaseStudy: "Soft"
        },
        {
          label: "Rigid",
          elementKey: "rigid",
          fqn: "gastrointestinal.table.abdomen.rigid",
          dataCaseStudy: "Soft"
        },
        {
          label: "Guarding",
          elementKey: "guarding",
          fqn: "gastrointestinal.table.abdomen.guarding",
          dataCaseStudy: "Soft"
        },
        {
          label: "Distended",
          elementKey: "distended",
          fqn: "gastrointestinal.table.abdomen.distended",
          dataCaseStudy: "Soft"
        },
        {
          label: "Scars",
          elementKey: "scars",
          fqn: "gastrointestinal.table.abdomen.scars",
          dataCaseStudy: "Soft"
        },
        {
          label: "Abdominal pain",
          elementKey: "pain",
          fqn: "gastrointestinal.table.abdomen.pain",
          dataCaseStudy: "No"
        },
        {
          label: "If answered yes, please complete the <a href=\"/assets/standardized-assessment-tools/numeric-rating-scale.pdf\">pain assessment</a>.",
          elementKey: "aLabel",
          fqn: "gastrointestinal.table.abdomen.aLabel",
          dataCaseStudy: "No"
        },
        {
          label: "Emesis present?",
          elementKey: "emesisPresent",
          fqn: "gastrointestinal.table.emesis.emesisPresent",
          dataCaseStudy: "(nothing selected)"
        },
        {
          label: "Nausea",
          elementKey: "nausea",
          fqn: "gastrointestinal.table.emesis.nausea"
        },
        {
          label: "Vomiting",
          elementKey: "vomiting",
          fqn: "gastrointestinal.table.emesis.vomiting"
        },
        {
          label: "Emesis colour",
          elementKey: "colour",
          fqn: "gastrointestinal.table.emesis.colour",
          dataCaseStudy: "(nothing selected)"
        },
        {
          label: "Description",
          elementKey: "description",
          fqn: "gastrointestinal.table.emesis.description",
          dataCaseStudy: "(nothing entered)"
        },
        {
          label: "Approximate volume",
          elementKey: "amount",
          fqn: "gastrointestinal.table.emesis.amount",
          dataCaseStudy: "(nothing selected)"
        },
        {
          label: "Difficulty",
          elementKey: "eating",
          fqn: "gastrointestinal.table.eatingGroup.eating",
          dataCaseStudy: "Regular"
        },
        {
          label: "Reason",
          elementKey: "reason",
          fqn: "gastrointestinal.table.eatingGroup.reason",
          dataCaseStudy: "(nothing entered)"
        },
        {
          label: "NPO since day",
          elementKey: "npoSinceDate",
          fqn: "gastrointestinal.table.eatingGroup.npoSinceDate",
          dataCaseStudy: "(nothing entered)"
        },
        {
          label: "NPO since time",
          elementKey: "npoSinceTime",
          fqn: "gastrointestinal.table.eatingGroup.npoSinceTime",
          dataCaseStudy: "(nothing entered)"
        },
        {
          label: "Weight loss",
          elementKey: "weightLoss",
          fqn: "gastrointestinal.table.eatingGroup.weightLoss"
        },
        {
          label: "Last bowel movement",
          elementKey: "lastBm",
          fqn: "gastrointestinal.table.stool.lastBm",
          dataCaseStudy: "Yesterday"
        },
        {
          label: "Stool colour",
          elementKey: "stoolColour",
          fqn: "gastrointestinal.table.stool.stoolColour",
          dataCaseStudy: "Brown"
        },
        {
          label: "Description",
          elementKey: "stoolDescription",
          fqn: "gastrointestinal.table.stool.stoolDescription",
          dataCaseStudy: "(nothing entered)"
        },
        {
          label: "Amount",
          elementKey: "stoolAmount",
          fqn: "gastrointestinal.table.stool.stoolAmount",
          dataCaseStudy: "(nothing entered)"
        },
        {
          label: "Source",
          elementKey: "stoolSource",
          fqn: "gastrointestinal.table.stool.stoolSource",
          dataCaseStudy: "As per patient observed"
        },
        {
          label: "Normal",
          elementKey: "normal",
          fqn: "gastrointestinal.table.bowel.normal"
        },
        {
          label: "Constipation",
          elementKey: "constipation",
          fqn: "gastrointestinal.table.bowel.constipation",
          dataCaseStudy: "(nothing entered)"
        },
        {
          label: "Diarrhea",
          elementKey: "diarrhea",
          fqn: "gastrointestinal.table.bowel.diarrhea",
          dataCaseStudy: "(nothing entered)"
        },
        {
          label: "Melena",
          elementKey: "melena",
          fqn: "gastrointestinal.table.bowel.melena",
          dataCaseStudy: "(nothing entered)"
        },
        {
          label: "Incontinent",
          elementKey: "incontinent",
          fqn: "gastrointestinal.table.bowel.incontinent",
          dataCaseStudy: "(nothing entered)"
        },
        {
          label: "None",
          elementKey: "bsNone",
          fqn: "gastrointestinal.table.bSounds.bsNone",
          dataCaseStudy: "LUQ, RUQ, LLQ, RLQ"
        },
        {
          label: "LUQ",
          elementKey: "bsLUQ",
          fqn: "gastrointestinal.table.bSounds.bsLUQ",
          dataCaseStudy: "LUQ, RUQ, LLQ, RLQ"
        },
        {
          label: "RUQ",
          elementKey: "bsRUQ",
          fqn: "gastrointestinal.table.bSounds.bsRUQ",
          dataCaseStudy: "LUQ, RUQ, LLQ, RLQ"
        },
        {
          label: "LLQ",
          elementKey: "bsLLQ",
          fqn: "gastrointestinal.table.bSounds.bsLLQ",
          dataCaseStudy: "LUQ, RUQ, LLQ, RLQ"
        },
        {
          label: "RLQ",
          elementKey: "bsRLQ",
          fqn: "gastrointestinal.table.bSounds.bsRLQ",
          dataCaseStudy: "LUQ, RUQ, LLQ, RLQ"
        },
        {
          label: "Hypoactive",
          elementKey: "hypoactive",
          fqn: "gastrointestinal.table.bSounds.hypoactive"
        },
        {
          label: "Hyperactive",
          elementKey: "hyperactive",
          fqn: "gastrointestinal.table.bSounds.hyperactive"
        },
        {
          label: "Comments",
          elementKey: "comments",
          fqn: "gastrointestinal.table.stool.comments",
          dataCaseStudy: "(nothing entered)"
        }
      ],
      generated: "2019-05-02T12:22:22-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a gastrointestinal assessment",
          tableCells: [
            {
              label: "Name",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              formCss: "user_name",
              tableColumn: "1",
              dataParent: "gastrointestinal.table",
              fqn: "gastrointestinal.table.name",
              tableKey: "table"
            },
            {
              label: "Profession",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              formCss: "user_pro",
              tableColumn: "2",
              dataParent: "gastrointestinal.table",
              fqn: "gastrointestinal.table.profession",
              tableKey: "table"
            },
            {
              label: "Day",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              elementKey: "day",
              inputType: "day",
              formRow: "1",
              formColumn: "3",
              formCss: "user_day",
              tableColumn: "3",
              dataParent: "gastrointestinal.table",
              fqn: "gastrointestinal.table.day",
              tableKey: "table"
            },
            {
              label: "Time",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              elementKey: "time",
              inputType: "time",
              formRow: "1",
              formColumn: "4",
              formCss: "user_time",
              tableColumn: "4",
              tableCss: "hr-table",
              dataParent: "gastrointestinal.table",
              fqn: "gastrointestinal.table.time",
              tableKey: "table"
            },
            {
              label: "Soft",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "abdomen",
              elementKey: "soft",
              inputType: "checkbox",
              tableColumn: "5",
              fsetRow: "1",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.abdomen",
              fqn: "gastrointestinal.table.abdomen.soft",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Tender",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "abdomen",
              elementKey: "tender",
              inputType: "checkbox",
              tableColumn: "6",
              fsetRow: "2",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.abdomen",
              fqn: "gastrointestinal.table.abdomen.tender",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Rigid",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "abdomen",
              elementKey: "rigid",
              inputType: "checkbox",
              tableColumn: "7",
              fsetRow: "3",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.abdomen",
              fqn: "gastrointestinal.table.abdomen.rigid",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Guarding",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "abdomen",
              elementKey: "guarding",
              inputType: "checkbox",
              tableColumn: "8",
              fsetRow: "4",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.abdomen",
              fqn: "gastrointestinal.table.abdomen.guarding",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Distended",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "abdomen",
              elementKey: "distended",
              inputType: "checkbox",
              tableColumn: "9",
              fsetRow: "5",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.abdomen",
              fqn: "gastrointestinal.table.abdomen.distended",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Scars",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "abdomen",
              elementKey: "scars",
              inputType: "checkbox",
              tableColumn: "10",
              fsetRow: "6",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.abdomen",
              fqn: "gastrointestinal.table.abdomen.scars",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Abdominal pain",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "abdomen",
              elementKey: "pain",
              inputType: "select",
              tableColumn: "11",
              fsetRow: "7",
              fsetCol: "1",
              options: [
                {
                  text: "Yes"
                },
                {
                  text: "No"
                }
              ],
              dataParent: "gastrointestinal.table.abdomen",
              fqn: "gastrointestinal.table.abdomen.pain",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "If answered yes, please complete the <a href=\"/assets/standardized-assessment-tools/numeric-rating-scale.pdf\">pain assessment</a>.",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "abdomen",
              elementKey: "aLabel",
              inputType: "form_label",
              formOption: "labelWithPageRef",
              tableCss: "hr-table",
              fsetRow: "8",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.abdomen",
              fqn: "gastrointestinal.table.abdomen.aLabel",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Abdomen",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              elementKey: "abdomen",
              inputType: "fieldset",
              formRow: "2",
              formColumn: "1",
              dataParent: "gastrointestinal.table",
              fqn: "gastrointestinal.table.abdomen",
              containerType: "fieldset",
              containerKey: "abdomen",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Emesis present?",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "emesis",
              elementKey: "emesisPresent",
              inputType: "select",
              tableColumn: "12",
              fsetRow: "1",
              fsetCol: "1",
              options: [
                {
                  text: "Yes"
                },
                {
                  text: "No"
                }
              ],
              dataParent: "gastrointestinal.table.emesis",
              fqn: "gastrointestinal.table.emesis.emesisPresent",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Nausea",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "emesis",
              elementKey: "nausea",
              inputType: "text",
              tableColumn: "13",
              fsetRow: "2",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.emesis",
              fqn: "gastrointestinal.table.emesis.nausea",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Vomiting",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "emesis",
              elementKey: "vomiting",
              inputType: "text",
              tableColumn: "14",
              fsetRow: "3",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.emesis",
              fqn: "gastrointestinal.table.emesis.vomiting",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Emesis colour",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "emesis",
              elementKey: "colour",
              inputType: "select",
              tableColumn: "15",
              fsetRow: "4",
              fsetCol: "1",
              options: [
                {
                  text: "Greenish-yellow"
                },
                {
                  text: "Blood-tinged"
                },
                {
                  text: "Bright red"
                },
                {
                  text: "Dark red"
                },
                {
                  text: "Black"
                }
              ],
              dataParent: "gastrointestinal.table.emesis",
              fqn: "gastrointestinal.table.emesis.colour",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Description",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "emesis",
              elementKey: "description",
              inputType: "text",
              tableColumn: "16",
              fsetRow: "5",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.emesis",
              fqn: "gastrointestinal.table.emesis.description",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Approximate volume",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "emesis",
              elementKey: "amount",
              inputType: "select",
              tableColumn: "17",
              tableCss: "hr-table",
              fsetRow: "6",
              fsetCol: "1",
              options: [
                {
                  text: "Small"
                },
                {
                  text: "Moderate"
                },
                {
                  text: "Large"
                }
              ],
              dataParent: "gastrointestinal.table.emesis",
              fqn: "gastrointestinal.table.emesis.amount",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Emesis",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              elementKey: "emesis",
              inputType: "fieldset",
              formRow: "2",
              formColumn: "2",
              dataParent: "gastrointestinal.table",
              fqn: "gastrointestinal.table.emesis",
              containerType: "fieldset",
              containerKey: "emesis",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Difficulty",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "eatingGroup",
              elementKey: "eating",
              inputType: "select",
              tableColumn: "18",
              fsetRow: "1",
              fsetCol: "1",
              options: [
                {
                  text: "Regular"
                },
                {
                  text: "Difficult"
                }
              ],
              dataParent: "gastrointestinal.table.eatingGroup",
              fqn: "gastrointestinal.table.eatingGroup.eating",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Reason",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "eatingGroup",
              elementKey: "reason",
              inputType: "text",
              tableColumn: "19",
              fsetRow: "2",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.eatingGroup",
              fqn: "gastrointestinal.table.eatingGroup.reason",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "NPO since day",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "eatingGroup",
              elementKey: "npoSinceDate",
              inputType: "day",
              tableColumn: "20",
              fsetRow: "3",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.eatingGroup",
              fqn: "gastrointestinal.table.eatingGroup.npoSinceDate",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "NPO since time",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "eatingGroup",
              elementKey: "npoSinceTime",
              inputType: "time",
              tableColumn: "21",
              tableCss: "hr-table",
              fsetRow: "4",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.eatingGroup",
              fqn: "gastrointestinal.table.eatingGroup.npoSinceTime",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Weight loss",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "eatingGroup",
              elementKey: "weightLoss",
              inputType: "select",
              tableColumn: "22",
              fsetRow: "5",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.eatingGroup",
              fqn: "gastrointestinal.table.eatingGroup.weightLoss",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Eating",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              elementKey: "eatingGroup",
              inputType: "fieldset",
              formRow: "2",
              formColumn: "3",
              formOption: "hideLabel",
              dataParent: "gastrointestinal.table",
              fqn: "gastrointestinal.table.eatingGroup",
              containerType: "fieldset",
              containerKey: "eatingGroup",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Last bowel movement",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "stool",
              elementKey: "lastBm",
              inputType: "text",
              tableColumn: "23",
              tableCss: "hr-table",
              fsetRow: "6",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.stool",
              fqn: "gastrointestinal.table.stool.lastBm",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Stool colour",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "stool",
              elementKey: "stoolColour",
              inputType: "select",
              tableColumn: "24",
              fsetRow: "1",
              fsetCol: "1",
              options: [
                {
                  text: "Brown"
                },
                {
                  text: "Green"
                },
                {
                  text: "Clay coloured"
                },
                {
                  text: "Yellow"
                },
                {
                  text: "Black"
                },
                {
                  text: "Bright red"
                },
                {
                  text: "Dark red"
                }
              ],
              dataParent: "gastrointestinal.table.stool",
              fqn: "gastrointestinal.table.stool.stoolColour",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Description",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "stool",
              elementKey: "stoolDescription",
              inputType: "select",
              tableColumn: "25",
              fsetRow: "2",
              fsetCol: "1",
              options: [
                {
                  text: "Runny"
                },
                {
                  text: "Hard pellets"
                }
              ],
              dataParent: "gastrointestinal.table.stool",
              fqn: "gastrointestinal.table.stool.stoolDescription",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Amount",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "stool",
              elementKey: "stoolAmount",
              inputType: "text",
              tableColumn: "26",
              fsetRow: "3",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.stool",
              fqn: "gastrointestinal.table.stool.stoolAmount",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Source",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "stool",
              elementKey: "stoolSource",
              inputType: "select",
              tableColumn: "27",
              tableCss: "hr-table",
              fsetRow: "4",
              fsetCol: "1",
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
              dataParent: "gastrointestinal.table.stool",
              fqn: "gastrointestinal.table.stool.stoolSource",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Comments",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "stool",
              elementKey: "comments",
              inputType: "textarea",
              formRow: "4",
              formColumn: "1",
              tableColumn: "40",
              fsetRow: "8",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.stool",
              fqn: "gastrointestinal.table.stool.comments",
              tableKey: "table"
            },
            {
              label: "Stool",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              elementKey: "stool",
              inputType: "fieldset",
              formRow: "2",
              formColumn: "1",
              dataParent: "gastrointestinal.table",
              fqn: "gastrointestinal.table.stool",
              containerType: "fieldset",
              containerKey: "stool",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Normal",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bowel",
              elementKey: "normal",
              inputType: "checkbox",
              tableColumn: "28",
              fsetRow: "1",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bowel",
              fqn: "gastrointestinal.table.bowel.normal",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Constipation",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bowel",
              elementKey: "constipation",
              inputType: "checkbox",
              tableColumn: "29",
              fsetRow: "2",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bowel",
              fqn: "gastrointestinal.table.bowel.constipation",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Diarrhea",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bowel",
              elementKey: "diarrhea",
              inputType: "checkbox",
              tableColumn: "30",
              fsetRow: "3",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bowel",
              fqn: "gastrointestinal.table.bowel.diarrhea",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Melena",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bowel",
              elementKey: "melena",
              inputType: "checkbox",
              tableColumn: "31",
              fsetRow: "4",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bowel",
              fqn: "gastrointestinal.table.bowel.melena",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Incontinent",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bowel",
              elementKey: "incontinent",
              inputType: "checkbox",
              tableColumn: "32",
              tableCss: "hr-table",
              fsetRow: "5",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bowel",
              fqn: "gastrointestinal.table.bowel.incontinent",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Bowel",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              elementKey: "bowel",
              inputType: "fieldset",
              formRow: "3",
              formColumn: "1",
              formCss: "is-one-third",
              dataParent: "gastrointestinal.table",
              fqn: "gastrointestinal.table.bowel",
              containerType: "fieldset",
              containerKey: "bowel",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "None",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bSounds",
              elementKey: "bsNone",
              inputType: "checkbox",
              tableColumn: "33",
              fsetRow: "1",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bSounds",
              fqn: "gastrointestinal.table.bSounds.bsNone",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "LUQ",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bSounds",
              elementKey: "bsLUQ",
              inputType: "checkbox",
              tableColumn: "34",
              fsetRow: "2",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bSounds",
              fqn: "gastrointestinal.table.bSounds.bsLUQ",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "RUQ",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bSounds",
              elementKey: "bsRUQ",
              inputType: "checkbox",
              tableColumn: "35",
              fsetRow: "3",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bSounds",
              fqn: "gastrointestinal.table.bSounds.bsRUQ",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "LLQ",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bSounds",
              elementKey: "bsLLQ",
              inputType: "checkbox",
              tableColumn: "36",
              fsetRow: "4",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bSounds",
              fqn: "gastrointestinal.table.bSounds.bsLLQ",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "RLQ",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bSounds",
              elementKey: "bsRLQ",
              inputType: "checkbox",
              tableColumn: "37",
              fsetRow: "5",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bSounds",
              fqn: "gastrointestinal.table.bSounds.bsRLQ",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Hypoactive",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bSounds",
              elementKey: "hypoactive",
              inputType: "checkbox",
              tableColumn: "38",
              fsetRow: "6",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bSounds",
              fqn: "gastrointestinal.table.bSounds.hypoactive",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Hyperactive",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bSounds",
              elementKey: "hyperactive",
              inputType: "checkbox",
              tableColumn: "39",
              tableCss: "hr-table",
              fsetRow: "7",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bSounds",
              fqn: "gastrointestinal.table.bSounds.hyperactive",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Bowel sounds",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              elementKey: "bSounds",
              inputType: "fieldset",
              formRow: "3",
              formColumn: "2",
              formCss: "is-one-third",
              dataParent: "gastrointestinal.table",
              fqn: "gastrointestinal.table.bSounds",
              containerType: "fieldset",
              containerKey: "bSounds",
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
                    label: "Name",
                    pageDataKey: "gastrointestinal",
                    level2Key: "table",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    formCss: "user_name",
                    tableColumn: "1",
                    dataParent: "gastrointestinal.table",
                    fqn: "gastrointestinal.table.name",
                    tableKey: "table"
                  },
                  {
                    label: "Profession",
                    pageDataKey: "gastrointestinal",
                    level2Key: "table",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    tableColumn: "2",
                    dataParent: "gastrointestinal.table",
                    fqn: "gastrointestinal.table.profession",
                    tableKey: "table"
                  },
                  {
                    label: "Day",
                    pageDataKey: "gastrointestinal",
                    level2Key: "table",
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    tableColumn: "3",
                    dataParent: "gastrointestinal.table",
                    fqn: "gastrointestinal.table.day",
                    tableKey: "table"
                  },
                  {
                    label: "Time",
                    pageDataKey: "gastrointestinal",
                    level2Key: "table",
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    tableColumn: "4",
                    tableCss: "hr-table",
                    dataParent: "gastrointestinal.table",
                    fqn: "gastrointestinal.table.time",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "Abdomen",
                    pageDataKey: "gastrointestinal",
                    level2Key: "table",
                    elementKey: "abdomen",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "gastrointestinal.table",
                    fqn: "gastrointestinal.table.abdomen",
                    containerType: "fieldset",
                    containerKey: "abdomen",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              label: "Soft",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "abdomen",
                              elementKey: "soft",
                              inputType: "checkbox",
                              tableColumn: "5",
                              fsetRow: "1",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.abdomen",
                              fqn: "gastrointestinal.table.abdomen.soft",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Tender",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "abdomen",
                              elementKey: "tender",
                              inputType: "checkbox",
                              tableColumn: "6",
                              fsetRow: "2",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.abdomen",
                              fqn: "gastrointestinal.table.abdomen.tender",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "Rigid",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "abdomen",
                              elementKey: "rigid",
                              inputType: "checkbox",
                              tableColumn: "7",
                              fsetRow: "3",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.abdomen",
                              fqn: "gastrointestinal.table.abdomen.rigid",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "Guarding",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "abdomen",
                              elementKey: "guarding",
                              inputType: "checkbox",
                              tableColumn: "8",
                              fsetRow: "4",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.abdomen",
                              fqn: "gastrointestinal.table.abdomen.guarding",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              label: "Distended",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "abdomen",
                              elementKey: "distended",
                              inputType: "checkbox",
                              tableColumn: "9",
                              fsetRow: "5",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.abdomen",
                              fqn: "gastrointestinal.table.abdomen.distended",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              label: "Scars",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "abdomen",
                              elementKey: "scars",
                              inputType: "checkbox",
                              tableColumn: "10",
                              fsetRow: "6",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.abdomen",
                              fqn: "gastrointestinal.table.abdomen.scars",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "7",
                          elements: [
                            {
                              label: "Abdominal pain",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "abdomen",
                              elementKey: "pain",
                              inputType: "select",
                              tableColumn: "11",
                              fsetRow: "7",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "Yes"
                                },
                                {
                                  text: "No"
                                }
                              ],
                              dataParent: "gastrointestinal.table.abdomen",
                              fqn: "gastrointestinal.table.abdomen.pain",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "8",
                          elements: [
                            {
                              label: "If answered yes, please complete the <a href=\"/assets/standardized-assessment-tools/numeric-rating-scale.pdf\">pain assessment</a>.",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "abdomen",
                              elementKey: "aLabel",
                              inputType: "form_label",
                              formOption: "labelWithPageRef",
                              tableCss: "hr-table",
                              fsetRow: "8",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.abdomen",
                              fqn: "gastrointestinal.table.abdomen.aLabel",
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
                    label: "Stool",
                    pageDataKey: "gastrointestinal",
                    level2Key: "table",
                    elementKey: "stool",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "gastrointestinal.table",
                    fqn: "gastrointestinal.table.stool",
                    containerType: "fieldset",
                    containerKey: "stool",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              label: "Stool colour",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "stool",
                              elementKey: "stoolColour",
                              inputType: "select",
                              tableColumn: "24",
                              fsetRow: "1",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "Brown"
                                },
                                {
                                  text: "Green"
                                },
                                {
                                  text: "Clay coloured"
                                },
                                {
                                  text: "Yellow"
                                },
                                {
                                  text: "Black"
                                },
                                {
                                  text: "Bright red"
                                },
                                {
                                  text: "Dark red"
                                }
                              ],
                              dataParent: "gastrointestinal.table.stool",
                              fqn: "gastrointestinal.table.stool.stoolColour",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Description",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "stool",
                              elementKey: "stoolDescription",
                              inputType: "select",
                              tableColumn: "25",
                              fsetRow: "2",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "Runny"
                                },
                                {
                                  text: "Hard pellets"
                                }
                              ],
                              dataParent: "gastrointestinal.table.stool",
                              fqn: "gastrointestinal.table.stool.stoolDescription",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "Amount",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "stool",
                              elementKey: "stoolAmount",
                              inputType: "text",
                              tableColumn: "26",
                              fsetRow: "3",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.stool",
                              fqn: "gastrointestinal.table.stool.stoolAmount",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "Source",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "stool",
                              elementKey: "stoolSource",
                              inputType: "select",
                              tableColumn: "27",
                              tableCss: "hr-table",
                              fsetRow: "4",
                              fsetCol: "1",
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
                              dataParent: "gastrointestinal.table.stool",
                              fqn: "gastrointestinal.table.stool.stoolSource",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              label: "Last bowel movement",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "stool",
                              elementKey: "lastBm",
                              inputType: "text",
                              tableColumn: "23",
                              tableCss: "hr-table",
                              fsetRow: "6",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.stool",
                              fqn: "gastrointestinal.table.stool.lastBm",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "8",
                          elements: [
                            {
                              label: "Comments",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "stool",
                              elementKey: "comments",
                              inputType: "textarea",
                              formRow: "4",
                              formColumn: "1",
                              tableColumn: "40",
                              fsetRow: "8",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.stool",
                              fqn: "gastrointestinal.table.stool.comments",
                              tableKey: "table"
                            }
                          ]
                        },
                        null,
                        null
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    label: "Emesis",
                    pageDataKey: "gastrointestinal",
                    level2Key: "table",
                    elementKey: "emesis",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "2",
                    dataParent: "gastrointestinal.table",
                    fqn: "gastrointestinal.table.emesis",
                    containerType: "fieldset",
                    containerKey: "emesis",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              label: "Emesis present?",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "emesis",
                              elementKey: "emesisPresent",
                              inputType: "select",
                              tableColumn: "12",
                              fsetRow: "1",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "Yes"
                                },
                                {
                                  text: "No"
                                }
                              ],
                              dataParent: "gastrointestinal.table.emesis",
                              fqn: "gastrointestinal.table.emesis.emesisPresent",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Nausea",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "emesis",
                              elementKey: "nausea",
                              inputType: "text",
                              tableColumn: "13",
                              fsetRow: "2",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.emesis",
                              fqn: "gastrointestinal.table.emesis.nausea",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "Vomiting",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "emesis",
                              elementKey: "vomiting",
                              inputType: "text",
                              tableColumn: "14",
                              fsetRow: "3",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.emesis",
                              fqn: "gastrointestinal.table.emesis.vomiting",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "Emesis colour",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "emesis",
                              elementKey: "colour",
                              inputType: "select",
                              tableColumn: "15",
                              fsetRow: "4",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "Greenish-yellow"
                                },
                                {
                                  text: "Blood-tinged"
                                },
                                {
                                  text: "Bright red"
                                },
                                {
                                  text: "Dark red"
                                },
                                {
                                  text: "Black"
                                }
                              ],
                              dataParent: "gastrointestinal.table.emesis",
                              fqn: "gastrointestinal.table.emesis.colour",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              label: "Description",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "emesis",
                              elementKey: "description",
                              inputType: "text",
                              tableColumn: "16",
                              fsetRow: "5",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.emesis",
                              fqn: "gastrointestinal.table.emesis.description",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              label: "Approximate volume",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "emesis",
                              elementKey: "amount",
                              inputType: "select",
                              tableColumn: "17",
                              tableCss: "hr-table",
                              fsetRow: "6",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "Small"
                                },
                                {
                                  text: "Moderate"
                                },
                                {
                                  text: "Large"
                                }
                              ],
                              dataParent: "gastrointestinal.table.emesis",
                              fqn: "gastrointestinal.table.emesis.amount",
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
                    label: "Eating",
                    pageDataKey: "gastrointestinal",
                    level2Key: "table",
                    elementKey: "eatingGroup",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "3",
                    formOption: "hideLabel",
                    dataParent: "gastrointestinal.table",
                    fqn: "gastrointestinal.table.eatingGroup",
                    containerType: "fieldset",
                    containerKey: "eatingGroup",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              label: "Difficulty",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "eatingGroup",
                              elementKey: "eating",
                              inputType: "select",
                              tableColumn: "18",
                              fsetRow: "1",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "Regular"
                                },
                                {
                                  text: "Difficult"
                                }
                              ],
                              dataParent: "gastrointestinal.table.eatingGroup",
                              fqn: "gastrointestinal.table.eatingGroup.eating",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Reason",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "eatingGroup",
                              elementKey: "reason",
                              inputType: "text",
                              tableColumn: "19",
                              fsetRow: "2",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.eatingGroup",
                              fqn: "gastrointestinal.table.eatingGroup.reason",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "NPO since day",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "eatingGroup",
                              elementKey: "npoSinceDate",
                              inputType: "day",
                              tableColumn: "20",
                              fsetRow: "3",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.eatingGroup",
                              fqn: "gastrointestinal.table.eatingGroup.npoSinceDate",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "NPO since time",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "eatingGroup",
                              elementKey: "npoSinceTime",
                              inputType: "time",
                              tableColumn: "21",
                              tableCss: "hr-table",
                              fsetRow: "4",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.eatingGroup",
                              fqn: "gastrointestinal.table.eatingGroup.npoSinceTime",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              label: "Weight loss",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "eatingGroup",
                              elementKey: "weightLoss",
                              inputType: "select",
                              tableColumn: "22",
                              fsetRow: "5",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.eatingGroup",
                              fqn: "gastrointestinal.table.eatingGroup.weightLoss",
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
                    label: "Bowel",
                    pageDataKey: "gastrointestinal",
                    level2Key: "table",
                    elementKey: "bowel",
                    inputType: "fieldset",
                    formRow: "3",
                    formColumn: "1",
                    formCss: "is-one-third",
                    dataParent: "gastrointestinal.table",
                    fqn: "gastrointestinal.table.bowel",
                    containerType: "fieldset",
                    containerKey: "bowel",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              label: "Normal",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bowel",
                              elementKey: "normal",
                              inputType: "checkbox",
                              tableColumn: "28",
                              fsetRow: "1",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bowel",
                              fqn: "gastrointestinal.table.bowel.normal",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Constipation",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bowel",
                              elementKey: "constipation",
                              inputType: "checkbox",
                              tableColumn: "29",
                              fsetRow: "2",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bowel",
                              fqn: "gastrointestinal.table.bowel.constipation",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "Diarrhea",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bowel",
                              elementKey: "diarrhea",
                              inputType: "checkbox",
                              tableColumn: "30",
                              fsetRow: "3",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bowel",
                              fqn: "gastrointestinal.table.bowel.diarrhea",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "Melena",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bowel",
                              elementKey: "melena",
                              inputType: "checkbox",
                              tableColumn: "31",
                              fsetRow: "4",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bowel",
                              fqn: "gastrointestinal.table.bowel.melena",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              label: "Incontinent",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bowel",
                              elementKey: "incontinent",
                              inputType: "checkbox",
                              tableColumn: "32",
                              tableCss: "hr-table",
                              fsetRow: "5",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bowel",
                              fqn: "gastrointestinal.table.bowel.incontinent",
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
                    label: "Bowel sounds",
                    pageDataKey: "gastrointestinal",
                    level2Key: "table",
                    elementKey: "bSounds",
                    inputType: "fieldset",
                    formRow: "3",
                    formColumn: "2",
                    formCss: "is-one-third",
                    dataParent: "gastrointestinal.table",
                    fqn: "gastrointestinal.table.bSounds",
                    containerType: "fieldset",
                    containerKey: "bSounds",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              label: "None",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bSounds",
                              elementKey: "bsNone",
                              inputType: "checkbox",
                              tableColumn: "33",
                              fsetRow: "1",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bSounds",
                              fqn: "gastrointestinal.table.bSounds.bsNone",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "LUQ",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bSounds",
                              elementKey: "bsLUQ",
                              inputType: "checkbox",
                              tableColumn: "34",
                              fsetRow: "2",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bSounds",
                              fqn: "gastrointestinal.table.bSounds.bsLUQ",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "RUQ",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bSounds",
                              elementKey: "bsRUQ",
                              inputType: "checkbox",
                              tableColumn: "35",
                              fsetRow: "3",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bSounds",
                              fqn: "gastrointestinal.table.bSounds.bsRUQ",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "LLQ",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bSounds",
                              elementKey: "bsLLQ",
                              inputType: "checkbox",
                              tableColumn: "36",
                              fsetRow: "4",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bSounds",
                              fqn: "gastrointestinal.table.bSounds.bsLLQ",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              label: "RLQ",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bSounds",
                              elementKey: "bsRLQ",
                              inputType: "checkbox",
                              tableColumn: "37",
                              fsetRow: "5",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bSounds",
                              fqn: "gastrointestinal.table.bSounds.bsRLQ",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              label: "Hypoactive",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bSounds",
                              elementKey: "hypoactive",
                              inputType: "checkbox",
                              tableColumn: "38",
                              fsetRow: "6",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bSounds",
                              fqn: "gastrointestinal.table.bSounds.hypoactive",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "7",
                          elements: [
                            {
                              label: "Hyperactive",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bSounds",
                              elementKey: "hyperactive",
                              inputType: "checkbox",
                              tableColumn: "39",
                              tableCss: "hr-table",
                              fsetRow: "7",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bSounds",
                              fqn: "gastrointestinal.table.bSounds.hyperactive",
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
    }
  }
}
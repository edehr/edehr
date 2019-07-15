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
          label: "Admission status",
          elementKey: "status",
          fqn: "visit.status",
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
          dataCaseStudy: "Admitted-NL-Admitted"
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
          label: "Physician admitting diagnosis",
          elementKey: "diagnosis",
          fqn: "visit.diagnosis",
          dataCaseStudy: "COPD-NL-Shortness of breath-NL-Dizzy"
        },
        {
          label: "Patient location",
          elementKey: "location",
          fqn: "visit.table.location",
          helperText: "hospital, ward #, room #, home, out patient clinic",
          dataCaseStudy: "Emergency room",
          helperHtml: "<p>hospital, ward #, room #, home, out patient clinic</p>"
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
        },
        {
          label: "Transfer out day",
          elementKey: "transferOutDay",
          fqn: "visit.table.transferOutDay"
        },
        {
          label: "Transfer out time",
          elementKey: "transferOutTime",
          fqn: "visit.table.transferOutTime"
        }
      ],
      generated: "2019-07-11T07:58:42-07:00",
      hasForm: true,
      pageForm: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "admissionDay",
                label: "Admission day",
                inputType: "day",
                formRow: "1",
                formColumn: "1",
                formCss: "is-one-third",
                dataParent: "visit",
                tableKey: "pageForm"
              },
              {
                elementKey: "admissionTime",
                label: "Admission time",
                inputType: "time",
                formRow: "1",
                formColumn: "2",
                formCss: "is-one-third",
                dataParent: "visit",
                tableKey: "pageForm"
              },
              {
                elementKey: "status",
                label: "Admission status",
                inputType: "select",
                formRow: "1",
                formColumn: "3",
                formCss: "is-one-third",
                dataParent: "visit",
                tableKey: "pageForm"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                elementKey: "consentForTreatment",
                label: "Consent for treatment",
                inputType: "checkbox",
                formRow: "2",
                formColumn: "1",
                formCss: "is-one-third",
                dataParent: "visit",
                tableKey: "pageForm"
              },
              {
                elementKey: "consentForBlood",
                label: "Consent for blood products",
                inputType: "checkbox",
                formRow: "2",
                formColumn: "2",
                formCss: "is-one-third",
                dataParent: "visit",
                tableKey: "pageForm"
              }
            ]
          },
          {
            formRow: "3",
            elements: [
              {
                elementKey: "diagnosis",
                label: "Physician admitting diagnosis",
                inputType: "textarea",
                formRow: "3",
                formColumn: "1",
                formCss: "is-two-thirds",
                dataParent: "visit",
                tableKey: "pageForm"
              }
            ]
          }
        ],
        columnsCount: 3
      },
      hasTable: true,
      tables: [
        {
          pageDataKey: "visit",
          tableKey: "table",
          addButtonText: "Add a patient location",
          tableCells: [
            {
              elementKey: "location",
              label: "Patient location",
              tableColumn: "1",
              inputType: "text"
            },
            {
              elementKey: "transferInDay",
              label: "Transfer in day",
              tableColumn: "2",
              inputType: "day"
            },
            {
              elementKey: "transferInTime",
              label: "Transfer in time",
              tableColumn: "3",
              inputType: "time"
            },
            {
              elementKey: "transferOutDay",
              label: "Transfer out day",
              tableColumn: "4",
              inputType: "day"
            },
            {
              elementKey: "transferOutTime",
              label: "Transfer out time",
              tableColumn: "5",
              inputType: "time"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "location",
                    label: "Patient location",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    dataParent: "visit.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "transferInDay",
                    label: "Transfer in day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "2",
                    dataParent: "visit.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "transferInTime",
                    label: "Transfer in time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "3",
                    dataParent: "visit.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "transferOutDay",
                    label: "Transfer out day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "4",
                    dataParent: "visit.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "transferOutTime",
                    label: "Transfer out time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "5",
                    dataParent: "visit.table",
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
    vitals: {
      pageTitle: "Vital signs",
      pageDataKey: "vitals",
      pageChildren: [
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "vitals.table.name"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "vitals.table.profession"
        },
        {
          label: "Entered on day",
          elementKey: "entryDay",
          fqn: "vitals.table.entryDay"
        },
        {
          label: "Entered at time",
          elementKey: "entryTime",
          fqn: "vitals.table.entryTime"
        },
        {
          label: "Vital taken day",
          elementKey: "day",
          fqn: "vitals.table.day"
        },
        {
          label: "Vital taken time",
          elementKey: "time",
          fqn: "vitals.table.time"
        },
        {
          label: "Temperature",
          elementKey: "temperature",
          fqn: "vitals.table.temperature",
          suffix: "Celcius",
          dataCaseStudy: "36.5 C"
        },
        {
          label: "Temperature source",
          elementKey: "source",
          fqn: "vitals.table.source",
          options: [
            {
              text: "Oral"
            },
            {
              text: "Axilla"
            },
            {
              text: "Rectal"
            },
            {
              text: "Tympanic"
            }
          ],
          dataCaseStudy: "Axilla"
        },
        {
          label: "Pulse site",
          elementKey: "strength",
          fqn: "vitals.table.strength",
          options: [
            {
              text: "Peripheral"
            }
          ],
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
          options: [
            {
              text: "Regular"
            },
            {
              text: "Irregular"
            }
          ],
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
          options: [
            {
              text: "Supine"
            },
            {
              text: "Sitting"
            },
            {
              text: "Standing"
            }
          ],
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
          fqn: "vitals.table.oxygenMode",
          options: [
            {
              text: "Room air"
            },
            {
              text: "Nasal prongs"
            },
            {
              text: "Simple face mask"
            },
            {
              text: "Rebreathing face mask"
            },
            {
              text: "Optiflow"
            }
          ]
        },
        {
          label: "Flow rate",
          elementKey: "flowRate",
          fqn: "vitals.table.flowRate",
          suffix: "/lpm"
        }
      ],
      generated: "2019-07-11T07:58:42-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "vitals",
          tableKey: "table",
          addButtonText: "Add vital signs",
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
              elementKey: "entryDay",
              label: "Entered on day",
              tableColumn: "3",
              inputType: "text"
            },
            {
              elementKey: "entryTime",
              label: "Entered at time",
              tableColumn: "4",
              inputType: "text"
            },
            {
              elementKey: "day",
              label: "Vital taken day",
              tableColumn: "5",
              inputType: "text"
            },
            {
              elementKey: "time",
              label: "Vital taken time",
              tableColumn: "6",
              inputType: "text"
            },
            {
              elementKey: "temperature",
              label: "Temperature",
              tableColumn: "7",
              inputType: "text"
            },
            {
              elementKey: "source",
              label: "Temperature source",
              tableColumn: "8",
              inputType: "select"
            },
            {
              elementKey: "strength",
              label: "Pulse site",
              tableColumn: "9",
              inputType: "select"
            },
            {
              elementKey: "rate",
              label: "Pulse rate",
              tableColumn: "10",
              inputType: "text"
            },
            {
              elementKey: "rhythm",
              label: "Pulse rhythm",
              tableColumn: "11",
              inputType: "select"
            },
            {
              elementKey: "systolic",
              label: "Systolic blood pressure",
              tableColumn: "12",
              inputType: "text"
            },
            {
              elementKey: "diastolic",
              label: "Diastolic blood pressure",
              tableColumn: "13",
              inputType: "text"
            },
            {
              elementKey: "patientPosition",
              label: "Patient position",
              tableColumn: "14",
              inputType: "select"
            },
            {
              elementKey: "respirationRate",
              label: "Respiration rate",
              tableColumn: "15",
              inputType: "text"
            },
            {
              elementKey: "oxygenSaturation",
              label: "Oxygen saturation",
              tableColumn: "16",
              inputType: "text"
            },
            {
              elementKey: "oxygenMode",
              label: "Oxygen mode",
              tableColumn: "17",
              inputType: "select"
            },
            {
              elementKey: "flowRate",
              label: "Flow rate",
              tableColumn: "18",
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
                    dataParent: "vitals.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    label: "Entered by profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    dataParent: "vitals.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "entryDay",
                    label: "Entered on day",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    dataParent: "vitals.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "entryTime",
                    label: "Entered at time",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    dataParent: "vitals.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "day",
                    label: "Vital taken day",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "1",
                    formCss: "is-one-third",
                    dataParent: "vitals.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    label: "Vital taken time",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "2",
                    formCss: "is-one-third",
                    dataParent: "vitals.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "temperature",
                    label: "Temperature",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "1",
                    formCss: "is-one-third",
                    dataParent: "vitals.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "source",
                    label: "Temperature source",
                    inputType: "select",
                    formRow: "3",
                    formColumn: "2",
                    formCss: "is-one-third",
                    dataParent: "vitals.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    elementKey: "strength",
                    label: "Pulse site",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "1",
                    formCss: "is-one-third",
                    dataParent: "vitals.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "rate",
                    label: "Pulse rate",
                    inputType: "text",
                    formRow: "4",
                    formColumn: "2",
                    formCss: "is-one-third",
                    dataParent: "vitals.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "rhythm",
                    label: "Pulse rhythm",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "3",
                    formCss: "is-one-third",
                    dataParent: "vitals.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "5",
                elements: [
                  {
                    elementKey: "systolic",
                    label: "Systolic blood pressure",
                    inputType: "text",
                    formRow: "5",
                    formColumn: "1",
                    dataParent: "vitals.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "diastolic",
                    label: "Diastolic blood pressure",
                    inputType: "text",
                    formRow: "5",
                    formColumn: "2",
                    dataParent: "vitals.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "patientPosition",
                    label: "Patient position",
                    inputType: "select",
                    formRow: "5",
                    formColumn: "3",
                    dataParent: "vitals.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "6",
                elements: [
                  {
                    elementKey: "respirationRate",
                    label: "Respiration rate",
                    inputType: "text",
                    formRow: "6",
                    formColumn: "1",
                    formCss: "is-one-third",
                    dataParent: "vitals.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "7",
                elements: [
                  {
                    elementKey: "oxygenSaturation",
                    label: "Oxygen saturation",
                    inputType: "text",
                    formRow: "7",
                    formColumn: "1",
                    dataParent: "vitals.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "oxygenMode",
                    label: "Oxygen mode",
                    inputType: "select",
                    formRow: "7",
                    formColumn: "2",
                    dataParent: "vitals.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "flowRate",
                    label: "Flow rate",
                    inputType: "text",
                    formRow: "7",
                    formColumn: "3",
                    dataParent: "vitals.table",
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
    fluidBalance: {
      pageTitle: "Fluid balance",
      pageDataKey: "fluidBalance",
      pageChildren: [
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "fluidBalance.table.name",
          dataCaseStudy: "Jason"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "fluidBalance.table.profession",
          dataCaseStudy: "RN"
        },
        {
          label: "Entered on day",
          elementKey: "day",
          fqn: "fluidBalance.table.day",
          dataCaseStudy: "0"
        },
        {
          label: "Entered at time",
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
      generated: "2019-07-11T07:58:42-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "fluidBalance",
          tableKey: "table",
          addButtonText: "Add a fluid in/out record",
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
              elementKey: "fluidIn",
              label: "Fluid In",
              tableColumn: "5",
              inputType: "text"
            },
            {
              elementKey: "fluidOut",
              label: "Fluid Out",
              tableColumn: "6",
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
                    dataParent: "fluidBalance.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    label: "Entered by profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    dataParent: "fluidBalance.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    label: "Entered on day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    dataParent: "fluidBalance.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    label: "Entered at time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    dataParent: "fluidBalance.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "fluidIn",
                    label: "Fluid In",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "fluidBalance.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "fluidOut",
                    label: "Fluid Out",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "2",
                    dataParent: "fluidBalance.table",
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
    neurological: {
      pageTitle: "Neurological assessment",
      pageDataKey: "neurological",
      pageChildren: [
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "neurological.table.name",
          dataCaseStudy: "Jason"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "neurological.table.profession",
          dataCaseStudy: "RN"
        },
        {
          label: "Entered on day",
          elementKey: "day",
          fqn: "neurological.table.day",
          dataCaseStudy: "0"
        },
        {
          label: "Entered at time",
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
          dataCaseStudy: "Spontaneous",
          passToFunction: "glasgowCalculation"
        },
        {
          label: "Verbal response",
          elementKey: "verbalResponse",
          fqn: "neurological.table.glasgowComaScale.verbalResponse",
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
          dataCaseStudy: "Oriented",
          passToFunction: "glasgowCalculation"
        },
        {
          label: "Best motor response",
          elementKey: "bestMotorResponse",
          fqn: "neurological.table.glasgowComaScale.bestMotorResponse",
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
              text: "4 = Abnormal flexion"
            },
            {
              text: "5 = Localising"
            },
            {
              text: "6 = Obeys commands"
            }
          ],
          dataCaseStudy: "Obeys commands",
          passToFunction: "glasgowCalculation"
        },
        {
          label: "<b>Glasgow Coma Scale calculation</b>",
          defaultValue: "0",
          elementKey: "glasgowCalculation",
          fqn: "neurological.table.glasgowComaScale.glasgowCalculation",
          options: [
            {
              text: "=eyeOpening+verbalResponse+bestMotorResponse"
            }
          ],
          dataCaseStudy: "(15 - calculated by system)"
        },
        {
          label: "Loss of conciousness",
          elementKey: "loss",
          fqn: "neurological.table.conciousness.loss",
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
          dataCaseStudy: "No"
        },
        {
          label: "Duration",
          elementKey: "duration",
          fqn: "neurological.table.conciousness.duration",
          dataCaseStudy: "No"
        },
        {
          label: "Left pupil size",
          elementKey: "leftPupilSize",
          fqn: "neurological.table.pupils.leftPupilSize",
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
          dataCaseStudy: "2"
        },
        {
          label: "Left pupil response to light",
          elementKey: "leftPupilResponseToLight",
          fqn: "neurological.table.pupils.leftPupilResponseToLight",
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
          dataCaseStudy: "Brisk"
        },
        {
          label: "Right pupil size",
          elementKey: "rightPupilSize",
          fqn: "neurological.table.pupils.rightPupilSize",
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
          dataCaseStudy: "2"
        },
        {
          label: "Right pupil response to light",
          elementKey: "rightPupilResponseToLight",
          fqn: "neurological.table.pupils.rightPupilResponseToLight",
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
          dataCaseStudy: "Brisk"
        },
        {
          label: "Both pupils",
          elementKey: "bothPupils",
          fqn: "neurological.table.pupils.bothPupils",
          options: [
            {
              text: "Equal"
            },
            {
              text: "Unequal"
            }
          ],
          dataCaseStudy: "Equal"
        },
        {
          elementKey: "aSpacer",
          fqn: "neurological.table.pupils.aSpacer",
          dataCaseStudy: "Equal"
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
        },
        {
          label: "Level of conciousness",
          elementKey: "levelOfConciousness",
          fqn: "neurological.table.stroke.levelOfConciousness",
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
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Level of conciousness questions",
          elementKey: "levelOfConciousnessQuestions",
          fqn: "neurological.table.stroke.levelOfConciousnessQuestions",
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
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Level of conciousness commands",
          elementKey: "levelOfConciousnessCommands",
          fqn: "neurological.table.stroke.levelOfConciousnessCommands",
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
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Motor - left arm",
          elementKey: "motorLeftArm",
          fqn: "neurological.table.stroke.motorLeftArm",
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
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Motor - right arm",
          elementKey: "motorRightArm",
          fqn: "neurological.table.stroke.motorRightArm",
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
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Motor - left leg",
          elementKey: "motorLeftLeg",
          fqn: "neurological.table.stroke.motorLeftLeg",
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
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Motor - right leg",
          elementKey: "motorRightLeg",
          fqn: "neurological.table.stroke.motorRightLeg",
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
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Limb ataxia",
          elementKey: "limbAtaxia",
          fqn: "neurological.table.stroke.limbAtaxia",
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
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Best gaze",
          elementKey: "bestGaze",
          fqn: "neurological.table.stroke.bestGaze",
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
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Visual",
          elementKey: "visual",
          fqn: "neurological.table.stroke.visual",
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
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Facial palsy",
          elementKey: "facialPalsy",
          fqn: "neurological.table.stroke.facialPalsy",
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
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Sensory",
          elementKey: "sensory",
          fqn: "neurological.table.stroke.sensory",
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
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Best language",
          elementKey: "bestLanguage",
          fqn: "neurological.table.stroke.bestLanguage",
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
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Dysarthria",
          elementKey: "dysarthria",
          fqn: "neurological.table.stroke.dysarthria",
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
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "Extinction and inattention",
          elementKey: "extinctionAndInattention",
          fqn: "neurological.table.stroke.extinctionAndInattention",
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
          passToFunction: "strokeAssessmentCalculation"
        },
        {
          label: "<b>Stroke assessment calculation</b>",
          defaultValue: "0",
          elementKey: "strokeAssessmentCalculation",
          fqn: "neurological.table.stroke.strokeAssessmentCalculation"
        }
      ],
      generated: "2019-07-11T07:58:42-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "neurological",
          tableKey: "table",
          label: "Neurological",
          addButtonText: "Add a neurological assessment",
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
              elementKey: "status",
              label: "Status",
              tableColumn: "5",
              inputType: "fieldset",
              tableCss: "hide-table-element"
            },
            {
              elementKey: "alert",
              label: "Alert",
              tableColumn: "6",
              inputType: "checkbox"
            },
            {
              elementKey: "oriented",
              label: "Oriented",
              tableColumn: "7",
              inputType: "checkbox"
            },
            {
              elementKey: "confused",
              label: "Confused",
              tableColumn: "8",
              inputType: "checkbox"
            },
            {
              elementKey: "drowsy",
              label: "Drowsy",
              tableColumn: "9",
              inputType: "checkbox"
            },
            {
              elementKey: "unresponsive",
              label: "Unresponsive",
              tableColumn: "10",
              inputType: "checkbox"
            },
            {
              elementKey: "dizziness",
              label: "Dizziness",
              tableColumn: "11",
              inputType: "checkbox"
            },
            {
              elementKey: "blurredVision",
              label: "Eye opening",
              tableColumn: "12",
              inputType: "checkbox"
            },
            {
              elementKey: "glasgowComaScale",
              label: "Glasgow Coma Scale",
              tableColumn: "13",
              inputType: "fieldset",
              tableCss: "hide-table-element"
            },
            {
              elementKey: "eyeOpening",
              label: "Eye opening",
              tableColumn: "14",
              inputType: "select"
            },
            {
              elementKey: "verbalResponse",
              label: "Verbal response",
              tableColumn: "15",
              inputType: "select"
            },
            {
              elementKey: "bestMotorResponse",
              label: "Best motor response",
              tableColumn: "16",
              inputType: "select"
            },
            {
              elementKey: "glasgowCalculation",
              label: "<b>Glasgow Coma Scale calculation</b>",
              tableColumn: "17",
              inputType: "calculatedValue"
            },
            {
              elementKey: "conciousness",
              label: "Conciousness",
              tableColumn: "18",
              inputType: "fieldset",
              tableCss: "hide-table-element"
            },
            {
              elementKey: "loss",
              label: "Loss of conciousness",
              tableColumn: "19",
              inputType: "select"
            },
            {
              elementKey: "duration",
              label: "Duration",
              tableColumn: "20",
              inputType: "text"
            },
            {
              elementKey: "pupils",
              label: "Pupils",
              tableColumn: "21",
              inputType: "fieldset",
              tableCss: "hide-table-element"
            },
            {
              elementKey: "leftPupilSize",
              label: "Left pupil size",
              tableColumn: "22",
              inputType: "select"
            },
            {
              elementKey: "leftPupilResponseToLight",
              label: "Left pupil response to light",
              tableColumn: "23",
              inputType: "select"
            },
            {
              elementKey: "rightPupilSize",
              label: "Right pupil size",
              tableColumn: "24",
              inputType: "select"
            },
            {
              elementKey: "rightPupilResponseToLight",
              label: "Right pupil response to light",
              tableColumn: "25",
              inputType: "select"
            },
            {
              elementKey: "bothPupils",
              label: "Both pupils",
              tableColumn: "26",
              inputType: "select"
            },
            {
              elementKey: "aSpacer",
              tableColumn: "27",
              inputType: "spacer",
              tableCss: "hide-table-element"
            },
            {
              elementKey: "comments",
              label: "Comments",
              tableColumn: "28",
              inputType: "textarea"
            },
            {
              elementKey: "stroke",
              label: "Stroke Assessment",
              tableColumn: "29",
              inputType: "fieldset",
              tableCss: "hide-table-element"
            },
            {
              elementKey: "levelOfConciousness",
              label: "Level of conciousness",
              tableColumn: "30",
              inputType: "select"
            },
            {
              elementKey: "levelOfConciousnessQuestions",
              label: "Level of conciousness questions",
              tableColumn: "31",
              inputType: "select"
            },
            {
              elementKey: "levelOfConciousnessCommands",
              label: "Level of conciousness commands",
              tableColumn: "32",
              inputType: "select"
            },
            {
              elementKey: "motorLeftArm",
              label: "Motor - left arm",
              tableColumn: "33",
              inputType: "select"
            },
            {
              elementKey: "motorRightArm",
              label: "Motor - right arm",
              tableColumn: "34",
              inputType: "select"
            },
            {
              elementKey: "motorLeftLeg",
              label: "Motor - left leg",
              tableColumn: "35",
              inputType: "select"
            },
            {
              elementKey: "motorRightLeg",
              label: "Motor - right leg",
              tableColumn: "36",
              inputType: "select"
            },
            {
              elementKey: "limbAtaxia",
              label: "Limb ataxia",
              tableColumn: "37",
              inputType: "select"
            },
            {
              elementKey: "bestGaze",
              label: "Best gaze",
              tableColumn: "38",
              inputType: "select"
            },
            {
              elementKey: "visual",
              label: "Visual",
              tableColumn: "39",
              inputType: "select"
            },
            {
              elementKey: "facialPalsy",
              label: "Facial palsy",
              tableColumn: "40",
              inputType: "select"
            },
            {
              elementKey: "sensory",
              label: "Sensory",
              tableColumn: "41",
              inputType: "select"
            },
            {
              elementKey: "bestLanguage",
              label: "Best language",
              tableColumn: "42",
              inputType: "select"
            },
            {
              elementKey: "dysarthria",
              label: "Dysarthria",
              tableColumn: "43",
              inputType: "select"
            },
            {
              elementKey: "extinctionAndInattention",
              label: "Extinction and inattention",
              tableColumn: "44",
              inputType: "select"
            },
            {
              elementKey: "strokeAssessmentCalculation",
              label: "<b>Stroke assessment calculation</b>",
              tableColumn: "45",
              inputType: "calculatedValue"
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
                    dataParent: "neurological.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    label: "Entered by profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    dataParent: "neurological.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    label: "Entered on day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    dataParent: "neurological.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    label: "Entered at time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    dataParent: "neurological.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "status",
                    label: "Status",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "1",
                    formCss: "is-one-third",
                    dataParent: "neurological.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "alert",
                              label: "Alert",
                              inputType: "checkbox",
                              fsetRow: "1",
                              dataParent: "neurological.table.status",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "oriented",
                              label: "Oriented",
                              inputType: "checkbox",
                              fsetRow: "2",
                              dataParent: "neurological.table.status",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "confused",
                              label: "Confused",
                              inputType: "checkbox",
                              fsetRow: "3",
                              dataParent: "neurological.table.status",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "drowsy",
                              label: "Drowsy",
                              inputType: "checkbox",
                              fsetRow: "4",
                              dataParent: "neurological.table.status",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "unresponsive",
                              label: "Unresponsive",
                              inputType: "checkbox",
                              fsetRow: "5",
                              dataParent: "neurological.table.status",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              elementKey: "dizziness",
                              label: "Dizziness",
                              inputType: "checkbox",
                              fsetRow: "6",
                              dataParent: "neurological.table.status",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "7",
                          elements: [
                            {
                              elementKey: "blurredVision",
                              label: "Eye opening",
                              inputType: "checkbox",
                              fsetRow: "7",
                              dataParent: "neurological.table.status",
                              tableKey: "table"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "glasgowComaScale",
                    label: "Glasgow Coma Scale",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "2",
                    dataParent: "neurological.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "eyeOpening",
                              label: "Eye opening",
                              inputType: "select",
                              fsetRow: "1",
                              dataParent: "neurological.table.glasgowComaScale",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "verbalResponse",
                              label: "Verbal response",
                              inputType: "select",
                              fsetRow: "2",
                              dataParent: "neurological.table.glasgowComaScale",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "bestMotorResponse",
                              label: "Best motor response",
                              inputType: "select",
                              fsetRow: "3",
                              formCss: "is-one-third",
                              dataParent: "neurological.table.glasgowComaScale",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "glasgowCalculation",
                              label: "<b>Glasgow Coma Scale calculation</b>",
                              inputType: "calculatedValue",
                              fsetRow: "4",
                              dataParent: "neurological.table.glasgowComaScale",
                              tableKey: "table"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "conciousness",
                    label: "Conciousness",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "3",
                    dataParent: "neurological.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "loss",
                              label: "Loss of conciousness",
                              inputType: "select",
                              fsetRow: "1",
                              dataParent: "neurological.table.conciousness",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "duration",
                              label: "Duration",
                              inputType: "text",
                              fsetRow: "2",
                              dataParent: "neurological.table.conciousness",
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
                    elementKey: "pupils",
                    label: "Pupils",
                    inputType: "fieldset",
                    formRow: "3",
                    formColumn: "1",
                    dataParent: "neurological.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "leftPupilSize",
                              label: "Left pupil size",
                              inputType: "select",
                              fsetRow: "1",
                              formCss: "is-one-quarter",
                              dataParent: "neurological.table.pupils",
                              tableKey: "table"
                            },
                            {
                              elementKey: "rightPupilSize",
                              label: "Right pupil size",
                              inputType: "select",
                              fsetRow: "1",
                              formCss: "is-one-quarter",
                              dataParent: "neurological.table.pupils",
                              tableKey: "table"
                            },
                            {
                              elementKey: "bothPupils",
                              label: "Both pupils",
                              inputType: "select",
                              fsetRow: "1",
                              formCss: "is-one-quarter",
                              dataParent: "neurological.table.pupils",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "leftPupilResponseToLight",
                              label: "Left pupil response to light",
                              inputType: "select",
                              fsetRow: "2",
                              formCss: "is-one-quarter",
                              dataParent: "neurological.table.pupils",
                              tableKey: "table"
                            },
                            {
                              elementKey: "rightPupilResponseToLight",
                              label: "Right pupil response to light",
                              inputType: "select",
                              fsetRow: "2",
                              formCss: "is-one-quarter",
                              dataParent: "neurological.table.pupils",
                              tableKey: "table"
                            },
                            {
                              elementKey: "aSpacer",
                              inputType: "spacer",
                              fsetRow: "2",
                              dataParent: "neurological.table.pupils",
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
                formRow: "4",
                elements: [
                  {
                    elementKey: "comments",
                    label: "Comments",
                    inputType: "textarea",
                    formRow: "4",
                    fsetRow: "3",
                    formColumn: "1",
                    formCss: "is-two-thirds",
                    dataParent: "neurological.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "resources",
                    label: "<b>Resources</b><p><a target=\"_blank\" href=\"/assets/standardized-assessment-tools/Morse-Fall-Scale-score.png\">Morse Fall Score </a></br><a target=\"_blank\" href=\"/assets/standardized-assessment-tools/mini-mental-health-screen.pdf\">Mini-mental state examination (MMSE)</a></p>",
                    inputType: "form_label",
                    formRow: "4",
                    fsetRow: "3",
                    formColumn: "1",
                    formCss: "is-one-third",
                    dataParent: "neurological.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "5",
                elements: [
                  {
                    elementKey: "stroke",
                    label: "Stroke Assessment",
                    inputType: "fieldset",
                    formRow: "5",
                    formColumn: "1",
                    formCss: "fieldset_row",
                    dataParent: "neurological.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "levelOfConciousness",
                              label: "Level of conciousness",
                              inputType: "select",
                              fsetRow: "1",
                              formCss: "is-one-third",
                              dataParent: "neurological.table.stroke",
                              tableKey: "table"
                            },
                            {
                              elementKey: "levelOfConciousnessQuestions",
                              label: "Level of conciousness questions",
                              inputType: "select",
                              fsetRow: "1",
                              formCss: "is-one-third",
                              dataParent: "neurological.table.stroke",
                              tableKey: "table"
                            },
                            {
                              elementKey: "levelOfConciousnessCommands",
                              label: "Level of conciousness commands",
                              inputType: "select",
                              fsetRow: "1",
                              formCss: "is-one-third",
                              dataParent: "neurological.table.stroke",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "motorLeftArm",
                              label: "Motor - left arm",
                              inputType: "select",
                              fsetRow: "2",
                              formCss: "is-one-third",
                              dataParent: "neurological.table.stroke",
                              tableKey: "table"
                            },
                            {
                              elementKey: "motorRightArm",
                              label: "Motor - right arm",
                              inputType: "select",
                              fsetRow: "2",
                              formCss: "is-one-third",
                              dataParent: "neurological.table.stroke",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "motorLeftLeg",
                              label: "Motor - left leg",
                              inputType: "select",
                              fsetRow: "3",
                              formCss: "is-one-third",
                              dataParent: "neurological.table.stroke",
                              tableKey: "table"
                            },
                            {
                              elementKey: "motorRightLeg",
                              label: "Motor - right leg",
                              inputType: "select",
                              fsetRow: "3",
                              formCss: "is-one-third",
                              dataParent: "neurological.table.stroke",
                              tableKey: "table"
                            },
                            {
                              elementKey: "limbAtaxia",
                              label: "Limb ataxia",
                              inputType: "select",
                              fsetRow: "3",
                              formCss: "is-one-third",
                              dataParent: "neurological.table.stroke",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "bestGaze",
                              label: "Best gaze",
                              inputType: "select",
                              fsetRow: "4",
                              formCss: "is-one-third",
                              dataParent: "neurological.table.stroke",
                              tableKey: "table"
                            },
                            {
                              elementKey: "visual",
                              label: "Visual",
                              inputType: "select",
                              fsetRow: "4",
                              formCss: "is-one-third",
                              dataParent: "neurological.table.stroke",
                              tableKey: "table"
                            },
                            {
                              elementKey: "facialPalsy",
                              label: "Facial palsy",
                              inputType: "select",
                              fsetRow: "4",
                              formCss: "is-one-third",
                              dataParent: "neurological.table.stroke",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "sensory",
                              label: "Sensory",
                              inputType: "select",
                              fsetRow: "5",
                              formCss: "is-one-third",
                              dataParent: "neurological.table.stroke",
                              tableKey: "table"
                            },
                            {
                              elementKey: "bestLanguage",
                              label: "Best language",
                              inputType: "select",
                              fsetRow: "5",
                              formCss: "is-one-third",
                              dataParent: "neurological.table.stroke",
                              tableKey: "table"
                            },
                            {
                              elementKey: "dysarthria",
                              label: "Dysarthria",
                              inputType: "select",
                              fsetRow: "5",
                              formCss: "is-one-third",
                              dataParent: "neurological.table.stroke",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              elementKey: "extinctionAndInattention",
                              label: "Extinction and inattention",
                              inputType: "select",
                              fsetRow: "6",
                              formCss: "is-one-third",
                              dataParent: "neurological.table.stroke",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "7",
                          elements: [
                            {
                              elementKey: "strokeAssessmentCalculation",
                              label: "<b>Stroke assessment calculation</b>",
                              inputType: "calculatedValue",
                              fsetRow: "7",
                              formCss: "is-one-third",
                              dataParent: "neurological.table.stroke",
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
    respiratory: {
      pageTitle: "Respiratory assessment",
      pageDataKey: "respiratory",
      pageChildren: [
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "respiratory.table.name",
          dataCaseStudy: "Jason"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "respiratory.table.profession",
          dataCaseStudy: "RN"
        },
        {
          label: "Entered on day",
          elementKey: "day",
          fqn: "respiratory.table.day",
          dataCaseStudy: "0"
        },
        {
          label: "Entered at time",
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
          fqn: "respiratory.table.airway.flowRate",
          suffix: "/lpm"
        },
        {
          label: "Left upper lung",
          elementKey: "lul",
          fqn: "respiratory.table.breath.lul",
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
          dataCaseStudy: "Normal"
        },
        {
          label: "Right upper lung",
          elementKey: "rul",
          fqn: "respiratory.table.breath.rul",
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
          dataCaseStudy: "Decreased"
        },
        {
          label: "Left lower lung",
          elementKey: "lll",
          fqn: "respiratory.table.breath.lll",
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
          dataCaseStudy: "Decreased"
        },
        {
          label: "Right lower lung",
          elementKey: "rll",
          fqn: "respiratory.table.breath.rll",
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
          dataCaseStudy: "Decreased"
        },
        {
          label: "Respiratory rhythm",
          elementKey: "respiratoryRhythm",
          fqn: "respiratory.table.breath.respiratoryRhythm",
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
          dataCaseStudy: "Regular"
        },
        {
          label: "Respiratory depth",
          elementKey: "respiratoryDepth",
          fqn: "respiratory.table.breath.respiratoryDepth",
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
          dataCaseStudy: "Shallow"
        },
        {
          label: "Cough",
          elementKey: "cough",
          fqn: "respiratory.table.sputum.cough",
          options: [
            {
              text: "No"
            },
            {
              text: "Nonproductive"
            },
            {
              text: "Productive"
            }
          ],
          dataCaseStudy: "No"
        },
        {
          label: "Sputum colour",
          elementKey: "sputumColour",
          fqn: "respiratory.table.sputum.sputumColour",
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
      generated: "2019-07-11T07:58:42-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "respiratory",
          tableKey: "table",
          addButtonText: "Add a respiratory assessment",
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
              elementKey: "patent",
              label: "Patent",
              tableColumn: "5",
              inputType: "checkbox"
            },
            {
              elementKey: "obstructed",
              label: "Obstructed",
              tableColumn: "6",
              inputType: "checkbox"
            },
            {
              elementKey: "oett",
              label: "Oral endotracheal tube",
              tableColumn: "7",
              inputType: "checkbox"
            },
            {
              elementKey: "otherValue",
              label: "Other",
              tableColumn: "8",
              inputType: "checkbox"
            },
            {
              elementKey: "oxygenTherapy",
              label: "Oxygen therapy",
              tableColumn: "9",
              inputType: "text"
            },
            {
              elementKey: "flowRate",
              label: "Flow rate",
              tableColumn: "10",
              inputType: "text"
            },
            {
              elementKey: "lul",
              label: "Left upper lung",
              tableColumn: "11",
              inputType: "select"
            },
            {
              elementKey: "rul",
              label: "Right upper lung",
              tableColumn: "12",
              inputType: "select"
            },
            {
              elementKey: "aSpacer",
              tableColumn: "13",
              inputType: "spacer",
              tableCss: "hide-table-element"
            },
            {
              elementKey: "rml",
              label: "Right middle lung",
              tableColumn: "14",
              inputType: "select"
            },
            {
              elementKey: "lll",
              label: "Left lower lung",
              tableColumn: "15",
              inputType: "select"
            },
            {
              elementKey: "rll",
              label: "Right lower lung",
              tableColumn: "16",
              inputType: "select"
            },
            {
              elementKey: "respiratoryRhythm",
              label: "Respiratory rhythm",
              tableColumn: "17",
              inputType: "select"
            },
            {
              elementKey: "respiratoryDepth",
              label: "Respiratory depth",
              tableColumn: "18",
              inputType: "select"
            },
            {
              elementKey: "cough",
              label: "Cough",
              tableColumn: "19",
              inputType: "select"
            },
            {
              elementKey: "sputumColour",
              label: "Sputum colour",
              tableColumn: "20",
              inputType: "select"
            },
            {
              elementKey: "aSpacer",
              tableColumn: "21",
              inputType: "spacer",
              tableCss: "hide-table-element"
            },
            {
              elementKey: "sputumComments",
              label: "Sputum comments",
              tableColumn: "22",
              inputType: "text"
            },
            {
              elementKey: "generalComments",
              label: "General comments",
              tableColumn: "23",
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
                    dataParent: "respiratory.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    label: "Entered by profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    dataParent: "respiratory.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    label: "Entered on day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    dataParent: "respiratory.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    label: "Entered at time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    dataParent: "respiratory.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "airway",
                    label: "Airway",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "respiratory.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "patent",
                              label: "Patent",
                              inputType: "checkbox",
                              fsetRow: "1",
                              dataParent: "respiratory.table.airway",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "obstructed",
                              label: "Obstructed",
                              inputType: "checkbox",
                              fsetRow: "2",
                              dataParent: "respiratory.table.airway",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "oett",
                              label: "Oral endotracheal tube",
                              inputType: "checkbox",
                              fsetRow: "3",
                              dataParent: "respiratory.table.airway",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "otherValue",
                              label: "Other",
                              inputType: "checkbox",
                              fsetRow: "4",
                              dataParent: "respiratory.table.airway",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "oxygenTherapy",
                              label: "Oxygen therapy",
                              inputType: "text",
                              fsetRow: "5",
                              dataParent: "respiratory.table.airway",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              elementKey: "flowRate",
                              label: "Flow rate",
                              inputType: "text",
                              fsetRow: "6",
                              dataParent: "respiratory.table.airway",
                              tableKey: "table"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "breath",
                    label: "Breath sounds",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "2",
                    dataParent: "respiratory.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "lul",
                              label: "Left upper lung",
                              inputType: "select",
                              fsetRow: "1",
                              dataParent: "respiratory.table.breath",
                              tableKey: "table"
                            },
                            {
                              elementKey: "rul",
                              label: "Right upper lung",
                              inputType: "select",
                              fsetRow: "1",
                              dataParent: "respiratory.table.breath",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "aSpacer",
                              inputType: "spacer",
                              fsetRow: "2",
                              dataParent: "respiratory.table.breath",
                              tableKey: "table"
                            },
                            {
                              elementKey: "rml",
                              label: "Right middle lung",
                              inputType: "select",
                              fsetRow: "2",
                              dataParent: "respiratory.table.breath",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "lll",
                              label: "Left lower lung",
                              inputType: "select",
                              fsetRow: "3",
                              dataParent: "respiratory.table.breath",
                              tableKey: "table"
                            },
                            {
                              elementKey: "rll",
                              label: "Right lower lung",
                              inputType: "select",
                              fsetRow: "3",
                              dataParent: "respiratory.table.breath",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "respiratoryRhythm",
                              label: "Respiratory rhythm",
                              inputType: "select",
                              fsetRow: "4",
                              dataParent: "respiratory.table.breath",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "respiratoryDepth",
                              label: "Respiratory depth",
                              inputType: "select",
                              fsetRow: "5",
                              dataParent: "respiratory.table.breath",
                              tableKey: "table"
                            }
                          ]
                        }
                      ],
                      columnsCount: 2
                    }
                  },
                  {
                    elementKey: "sputum",
                    label: "Sputum",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "3",
                    dataParent: "respiratory.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "cough",
                              label: "Cough",
                              inputType: "select",
                              fsetRow: "1",
                              dataParent: "respiratory.table.sputum",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "sputumColour",
                              label: "Sputum colour",
                              inputType: "select",
                              fsetRow: "2",
                              dataParent: "respiratory.table.sputum",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "sputumComments",
                              label: "Sputum comments",
                              inputType: "text",
                              fsetRow: "3",
                              dataParent: "respiratory.table.sputum",
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
                    elementKey: "generalComments",
                    label: "General comments",
                    inputType: "textarea",
                    formRow: "3",
                    formColumn: "1",
                    dataParent: "respiratory.table",
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
    cardiovascular: {
      pageTitle: "Cardiovascular assessment",
      pageDataKey: "cardiovascular",
      pageChildren: [
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "cardiovascular.table.name",
          dataCaseStudy: "Jason"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "cardiovascular.table.profession",
          dataCaseStudy: "RN"
        },
        {
          label: "Entered on day",
          elementKey: "day",
          fqn: "cardiovascular.table.day",
          dataCaseStudy: "0"
        },
        {
          label: "Entered at time",
          elementKey: "time",
          fqn: "cardiovascular.table.time",
          dataCaseStudy: "0.8125"
        },
        {
          label: "Pulse",
          elementKey: "pulse",
          fqn: "cardiovascular.table.pulse",
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
          dataCaseStudy: "Regular"
        },
        {
          label: "Skin appearance",
          elementKey: "skinAppearance",
          fqn: "cardiovascular.table.skinAppearance",
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
          dataCaseStudy: "Normal"
        },
        {
          label: "Cap refill",
          elementKey: "labelCapRefill",
          fqn: "cardiovascular.table.labelCapRefill",
          helperText: "Normal < 3 seconds\nDelayed > 3 seconds",
          dataCaseStudy: "Normal",
          helperHtml: "<p>Normal < 3 seconds</p>\n<p>Delayed > 3 seconds</p>"
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
          options: [
            {
              text: "Normal < 3 seconds"
            },
            {
              text: "Delayed > 3 seconds"
            }
          ],
          formOption: "hideLabel",
          dataCaseStudy: "Normal"
        },
        {
          label: "Cap refill: Right foot",
          elementKey: "capRefillLeftHand",
          fqn: "cardiovascular.table.capRefillLeftHand",
          options: [
            {
              text: "Normal < 3 seconds"
            },
            {
              text: "Delayed > 3 seconds"
            }
          ],
          formOption: "hideLabel",
          dataCaseStudy: "Normal"
        },
        {
          label: "Cap refill: Left foot",
          elementKey: "capRefillRightFoot",
          fqn: "cardiovascular.table.capRefillRightFoot",
          options: [
            {
              text: "Normal < 3 seconds"
            },
            {
              text: "Delayed > 3 seconds"
            }
          ],
          formOption: "hideLabel",
          dataCaseStudy: "Normal"
        },
        {
          label: "Temperature: Right hand",
          elementKey: "capRefillLeftFoot",
          fqn: "cardiovascular.table.capRefillLeftFoot",
          options: [
            {
              text: "Normal < 3 seconds"
            },
            {
              text: "Delayed > 3 seconds"
            }
          ],
          formOption: "hideLabel",
          dataCaseStudy: "Normal"
        },
        {
          label: "Temperature: Left hand",
          elementKey: "temperatureRightHand",
          fqn: "cardiovascular.table.temperatureRightHand",
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
          formOption: "hideLabel",
          dataCaseStudy: "Warm"
        },
        {
          label: "Temperature: Right foot",
          elementKey: "temperatureLeftHand",
          fqn: "cardiovascular.table.temperatureLeftHand",
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
          formOption: "hideLabel",
          dataCaseStudy: "Warm"
        },
        {
          label: "Temperature: Left foot",
          elementKey: "temperatureRightFoot",
          fqn: "cardiovascular.table.temperatureRightFoot",
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
          formOption: "hideLabel",
          dataCaseStudy: "Warm"
        },
        {
          label: "Peripheral edema: Right hand",
          elementKey: "temperatureLeftFoot",
          fqn: "cardiovascular.table.temperatureLeftFoot",
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
          formOption: "hideLabel",
          dataCaseStudy: "Warm"
        },
        {
          label: "Peripheral edema: Left hand",
          elementKey: "peripheralEdemaRightHand",
          fqn: "cardiovascular.table.peripheralEdemaRightHand",
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
          formOption: "hideLabel",
          dataCaseStudy: "No"
        },
        {
          label: "Peripheral edema: Right foot",
          elementKey: "peripheralEdemaLeftHand",
          fqn: "cardiovascular.table.peripheralEdemaLeftHand",
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
          formOption: "hideLabel",
          dataCaseStudy: "No"
        },
        {
          label: "Peripheral edema: Left foot",
          elementKey: "peripheralEdemaRightFoot",
          fqn: "cardiovascular.table.peripheralEdemaRightFoot",
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
          formOption: "hideLabel",
          dataCaseStudy: "No"
        },
        {
          label: "Nail bed colour: Right hand",
          elementKey: "peripheralEdemaLeftFoot",
          fqn: "cardiovascular.table.peripheralEdemaLeftFoot",
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
          formOption: "hideLabel",
          dataCaseStudy: "No"
        },
        {
          label: "Nail bed colour: Left hand",
          elementKey: "nailBedColourRightHand",
          fqn: "cardiovascular.table.nailBedColourRightHand",
          options: [
            {
              text: "Pink"
            },
            {
              text: "Cyanotic"
            }
          ],
          formOption: "hideLabel",
          dataCaseStudy: "Pink"
        },
        {
          label: "Nail bed colour: Right Foot",
          elementKey: "nailBedColourLeftHand",
          fqn: "cardiovascular.table.nailBedColourLeftHand",
          options: [
            {
              text: "Pink"
            },
            {
              text: "Cyanotic"
            }
          ],
          formOption: "hideLabel",
          dataCaseStudy: "Pink"
        },
        {
          label: "Nail bed colour: Left foot",
          elementKey: "nailBedColourRightFoot",
          fqn: "cardiovascular.table.nailBedColourRightFoot",
          options: [
            {
              text: "Pink"
            },
            {
              text: "Cyanotic"
            }
          ],
          formOption: "hideLabel",
          dataCaseStudy: "Pink"
        },
        {
          elementKey: "nailBedColourLeftFoot",
          fqn: "cardiovascular.table.nailBedColourLeftFoot",
          options: [
            {
              text: "Pink"
            },
            {
              text: "Cyanotic"
            }
          ],
          formOption: "hideLabel",
          dataCaseStudy: "Pink"
        },
        {
          label: "Comments",
          elementKey: "comments",
          fqn: "cardiovascular.table.comments",
          dataCaseStudy: "(blank)"
        }
      ],
      generated: "2019-07-11T07:58:42-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "cardiovascular",
          tableKey: "table",
          addButtonText: "Add a cardiovascular assessment",
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
              elementKey: "pulse",
              label: "Pulse",
              tableColumn: "5",
              inputType: "select"
            },
            {
              elementKey: "skinAppearance",
              label: "Skin appearance",
              tableColumn: "6",
              inputType: "select"
            },
            {
              elementKey: "labelCapRefill",
              label: "Cap refill",
              tableColumn: "7",
              inputType: "form_label"
            },
            {
              elementKey: "labelTemperature",
              label: "Temperature",
              tableColumn: "8",
              inputType: "form_label"
            },
            {
              elementKey: "labelPeripheral",
              label: "Peripheral edema",
              tableColumn: "9",
              inputType: "form_label"
            },
            {
              elementKey: "labelNailBed",
              label: "Nail bed colour",
              tableColumn: "10",
              inputType: "form_label"
            },
            {
              elementKey: "labelRight",
              label: "Right hand",
              tableColumn: "11",
              inputType: "form_label"
            },
            {
              elementKey: "labelLeftHand",
              label: "Left hand",
              tableColumn: "12",
              inputType: "form_label"
            },
            {
              elementKey: "labelRightFoot",
              label: "Right foot",
              tableColumn: "13",
              inputType: "form_label"
            },
            {
              elementKey: "labelLeftFoot",
              label: "Left foot",
              tableColumn: "14",
              inputType: "form_label"
            },
            {
              elementKey: "capRefillRightHand",
              label: "Cap refill: Left hand",
              tableColumn: "15",
              inputType: "select"
            },
            {
              elementKey: "capRefillLeftHand",
              label: "Cap refill: Right foot",
              tableColumn: "16",
              inputType: "select"
            },
            {
              elementKey: "capRefillRightFoot",
              label: "Cap refill: Left foot",
              tableColumn: "17",
              inputType: "select"
            },
            {
              elementKey: "capRefillLeftFoot",
              label: "Temperature: Right hand",
              tableColumn: "18",
              inputType: "select"
            },
            {
              elementKey: "temperatureRightHand",
              label: "Temperature: Left hand",
              tableColumn: "19",
              inputType: "select"
            },
            {
              elementKey: "temperatureLeftHand",
              label: "Temperature: Right foot",
              tableColumn: "20",
              inputType: "select"
            },
            {
              elementKey: "temperatureRightFoot",
              label: "Temperature: Left foot",
              tableColumn: "21",
              inputType: "select"
            },
            {
              elementKey: "temperatureLeftFoot",
              label: "Peripheral edema: Right hand",
              tableColumn: "22",
              inputType: "select"
            },
            {
              elementKey: "peripheralEdemaRightHand",
              label: "Peripheral edema: Left hand",
              tableColumn: "23",
              inputType: "select"
            },
            {
              elementKey: "peripheralEdemaLeftHand",
              label: "Peripheral edema: Right foot",
              tableColumn: "24",
              inputType: "select"
            },
            {
              elementKey: "peripheralEdemaRightFoot",
              label: "Peripheral edema: Left foot",
              tableColumn: "25",
              inputType: "select"
            },
            {
              elementKey: "peripheralEdemaLeftFoot",
              label: "Nail bed colour: Right hand",
              tableColumn: "26",
              inputType: "select"
            },
            {
              elementKey: "nailBedColourRightHand",
              label: "Nail bed colour: Left hand",
              tableColumn: "27",
              inputType: "select"
            },
            {
              elementKey: "nailBedColourLeftHand",
              label: "Nail bed colour: Right Foot",
              tableColumn: "28",
              inputType: "select"
            },
            {
              elementKey: "nailBedColourRightFoot",
              label: "Nail bed colour: Left foot",
              tableColumn: "29",
              inputType: "select"
            },
            {
              elementKey: "nailBedColourLeftFoot",
              tableColumn: "30",
              inputType: "select"
            },
            {
              elementKey: "comments",
              label: "Comments",
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
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    label: "Entered by profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    label: "Entered on day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    label: "Entered at time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "pulse",
                    label: "Pulse",
                    inputType: "select",
                    formRow: "2",
                    formColumn: "1",
                    formCss: "is-one-third",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "skinAppearance",
                    label: "Skin appearance",
                    inputType: "select",
                    formRow: "2",
                    formColumn: "2",
                    formCss: "is-one-third",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "labelCapRefill",
                    label: "Cap refill",
                    inputType: "form_label",
                    formRow: "3",
                    formColumn: "2",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "labelTemperature",
                    label: "Temperature",
                    inputType: "form_label",
                    formRow: "3",
                    formColumn: "3",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "labelPeripheral",
                    label: "Peripheral edema",
                    inputType: "form_label",
                    formRow: "3",
                    formColumn: "4",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "labelNailBed",
                    label: "Nail bed colour",
                    inputType: "form_label",
                    formRow: "3",
                    formColumn: "5",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    elementKey: "labelRight",
                    label: "Right hand",
                    inputType: "form_label",
                    formRow: "4",
                    formColumn: "1",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "capRefillRightHand",
                    label: "Cap refill: Left hand",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "2",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "temperatureRightHand",
                    label: "Temperature: Left hand",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "3",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "peripheralEdemaRightHand",
                    label: "Peripheral edema: Left hand",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "4",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "nailBedColourRightHand",
                    label: "Nail bed colour: Left hand",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "5",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "5",
                elements: [
                  {
                    elementKey: "labelLeftHand",
                    label: "Left hand",
                    inputType: "form_label",
                    formRow: "5",
                    formColumn: "1",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "capRefillLeftHand",
                    label: "Cap refill: Right foot",
                    inputType: "select",
                    formRow: "5",
                    formColumn: "2",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "temperatureLeftHand",
                    label: "Temperature: Right foot",
                    inputType: "select",
                    formRow: "5",
                    formColumn: "3",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "peripheralEdemaLeftHand",
                    label: "Peripheral edema: Right foot",
                    inputType: "select",
                    formRow: "5",
                    formColumn: "4",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "nailBedColourLeftHand",
                    label: "Nail bed colour: Right Foot",
                    inputType: "select",
                    formRow: "5",
                    formColumn: "5",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "6",
                elements: [
                  {
                    elementKey: "labelRightFoot",
                    label: "Right foot",
                    inputType: "form_label",
                    formRow: "6",
                    formColumn: "1",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "capRefillRightFoot",
                    label: "Cap refill: Left foot",
                    inputType: "select",
                    formRow: "6",
                    formColumn: "2",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "temperatureRightFoot",
                    label: "Temperature: Left foot",
                    inputType: "select",
                    formRow: "6",
                    formColumn: "3",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "peripheralEdemaRightFoot",
                    label: "Peripheral edema: Left foot",
                    inputType: "select",
                    formRow: "6",
                    formColumn: "4",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "nailBedColourRightFoot",
                    label: "Nail bed colour: Left foot",
                    inputType: "select",
                    formRow: "6",
                    formColumn: "5",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "7",
                elements: [
                  {
                    elementKey: "labelLeftFoot",
                    label: "Left foot",
                    inputType: "form_label",
                    formRow: "7",
                    formColumn: "1",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "capRefillLeftFoot",
                    label: "Temperature: Right hand",
                    inputType: "select",
                    formRow: "7",
                    formColumn: "2",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "temperatureLeftFoot",
                    label: "Peripheral edema: Right hand",
                    inputType: "select",
                    formRow: "7",
                    formColumn: "3",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "peripheralEdemaLeftFoot",
                    label: "Nail bed colour: Right hand",
                    inputType: "select",
                    formRow: "7",
                    formColumn: "4",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "nailBedColourLeftFoot",
                    inputType: "select",
                    formRow: "7",
                    formColumn: "5",
                    dataParent: "cardiovascular.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "8",
                elements: [
                  {
                    elementKey: "comments",
                    label: "Comments",
                    inputType: "textarea",
                    formRow: "8",
                    formColumn: "1",
                    dataParent: "cardiovascular.table",
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
    gastrointestinal: {
      pageTitle: "Gastrointestinal assessment",
      pageDataKey: "gastrointestinal",
      pageChildren: [
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "gastrointestinal.table.name",
          dataCaseStudy: "Jason"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "gastrointestinal.table.profession",
          dataCaseStudy: "RN"
        },
        {
          label: "Entered on day",
          elementKey: "day",
          fqn: "gastrointestinal.table.day",
          dataCaseStudy: "0"
        },
        {
          label: "Entered at time",
          elementKey: "time",
          fqn: "gastrointestinal.table.time",
          dataCaseStudy: "0.8125"
        },
        {
          label: "Abdomen",
          elementKey: "condition",
          fqn: "gastrointestinal.table.abdomen.condition",
          options: [
            {
              text: "soft=Soft"
            },
            {
              text: "tender=Tender"
            },
            {
              text: "rigid=Rigid"
            },
            {
              text: "guarding=Guarding"
            },
            {
              text: "distended=Distended"
            },
            {
              text: "scars=Scars"
            }
          ]
        },
        {
          label: "Abdominal pain",
          elementKey: "pain",
          fqn: "gastrointestinal.table.abdomen.pain",
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
          label: "If answered yes, please complete the <a href=\"/assets/standardized-assessment-tools/numeric-rating-scale.pdf\">pain assessment</a>.",
          elementKey: "aLabel",
          fqn: "gastrointestinal.table.abdomen.aLabel",
          dataCaseStudy: "No"
        },
        {
          label: "Emesis present?",
          elementKey: "emesisPresent",
          fqn: "gastrointestinal.table.emesis.emesisPresent",
          options: [
            {
              text: "None"
            },
            {
              text: "Nausea"
            },
            {
              text: "Vomiting"
            }
          ],
          dataCaseStudy: "(nothing selected)"
        },
        {
          label: "Emesis colour",
          elementKey: "colour",
          fqn: "gastrointestinal.table.emesis.colour",
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
          dataCaseStudy: "(nothing selected)"
        },
        {
          label: "Difficulty",
          elementKey: "eating",
          fqn: "gastrointestinal.table.eatingGroup.eating",
          options: [
            {
              text: "Regular"
            },
            {
              text: "Difficult"
            }
          ],
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
          elementKey: "npoSinceDay",
          fqn: "gastrointestinal.table.eatingGroup.npoSinceDay",
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
          dataCaseStudy: "Brown"
        },
        {
          label: "Description",
          elementKey: "stoolDescription",
          fqn: "gastrointestinal.table.stool.stoolDescription",
          options: [
            {
              text: "Runny"
            },
            {
              text: "Hard pellets"
            }
          ],
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
          dataCaseStudy: "As per patient observed"
        },
        {
          label: "Bowel",
          elementKey: "bowel",
          fqn: "gastrointestinal.table.bowel",
          options: [
            {
              text: "Normal"
            },
            {
              text: "Constipation"
            },
            {
              text: "Diarrhea"
            },
            {
              text: "Melena"
            },
            {
              text: "Incontinent"
            }
          ]
        },
        {
          label: "Bowel sounds",
          elementKey: "bSounds",
          fqn: "gastrointestinal.table.bSounds",
          options: [
            {
              text: "None"
            },
            {
              text: "LUQ"
            },
            {
              text: "RUQ"
            },
            {
              text: "LLQ"
            },
            {
              text: "RLQ"
            },
            {
              text: "Hypoactive"
            },
            {
              text: "Hyperactive"
            }
          ]
        },
        {
          label: "Comments",
          elementKey: "comments",
          fqn: "gastrointestinal.table.comments",
          dataCaseStudy: "(nothing entered)"
        }
      ],
      generated: "2019-07-11T07:58:42-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "gastrointestinal",
          tableKey: "table",
          addButtonText: "Add a gastrointestinal assessment",
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
              elementKey: "condition",
              label: "Abdomen",
              tableColumn: "5",
              inputType: "checkset"
            },
            {
              elementKey: "pain",
              label: "Abdominal pain",
              tableColumn: "6",
              inputType: "select"
            },
            {
              elementKey: "aLabel",
              label: "If answered yes, please complete the <a href=\"/assets/standardized-assessment-tools/numeric-rating-scale.pdf\">pain assessment</a>.",
              tableColumn: "7",
              inputType: "form_label"
            },
            {
              elementKey: "emesisPresent",
              label: "Emesis present?",
              tableColumn: "8",
              inputType: "select"
            },
            {
              elementKey: "colour",
              label: "Emesis colour",
              tableColumn: "9",
              inputType: "select"
            },
            {
              elementKey: "description",
              label: "Description",
              tableColumn: "10",
              inputType: "text"
            },
            {
              elementKey: "amount",
              label: "Approximate volume",
              tableColumn: "11",
              inputType: "select"
            },
            {
              elementKey: "eating",
              label: "Difficulty",
              tableColumn: "12",
              inputType: "select"
            },
            {
              elementKey: "reason",
              label: "Reason",
              tableColumn: "13",
              inputType: "text"
            },
            {
              elementKey: "npoSinceDay",
              label: "NPO since day",
              tableColumn: "14",
              inputType: "day"
            },
            {
              elementKey: "npoSinceTime",
              label: "NPO since time",
              tableColumn: "15",
              inputType: "time"
            },
            {
              elementKey: "weightLoss",
              label: "Weight loss",
              tableColumn: "16",
              inputType: "select"
            },
            {
              elementKey: "lastBm",
              label: "Last bowel movement",
              tableColumn: "17",
              inputType: "text"
            },
            {
              elementKey: "stoolColour",
              label: "Stool colour",
              tableColumn: "18",
              inputType: "select"
            },
            {
              elementKey: "stoolDescription",
              label: "Description",
              tableColumn: "19",
              inputType: "select"
            },
            {
              elementKey: "stoolAmount",
              label: "Amount",
              tableColumn: "20",
              inputType: "text"
            },
            {
              elementKey: "stoolSource",
              label: "Source",
              tableColumn: "21",
              inputType: "select"
            },
            {
              elementKey: "bowel",
              label: "Bowel",
              tableColumn: "22",
              inputType: "checkset"
            },
            {
              elementKey: "bSounds",
              label: "Bowel sounds",
              tableColumn: "23",
              inputType: "checkset"
            },
            {
              elementKey: "comments",
              label: "Comments",
              tableColumn: "24",
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
                    dataParent: "gastrointestinal.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    label: "Entered by profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    dataParent: "gastrointestinal.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    label: "Entered on day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    dataParent: "gastrointestinal.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    label: "Entered at time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    dataParent: "gastrointestinal.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "abdomen",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "gastrointestinal.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "condition",
                              label: "Abdomen",
                              inputType: "checkset",
                              fsetRow: "1",
                              dataParent: "gastrointestinal.table.abdomen",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "pain",
                              label: "Abdominal pain",
                              inputType: "select",
                              fsetRow: "2",
                              dataParent: "gastrointestinal.table.abdomen",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "aLabel",
                              label: "If answered yes, please complete the <a href=\"/assets/standardized-assessment-tools/numeric-rating-scale.pdf\">pain assessment</a>.",
                              inputType: "form_label",
                              fsetRow: "3",
                              dataParent: "gastrointestinal.table.abdomen",
                              tableKey: "table"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "stool",
                    label: "Stool",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "gastrointestinal.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "lastBm",
                              label: "Last bowel movement",
                              inputType: "text",
                              fsetRow: "1",
                              dataParent: "gastrointestinal.table.stool",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "stoolColour",
                              label: "Stool colour",
                              inputType: "select",
                              fsetRow: "2",
                              dataParent: "gastrointestinal.table.stool",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "stoolDescription",
                              label: "Description",
                              inputType: "select",
                              fsetRow: "3",
                              dataParent: "gastrointestinal.table.stool",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "stoolAmount",
                              label: "Amount",
                              inputType: "text",
                              fsetRow: "4",
                              dataParent: "gastrointestinal.table.stool",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "stoolSource",
                              label: "Source",
                              inputType: "select",
                              fsetRow: "5",
                              dataParent: "gastrointestinal.table.stool",
                              tableKey: "table"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "emesis",
                    label: "Emesis",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "2",
                    dataParent: "gastrointestinal.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "emesisPresent",
                              label: "Emesis present?",
                              inputType: "select",
                              fsetRow: "1",
                              dataParent: "gastrointestinal.table.emesis",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "colour",
                              label: "Emesis colour",
                              inputType: "select",
                              fsetRow: "2",
                              dataParent: "gastrointestinal.table.emesis",
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
                              dataParent: "gastrointestinal.table.emesis",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "amount",
                              label: "Approximate volume",
                              inputType: "select",
                              fsetRow: "4",
                              dataParent: "gastrointestinal.table.emesis",
                              tableKey: "table"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "eatingGroup",
                    label: "Eating",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "3",
                    dataParent: "gastrointestinal.table",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "eating",
                              label: "Difficulty",
                              inputType: "select",
                              fsetRow: "1",
                              dataParent: "gastrointestinal.table.eatingGroup",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "reason",
                              label: "Reason",
                              inputType: "text",
                              fsetRow: "2",
                              dataParent: "gastrointestinal.table.eatingGroup",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "npoSinceDay",
                              label: "NPO since day",
                              inputType: "day",
                              fsetRow: "3",
                              dataParent: "gastrointestinal.table.eatingGroup",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "npoSinceTime",
                              label: "NPO since time",
                              inputType: "time",
                              fsetRow: "4",
                              dataParent: "gastrointestinal.table.eatingGroup",
                              tableKey: "table"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "weightLoss",
                              label: "Weight loss",
                              inputType: "select",
                              fsetRow: "5",
                              dataParent: "gastrointestinal.table.eatingGroup",
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
                    elementKey: "bowel",
                    label: "Bowel",
                    inputType: "checkset",
                    formRow: "3",
                    formColumn: "1",
                    formCss: "is-one-quarter",
                    dataParent: "gastrointestinal.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "bSounds",
                    label: "Bowel sounds",
                    inputType: "checkset",
                    formRow: "3",
                    formColumn: "2",
                    formCss: "is-one-quarter",
                    dataParent: "gastrointestinal.table",
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
                    formRow: "4",
                    fsetRow: "8",
                    formColumn: "1",
                    dataParent: "gastrointestinal.table",
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
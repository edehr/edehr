export default function () {
  return {
    visit: {
      pageDataKey: 'visit',
      pageTitle: 'Visit details',
      pIndex: '10',
      isV2: true,
      hasGridTable: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'admissionDay',
          dataCaseStudy: '0',
          formIndex: '1',
          inputType: 'day',
          label: 'Admission day',
          mandatory: true,
          fqn: 'visit.admissionDay'
        },
        {
          elementKey: 'admissionTime',
          dataCaseStudy: '0.25',
          formIndex: '1',
          inputType: 'time',
          label: 'Admission time',
          mandatory: true,
          fqn: 'visit.admissionTime'
        },
        {
          elementKey: 'status',
          dataCaseStudy: 'Admitted',
          formIndex: '1',
          inputType: 'select',
          label: 'Admission status',
          mandatory: true,
          options: [
            {
              text: 'Admission in progress'
            },
            {
              text: 'Admitted'
            },
            {
              text: 'Inpatient'
            },
            {
              text: 'Outpatient'
            },
            {
              text: 'Surgical day care'
            },
            {
              text: 'Discharge pending'
            },
            {
              text: 'Discharged'
            }
          ],
          fqn: 'visit.status'
        },
        {
          elementKey: 'consentForTreatment',
          dataCaseStudy: true,
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Consent for treatment',
          fqn: 'visit.consentForTreatment'
        },
        {
          elementKey: 'consentForBlood',
          dataCaseStudy: true,
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Consent for blood products',
          fqn: 'visit.consentForBlood'
        },
        {
          elementKey: 'diagnosis',
          dataCaseStudy: 'COPD, shortness of breath, dizzy',
          dependantOn: 'consentForBlood',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Physician admitting diagnosis',
          fqn: 'visit.diagnosis'
        },
        {
          elementKey: 'location',
          dataCaseStudy: 'Emergency room',
          formIndex: '2',
          helperText: 'hospital, ward #, room #, home, out patient clinic',
          inputType: 'text',
          label: 'Patient location',
          mandatory: true,
          passToFunction: 'transferInTime',
          tableColumn: '1',
          fqn: 'visit.location',
          helperHtml: '<p>hospital, ward #, room #, home, out patient clinic</p>'
        },
        {
          elementKey: 'transferInDay',
          formIndex: '2',
          inputType: 'day',
          label: 'Transfer in day',
          passToFunction: 'transferInTime',
          tableColumn: '2',
          fqn: 'visit.transferInDay'
        },
        {
          elementKey: 'transferInTime',
          formIndex: '2',
          inputType: 'time',
          label: 'Transfer in time',
          tableColumn: '3',
          fqn: 'visit.transferInTime'
        },
        {
          elementKey: 'transferOutDay',
          formIndex: '2',
          inputType: 'day',
          label: 'Transfer out day',
          tableColumn: '4',
          fqn: 'visit.transferOutDay'
        },
        {
          elementKey: 'transferOutTime',
          formIndex: '2',
          inputType: 'time',
          label: 'Transfer out time',
          tableColumn: '5',
          fqn: 'visit.transferOutTime'
        }
      ],
      generated: '2019-08-29T20:15:01-07:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              gIndex: '1',
              gChildren: [
                'admissionDay',
                'admissionTime',
                'status',
                'consentForTreatment',
                'consentForBlood'
              ]
            },
            {
              formCss: 'full-width',
              gIndex: '2',
              gChildren: [
                'diagnosis'
              ]
            }
          ]
        },
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a patient location',
          ehr_list: [
            {
              ehr_list_index: '1',
              items: [
                'location'
              ]
            },
            {
              ehr_list_index: '2',
              items: [
                'transferInDay'
              ]
            },
            {
              ehr_list_index: '3',
              items: [
                'transferInTime'
              ]
            },
            {
              ehr_list_index: '4',
              items: [
                'transferOutDay'
              ]
            },
            {
              ehr_list_index: '5',
              items: [
                'transferOutTime'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a patient location',
            formKey: 'table',
            ehr_groups: [
              {
                gIndex: '1',
                gChildren: [
                  'location',
                  'transferInDay',
                  'transferInTime',
                  'transferOutDay',
                  'transferOutTime'
                ]
              }
            ],
            ehr_data: {
              location: '',
              transferInDay: '',
              transferInTime: '',
              transferOutDay: '',
              transferOutTime: ''
            }
          }
        }
      }
    },
    vitals: {
      pageDataKey: 'vitals',
      pageTitle: 'Vital signs',
      pIndex: '11',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Header',
          fqn: 'vitals.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          fqn: 'vitals.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          fqn: 'vitals.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          fqn: 'vitals.time'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'text',
          label: 'Vital taken day',
          tableColumn: '2',
          tableLabel: 'Day',
          fqn: 'vitals.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'text',
          label: 'Vital taken time',
          tableColumn: '3',
          tableLabel: 'Time',
          fqn: 'vitals.time'
        },
        {
          elementKey: 'spacer34',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'vitals.spacer34'
        },
        {
          elementKey: 'temperature',
          dataCaseStudy: '36.5',
          dependantOn: 'time',
          formIndex: '1',
          inputType: 'text',
          label: 'Temperature',
          suffix: 'Celcius',
          tableColumn: '4',
          tableLabel: 'Temperature',
          fqn: 'vitals.temperature'
        },
        {
          elementKey: 'source',
          dataCaseStudy: 'Axilla',
          formIndex: '1',
          inputType: 'select',
          label: 'Temperature source',
          options: [
            {
              text: 'Oral'
            },
            {
              text: 'Axilla'
            },
            {
              text: 'Rectal'
            },
            {
              text: 'Tympanic'
            }
          ],
          tableColumn: '5',
          tableLabel: 'Source',
          fqn: 'vitals.source'
        },
        {
          elementKey: 'spacer35',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'vitals.spacer35'
        },
        {
          elementKey: 'strength',
          dataCaseStudy: 'strong',
          formIndex: '1',
          inputType: 'select',
          label: 'Pulse site',
          options: [
            {
              text: 'Peripheral'
            }
          ],
          tableColumn: '6',
          tableLabel: 'Pulse site',
          fqn: 'vitals.strength'
        },
        {
          elementKey: 'rate',
          dataCaseStudy: '96',
          formIndex: '1',
          inputType: 'text',
          label: 'Pulse rate',
          tableColumn: '7',
          tableLabel: 'Pulse rate',
          fqn: 'vitals.rate'
        },
        {
          elementKey: 'rhythm',
          dataCaseStudy: 'regular',
          formIndex: '1',
          inputType: 'select',
          label: 'Pulse rhythm',
          options: [
            {
              text: 'Regular'
            },
            {
              text: 'Irregular'
            }
          ],
          tableColumn: '8',
          tableLabel: 'Pulse rhythm',
          fqn: 'vitals.rhythm'
        },
        {
          elementKey: 'systolic',
          addButtonText: 'Add a row to the test table',
          dataCaseStudy: '180',
          formIndex: '1',
          inputType: 'text',
          label: 'Systolic blood pressure',
          tableColumn: '9',
          tableLabel: 'Systolic blood pressure',
          fqn: 'vitals.systolic'
        },
        {
          elementKey: 'diastolic',
          dataCaseStudy: '90',
          formIndex: '1',
          inputType: 'text',
          label: 'Diastolic blood pressure',
          tableColumn: '10',
          tableLabel: 'Diastolic blood pressure',
          fqn: 'vitals.diastolic'
        },
        {
          elementKey: 'patientPosition',
          dataCaseStudy: 'sitting',
          formIndex: '1',
          inputType: 'select',
          label: 'Patient position',
          options: [
            {
              text: 'Supine'
            },
            {
              text: 'Sitting'
            },
            {
              text: 'Standing'
            }
          ],
          tableColumn: '11',
          tableLabel: 'Patient position',
          fqn: 'vitals.patientPosition'
        },
        {
          elementKey: 'respirationRate',
          dataCaseStudy: '28',
          formIndex: '1',
          inputType: 'text',
          label: 'Respiration rate',
          tableColumn: '12',
          tableLabel: 'Respiration rate',
          fqn: 'vitals.respirationRate'
        },
        {
          elementKey: 'spacer36',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'vitals.spacer36'
        },
        {
          elementKey: 'spacer37',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'vitals.spacer37'
        },
        {
          elementKey: 'oxygenSaturation',
          dataCaseStudy: '85',
          formIndex: '1',
          inputType: 'text',
          label: 'Oxygen saturation',
          suffix: '%',
          tableColumn: '13',
          tableLabel: 'Oxygen saturation',
          fqn: 'vitals.oxygenSaturation'
        },
        {
          elementKey: 'oxygenMode',
          formIndex: '1',
          inputType: 'select',
          label: 'Oxygen mode',
          options: [
            {
              text: 'Room air'
            },
            {
              text: 'Nasal prongs'
            },
            {
              text: 'Simple face mask'
            },
            {
              text: 'Rebreathing face mask'
            },
            {
              text: 'Optiflow'
            }
          ],
          tableColumn: '14',
          tableLabel: 'Oxygen mode',
          fqn: 'vitals.oxygenMode'
        },
        {
          elementKey: 'flowRate',
          formIndex: '1',
          inputType: 'text',
          label: 'Flow rate',
          suffix: '/lpm',
          tableColumn: '15',
          tableLabel: 'Flow rate',
          fqn: 'vitals.flowRate'
        }
      ],
      generated: '2019-08-29T20:15:01-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add vital signs',
          ehr_list: [
            {
              label: 'Header',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Day',
              ehr_list_index: '2',
              items: [
                'day'
              ]
            },
            {
              label: 'Time',
              ehr_list_index: '3',
              items: [
                'time'
              ]
            },
            {
              label: 'Temperature',
              ehr_list_index: '4',
              items: [
                'temperature'
              ]
            },
            {
              label: 'Source',
              ehr_list_index: '5',
              items: [
                'source'
              ]
            },
            {
              label: 'Pulse site',
              ehr_list_index: '6',
              items: [
                'strength'
              ]
            },
            {
              label: 'Pulse rate',
              ehr_list_index: '7',
              items: [
                'rate'
              ]
            },
            {
              label: 'Pulse rhythm',
              ehr_list_index: '8',
              items: [
                'rhythm'
              ]
            },
            {
              label: 'Systolic blood pressure',
              ehr_list_index: '9',
              items: [
                'systolic'
              ]
            },
            {
              label: 'Diastolic blood pressure',
              ehr_list_index: '10',
              items: [
                'diastolic'
              ]
            },
            {
              label: 'Patient position',
              ehr_list_index: '11',
              items: [
                'patientPosition'
              ]
            },
            {
              label: 'Respiration rate',
              ehr_list_index: '12',
              items: [
                'respirationRate'
              ]
            },
            {
              label: 'Oxygen saturation',
              ehr_list_index: '13',
              items: [
                'oxygenSaturation'
              ]
            },
            {
              label: 'Oxygen mode',
              ehr_list_index: '14',
              items: [
                'oxygenMode'
              ]
            },
            {
              label: 'Flow rate',
              ehr_list_index: '15',
              items: [
                'flowRate'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add vital signs',
            formKey: 'table',
            ehr_groups: [
              {
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'name',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                formCss: 'record-header',
                gIndex: '2',
                gChildren: [
                  'day',
                  'time',
                  'spacer34',
                  'temperature',
                  'source',
                  'spacer35',
                  'strength',
                  'rate',
                  'rhythm',
                  'systolic',
                  'diastolic',
                  'patientPosition',
                  'respirationRate',
                  'spacer36',
                  'spacer37',
                  'oxygenSaturation',
                  'oxygenMode',
                  'flowRate'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              temperature: '',
              source: '',
              strength: '',
              rate: '',
              rhythm: '',
              systolic: '',
              diastolic: '',
              patientPosition: '',
              respirationRate: '',
              oxygenSaturation: '',
              oxygenMode: '',
              flowRate: ''
            }
          }
        }
      }
    },
    fluidBalance: {
      pageDataKey: 'fluidBalance',
      pageTitle: 'Fluid balance',
      pIndex: '12',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Header',
          fqn: 'fluidBalance.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          fqn: 'fluidBalance.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          fqn: 'fluidBalance.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          fqn: 'fluidBalance.time'
        },
        {
          elementKey: 'fluidIn',
          formIndex: '1',
          inputType: 'text',
          label: 'Fluid In',
          tableColumn: '2',
          tableLabel: 'Fluid In',
          fqn: 'fluidBalance.fluidIn'
        },
        {
          elementKey: 'fluidOut',
          formIndex: '1',
          inputType: 'text',
          label: 'Fluid Out',
          tableColumn: '3',
          tableLabel: 'Fluid Out',
          fqn: 'fluidBalance.fluidOut'
        }
      ],
      generated: '2019-08-29T20:15:01-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a fluid in/out record',
          ehr_list: [
            {
              label: 'Header',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Fluid In',
              ehr_list_index: '2',
              items: [
                'fluidIn'
              ]
            },
            {
              label: 'Fluid Out',
              ehr_list_index: '3',
              items: [
                'fluidOut'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a fluid in/out record',
            formKey: 'table',
            ehr_groups: [
              {
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'name',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                formCss: 'record-header',
                gIndex: '2',
                gChildren: [
                  'fluidIn',
                  'fluidOut'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              fluidIn: '',
              fluidOut: ''
            }
          }
        }
      }
    },
    neurological: {
      pageDataKey: 'neurological',
      pageTitle: 'Neurological assessment',
      pIndex: '14',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Header',
          fqn: 'neurological.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          fqn: 'neurological.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          fqn: 'neurological.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          fqn: 'neurological.time'
        },
        {
          elementKey: 'alert',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Alert',
          tableColumn: '2',
          tableLabel: 'Alert',
          fqn: 'neurological.alert'
        },
        {
          elementKey: 'oriented',
          dataCaseStudy: true,
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Oriented',
          tableColumn: '3',
          tableLabel: 'Oriented',
          fqn: 'neurological.oriented'
        },
        {
          elementKey: 'confused',
          dataCaseStudy: true,
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Confused',
          tableColumn: '4',
          tableLabel: 'Confused',
          fqn: 'neurological.confused'
        },
        {
          elementKey: 'drowsy',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Drowsy',
          tableColumn: '5',
          tableLabel: 'Drowsy',
          fqn: 'neurological.drowsy'
        },
        {
          elementKey: 'unresponsive',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Unresponsive',
          passToFunction: 'dizziness',
          tableColumn: '6',
          tableLabel: 'Unresponsive',
          fqn: 'neurological.unresponsive'
        },
        {
          elementKey: 'dizziness',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Dizziness',
          tableColumn: '7',
          tableLabel: 'Dizziness',
          fqn: 'neurological.dizziness'
        },
        {
          elementKey: 'blurredVision',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Blurred vision',
          tableColumn: '8',
          tableLabel: 'Blurred vision',
          fqn: 'neurological.blurredVision'
        },
        {
          elementKey: 'eyeOpening',
          dataCaseStudy: 'Spontaneous',
          formIndex: '1',
          inputType: 'select',
          label: 'Eye opening',
          options: [
            {
              text: '0 = Non testable'
            },
            {
              text: '1 = None'
            },
            {
              text: '2 = To pressure'
            },
            {
              text: '3 = To sound'
            },
            {
              text: '4 = Spontaneous'
            }
          ],
          tableColumn: '9',
          tableLabel: 'Eye opening',
          fqn: 'neurological.eyeOpening'
        },
        {
          elementKey: 'verbalResponse',
          dataCaseStudy: 'Oriented',
          formIndex: '1',
          inputType: 'select',
          label: 'Verbal response',
          options: [
            {
              text: '0 = Non testable'
            },
            {
              text: '1 = None'
            },
            {
              text: '2 = Sounds'
            },
            {
              text: '3 = Words'
            },
            {
              text: '4 = Confused'
            },
            {
              text: '5 = Oriented'
            }
          ],
          tableColumn: '10',
          tableLabel: 'Verbal response',
          fqn: 'neurological.verbalResponse'
        },
        {
          elementKey: 'bestMotorResponse',
          dataCaseStudy: 'Obeys commands',
          formIndex: '1',
          inputType: 'select',
          label: 'Best motor response',
          options: [
            {
              text: '0 = Non testable'
            },
            {
              text: '1 = None'
            },
            {
              text: '2 = Extension'
            },
            {
              text: '3 = Normal flexion'
            },
            {
              text: '4 = Abnormal flexion'
            },
            {
              text: '5 = Localising'
            },
            {
              text: '6 = Obeys commands'
            }
          ],
          tableColumn: '11',
          tableLabel: 'Best motor response',
          fqn: 'neurological.bestMotorResponse'
        },
        {
          elementKey: 'glasgowCalculation',
          dataCaseStudy: '(15 - calculated by system)',
          defaultValue: '0',
          formIndex: '1',
          inputType: 'calculatedValue',
          label: 'Glasgow Coma Scale',
          options: [
            {
              text: '=14+14+14'
            }
          ],
          tableColumn: '12',
          tableLabel: 'Glasgow Coma Scale',
          fqn: 'neurological.glasgowCalculation'
        },
        {
          elementKey: 'loss',
          dataCaseStudy: 'No',
          formIndex: '1',
          inputType: 'select',
          label: 'Loss of conciousness',
          options: [
            {
              text: 'No'
            },
            {
              text: 'Yes'
            },
            {
              text: 'Unknown'
            }
          ],
          tableColumn: '13',
          tableLabel: 'Loss of conciousness',
          fqn: 'neurological.loss'
        },
        {
          elementKey: 'duration',
          dataCaseStudy: 'No',
          formIndex: '1',
          inputType: 'text',
          label: 'Duration',
          tableColumn: '14',
          tableLabel: 'Duration',
          fqn: 'neurological.duration'
        },
        {
          elementKey: 'leftPupilSize',
          dataCaseStudy: '2',
          formIndex: '1',
          inputType: 'select',
          label: 'Left pupil size',
          options: [
            {
              text: '1'
            },
            {
              text: '2'
            },
            {
              text: '3'
            },
            {
              text: '4'
            },
            {
              text: '5'
            },
            {
              text: '6'
            },
            {
              text: '7'
            },
            {
              text: '8'
            }
          ],
          tableColumn: '15',
          tableLabel: 'Left pupil size',
          fqn: 'neurological.leftPupilSize'
        },
        {
          elementKey: 'leftPupilResponseToLight',
          dataCaseStudy: 'Brisk',
          formIndex: '1',
          inputType: 'select',
          label: 'Left pupil response to light',
          options: [
            {
              text: 'Brisk'
            },
            {
              text: 'Sluggish'
            },
            {
              text: 'Fixed'
            }
          ],
          tableColumn: '16',
          tableLabel: 'Left pupil response to light',
          fqn: 'neurological.leftPupilResponseToLight'
        },
        {
          elementKey: 'rightPupilSize',
          dataCaseStudy: '2',
          formIndex: '1',
          inputType: 'select',
          label: 'Right pupil size',
          options: [
            {
              text: '1'
            },
            {
              text: '2'
            },
            {
              text: '3'
            },
            {
              text: '4'
            },
            {
              text: '5'
            },
            {
              text: '6'
            },
            {
              text: '7'
            },
            {
              text: '8'
            }
          ],
          tableColumn: '17',
          tableLabel: 'Right pupil size',
          fqn: 'neurological.rightPupilSize'
        },
        {
          elementKey: 'rightPupilResponseToLight',
          dataCaseStudy: 'Brisk',
          formIndex: '1',
          inputType: 'select',
          label: 'Right pupil response to light',
          options: [
            {
              text: 'Brisk'
            },
            {
              text: 'Sluggish'
            },
            {
              text: 'Fixed'
            }
          ],
          tableColumn: '18',
          tableLabel: 'Right pupil response to light',
          fqn: 'neurological.rightPupilResponseToLight'
        },
        {
          elementKey: 'bothPupils',
          dataCaseStudy: 'Equal',
          formIndex: '1',
          inputType: 'select',
          label: 'Both pupils',
          options: [
            {
              text: 'Equal'
            },
            {
              text: 'Unequal'
            }
          ],
          tableColumn: '19',
          tableLabel: 'Both pupils',
          fqn: 'neurological.bothPupils'
        },
        {
          elementKey: 'spacer45',
          dataCaseStudy: 'Equal',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'neurological.spacer45'
        },
        {
          elementKey: 'comments',
          dataCaseStudy: '(no comments)',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comments',
          tableColumn: '20',
          tableLabel: 'Comments',
          fqn: 'neurological.comments'
        },
        {
          elementKey: 'resources',
          dataCaseStudy: '(no comments)',
          formIndex: '1',
          inputType: 'form_label',
          label: '<b>Resources</b><p><a target=\'_blank\' href=\'/assets/standardized-assessment-tools/Morse-Fall-Scale-score.png\'>Morse Fall Score </a></br><a target=\'_blank\' href=\'/assets/standardized-assessment-tools/mini-mental-health-screen.pdf\'>Mini-mental state examination (MMSE)</a></p>',
          fqn: 'neurological.resources'
        },
        {
          elementKey: 'levelOfConciousness',
          formIndex: '1',
          inputType: 'select',
          label: 'Level of conciousness',
          options: [
            {
              text: '0 = Alert; keenly responsive'
            },
            {
              text: '1 = Not alert; but arousable by minor stimulation'
            },
            {
              text: '2 = Not alert; requires repeated stimulation'
            },
            {
              text: '3 = Unresponsive or responds only with reflex'
            }
          ],
          tableColumn: '21',
          tableLabel: 'Level of conciousness',
          fqn: 'neurological.levelOfConciousness'
        },
        {
          elementKey: 'levelOfConciousnessQuestions',
          formIndex: '1',
          inputType: 'select',
          label: 'Level of conciousness questions',
          options: [
            {
              text: '0 = Answers two questions correctly'
            },
            {
              text: '1 = Answers one question correctly'
            },
            {
              text: '2 = Answers neither question correctly'
            }
          ],
          tableColumn: '22',
          tableLabel: 'Level of conciousness questions',
          fqn: 'neurological.levelOfConciousnessQuestions'
        },
        {
          elementKey: 'levelOfConciousnessCommands',
          formIndex: '1',
          inputType: 'select',
          label: 'Level of conciousness commands',
          options: [
            {
              text: '0 = Performs both tasks correctly'
            },
            {
              text: '1 = Performs one task correctly'
            },
            {
              text: '2 = Performs neither task correctly'
            }
          ],
          tableColumn: '23',
          tableLabel: 'Level of conciousness commands',
          fqn: 'neurological.levelOfConciousnessCommands'
        },
        {
          elementKey: 'motorLeftArm',
          formIndex: '1',
          inputType: 'select',
          label: 'Motor - left arm',
          options: [
            {
              text: '0 = No drift'
            },
            {
              text: '1 = Drift'
            },
            {
              text: '2 = Some effort against gravity'
            },
            {
              text: '3 = No effort against gravity; limb falls'
            },
            {
              text: '4 = No movement'
            }
          ],
          tableColumn: '24',
          tableLabel: 'Motor - left arm',
          fqn: 'neurological.motorLeftArm'
        },
        {
          elementKey: 'motorRightArm',
          formIndex: '1',
          inputType: 'select',
          label: 'Motor - right arm',
          options: [
            {
              text: '0 = No drift'
            },
            {
              text: '1 = Drift'
            },
            {
              text: '2 = Some effort against gravity'
            },
            {
              text: '3 = No effort against gravity; limb falls'
            },
            {
              text: '4 = No movement'
            }
          ],
          tableColumn: '25',
          tableLabel: 'Motor - right arm',
          fqn: 'neurological.motorRightArm'
        },
        {
          elementKey: 'spacer49',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'neurological.spacer49'
        },
        {
          elementKey: 'motorLeftLeg',
          formIndex: '1',
          inputType: 'select',
          label: 'Motor - left leg',
          options: [
            {
              text: '0 = No drift'
            },
            {
              text: '1 = Drift'
            },
            {
              text: '2 = Some effort against gravity'
            },
            {
              text: '3 = No effort against gravity'
            },
            {
              text: '4 = No movement'
            }
          ],
          tableColumn: '26',
          tableLabel: 'Motor - left leg',
          fqn: 'neurological.motorLeftLeg'
        },
        {
          elementKey: 'motorRightLeg',
          formIndex: '1',
          inputType: 'select',
          label: 'Motor - right leg',
          options: [
            {
              text: '0 = No drift'
            },
            {
              text: '1 = Drift'
            },
            {
              text: '2 = Some effort against gravity'
            },
            {
              text: '3 = No effort against gravity'
            },
            {
              text: '4 = No movement'
            }
          ],
          tableColumn: '27',
          tableLabel: 'Motor - right leg',
          fqn: 'neurological.motorRightLeg'
        },
        {
          elementKey: 'limbAtaxia',
          formIndex: '1',
          inputType: 'select',
          label: 'Limb ataxia',
          options: [
            {
              text: '0 = Absent'
            },
            {
              text: '1 = Present in one limb'
            },
            {
              text: '2 = Present in two limbs'
            }
          ],
          tableColumn: '28',
          tableLabel: 'Limb ataxia',
          fqn: 'neurological.limbAtaxia'
        },
        {
          elementKey: 'bestGaze',
          formIndex: '1',
          inputType: 'select',
          label: 'Best gaze',
          options: [
            {
              text: '0 = Normal'
            },
            {
              text: '1 = Partial gaze palsy'
            },
            {
              text: '2 = Forced deviation'
            }
          ],
          tableColumn: '29',
          tableLabel: 'Best gaze',
          fqn: 'neurological.bestGaze'
        },
        {
          elementKey: 'visual',
          formIndex: '1',
          inputType: 'select',
          label: 'Visual',
          options: [
            {
              text: '0 = No visual loss'
            },
            {
              text: '1 = Partial hemianopia'
            },
            {
              text: '2 = Partial paralysis'
            },
            {
              text: '3 = Complete paralysis of one or both sides'
            }
          ],
          tableColumn: '30',
          tableLabel: 'Visual',
          fqn: 'neurological.visual'
        },
        {
          elementKey: 'facialPalsy',
          formIndex: '1',
          inputType: 'select',
          label: 'Facial palsy',
          options: [
            {
              text: '0 = Normal symmetric movements'
            },
            {
              text: '1 = Minor paralysis'
            },
            {
              text: '2 = Partial paralysis'
            },
            {
              text: '3 = Complete paralysis of one or both sides'
            }
          ],
          tableColumn: '31',
          tableLabel: 'Facial palsy',
          fqn: 'neurological.facialPalsy'
        },
        {
          elementKey: 'sensory',
          formIndex: '1',
          inputType: 'select',
          label: 'Sensory',
          options: [
            {
              text: '0 = Normal; no sensory loss'
            },
            {
              text: '1 = Mild-to-moderate sensory loss'
            },
            {
              text: '2 = Severe to total sensory loss'
            }
          ],
          tableColumn: '32',
          tableLabel: 'Sensory',
          fqn: 'neurological.sensory'
        },
        {
          elementKey: 'bestLanguage',
          formIndex: '1',
          inputType: 'select',
          label: 'Best language',
          options: [
            {
              text: '0 = No aphasia; normal'
            },
            {
              text: '1 = Mild to moderate aphasia'
            },
            {
              text: '2 = Severe aphasia'
            },
            {
              text: '3 = Mute, global aphasia'
            }
          ],
          tableColumn: '33',
          tableLabel: 'Best language',
          fqn: 'neurological.bestLanguage'
        },
        {
          elementKey: 'dysarthria',
          formIndex: '1',
          inputType: 'select',
          label: 'Dysarthria',
          options: [
            {
              text: '0 = Normal'
            },
            {
              text: '1 = Mild to moderate'
            },
            {
              text: '2 = Severe dysarthria'
            }
          ],
          tableColumn: '34',
          tableLabel: 'Dysarthria',
          fqn: 'neurological.dysarthria'
        },
        {
          elementKey: 'extinctionAndInattention',
          formIndex: '1',
          inputType: 'select',
          label: 'Extinction and inattention',
          options: [
            {
              text: '0 = No abnormality'
            },
            {
              text: '1 = Visual, tactile, auditory, spatial, or personal inattention'
            },
            {
              text: '2 = Profound hemi-inattention or extinction'
            }
          ],
          tableColumn: '35',
          tableLabel: 'Extinction and inattention',
          fqn: 'neurological.extinctionAndInattention'
        },
        {
          elementKey: 'strokeAssessmentCalculation',
          defaultValue: '0',
          formIndex: '1',
          inputType: 'calculatedValue',
          label: '<b>Stroke assessment calculation</b>',
          tableColumn: '36',
          tableLabel: 'Stroke Assessment',
          fqn: 'neurological.strokeAssessmentCalculation'
        }
      ],
      generated: '2019-08-29T20:15:01-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          label: 'Neurological',
          addButtonText: 'Add a neurological assessment',
          ehr_list: [
            {
              label: 'Header',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Alert',
              ehr_list_index: '2',
              items: [
                'alert'
              ]
            },
            {
              label: 'Oriented',
              ehr_list_index: '3',
              items: [
                'oriented'
              ]
            },
            {
              label: 'Confused',
              ehr_list_index: '4',
              items: [
                'confused'
              ]
            },
            {
              label: 'Drowsy',
              ehr_list_index: '5',
              items: [
                'drowsy'
              ]
            },
            {
              label: 'Unresponsive',
              ehr_list_index: '6',
              items: [
                'unresponsive'
              ]
            },
            {
              label: 'Dizziness',
              ehr_list_index: '7',
              items: [
                'dizziness'
              ]
            },
            {
              label: 'Blurred vision',
              ehr_list_index: '8',
              items: [
                'blurredVision'
              ]
            },
            {
              label: 'Eye opening',
              ehr_list_index: '9',
              items: [
                'eyeOpening'
              ]
            },
            {
              label: 'Verbal response',
              ehr_list_index: '10',
              items: [
                'verbalResponse'
              ]
            },
            {
              label: 'Best motor response',
              ehr_list_index: '11',
              items: [
                'bestMotorResponse'
              ]
            },
            {
              label: 'Glasgow Coma Scale',
              ehr_list_index: '12',
              items: [
                'glasgowCalculation'
              ]
            },
            {
              label: 'Loss of conciousness',
              ehr_list_index: '13',
              items: [
                'loss'
              ]
            },
            {
              label: 'Duration',
              ehr_list_index: '14',
              items: [
                'duration'
              ]
            },
            {
              label: 'Left pupil size',
              ehr_list_index: '15',
              items: [
                'leftPupilSize'
              ]
            },
            {
              label: 'Left pupil response to light',
              ehr_list_index: '16',
              items: [
                'leftPupilResponseToLight'
              ]
            },
            {
              label: 'Right pupil size',
              ehr_list_index: '17',
              items: [
                'rightPupilSize'
              ]
            },
            {
              label: 'Right pupil response to light',
              ehr_list_index: '18',
              items: [
                'rightPupilResponseToLight'
              ]
            },
            {
              label: 'Both pupils',
              ehr_list_index: '19',
              items: [
                'bothPupils'
              ]
            },
            {
              label: 'Comments',
              ehr_list_index: '20',
              items: [
                'comments'
              ]
            },
            {
              label: 'Level of conciousness',
              ehr_list_index: '21',
              items: [
                'levelOfConciousness'
              ]
            },
            {
              label: 'Level of conciousness questions',
              ehr_list_index: '22',
              items: [
                'levelOfConciousnessQuestions'
              ]
            },
            {
              label: 'Level of conciousness commands',
              ehr_list_index: '23',
              items: [
                'levelOfConciousnessCommands'
              ]
            },
            {
              label: 'Motor - left arm',
              ehr_list_index: '24',
              items: [
                'motorLeftArm'
              ]
            },
            {
              label: 'Motor - right arm',
              ehr_list_index: '25',
              items: [
                'motorRightArm'
              ]
            },
            {
              label: 'Motor - left leg',
              ehr_list_index: '26',
              items: [
                'motorLeftLeg'
              ]
            },
            {
              label: 'Motor - right leg',
              ehr_list_index: '27',
              items: [
                'motorRightLeg'
              ]
            },
            {
              label: 'Limb ataxia',
              ehr_list_index: '28',
              items: [
                'limbAtaxia'
              ]
            },
            {
              label: 'Best gaze',
              ehr_list_index: '29',
              items: [
                'bestGaze'
              ]
            },
            {
              label: 'Visual',
              ehr_list_index: '30',
              items: [
                'visual'
              ]
            },
            {
              label: 'Facial palsy',
              ehr_list_index: '31',
              items: [
                'facialPalsy'
              ]
            },
            {
              label: 'Sensory',
              ehr_list_index: '32',
              items: [
                'sensory'
              ]
            },
            {
              label: 'Best language',
              ehr_list_index: '33',
              items: [
                'bestLanguage'
              ]
            },
            {
              label: 'Dysarthria',
              ehr_list_index: '34',
              items: [
                'dysarthria'
              ]
            },
            {
              label: 'Extinction and inattention',
              ehr_list_index: '35',
              items: [
                'extinctionAndInattention'
              ]
            },
            {
              label: 'Stroke Assessment',
              ehr_list_index: '36',
              items: [
                'strokeAssessmentCalculation'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            label: 'Neurological',
            addButtonText: 'Add a neurological assessment',
            formKey: 'table',
            ehr_groups: [
              {
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'name',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                gIndex: '2',
                gChildren: [
                  {
                    label: 'Status',
                    elementKey: 'subgroup62',
                    sgChildren: [
                      'alert',
                      'oriented',
                      'confused',
                      'drowsy',
                      'unresponsive',
                      'dizziness',
                      'blurredVision'
                    ]
                  },
                  {
                    label: 'Glasgow Coma Scale',
                    elementKey: 'subgroup63',
                    sgChildren: [
                      'eyeOpening',
                      'verbalResponse',
                      'bestMotorResponse',
                      'glasgowCalculation'
                    ]
                  },
                  {
                    label: 'Conciousness',
                    elementKey: 'subgroup64',
                    sgChildren: [
                      'loss',
                      'duration'
                    ]
                  },
                  {
                    label: 'Pupils',
                    elementKey: 'subgroup65',
                    sgChildren: [
                      'leftPupilSize',
                      'leftPupilResponseToLight',
                      'rightPupilSize',
                      'rightPupilResponseToLight',
                      'bothPupils',
                      'spacer45'
                    ]
                  }
                ]
              },
              {
                formCss: 'full-width',
                gIndex: '3',
                gChildren: [
                  'comments',
                  'resources'
                ]
              },
              {
                label: 'Stroke Assessment',
                gIndex: '4',
                gChildren: [
                  {
                    elementKey: 'subgroup66',
                    sgChildren: [
                      'levelOfConciousness',
                      'levelOfConciousnessQuestions',
                      'levelOfConciousnessCommands',
                      'motorLeftArm',
                      'motorRightArm',
                      'spacer49',
                      'motorLeftLeg',
                      'motorRightLeg',
                      'limbAtaxia',
                      'bestGaze',
                      'visual',
                      'facialPalsy',
                      'sensory',
                      'bestLanguage',
                      'dysarthria',
                      'extinctionAndInattention',
                      'strokeAssessmentCalculation'
                    ]
                  }
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              alert: '',
              oriented: '',
              confused: '',
              drowsy: '',
              unresponsive: '',
              dizziness: '',
              blurredVision: '',
              eyeOpening: '',
              verbalResponse: '',
              bestMotorResponse: '',
              glasgowCalculation: '0',
              loss: '',
              duration: '',
              leftPupilSize: '',
              leftPupilResponseToLight: '',
              rightPupilSize: '',
              rightPupilResponseToLight: '',
              bothPupils: '',
              comments: '',
              levelOfConciousness: '',
              levelOfConciousnessQuestions: '',
              levelOfConciousnessCommands: '',
              motorLeftArm: '',
              motorRightArm: '',
              motorLeftLeg: '',
              motorRightLeg: '',
              limbAtaxia: '',
              bestGaze: '',
              visual: '',
              facialPalsy: '',
              sensory: '',
              bestLanguage: '',
              dysarthria: '',
              extinctionAndInattention: '',
              strokeAssessmentCalculation: '0'
            }
          }
        }
      }
    },
    respiratory: {
      pageDataKey: 'respiratory',
      pageTitle: 'Respiratory assessment',
      pIndex: '15',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Header',
          fqn: 'respiratory.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          fqn: 'respiratory.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          fqn: 'respiratory.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          fqn: 'respiratory.time'
        },
        {
          elementKey: 'patent',
          dataCaseStudy: true,
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Patent',
          tableColumn: '2',
          tableLabel: 'Patent',
          fqn: 'respiratory.patent'
        },
        {
          elementKey: 'obstructed',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Obstructed',
          tableColumn: '3',
          tableLabel: 'Obstructed',
          fqn: 'respiratory.obstructed'
        },
        {
          elementKey: 'oett',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Oral endotracheal tube',
          tableColumn: '4',
          tableLabel: 'Oral endotracheal tube',
          fqn: 'respiratory.oett'
        },
        {
          elementKey: 'otherValue',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Other',
          tableColumn: '5',
          tableLabel: 'Other',
          fqn: 'respiratory.otherValue'
        },
        {
          elementKey: 'oxygenTherapy',
          formIndex: '1',
          inputType: 'text',
          label: 'Oxygen therapy',
          tableColumn: '6',
          tableLabel: 'Oxygen therapy',
          fqn: 'respiratory.oxygenTherapy'
        },
        {
          elementKey: 'flowRate',
          formIndex: '1',
          inputType: 'text',
          label: 'Flow rate',
          suffix: '/lpm',
          tableColumn: '7',
          tableLabel: 'Flow rate',
          fqn: 'respiratory.flowRate'
        },
        {
          elementKey: 'lul',
          dataCaseStudy: 'Normal',
          formIndex: '1',
          inputType: 'select',
          label: 'Left upper lung',
          options: [
            {
              text: 'Normal'
            },
            {
              text: 'Wheeze'
            },
            {
              text: 'Crackles'
            },
            {
              text: 'Absent'
            },
            {
              text: 'Deceased'
            }
          ],
          tableColumn: '8',
          tableLabel: 'Left upper lung',
          fqn: 'respiratory.lul'
        },
        {
          elementKey: 'rul',
          dataCaseStudy: 'Normal',
          formIndex: '1',
          inputType: 'select',
          label: 'Right upper lung',
          options: [
            {
              text: 'Normal'
            },
            {
              text: 'Wheeze'
            },
            {
              text: 'Crackles'
            },
            {
              text: 'Absent'
            },
            {
              text: 'Deceased'
            }
          ],
          tableColumn: '9',
          tableLabel: 'Right upper lung',
          fqn: 'respiratory.rul'
        },
        {
          elementKey: 'aSpacer',
          dataCaseStudy: 'Normal',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'respiratory.aSpacer'
        },
        {
          elementKey: 'rml',
          dataCaseStudy: 'Decreased',
          formIndex: '1',
          inputType: 'select',
          label: 'Right middle lung',
          options: [
            {
              text: 'Normal'
            },
            {
              text: 'Wheeze'
            },
            {
              text: 'Crackles'
            },
            {
              text: 'Absent'
            },
            {
              text: 'Deceased'
            }
          ],
          tableColumn: '10',
          tableLabel: 'Right middle lung',
          fqn: 'respiratory.rml'
        },
        {
          elementKey: 'lll',
          dataCaseStudy: 'Decreased',
          formIndex: '1',
          inputType: 'select',
          label: 'Left lower lung',
          options: [
            {
              text: 'Normal'
            },
            {
              text: 'Wheeze'
            },
            {
              text: 'Crackles'
            },
            {
              text: 'Absent'
            },
            {
              text: 'Deceased'
            }
          ],
          tableColumn: '11',
          tableLabel: 'Left lower lung',
          fqn: 'respiratory.lll'
        },
        {
          elementKey: 'rll',
          dataCaseStudy: 'Decreased',
          formIndex: '1',
          inputType: 'select',
          label: 'Right lower lung',
          options: [
            {
              text: 'Normal'
            },
            {
              text: 'Wheeze'
            },
            {
              text: 'Crackles'
            },
            {
              text: 'Absent'
            },
            {
              text: 'Deceased'
            }
          ],
          tableColumn: '12',
          tableLabel: 'Right lower lung',
          fqn: 'respiratory.rll'
        },
        {
          elementKey: 'respiratoryRhythm',
          dataCaseStudy: 'Regular',
          formIndex: '1',
          inputType: 'select',
          label: 'Respiratory rhythm',
          options: [
            {
              text: 'Regular'
            },
            {
              text: 'Irregular'
            },
            {
              text: 'Paradoxical'
            }
          ],
          tableColumn: '13',
          tableLabel: 'Respiratory rhythm',
          fqn: 'respiratory.respiratoryRhythm'
        },
        {
          elementKey: 'respiratoryDepth',
          dataCaseStudy: 'Shallow',
          formIndex: '1',
          inputType: 'select',
          label: 'Respiratory depth',
          options: [
            {
              text: 'Normal'
            },
            {
              text: 'Shallow'
            },
            {
              text: 'Deep'
            }
          ],
          tableColumn: '14',
          tableLabel: 'Respiratory depth',
          fqn: 'respiratory.respiratoryDepth'
        },
        {
          elementKey: 'cough',
          dataCaseStudy: 'No',
          formIndex: '1',
          inputType: 'select',
          label: 'Cough',
          options: [
            {
              text: 'No'
            },
            {
              text: 'Nonproductive'
            },
            {
              text: 'Productive'
            }
          ],
          tableColumn: '15',
          tableLabel: 'Cough',
          fqn: 'respiratory.cough'
        },
        {
          elementKey: 'sputumColour',
          dataCaseStudy: '(nothing selected)',
          formIndex: '1',
          inputType: 'select',
          label: 'Sputum colour',
          options: [
            {
              text: 'Mucoid'
            },
            {
              text: 'Purulent'
            },
            {
              text: 'Yellow-green'
            },
            {
              text: 'Rust-coloured'
            },
            {
              text: 'Pink, blood tinged'
            },
            {
              text: 'Pink, frothy'
            },
            {
              text: 'Profuse, colourless'
            },
            {
              text: 'Bloody'
            }
          ],
          tableColumn: '16',
          tableLabel: 'Sputum colour',
          fqn: 'respiratory.sputumColour'
        },
        {
          elementKey: 'aSpacer',
          dataCaseStudy: 'Normal',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'respiratory.aSpacer'
        },
        {
          elementKey: 'sputumComments',
          dataCaseStudy: '(no notes)',
          formIndex: '1',
          inputType: 'text',
          label: 'Sputum comments',
          tableColumn: '17',
          tableLabel: 'Sputum comments',
          fqn: 'respiratory.sputumComments'
        },
        {
          elementKey: 'generalComments',
          dataCaseStudy: '(no notes)',
          formIndex: '1',
          inputType: 'textarea',
          label: 'General comments',
          tableColumn: '18',
          tableLabel: 'General comments',
          fqn: 'respiratory.generalComments'
        }
      ],
      generated: '2019-08-29T20:15:01-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a respiratory assessment',
          ehr_list: [
            {
              label: 'Header',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Patent',
              ehr_list_index: '2',
              items: [
                'patent'
              ]
            },
            {
              label: 'Obstructed',
              ehr_list_index: '3',
              items: [
                'obstructed'
              ]
            },
            {
              label: 'Oral endotracheal tube',
              ehr_list_index: '4',
              items: [
                'oett'
              ]
            },
            {
              label: 'Other',
              ehr_list_index: '5',
              items: [
                'otherValue'
              ]
            },
            {
              label: 'Oxygen therapy',
              ehr_list_index: '6',
              items: [
                'oxygenTherapy'
              ]
            },
            {
              label: 'Flow rate',
              ehr_list_index: '7',
              items: [
                'flowRate'
              ]
            },
            {
              label: 'Left upper lung',
              ehr_list_index: '8',
              items: [
                'lul'
              ]
            },
            {
              label: 'Right upper lung',
              ehr_list_index: '9',
              items: [
                'rul'
              ]
            },
            {
              label: 'Right middle lung',
              ehr_list_index: '10',
              items: [
                'rml'
              ]
            },
            {
              label: 'Left lower lung',
              ehr_list_index: '11',
              items: [
                'lll'
              ]
            },
            {
              label: 'Right lower lung',
              ehr_list_index: '12',
              items: [
                'rll'
              ]
            },
            {
              label: 'Respiratory rhythm',
              ehr_list_index: '13',
              items: [
                'respiratoryRhythm'
              ]
            },
            {
              label: 'Respiratory depth',
              ehr_list_index: '14',
              items: [
                'respiratoryDepth'
              ]
            },
            {
              label: 'Cough',
              ehr_list_index: '15',
              items: [
                'cough'
              ]
            },
            {
              label: 'Sputum colour',
              ehr_list_index: '16',
              items: [
                'sputumColour'
              ]
            },
            {
              label: 'Sputum comments',
              ehr_list_index: '17',
              items: [
                'sputumComments'
              ]
            },
            {
              label: 'General comments',
              ehr_list_index: '18',
              items: [
                'generalComments'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a respiratory assessment',
            formKey: 'table',
            ehr_groups: [
              {
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'name',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                gIndex: '2',
                gChildren: [
                  {
                    label: 'Airway',
                    elementKey: 'subgroup67',
                    sgChildren: [
                      'patent',
                      'obstructed',
                      'oett',
                      'otherValue',
                      'oxygenTherapy',
                      'flowRate'
                    ]
                  },
                  {
                    label: 'Breath sounds',
                    elementKey: 'subgroup68',
                    sgChildren: [
                      'lul',
                      'rul',
                      'aSpacer',
                      'rml',
                      'lll',
                      'rll',
                      'respiratoryRhythm',
                      'respiratoryDepth'
                    ]
                  },
                  {
                    label: 'Sputum',
                    elementKey: 'subgroup69',
                    sgChildren: [
                      'cough',
                      'sputumColour',
                      'aSpacer',
                      'sputumComments',
                      'generalComments'
                    ]
                  }
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              patent: '',
              obstructed: '',
              oett: '',
              otherValue: '',
              oxygenTherapy: '',
              flowRate: '',
              lul: '',
              rul: '',
              rml: '',
              lll: '',
              rll: '',
              respiratoryRhythm: '',
              respiratoryDepth: '',
              cough: '',
              sputumColour: '',
              sputumComments: '',
              generalComments: ''
            }
          }
        }
      }
    },
    cardiovascular: {
      pageDataKey: 'cardiovascular',
      pageTitle: 'Cardiovascular',
      pIndex: '16',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Header',
          fqn: 'cardiovascular.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          fqn: 'cardiovascular.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          fqn: 'cardiovascular.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          fqn: 'cardiovascular.time'
        },
        {
          elementKey: 'pulse',
          dataCaseStudy: 'Regular',
          formIndex: '1',
          inputType: 'select',
          label: 'Pulse',
          options: [
            {
              text: 'Regular'
            },
            {
              text: 'Irregular'
            },
            {
              text: 'Normal'
            },
            {
              text: 'Weak'
            },
            {
              text: 'Bounding'
            }
          ],
          tableColumn: '2',
          tableLabel: 'Pulse',
          fqn: 'cardiovascular.pulse'
        },
        {
          elementKey: 'skinAppearance',
          dataCaseStudy: 'Normal',
          formIndex: '1',
          inputType: 'select',
          label: 'Skin appearance',
          options: [
            {
              text: 'Normal'
            },
            {
              text: 'Pale'
            },
            {
              text: 'Mottled'
            },
            {
              text: 'Cyanotic'
            },
            {
              text: 'Flushed'
            },
            {
              text: 'Jaundiced'
            }
          ],
          tableColumn: '3',
          tableLabel: 'Skin appearance',
          fqn: 'cardiovascular.skinAppearance'
        },
        {
          elementKey: 'labelCapRefill',
          dataCaseStudy: 'Normal',
          formIndex: '1',
          helperText: 'Normal < 3 seconds\nDelayed > 3 seconds',
          inputType: 'form_label',
          label: 'Cap refill',
          tableColumn: '4',
          tableLabel: 'Cap refill',
          fqn: 'cardiovascular.labelCapRefill',
          helperHtml: '<p>Normal < 3 seconds</p>\n<p>Delayed > 3 seconds</p>'
        },
        {
          elementKey: 'labelTemperature',
          dataCaseStudy: 'Normal',
          formIndex: '1',
          inputType: 'form_label',
          label: 'Temperature',
          tableColumn: '5',
          tableLabel: 'Temperature',
          fqn: 'cardiovascular.labelTemperature'
        },
        {
          elementKey: 'labelPeripheral',
          dataCaseStudy: 'Normal',
          formIndex: '1',
          inputType: 'form_label',
          label: 'Peripheral edema',
          tableColumn: '6',
          tableLabel: 'Peripheral edema',
          fqn: 'cardiovascular.labelPeripheral'
        },
        {
          elementKey: 'labelNailBed',
          dataCaseStudy: 'Normal',
          formIndex: '1',
          inputType: 'form_label',
          label: 'Nail bed colour',
          tableColumn: '7',
          tableLabel: 'Nail bed colour',
          fqn: 'cardiovascular.labelNailBed'
        },
        {
          elementKey: 'labelRight',
          dataCaseStudy: 'Normal',
          formIndex: '1',
          inputType: 'form_label',
          label: 'Right hand',
          tableColumn: '8',
          tableLabel: 'Right hand',
          fqn: 'cardiovascular.labelRight'
        },
        {
          elementKey: 'labelLeftHand',
          dataCaseStudy: 'Normal',
          formIndex: '1',
          inputType: 'form_label',
          label: 'Left hand',
          tableColumn: '9',
          tableLabel: 'Left hand',
          fqn: 'cardiovascular.labelLeftHand'
        },
        {
          elementKey: 'labelRightFoot',
          dataCaseStudy: 'Normal',
          formIndex: '1',
          inputType: 'form_label',
          label: 'Right foot',
          tableColumn: '10',
          tableLabel: 'Right foot',
          fqn: 'cardiovascular.labelRightFoot'
        },
        {
          elementKey: 'labelLeftFoot',
          dataCaseStudy: 'Normal',
          formIndex: '1',
          inputType: 'form_label',
          label: 'Left foot',
          tableColumn: '11',
          tableLabel: 'Left foot',
          fqn: 'cardiovascular.labelLeftFoot'
        },
        {
          elementKey: 'capRefillRightHand',
          dataCaseStudy: 'Normal',
          formIndex: '1',
          inputType: 'select',
          label: 'Cap refill: Left hand',
          options: [
            {
              text: 'Normal < 3 seconds'
            },
            {
              text: 'Delayed > 3 seconds'
            }
          ],
          tableColumn: '12',
          tableLabel: 'Cap refill: Left hand',
          fqn: 'cardiovascular.capRefillRightHand'
        },
        {
          elementKey: 'capRefillLeftHand',
          dataCaseStudy: 'Normal',
          formIndex: '1',
          inputType: 'select',
          label: 'Cap refill: Right hand',
          options: [
            {
              text: 'Normal < 3 seconds'
            },
            {
              text: 'Delayed > 3 seconds'
            }
          ],
          tableColumn: '13',
          tableLabel: 'Cap refill: Right hand',
          fqn: 'cardiovascular.capRefillLeftHand'
        },
        {
          elementKey: 'capRefillRightFoot',
          dataCaseStudy: 'Normal',
          formIndex: '1',
          inputType: 'select',
          label: 'Cap refill: Right foot',
          options: [
            {
              text: 'Normal < 3 seconds'
            },
            {
              text: 'Delayed > 3 seconds'
            }
          ],
          tableColumn: '14',
          tableLabel: 'Cap refill: Right foot',
          fqn: 'cardiovascular.capRefillRightFoot'
        },
        {
          elementKey: 'capRefillLeftFoot',
          dataCaseStudy: 'Normal',
          formIndex: '1',
          inputType: 'select',
          label: 'Cap refill: Left foot',
          options: [
            {
              text: 'Normal < 3 seconds'
            },
            {
              text: 'Delayed > 3 seconds'
            }
          ],
          tableColumn: '15',
          tableLabel: 'Cap refill: Left foot',
          fqn: 'cardiovascular.capRefillLeftFoot'
        },
        {
          elementKey: 'temperatureRightHand',
          dataCaseStudy: 'Warm',
          formIndex: '1',
          inputType: 'select',
          label: 'Temperature: Right hand',
          options: [
            {
              text: 'Warm'
            },
            {
              text: 'Cool'
            },
            {
              text: 'Hot'
            }
          ],
          tableColumn: '16',
          tableLabel: 'Temperature: Right hand',
          fqn: 'cardiovascular.temperatureRightHand'
        },
        {
          elementKey: 'temperatureLeftHand',
          dataCaseStudy: 'Warm',
          formIndex: '1',
          inputType: 'select',
          label: 'Temperature: Left hand',
          options: [
            {
              text: 'Warm'
            },
            {
              text: 'Cool'
            },
            {
              text: 'Hot'
            }
          ],
          tableColumn: '17',
          tableLabel: 'Temperature: Left hand',
          fqn: 'cardiovascular.temperatureLeftHand'
        },
        {
          elementKey: 'temperatureRightFoot',
          dataCaseStudy: 'Warm',
          formIndex: '1',
          inputType: 'select',
          label: 'Temperature: Right foot',
          options: [
            {
              text: 'Warm'
            },
            {
              text: 'Cool'
            },
            {
              text: 'Hot'
            }
          ],
          tableColumn: '18',
          tableLabel: 'Temperature: Right foot',
          fqn: 'cardiovascular.temperatureRightFoot'
        },
        {
          elementKey: 'temperatureLeftFoot',
          dataCaseStudy: 'Warm',
          formIndex: '1',
          inputType: 'select',
          label: 'Temperature: Left foot',
          options: [
            {
              text: 'Warm'
            },
            {
              text: 'Cool'
            },
            {
              text: 'Hot'
            }
          ],
          tableColumn: '19',
          tableLabel: 'Temperature: Left foot',
          fqn: 'cardiovascular.temperatureLeftFoot'
        },
        {
          elementKey: 'peripheralEdemaRightHand',
          dataCaseStudy: 'No',
          formIndex: '1',
          inputType: 'select',
          label: 'Peripheral edema: Right hand',
          options: [
            {
              text: 'No'
            },
            {
              text: 'Ankle'
            },
            {
              text: 'Pedal'
            },
            {
              text: 'Sacral'
            },
            {
              text: 'Pitting'
            }
          ],
          tableColumn: '20',
          tableLabel: 'Peripheral edema: Right hand',
          fqn: 'cardiovascular.peripheralEdemaRightHand'
        },
        {
          elementKey: 'peripheralEdemaLeftHand',
          dataCaseStudy: 'No',
          formIndex: '1',
          inputType: 'select',
          label: 'Peripheral edema: Left hand',
          options: [
            {
              text: 'No'
            },
            {
              text: 'Ankle'
            },
            {
              text: 'Pedal'
            },
            {
              text: 'Sacral'
            },
            {
              text: 'Pitting'
            }
          ],
          tableColumn: '21',
          tableLabel: 'Peripheral edema: Left hand',
          fqn: 'cardiovascular.peripheralEdemaLeftHand'
        },
        {
          elementKey: 'peripheralEdemaRightFoot',
          dataCaseStudy: 'No',
          formIndex: '1',
          inputType: 'select',
          label: 'Peripheral edema: Right foot',
          options: [
            {
              text: 'No'
            },
            {
              text: 'Ankle'
            },
            {
              text: 'Pedal'
            },
            {
              text: 'Sacral'
            },
            {
              text: 'Pitting'
            }
          ],
          tableColumn: '22',
          tableLabel: 'Peripheral edema: Right foot',
          fqn: 'cardiovascular.peripheralEdemaRightFoot'
        },
        {
          elementKey: 'peripheralEdemaLeftFoot',
          dataCaseStudy: 'No',
          formIndex: '1',
          inputType: 'select',
          label: 'Peripheral edema: Left foot',
          options: [
            {
              text: 'No'
            },
            {
              text: 'Ankle'
            },
            {
              text: 'Pedal'
            },
            {
              text: 'Sacral'
            },
            {
              text: 'Pitting'
            }
          ],
          tableColumn: '23',
          tableLabel: 'Peripheral edema: Left foot',
          fqn: 'cardiovascular.peripheralEdemaLeftFoot'
        },
        {
          elementKey: 'nailBedColourRightHand',
          dataCaseStudy: 'Pink',
          formIndex: '1',
          inputType: 'select',
          label: 'Nail bed colour: Right hand',
          options: [
            {
              text: 'Pink'
            },
            {
              text: 'Cyanotic'
            }
          ],
          tableColumn: '24',
          tableLabel: 'Nail bed colour: Right hand',
          fqn: 'cardiovascular.nailBedColourRightHand'
        },
        {
          elementKey: 'nailBedColourLeftHand',
          dataCaseStudy: 'Pink',
          formIndex: '1',
          inputType: 'select',
          label: 'Nail bed colour: Left hand',
          options: [
            {
              text: 'Pink'
            },
            {
              text: 'Cyanotic'
            }
          ],
          tableColumn: '25',
          tableLabel: 'Nail bed colour: Left hand',
          fqn: 'cardiovascular.nailBedColourLeftHand'
        },
        {
          elementKey: 'nailBedColourRightFoot',
          dataCaseStudy: 'Pink',
          formIndex: '1',
          inputType: 'select',
          label: 'Nail bed colour: Right Foot',
          options: [
            {
              text: 'Pink'
            },
            {
              text: 'Cyanotic'
            }
          ],
          tableColumn: '26',
          tableLabel: 'Nail bed colour: Right Foot',
          fqn: 'cardiovascular.nailBedColourRightFoot'
        },
        {
          elementKey: 'nailBedColourLeftFoot',
          dataCaseStudy: 'Pink',
          formIndex: '1',
          inputType: 'select',
          label: 'Nail bed colour: Left foot',
          options: [
            {
              text: 'Pink'
            },
            {
              text: 'Cyanotic'
            }
          ],
          tableColumn: '27',
          tableLabel: 'Nail bed colour: Left foot',
          fqn: 'cardiovascular.nailBedColourLeftFoot'
        },
        {
          elementKey: 'comments',
          dataCaseStudy: '(blank)',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comments',
          tableColumn: '28',
          tableLabel: 'Comments',
          fqn: 'cardiovascular.comments'
        }
      ],
      generated: '2019-08-29T20:15:01-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a cardiovascular assessment',
          ehr_list: [
            {
              label: 'Header',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Pulse',
              ehr_list_index: '2',
              items: [
                'pulse'
              ]
            },
            {
              label: 'Skin appearance',
              ehr_list_index: '3',
              items: [
                'skinAppearance'
              ]
            },
            {
              label: 'Cap refill',
              ehr_list_index: '4',
              items: [
                'labelCapRefill'
              ]
            },
            {
              label: 'Temperature',
              ehr_list_index: '5',
              items: [
                'labelTemperature'
              ]
            },
            {
              label: 'Peripheral edema',
              ehr_list_index: '6',
              items: [
                'labelPeripheral'
              ]
            },
            {
              label: 'Nail bed colour',
              ehr_list_index: '7',
              items: [
                'labelNailBed'
              ]
            },
            {
              label: 'Right hand',
              ehr_list_index: '8',
              items: [
                'labelRight'
              ]
            },
            {
              label: 'Left hand',
              ehr_list_index: '9',
              items: [
                'labelLeftHand'
              ]
            },
            {
              label: 'Right foot',
              ehr_list_index: '10',
              items: [
                'labelRightFoot'
              ]
            },
            {
              label: 'Left foot',
              ehr_list_index: '11',
              items: [
                'labelLeftFoot'
              ]
            },
            {
              label: 'Cap refill: Left hand',
              ehr_list_index: '12',
              items: [
                'capRefillRightHand'
              ]
            },
            {
              label: 'Cap refill: Right hand',
              ehr_list_index: '13',
              items: [
                'capRefillLeftHand'
              ]
            },
            {
              label: 'Cap refill: Right foot',
              ehr_list_index: '14',
              items: [
                'capRefillRightFoot'
              ]
            },
            {
              label: 'Cap refill: Left foot',
              ehr_list_index: '15',
              items: [
                'capRefillLeftFoot'
              ]
            },
            {
              label: 'Temperature: Right hand',
              ehr_list_index: '16',
              items: [
                'temperatureRightHand'
              ]
            },
            {
              label: 'Temperature: Left hand',
              ehr_list_index: '17',
              items: [
                'temperatureLeftHand'
              ]
            },
            {
              label: 'Temperature: Right foot',
              ehr_list_index: '18',
              items: [
                'temperatureRightFoot'
              ]
            },
            {
              label: 'Temperature: Left foot',
              ehr_list_index: '19',
              items: [
                'temperatureLeftFoot'
              ]
            },
            {
              label: 'Peripheral edema: Right hand',
              ehr_list_index: '20',
              items: [
                'peripheralEdemaRightHand'
              ]
            },
            {
              label: 'Peripheral edema: Left hand',
              ehr_list_index: '21',
              items: [
                'peripheralEdemaLeftHand'
              ]
            },
            {
              label: 'Peripheral edema: Right foot',
              ehr_list_index: '22',
              items: [
                'peripheralEdemaRightFoot'
              ]
            },
            {
              label: 'Peripheral edema: Left foot',
              ehr_list_index: '23',
              items: [
                'peripheralEdemaLeftFoot'
              ]
            },
            {
              label: 'Nail bed colour: Right hand',
              ehr_list_index: '24',
              items: [
                'nailBedColourRightHand'
              ]
            },
            {
              label: 'Nail bed colour: Left hand',
              ehr_list_index: '25',
              items: [
                'nailBedColourLeftHand'
              ]
            },
            {
              label: 'Nail bed colour: Right Foot',
              ehr_list_index: '26',
              items: [
                'nailBedColourRightFoot'
              ]
            },
            {
              label: 'Nail bed colour: Left foot',
              ehr_list_index: '27',
              items: [
                'nailBedColourLeftFoot'
              ]
            },
            {
              label: 'Comments',
              ehr_list_index: '28',
              items: [
                'comments'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a cardiovascular assessment',
            formKey: 'table',
            ehr_groups: [
              {
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'name',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                gIndex: '2',
                gChildren: [
                  'pulse',
                  'skinAppearance'
                ]
              },
              {
                formCss: 'cardio-assessment',
                gIndex: '3',
                gChildren: [
                  'labelCapRefill',
                  'labelTemperature',
                  'labelPeripheral',
                  'labelNailBed',
                  'labelRight',
                  'labelLeftHand',
                  'labelRightFoot',
                  'labelLeftFoot',
                  'capRefillRightHand',
                  'capRefillLeftHand',
                  'capRefillRightFoot',
                  'capRefillLeftFoot',
                  'temperatureRightHand',
                  'temperatureLeftHand',
                  'temperatureRightFoot',
                  'temperatureLeftFoot',
                  'peripheralEdemaRightHand',
                  'peripheralEdemaLeftHand',
                  'peripheralEdemaRightFoot',
                  'peripheralEdemaLeftFoot',
                  'nailBedColourRightHand',
                  'nailBedColourLeftHand',
                  'nailBedColourRightFoot',
                  'nailBedColourLeftFoot'
                ]
              },
              {
                formCss: 'full-width',
                gIndex: '4',
                gChildren: [
                  'comments'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              pulse: '',
              skinAppearance: '',
              capRefillRightHand: '',
              capRefillLeftHand: '',
              capRefillRightFoot: '',
              capRefillLeftFoot: '',
              temperatureRightHand: '',
              temperatureLeftHand: '',
              temperatureRightFoot: '',
              temperatureLeftFoot: '',
              peripheralEdemaRightHand: '',
              peripheralEdemaLeftHand: '',
              peripheralEdemaRightFoot: '',
              peripheralEdemaLeftFoot: '',
              nailBedColourRightHand: '',
              nailBedColourLeftHand: '',
              nailBedColourRightFoot: '',
              nailBedColourLeftFoot: '',
              comments: ''
            }
          }
        }
      }
    },
    gastrointestinal: {
      pageDataKey: 'gastrointestinal',
      pageTitle: 'Gastrointestinal',
      pIndex: '17',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Header',
          fqn: 'gastrointestinal.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          fqn: 'gastrointestinal.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          fqn: 'gastrointestinal.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          fqn: 'gastrointestinal.time'
        },
        {
          elementKey: 'condition',
          formIndex: '1',
          inputType: 'checkset',
          options: [
            {
              text: 'soft=Soft'
            },
            {
              text: 'tender=Tender'
            },
            {
              text: 'rigid=Rigid'
            },
            {
              text: 'guarding=Guarding'
            },
            {
              text: 'distended=Distended'
            },
            {
              text: 'scars=Scars'
            }
          ],
          tableColumn: '2',
          tableLabel: 'Abdomen',
          fqn: 'gastrointestinal.condition'
        },
        {
          elementKey: 'pain',
          dataCaseStudy: 'No',
          formIndex: '1',
          inputType: 'select',
          label: 'Abdominal pain',
          options: [
            {
              text: 'Yes'
            },
            {
              text: 'No'
            }
          ],
          tableColumn: '3',
          tableLabel: 'Abdominal pain',
          fqn: 'gastrointestinal.pain'
        },
        {
          elementKey: 'aLabel',
          dataCaseStudy: 'No',
          formIndex: '1',
          inputType: 'form_label',
          label: 'If answered yes, please complete the <a href=\'/assets/standardized-assessment-tools/numeric-rating-scale.pdf\'>pain assessment</a>.',
          tableColumn: '4',
          tableLabel: 'If answered yes, please complete the <a href=\'/assets/standardized-assessment-tools/numeric-rating-scale.pdf\'>pain assessment</a>.',
          fqn: 'gastrointestinal.aLabel'
        },
        {
          elementKey: 'bowel',
          formIndex: '1',
          inputType: 'checkset',
          options: [
            {
              text: 'Normal'
            },
            {
              text: 'Constipation'
            },
            {
              text: 'Diarrhea'
            },
            {
              text: 'Melena'
            },
            {
              text: 'Incontinent'
            }
          ],
          tableColumn: '5',
          tableLabel: 'Bowel',
          fqn: 'gastrointestinal.bowel'
        },
        {
          elementKey: 'bSounds',
          formIndex: '1',
          inputType: 'checkset',
          options: [
            {
              text: 'None'
            },
            {
              text: 'LUQ'
            },
            {
              text: 'RUQ'
            },
            {
              text: 'LLQ'
            },
            {
              text: 'RLQ'
            },
            {
              text: 'Hypoactive'
            },
            {
              text: 'Hyperactive'
            }
          ],
          tableColumn: '6',
          tableLabel: 'Bowel sounds',
          fqn: 'gastrointestinal.bSounds'
        },
        {
          elementKey: 'emesisPresent',
          dataCaseStudy: '(nothing selected)',
          formIndex: '1',
          inputType: 'select',
          label: 'Emesis present?',
          options: [
            {
              text: 'None'
            },
            {
              text: 'Nausea'
            },
            {
              text: 'Vomiting'
            }
          ],
          tableColumn: '7',
          tableLabel: 'Emesis present?',
          fqn: 'gastrointestinal.emesisPresent'
        },
        {
          elementKey: 'colour',
          dataCaseStudy: '(nothing selected)',
          formIndex: '1',
          inputType: 'select',
          label: 'Emesis colour',
          options: [
            {
              text: 'Greenish-yellow'
            },
            {
              text: 'Blood-tinged'
            },
            {
              text: 'Bright red'
            },
            {
              text: 'Dark red'
            },
            {
              text: 'Black'
            }
          ],
          tableColumn: '8',
          tableLabel: 'Emesis colour',
          fqn: 'gastrointestinal.colour'
        },
        {
          elementKey: 'description',
          dataCaseStudy: '(nothing entered)',
          formIndex: '1',
          inputType: 'text',
          label: 'Description',
          tableColumn: '9',
          tableLabel: 'Description',
          fqn: 'gastrointestinal.description'
        },
        {
          elementKey: 'amount',
          dataCaseStudy: '(nothing selected)',
          formIndex: '1',
          inputType: 'select',
          label: 'Approximate volume',
          options: [
            {
              text: 'Small'
            },
            {
              text: 'Moderate'
            },
            {
              text: 'Large'
            }
          ],
          tableColumn: '10',
          tableLabel: 'Approximate volume',
          fqn: 'gastrointestinal.amount'
        },
        {
          elementKey: 'eating',
          dataCaseStudy: 'Regular',
          formIndex: '1',
          inputType: 'select',
          label: 'Difficulty',
          options: [
            {
              text: 'Regular'
            },
            {
              text: 'Difficult'
            }
          ],
          tableColumn: '11',
          tableLabel: 'Difficulty',
          fqn: 'gastrointestinal.eating'
        },
        {
          elementKey: 'reason',
          dataCaseStudy: '(nothing entered)',
          formIndex: '1',
          inputType: 'text',
          label: 'Reason',
          tableColumn: '12',
          tableLabel: 'Reason',
          fqn: 'gastrointestinal.reason'
        },
        {
          elementKey: 'npoSinceDay',
          dataCaseStudy: '(nothing entered)',
          formIndex: '1',
          inputType: 'day',
          label: 'NPO since day',
          tableColumn: '13',
          tableLabel: 'NPO since day',
          fqn: 'gastrointestinal.npoSinceDay'
        },
        {
          elementKey: 'npoSinceTime',
          dataCaseStudy: '(nothing entered)',
          formIndex: '1',
          inputType: 'time',
          label: 'NPO since time',
          tableColumn: '14',
          tableLabel: 'NPO since time',
          fqn: 'gastrointestinal.npoSinceTime'
        },
        {
          elementKey: 'weightLoss',
          formIndex: '1',
          inputType: 'select',
          label: 'Weight loss',
          tableColumn: '15',
          tableLabel: 'Weight loss',
          fqn: 'gastrointestinal.weightLoss'
        },
        {
          elementKey: 'lastBm',
          dataCaseStudy: 'Yesterday',
          formIndex: '1',
          inputType: 'text',
          label: 'Last bowel movement',
          tableColumn: '16',
          tableLabel: 'Last bowel movement',
          fqn: 'gastrointestinal.lastBm'
        },
        {
          elementKey: 'stoolColour',
          dataCaseStudy: 'Brown',
          formIndex: '1',
          inputType: 'select',
          label: 'Stool colour',
          options: [
            {
              text: 'Brown'
            },
            {
              text: 'Green'
            },
            {
              text: 'Clay coloured'
            },
            {
              text: 'Yellow'
            },
            {
              text: 'Black'
            },
            {
              text: 'Bright red'
            },
            {
              text: 'Dark red'
            }
          ],
          tableColumn: '17',
          tableLabel: 'Stool colour',
          fqn: 'gastrointestinal.stoolColour'
        },
        {
          elementKey: 'stoolDescription',
          dataCaseStudy: '(nothing entered)',
          formIndex: '1',
          inputType: 'select',
          label: 'Description',
          options: [
            {
              text: 'Runny'
            },
            {
              text: 'Hard pellets'
            }
          ],
          tableColumn: '18',
          tableLabel: 'Description',
          fqn: 'gastrointestinal.stoolDescription'
        },
        {
          elementKey: 'stoolAmount',
          dataCaseStudy: '(nothing entered)',
          formIndex: '1',
          inputType: 'text',
          label: 'Amount',
          tableColumn: '19',
          tableLabel: 'Amount',
          fqn: 'gastrointestinal.stoolAmount'
        },
        {
          elementKey: 'stoolSource',
          dataCaseStudy: 'As per patient observed',
          formIndex: '1',
          inputType: 'select',
          label: 'Source',
          options: [
            {
              text: 'Observed'
            },
            {
              text: 'As per patient observed'
            },
            {
              text: 'Not observed'
            }
          ],
          tableColumn: '20',
          tableLabel: 'Source',
          fqn: 'gastrointestinal.stoolSource'
        },
        {
          elementKey: 'comments',
          dataCaseStudy: '(nothing entered)',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comments',
          tableLabel: 'Comments',
          fqn: 'gastrointestinal.comments'
        }
      ],
      generated: '2019-08-29T20:15:01-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a gastrointestinal assessment',
          ehr_list: [
            {
              label: 'Header',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Abdomen',
              ehr_list_index: '2',
              items: [
                'condition'
              ]
            },
            {
              label: 'Abdominal pain',
              ehr_list_index: '3',
              items: [
                'pain'
              ]
            },
            {
              label: 'If answered yes, please complete the <a href=\'/assets/standardized-assessment-tools/numeric-rating-scale.pdf\'>pain assessment</a>.',
              ehr_list_index: '4',
              items: [
                'aLabel'
              ]
            },
            {
              label: 'Bowel',
              ehr_list_index: '5',
              items: [
                'bowel'
              ]
            },
            {
              label: 'Bowel sounds',
              ehr_list_index: '6',
              items: [
                'bSounds'
              ]
            },
            {
              label: 'Emesis present?',
              ehr_list_index: '7',
              items: [
                'emesisPresent'
              ]
            },
            {
              label: 'Emesis colour',
              ehr_list_index: '8',
              items: [
                'colour'
              ]
            },
            {
              label: 'Description',
              ehr_list_index: '9',
              items: [
                'description'
              ]
            },
            {
              label: 'Approximate volume',
              ehr_list_index: '10',
              items: [
                'amount'
              ]
            },
            {
              label: 'Difficulty',
              ehr_list_index: '11',
              items: [
                'eating'
              ]
            },
            {
              label: 'Reason',
              ehr_list_index: '12',
              items: [
                'reason'
              ]
            },
            {
              label: 'NPO since day',
              ehr_list_index: '13',
              items: [
                'npoSinceDay'
              ]
            },
            {
              label: 'NPO since time',
              ehr_list_index: '14',
              items: [
                'npoSinceTime'
              ]
            },
            {
              label: 'Weight loss',
              ehr_list_index: '15',
              items: [
                'weightLoss'
              ]
            },
            {
              label: 'Last bowel movement',
              ehr_list_index: '16',
              items: [
                'lastBm'
              ]
            },
            {
              label: 'Stool colour',
              ehr_list_index: '17',
              items: [
                'stoolColour'
              ]
            },
            {
              label: 'Description',
              ehr_list_index: '18',
              items: [
                'stoolDescription'
              ]
            },
            {
              label: 'Amount',
              ehr_list_index: '19',
              items: [
                'stoolAmount'
              ]
            },
            {
              label: 'Source',
              ehr_list_index: '20',
              items: [
                'stoolSource'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a gastrointestinal assessment',
            formKey: 'table',
            ehr_groups: [
              {
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'name',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                gIndex: '2',
                gChildren: [
                  {
                    label: 'Abdomen',
                    elementKey: 'subgroup70',
                    sgChildren: [
                      'condition',
                      'pain',
                      'aLabel'
                    ]
                  },
                  {
                    label: 'Bowel',
                    elementKey: 'subgroup71',
                    sgChildren: [
                      'bowel'
                    ]
                  },
                  {
                    label: 'Bowel sounds',
                    elementKey: 'subgroup72',
                    sgChildren: [
                      'bSounds'
                    ]
                  },
                  {
                    label: 'Emesis',
                    elementKey: 'subgroup73',
                    sgChildren: [
                      'emesisPresent',
                      'colour',
                      'description',
                      'amount'
                    ]
                  },
                  {
                    label: 'Eating',
                    elementKey: 'subgroup74',
                    sgChildren: [
                      'eating',
                      'reason',
                      'npoSinceDay',
                      'npoSinceTime',
                      'weightLoss'
                    ]
                  },
                  {
                    label: 'Stool',
                    elementKey: 'subgroup75',
                    sgChildren: [
                      'lastBm',
                      'stoolColour',
                      'stoolDescription',
                      'stoolAmount',
                      'stoolSource'
                    ]
                  }
                ]
              },
              {
                formCss: 'full-width',
                gIndex: '3',
                gChildren: [
                  'comments'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              condition: '',
              pain: '',
              bowel: '',
              bSounds: '',
              emesisPresent: '',
              colour: '',
              description: '',
              amount: '',
              eating: '',
              reason: '',
              npoSinceDay: '',
              npoSinceTime: '',
              weightLoss: '',
              lastBm: '',
              stoolColour: '',
              stoolDescription: '',
              stoolAmount: '',
              stoolSource: '',
              comments: ''
            }
          }
        }
      }
    }
  }
}
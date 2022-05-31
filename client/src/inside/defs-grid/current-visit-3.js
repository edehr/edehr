export default function () {
  return {
    labRequisitions: {
      pageDataKey: 'labRequisitions',
      pageTitle: 'Lab requisitions',
      pIndex: '24',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'labRequisitions.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'labRequisitions.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'visitDay',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'labRequisitions.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'visitTime',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'labRequisitions.time'
        },
        {
          elementKey: 'patientName',
          formIndex: '1',
          inputType: 'ehrPatientName',
          label: 'Patient Name',
          tableColumn: '2',
          fqn: 'labRequisitions.patientName'
        },
        {
          elementKey: 'patientHealthNumber',
          formIndex: '1',
          inputType: 'ehrPHN',
          label: 'PHN',
          tableColumn: '3',
          fqn: 'labRequisitions.patientHealthNumber'
        },
        {
          elementKey: 'dateOfBirth',
          formIndex: '1',
          inputType: 'ehrDOB',
          label: 'DOB',
          tableColumn: '4',
          fqn: 'labRequisitions.dateOfBirth'
        },
        {
          elementKey: 'location',
          formIndex: '1',
          inputType: 'ehrLocation',
          label: 'Location',
          tableColumn: '5',
          fqn: 'labRequisitions.location'
        },
        {
          elementKey: 'dateRequired',
          formIndex: '1',
          inputType: 'visitDay',
          label: 'Date required',
          tableColumn: '6',
          fqn: 'labRequisitions.dateRequired'
        },
        {
          elementKey: 'reason',
          formIndex: '1',
          inputType: 'text',
          label: 'Reason test is required',
          tableColumn: '7',
          fqn: 'labRequisitions.reason'
        },
        {
          elementKey: 'hematology',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Hematology',
          options: [
            {
              key: 'CBC',
              text: 'CBC'
            },
            {
              key: 'CBC with differential',
              text: 'CBC with differential'
            },
            {
              key: 'Hemoglobin A1-C',
              text: 'Hemoglobin A1-C'
            }
          ],
          tableColumn: '8',
          fqn: 'labRequisitions.hematology'
        },
        {
          elementKey: 'electrolytes',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Electrolytes',
          options: [
            {
              key: 'K',
              text: 'K'
            },
            {
              key: 'Na',
              text: 'Na'
            },
            {
              key: 'Chloride',
              text: 'Chloride'
            },
            {
              key: 'Bicarbonate',
              text: 'Bicarbonate'
            },
            {
              key: 'Calcium',
              text: 'Calcium'
            },
            {
              key: 'Ionized Calcium',
              text: 'Ionized Calcium'
            }
          ],
          tableColumn: '9',
          fqn: 'labRequisitions.electrolytes'
        },
        {
          elementKey: 'bloodGas',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Blood Gas',
          options: [
            {
              key: 'Arterial blood gas',
              text: 'Arterial blood gas'
            },
            {
              key: 'Venous blood gas',
              text: 'Venous blood gas'
            },
            {
              key: 'Fetal cord blood gas',
              text: 'Fetal cord blood gas'
            }
          ],
          tableColumn: '10',
          fqn: 'labRequisitions.bloodGas'
        },
        {
          elementKey: 'renalProfile',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Renal Profile',
          options: [
            {
              key: 'BUN',
              text: 'BUN'
            },
            {
              key: 'Creatinine',
              text: 'Creatinine'
            }
          ],
          tableColumn: '11',
          fqn: 'labRequisitions.renalProfile'
        },
        {
          elementKey: 'liverFunction',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Liver Function',
          options: [
            {
              key: 'AST',
              text: 'AST'
            },
            {
              key: 'GGT',
              text: 'GGT'
            },
            {
              key: 'ALT',
              text: 'ALT'
            },
            {
              key: 'Total Birilubin',
              text: 'Total Birilubin'
            },
            {
              key: 'Direct Birilubin',
              text: 'Direct Birilubin'
            }
          ],
          tableColumn: '12',
          fqn: 'labRequisitions.liverFunction'
        },
        {
          elementKey: 'urineAnalysis',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Urine Analysis',
          options: [
            {
              key: 'R&M',
              text: 'R&M'
            },
            {
              key: 'Urine electrolytes',
              text: 'Urine electrolytes'
            },
            {
              key: 'Urine creatinine',
              text: 'Urine creatinine'
            }
          ],
          tableColumn: '13',
          fqn: 'labRequisitions.urineAnalysis'
        },
        {
          elementKey: 'microbiologyCulture',
          formIndex: '1',
          inputType: 'select',
          label: 'Type of Culture',
          options: [
            {
              key: 'culture',
              text: 'culture'
            },
            {
              key: 'senstitivity',
              text: 'senstitivity'
            }
          ],
          tableColumn: '14',
          fqn: 'labRequisitions.microbiologyCulture'
        },
        {
          elementKey: 'microbiologyLocation',
          formIndex: '1',
          inputType: 'select',
          label: 'Location',
          options: [
            {
              key: 'Wound',
              text: 'Wound'
            },
            {
              key: 'Sputum',
              text: 'Sputum'
            },
            {
              key: 'Blood',
              text: 'Blood'
            },
            {
              key: 'Urine',
              text: 'Urine'
            },
            {
              key: 'Stool',
              text: 'Stool'
            }
          ],
          tableColumn: '15',
          fqn: 'labRequisitions.microbiologyLocation'
        },
        {
          elementKey: 'histologyTissueType',
          formIndex: '1',
          inputType: 'select',
          label: 'Tissue Type',
          options: [
            {
              key: 'Skin',
              text: 'Skin'
            },
            {
              key: 'Blood',
              text: 'Blood'
            },
            {
              key: 'Organ',
              text: 'Organ'
            }
          ],
          tableColumn: '16',
          fqn: 'labRequisitions.histologyTissueType'
        },
        {
          elementKey: 'histologyLocation',
          formIndex: '1',
          inputType: 'text',
          label: 'Location',
          tableColumn: '17',
          fqn: 'labRequisitions.histologyLocation'
        }
      ],
      generated: '2022-05-24T09:04:19-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          hasRecHeader: false,
          label: 'Lab requisitions',
          addButtonText: 'Add a lab requisition assessment',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              ehr_list_index: '2',
              items: [
                'patientName'
              ]
            },
            {
              ehr_list_index: '3',
              items: [
                'patientHealthNumber'
              ]
            },
            {
              ehr_list_index: '4',
              items: [
                'dateOfBirth'
              ]
            },
            {
              ehr_list_index: '5',
              items: [
                'location'
              ]
            },
            {
              ehr_list_index: '6',
              items: [
                'dateRequired'
              ]
            },
            {
              ehr_list_index: '7',
              items: [
                'reason'
              ]
            },
            {
              ehr_list_index: '8',
              items: [
                'hematology'
              ]
            },
            {
              ehr_list_index: '9',
              items: [
                'electrolytes'
              ]
            },
            {
              ehr_list_index: '10',
              items: [
                'bloodGas'
              ]
            },
            {
              ehr_list_index: '11',
              items: [
                'renalProfile'
              ]
            },
            {
              ehr_list_index: '12',
              items: [
                'liverFunction'
              ]
            },
            {
              ehr_list_index: '13',
              items: [
                'urineAnalysis'
              ]
            },
            {
              ehr_list_index: '14',
              items: [
                'microbiologyCulture'
              ]
            },
            {
              ehr_list_index: '15',
              items: [
                'microbiologyLocation'
              ]
            },
            {
              ehr_list_index: '16',
              items: [
                'histologyTissueType'
              ]
            },
            {
              ehr_list_index: '17',
              items: [
                'histologyLocation'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            label: 'Lab requisitions',
            addButtonText: 'Add a lab requisition assessment',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group72',
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
                elementKey: 'demographics',
                label: 'Demographic',
                formCss: 'section-divider',
                gIndex: '2',
                gChildren: [
                  'patientName',
                  'patientHealthNumber',
                  'dateOfBirth',
                  'location',
                  'dateRequired',
                  'reason',
                  'hematology',
                  'electrolytes',
                  'bloodGas',
                  'renalProfile',
                  'liverFunction',
                  'urineAnalysis'
                ]
              },
              {
                elementKey: 'microbiology',
                label: 'Microbiology',
                formCss: 'section-divider',
                gIndex: '3',
                gChildren: [
                  'microbiologyCulture',
                  'microbiologyLocation'
                ]
              },
              {
                elementKey: 'histology',
                label: 'Histology',
                formCss: 'section-divider',
                gIndex: '4',
                gChildren: [
                  'histologyTissueType',
                  'histologyLocation'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              patientName: '',
              patientHealthNumber: '',
              dateOfBirth: '',
              location: '',
              dateRequired: '',
              reason: '',
              hematology: '',
              electrolytes: '',
              bloodGas: '',
              renalProfile: '',
              liverFunction: '',
              urineAnalysis: '',
              microbiologyCulture: '',
              microbiologyLocation: '',
              histologyTissueType: '',
              histologyLocation: ''
            }
          }
        }
      }
    }
  }
}
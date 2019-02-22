/* eslint-disable quotes */
export default function() {
  return {
    demographics: {
      pageTitle: 'Demographics',
      pageDataKey: 'demographics',
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: '1',
            elements: [
              {
                elementKey: 'familyName',
                fqn: 'demographics.familyName',
                inputType: 'text',
                label: 'Last name',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics',
                mandatory: 'yes'
              },
              {
                elementKey: 'givenName',
                fqn: 'demographics.givenName',
                inputType: 'text',
                label: 'First name',
                formColumn: '2',
                formRow: '1',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics',
                mandatory: 'yes'
              },
              {
                elementKey: 'middleName',
                fqn: 'demographics.middleName',
                inputType: 'text',
                label: 'Middle name(s)',
                formColumn: '3',
                formRow: '1',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics'
              }
            ]
          },
          {
            formRow: '2',
            elements: [
              {
                elementKey: 'preferredName',
                fqn: 'demographics.preferredName',
                inputType: 'text',
                label: 'Preferred name',
                formColumn: '1',
                formRow: '2',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics'
              },
              {
                elementKey: 'dateOfBirth',
                fqn: 'demographics.dateOfBirth',
                inputType: 'text',
                label: 'Date of birth',
                formColumn: '2',
                formRow: '2',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics'
              },
              {
                elementKey: 'personAge',
                fqn: 'demographics.personAge',
                inputType: 'text',
                label: 'Age',
                formColumn: '3',
                formRow: '2',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics',
                mandatory: 'yes'
              }
            ]
          },
          {
            formRow: '3',
            elements: [
              {
                elementKey: 'gender',
                fqn: 'demographics.gender',
                inputType: 'select',
                label: 'Gender',
                formColumn: '1',
                formRow: '3',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics',
                mandatory: 'yes',
                options: [
                  {
                    text: 'Unknown'
                  },
                  {
                    text: 'Female'
                  },
                  {
                    text: 'Male'
                  },
                  {
                    text: 'Transgender female'
                  },
                  {
                    text: 'Transgender male'
                  },
                  {
                    text: 'Undifferentiated'
                  },
                  {
                    text: 'Prefer not to say'
                  }
                ]
              },
              {
                elementKey: 'martialStatus',
                fqn: 'demographics.martialStatus',
                inputType: 'select',
                label: 'Martial status',
                formColumn: '2',
                formRow: '3',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics',
                options: [
                  {
                    text: 'Married'
                  },
                  {
                    text: 'Single'
                  },
                  {
                    text: 'Life partner'
                  },
                  {
                    text: 'Divorced'
                  },
                  {
                    text: 'Separated'
                  },
                  {
                    text: 'Widowed'
                  }
                ]
              }
            ]
          },
          {
            formRow: '4',
            elements: [
              {
                elementKey: 'languagePrimary',
                fqn: 'demographics.languagePrimary',
                inputType: 'select',
                label: 'Primary language',
                formColumn: '1',
                formRow: '4',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics',
                options: [
                  {
                    text: 'English'
                  },
                  {
                    text: 'French'
                  },
                  {
                    text: 'Spanish'
                  },
                  {
                    text: 'German'
                  },
                  {
                    text: 'Chinese'
                  }
                ]
              },
              {
                elementKey: 'religion',
                fqn: 'demographics.religion',
                inputType: 'text',
                label: 'Religion',
                formColumn: '2',
                formRow: '4',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics'
              },
              {
                elementKey: 'indigenousIdentifyAs',
                fqn: 'demographics.indigenousIdentifyAs',
                inputType: 'select',
                label: 'Do you identify as an indigenous person?',
                formColumn: '3',
                formRow: '4',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics',
                options: [
                  {
                    text: 'Yes'
                  },
                  {
                    text: 'No'
                  }
                ]
              }
            ]
          },
          {
            formRow: '5',
            elements: [
              {
                elementKey: 'streetAddress',
                fqn: 'demographics.streetAddress',
                inputType: 'text',
                label: 'Street address',
                formCss: 'is-two-thirds',
                formColumn: '1',
                formRow: '5',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics'
              },
              {
                elementKey: 'city',
                fqn: 'demographics.city',
                inputType: 'text',
                label: 'City',
                formColumn: '3',
                formRow: '5',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics'
              }
            ]
          },
          {
            formRow: '6',
            elements: [
              {
                elementKey: 'country',
                fqn: 'demographics.country',
                inputType: 'text',
                label: 'Country',
                formColumn: '1',
                formRow: '6',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics',
                defaultValue: 'Canada'
              },
              {
                elementKey: 'postalCode',
                fqn: 'demographics.postalCode',
                inputType: 'text',
                label: 'Postal code',
                formColumn: '2',
                formRow: '6',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics'
              },
              {
                elementKey: 'noAddress',
                fqn: 'demographics.noAddress',
                inputType: 'checkbox',
                label: 'No address',
                formColumn: '3',
                formRow: '6',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics'
              }
            ]
          },
          {
            formRow: '7',
            elements: [
              {
                elementKey: 'phoneNumber',
                fqn: 'demographics.phoneNumber',
                inputType: 'text',
                label: 'Primary phone number',
                formColumn: '1',
                formRow: '7',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics'
              },
              {
                elementKey: 'emailAddress',
                fqn: 'demographics.emailAddress',
                inputType: 'text',
                label: 'Email address',
                formColumn: '2',
                formRow: '7',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics'
              },
              {
                elementKey: 'occupationStudent',
                fqn: 'demographics.occupationStudent',
                inputType: 'text',
                label: 'Occupation/student',
                formColumn: '3',
                formRow: '7',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics'
              }
            ]
          },
          {
            formRow: '8',
            elements: [
              {
                elementKey: 'phn',
                fqn: 'demographics.phn',
                inputType: 'text',
                label: 'PHN',
                formColumn: '1',
                formRow: '8',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics'
              },
              {
                elementKey: 'mrn',
                fqn: 'demographics.mrn',
                inputType: 'text',
                label: 'MRN',
                formColumn: '2',
                formRow: '8',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics'
              },
              {
                elementKey: 'patientService',
                fqn: 'demographics.patientService',
                inputType: 'text',
                label: 'Patient service',
                formColumn: '3',
                formRow: '8',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics'
              }
            ]
          },
          {
            formRow: '9',
            elements: [
              {
                elementKey: 'nextOfKinName',
                fqn: 'demographics.nextOfKinName',
                inputType: 'text',
                label: 'Next of kin name',
                formColumn: '1',
                formRow: '9',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics'
              },
              {
                elementKey: 'nextOfKinRelationship',
                fqn: 'demographics.nextOfKinRelationship',
                inputType: 'select',
                label: 'Next of kin relationship',
                formColumn: '2',
                formRow: '9',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics',
                options: [
                  {
                    text: 'Wife'
                  },
                  {
                    text: 'Husband'
                  },
                  {
                    text: 'Mother'
                  },
                  {
                    text: 'Father'
                  },
                  {
                    text: 'Guardian'
                  },
                  {
                    text: 'Sister'
                  },
                  {
                    text: 'Brother'
                  },
                  {
                    text: 'Daughter'
                  },
                  {
                    text: 'Son'
                  },
                  {
                    text: 'Aunt'
                  },
                  {
                    text: 'Uncle'
                  },
                  {
                    text: 'Grandmother'
                  },
                  {
                    text: 'Grandfather'
                  },
                  {
                    text: 'Friend'
                  },
                  {
                    text: 'Other'
                  }
                ]
              },
              {
                elementKey: 'nextOfKinPhone',
                fqn: 'demographics.nextOfKinPhone',
                inputType: 'text',
                label: 'Next of kin phone',
                formColumn: '3',
                formRow: '9',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics'
              }
            ]
          },
          {
            formRow: '10',
            elements: [
              {
                elementKey: 'decisionMakerName',
                fqn: 'demographics.decisionMakerName',
                inputType: 'text',
                label: 'Decision maker name',
                formColumn: '1',
                formRow: '10',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics'
              },
              {
                elementKey: 'decisionMakerRelationship',
                fqn: 'demographics.decisionMakerRelationship',
                inputType: 'select',
                label: 'Decision maker relationship',
                formColumn: '2',
                formRow: '10',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics',
                options: [
                  {
                    text: 'Spouse'
                  },
                  {
                    text: 'Child'
                  },
                  {
                    text: 'Parent'
                  },
                  {
                    text: 'Sibling'
                  },
                  {
                    text: 'Grandparent'
                  },
                  {
                    text: 'Grandchild'
                  },
                  {
                    text: 'Friend'
                  },
                  {
                    text: 'Anyone else related by partnership'
                  },
                  {
                    text: 'Public guardian and trustee employee'
                  },
                  {
                    text: 'Other'
                  }
                ]
              },
              {
                elementKey: 'decisionMakerPhone',
                fqn: 'demographics.decisionMakerPhone',
                inputType: 'text',
                label: 'Decision maker phone',
                formColumn: '3',
                formRow: '10',
                pageDataKey: 'demographics',
                dataParent: 'demographics',
                page: 'Demographics'
              }
            ]
          }
        ],
        columnsCount: 3
      },
      pageData: {}
    },
    allergies: {
      pageTitle: 'Allergies',
      pageDataKey: 'allergies',
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: '1',
            elements: [
              {
                elementKey: 'hasNoAllergies',
                fqn: 'allergies.hasNoAllergies',
                inputType: 'checkbox',
                label: 'No known allergies',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'allergies',
                dataParent: 'allergies',
                page: 'Allergies',
                defaultValue: 'TRUE',
                validation: 'one of these two need to be filled'
              }
            ]
          },
          {
            formRow: '2',
            elements: [
              {
                elementKey: 'allergies',
                fqn: 'allergies.allergies',
                inputType: 'text',
                label: 'Allergies search',
                formColumn: '1',
                formRow: '2',
                pageDataKey: 'allergies',
                dataParent: 'allergies',
                page: 'Allergies',
                validation: 'one of these two need to be filled'
              }
            ]
          }
        ],
        columnsCount: 1
      },
      pageData: {}
    },
    medical: {
      pageTitle: 'History Medical',
      pageDataKey: 'medical',
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: '1',
            elements: [
              {
                elementKey: 'history',
                fqn: 'medical.history',
                inputType: 'textarea',
                label: 'Past medical history',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'medical',
                dataParent: 'medical',
                page: 'History Medical',
                defaultValue: 'sample default value'
              }
            ]
          }
        ],
        columnsCount: 1
      },
      pageData: {}
    },
    psychosocial: {
      pageTitle: 'History Psychosocial',
      pageDataKey: 'psychosocial',
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: '1',
            elements: [
              {
                elementKey: 'history',
                fqn: 'psychosocial.history',
                inputType: 'textarea',
                label: 'Psychosocial history',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'psychosocial',
                dataParent: 'psychosocial',
                page: 'History Psychosocial'
              },
              {
                elementKey: 'diet',
                fqn: 'psychosocial.diet',
                inputType: 'textarea',
                label: 'Diet',
                formColumn: '2',
                formRow: '1',
                pageDataKey: 'psychosocial',
                dataParent: 'psychosocial',
                page: 'History Psychosocial'
              },
              {
                elementKey: 'livingSituation',
                fqn: 'psychosocial.livingSituation',
                inputType: 'textarea',
                label: 'Living situation',
                formColumn: '3',
                formRow: '1',
                pageDataKey: 'psychosocial',
                dataParent: 'psychosocial',
                page: 'History Psychosocial'
              }
            ]
          },
          {
            formRow: '2',
            elements: [
              {
                elementKey: 'employmentSchool',
                fqn: 'psychosocial.employmentSchool',
                inputType: 'textarea',
                label: 'Employment/school',
                formColumn: '1',
                formRow: '2',
                pageDataKey: 'psychosocial',
                dataParent: 'psychosocial',
                page: 'History Psychosocial'
              },
              {
                elementKey: 'hobbies',
                fqn: 'psychosocial.hobbies',
                inputType: 'textarea',
                label: 'Hobbies',
                formColumn: '2',
                formRow: '2',
                pageDataKey: 'psychosocial',
                dataParent: 'psychosocial',
                page: 'History Psychosocial'
              }
            ]
          },
          {
            formRow: '3',
            elements: [
              {
                elementKey: 'behaviours',
                fqn: 'psychosocial.behaviours',
                inputType: 'subgroup',
                formCss: 'check_with_text_group',
                formColumn: '1',
                formRow: '3',
                pageDataKey: 'psychosocial',
                dataParent: 'psychosocial',
                page: 'History Psychosocial',
                elements: [
                  {
                    elementKey: 'exercise',
                    fqn: 'psychosocial.behaviours.exercise',
                    inputType: 'checkbox',
                    label: 'Exercise',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'psychosocial',
                    dataParent: 'psychosocial.behaviours',
                    page: 'History Psychosocial'
                  },
                  {
                    elementKey: 'exerciseFrequency',
                    fqn: 'psychosocial.behaviours.exerciseFrequency',
                    inputType: 'text',
                    label: 'Exercise frequency',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'psychosocial',
                    dataParent: 'psychosocial.behaviours',
                    page: 'History Psychosocial'
                  },
                  {
                    elementKey: 'caffeineUse',
                    fqn: 'psychosocial.behaviours.caffeineUse',
                    inputType: 'checkbox',
                    label: 'Caffeine use',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'psychosocial',
                    dataParent: 'psychosocial.behaviours',
                    page: 'History Psychosocial'
                  },
                  {
                    elementKey: 'caffeineUseFrequency',
                    fqn: 'psychosocial.behaviours.caffeineUseFrequency',
                    inputType: 'text',
                    label: 'Caffeine use frequency',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'psychosocial',
                    dataParent: 'psychosocial.behaviours',
                    page: 'History Psychosocial'
                  },
                  {
                    elementKey: 'tobaccoUse',
                    fqn: 'psychosocial.behaviours.tobaccoUse',
                    inputType: 'checkbox',
                    label: 'Tobacco use',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'psychosocial',
                    dataParent: 'psychosocial.behaviours',
                    page: 'History Psychosocial',
                    helperText:
                      'Have you used any tobacco products in the last 6 months?-NL-Have you used any tobacco products in the last 7 days?'
                  },
                  {
                    elementKey: 'tobaccoUseFrequency',
                    fqn: 'psychosocial.behaviours.tobaccoUseFrequency',
                    inputType: 'text',
                    label: 'Tobacco use frequency',
                    formColumn: '2',
                    formRow: '3',
                    pageDataKey: 'psychosocial',
                    dataParent: 'psychosocial.behaviours',
                    page: 'History Psychosocial'
                  },
                  {
                    elementKey: 'cannabisUse',
                    fqn: 'psychosocial.behaviours.cannabisUse',
                    inputType: 'checkbox',
                    label: 'Cannabis use',
                    formColumn: '1',
                    formRow: '4',
                    pageDataKey: 'psychosocial',
                    dataParent: 'psychosocial.behaviours',
                    page: 'History Psychosocial',
                    helperText:
                      'Have you used any cannabis products in the last 6 months?-NL-Have you used any cannabis products in the last 7 days?'
                  },
                  {
                    elementKey: 'cannabisUseFrequency',
                    fqn: 'psychosocial.behaviours.cannabisUseFrequency',
                    inputType: 'text',
                    label: 'Cannabis use frequency',
                    formColumn: '2',
                    formRow: '4',
                    pageDataKey: 'psychosocial',
                    dataParent: 'psychosocial.behaviours',
                    page: 'History Psychosocial'
                  },
                  {
                    elementKey: 'alcoholUse',
                    fqn: 'psychosocial.behaviours.alcoholUse',
                    inputType: 'checkbox',
                    label: 'Alcohol use',
                    formColumn: '1',
                    formRow: '5',
                    pageDataKey: 'psychosocial',
                    dataParent: 'psychosocial.behaviours',
                    page: 'History Psychosocial',
                    helperText:
                      'CAGE questionaire-NL-Have you ever felt that you should cut down on your drinking?-NL-Have you ever become annoyed by criticisms of your drinking?-NL-Have you ever felt guilty about your drinking?-NL-Have you ever had a morning eye opener to get rid of a hangover?'
                  },
                  {
                    elementKey: 'alcoholUseFrequency',
                    fqn: 'psychosocial.behaviours.alcoholUseFrequency',
                    inputType: 'text',
                    label: 'Alcohol use frequency',
                    formColumn: '2',
                    formRow: '5',
                    pageDataKey: 'psychosocial',
                    dataParent: 'psychosocial.behaviours',
                    page: 'History Psychosocial'
                  },
                  {
                    elementKey: 'substanceUse',
                    fqn: 'psychosocial.behaviours.substanceUse',
                    inputType: 'checkbox',
                    label: 'Substance use',
                    formColumn: '1',
                    formRow: '6',
                    pageDataKey: 'psychosocial',
                    dataParent: 'psychosocial.behaviours',
                    page: 'History Psychosocial',
                    helperText:
                      'Have you used any substances in the last 6 months?-NL-Have you used any substances in the last 7 days?-NL-If so, make notes about which ones.'
                  },
                  {
                    elementKey: 'substanceUseFrequency',
                    fqn: 'psychosocial.behaviours.substanceUseFrequency',
                    inputType: 'text',
                    label: 'Substance use frequency',
                    formColumn: '2',
                    formRow: '6',
                    pageDataKey: 'psychosocial',
                    dataParent: 'psychosocial.behaviours',
                    page: 'History Psychosocial'
                  }
                ],
                containerType: 'subgroup',
                containerKey: 'behaviours'
              }
            ]
          }
        ],
        columnsCount: 3
      },
      pageData: {}
    },
    surgical: {
      pageTitle: 'History Surgical',
      pageDataKey: 'surgical',
      hasTable: true,
      tables: [
        {
          tableKey: 'surgery',
          addButtonText: 'Add surgery',
          tableCells: [
            {
              elementKey: 'procedure',
              fqn: 'surgical.surgery.procedure',
              inputType: 'text',
              label: 'Surgery/procedure',
              tableColumn: '1',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'surgical',
              dataParent: 'surgical.surgery',
              page: 'History Surgical',
              tableKey: 'surgery'
            },
            {
              elementKey: 'date',
              fqn: 'surgical.surgery.date',
              inputType: 'text',
              label: 'How long since surgery',
              tableColumn: '2',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'surgical',
              dataParent: 'surgical.surgery',
              page: 'History Surgical',
              tableKey: 'surgery'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'procedure',
                    fqn: 'surgical.surgery.procedure',
                    inputType: 'text',
                    label: 'Surgery/procedure',
                    tableColumn: '1',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'surgical',
                    dataParent: 'surgical.surgery',
                    page: 'History Surgical',
                    tableKey: 'surgery'
                  },
                  {
                    elementKey: 'date',
                    fqn: 'surgical.surgery.date',
                    inputType: 'text',
                    label: 'How long since surgery',
                    tableColumn: '2',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'surgical',
                    dataParent: 'surgical.surgery',
                    page: 'History Surgical',
                    tableKey: 'surgery'
                  }
                ]
              }
            ],
            columnsCount: 2
          }
        },
        {
          tableKey: 'previous',
          addButtonText: 'Add previous appointment',
          tableCells: [
            {
              elementKey: 'previousAdmissions',
              fqn: 'surgical.previous.previousAdmissions',
              inputType: 'text',
              label: 'Previous admission reason',
              tableColumn: '1',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'surgical',
              dataParent: 'surgical.previous',
              page: 'History Surgical',
              tableKey: 'previous'
            },
            {
              elementKey: 'previousAdmissionsDate',
              fqn: 'surgical.previous.previousAdmissionsDate',
              inputType: 'date',
              label: 'Date',
              tableColumn: '2',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'surgical',
              dataParent: 'surgical.previous',
              page: 'History Surgical',
              tableKey: 'previous'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'previousAdmissions',
                    fqn: 'surgical.previous.previousAdmissions',
                    inputType: 'text',
                    label: 'Previous admission reason',
                    tableColumn: '1',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'surgical',
                    dataParent: 'surgical.previous',
                    page: 'History Surgical',
                    tableKey: 'previous'
                  },
                  {
                    elementKey: 'previousAdmissionsDate',
                    fqn: 'surgical.previous.previousAdmissionsDate',
                    inputType: 'date',
                    label: 'Date',
                    tableColumn: '2',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'surgical',
                    dataParent: 'surgical.previous',
                    page: 'History Surgical',
                    tableKey: 'previous'
                  }
                ]
              }
            ],
            columnsCount: 2
          }
        }
      ],
      pageData: {
        surgery: [],
        previous: []
      }
    },
    immunization: {
      pageTitle: 'History Immunization',
      pageDataKey: 'immunization',
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: '1',
            elements: [
              {
                elementKey: 'hepA',
                fqn: 'immunization.hepA',
                inputType: 'checkbox',
                label: 'Hep A',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'immunization',
                dataParent: 'immunization',
                page: 'History Immunization'
              },
              {
                elementKey: 'hepADate',
                fqn: 'immunization.hepADate',
                inputType: 'date',
                label: 'Hep A Date',
                formColumn: '2',
                formRow: '1',
                formOption: 'hideLabel',
                pageDataKey: 'immunization',
                dataParent: 'immunization',
                page: 'History Immunization'
              }
            ]
          },
          {
            formRow: '2',
            elements: [
              {
                elementKey: 'hepB',
                fqn: 'immunization.hepB',
                inputType: 'checkbox',
                label: 'Hep B',
                formColumn: '1',
                formRow: '2',
                pageDataKey: 'immunization',
                dataParent: 'immunization',
                page: 'History Immunization'
              },
              {
                elementKey: 'hepBDate',
                fqn: 'immunization.hepBDate',
                inputType: 'date',
                label: 'Hep B Date',
                formColumn: '2',
                formRow: '2',
                formOption: 'hideLabel',
                pageDataKey: 'immunization',
                dataParent: 'immunization',
                page: 'History Immunization'
              }
            ]
          },
          {
            formRow: '3',
            elements: [
              {
                elementKey: 'mmr',
                fqn: 'immunization.mmr',
                inputType: 'checkbox',
                label: 'MMR',
                formColumn: '1',
                formRow: '3',
                pageDataKey: 'immunization',
                dataParent: 'immunization',
                page: 'History Immunization'
              },
              {
                elementKey: 'mmrDate',
                fqn: 'immunization.mmrDate',
                inputType: 'date',
                label: 'MMR Date',
                formColumn: '2',
                formRow: '3',
                formOption: 'hideLabel',
                pageDataKey: 'immunization',
                dataParent: 'immunization',
                page: 'History Immunization'
              }
            ]
          },
          {
            formRow: '4',
            elements: [
              {
                elementKey: 'pneumococcal',
                fqn: 'immunization.pneumococcal',
                inputType: 'checkbox',
                label: 'Pneumococcal',
                formColumn: '1',
                formRow: '4',
                pageDataKey: 'immunization',
                dataParent: 'immunization',
                page: 'History Immunization'
              },
              {
                elementKey: 'pneumococcalDate',
                fqn: 'immunization.pneumococcalDate',
                inputType: 'date',
                label: 'Pneumococcal Date',
                formColumn: '2',
                formRow: '4',
                formOption: 'hideLabel',
                pageDataKey: 'immunization',
                dataParent: 'immunization',
                page: 'History Immunization'
              }
            ]
          },
          {
            formRow: '5',
            elements: [
              {
                elementKey: 'polioDiptheriaPertussis',
                fqn: 'immunization.polioDiptheriaPertussis',
                inputType: 'checkbox',
                label: 'Polio diptheria pertussis',
                formColumn: '1',
                formRow: '5',
                pageDataKey: 'immunization',
                dataParent: 'immunization',
                page: 'History Immunization'
              },
              {
                elementKey: 'polioDiptheriaPertussisDate',
                fqn: 'immunization.polioDiptheriaPertussisDate',
                inputType: 'date',
                label: 'Polio diptheria pertussis Date',
                formColumn: '2',
                formRow: '5',
                formOption: 'hideLabel',
                pageDataKey: 'immunization',
                dataParent: 'immunization',
                page: 'History Immunization'
              }
            ]
          },
          {
            formRow: '6',
            elements: [
              {
                elementKey: 'tb',
                fqn: 'immunization.tb',
                inputType: 'checkbox',
                label: 'TB',
                formColumn: '1',
                formRow: '6',
                pageDataKey: 'immunization',
                dataParent: 'immunization',
                page: 'History Immunization'
              },
              {
                elementKey: 'tbDate',
                fqn: 'immunization.tbDate',
                inputType: 'date',
                label: 'TB Date',
                formColumn: '2',
                formRow: '6',
                formOption: 'hideLabel',
                pageDataKey: 'immunization',
                dataParent: 'immunization',
                page: 'History Immunization'
              }
            ]
          },
          {
            formRow: '7',
            elements: [
              {
                elementKey: 'tetanus',
                fqn: 'immunization.tetanus',
                inputType: 'checkbox',
                label: 'Tetanus',
                formColumn: '1',
                formRow: '7',
                pageDataKey: 'immunization',
                dataParent: 'immunization',
                page: 'History Immunization'
              },
              {
                elementKey: 'tetanusDate',
                fqn: 'immunization.tetanusDate',
                inputType: 'date',
                label: 'Tetanus Date',
                formColumn: '2',
                formRow: '7',
                formOption: 'hideLabel',
                pageDataKey: 'immunization',
                dataParent: 'immunization',
                page: 'History Immunization'
              }
            ]
          },
          {
            formRow: '8',
            elements: [
              {
                elementKey: 'other1',
                fqn: 'immunization.other1',
                inputType: 'text',
                formColumn: '1',
                formRow: '8',
                pageDataKey: 'immunization',
                dataParent: 'immunization',
                page: 'History Immunization',
                validation: 'If other is selected, this is mandatory'
              },
              {
                elementKey: 'otherDate1',
                fqn: 'immunization.otherDate1',
                inputType: 'date',
                label: 'Date',
                formColumn: '2',
                formRow: '8',
                formOption: 'hideLabel',
                pageDataKey: 'immunization',
                dataParent: 'immunization',
                page: 'History Immunization'
              }
            ]
          },
          {
            formRow: '9',
            elements: [
              {
                elementKey: 'other2',
                fqn: 'immunization.other2',
                inputType: 'text',
                formColumn: '1',
                formRow: '9',
                pageDataKey: 'immunization',
                dataParent: 'immunization',
                page: 'History Immunization',
                validation: 'If other is selected, this is mandatory'
              },
              {
                elementKey: 'otherDate2',
                fqn: 'immunization.otherDate2',
                inputType: 'date',
                label: 'Date',
                formColumn: '2',
                formRow: '9',
                formOption: 'hideLabel',
                pageDataKey: 'immunization',
                dataParent: 'immunization',
                page: 'History Immunization'
              }
            ]
          },
          {
            formRow: '10',
            elements: [
              {
                elementKey: 'other3',
                fqn: 'immunization.other3',
                inputType: 'text',
                formColumn: '1',
                formRow: '10',
                pageDataKey: 'immunization',
                dataParent: 'immunization',
                page: 'History Immunization',
                validation: 'If other is selected, this is mandatory'
              },
              {
                elementKey: 'otherDate3',
                fqn: 'immunization.otherDate3',
                inputType: 'date',
                label: 'Date',
                formColumn: '2',
                formRow: '10',
                formOption: 'hideLabel',
                pageDataKey: 'immunization',
                dataParent: 'immunization',
                page: 'History Immunization'
              }
            ]
          }
        ],
        columnsCount: 2
      },
      pageData: {}
    },
    familyHistory: {
      pageTitle: 'History Family',
      pageDataKey: 'familyHistory',
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: '1',
            elements: [
              {
                elementKey: 'history',
                fqn: 'familyHistory.history',
                inputType: 'textarea',
                label: 'Family medical history',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'familyHistory',
                dataParent: 'familyHistory',
                page: 'History Family medical history'
              }
            ]
          }
        ],
        columnsCount: 1
      },
      pageData: {}
    },
    careTeam: {
      pageTitle: 'Care team',
      pageDataKey: 'careTeam',
      hasTable: true,
      tables: [
        {
          tableKey: 'teams',
          addButtonText: 'Add new care team member',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'careTeam.teams.name',
              inputType: 'text',
              label: 'Name',
              tableColumn: '1',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'careTeam',
              dataParent: 'careTeam.teams',
              page: 'Care team',
              tableKey: 'teams'
            },
            {
              elementKey: 'profession',
              fqn: 'careTeam.teams.profession',
              inputType: 'text',
              label: 'Profession',
              tableColumn: '2',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'careTeam',
              dataParent: 'careTeam.teams',
              page: 'Care team',
              tableKey: 'teams'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'careTeam.teams.name',
                    inputType: 'text',
                    label: 'Name',
                    tableColumn: '1',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'careTeam',
                    dataParent: 'careTeam.teams',
                    page: 'Care team',
                    tableKey: 'teams'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'careTeam.teams.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableColumn: '2',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'careTeam',
                    dataParent: 'careTeam.teams',
                    page: 'Care team',
                    tableKey: 'teams'
                  }
                ]
              }
            ],
            columnsCount: 2
          }
        }
      ],
      pageData: {
        teams: []
      }
    },
    pastAppointments: {
      pageTitle: 'Past appointments',
      pageDataKey: 'pastAppointments',
      hasTable: true,
      tables: [
        {
          tableKey: 'encounters',
          addButtonText: 'Add new past encounter',
          tableCells: [
            {
              elementKey: 'date',
              fqn: 'pastAppointments.encounters.date',
              inputType: 'text',
              label: 'Date',
              tableColumn: '1',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'pastAppointments',
              dataParent: 'pastAppointments.encounters',
              page: 'Past appointments',
              tableKey: 'encounters'
            },
            {
              elementKey: 'site',
              fqn: 'pastAppointments.encounters.site',
              inputType: 'text',
              label: 'Site',
              tableColumn: '2',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'pastAppointments',
              dataParent: 'pastAppointments.encounters',
              page: 'Past appointments',
              tableKey: 'encounters'
            },
            {
              elementKey: 'diagnosis',
              fqn: 'pastAppointments.encounters.diagnosis',
              inputType: 'text',
              label: 'Diagnosis',
              tableColumn: '3',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'pastAppointments',
              dataParent: 'pastAppointments.encounters',
              page: 'Past appointments',
              tableKey: 'encounters'
            },
            {
              elementKey: 'mrp',
              fqn: 'pastAppointments.encounters.mrp',
              inputType: 'text',
              label: 'Most responsible person',
              tableColumn: '4',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'pastAppointments',
              dataParent: 'pastAppointments.encounters',
              page: 'Past appointments',
              tableKey: 'encounters'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'date',
                    fqn: 'pastAppointments.encounters.date',
                    inputType: 'text',
                    label: 'Date',
                    tableColumn: '1',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'pastAppointments',
                    dataParent: 'pastAppointments.encounters',
                    page: 'Past appointments',
                    tableKey: 'encounters'
                  },
                  {
                    elementKey: 'site',
                    fqn: 'pastAppointments.encounters.site',
                    inputType: 'text',
                    label: 'Site',
                    tableColumn: '2',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'pastAppointments',
                    dataParent: 'pastAppointments.encounters',
                    page: 'Past appointments',
                    tableKey: 'encounters'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'diagnosis',
                    fqn: 'pastAppointments.encounters.diagnosis',
                    inputType: 'text',
                    label: 'Diagnosis',
                    tableColumn: '3',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'pastAppointments',
                    dataParent: 'pastAppointments.encounters',
                    page: 'Past appointments',
                    tableKey: 'encounters'
                  },
                  {
                    elementKey: 'mrp',
                    fqn: 'pastAppointments.encounters.mrp',
                    inputType: 'text',
                    label: 'Most responsible person',
                    tableColumn: '4',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'pastAppointments',
                    dataParent: 'pastAppointments.encounters',
                    page: 'Past appointments',
                    tableKey: 'encounters'
                  }
                ]
              }
            ],
            columnsCount: 2
          }
        },
        {
          tableKey: 'outpatientAppointments',
          addButtonText: 'Add new past appointment',
          tableCells: [
            {
              elementKey: 'date',
              fqn: 'pastAppointments.outpatientAppointments.date',
              inputType: 'text',
              label: 'Date',
              tableColumn: '1',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'pastAppointments',
              dataParent: 'pastAppointments.outpatientAppointments',
              page: 'Past appointments',
              tableKey: 'outpatientAppointments'
            },
            {
              elementKey: 'site',
              fqn: 'pastAppointments.outpatientAppointments.site',
              inputType: 'text',
              label: 'Site',
              tableColumn: '2',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'pastAppointments',
              dataParent: 'pastAppointments.outpatientAppointments',
              page: 'Past appointments',
              tableKey: 'outpatientAppointments'
            },
            {
              elementKey: 'reasonForVisit',
              fqn: 'pastAppointments.outpatientAppointments.reasonForVisit',
              inputType: 'text',
              label: 'Reason for visit',
              tableColumn: '3',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'pastAppointments',
              dataParent: 'pastAppointments.outpatientAppointments',
              page: 'Past appointments',
              tableKey: 'outpatientAppointments'
            },
            {
              elementKey: 'diagnosis',
              fqn: 'pastAppointments.outpatientAppointments.diagnosis',
              inputType: 'text',
              label: 'Diagnosis',
              tableColumn: '4',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'pastAppointments',
              dataParent: 'pastAppointments.outpatientAppointments',
              page: 'Past appointments',
              tableKey: 'outpatientAppointments'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'date',
                    fqn: 'pastAppointments.outpatientAppointments.date',
                    inputType: 'text',
                    label: 'Date',
                    tableColumn: '1',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'pastAppointments',
                    dataParent: 'pastAppointments.outpatientAppointments',
                    page: 'Past appointments',
                    tableKey: 'outpatientAppointments'
                  },
                  {
                    elementKey: 'site',
                    fqn: 'pastAppointments.outpatientAppointments.site',
                    inputType: 'text',
                    label: 'Site',
                    tableColumn: '2',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'pastAppointments',
                    dataParent: 'pastAppointments.outpatientAppointments',
                    page: 'Past appointments',
                    tableKey: 'outpatientAppointments'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'reasonForVisit',
                    fqn: 'pastAppointments.outpatientAppointments.reasonForVisit',
                    inputType: 'text',
                    label: 'Reason for visit',
                    tableColumn: '3',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'pastAppointments',
                    dataParent: 'pastAppointments.outpatientAppointments',
                    page: 'Past appointments',
                    tableKey: 'outpatientAppointments'
                  },
                  {
                    elementKey: 'diagnosis',
                    fqn: 'pastAppointments.outpatientAppointments.diagnosis',
                    inputType: 'text',
                    label: 'Diagnosis',
                    tableColumn: '4',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'pastAppointments',
                    dataParent: 'pastAppointments.outpatientAppointments',
                    page: 'Past appointments',
                    tableKey: 'outpatientAppointments'
                  }
                ]
              }
            ],
            columnsCount: 2
          }
        }
      ],
      pageData: {
        encounters: [],
        outpatientAppointments: []
      }
    }
  }
}

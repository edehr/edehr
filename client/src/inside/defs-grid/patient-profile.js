export default function () {
  return {
    demographics: {
      pageDataKey: 'demographics',
      pageTitle: 'V2Demographics',
      pIndex: '1',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'givenName',
          dataCaseStudy: 'Erin',
          formIndex: '1',
          inputType: 'text',
          label: 'First name',
          fqn: 'demographics.givenName'
        },
        {
          elementKey: 'middleName',
          formIndex: '1',
          inputType: 'text',
          label: 'Middle name(s)',
          fqn: 'demographics.middleName'
        },
        {
          elementKey: 'familyName',
          dataCaseStudy: 'Johns',
          formIndex: '1',
          inputType: 'text',
          label: 'Last name',
          fqn: 'demographics.familyName'
        },
        {
          elementKey: 'preferredName',
          dataCaseStudy: 'Erin',
          formIndex: '1',
          inputType: 'text',
          label: 'Preferred name',
          fqn: 'demographics.preferredName'
        },
        {
          elementKey: 'dateOfBirth',
          dataCaseStudy: '09-SEP-19##',
          formIndex: '1',
          inputType: 'text',
          label: 'Date of birth',
          fqn: 'demographics.dateOfBirth'
        },
        {
          elementKey: 'personAge',
          dataCaseStudy: '74',
          formIndex: '1',
          inputType: 'text',
          label: 'Age',
          fqn: 'demographics.personAge'
        },
        {
          elementKey: 'height',
          dataCaseStudy: '157',
          defaultValue: '157',
          formIndex: '1',
          inputType: 'text',
          label: 'Height',
          fqn: 'demographics.height'
        },
        {
          elementKey: 'weight',
          dataCaseStudy: '63',
          defaultValue: '63',
          formIndex: '1',
          inputType: 'text',
          label: 'Weight',
          fqn: 'demographics.weight'
        },
        {
          elementKey: 'gender',
          dataCaseStudy: 'Female',
          formIndex: '1',
          inputType: 'select',
          label: 'Gender',
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
          ],
          fqn: 'demographics.gender'
        },
        {
          elementKey: 'martialStatus',
          dataCaseStudy: 'Widow',
          formIndex: '1',
          inputType: 'select',
          label: 'Martial status',
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
          ],
          fqn: 'demographics.martialStatus'
        },
        {
          elementKey: 'languagePrimary',
          dataCaseStudy: 'English',
          formIndex: '1',
          inputType: 'select',
          label: 'Primary language',
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
          ],
          fqn: 'demographics.languagePrimary'
        },
        {
          elementKey: 'religion',
          formIndex: '1',
          inputType: 'text',
          label: 'Religion',
          fqn: 'demographics.religion'
        },
        {
          elementKey: 'indigenousIdentifyAs',
          dataCaseStudy: 'No',
          formIndex: '1',
          inputType: 'select',
          label: 'Do you identify as an indigenous person?',
          options: [
            {
              text: 'Yes'
            },
            {
              text: 'No'
            }
          ],
          fqn: 'demographics.indigenousIdentifyAs'
        },
        {
          elementKey: 'streetAddress',
          dataCaseStudy: '402 Willow St.',
          formIndex: '1',
          inputType: 'text',
          label: 'Street address',
          fqn: 'demographics.streetAddress'
        },
        {
          elementKey: 'city',
          dataCaseStudy: 'Vancouver',
          formIndex: '1',
          inputType: 'text',
          label: 'City',
          fqn: 'demographics.city'
        },
        {
          elementKey: 'country',
          dataCaseStudy: 'Canada',
          defaultValue: 'Canada',
          formIndex: '1',
          inputType: 'text',
          label: 'Country',
          fqn: 'demographics.country'
        },
        {
          elementKey: 'postalCode',
          dataCaseStudy: 'V3F 9R2',
          formIndex: '1',
          inputType: 'text',
          label: 'Postal code',
          fqn: 'demographics.postalCode'
        },
        {
          elementKey: 'noAddress',
          defaultValue: false,
          formIndex: '1',
          inputType: 'checkbox',
          label: 'No address',
          fqn: 'demographics.noAddress'
        },
        {
          elementKey: 'phoneNumber',
          dataCaseStudy: '(778) 555-2947',
          formIndex: '1',
          inputType: 'text',
          label: 'Primary phone number',
          fqn: 'demographics.phoneNumber'
        },
        {
          elementKey: 'emailAddress',
          formIndex: '1',
          inputType: 'text',
          label: 'Email',
          fqn: 'demographics.emailAddress'
        },
        {
          elementKey: 'occupationStudent',
          dataCaseStudy: 'Retired',
          formIndex: '1',
          inputType: 'text',
          label: 'Occupation/student',
          fqn: 'demographics.occupationStudent'
        },
        {
          elementKey: 'phn',
          dataCaseStudy: '12345678',
          formIndex: '1',
          inputType: 'text',
          label: 'PHN',
          fqn: 'demographics.phn'
        },
        {
          elementKey: 'mrn',
          formIndex: '1',
          inputType: 'text',
          label: 'MRN',
          fqn: 'demographics.mrn'
        },
        {
          elementKey: 'patientService',
          formIndex: '1',
          inputType: 'text',
          label: 'Patient service',
          fqn: 'demographics.patientService'
        },
        {
          elementKey: 'nextOfKinName',
          dataCaseStudy: 'Thomas Johns',
          formIndex: '1',
          inputType: 'text',
          label: 'Next of kin name',
          fqn: 'demographics.nextOfKinName'
        },
        {
          elementKey: 'nextOfKinRelationship',
          dataCaseStudy: 'Son',
          formIndex: '1',
          inputType: 'select',
          label: 'Next of kin relationship',
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
          ],
          fqn: 'demographics.nextOfKinRelationship'
        },
        {
          elementKey: 'nextOfKinPhone',
          dataCaseStudy: '604-555-9865',
          formIndex: '1',
          inputType: 'text',
          label: 'Next of kin phone',
          fqn: 'demographics.nextOfKinPhone'
        },
        {
          elementKey: 'decisionMakerName',
          dataCaseStudy: 'Thomas Johns',
          formIndex: '1',
          inputType: 'text',
          label: 'Decision maker name',
          fqn: 'demographics.decisionMakerName'
        },
        {
          elementKey: 'decisionMakerRelationship',
          dataCaseStudy: 'Son',
          formIndex: '1',
          inputType: 'select',
          label: 'Decision maker relationship',
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
          ],
          fqn: 'demographics.decisionMakerRelationship'
        },
        {
          elementKey: 'decisionMakerPhone',
          dataCaseStudy: '604-555-9865',
          formIndex: '1',
          inputType: 'text',
          label: 'Decision maker phone',
          fqn: 'demographics.decisionMakerPhone'
        }
      ],
      generated: '2019-08-25T20:31:51-07:00',
      pageElements: {
        page_form1: {
          elementKey: 'page_form1',
          formKey: 'page_form1',
          isPageForm: true,
          ehr_groups: [
            {
              gIndex: '1',
              gChildren: [
                'givenName',
                'middleName',
                'familyName',
                'preferredName',
                'dateOfBirth',
                'personAge',
                'height',
                'weight',
                'gender',
                'martialStatus',
                'languagePrimary',
                'religion',
                'indigenousIdentifyAs',
                'streetAddress',
                'city',
                'country',
                'postalCode',
                'noAddress',
                'phoneNumber',
                'emailAddress',
                'occupationStudent',
                'phn',
                'mrn',
                'patientService',
                'nextOfKinName',
                'nextOfKinRelationship',
                'nextOfKinPhone',
                'decisionMakerName',
                'decisionMakerRelationship',
                'decisionMakerPhone'
              ]
            }
          ]
        }
      }
    },
    allergies: {
      pageDataKey: 'allergies',
      pageTitle: 'Allergies',
      pIndex: '2',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'text',
          dataCaseStudy: true,
          defaultValue: true,
          formIndex: '1',
          inputType: 'text',
          label: 'Allergies',
          fqn: 'allergies.text'
        },
        {
          elementKey: 'checkbox',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'No known allergies',
          fqn: 'allergies.checkbox'
        }
      ],
      generated: '2019-08-25T20:31:51-07:00',
      pageElements: {
        page_form: {
          elementKey: 'page_form',
          formKey: 'page_form',
          isPageForm: true,
          ehr_groups: [
            {
              gIndex: '1',
              gChildren: [
                'text',
                'checkbox'
              ]
            }
          ]
        }
      }
    },
    medical: {
      pageDataKey: 'medical',
      pageTitle: 'Medical history',
      pIndex: '3',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'history',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Past medical history',
          fqn: 'medical.history'
        }
      ],
      generated: '2019-08-25T20:31:51-07:00',
      pageElements: {
        page_form4: {
          elementKey: 'page_form4',
          formKey: 'page_form4',
          isPageForm: true,
          ehr_groups: [
            {
              gIndex: '1',
              gChildren: [
                'history'
              ]
            }
          ]
        }
      }
    },
    psychosocial: {
      pageDataKey: 'psychosocial',
      pageTitle: 'Psychosocial history',
      pIndex: '4',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'history',
          dataCaseStudy: 'Feels down when she thinks about her lower financial status and her advancing age, and how she is becoming more forgetful and less energetic. Often feels alone and worries about falling and not being able to alert anyone to come to her rescue. Driving is becoming hard for her.',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Psychosocial history',
          fqn: 'psychosocial.history'
        },
        {
          elementKey: 'diet',
          dataCaseStudy: 'Regular',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Diet',
          fqn: 'psychosocial.diet'
        },
        {
          elementKey: 'livingSituation',
          dataCaseStudy: 'Son lives with her in her house',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Living situation',
          fqn: 'psychosocial.livingSituation'
        },
        {
          elementKey: 'employmentSchool',
          dataCaseStudy: 'Retired hairdresser',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Employment/school',
          fqn: 'psychosocial.employmentSchool'
        },
        {
          elementKey: 'hobbies',
          dataCaseStudy: 'Bingo, Netflix, playing Solitaire and Scrabble with friends on her iPad',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Hobbies',
          fqn: 'psychosocial.hobbies'
        },
        {
          elementKey: 'exercise',
          dataCaseStudy: '< 1 day/week',
          formIndex: '1',
          inputType: 'checkbox_text_spacer',
          label: 'Exercise',
          fqn: 'psychosocial.exercise'
        },
        {
          elementKey: 'caffeineUse',
          dataCaseStudy: '1-2 cups/day',
          formIndex: '1',
          inputType: 'checkbox_text_spacer',
          label: 'Caffeine use',
          fqn: 'psychosocial.caffeineUse'
        },
        {
          elementKey: 'tobaccoUse',
          dataCaseStudy: '1-2 cups/day',
          formIndex: '1',
          helperText: 'Have you used any tobacco products in the last 6 months?\nHave you used any tobacco products in the last 7 days?',
          inputType: 'checkbox_text_spacer',
          label: 'Tobacco use',
          fqn: 'psychosocial.tobaccoUse',
          helperHtml: '<p>Have you used any tobacco products in the last 6 months?</p>\n<p>Have you used any tobacco products in the last 7 days?</p>'
        },
        {
          elementKey: 'cannabisUse',
          formIndex: '1',
          helperText: 'Have you used any cannabis products in the last 6 months?\nHave you used any cannabis products in the last 7 days?',
          inputType: 'checkbox_text_spacer',
          label: 'Cannabis use',
          fqn: 'psychosocial.cannabisUse',
          helperHtml: '<p>Have you used any cannabis products in the last 6 months?</p>\n<p>Have you used any cannabis products in the last 7 days?</p>'
        },
        {
          elementKey: 'alcoholUse',
          dataCaseStudy: 'Social',
          formIndex: '1',
          helperText: 'CAGE questionaire\nHave you ever felt that you should cut down on your drinking?\nHave you ever become annoyed by criticisms of your drinking?\nHave you ever felt guilty about your drinking?\nHave you ever had a morning eye opener to get rid of a hangover?',
          inputType: 'checkbox_text_spacer',
          label: 'Alcohol use',
          fqn: 'psychosocial.alcoholUse',
          helperHtml: '<p>CAGE questionaire</p>\n<p>Have you ever felt that you should cut down on your drinking?</p>\n<p>Have you ever become annoyed by criticisms of your drinking?</p>\n<p>Have you ever felt guilty about your drinking?</p>\n<p>Have you ever had a morning eye opener to get rid of a hangover?</p>'
        },
        {
          elementKey: 'substanceUse',
          formIndex: '1',
          helperText: 'Have you used any substances in the last 6 months?\nHave you used any substances in the last 7 days?\nIf so, make notes about which ones.',
          inputType: 'checkbox_text_spacer',
          label: 'Substance use',
          fqn: 'psychosocial.substanceUse',
          helperHtml: '<p>Have you used any substances in the last 6 months?</p>\n<p>Have you used any substances in the last 7 days?</p>\n<p>If so, make notes about which ones.</p>'
        }
      ],
      generated: '2019-08-25T20:31:51-07:00',
      pageElements: {
        page_form6: {
          elementKey: 'page_form6',
          formKey: 'page_form6',
          isPageForm: true,
          ehr_groups: [
            {
              gIndex: '1',
              gChildren: [
                {
                  elementKey: 'subgroup9',
                  sgChildren: [
                    'exercise',
                    'caffeineUse',
                    'tobaccoUse',
                    'cannabisUse',
                    'alcoholUse',
                    'substanceUse'
                  ]
                },
                'diet',
                'livingSituation',
                'employmentSchool',
                'hobbies'
              ]
            }
          ]
        }
      }
    },
    surgical: {
      pageDataKey: 'surgical',
      pageTitle: 'Surgical history',
      pIndex: '5',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'physician',
          formIndex: '1',
          inputType: 'text',
          label: 'Performing physician',
          tableColumn: '1',
          fqn: 'surgical.physician'
        },
        {
          elementKey: 'procedure',
          dataCaseStudy: 'Cesarean section',
          formIndex: '1',
          inputType: 'text',
          label: 'Surgery/procedure',
          tableColumn: '2',
          fqn: 'surgical.procedure'
        },
        {
          elementKey: 'timeSince',
          formIndex: '1',
          inputType: 'text',
          label: 'Time elapsed since surgery',
          tableColumn: '3',
          fqn: 'surgical.timeSince'
        },
        {
          elementKey: 'with',
          formIndex: '2',
          inputType: 'text',
          label: 'Appointment with',
          tableColumn: '1',
          fqn: 'surgical.with'
        },
        {
          elementKey: 'details',
          formIndex: '2',
          inputType: 'text',
          label: 'Appointment details',
          tableColumn: '2',
          fqn: 'surgical.details'
        },
        {
          elementKey: 'previousAdmissions',
          formIndex: '2',
          inputType: 'text',
          label: 'Previous admission reason',
          tableColumn: '3',
          fqn: 'surgical.previousAdmissions'
        },
        {
          elementKey: 'previousAdmissionsDate',
          formIndex: '2',
          inputType: 'date',
          label: 'Date',
          tableColumn: '4',
          fqn: 'surgical.previousAdmissionsDate'
        },
        {
          elementKey: 'comments',
          formIndex: '2',
          inputType: 'textarea',
          label: 'General comments',
          tableColumn: '5',
          fqn: 'surgical.comments'
        }
      ],
      generated: '2019-08-25T20:31:51-07:00',
      pageElements: {
        table_form10: {
          elementKey: 'table_form10',
          tableKey: 'table_form10',
          isTable: true,
          addButtonText: 'Add a past surgery',
          ehr_list: [
            {
              ehr_list_index: '1',
              items: [
                'physician'
              ]
            },
            {
              ehr_list_index: '2',
              items: [
                'procedure'
              ]
            },
            {
              ehr_list_index: '3',
              items: [
                'timeSince'
              ]
            }
          ],
          form: {
            elementKey: 'table_form10',
            addButtonText: 'Add a past surgery',
            formKey: 'table_form10',
            ehr_groups: [
              {
                label: 'Past surgery',
                gIndex: '1',
                gChildren: [
                  'physician',
                  'procedure',
                  'timeSince'
                ]
              }
            ],
            ehr_data: {
              physician: '',
              procedure: '',
              timeSince: ''
            }
          }
        },
        table_form11: {
          elementKey: 'table_form11',
          tableKey: 'table_form11',
          isTable: true,
          addButtonText: 'Add a previous appointment',
          ehr_list: [
            {
              ehr_list_index: '1',
              items: [
                'with'
              ]
            },
            {
              ehr_list_index: '2',
              items: [
                'details'
              ]
            },
            {
              ehr_list_index: '3',
              items: [
                'previousAdmissions'
              ]
            },
            {
              ehr_list_index: '4',
              items: [
                'previousAdmissionsDate'
              ]
            },
            {
              ehr_list_index: '5',
              items: [
                'comments'
              ]
            }
          ],
          form: {
            elementKey: 'table_form11',
            addButtonText: 'Add a previous appointment',
            formKey: 'table_form11',
            ehr_groups: [
              {
                label: 'Previous admission',
                gIndex: '1',
                gChildren: [
                  'with',
                  'details',
                  'previousAdmissions',
                  'previousAdmissionsDate',
                  'comments'
                ]
              }
            ],
            ehr_data: {
              with: '',
              details: '',
              previousAdmissions: '',
              previousAdmissionsDate: '',
              comments: ''
            }
          }
        }
      }
    },
    immunization: {
      pageDataKey: 'immunization',
      pageTitle: 'Immunization history',
      pIndex: '6',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'hepA',
          dependantOn: 'hepA',
          formIndex: '1',
          inputType: 'checkbox_date',
          label: 'Hep A',
          fqn: 'immunization.hepA'
        },
        {
          elementKey: 'hepB',
          dependantOn: 'hepB',
          formIndex: '1',
          inputType: 'checkbox_date',
          label: 'Hep B',
          fqn: 'immunization.hepB'
        },
        {
          elementKey: 'mmr',
          dependantOn: 'mmr',
          formIndex: '1',
          inputType: 'checkbox_date',
          label: 'MMR',
          fqn: 'immunization.mmr'
        },
        {
          elementKey: 'pneumococcal',
          dependantOn: 'pneumococcal',
          formIndex: '1',
          inputType: 'checkbox_date',
          label: 'Pneumococcal',
          fqn: 'immunization.pneumococcal'
        },
        {
          elementKey: 'polioDiptheriaPertussis',
          dependantOn: 'polioDiptheriaPertussis',
          formIndex: '1',
          inputType: 'checkbox_date',
          label: 'Polio diptheria pertussis',
          fqn: 'immunization.polioDiptheriaPertussis'
        },
        {
          elementKey: 'tb',
          dependantOn: 'tb',
          formIndex: '1',
          inputType: 'checkbox_date',
          label: 'TB',
          fqn: 'immunization.tb'
        },
        {
          elementKey: 'tetanus',
          dependantOn: 'tetanus',
          formIndex: '1',
          inputType: 'checkbox_date',
          label: 'Tetanus',
          fqn: 'immunization.tetanus'
        },
        {
          elementKey: 'other1',
          formIndex: '1',
          inputType: 'text_date',
          fqn: 'immunization.other1'
        },
        {
          elementKey: 'other2',
          formIndex: '1',
          inputType: 'text_date',
          fqn: 'immunization.other2'
        },
        {
          elementKey: 'other3',
          formIndex: '1',
          inputType: 'text_date',
          fqn: 'immunization.other3'
        }
      ],
      generated: '2019-08-25T20:31:51-07:00',
      pageElements: {
        page_form12: {
          elementKey: 'page_form12',
          formKey: 'page_form12',
          isPageForm: true,
          ehr_groups: [
            {
              gIndex: '1',
              gChildren: [
                'hepA',
                'hepB',
                'mmr',
                'pneumococcal',
                'polioDiptheriaPertussis',
                'tb',
                'tetanus',
                'other1',
                'other2',
                'other3'
              ]
            }
          ]
        }
      }
    },
    familyHistory: {
      pageDataKey: 'familyHistory',
      pageTitle: 'Family history',
      pIndex: '7',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'history',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Family medical history',
          fqn: 'familyHistory.history'
        }
      ],
      generated: '2019-08-25T20:31:51-07:00',
      pageElements: {
        page_form14: {
          elementKey: 'page_form14',
          formKey: 'page_form14',
          isPageForm: true,
          ehr_groups: [
            {
              gIndex: '1',
              gChildren: [
                'history'
              ]
            }
          ]
        }
      }
    },
    careTeam: {
      pageDataKey: 'careTeam',
      pageTitle: 'Care team',
      pIndex: '8',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'name',
          dataCaseStudy: 'Dr. Singh-NL-Dr. Notley-NL-Jason-NL-Jackie-NL-Gurpreet-NL-Alexa-NL-Matt-NL-Serge-NL-Trache-NL-Dr. Hunnicutt-NL-Jim-NL-Gladys-NL-Herman',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          fqn: 'careTeam.name'
        },
        {
          elementKey: 'profession',
          dataCaseStudy: 'Physician-NL-Physician-NL-Nurse-NL-Nurse-NL-Medical radiograpeor-NL-Medical laboratory technician-NL-Medical radiographer-NL-RN-NL-Physician-NL-RN-NL-Pysiotherapy student-NL-Resp. therapist',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          fqn: 'careTeam.profession'
        }
      ],
      generated: '2019-08-25T20:31:51-07:00',
      pageElements: {
        page_form16: {
          elementKey: 'page_form16',
          formKey: 'page_form16',
          isPageForm: true,
          ehr_groups: [
            {
              label: 'Team',
              gIndex: '1',
              gChildren: [
                'name',
                'profession'
              ]
            }
          ]
        }
      }
    },
    pastAppointments: {
      pageDataKey: 'pastAppointments',
      pageTitle: 'Past appointments',
      pIndex: '9',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'date',
          formIndex: '1',
          inputType: 'date',
          label: 'Date',
          fqn: 'pastAppointments.date'
        },
        {
          elementKey: 'site',
          formIndex: '1',
          inputType: 'text',
          label: 'Site',
          fqn: 'pastAppointments.site'
        },
        {
          elementKey: 'diagnosis',
          formIndex: '1',
          inputType: 'text',
          label: 'Diagnosis',
          fqn: 'pastAppointments.diagnosis'
        },
        {
          elementKey: 'mrp',
          formIndex: '1',
          inputType: 'text',
          label: 'Most responsible person',
          fqn: 'pastAppointments.mrp'
        },
        {
          elementKey: 'date',
          dataCaseStudy: '1 week ago',
          formIndex: '1',
          inputType: 'text',
          label: 'Date',
          fqn: 'pastAppointments.date'
        },
        {
          elementKey: 'site',
          dataCaseStudy: 'Clinic',
          formIndex: '1',
          inputType: 'text',
          label: 'Site',
          fqn: 'pastAppointments.site'
        },
        {
          elementKey: 'reasonForVisit',
          dataCaseStudy: 'Shortness of breath x 24 hrs',
          formIndex: '1',
          inputType: 'text',
          label: 'Reason for visit',
          fqn: 'pastAppointments.reasonForVisit'
        },
        {
          elementKey: 'diagnosis',
          dataCaseStudy: 'COPD',
          formIndex: '1',
          inputType: 'text',
          label: 'Diagnosis',
          fqn: 'pastAppointments.diagnosis'
        }
      ],
      generated: '2019-08-25T20:31:51-07:00',
      pageElements: {
        page_form17: {
          elementKey: 'page_form17',
          formKey: 'page_form17',
          isPageForm: true,
          ehr_groups: [
            {
              label: 'Past encounters',
              gIndex: '1',
              gChildren: [
                'date',
                'site',
                'diagnosis',
                'mrp'
              ]
            },
            {
              label: 'Outpatient appointments',
              gIndex: '2',
              gChildren: [
                'date',
                'site',
                'reasonForVisit',
                'diagnosis'
              ]
            }
          ]
        }
      }
    }
  }
}
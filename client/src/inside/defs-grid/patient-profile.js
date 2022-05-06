export default function () {
  return {
    demographics: {
      pageDataKey: 'demographics',
      pageTitle: 'Demographics',
      pIndex: '1',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'givenName',
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
          formIndex: '1',
          inputType: 'text',
          label: 'Last name',
          fqn: 'demographics.familyName'
        },
        {
          elementKey: 'preferredName',
          formIndex: '1',
          inputType: 'text',
          label: 'Preferred name',
          tableCss: 'hr-table',
          fqn: 'demographics.preferredName'
        },
        {
          elementKey: 'dateOfBirth',
          formIndex: '1',
          inputType: 'text',
          label: 'Date of birth',
          fqn: 'demographics.dateOfBirth'
        },
        {
          elementKey: 'personAge',
          formIndex: '1',
          inputType: 'text',
          label: 'Age',
          fqn: 'demographics.personAge'
        },
        {
          elementKey: 'height',
          formIndex: '1',
          inputType: 'text',
          label: 'Height',
          suffix: 'cm',
          fqn: 'demographics.height'
        },
        {
          elementKey: 'weight',
          formIndex: '1',
          inputType: 'text',
          label: 'Weight',
          suffix: 'kg',
          fqn: 'demographics.weight'
        },
        {
          elementKey: 'gender',
          formIndex: '1',
          inputType: 'select',
          label: 'Gender',
          options: [
            {
              key: 'Unknown',
              text: 'Unknown'
            },
            {
              key: 'Female',
              text: 'Female'
            },
            {
              key: 'Male',
              text: 'Male'
            },
            {
              key: 'Transgender female',
              text: 'Transgender female'
            },
            {
              key: 'Transgender male',
              text: 'Transgender male'
            },
            {
              key: 'Undifferentiated',
              text: 'Undifferentiated'
            },
            {
              key: 'Prefer not to say',
              text: 'Prefer not to say'
            }
          ],
          tableCss: 'hr-table',
          fqn: 'demographics.gender'
        },
        {
          elementKey: 'martialStatus',
          formIndex: '1',
          inputType: 'select',
          label: 'Martial status',
          options: [
            {
              key: 'Married',
              text: 'Married'
            },
            {
              key: 'Single',
              text: 'Single'
            },
            {
              key: 'Life partner',
              text: 'Life partner'
            },
            {
              key: 'Divorced',
              text: 'Divorced'
            },
            {
              key: 'Separated',
              text: 'Separated'
            },
            {
              key: 'Widowed',
              text: 'Widowed'
            }
          ],
          fqn: 'demographics.martialStatus'
        },
        {
          elementKey: 'languagePrimary',
          formIndex: '1',
          inputType: 'select',
          label: 'Primary language',
          options: [
            {
              key: 'English',
              text: 'English'
            },
            {
              key: 'French',
              text: 'French'
            },
            {
              key: 'Spanish',
              text: 'Spanish'
            },
            {
              key: 'German',
              text: 'German'
            },
            {
              key: 'Chinese',
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
          formIndex: '1',
          inputType: 'select',
          label: 'Do you identify as an indigenous person?',
          options: [
            {
              key: 'Yes',
              text: 'Yes'
            },
            {
              key: 'No',
              text: 'No'
            }
          ],
          tableCss: 'hr-table',
          fqn: 'demographics.indigenousIdentifyAs'
        },
        {
          elementKey: 'streetAddress',
          formIndex: '1',
          formCss: 'grid-span-2-columns',
          inputType: 'text',
          label: 'Street address',
          fqn: 'demographics.streetAddress'
        },
        {
          elementKey: 'city',
          formIndex: '1',
          inputType: 'text',
          label: 'City',
          fqn: 'demographics.city'
        },
        {
          elementKey: 'country',
          defaultValue: 'Canada',
          formIndex: '1',
          inputType: 'text',
          label: 'Country',
          fqn: 'demographics.country'
        },
        {
          elementKey: 'postalCode',
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
          tableCss: 'hr-table',
          fqn: 'demographics.noAddress'
        },
        {
          elementKey: 'phoneNumber',
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
          tableCss: 'hr-table',
          fqn: 'demographics.emailAddress'
        },
        {
          elementKey: 'occupationStudent',
          formIndex: '1',
          inputType: 'text',
          label: 'Occupation/student',
          fqn: 'demographics.occupationStudent'
        },
        {
          elementKey: 'phn',
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
          tableCss: 'hr-table',
          fqn: 'demographics.patientService'
        },
        {
          elementKey: 'nextOfKinName',
          formIndex: '1',
          inputType: 'text',
          label: 'Next of kin name',
          fqn: 'demographics.nextOfKinName'
        },
        {
          elementKey: 'nextOfKinRelationship',
          formIndex: '1',
          inputType: 'select',
          label: 'Next of kin relationship',
          options: [
            {
              key: 'Wife',
              text: 'Wife'
            },
            {
              key: 'Husband',
              text: 'Husband'
            },
            {
              key: 'Mother',
              text: 'Mother'
            },
            {
              key: 'Father',
              text: 'Father'
            },
            {
              key: 'Guardian',
              text: 'Guardian'
            },
            {
              key: 'Sister',
              text: 'Sister'
            },
            {
              key: 'Brother',
              text: 'Brother'
            },
            {
              key: 'Daughter',
              text: 'Daughter'
            },
            {
              key: 'Son',
              text: 'Son'
            },
            {
              key: 'Aunt',
              text: 'Aunt'
            },
            {
              key: 'Uncle',
              text: 'Uncle'
            },
            {
              key: 'Grandmother',
              text: 'Grandmother'
            },
            {
              key: 'Grandfather',
              text: 'Grandfather'
            },
            {
              key: 'Friend',
              text: 'Friend'
            },
            {
              key: 'Other',
              text: 'Other'
            }
          ],
          fqn: 'demographics.nextOfKinRelationship'
        },
        {
          elementKey: 'nextOfKinPhone',
          formIndex: '1',
          inputType: 'text',
          label: 'Next of kin phone',
          tableCss: 'hr-table',
          fqn: 'demographics.nextOfKinPhone'
        },
        {
          elementKey: 'decisionMakerName',
          formIndex: '1',
          inputType: 'text',
          label: 'Decision maker name',
          fqn: 'demographics.decisionMakerName'
        },
        {
          elementKey: 'decisionMakerRelationship',
          formIndex: '1',
          inputType: 'select',
          label: 'Decision maker relationship',
          options: [
            {
              key: 'Spouse',
              text: 'Spouse'
            },
            {
              key: 'Child',
              text: 'Child'
            },
            {
              key: 'Parent',
              text: 'Parent'
            },
            {
              key: 'Sibling',
              text: 'Sibling'
            },
            {
              key: 'Grandparent',
              text: 'Grandparent'
            },
            {
              key: 'Grandchild',
              text: 'Grandchild'
            },
            {
              key: 'Friend',
              text: 'Friend'
            },
            {
              key: 'Anyone else related by partnership',
              text: 'Anyone else related by partnership'
            },
            {
              key: 'Public guardian and trustee employee',
              text: 'Public guardian and trustee employee'
            },
            {
              key: 'Other',
              text: 'Other'
            }
          ],
          fqn: 'demographics.decisionMakerRelationship'
        },
        {
          elementKey: 'decisionMakerPhone',
          formIndex: '1',
          inputType: 'text',
          label: 'Decision maker phone',
          fqn: 'demographics.decisionMakerPhone'
        }
      ],
      generated: '2022-05-05T17:05:01-07:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group1',
              formCss: 'section-divider',
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
                'indigenousIdentifyAs'
              ]
            },
            {
              elementKey: 'ehr_group2',
              formCss: 'section-divider',
              gIndex: '2',
              gChildren: [
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
                'patientService'
              ]
            },
            {
              elementKey: 'ehr_group3',
              gIndex: '3',
              gChildren: [
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
          elementKey: 'checkbox',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'No known allergies',
          fqn: 'allergies.checkbox'
        },
        {
          elementKey: 'text',
          formIndex: '1',
          inputType: 'text',
          label: 'Allergies',
          fqn: 'allergies.text'
        }
      ],
      generated: '2022-05-05T17:05:01-07:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group4',
              formCss: 'grid-left-to-right-1',
              gIndex: '1',
              gChildren: [
                'checkbox',
                'text'
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
      generated: '2022-05-05T17:05:01-07:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group5',
              formCss: 'grid-left-to-right-1',
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
          formIndex: '1',
          inputType: 'textarea',
          label: 'Psychosocial history',
          fqn: 'psychosocial.history'
        },
        {
          elementKey: 'diet',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Diet',
          fqn: 'psychosocial.diet'
        },
        {
          elementKey: 'livingSituation',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Living situation',
          fqn: 'psychosocial.livingSituation'
        },
        {
          elementKey: 'employmentSchool',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Employment/school',
          fqn: 'psychosocial.employmentSchool'
        },
        {
          elementKey: 'hobbies',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Hobbies',
          fqn: 'psychosocial.hobbies'
        },
        {
          elementKey: 'exercise',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Exercise',
          fqn: 'psychosocial.exercise'
        },
        {
          elementKey: 'exerciseText',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'text',
          label: 'Exercise',
          fqn: 'psychosocial.exerciseText'
        },
        {
          elementKey: 'spacer8',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Exercise',
          fqn: 'psychosocial.spacer8'
        },
        {
          elementKey: 'caffeineUse',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Caffeine use',
          fqn: 'psychosocial.caffeineUse'
        },
        {
          elementKey: 'caffeineUseText',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'text',
          label: 'Caffeine use',
          fqn: 'psychosocial.caffeineUseText'
        },
        {
          elementKey: 'spacer9',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Caffeine use',
          fqn: 'psychosocial.spacer9'
        },
        {
          elementKey: 'tobaccoUse',
          formIndex: '1',
          helperText: 'Have you used any tobacco products in the last 6 months?\nHave you used any tobacco products in the last 7 days?',
          inputType: 'checkbox',
          label: 'Tobacco use',
          fqn: 'psychosocial.tobaccoUse',
          helperHtml: '<p>Have you used any tobacco products in the last 6 months?</p>\n<p>Have you used any tobacco products in the last 7 days?</p>'
        },
        {
          elementKey: 'tobaccoUseText',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'text',
          label: 'Tobacco use',
          fqn: 'psychosocial.tobaccoUseText'
        },
        {
          elementKey: 'spacer10',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Tobacco use',
          fqn: 'psychosocial.spacer10'
        },
        {
          elementKey: 'cannabisUse',
          formIndex: '1',
          helperText: 'Have you used any cannabis products in the last 6 months?\nHave you used any cannabis products in the last 7 days?',
          inputType: 'checkbox',
          label: 'Cannabis use',
          fqn: 'psychosocial.cannabisUse',
          helperHtml: '<p>Have you used any cannabis products in the last 6 months?</p>\n<p>Have you used any cannabis products in the last 7 days?</p>'
        },
        {
          elementKey: 'cannabisUseText',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'text',
          label: 'Cannabis use',
          fqn: 'psychosocial.cannabisUseText'
        },
        {
          elementKey: 'spacer11',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Cannabis use',
          fqn: 'psychosocial.spacer11'
        },
        {
          elementKey: 'alcoholUse',
          formIndex: '1',
          helperText: 'CAGE questionnaire\nHave you ever felt that you should cut down on your drinking?\nHave you ever become annoyed by criticisms of your drinking?\nHave you ever felt guilty about your drinking?\nHave you ever had a morning eye opener to get rid of a hangover?',
          inputType: 'checkbox',
          label: 'Alcohol use',
          fqn: 'psychosocial.alcoholUse',
          helperHtml: '<p>CAGE questionnaire</p>\n<p>Have you ever felt that you should cut down on your drinking?</p>\n<p>Have you ever become annoyed by criticisms of your drinking?</p>\n<p>Have you ever felt guilty about your drinking?</p>\n<p>Have you ever had a morning eye opener to get rid of a hangover?</p>'
        },
        {
          elementKey: 'alcoholUseText',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'text',
          label: 'Alcohol use',
          fqn: 'psychosocial.alcoholUseText'
        },
        {
          elementKey: 'spacer12',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Alcohol use',
          fqn: 'psychosocial.spacer12'
        },
        {
          elementKey: 'substanceUse',
          formIndex: '1',
          helperText: 'Have you used any substances in the last 6 months?\nHave you used any substances in the last 7 days?\nIf so, make notes about which ones.',
          inputType: 'checkbox',
          label: 'Substance use',
          fqn: 'psychosocial.substanceUse',
          helperHtml: '<p>Have you used any substances in the last 6 months?</p>\n<p>Have you used any substances in the last 7 days?</p>\n<p>If so, make notes about which ones.</p>'
        },
        {
          elementKey: 'substanceUseText',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'text',
          label: 'Substance use',
          fqn: 'psychosocial.substanceUseText'
        },
        {
          elementKey: 'spacer13',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Substance use',
          fqn: 'psychosocial.spacer13'
        }
      ],
      generated: '2022-05-05T17:05:01-07:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group6',
              gIndex: '1',
              gChildren: [
                'history',
                'diet',
                'livingSituation',
                'employmentSchool',
                'hobbies'
              ]
            },
            {
              elementKey: 'ehr_group7',
              gIndex: '2',
              gChildren: [
                'exercise',
                'exerciseText',
                'spacer8',
                'caffeineUse',
                'caffeineUseText',
                'spacer9',
                'tobaccoUse',
                'tobaccoUseText',
                'spacer10',
                'cannabisUse',
                'cannabisUseText',
                'spacer11',
                'alcoholUse',
                'alcoholUseText',
                'spacer12',
                'substanceUse',
                'substanceUseText',
                'spacer13'
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
          formIndex: '1',
          inputType: 'text',
          label: 'Surgery/procedure',
          tableColumn: '2',
          fqn: 'surgical.procedure'
        },
        {
          elementKey: 'timeSince',
          formIndex: '1',
          helperText: 'Describe when this happened prior to current visit. E.g. 6 years ago',
          inputType: 'text',
          label: 'Time Since',
          tableColumn: '3',
          fqn: 'surgical.timeSince',
          helperHtml: '<p>Describe when this happened prior to current visit. E.g. 6 years ago</p>'
        },
        {
          elementKey: 'previousAdmissionsDate',
          formIndex: '2',
          helperText: 'Describe when this happened prior to current visit. E.g. 1 month ago',
          inputType: 'text',
          label: 'Date',
          tableColumn: '1',
          fqn: 'surgical.previousAdmissionsDate',
          helperHtml: '<p>Describe when this happened prior to current visit. E.g. 1 month ago</p>'
        },
        {
          elementKey: 'with',
          formIndex: '2',
          inputType: 'text',
          label: 'Appointment with',
          tableColumn: '2',
          fqn: 'surgical.with'
        },
        {
          elementKey: 'details',
          formIndex: '2',
          inputType: 'text',
          label: 'Appointment details',
          tableColumn: '3',
          fqn: 'surgical.details'
        },
        {
          elementKey: 'previousAdmissions',
          formIndex: '2',
          inputType: 'text',
          label: 'Previous appointment reason',
          tableColumn: '4',
          fqn: 'surgical.previousAdmissions'
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
      generated: '2022-05-05T17:05:01-07:00',
      pageElements: {
        pastSurgery: {
          elementKey: 'pastSurgery',
          tableKey: 'pastSurgery',
          isTable: true,
          hasRecHeader: false,
          label: 'Previous surgeries',
          addButtonText: 'Add a previous surgery',
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
            elementKey: 'pastSurgery',
            label: 'Previous surgeries',
            addButtonText: 'Add a previous surgery',
            formKey: 'pastSurgery',
            ehr_groups: [
              {
                elementKey: 'pastSurgery',
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
        previous: {
          elementKey: 'previous',
          tableKey: 'previous',
          isTable: true,
          hasRecHeader: false,
          label: 'Previous appointments',
          addButtonText: 'Add a previous appointment',
          ehr_list: [
            {
              ehr_list_index: '1',
              items: [
                'previousAdmissionsDate'
              ]
            },
            {
              ehr_list_index: '2',
              items: [
                'with'
              ]
            },
            {
              ehr_list_index: '3',
              items: [
                'details'
              ]
            },
            {
              ehr_list_index: '4',
              items: [
                'previousAdmissions'
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
            elementKey: 'previous',
            label: 'Previous appointments',
            addButtonText: 'Add a previous appointment',
            formKey: 'previous',
            ehr_groups: [
              {
                elementKey: 'previous',
                gIndex: '1',
                gChildren: [
                  'previousAdmissionsDate',
                  'with',
                  'details',
                  'previousAdmissions'
                ]
              },
              {
                elementKey: 'ehr_group14',
                formCss: 'grid-left-to-right-1',
                gIndex: '2',
                gChildren: [
                  'comments'
                ]
              }
            ],
            ehr_data: {
              previousAdmissionsDate: '',
              with: '',
              details: '',
              previousAdmissions: '',
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
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Hep A',
          fqn: 'immunization.hepA'
        },
        {
          elementKey: 'hepADate',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'date',
          label: 'Hep A',
          fqn: 'immunization.hepADate'
        },
        {
          elementKey: 'spacer16',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Hep A',
          fqn: 'immunization.spacer16'
        },
        {
          elementKey: 'hepB',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Hep B',
          fqn: 'immunization.hepB'
        },
        {
          elementKey: 'hepBDate',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'date',
          label: 'Hep B',
          fqn: 'immunization.hepBDate'
        },
        {
          elementKey: 'spacer17',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Hep B',
          fqn: 'immunization.spacer17'
        },
        {
          elementKey: 'mmr',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'MMR',
          fqn: 'immunization.mmr'
        },
        {
          elementKey: 'mmrDate',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'date',
          label: 'MMR',
          fqn: 'immunization.mmrDate'
        },
        {
          elementKey: 'spacer18',
          formIndex: '1',
          inputType: 'spacer',
          label: 'MMR',
          fqn: 'immunization.spacer18'
        },
        {
          elementKey: 'pneumococcal',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Pneumococcal',
          fqn: 'immunization.pneumococcal'
        },
        {
          elementKey: 'pneumococcalDate',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'date',
          label: 'Pneumococcal',
          fqn: 'immunization.pneumococcalDate'
        },
        {
          elementKey: 'spacer19',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Pneumococcal',
          fqn: 'immunization.spacer19'
        },
        {
          elementKey: 'polioDiptheriaPertussis',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Polio diptheria pertussis',
          fqn: 'immunization.polioDiptheriaPertussis'
        },
        {
          elementKey: 'polioDiptheriaPertussisDate',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'date',
          label: 'Polio diptheria pertussis',
          fqn: 'immunization.polioDiptheriaPertussisDate'
        },
        {
          elementKey: 'spacer20',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Polio diptheria pertussis',
          fqn: 'immunization.spacer20'
        },
        {
          elementKey: 'tb',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'TB',
          fqn: 'immunization.tb'
        },
        {
          elementKey: 'tbDate',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'date',
          label: 'TB',
          fqn: 'immunization.tbDate'
        },
        {
          elementKey: 'spacer21',
          formIndex: '1',
          inputType: 'spacer',
          label: 'TB',
          fqn: 'immunization.spacer21'
        },
        {
          elementKey: 'tetanus',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Tetanus',
          fqn: 'immunization.tetanus'
        },
        {
          elementKey: 'tetanusDate',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'date',
          label: 'Tetanus',
          fqn: 'immunization.tetanusDate'
        },
        {
          elementKey: 'spacer22',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Tetanus',
          fqn: 'immunization.spacer22'
        },
        {
          elementKey: 'other1',
          formIndex: '1',
          inputType: 'text',
          fqn: 'immunization.other1'
        },
        {
          elementKey: 'other1Date',
          formIndex: '1',
          inputType: 'date',
          fqn: 'immunization.other1Date'
        },
        {
          elementKey: 'spacer23',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'immunization.spacer23'
        },
        {
          elementKey: 'other2',
          formIndex: '1',
          inputType: 'text',
          fqn: 'immunization.other2'
        },
        {
          elementKey: 'other2Date',
          formIndex: '1',
          inputType: 'date',
          fqn: 'immunization.other2Date'
        },
        {
          elementKey: 'spacer24',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'immunization.spacer24'
        },
        {
          elementKey: 'other3',
          formIndex: '1',
          inputType: 'text',
          fqn: 'immunization.other3'
        },
        {
          elementKey: 'other3Date',
          formIndex: '1',
          inputType: 'date',
          fqn: 'immunization.other3Date'
        },
        {
          elementKey: 'spacer25',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'immunization.spacer25'
        }
      ],
      generated: '2022-05-05T17:05:01-07:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group15',
              gIndex: '1',
              gChildren: [
                'hepA',
                'hepADate',
                'spacer16',
                'hepB',
                'hepBDate',
                'spacer17',
                'mmr',
                'mmrDate',
                'spacer18',
                'pneumococcal',
                'pneumococcalDate',
                'spacer19',
                'polioDiptheriaPertussis',
                'polioDiptheriaPertussisDate',
                'spacer20',
                'tb',
                'tbDate',
                'spacer21',
                'tetanus',
                'tetanusDate',
                'spacer22',
                'other1',
                'other1Date',
                'spacer23',
                'other2',
                'other2Date',
                'spacer24',
                'other3',
                'other3Date',
                'spacer25'
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
      generated: '2022-05-05T17:05:01-07:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group26',
              formCss: 'grid-left-to-right-1',
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
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          fqn: 'careTeam.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '2',
          fqn: 'careTeam.profession'
        }
      ],
      generated: '2022-05-05T17:05:01-07:00',
      pageElements: {
        teams: {
          elementKey: 'teams',
          tableKey: 'teams',
          isTable: true,
          hasRecHeader: false,
          addButtonText: 'Add a care team member',
          ehr_list: [
            {
              ehr_list_index: '1',
              items: [
                'name'
              ]
            },
            {
              ehr_list_index: '2',
              items: [
                'profession'
              ]
            }
          ],
          form: {
            elementKey: 'teams',
            addButtonText: 'Add a care team member',
            formKey: 'teams',
            ehr_groups: [
              {
                elementKey: 'ehr_group27',
                gIndex: '1',
                gChildren: [
                  'name',
                  'profession'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: ''
            }
          }
        }
      }
    },
    pastAppointments: {
      pageDataKey: 'pastAppointments',
      pageTitle: 'Past appointments',
      pIndex: '9',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'encounterDate',
          formIndex: '1',
          inputType: 'text',
          label: 'Date',
          tableColumn: '1',
          fqn: 'pastAppointments.encounterDate'
        },
        {
          elementKey: 'site',
          formIndex: '1',
          inputType: 'text',
          label: 'Site',
          tableColumn: '2',
          fqn: 'pastAppointments.site'
        },
        {
          elementKey: 'diagnosis',
          formIndex: '1',
          inputType: 'text',
          label: 'Diagnosis',
          tableColumn: '3',
          fqn: 'pastAppointments.diagnosis'
        },
        {
          elementKey: 'mrp',
          formIndex: '1',
          inputType: 'text',
          label: 'Most responsible person',
          tableColumn: '4',
          fqn: 'pastAppointments.mrp'
        },
        {
          elementKey: 'appointmentDate',
          formIndex: '2',
          inputType: 'text',
          label: 'Appointment Day',
          tableColumn: '1',
          fqn: 'pastAppointments.appointmentDate'
        },
        {
          elementKey: 'site',
          formIndex: '2',
          inputType: 'text',
          label: 'Site',
          tableColumn: '2',
          fqn: 'pastAppointments.site'
        },
        {
          elementKey: 'reasonForVisit',
          formIndex: '2',
          inputType: 'text',
          label: 'Reason for visit',
          tableColumn: '3',
          fqn: 'pastAppointments.reasonForVisit'
        },
        {
          elementKey: 'diagnosis',
          formIndex: '2',
          inputType: 'text',
          label: 'Diagnosis',
          tableColumn: '4',
          fqn: 'pastAppointments.diagnosis'
        }
      ],
      generated: '2022-05-05T17:05:01-07:00',
      pageElements: {
        encounters: {
          elementKey: 'encounters',
          tableKey: 'encounters',
          isTable: true,
          hasRecHeader: false,
          addButtonText: 'Add a past appointment',
          ehr_list: [
            {
              ehr_list_index: '1',
              items: [
                'encounterDate'
              ]
            },
            {
              ehr_list_index: '2',
              items: [
                'site'
              ]
            },
            {
              ehr_list_index: '3',
              items: [
                'diagnosis'
              ]
            },
            {
              ehr_list_index: '4',
              items: [
                'mrp'
              ]
            }
          ],
          form: {
            elementKey: 'encounters',
            addButtonText: 'Add a past appointment',
            formKey: 'encounters',
            ehr_groups: [
              {
                elementKey: 'encounters',
                gIndex: '1',
                gChildren: [
                  'encounterDate',
                  'site',
                  'diagnosis',
                  'mrp'
                ]
              }
            ],
            ehr_data: {
              encounterDate: '',
              site: '',
              diagnosis: '',
              mrp: ''
            }
          }
        },
        outpatientAppointments: {
          elementKey: 'outpatientAppointments',
          tableKey: 'outpatientAppointments',
          isTable: true,
          hasRecHeader: false,
          addButtonText: 'Add an outpatient appointment',
          ehr_list: [
            {
              ehr_list_index: '1',
              items: [
                'appointmentDate'
              ]
            },
            {
              ehr_list_index: '2',
              items: [
                'site'
              ]
            },
            {
              ehr_list_index: '3',
              items: [
                'reasonForVisit'
              ]
            },
            {
              ehr_list_index: '4',
              items: [
                'diagnosis'
              ]
            }
          ],
          form: {
            elementKey: 'outpatientAppointments',
            addButtonText: 'Add an outpatient appointment',
            formKey: 'outpatientAppointments',
            ehr_groups: [
              {
                elementKey: 'outpatientAppointments',
                gIndex: '1',
                gChildren: [
                  'appointmentDate',
                  'site',
                  'reasonForVisit',
                  'diagnosis'
                ]
              }
            ],
            ehr_data: {
              appointmentDate: '',
              site: '',
              reasonForVisit: '',
              diagnosis: ''
            }
          }
        }
      }
    }
  }
}
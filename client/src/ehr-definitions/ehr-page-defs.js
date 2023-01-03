const DEFS = {
  demographics: {
    pageDataKey: 'demographics',
    pageTitle: 'Demographics',
    pIndex: '1',
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
        dependentOn: 'age:personAge',
        formIndex: '1',
        inputType: 'mainDOB',
        label: 'Date of birth',
        fqn: 'demographics.dateOfBirth'
      },
      {
        elementKey: 'personAge',
        formIndex: '1',
        inputType: 'personAge',
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
    pageElements: {
      pageForm: {
        elementKey: 'pageForm',
        formKey: 'pageForm',
        isPageForm: true,
        ehr_groups: [
          {
            elementKey: 'ehr_group6',
            formCss: 'grid-left-to-right-1',
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
        elementKey: 'covid',
        formIndex: '1',
        inputType: 'checkbox',
        label: 'COVID-19',
        fqn: 'immunization.covid'
      },
      {
        elementKey: 'covidDate',
        formIndex: '1',
        formOption: 'hideLabel',
        inputType: 'date',
        label: 'COVID-19',
        fqn: 'immunization.covidDate'
      },
      {
        elementKey: 'spacer23',
        formIndex: '1',
        inputType: 'spacer',
        label: 'COVID-19',
        fqn: 'immunization.spacer23'
      },
      {
        elementKey: 'other1',
        formIndex: '1',
        inputType: 'checkbox',
        label: 'Other',
        fqn: 'immunization.other1'
      },
      {
        elementKey: 'other1Date',
        formIndex: '1',
        formOption: 'hideLabel',
        inputType: 'date',
        label: 'Other',
        fqn: 'immunization.other1Date'
      },
      {
        elementKey: 'spacer24',
        formIndex: '1',
        inputType: 'spacer',
        label: 'Other',
        fqn: 'immunization.spacer24'
      },
      {
        elementKey: 'other2',
        formIndex: '1',
        inputType: 'checkbox',
        label: 'Other',
        fqn: 'immunization.other2'
      },
      {
        elementKey: 'other2Date',
        formIndex: '1',
        formOption: 'hideLabel',
        inputType: 'date',
        label: 'Other',
        fqn: 'immunization.other2Date'
      },
      {
        elementKey: 'spacer25',
        formIndex: '1',
        inputType: 'spacer',
        label: 'Other',
        fqn: 'immunization.spacer25'
      },
      {
        elementKey: 'other3',
        formIndex: '1',
        inputType: 'checkbox',
        label: 'Other',
        fqn: 'immunization.other3'
      },
      {
        elementKey: 'other3Date',
        formIndex: '1',
        formOption: 'hideLabel',
        inputType: 'date',
        label: 'Other',
        fqn: 'immunization.other3Date'
      },
      {
        elementKey: 'spacer26',
        formIndex: '1',
        inputType: 'spacer',
        label: 'Other',
        fqn: 'immunization.spacer26'
      }
    ],
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
              'covid',
              'covidDate',
              'spacer23',
              'other1',
              'other1Date',
              'spacer24',
              'other2',
              'other2Date',
              'spacer25',
              'other3',
              'other3Date',
              'spacer26'
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
    pageElements: {
      pageForm: {
        elementKey: 'pageForm',
        formKey: 'pageForm',
        isPageForm: true,
        ehr_groups: [
          {
            elementKey: 'ehr_group27',
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
    pageElements: {
      teams: {
        elementKey: 'teams',
        tableKey: 'teams',
        isTable: true,
        hasRecHeader: false,
        label: 'Care team',
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
          label: 'Care team',
          addButtonText: 'Add a care team member',
          formKey: 'teams',
          ehr_groups: [
            {
              elementKey: 'ehr_group28',
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
    pageElements: {
      encounters: {
        elementKey: 'encounters',
        tableKey: 'encounters',
        isTable: true,
        hasRecHeader: false,
        label: 'Past encounters',
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
          label: 'Past encounters',
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
        label: 'Past outpatient appointments',
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
          label: 'Past outpatient appointments',
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
  },
  visit: {
    pageDataKey: 'visit',
    pageTitle: 'Visit details and location',
    pIndex: '10',
    hasGridTable: true,
    hasGridForm: true,
    pageChildren: [
      {
        elementKey: 'admissionDay',
        defaultValue: '0',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Admission day',
        mandatory: true,
        fqn: 'visit.admissionDay'
      },
      {
        elementKey: 'admissionTime',
        defaultValue: '900',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Admission time',
        mandatory: true,
        fqn: 'visit.admissionTime'
      },
      {
        elementKey: 'status',
        formIndex: '1',
        inputType: 'select',
        label: 'Admission status',
        mandatory: true,
        options: [
          {
            key: 'Admission in progress',
            text: 'Admission in progress'
          },
          {
            key: 'Admitted',
            text: 'Admitted'
          },
          {
            key: 'Inpatient',
            text: 'Inpatient'
          },
          {
            key: 'Outpatient',
            text: 'Outpatient'
          },
          {
            key: 'Surgical day care',
            text: 'Surgical day care'
          },
          {
            key: 'Discharge pending',
            text: 'Discharge pending'
          },
          {
            key: 'Discharged',
            text: 'Discharged'
          }
        ],
        fqn: 'visit.status'
      },
      {
        elementKey: 'locationLabel',
        formIndex: '1',
        inputType: 'form_label',
        label: 'Location records are below',
        fqn: 'visit.locationLabel'
      },
      {
        elementKey: 'consentForTreatment',
        formIndex: '1',
        inputType: 'checkbox',
        label: 'Consent for treatment',
        fqn: 'visit.consentForTreatment'
      },
      {
        elementKey: 'consentForBlood',
        formIndex: '1',
        inputType: 'checkbox',
        label: 'Consent for blood products',
        tableCss: 'hr-table',
        fqn: 'visit.consentForBlood'
      },
      {
        elementKey: 'codeStatus',
        formIndex: '1',
        inputType: 'text',
        label: 'Code status',
        fqn: 'visit.codeStatus'
      },
      {
        elementKey: 'diagnosis',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Physician admitting diagnosis',
        fqn: 'visit.diagnosis'
      },
      {
        elementKey: 'notes',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Admitting notes',
        fqn: 'visit.notes'
      },
      {
        elementKey: 'location',
        formIndex: '2',
        helperText: 'hospital, ward #, room #, home, out patient clinic',
        inputType: 'text',
        label: 'Patient location',
        mandatory: true,
        tableColumn: '1',
        tableCss: 'hr-table',
        fqn: 'visit.location',
        helperHtml: '<p>hospital, ward #, room #, home, out patient clinic</p>'
      },
      {
        elementKey: 'transferInDay',
        formIndex: '2',
        inputType: 'visitDay',
        label: 'Transfer in day',
        tableColumn: '2',
        fqn: 'visit.transferInDay'
      },
      {
        elementKey: 'transferInTime',
        formIndex: '2',
        inputType: 'visitTime',
        label: 'Transfer in time',
        tableColumn: '3',
        fqn: 'visit.transferInTime'
      },
      {
        elementKey: 'aSpacer',
        formIndex: '2',
        inputType: 'spacer',
        fqn: 'visit.aSpacer'
      },
      {
        elementKey: 'transferOutDay',
        formIndex: '2',
        inputType: 'visitDay',
        label: 'Transfer out day',
        tableColumn: '4',
        fqn: 'visit.transferOutDay'
      },
      {
        elementKey: 'transferOutTime',
        formIndex: '2',
        inputType: 'visitTime',
        label: 'Transfer out time',
        tableColumn: '5',
        fqn: 'visit.transferOutTime'
      }
    ],
    pageElements: {
      pageForm: {
        elementKey: 'pageForm',
        formKey: 'pageForm',
        isPageForm: true,
        ehr_groups: [
          {
            elementKey: 'ehr_group29',
            gIndex: '1',
            gChildren: [
              'admissionDay',
              'admissionTime',
              'status',
              'locationLabel',
              'consentForTreatment',
              'consentForBlood',
              'codeStatus'
            ]
          },
          {
            elementKey: 'ehr_group30',
            formCss: 'grid-left-to-right-1',
            gIndex: '2',
            gChildren: [
              'diagnosis',
              'notes'
            ]
          }
        ]
      },
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: false,
        label: 'Patient Location',
        addButtonText: 'Add a patient location',
        ehr_list: [
          {
            tableCss: 'hr-table',
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
          label: 'Patient Location',
          addButtonText: 'Add a patient location',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group31',
              formCss: 'grid-left-to-right-1',
              gIndex: '1',
              gChildren: [
                'location'
              ]
            },
            {
              elementKey: 'ehr_group32',
              gIndex: '2',
              gChildren: [
                'transferInDay',
                'transferInTime',
                'aSpacer',
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
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'vitals.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'vitals.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'vitals.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'vitals.time'
      },
      {
        elementKey: 'systolic',
        addButtonText: 'Add a row to the test table',
        formIndex: '1',
        inputType: 'text',
        label: 'Systolic blood pressure',
        tableColumn: '2',
        tableLabel: 'Systolic blood pressure',
        validation: 'numeric',
        fqn: 'vitals.systolic'
      },
      {
        elementKey: 'diastolic',
        formIndex: '1',
        inputType: 'text',
        label: 'Diastolic blood pressure',
        tableColumn: '3',
        tableLabel: 'Diastolic blood pressure',
        validation: 'numeric',
        fqn: 'vitals.diastolic'
      },
      {
        elementKey: 'patientPosition',
        formIndex: '1',
        inputType: 'select',
        label: 'Patient position',
        options: [
          {
            key: 'Supine',
            text: 'Supine'
          },
          {
            key: 'Sitting',
            text: 'Sitting'
          },
          {
            key: 'Standing',
            text: 'Standing'
          }
        ],
        tableColumn: '4',
        tableCss: 'hr-table',
        tableLabel: 'Patient position',
        fqn: 'vitals.patientPosition'
      },
      {
        elementKey: 'temperature',
        formIndex: '1',
        inputType: 'text',
        label: 'Temperature',
        suffix: 'Celcius',
        tableColumn: '5',
        tableLabel: 'Temperature',
        validation: 'numeric',
        fqn: 'vitals.temperature'
      },
      {
        elementKey: 'source',
        formIndex: '1',
        inputType: 'select',
        label: 'Temperature source',
        options: [
          {
            key: 'Oral',
            text: 'Oral'
          },
          {
            key: 'Axilla',
            text: 'Axilla'
          },
          {
            key: 'Rectal',
            text: 'Rectal'
          },
          {
            key: 'Tympanic',
            text: 'Tympanic'
          }
        ],
        tableColumn: '6',
        tableCss: 'hr-table',
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
        formIndex: '1',
        inputType: 'select',
        label: 'Pulse site',
        options: [
          {
            key: 'Peripheral',
            text: 'Peripheral'
          },
          {
            key: 'Other',
            text: 'Other'
          }
        ],
        tableColumn: '7',
        tableLabel: 'Pulse site',
        fqn: 'vitals.strength'
      },
      {
        elementKey: 'rate',
        formIndex: '1',
        inputType: 'text',
        label: 'Pulse rate',
        tableColumn: '8',
        tableLabel: 'Pulse rate',
        validation: 'numeric',
        fqn: 'vitals.rate'
      },
      {
        elementKey: 'rhythm',
        formIndex: '1',
        inputType: 'select',
        label: 'Pulse rhythm',
        options: [
          {
            key: 'Regular',
            text: 'Regular'
          },
          {
            key: 'Irregular',
            text: 'Irregular'
          }
        ],
        tableColumn: '9',
        tableCss: 'hr-table',
        tableLabel: 'Pulse rhythm',
        fqn: 'vitals.rhythm'
      },
      {
        elementKey: 'respirationRate',
        formIndex: '1',
        inputType: 'text',
        label: 'Respiration rate',
        tableColumn: '10',
        tableLabel: 'Respiration rate',
        validation: 'numeric',
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
        formIndex: '1',
        inputType: 'text',
        label: 'Oxygen saturation',
        suffix: '%',
        tableColumn: '11',
        tableLabel: 'Oxygen saturation',
        validation: 'numeric',
        fqn: 'vitals.oxygenSaturation'
      },
      {
        elementKey: 'oxygenMode',
        formIndex: '1',
        inputType: 'select',
        label: 'Oxygen mode',
        options: [
          {
            key: 'Room air',
            text: 'Room air'
          },
          {
            key: 'Nasal prongs',
            text: 'Nasal prongs'
          },
          {
            key: 'Simple face mask',
            text: 'Simple face mask'
          },
          {
            key: 'Rebreathing face mask',
            text: 'Rebreathing face mask'
          },
          {
            key: 'Optiflow',
            text: 'Optiflow'
          }
        ],
        tableColumn: '12',
        tableLabel: 'Oxygen mode',
        fqn: 'vitals.oxygenMode'
      },
      {
        elementKey: 'flowRate',
        formIndex: '1',
        inputType: 'text',
        label: 'Flow rate',
        suffix: '/lpm',
        tableColumn: '13',
        tableLabel: 'Flow rate',
        validation: 'numeric',
        fqn: 'vitals.flowRate'
      },
      {
        elementKey: 'bloodSugar',
        formIndex: '1',
        inputType: 'text',
        label: 'Blood sugar',
        suffix: 'mmol/L',
        tableColumn: '14',
        tableLabel: 'Blood sugar',
        validation: 'numeric',
        fqn: 'vitals.bloodSugar'
      },
      {
        elementKey: 'cvp',
        formIndex: '1',
        inputType: 'text',
        label: 'CVP',
        tableColumn: '15',
        tableLabel: 'CVP (Central Venous Pressure)',
        validation: 'cvp',
        fqn: 'vitals.cvp'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Vital signs',
        addButtonText: 'Add vital signs',
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
            label: 'Systolic blood pressure',
            ehr_list_index: '2',
            items: [
              'systolic'
            ]
          },
          {
            label: 'Diastolic blood pressure',
            ehr_list_index: '3',
            items: [
              'diastolic'
            ]
          },
          {
            label: 'Patient position',
            tableCss: 'hr-table',
            ehr_list_index: '4',
            items: [
              'patientPosition'
            ]
          },
          {
            label: 'Temperature',
            ehr_list_index: '5',
            items: [
              'temperature'
            ]
          },
          {
            label: 'Source',
            tableCss: 'hr-table',
            ehr_list_index: '6',
            items: [
              'source'
            ]
          },
          {
            label: 'Pulse site',
            ehr_list_index: '7',
            items: [
              'strength'
            ]
          },
          {
            label: 'Pulse rate',
            ehr_list_index: '8',
            items: [
              'rate'
            ]
          },
          {
            label: 'Pulse rhythm',
            tableCss: 'hr-table',
            ehr_list_index: '9',
            items: [
              'rhythm'
            ]
          },
          {
            label: 'Respiration rate',
            ehr_list_index: '10',
            items: [
              'respirationRate'
            ]
          },
          {
            label: 'Oxygen saturation',
            ehr_list_index: '11',
            items: [
              'oxygenSaturation'
            ]
          },
          {
            label: 'Oxygen mode',
            ehr_list_index: '12',
            items: [
              'oxygenMode'
            ]
          },
          {
            label: 'Flow rate',
            ehr_list_index: '13',
            items: [
              'flowRate'
            ]
          },
          {
            label: 'Blood sugar',
            ehr_list_index: '14',
            items: [
              'bloodSugar'
            ]
          },
          {
            label: 'CVP (Central Venous Pressure)',
            ehr_list_index: '15',
            items: [
              'cvp'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Vital signs',
          addButtonText: 'Add vital signs',
          formOption: 'transpose',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group33',
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
              elementKey: 'ehr_group34',
              gIndex: '2',
              gChildren: [
                'systolic',
                'diastolic',
                'patientPosition',
                'temperature',
                'source',
                'spacer35',
                'strength',
                'rate',
                'rhythm',
                'respirationRate',
                'spacer36',
                'spacer37',
                'oxygenSaturation',
                'oxygenMode',
                'flowRate',
                'bloodSugar',
                'cvp'
              ]
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            systolic: '',
            diastolic: '',
            patientPosition: '',
            temperature: '',
            source: '',
            strength: '',
            rate: '',
            rhythm: '',
            respirationRate: '',
            oxygenSaturation: '',
            oxygenMode: '',
            flowRate: '',
            bloodSugar: '',
            cvp: ''
          }
        }
      }
    }
  },
  fluidBalance: {
    pageDataKey: 'fluidBalance',
    pageTitle: 'Fluid balance',
    pIndex: '12',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'fluidBalance.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'fluidBalance.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'fluidBalance.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'fluidBalance.time'
      },
      {
        elementKey: 'fluidIn',
        formIndex: '1',
        inputType: 'text',
        label: 'Fluid in',
        tableColumn: '2',
        tableLabel: 'Fluid in',
        fqn: 'fluidBalance.fluidIn'
      },
      {
        elementKey: 'fluidOut',
        formIndex: '1',
        inputType: 'text',
        label: 'Fluid out',
        tableColumn: '3',
        tableLabel: 'Fluid out',
        fqn: 'fluidBalance.fluidOut'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Fluid balance',
        addButtonText: 'Add a fluid in/out record',
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
            label: 'Fluid in',
            ehr_list_index: '2',
            items: [
              'fluidIn'
            ]
          },
          {
            label: 'Fluid out',
            ehr_list_index: '3',
            items: [
              'fluidOut'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Fluid balance',
          addButtonText: 'Add a fluid in/out record',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group38',
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
              elementKey: 'ehr_group39',
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
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'neurological.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'neurological.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'neurological.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'neurological.time'
      },
      {
        elementKey: 'alert',
        formIndex: '1',
        formCss: 'grid-span-2-columns',
        inputType: 'checkset',
        label: 'Status',
        options: [
          {
            key: 'Alert',
            text: 'Alert'
          },
          {
            key: 'Oriented',
            text: 'Oriented'
          },
          {
            key: 'Confused',
            text: 'Confused'
          },
          {
            key: 'Drowsy',
            text: 'Drowsy'
          },
          {
            key: 'Unresponsive',
            text: 'Unresponsive'
          },
          {
            key: 'Dizziness',
            text: 'Dizziness'
          },
          {
            key: 'Blurred vision',
            text: 'Blurred vision'
          }
        ],
        tableColumn: '2',
        tableCss: 'hr-table',
        tableLabel: 'Status',
        fqn: 'neurological.alert'
      },
      {
        elementKey: 'eyeOpening',
        formIndex: '1',
        inputType: 'select',
        label: 'Eye opening',
        options: [
          {
            key: '0 = Non testable',
            text: '0 = Non testable'
          },
          {
            key: '1 = None',
            text: '1 = None'
          },
          {
            key: '2 = To pressure',
            text: '2 = To pressure'
          },
          {
            key: '3 = To sound',
            text: '3 = To sound'
          },
          {
            key: '4 = Spontaneous',
            text: '4 = Spontaneous'
          }
        ],
        passToFunction: 'glasgowCalculation',
        tableColumn: '3',
        tableLabel: 'Eye opening',
        fqn: 'neurological.eyeOpening'
      },
      {
        elementKey: 'verbalResponse',
        formIndex: '1',
        inputType: 'select',
        label: 'Verbal response',
        options: [
          {
            key: '0 = Non testable',
            text: '0 = Non testable'
          },
          {
            key: '1 = None',
            text: '1 = None'
          },
          {
            key: '2 = Sounds',
            text: '2 = Sounds'
          },
          {
            key: '3 = Words',
            text: '3 = Words'
          },
          {
            key: '4 = Confused',
            text: '4 = Confused'
          },
          {
            key: '5 = Oriented',
            text: '5 = Oriented'
          }
        ],
        passToFunction: 'glasgowCalculation',
        tableColumn: '4',
        tableLabel: 'Verbal response',
        fqn: 'neurological.verbalResponse'
      },
      {
        elementKey: 'bestMotorResponse',
        formIndex: '1',
        inputType: 'select',
        label: 'Best motor response',
        options: [
          {
            key: '0 = Non testable',
            text: '0 = Non testable'
          },
          {
            key: '1 = None',
            text: '1 = None'
          },
          {
            key: '2 = Extension',
            text: '2 = Extension'
          },
          {
            key: '3 = Normal flexion',
            text: '3 = Normal flexion'
          },
          {
            key: '4 = Abnormal flexion',
            text: '4 = Abnormal flexion'
          },
          {
            key: '5 = Localising',
            text: '5 = Localising'
          },
          {
            key: '6 = Obeys commands',
            text: '6 = Obeys commands'
          }
        ],
        passToFunction: 'glasgowCalculation',
        tableColumn: '5',
        tableLabel: 'Best motor response',
        fqn: 'neurological.bestMotorResponse'
      },
      {
        elementKey: 'glasgowCalculation',
        calculationType: 'sum',
        defaultValue: '0',
        formIndex: '1',
        inputType: 'calculatedValue',
        label: 'Glasgow Coma Scale',
        options: [
          {
            key: '=14+14+14',
            text: '=14+14+14'
          }
        ],
        tableColumn: '6',
        tableCss: 'hr-table',
        tableLabel: 'Glasgow Coma Scale',
        fqn: 'neurological.glasgowCalculation'
      },
      {
        elementKey: 'loss',
        formIndex: '1',
        inputType: 'select',
        label: 'Loss of conciousness',
        options: [
          {
            key: 'No',
            text: 'No'
          },
          {
            key: 'Yes',
            text: 'Yes'
          },
          {
            key: 'Unknown',
            text: 'Unknown'
          }
        ],
        tableColumn: '7',
        tableLabel: 'Loss of conciousness',
        fqn: 'neurological.loss'
      },
      {
        elementKey: 'duration',
        formIndex: '1',
        inputType: 'text',
        label: 'Duration',
        tableColumn: '8',
        tableCss: 'hr-table',
        tableLabel: 'Duration',
        fqn: 'neurological.duration'
      },
      {
        elementKey: 'leftPupilSize',
        formIndex: '1',
        inputType: 'select',
        label: 'Left pupil size',
        options: [
          {
            key: '1',
            text: '1'
          },
          {
            key: '2',
            text: '2'
          },
          {
            key: '3',
            text: '3'
          },
          {
            key: '4',
            text: '4'
          },
          {
            key: '5',
            text: '5'
          },
          {
            key: '6',
            text: '6'
          },
          {
            key: '7',
            text: '7'
          },
          {
            key: '8',
            text: '8'
          }
        ],
        tableColumn: '9',
        tableLabel: 'Left pupil size',
        fqn: 'neurological.leftPupilSize'
      },
      {
        elementKey: 'leftPupilResponseToLight',
        formIndex: '1',
        inputType: 'select',
        label: 'Left pupil response to light',
        options: [
          {
            key: 'Brisk',
            text: 'Brisk'
          },
          {
            key: 'Sluggish',
            text: 'Sluggish'
          },
          {
            key: 'Fixed',
            text: 'Fixed'
          }
        ],
        tableColumn: '10',
        tableLabel: 'Left pupil response to light',
        fqn: 'neurological.leftPupilResponseToLight'
      },
      {
        elementKey: 'spacer45',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'neurological.spacer45'
      },
      {
        elementKey: 'rightPupilSize',
        formIndex: '1',
        inputType: 'select',
        label: 'Right pupil size',
        options: [
          {
            key: '1',
            text: '1'
          },
          {
            key: '2',
            text: '2'
          },
          {
            key: '3',
            text: '3'
          },
          {
            key: '4',
            text: '4'
          },
          {
            key: '5',
            text: '5'
          },
          {
            key: '6',
            text: '6'
          },
          {
            key: '7',
            text: '7'
          },
          {
            key: '8',
            text: '8'
          }
        ],
        tableColumn: '11',
        tableLabel: 'Right pupil size',
        fqn: 'neurological.rightPupilSize'
      },
      {
        elementKey: 'rightPupilResponseToLight',
        formIndex: '1',
        inputType: 'select',
        label: 'Right pupil response to light',
        options: [
          {
            key: 'Brisk',
            text: 'Brisk'
          },
          {
            key: 'Sluggish',
            text: 'Sluggish'
          },
          {
            key: 'Fixed',
            text: 'Fixed'
          }
        ],
        tableColumn: '12',
        tableLabel: 'Right pupil response to light',
        fqn: 'neurological.rightPupilResponseToLight'
      },
      {
        elementKey: 'bothPupils',
        formIndex: '1',
        inputType: 'select',
        label: 'Both pupils',
        options: [
          {
            key: 'Equal',
            text: 'Equal'
          },
          {
            key: 'Unequal',
            text: 'Unequal'
          }
        ],
        tableColumn: '13',
        tableLabel: 'Both pupils',
        fqn: 'neurological.bothPupils'
      },
      {
        elementKey: 'comments',
        formIndex: '1',
        formCss: 'grid-span-2-columns',
        inputType: 'textarea',
        label: 'General comments',
        tableColumn: '14',
        tableCss: 'hr-table',
        tableLabel: 'General comments',
        fqn: 'neurological.comments'
      },
      {
        elementKey: 'resources',
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
            key: '0 = Alert; keenly responsive',
            text: '0 = Alert; keenly responsive'
          },
          {
            key: '1 = Not alert; but arousable by minor stimulation',
            text: '1 = Not alert; but arousable by minor stimulation'
          },
          {
            key: '2 = Not alert; requires repeated stimulation',
            text: '2 = Not alert; requires repeated stimulation'
          },
          {
            key: '3 = Unresponsive or responds only with reflex',
            text: '3 = Unresponsive or responds only with reflex'
          }
        ],
        passToFunction: 'strokeAssessmentCalculation',
        tableColumn: '15',
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
            key: '0 = Answers two questions correctly',
            text: '0 = Answers two questions correctly'
          },
          {
            key: '1 = Answers one question correctly',
            text: '1 = Answers one question correctly'
          },
          {
            key: '2 = Answers neither question correctly',
            text: '2 = Answers neither question correctly'
          }
        ],
        passToFunction: 'strokeAssessmentCalculation',
        tableColumn: '16',
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
            key: '0 = Performs both tasks correctly',
            text: '0 = Performs both tasks correctly'
          },
          {
            key: '1 = Performs one task correctly',
            text: '1 = Performs one task correctly'
          },
          {
            key: '2 = Performs neither task correctly',
            text: '2 = Performs neither task correctly'
          }
        ],
        passToFunction: 'strokeAssessmentCalculation',
        tableColumn: '17',
        tableCss: 'hr-table',
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
            key: '0 = No drift',
            text: '0 = No drift'
          },
          {
            key: '1 = Drift',
            text: '1 = Drift'
          },
          {
            key: '2 = Some effort against gravity',
            text: '2 = Some effort against gravity'
          },
          {
            key: '3 = No effort against gravity; limb falls',
            text: '3 = No effort against gravity; limb falls'
          },
          {
            key: '4 = No movement',
            text: '4 = No movement'
          }
        ],
        passToFunction: 'strokeAssessmentCalculation',
        tableColumn: '18',
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
            key: '0 = No drift',
            text: '0 = No drift'
          },
          {
            key: '1 = Drift',
            text: '1 = Drift'
          },
          {
            key: '2 = Some effort against gravity',
            text: '2 = Some effort against gravity'
          },
          {
            key: '3 = No effort against gravity; limb falls',
            text: '3 = No effort against gravity; limb falls'
          },
          {
            key: '4 = No movement',
            text: '4 = No movement'
          }
        ],
        passToFunction: 'strokeAssessmentCalculation',
        tableColumn: '19',
        tableLabel: 'Motor - right arm',
        fqn: 'neurological.motorRightArm'
      },
      {
        elementKey: 'spacer48',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'neurological.spacer48'
      },
      {
        elementKey: 'motorLeftLeg',
        formIndex: '1',
        inputType: 'select',
        label: 'Motor - left leg',
        options: [
          {
            key: '0 = No drift',
            text: '0 = No drift'
          },
          {
            key: '1 = Drift',
            text: '1 = Drift'
          },
          {
            key: '2 = Some effort against gravity',
            text: '2 = Some effort against gravity'
          },
          {
            key: '3 = No effort against gravity',
            text: '3 = No effort against gravity'
          },
          {
            key: '4 = No movement',
            text: '4 = No movement'
          }
        ],
        passToFunction: 'strokeAssessmentCalculation',
        tableColumn: '20',
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
            key: '0 = No drift',
            text: '0 = No drift'
          },
          {
            key: '1 = Drift',
            text: '1 = Drift'
          },
          {
            key: '2 = Some effort against gravity',
            text: '2 = Some effort against gravity'
          },
          {
            key: '3 = No effort against gravity',
            text: '3 = No effort against gravity'
          },
          {
            key: '4 = No movement',
            text: '4 = No movement'
          }
        ],
        passToFunction: 'strokeAssessmentCalculation',
        tableColumn: '21',
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
            key: '0 = Absent',
            text: '0 = Absent'
          },
          {
            key: '1 = Present in one limb',
            text: '1 = Present in one limb'
          },
          {
            key: '2 = Present in two limbs',
            text: '2 = Present in two limbs'
          }
        ],
        passToFunction: 'strokeAssessmentCalculation',
        tableColumn: '22',
        tableCss: 'hr-table',
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
            key: '0 = Normal',
            text: '0 = Normal'
          },
          {
            key: '1 = Partial gaze palsy',
            text: '1 = Partial gaze palsy'
          },
          {
            key: '2 = Forced deviation',
            text: '2 = Forced deviation'
          }
        ],
        passToFunction: 'strokeAssessmentCalculation',
        tableColumn: '23',
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
            key: '0 = No visual loss',
            text: '0 = No visual loss'
          },
          {
            key: '1 = Partial hemianopia',
            text: '1 = Partial hemianopia'
          },
          {
            key: '2 = Partial paralysis',
            text: '2 = Partial paralysis'
          },
          {
            key: '3 = Complete paralysis of one or both sides',
            text: '3 = Complete paralysis of one or both sides'
          }
        ],
        passToFunction: 'strokeAssessmentCalculation',
        tableColumn: '24',
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
            key: '0 = Normal symmetric movements',
            text: '0 = Normal symmetric movements'
          },
          {
            key: '1 = Minor paralysis',
            text: '1 = Minor paralysis'
          },
          {
            key: '2 = Partial paralysis',
            text: '2 = Partial paralysis'
          },
          {
            key: '3 = Complete paralysis of one or both sides',
            text: '3 = Complete paralysis of one or both sides'
          }
        ],
        passToFunction: 'strokeAssessmentCalculation',
        tableColumn: '25',
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
            key: '0 = Normal; no sensory loss',
            text: '0 = Normal; no sensory loss'
          },
          {
            key: '1 = Mild-to-moderate sensory loss',
            text: '1 = Mild-to-moderate sensory loss'
          },
          {
            key: '2 = Severe to total sensory loss',
            text: '2 = Severe to total sensory loss'
          }
        ],
        passToFunction: 'strokeAssessmentCalculation',
        tableColumn: '26',
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
            key: '0 = No aphasia; normal',
            text: '0 = No aphasia; normal'
          },
          {
            key: '1 = Mild to moderate aphasia',
            text: '1 = Mild to moderate aphasia'
          },
          {
            key: '2 = Severe aphasia',
            text: '2 = Severe aphasia'
          },
          {
            key: '3 = Mute, global aphasia',
            text: '3 = Mute, global aphasia'
          }
        ],
        passToFunction: 'strokeAssessmentCalculation',
        tableColumn: '27',
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
            key: '0 = Normal',
            text: '0 = Normal'
          },
          {
            key: '1 = Mild to moderate',
            text: '1 = Mild to moderate'
          },
          {
            key: '2 = Severe dysarthria',
            text: '2 = Severe dysarthria'
          }
        ],
        passToFunction: 'strokeAssessmentCalculation',
        tableColumn: '28',
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
            key: '0 = No abnormality',
            text: '0 = No abnormality'
          },
          {
            key: '1 = Visual, tactile, auditory, spatial, or personal inattention',
            text: '1 = Visual, tactile, auditory, spatial, or personal inattention'
          },
          {
            key: '2 = Profound hemi-inattention or extinction',
            text: '2 = Profound hemi-inattention or extinction'
          }
        ],
        passToFunction: 'strokeAssessmentCalculation',
        tableColumn: '29',
        tableCss: 'hr-table',
        tableLabel: 'Extinction and inattention',
        fqn: 'neurological.extinctionAndInattention'
      },
      {
        elementKey: 'strokeAssessmentCalculation',
        calculationType: 'sum',
        defaultValue: '0',
        formIndex: '1',
        inputType: 'calculatedValue',
        label: '<b>Stroke assessment calculation</b>',
        tableColumn: '30',
        tableLabel: 'Stroke assessment score',
        fqn: 'neurological.strokeAssessmentCalculation'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Neurological assessment',
        addButtonText: 'Add a neurological assessment',
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
            label: 'Status',
            tableCss: 'hr-table',
            ehr_list_index: '2',
            items: [
              'alert'
            ]
          },
          {
            label: 'Eye opening',
            ehr_list_index: '3',
            items: [
              'eyeOpening'
            ]
          },
          {
            label: 'Verbal response',
            ehr_list_index: '4',
            items: [
              'verbalResponse'
            ]
          },
          {
            label: 'Best motor response',
            ehr_list_index: '5',
            items: [
              'bestMotorResponse'
            ]
          },
          {
            label: 'Glasgow Coma Scale',
            tableCss: 'hr-table',
            ehr_list_index: '6',
            items: [
              'glasgowCalculation'
            ]
          },
          {
            label: 'Loss of conciousness',
            ehr_list_index: '7',
            items: [
              'loss'
            ]
          },
          {
            label: 'Duration',
            tableCss: 'hr-table',
            ehr_list_index: '8',
            items: [
              'duration'
            ]
          },
          {
            label: 'Left pupil size',
            ehr_list_index: '9',
            items: [
              'leftPupilSize'
            ]
          },
          {
            label: 'Left pupil response to light',
            ehr_list_index: '10',
            items: [
              'leftPupilResponseToLight'
            ]
          },
          {
            label: 'Right pupil size',
            ehr_list_index: '11',
            items: [
              'rightPupilSize'
            ]
          },
          {
            label: 'Right pupil response to light',
            ehr_list_index: '12',
            items: [
              'rightPupilResponseToLight'
            ]
          },
          {
            label: 'Both pupils',
            ehr_list_index: '13',
            items: [
              'bothPupils'
            ]
          },
          {
            label: 'General comments',
            tableCss: 'hr-table',
            ehr_list_index: '14',
            items: [
              'comments'
            ]
          },
          {
            label: 'Level of conciousness',
            ehr_list_index: '15',
            items: [
              'levelOfConciousness'
            ]
          },
          {
            label: 'Level of conciousness questions',
            ehr_list_index: '16',
            items: [
              'levelOfConciousnessQuestions'
            ]
          },
          {
            label: 'Level of conciousness commands',
            tableCss: 'hr-table',
            ehr_list_index: '17',
            items: [
              'levelOfConciousnessCommands'
            ]
          },
          {
            label: 'Motor - left arm',
            ehr_list_index: '18',
            items: [
              'motorLeftArm'
            ]
          },
          {
            label: 'Motor - right arm',
            ehr_list_index: '19',
            items: [
              'motorRightArm'
            ]
          },
          {
            label: 'Motor - left leg',
            ehr_list_index: '20',
            items: [
              'motorLeftLeg'
            ]
          },
          {
            label: 'Motor - right leg',
            ehr_list_index: '21',
            items: [
              'motorRightLeg'
            ]
          },
          {
            label: 'Limb ataxia',
            tableCss: 'hr-table',
            ehr_list_index: '22',
            items: [
              'limbAtaxia'
            ]
          },
          {
            label: 'Best gaze',
            ehr_list_index: '23',
            items: [
              'bestGaze'
            ]
          },
          {
            label: 'Visual',
            ehr_list_index: '24',
            items: [
              'visual'
            ]
          },
          {
            label: 'Facial palsy',
            ehr_list_index: '25',
            items: [
              'facialPalsy'
            ]
          },
          {
            label: 'Sensory',
            ehr_list_index: '26',
            items: [
              'sensory'
            ]
          },
          {
            label: 'Best language',
            ehr_list_index: '27',
            items: [
              'bestLanguage'
            ]
          },
          {
            label: 'Dysarthria',
            ehr_list_index: '28',
            items: [
              'dysarthria'
            ]
          },
          {
            label: 'Extinction and inattention',
            tableCss: 'hr-table',
            ehr_list_index: '29',
            items: [
              'extinctionAndInattention'
            ]
          },
          {
            label: 'Stroke assessment score',
            ehr_list_index: '30',
            items: [
              'strokeAssessmentCalculation'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Neurological assessment',
          addButtonText: 'Add a neurological assessment',
          formOption: 'transpose',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group40',
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
              elementKey: 'ehr_group41',
              formCss: 'section-divider',
              gIndex: '2',
              gChildren: [
                'alert'
              ]
            },
            {
              elementKey: 'ehr_group42',
              label: 'Glasgow Coma Scale',
              formCss: 'section-divider',
              gIndex: '3',
              gChildren: [
                'eyeOpening',
                'verbalResponse',
                'bestMotorResponse',
                'glasgowCalculation'
              ]
            },
            {
              elementKey: 'ehr_group43',
              label: 'Conciousness',
              gIndex: '4',
              gChildren: [
                'loss',
                'duration'
              ]
            },
            {
              elementKey: 'ehr_group44',
              formCss: 'section-divider',
              gIndex: '5',
              gChildren: [
                'leftPupilSize',
                'leftPupilResponseToLight',
                'spacer45',
                'rightPupilSize',
                'rightPupilResponseToLight',
                'bothPupils'
              ]
            },
            {
              elementKey: 'ehr_group46',
              formCss: 'section-divider',
              gIndex: '6',
              gChildren: [
                'comments',
                'resources'
              ]
            },
            {
              elementKey: 'ehr_group47',
              label: 'Stroke assessment',
              gIndex: '7',
              gChildren: [
                'levelOfConciousness',
                'levelOfConciousnessQuestions',
                'levelOfConciousnessCommands',
                'motorLeftArm',
                'motorRightArm',
                'spacer48',
                'motorLeftLeg',
                'motorRightLeg',
                'limbAtaxia',
                'bestGaze',
                'visual',
                'facialPalsy',
                'sensory',
                'bestLanguage',
                'dysarthria',
                'extinctionAndInattention'
              ]
            },
            {
              elementKey: 'ehr_group49',
              formCss: 'grid-left-to-right-1',
              gIndex: '8',
              gChildren: [
                'strokeAssessmentCalculation'
              ]
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            alert: '',
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
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'respiratory.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'respiratory.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'respiratory.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'respiratory.time'
      },
      {
        elementKey: 'airway',
        formIndex: '1',
        inputType: 'checkset',
        label: 'Airway',
        options: [
          {
            key: 'Patent',
            text: 'Patent'
          },
          {
            key: 'Obstructed',
            text: 'Obstructed'
          },
          {
            key: 'Oral endotracheal tube',
            text: 'Oral endotracheal tube'
          },
          {
            key: 'Other',
            text: 'Other'
          }
        ],
        tableColumn: '2',
        tableLabel: 'Airway',
        fqn: 'respiratory.airway'
      },
      {
        elementKey: 'oxygenTherapy',
        formIndex: '1',
        inputType: 'text',
        label: 'Oxygen therapy',
        tableColumn: '3',
        tableLabel: 'Oxygen therapy',
        fqn: 'respiratory.oxygenTherapy'
      },
      {
        elementKey: 'flowRate',
        formIndex: '1',
        inputType: 'text',
        label: 'Flow rate',
        suffix: '/lpm',
        tableColumn: '4',
        tableCss: 'hr-table',
        tableLabel: 'Flow rate',
        fqn: 'respiratory.flowRate'
      },
      {
        elementKey: 'lul',
        formIndex: '1',
        inputType: 'select',
        label: 'Left upper lung',
        options: [
          {
            key: 'Normal',
            text: 'Normal'
          },
          {
            key: 'Wheeze',
            text: 'Wheeze'
          },
          {
            key: 'Crackles',
            text: 'Crackles'
          },
          {
            key: 'Absent',
            text: 'Absent'
          },
          {
            key: 'Decreased',
            text: 'Decreased'
          }
        ],
        tableColumn: '5',
        tableLabel: 'Left upper lung',
        fqn: 'respiratory.lul'
      },
      {
        elementKey: 'rul',
        formIndex: '1',
        inputType: 'select',
        label: 'Right upper lung',
        options: [
          {
            key: 'Normal',
            text: 'Normal'
          },
          {
            key: 'Wheeze',
            text: 'Wheeze'
          },
          {
            key: 'Crackles',
            text: 'Crackles'
          },
          {
            key: 'Absent',
            text: 'Absent'
          },
          {
            key: 'Decreased',
            text: 'Decreased'
          }
        ],
        tableColumn: '6',
        tableLabel: 'Right upper lung',
        fqn: 'respiratory.rul'
      },
      {
        elementKey: 'aSpacer',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'respiratory.aSpacer'
      },
      {
        elementKey: 'aSpacer',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'respiratory.aSpacer'
      },
      {
        elementKey: 'rml',
        formIndex: '1',
        inputType: 'select',
        label: 'Right middle lung',
        options: [
          {
            key: 'Normal',
            text: 'Normal'
          },
          {
            key: 'Wheeze',
            text: 'Wheeze'
          },
          {
            key: 'Crackles',
            text: 'Crackles'
          },
          {
            key: 'Absent',
            text: 'Absent'
          },
          {
            key: 'Decreased',
            text: 'Decreased'
          }
        ],
        tableColumn: '7',
        tableLabel: 'Right middle lung',
        fqn: 'respiratory.rml'
      },
      {
        elementKey: 'aSpacer',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'respiratory.aSpacer'
      },
      {
        elementKey: 'lll',
        formIndex: '1',
        inputType: 'select',
        label: 'Left lower lung',
        options: [
          {
            key: 'Normal',
            text: 'Normal'
          },
          {
            key: 'Wheeze',
            text: 'Wheeze'
          },
          {
            key: 'Crackles',
            text: 'Crackles'
          },
          {
            key: 'Absent',
            text: 'Absent'
          },
          {
            key: 'Decreased',
            text: 'Decreased'
          }
        ],
        tableColumn: '8',
        tableLabel: 'Left lower lung',
        fqn: 'respiratory.lll'
      },
      {
        elementKey: 'rll',
        formIndex: '1',
        inputType: 'select',
        label: 'Right lower lung',
        options: [
          {
            key: 'Normal',
            text: 'Normal'
          },
          {
            key: 'Wheeze',
            text: 'Wheeze'
          },
          {
            key: 'Crackles',
            text: 'Crackles'
          },
          {
            key: 'Absent',
            text: 'Absent'
          },
          {
            key: 'Decreased',
            text: 'Decreased'
          }
        ],
        tableColumn: '9',
        tableCss: 'hr-table',
        tableLabel: 'Right lower lung',
        fqn: 'respiratory.rll'
      },
      {
        elementKey: 'aSpacer',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'respiratory.aSpacer'
      },
      {
        elementKey: 'respiratoryRhythm',
        formIndex: '1',
        inputType: 'select',
        label: 'Respiratory rhythm',
        options: [
          {
            key: 'Regular',
            text: 'Regular'
          },
          {
            key: 'Irregular',
            text: 'Irregular'
          },
          {
            key: 'Paradoxical',
            text: 'Paradoxical'
          }
        ],
        tableColumn: '10',
        tableLabel: 'Respiratory rhythm',
        fqn: 'respiratory.respiratoryRhythm'
      },
      {
        elementKey: 'respiratoryDepth',
        formIndex: '1',
        inputType: 'select',
        label: 'Respiratory depth',
        options: [
          {
            key: 'Normal',
            text: 'Normal'
          },
          {
            key: 'Shallow',
            text: 'Shallow'
          },
          {
            key: 'Deep',
            text: 'Deep'
          }
        ],
        tableColumn: '11',
        tableLabel: 'Respiratory depth',
        fqn: 'respiratory.respiratoryDepth'
      },
      {
        elementKey: 'aSpacer',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'respiratory.aSpacer'
      },
      {
        elementKey: 'cough',
        formIndex: '1',
        inputType: 'select',
        label: 'Cough',
        options: [
          {
            key: 'No',
            text: 'No'
          },
          {
            key: 'Nonproductive',
            text: 'Nonproductive'
          },
          {
            key: 'Productive',
            text: 'Productive'
          }
        ],
        tableColumn: '12',
        tableLabel: 'Cough',
        fqn: 'respiratory.cough'
      },
      {
        elementKey: 'sputumColour',
        formIndex: '1',
        inputType: 'select',
        label: 'Sputum colour',
        options: [
          {
            key: 'Mucoid',
            text: 'Mucoid'
          },
          {
            key: 'Purulent',
            text: 'Purulent'
          },
          {
            key: 'Yellow-green',
            text: 'Yellow-green'
          },
          {
            key: 'Rust-coloured',
            text: 'Rust-coloured'
          },
          {
            key: 'Pink, blood tinged',
            text: 'Pink, blood tinged'
          },
          {
            key: 'Pink, frothy',
            text: 'Pink, frothy'
          },
          {
            key: 'Profuse, colourless',
            text: 'Profuse, colourless'
          },
          {
            key: 'Bloody',
            text: 'Bloody'
          }
        ],
        tableColumn: '13',
        tableLabel: 'Sputum colour',
        fqn: 'respiratory.sputumColour'
      },
      {
        elementKey: 'sputumComments',
        formIndex: '1',
        inputType: 'text',
        label: 'Sputum comments',
        tableColumn: '14',
        tableCss: 'hr-table',
        tableLabel: 'Sputum comments',
        fqn: 'respiratory.sputumComments'
      },
      {
        elementKey: 'generalComments',
        formIndex: '1',
        inputType: 'textarea',
        label: 'General comments',
        tableColumn: '15',
        tableLabel: 'General comments',
        fqn: 'respiratory.generalComments'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Respiratory assessment',
        addButtonText: 'Add a respiratory assessment',
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
            label: 'Airway',
            ehr_list_index: '2',
            items: [
              'airway'
            ]
          },
          {
            label: 'Oxygen therapy',
            ehr_list_index: '3',
            items: [
              'oxygenTherapy'
            ]
          },
          {
            label: 'Flow rate',
            tableCss: 'hr-table',
            ehr_list_index: '4',
            items: [
              'flowRate'
            ]
          },
          {
            label: 'Left upper lung',
            ehr_list_index: '5',
            items: [
              'lul'
            ]
          },
          {
            label: 'Right upper lung',
            ehr_list_index: '6',
            items: [
              'rul'
            ]
          },
          {
            label: 'Right middle lung',
            ehr_list_index: '7',
            items: [
              'rml'
            ]
          },
          {
            label: 'Left lower lung',
            ehr_list_index: '8',
            items: [
              'lll'
            ]
          },
          {
            label: 'Right lower lung',
            tableCss: 'hr-table',
            ehr_list_index: '9',
            items: [
              'rll'
            ]
          },
          {
            label: 'Respiratory rhythm',
            ehr_list_index: '10',
            items: [
              'respiratoryRhythm'
            ]
          },
          {
            label: 'Respiratory depth',
            ehr_list_index: '11',
            items: [
              'respiratoryDepth'
            ]
          },
          {
            label: 'Cough',
            ehr_list_index: '12',
            items: [
              'cough'
            ]
          },
          {
            label: 'Sputum colour',
            ehr_list_index: '13',
            items: [
              'sputumColour'
            ]
          },
          {
            label: 'Sputum comments',
            tableCss: 'hr-table',
            ehr_list_index: '14',
            items: [
              'sputumComments'
            ]
          },
          {
            label: 'General comments',
            ehr_list_index: '15',
            items: [
              'generalComments'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Respiratory assessment',
          addButtonText: 'Add a respiratory assessment',
          formOption: 'transpose',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group50',
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
              elementKey: 'ehr_group51',
              gIndex: '2',
              gChildren: [
                'airway',
                'oxygenTherapy',
                'flowRate'
              ]
            },
            {
              elementKey: 'ehr_group52',
              formCss: 'section-divider',
              gIndex: '3',
              gChildren: [
                'lul',
                'rul',
                'aSpacer',
                'aSpacer',
                'rml',
                'aSpacer',
                'lll',
                'rll',
                'aSpacer'
              ]
            },
            {
              elementKey: 'ehr_group53',
              formCss: 'section-divider',
              gIndex: '4',
              gChildren: [
                'respiratoryRhythm',
                'respiratoryDepth',
                'aSpacer',
                'cough',
                'sputumColour',
                'sputumComments'
              ]
            },
            {
              elementKey: 'ehr_group54',
              formCss: 'grid-left-to-right-1',
              gIndex: '5',
              gChildren: [
                'generalComments'
              ]
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            airway: '',
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
    pageTitle: 'Cardiovascular assessment',
    pIndex: '16',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'cardiovascular.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'cardiovascular.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'cardiovascular.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'cardiovascular.time'
      },
      {
        elementKey: 'pulse',
        formIndex: '1',
        inputType: 'select',
        label: 'Pulse',
        options: [
          {
            key: 'Regular',
            text: 'Regular'
          },
          {
            key: 'Irregular',
            text: 'Irregular'
          },
          {
            key: 'Normal',
            text: 'Normal'
          },
          {
            key: 'Weak',
            text: 'Weak'
          },
          {
            key: 'Bounding',
            text: 'Bounding'
          }
        ],
        tableColumn: '2',
        tableLabel: 'Pulse',
        fqn: 'cardiovascular.pulse'
      },
      {
        elementKey: 'skinAppearance',
        formIndex: '1',
        inputType: 'select',
        label: 'Skin appearance',
        options: [
          {
            key: 'Normal',
            text: 'Normal'
          },
          {
            key: 'Pale',
            text: 'Pale'
          },
          {
            key: 'Mottled',
            text: 'Mottled'
          },
          {
            key: 'Cyanotic',
            text: 'Cyanotic'
          },
          {
            key: 'Flushed',
            text: 'Flushed'
          },
          {
            key: 'Jaundiced',
            text: 'Jaundiced'
          }
        ],
        tableColumn: '3',
        tableCss: 'hr-table',
        tableLabel: 'Skin appearance',
        fqn: 'cardiovascular.skinAppearance'
      },
      {
        elementKey: 'spacer58',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'cardiovascular.spacer58'
      },
      {
        elementKey: 'labelCapRefill',
        formIndex: '1',
        helperText: 'Normal < 3 seconds\nDelayed > 3 seconds',
        inputType: 'form_label',
        label: 'Cap refill',
        fqn: 'cardiovascular.labelCapRefill',
        helperHtml: '<p>Normal < 3 seconds</p>\n<p>Delayed > 3 seconds</p>'
      },
      {
        elementKey: 'labelTemperature',
        formIndex: '1',
        inputType: 'form_label',
        label: 'Temperature',
        fqn: 'cardiovascular.labelTemperature'
      },
      {
        elementKey: 'labelPeripheral',
        formIndex: '1',
        inputType: 'form_label',
        label: 'Peripheral edema',
        fqn: 'cardiovascular.labelPeripheral'
      },
      {
        elementKey: 'labelNailBed',
        formIndex: '1',
        inputType: 'form_label',
        label: 'Nail bed colour',
        fqn: 'cardiovascular.labelNailBed'
      },
      {
        elementKey: 'labelRight',
        formIndex: '1',
        inputType: 'form_label',
        label: 'Right hand',
        fqn: 'cardiovascular.labelRight'
      },
      {
        elementKey: 'capRefillLeftHand',
        formIndex: '1',
        formOption: 'hideLabel',
        inputType: 'select',
        options: [
          {
            key: 'Normal < 3 seconds',
            text: 'Normal < 3 seconds'
          },
          {
            key: 'Delayed > 3 seconds',
            text: 'Delayed > 3 seconds'
          }
        ],
        tableColumn: '4',
        tableCss: 'hideLabel',
        tableLabel: 'Cap refill: Right hand',
        fqn: 'cardiovascular.capRefillLeftHand'
      },
      {
        elementKey: 'temperatureRightHand',
        formIndex: '1',
        formOption: 'hideLabel',
        inputType: 'select',
        options: [
          {
            key: 'Warm',
            text: 'Warm'
          },
          {
            key: 'Cool',
            text: 'Cool'
          },
          {
            key: 'Hot',
            text: 'Hot'
          }
        ],
        tableColumn: '5',
        tableCss: 'hideLabel',
        tableLabel: 'Temperature: Right hand',
        fqn: 'cardiovascular.temperatureRightHand'
      },
      {
        elementKey: 'peripheralEdemaRightHand',
        formIndex: '1',
        formOption: 'hideLabel',
        inputType: 'select',
        options: [
          {
            key: 'No',
            text: 'No'
          },
          {
            key: 'Ankle',
            text: 'Ankle'
          },
          {
            key: 'Pedal',
            text: 'Pedal'
          },
          {
            key: 'Sacral',
            text: 'Sacral'
          },
          {
            key: 'Pitting',
            text: 'Pitting'
          }
        ],
        tableColumn: '6',
        tableCss: 'hideLabel',
        tableLabel: 'Peripheral edema: Right hand',
        fqn: 'cardiovascular.peripheralEdemaRightHand'
      },
      {
        elementKey: 'nailBedColourRightHand',
        formIndex: '1',
        formOption: 'hideLabel',
        inputType: 'select',
        options: [
          {
            key: 'Pink',
            text: 'Pink'
          },
          {
            key: 'Cyanotic',
            text: 'Cyanotic'
          }
        ],
        tableColumn: '7',
        tableCss: 'hr-table hideLabel',
        tableLabel: 'Nail bed colour: Right hand',
        fqn: 'cardiovascular.nailBedColourRightHand'
      },
      {
        elementKey: 'labelLeftHand',
        formIndex: '1',
        inputType: 'form_label',
        label: 'Left hand',
        fqn: 'cardiovascular.labelLeftHand'
      },
      {
        elementKey: 'capRefillRightHand',
        formIndex: '1',
        formOption: 'hideLabel',
        inputType: 'select',
        options: [
          {
            key: 'Normal < 3 seconds',
            text: 'Normal < 3 seconds'
          },
          {
            key: 'Delayed > 3 seconds',
            text: 'Delayed > 3 seconds'
          }
        ],
        tableColumn: '8',
        tableCss: 'hideLabel',
        tableLabel: 'Cap refill: Left hand',
        fqn: 'cardiovascular.capRefillRightHand'
      },
      {
        elementKey: 'temperatureLeftHand',
        formIndex: '1',
        formOption: 'hideLabel',
        inputType: 'select',
        options: [
          {
            key: 'Warm',
            text: 'Warm'
          },
          {
            key: 'Cool',
            text: 'Cool'
          },
          {
            key: 'Hot',
            text: 'Hot'
          }
        ],
        tableColumn: '9',
        tableCss: 'hideLabel',
        tableLabel: 'Temperature: Left hand',
        fqn: 'cardiovascular.temperatureLeftHand'
      },
      {
        elementKey: 'peripheralEdemaLeftHand',
        formIndex: '1',
        formOption: 'hideLabel',
        inputType: 'select',
        options: [
          {
            key: 'No',
            text: 'No'
          },
          {
            key: 'Ankle',
            text: 'Ankle'
          },
          {
            key: 'Pedal',
            text: 'Pedal'
          },
          {
            key: 'Sacral',
            text: 'Sacral'
          },
          {
            key: 'Pitting',
            text: 'Pitting'
          }
        ],
        tableColumn: '10',
        tableCss: 'hideLabel',
        tableLabel: 'Peripheral edema: Left hand',
        fqn: 'cardiovascular.peripheralEdemaLeftHand'
      },
      {
        elementKey: 'nailBedColourLeftHand',
        formIndex: '1',
        formOption: 'hideLabel',
        inputType: 'select',
        options: [
          {
            key: 'Pink',
            text: 'Pink'
          },
          {
            key: 'Cyanotic',
            text: 'Cyanotic'
          }
        ],
        tableColumn: '11',
        tableCss: 'hr-table hideLabel',
        tableLabel: 'Nail bed colour: Left hand',
        fqn: 'cardiovascular.nailBedColourLeftHand'
      },
      {
        elementKey: 'labelRightFoot',
        formIndex: '1',
        inputType: 'form_label',
        label: 'Right foot',
        fqn: 'cardiovascular.labelRightFoot'
      },
      {
        elementKey: 'capRefillRightFoot',
        formIndex: '1',
        formOption: 'hideLabel',
        inputType: 'select',
        options: [
          {
            key: 'Normal < 3 seconds',
            text: 'Normal < 3 seconds'
          },
          {
            key: 'Delayed > 3 seconds',
            text: 'Delayed > 3 seconds'
          }
        ],
        tableColumn: '12',
        tableCss: 'hideLabel',
        tableLabel: 'Cap refill: Right foot',
        fqn: 'cardiovascular.capRefillRightFoot'
      },
      {
        elementKey: 'temperatureRightFoot',
        formIndex: '1',
        formOption: 'hideLabel',
        inputType: 'select',
        options: [
          {
            key: 'Warm',
            text: 'Warm'
          },
          {
            key: 'Cool',
            text: 'Cool'
          },
          {
            key: 'Hot',
            text: 'Hot'
          }
        ],
        tableColumn: '13',
        tableCss: 'hideLabel',
        tableLabel: 'Temperature: Right foot',
        fqn: 'cardiovascular.temperatureRightFoot'
      },
      {
        elementKey: 'peripheralEdemaRightFoot',
        formIndex: '1',
        formOption: 'hideLabel',
        inputType: 'select',
        options: [
          {
            key: 'No',
            text: 'No'
          },
          {
            key: 'Ankle',
            text: 'Ankle'
          },
          {
            key: 'Pedal',
            text: 'Pedal'
          },
          {
            key: 'Sacral',
            text: 'Sacral'
          },
          {
            key: 'Pitting',
            text: 'Pitting'
          }
        ],
        tableColumn: '14',
        tableCss: 'hideLabel',
        tableLabel: 'Peripheral edema: Right foot',
        fqn: 'cardiovascular.peripheralEdemaRightFoot'
      },
      {
        elementKey: 'nailBedColourRightFoot',
        formIndex: '1',
        formOption: 'hideLabel',
        inputType: 'select',
        options: [
          {
            key: 'Pink',
            text: 'Pink'
          },
          {
            key: 'Cyanotic',
            text: 'Cyanotic'
          }
        ],
        tableColumn: '15',
        tableCss: 'hr-table hideLabel',
        tableLabel: 'Nail bed colour: Right Foot',
        fqn: 'cardiovascular.nailBedColourRightFoot'
      },
      {
        elementKey: 'labelLeftFoot',
        formIndex: '1',
        inputType: 'form_label',
        label: 'Left foot',
        fqn: 'cardiovascular.labelLeftFoot'
      },
      {
        elementKey: 'capRefillLeftFoot',
        formIndex: '1',
        formOption: 'hideLabel',
        inputType: 'select',
        options: [
          {
            key: 'Normal < 3 seconds',
            text: 'Normal < 3 seconds'
          },
          {
            key: 'Delayed > 3 seconds',
            text: 'Delayed > 3 seconds'
          }
        ],
        tableColumn: '16',
        tableCss: 'hideLabel',
        tableLabel: 'Cap refill: Left foot',
        fqn: 'cardiovascular.capRefillLeftFoot'
      },
      {
        elementKey: 'temperatureLeftFoot',
        formIndex: '1',
        formOption: 'hideLabel',
        inputType: 'select',
        options: [
          {
            key: 'Warm',
            text: 'Warm'
          },
          {
            key: 'Cool',
            text: 'Cool'
          },
          {
            key: 'Hot',
            text: 'Hot'
          }
        ],
        tableColumn: '17',
        tableCss: 'hideLabel',
        tableLabel: 'Temperature: Left foot',
        fqn: 'cardiovascular.temperatureLeftFoot'
      },
      {
        elementKey: 'peripheralEdemaLeftFoot',
        formIndex: '1',
        formOption: 'hideLabel',
        inputType: 'select',
        options: [
          {
            key: 'No',
            text: 'No'
          },
          {
            key: 'Ankle',
            text: 'Ankle'
          },
          {
            key: 'Pedal',
            text: 'Pedal'
          },
          {
            key: 'Sacral',
            text: 'Sacral'
          },
          {
            key: 'Pitting',
            text: 'Pitting'
          }
        ],
        tableColumn: '18',
        tableCss: 'hideLabel',
        tableLabel: 'Peripheral edema: Left foot',
        fqn: 'cardiovascular.peripheralEdemaLeftFoot'
      },
      {
        elementKey: 'nailBedColourLeftFoot',
        formIndex: '1',
        formOption: 'hideLabel',
        inputType: 'select',
        options: [
          {
            key: 'Pink',
            text: 'Pink'
          },
          {
            key: 'Cyanotic',
            text: 'Cyanotic'
          }
        ],
        tableColumn: '19',
        tableCss: 'hr-table hideLabel',
        tableLabel: 'Nail bed colour: Left foot',
        fqn: 'cardiovascular.nailBedColourLeftFoot'
      },
      {
        elementKey: 'comments',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Comments',
        tableColumn: '20',
        tableLabel: 'Comments',
        fqn: 'cardiovascular.comments'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Cardiovascular assessment',
        addButtonText: 'Add a cardiovascular assessment',
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
            label: 'Pulse',
            ehr_list_index: '2',
            items: [
              'pulse'
            ]
          },
          {
            label: 'Skin appearance',
            tableCss: 'hr-table',
            ehr_list_index: '3',
            items: [
              'skinAppearance'
            ]
          },
          {
            label: 'Cap refill: Right hand',
            tableCss: 'hideLabel',
            ehr_list_index: '4',
            items: [
              'capRefillLeftHand'
            ]
          },
          {
            label: 'Temperature: Right hand',
            tableCss: 'hideLabel',
            ehr_list_index: '5',
            items: [
              'temperatureRightHand'
            ]
          },
          {
            label: 'Peripheral edema: Right hand',
            tableCss: 'hideLabel',
            ehr_list_index: '6',
            items: [
              'peripheralEdemaRightHand'
            ]
          },
          {
            label: 'Nail bed colour: Right hand',
            tableCss: 'hr-table hideLabel',
            ehr_list_index: '7',
            items: [
              'nailBedColourRightHand'
            ]
          },
          {
            label: 'Cap refill: Left hand',
            tableCss: 'hideLabel',
            ehr_list_index: '8',
            items: [
              'capRefillRightHand'
            ]
          },
          {
            label: 'Temperature: Left hand',
            tableCss: 'hideLabel',
            ehr_list_index: '9',
            items: [
              'temperatureLeftHand'
            ]
          },
          {
            label: 'Peripheral edema: Left hand',
            tableCss: 'hideLabel',
            ehr_list_index: '10',
            items: [
              'peripheralEdemaLeftHand'
            ]
          },
          {
            label: 'Nail bed colour: Left hand',
            tableCss: 'hr-table hideLabel',
            ehr_list_index: '11',
            items: [
              'nailBedColourLeftHand'
            ]
          },
          {
            label: 'Cap refill: Right foot',
            tableCss: 'hideLabel',
            ehr_list_index: '12',
            items: [
              'capRefillRightFoot'
            ]
          },
          {
            label: 'Temperature: Right foot',
            tableCss: 'hideLabel',
            ehr_list_index: '13',
            items: [
              'temperatureRightFoot'
            ]
          },
          {
            label: 'Peripheral edema: Right foot',
            tableCss: 'hideLabel',
            ehr_list_index: '14',
            items: [
              'peripheralEdemaRightFoot'
            ]
          },
          {
            label: 'Nail bed colour: Right Foot',
            tableCss: 'hr-table hideLabel',
            ehr_list_index: '15',
            items: [
              'nailBedColourRightFoot'
            ]
          },
          {
            label: 'Cap refill: Left foot',
            tableCss: 'hideLabel',
            ehr_list_index: '16',
            items: [
              'capRefillLeftFoot'
            ]
          },
          {
            label: 'Temperature: Left foot',
            tableCss: 'hideLabel',
            ehr_list_index: '17',
            items: [
              'temperatureLeftFoot'
            ]
          },
          {
            label: 'Peripheral edema: Left foot',
            tableCss: 'hideLabel',
            ehr_list_index: '18',
            items: [
              'peripheralEdemaLeftFoot'
            ]
          },
          {
            label: 'Nail bed colour: Left foot',
            tableCss: 'hr-table hideLabel',
            ehr_list_index: '19',
            items: [
              'nailBedColourLeftFoot'
            ]
          },
          {
            label: 'Comments',
            ehr_list_index: '20',
            items: [
              'comments'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Cardiovascular assessment',
          addButtonText: 'Add a cardiovascular assessment',
          formOption: 'transpose',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group55',
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
              elementKey: 'ehr_group56',
              gIndex: '2',
              gChildren: [
                'pulse',
                'skinAppearance'
              ]
            },
            {
              elementKey: 'ehr_group57',
              formCss: 'grid-left-to-right-5 section-divider',
              gIndex: '3',
              gChildren: [
                'spacer58',
                'labelCapRefill',
                'labelTemperature',
                'labelPeripheral',
                'labelNailBed',
                'labelRight',
                'capRefillLeftHand',
                'temperatureRightHand',
                'peripheralEdemaRightHand',
                'nailBedColourRightHand',
                'labelLeftHand',
                'capRefillRightHand',
                'temperatureLeftHand',
                'peripheralEdemaLeftHand',
                'nailBedColourLeftHand',
                'labelRightFoot',
                'capRefillRightFoot',
                'temperatureRightFoot',
                'peripheralEdemaRightFoot',
                'nailBedColourRightFoot',
                'labelLeftFoot',
                'capRefillLeftFoot',
                'temperatureLeftFoot',
                'peripheralEdemaLeftFoot',
                'nailBedColourLeftFoot'
              ]
            },
            {
              elementKey: 'ehr_group59',
              formCss: 'grid-left-to-right-1',
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
            capRefillLeftHand: '',
            temperatureRightHand: '',
            peripheralEdemaRightHand: '',
            nailBedColourRightHand: '',
            capRefillRightHand: '',
            temperatureLeftHand: '',
            peripheralEdemaLeftHand: '',
            nailBedColourLeftHand: '',
            capRefillRightFoot: '',
            temperatureRightFoot: '',
            peripheralEdemaRightFoot: '',
            nailBedColourRightFoot: '',
            capRefillLeftFoot: '',
            temperatureLeftFoot: '',
            peripheralEdemaLeftFoot: '',
            nailBedColourLeftFoot: '',
            comments: ''
          }
        }
      }
    }
  },
  gastrointestinal: {
    pageDataKey: 'gastrointestinal',
    pageTitle: 'Gastrointestinal assessment',
    pIndex: '17',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'gastrointestinal.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'gastrointestinal.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'gastrointestinal.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'gastrointestinal.time'
      },
      {
        elementKey: 'bowel',
        formIndex: '1',
        inputType: 'checkset',
        label: 'Bowel',
        options: [
          {
            key: 'Normal',
            text: 'Normal'
          },
          {
            key: 'Constipation',
            text: 'Constipation'
          },
          {
            key: 'Diarrhea',
            text: 'Diarrhea'
          },
          {
            key: 'Melena',
            text: 'Melena'
          },
          {
            key: 'Incontinent',
            text: 'Incontinent'
          }
        ],
        tableColumn: '2',
        tableLabel: 'Bowel',
        fqn: 'gastrointestinal.bowel'
      },
      {
        elementKey: 'bSounds',
        formIndex: '1',
        inputType: 'checkset',
        label: 'Bowel sounds',
        options: [
          {
            key: 'None',
            text: 'None'
          },
          {
            key: 'LUQ',
            text: 'LUQ'
          },
          {
            key: 'RUQ',
            text: 'RUQ'
          },
          {
            key: 'LLQ',
            text: 'LLQ'
          },
          {
            key: 'RLQ',
            text: 'RLQ'
          },
          {
            key: 'Hypoactive',
            text: 'Hypoactive'
          },
          {
            key: 'Hyperactive',
            text: 'Hyperactive'
          }
        ],
        tableColumn: '3',
        tableLabel: 'Bowel sounds',
        fqn: 'gastrointestinal.bSounds'
      },
      {
        elementKey: 'condition',
        formIndex: '1',
        inputType: 'checkset',
        label: 'Abdomen',
        options: [
          {
            key: 'soft=Soft',
            text: 'soft=Soft'
          },
          {
            key: 'tender=Tender',
            text: 'tender=Tender'
          },
          {
            key: 'rigid=Rigid',
            text: 'rigid=Rigid'
          },
          {
            key: 'guarding=Guarding',
            text: 'guarding=Guarding'
          },
          {
            key: 'distended=Distended',
            text: 'distended=Distended'
          },
          {
            key: 'scars=Scars',
            text: 'scars=Scars'
          }
        ],
        tableColumn: '4',
        tableLabel: 'Abdomen',
        fqn: 'gastrointestinal.condition'
      },
      {
        elementKey: 'spacer62',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'gastrointestinal.spacer62'
      },
      {
        elementKey: 'spacer63',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'gastrointestinal.spacer63'
      },
      {
        elementKey: 'pain',
        formIndex: '1',
        inputType: 'select',
        label: 'Abdominal pain',
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
        tableColumn: '5',
        tableLabel: 'Abdominal pain',
        fqn: 'gastrointestinal.pain'
      },
      {
        elementKey: 'spacer64',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'gastrointestinal.spacer64'
      },
      {
        elementKey: 'spacer65',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'gastrointestinal.spacer65'
      },
      {
        elementKey: 'aLabel',
        formIndex: '1',
        inputType: 'form_label',
        label: 'If answered yes, please complete the <a href=\'/assets/standardized-assessment-tools/numeric-rating-scale.pdf\'>pain assessment</a>.',
        fqn: 'gastrointestinal.aLabel'
      },
      {
        elementKey: 'emesisPresent',
        formIndex: '1',
        inputType: 'select',
        label: 'Emesis present?',
        options: [
          {
            key: 'None',
            text: 'None'
          },
          {
            key: 'Nausea',
            text: 'Nausea'
          },
          {
            key: 'Vomiting',
            text: 'Vomiting'
          }
        ],
        tableColumn: '6',
        tableLabel: 'Emesis present?',
        fqn: 'gastrointestinal.emesisPresent'
      },
      {
        elementKey: 'colour',
        formIndex: '1',
        inputType: 'select',
        label: 'Emesis colour',
        options: [
          {
            key: 'Greenish-yellow',
            text: 'Greenish-yellow'
          },
          {
            key: 'Blood-tinged',
            text: 'Blood-tinged'
          },
          {
            key: 'Bright red',
            text: 'Bright red'
          },
          {
            key: 'Dark red',
            text: 'Dark red'
          },
          {
            key: 'Black',
            text: 'Black'
          }
        ],
        tableColumn: '7',
        tableLabel: 'Emesis colour',
        fqn: 'gastrointestinal.colour'
      },
      {
        elementKey: 'description',
        formIndex: '1',
        inputType: 'text',
        label: 'Description',
        tableColumn: '8',
        tableLabel: 'Description',
        fqn: 'gastrointestinal.description'
      },
      {
        elementKey: 'amount',
        formIndex: '1',
        inputType: 'select',
        label: 'Approximate volume',
        options: [
          {
            key: 'Small',
            text: 'Small'
          },
          {
            key: 'Moderate',
            text: 'Moderate'
          },
          {
            key: 'Large',
            text: 'Large'
          }
        ],
        tableColumn: '9',
        tableCss: 'hr-table',
        tableLabel: 'Approximate volume',
        fqn: 'gastrointestinal.amount'
      },
      {
        elementKey: 'eating',
        formIndex: '1',
        inputType: 'select',
        label: 'Difficulty',
        options: [
          {
            key: 'Regular',
            text: 'Regular'
          },
          {
            key: 'Difficult',
            text: 'Difficult'
          }
        ],
        tableColumn: '10',
        tableLabel: 'Difficulty',
        fqn: 'gastrointestinal.eating'
      },
      {
        elementKey: 'reason',
        formIndex: '1',
        inputType: 'text',
        label: 'Reason',
        tableColumn: '11',
        tableLabel: 'Reason',
        fqn: 'gastrointestinal.reason'
      },
      {
        elementKey: 'spacer66',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'gastrointestinal.spacer66'
      },
      {
        elementKey: 'npoSinceDay',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'NPO since day',
        tableColumn: '12',
        tableLabel: 'NPO since day',
        fqn: 'gastrointestinal.npoSinceDay'
      },
      {
        elementKey: 'npoSinceTime',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'NPO since time',
        tableColumn: '13',
        tableLabel: 'NPO since time',
        fqn: 'gastrointestinal.npoSinceTime'
      },
      {
        elementKey: 'weightLoss',
        formIndex: '1',
        inputType: 'text',
        label: 'Weight loss',
        tableColumn: '14',
        tableCss: 'hr-table',
        tableLabel: 'Weight loss',
        fqn: 'gastrointestinal.weightLoss'
      },
      {
        elementKey: 'lastBm',
        formIndex: '1',
        inputType: 'text',
        label: 'Last bowel movement',
        tableColumn: '15',
        tableLabel: 'Last bowel movement',
        fqn: 'gastrointestinal.lastBm'
      },
      {
        elementKey: 'stoolColour',
        formIndex: '1',
        inputType: 'select',
        label: 'Stool colour',
        options: [
          {
            key: 'Brown',
            text: 'Brown'
          },
          {
            key: 'Green',
            text: 'Green'
          },
          {
            key: 'Clay coloured',
            text: 'Clay coloured'
          },
          {
            key: 'Yellow',
            text: 'Yellow'
          },
          {
            key: 'Black',
            text: 'Black'
          },
          {
            key: 'Bright red',
            text: 'Bright red'
          },
          {
            key: 'Dark red',
            text: 'Dark red'
          }
        ],
        tableColumn: '16',
        tableLabel: 'Stool colour',
        fqn: 'gastrointestinal.stoolColour'
      },
      {
        elementKey: 'stoolDescription',
        formIndex: '1',
        inputType: 'select',
        label: 'Description',
        options: [
          {
            key: 'Runny',
            text: 'Runny'
          },
          {
            key: 'Hard pellets',
            text: 'Hard pellets'
          }
        ],
        tableColumn: '17',
        tableLabel: 'Description',
        fqn: 'gastrointestinal.stoolDescription'
      },
      {
        elementKey: 'stoolAmount',
        formIndex: '1',
        inputType: 'text',
        label: 'Amount',
        tableColumn: '18',
        tableLabel: 'Amount',
        fqn: 'gastrointestinal.stoolAmount'
      },
      {
        elementKey: 'stoolSource',
        formIndex: '1',
        inputType: 'select',
        label: 'Source',
        options: [
          {
            key: 'Observed',
            text: 'Observed'
          },
          {
            key: 'As per patient observed',
            text: 'As per patient observed'
          },
          {
            key: 'Not observed',
            text: 'Not observed'
          }
        ],
        tableColumn: '19',
        tableCss: 'hr-table',
        tableLabel: 'Source',
        fqn: 'gastrointestinal.stoolSource'
      },
      {
        elementKey: 'comments',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Comments',
        tableColumn: '20',
        tableLabel: 'Comments',
        fqn: 'gastrointestinal.comments'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Gastrointestinal assessment',
        addButtonText: 'Add a gastrointestinal assessment',
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
            label: 'Bowel',
            ehr_list_index: '2',
            items: [
              'bowel'
            ]
          },
          {
            label: 'Bowel sounds',
            ehr_list_index: '3',
            items: [
              'bSounds'
            ]
          },
          {
            label: 'Abdomen',
            ehr_list_index: '4',
            items: [
              'condition'
            ]
          },
          {
            label: 'Abdominal pain',
            ehr_list_index: '5',
            items: [
              'pain'
            ]
          },
          {
            label: 'Emesis present?',
            ehr_list_index: '6',
            items: [
              'emesisPresent'
            ]
          },
          {
            label: 'Emesis colour',
            ehr_list_index: '7',
            items: [
              'colour'
            ]
          },
          {
            label: 'Description',
            ehr_list_index: '8',
            items: [
              'description'
            ]
          },
          {
            label: 'Approximate volume',
            tableCss: 'hr-table',
            ehr_list_index: '9',
            items: [
              'amount'
            ]
          },
          {
            label: 'Difficulty',
            ehr_list_index: '10',
            items: [
              'eating'
            ]
          },
          {
            label: 'Reason',
            ehr_list_index: '11',
            items: [
              'reason'
            ]
          },
          {
            label: 'NPO since day',
            ehr_list_index: '12',
            items: [
              'npoSinceDay'
            ]
          },
          {
            label: 'NPO since time',
            ehr_list_index: '13',
            items: [
              'npoSinceTime'
            ]
          },
          {
            label: 'Weight loss',
            tableCss: 'hr-table',
            ehr_list_index: '14',
            items: [
              'weightLoss'
            ]
          },
          {
            label: 'Last bowel movement',
            ehr_list_index: '15',
            items: [
              'lastBm'
            ]
          },
          {
            label: 'Stool colour',
            ehr_list_index: '16',
            items: [
              'stoolColour'
            ]
          },
          {
            label: 'Description',
            ehr_list_index: '17',
            items: [
              'stoolDescription'
            ]
          },
          {
            label: 'Amount',
            ehr_list_index: '18',
            items: [
              'stoolAmount'
            ]
          },
          {
            label: 'Source',
            tableCss: 'hr-table',
            ehr_list_index: '19',
            items: [
              'stoolSource'
            ]
          },
          {
            label: 'Comments',
            ehr_list_index: '20',
            items: [
              'comments'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Gastrointestinal assessment',
          addButtonText: 'Add a gastrointestinal assessment',
          formOption: 'transpose',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group60',
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
              elementKey: 'ehr_group61',
              formCss: 'section-divider',
              gIndex: '2',
              gChildren: [
                'bowel',
                'bSounds',
                'condition',
                'spacer62',
                'spacer63',
                'pain',
                'spacer64',
                'spacer65',
                'aLabel'
              ]
            },
            {
              elementKey: 'emesis',
              label: 'Emesis',
              formCss: 'section-divider',
              gIndex: '3',
              gChildren: [
                'emesisPresent',
                'colour',
                'description',
                'amount'
              ]
            },
            {
              elementKey: 'eatingGroup',
              label: 'Eating',
              formCss: 'section-divider',
              gIndex: '4',
              gChildren: [
                'eating',
                'reason',
                'spacer66',
                'npoSinceDay',
                'npoSinceTime',
                'weightLoss'
              ]
            },
            {
              elementKey: 'stool',
              label: 'Stool',
              formCss: 'section-divider',
              gIndex: '5',
              gChildren: [
                'lastBm',
                'stoolColour',
                'stoolDescription',
                'stoolAmount',
                'stoolSource'
              ]
            },
            {
              elementKey: 'ehr_group67',
              formCss: 'grid-left-to-right-1 section-divider',
              gIndex: '6',
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
            bowel: '',
            bSounds: '',
            condition: '',
            pain: '',
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
  },
  genitourinary: {
    pageDataKey: 'genitourinary',
    pageTitle: 'Genitourinary assessment',
    pIndex: '18',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'genitourinary.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'genitourinary.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'genitourinary.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'genitourinary.time'
      },
      {
        elementKey: 'urinaryGroup1',
        formIndex: '1',
        inputType: 'checkset',
        label: 'Urinary symptoms',
        options: [
          {
            key: 'None',
            text: 'None'
          },
          {
            key: 'Increased frequency',
            text: 'Increased frequency'
          },
          {
            key: 'Dysuria',
            text: 'Dysuria'
          },
          {
            key: 'Hermaturia',
            text: 'Hermaturia'
          },
          {
            key: 'Oliguria',
            text: 'Oliguria'
          },
          {
            key: 'Incontinence',
            text: 'Incontinence'
          },
          {
            key: 'Retention',
            text: 'Retention'
          },
          {
            key: 'Distention',
            text: 'Distention'
          }
        ],
        tableColumn: '2',
        tableLabel: 'Urinary symptoms',
        fqn: 'genitourinary.urinaryGroup1'
      },
      {
        elementKey: 'lastVoidedDay',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Last voided day',
        tableColumn: '3',
        tableLabel: 'Last voided day',
        fqn: 'genitourinary.lastVoidedDay'
      },
      {
        elementKey: 'lastVoidedTime',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Last voided time',
        tableColumn: '4',
        tableLabel: 'Last voided time',
        fqn: 'genitourinary.lastVoidedTime'
      },
      {
        elementKey: 'colour',
        formIndex: '1',
        inputType: 'select',
        label: 'Urine colour',
        options: [
          {
            key: 'Pale yellow',
            text: 'Pale yellow'
          },
          {
            key: 'Dark yellow',
            text: 'Dark yellow'
          },
          {
            key: 'Amber',
            text: 'Amber'
          },
          {
            key: 'Red/blood',
            text: 'Red/blood'
          },
          {
            key: 'Other',
            text: 'Other'
          }
        ],
        tableColumn: '5',
        tableLabel: 'Urine colour',
        fqn: 'genitourinary.colour'
      },
      {
        elementKey: 'consistency',
        formIndex: '1',
        inputType: 'select',
        label: 'Urine consistency',
        options: [
          {
            key: 'Clear',
            text: 'Clear'
          },
          {
            key: 'Cloudy',
            text: 'Cloudy'
          },
          {
            key: 'Foamy',
            text: 'Foamy'
          },
          {
            key: 'Other',
            text: 'Other'
          }
        ],
        tableColumn: '6',
        tableLabel: 'Urine consistency',
        fqn: 'genitourinary.consistency'
      },
      {
        elementKey: 'diaper',
        formIndex: '1',
        helperText: 'Does the patient need the assistance of a brief, condom catheter, or etc.',
        inputType: 'select',
        label: 'Continence containment device',
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
        tableColumn: '7',
        tableLabel: 'Continence containment device',
        fqn: 'genitourinary.diaper',
        helperHtml: '<p>Does the patient need the assistance of a brief, condom catheter, or etc.</p>'
      },
      {
        elementKey: 'toilettingMethod',
        formIndex: '1',
        inputType: 'checkset',
        label: 'Toiletting method',
        options: [
          {
            key: 'Bedpan',
            text: 'Bedpan'
          },
          {
            key: 'Comode',
            text: 'Comode'
          },
          {
            key: 'Urinal',
            text: 'Urinal'
          },
          {
            key: 'Help to the toilet',
            text: 'Help to the toilet'
          },
          {
            key: 'Brief',
            text: 'Brief'
          },
          {
            key: 'Mesh pant/pad',
            text: 'Mesh pant/pad'
          },
          {
            key: 'Clean intermittent catheter',
            text: 'Clean intermittent catheter'
          },
          {
            key: 'Indwelling catheter',
            text: 'Indwelling catheter'
          }
        ],
        tableColumn: '8',
        tableCss: 'hr-table',
        fqn: 'genitourinary.toilettingMethod'
      },
      {
        elementKey: 'foley',
        formIndex: '1',
        inputType: 'select',
        label: 'Indwelling Catheter',
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
        tableColumn: '9',
        tableLabel: 'Indwelling Catheter',
        fqn: 'genitourinary.foley'
      },
      {
        elementKey: 'foleyType',
        formIndex: '1',
        helperText: 'eg. indwelling catheter',
        inputType: 'text',
        label: 'Type',
        tableColumn: '10',
        tableLabel: 'Type',
        fqn: 'genitourinary.foleyType',
        helperHtml: '<p>eg. indwelling catheter</p>'
      },
      {
        elementKey: 'foleySize',
        formIndex: '1',
        inputType: 'text',
        label: 'Size',
        tableColumn: '11',
        tableLabel: 'Size',
        fqn: 'genitourinary.foleySize'
      },
      {
        elementKey: 'lastChange',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Last catheter change (day)',
        tableColumn: '11',
        tableCss: 'hr-table',
        tableLabel: 'Last catheter change (day)',
        fqn: 'genitourinary.lastChange'
      },
      {
        elementKey: 'lastChangeTime',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Last catheter change (time)',
        tableColumn: '12',
        tableCss: 'hr-table',
        tableLabel: 'Last catheter change (time)',
        fqn: 'genitourinary.lastChangeTime'
      },
      {
        elementKey: 'pelvicPain',
        formIndex: '1',
        inputType: 'select',
        label: 'Pelvic pain',
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
        tableColumn: '13',
        tableLabel: 'Pelvic pain',
        fqn: 'genitourinary.pelvicPain'
      },
      {
        elementKey: 'location',
        formIndex: '1',
        inputType: 'text',
        label: 'Location',
        tableColumn: '14',
        tableLabel: 'Location',
        fqn: 'genitourinary.location'
      },
      {
        elementKey: 'pelvicPainSource',
        formIndex: '1',
        inputType: 'select',
        label: 'Pelvic pain source',
        options: [
          {
            key: 'Observed',
            text: 'Observed'
          },
          {
            key: 'As per patient observed',
            text: 'As per patient observed'
          },
          {
            key: 'Not observed',
            text: 'Not observed'
          }
        ],
        tableColumn: '15',
        tableCss: 'hr-table',
        tableLabel: 'Pelvic pain source',
        fqn: 'genitourinary.pelvicPainSource'
      },
      {
        elementKey: 'aLabel',
        formIndex: '1',
        inputType: 'form_label',
        label: 'If answered yes, please complete the pain assessment',
        fqn: 'genitourinary.aLabel'
      },
      {
        elementKey: 'discharge',
        formIndex: '1',
        inputType: 'checkset',
        label: 'Discharge',
        options: [
          {
            key: 'Discharge',
            text: 'Discharge'
          },
          {
            key: 'Bleeding',
            text: 'Bleeding'
          }
        ],
        tableColumn: '16',
        tableLabel: 'Discharge',
        fqn: 'genitourinary.discharge'
      },
      {
        elementKey: 'description',
        formIndex: '1',
        inputType: 'text',
        label: 'Description',
        tableColumn: '17',
        tableLabel: 'Description',
        fqn: 'genitourinary.description'
      },
      {
        elementKey: 'lastMenstrualPeriodDate',
        formIndex: '1',
        inputType: 'date',
        label: 'Last menstrual period date',
        tableColumn: '18',
        tableCss: 'hr-table',
        tableLabel: 'Last menstrual period date',
        fqn: 'genitourinary.lastMenstrualPeriodDate'
      },
      {
        elementKey: 'pregnant',
        formIndex: '1',
        inputType: 'select',
        label: 'Pregnant',
        options: [
          {
            key: 'Yes',
            text: 'Yes'
          },
          {
            key: 'No',
            text: 'No'
          },
          {
            key: 'Unknown',
            text: 'Unknown'
          }
        ],
        tableColumn: '19',
        tableLabel: 'Pregnant',
        fqn: 'genitourinary.pregnant'
      },
      {
        elementKey: 'gravida',
        formIndex: '1',
        inputType: 'text',
        label: 'Gravida (number of pregnancies)',
        tableColumn: '20',
        tableLabel: 'Gravida (number of pregnancies)',
        fqn: 'genitourinary.gravida'
      },
      {
        elementKey: 'para',
        formIndex: '1',
        inputType: 'text',
        label: 'Para (number of children)',
        tableColumn: '21',
        tableLabel: 'Para (number of children)',
        fqn: 'genitourinary.para'
      },
      {
        elementKey: 'livingChildren',
        formIndex: '1',
        inputType: 'text',
        label: 'Living children',
        tableColumn: '22',
        tableCss: 'hr-table',
        tableLabel: 'Living children',
        fqn: 'genitourinary.livingChildren'
      },
      {
        elementKey: 'comments',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Comments',
        tableColumn: '23',
        tableLabel: 'Comments',
        fqn: 'genitourinary.comments'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Genitourinary assessment',
        addButtonText: 'Add a genitourinary assessment',
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
            label: 'Urinary symptoms',
            ehr_list_index: '2',
            items: [
              'urinaryGroup1'
            ]
          },
          {
            label: 'Last voided day',
            ehr_list_index: '3',
            items: [
              'lastVoidedDay'
            ]
          },
          {
            label: 'Last voided time',
            ehr_list_index: '4',
            items: [
              'lastVoidedTime'
            ]
          },
          {
            label: 'Urine colour',
            ehr_list_index: '5',
            items: [
              'colour'
            ]
          },
          {
            label: 'Urine consistency',
            ehr_list_index: '6',
            items: [
              'consistency'
            ]
          },
          {
            label: 'Continence containment device',
            ehr_list_index: '7',
            items: [
              'diaper'
            ]
          },
          {
            tableCss: 'hr-table',
            ehr_list_index: '8',
            items: [
              'toilettingMethod'
            ]
          },
          {
            label: 'Indwelling Catheter',
            ehr_list_index: '9',
            items: [
              'foley'
            ]
          },
          {
            label: 'Type',
            ehr_list_index: '10',
            items: [
              'foleyType'
            ]
          },
          {
            label: 'Size',
            ehr_list_index: '11',
            items: [
              'foleySize',
              'lastChange'
            ]
          },
          {
            label: 'Last catheter change (time)',
            tableCss: 'hr-table',
            ehr_list_index: '12',
            items: [
              'lastChangeTime'
            ]
          },
          {
            label: 'Pelvic pain',
            ehr_list_index: '13',
            items: [
              'pelvicPain'
            ]
          },
          {
            label: 'Location',
            ehr_list_index: '14',
            items: [
              'location'
            ]
          },
          {
            label: 'Pelvic pain source',
            tableCss: 'hr-table',
            ehr_list_index: '15',
            items: [
              'pelvicPainSource'
            ]
          },
          {
            label: 'Discharge',
            ehr_list_index: '16',
            items: [
              'discharge'
            ]
          },
          {
            label: 'Description',
            ehr_list_index: '17',
            items: [
              'description'
            ]
          },
          {
            label: 'Last menstrual period date',
            tableCss: 'hr-table',
            ehr_list_index: '18',
            items: [
              'lastMenstrualPeriodDate'
            ]
          },
          {
            label: 'Pregnant',
            ehr_list_index: '19',
            items: [
              'pregnant'
            ]
          },
          {
            label: 'Gravida (number of pregnancies)',
            ehr_list_index: '20',
            items: [
              'gravida'
            ]
          },
          {
            label: 'Para (number of children)',
            ehr_list_index: '21',
            items: [
              'para'
            ]
          },
          {
            label: 'Living children',
            tableCss: 'hr-table',
            ehr_list_index: '22',
            items: [
              'livingChildren'
            ]
          },
          {
            label: 'Comments',
            ehr_list_index: '23',
            items: [
              'comments'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Genitourinary assessment',
          addButtonText: 'Add a genitourinary assessment',
          formOption: 'transpose',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group68',
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
              elementKey: 'urinaryGroup2',
              label: 'Urinary',
              formCss: 'section-divider',
              gIndex: '2',
              gChildren: [
                'urinaryGroup1',
                'lastVoidedDay',
                'lastVoidedTime',
                'colour',
                'consistency',
                'diaper',
                'toilettingMethod'
              ]
            },
            {
              elementKey: 'foleyGroup',
              label: 'Indwelling Catheter',
              formCss: 'section-divider',
              gIndex: '3',
              gChildren: [
                'foley',
                'foleyType',
                'foleySize',
                'lastChange',
                'lastChangeTime'
              ]
            },
            {
              elementKey: 'pelvicGroup',
              label: 'Pelvic',
              formCss: 'section-divider',
              gIndex: '4',
              gChildren: [
                'pelvicPain',
                'location',
                'pelvicPainSource',
                'aLabel'
              ]
            },
            {
              elementKey: 'vaginal',
              label: 'Vagina',
              formCss: 'section-divider',
              gIndex: '5',
              gChildren: [
                'discharge',
                'description',
                'lastMenstrualPeriodDate'
              ]
            },
            {
              elementKey: 'pregnantGroup',
              label: 'Pregnancy',
              formCss: 'section-divider',
              gIndex: '6',
              gChildren: [
                'pregnant',
                'gravida',
                'para',
                'livingChildren'
              ]
            },
            {
              elementKey: 'ehr_group69',
              formCss: 'grid-left-to-right-1',
              gIndex: '7',
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
            urinaryGroup1: '',
            lastVoidedDay: '',
            lastVoidedTime: '',
            colour: '',
            consistency: '',
            diaper: '',
            toilettingMethod: '',
            foley: '',
            foleyType: '',
            foleySize: '',
            lastChange: '',
            lastChangeTime: '',
            pelvicPain: '',
            location: '',
            pelvicPainSource: '',
            discharge: '',
            description: '',
            lastMenstrualPeriodDate: '',
            pregnant: '',
            gravida: '',
            para: '',
            livingChildren: '',
            comments: ''
          }
        }
      }
    }
  },
  musculoskeletal: {
    pageDataKey: 'musculoskeletal',
    pageTitle: 'Musculoskeletal assessment',
    pIndex: '19',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'musculoskeletal.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'musculoskeletal.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'musculoskeletal.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'musculoskeletal.time'
      },
      {
        elementKey: 'swelling',
        formIndex: '1',
        inputType: 'select',
        label: 'Swelling',
        options: [
          {
            key: 'Present',
            text: 'Present'
          },
          {
            key: 'Absent',
            text: 'Absent'
          }
        ],
        tableColumn: '2',
        tableLabel: 'Swelling',
        fqn: 'musculoskeletal.swelling'
      },
      {
        elementKey: 'pain',
        formIndex: '1',
        inputType: 'select',
        label: 'Pain',
        options: [
          {
            key: 'Present',
            text: 'Present'
          },
          {
            key: 'Absent',
            text: 'Absent'
          }
        ],
        tableColumn: '3',
        tableLabel: 'Pain',
        fqn: 'musculoskeletal.pain'
      },
      {
        elementKey: 'deformity',
        formIndex: '1',
        inputType: 'select',
        label: 'Deformity',
        options: [
          {
            key: 'Present',
            text: 'Present'
          },
          {
            key: 'Absent',
            text: 'Absent'
          }
        ],
        tableColumn: '4',
        tableLabel: 'Deformity',
        fqn: 'musculoskeletal.deformity'
      },
      {
        elementKey: 'movement',
        formIndex: '1',
        inputType: 'select',
        label: 'Movement',
        options: [
          {
            key: 'Normal',
            text: 'Normal'
          },
          {
            key: 'Decreased',
            text: 'Decreased'
          },
          {
            key: 'Absent',
            text: 'Absent'
          }
        ],
        tableColumn: '5',
        tableLabel: 'Movement',
        fqn: 'musculoskeletal.movement'
      },
      {
        elementKey: 'sensation',
        formIndex: '1',
        inputType: 'select',
        label: 'Sensation',
        options: [
          {
            key: 'Present',
            text: 'Present'
          },
          {
            key: 'Absent',
            text: 'Absent'
          },
          {
            key: 'Numb',
            text: 'Numb'
          }
        ],
        tableColumn: '6',
        tableLabel: 'Sensation',
        fqn: 'musculoskeletal.sensation'
      },
      {
        elementKey: 'pulse',
        formIndex: '1',
        inputType: 'select',
        label: 'Pulse',
        options: [
          {
            key: 'Absent',
            text: 'Absent'
          },
          {
            key: 'Weak',
            text: 'Weak'
          },
          {
            key: 'Moderate',
            text: 'Moderate'
          },
          {
            key: 'Strong',
            text: 'Strong'
          },
          {
            key: 'Bounding',
            text: 'Bounding'
          }
        ],
        tableColumn: '7',
        tableLabel: 'Pulse',
        fqn: 'musculoskeletal.pulse'
      },
      {
        elementKey: 'colour',
        formIndex: '1',
        inputType: 'select',
        label: 'Colour',
        options: [
          {
            key: 'Flesh',
            text: 'Flesh'
          },
          {
            key: 'Pale',
            text: 'Pale'
          },
          {
            key: 'Cynanotic',
            text: 'Cynanotic'
          }
        ],
        tableColumn: '8',
        tableLabel: 'Colour',
        fqn: 'musculoskeletal.colour'
      },
      {
        elementKey: 'temp',
        assetBase: '?',
        formIndex: '1',
        inputType: 'select',
        label: 'Temp',
        options: [
          {
            key: 'Hot',
            text: 'Hot'
          },
          {
            key: 'Warm',
            text: 'Warm'
          },
          {
            key: 'Cold',
            text: 'Cold'
          }
        ],
        tableColumn: '9',
        tableLabel: 'Temp',
        fqn: 'musculoskeletal.temp'
      },
      {
        elementKey: 'spacer72',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'musculoskeletal.spacer72'
      },
      {
        elementKey: 'useOfAmbulatoryAid',
        assetBase: '?',
        formIndex: '1',
        inputType: 'select',
        label: 'Use of ambulatory aid',
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
        tableColumn: '10',
        tableLabel: 'Use of ambulatory aid',
        fqn: 'musculoskeletal.useOfAmbulatoryAid'
      },
      {
        elementKey: 'type',
        assetBase: '?',
        formIndex: '1',
        inputType: 'select',
        label: 'Type',
        options: [
          {
            key: 'Walker',
            text: 'Walker'
          },
          {
            key: 'Cane',
            text: 'Cane'
          },
          {
            key: 'One crutch',
            text: 'One crutch'
          },
          {
            key: 'Two crutches',
            text: 'Two crutches'
          },
          {
            key: 'Wheelchair',
            text: 'Wheelchair'
          },
          {
            key: 'Other',
            text: 'Other'
          }
        ],
        tableColumn: '11',
        tableCss: 'hr-table',
        tableLabel: 'Type',
        fqn: 'musculoskeletal.type'
      },
      {
        elementKey: 'comments',
        assetBase: '?',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Comments',
        tableColumn: '12',
        tableLabel: 'Comments',
        fqn: 'musculoskeletal.comments'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Musculoskeletal assessment',
        addButtonText: 'Add a musculoskeletal assessment',
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
            label: 'Swelling',
            ehr_list_index: '2',
            items: [
              'swelling'
            ]
          },
          {
            label: 'Pain',
            ehr_list_index: '3',
            items: [
              'pain'
            ]
          },
          {
            label: 'Deformity',
            ehr_list_index: '4',
            items: [
              'deformity'
            ]
          },
          {
            label: 'Movement',
            ehr_list_index: '5',
            items: [
              'movement'
            ]
          },
          {
            label: 'Sensation',
            ehr_list_index: '6',
            items: [
              'sensation'
            ]
          },
          {
            label: 'Pulse',
            ehr_list_index: '7',
            items: [
              'pulse'
            ]
          },
          {
            label: 'Colour',
            ehr_list_index: '8',
            items: [
              'colour'
            ]
          },
          {
            label: 'Temp',
            ehr_list_index: '9',
            items: [
              'temp'
            ]
          },
          {
            label: 'Use of ambulatory aid',
            ehr_list_index: '10',
            items: [
              'useOfAmbulatoryAid'
            ]
          },
          {
            label: 'Type',
            tableCss: 'hr-table',
            ehr_list_index: '11',
            items: [
              'type'
            ]
          },
          {
            label: 'Comments',
            ehr_list_index: '12',
            items: [
              'comments'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Musculoskeletal assessment',
          addButtonText: 'Add a musculoskeletal assessment',
          formOption: 'transpose',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group70',
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
              elementKey: 'ehr_group71',
              gIndex: '2',
              gChildren: [
                'swelling',
                'pain',
                'deformity',
                'movement',
                'sensation',
                'pulse',
                'colour',
                'temp',
                'spacer72',
                'useOfAmbulatoryAid',
                'type'
              ]
            },
            {
              elementKey: 'ehr_group73',
              formCss: 'grid-left-to-right-1',
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
            swelling: '',
            pain: '',
            deformity: '',
            movement: '',
            sensation: '',
            pulse: '',
            colour: '',
            temp: '',
            useOfAmbulatoryAid: '',
            type: '',
            comments: ''
          }
        }
      }
    }
  },
  pain: {
    pageDataKey: 'pain',
    pageTitle: 'Pain assessment',
    pIndex: '20',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'pain.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'pain.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'pain.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'pain.time'
      },
      {
        elementKey: 'location',
        formIndex: '1',
        inputType: 'text',
        label: 'Location',
        tableColumn: '2',
        tableLabel: 'Location',
        fqn: 'pain.location'
      },
      {
        elementKey: 'painScale',
        formIndex: '1',
        inputType: 'text',
        label: 'Pain intensity (0-10)',
        suffix: '/10',
        tableColumn: '3',
        tableLabel: 'Pain intensity (0-10)',
        fqn: 'pain.painScale'
      },
      {
        elementKey: 'respiratoryRate',
        formIndex: '1',
        inputType: 'text',
        label: 'Respiratory rate',
        suffix: 'br/min',
        tableColumn: '4',
        tableLabel: 'Respiratory rate',
        fqn: 'pain.respiratoryRate'
      },
      {
        elementKey: 'onset',
        formIndex: '1',
        inputType: 'text',
        label: 'Onset',
        tableColumn: '5',
        tableLabel: 'Onset',
        fqn: 'pain.onset'
      },
      {
        elementKey: 'type',
        formIndex: '1',
        inputType: 'text',
        label: 'Type',
        tableColumn: '6',
        tableLabel: 'Type',
        fqn: 'pain.type'
      },
      {
        elementKey: 'alleviationAssociatedSymptoms',
        formIndex: '1',
        inputType: 'text',
        label: 'Alleviation & associated symptoms',
        tableColumn: '7',
        tableLabel: 'Alleviation & associated symptoms',
        fqn: 'pain.alleviationAssociatedSymptoms'
      },
      {
        elementKey: 'radiation',
        formIndex: '1',
        inputType: 'text',
        label: 'Radiation',
        tableColumn: '8',
        tableLabel: 'Radiation',
        fqn: 'pain.radiation'
      },
      {
        elementKey: 'precipitatingEvents',
        formIndex: '1',
        inputType: 'text',
        label: 'Precipitating events',
        tableColumn: '9',
        tableCss: 'hr-table',
        tableLabel: 'Precipitating events',
        fqn: 'pain.precipitatingEvents'
      },
      {
        elementKey: 'comments',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Comments',
        tableColumn: '10',
        tableCss: 'hr-table',
        tableLabel: 'Comments',
        fqn: 'pain.comments'
      },
      {
        elementKey: 'location',
        formIndex: '1',
        inputType: 'text',
        label: 'Location',
        tableColumn: '12',
        tableLabel: 'Location',
        fqn: 'pain.location'
      },
      {
        elementKey: 'painScale',
        formIndex: '1',
        inputType: 'text',
        label: 'Pain intensity (0-10)',
        suffix: '/10',
        tableColumn: '13',
        tableLabel: 'Pain intensity (0-10)',
        fqn: 'pain.painScale'
      },
      {
        elementKey: 'respiratoryRate',
        formIndex: '1',
        inputType: 'text',
        label: 'Respiratory rate',
        suffix: 'br/min',
        tableColumn: '14',
        tableLabel: 'Respiratory rate',
        fqn: 'pain.respiratoryRate'
      },
      {
        elementKey: 'onset',
        formIndex: '1',
        inputType: 'text',
        label: 'Onset',
        tableColumn: '15',
        tableLabel: 'Onset',
        fqn: 'pain.onset'
      },
      {
        elementKey: 'type',
        formIndex: '1',
        inputType: 'text',
        label: 'Type',
        tableColumn: '16',
        tableLabel: 'Type',
        fqn: 'pain.type'
      },
      {
        elementKey: 'alleviationAssociatedSymptoms',
        formIndex: '1',
        inputType: 'text',
        label: 'Alleviation & associated symptoms',
        tableColumn: '17',
        tableLabel: 'Alleviation & associated symptoms',
        fqn: 'pain.alleviationAssociatedSymptoms'
      },
      {
        elementKey: 'radiation',
        formIndex: '1',
        inputType: 'text',
        label: 'Radiation',
        tableColumn: '18',
        tableLabel: 'Radiation',
        fqn: 'pain.radiation'
      },
      {
        elementKey: 'precipitatingEvents',
        formIndex: '1',
        inputType: 'text',
        label: 'Precipitating events',
        tableColumn: '19',
        tableCss: 'hr-table',
        tableLabel: 'Precipitating events',
        fqn: 'pain.precipitatingEvents'
      },
      {
        elementKey: 'comments',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Comments',
        tableColumn: '20',
        tableLabel: 'Comments',
        fqn: 'pain.comments'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Pain assessment',
        addButtonText: 'Add a pain assessment',
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
            label: 'Location',
            ehr_list_index: '2',
            items: [
              'location'
            ]
          },
          {
            label: 'Pain intensity (0-10)',
            ehr_list_index: '3',
            items: [
              'painScale'
            ]
          },
          {
            label: 'Respiratory rate',
            ehr_list_index: '4',
            items: [
              'respiratoryRate'
            ]
          },
          {
            label: 'Onset',
            ehr_list_index: '5',
            items: [
              'onset'
            ]
          },
          {
            label: 'Type',
            ehr_list_index: '6',
            items: [
              'type'
            ]
          },
          {
            label: 'Alleviation & associated symptoms',
            ehr_list_index: '7',
            items: [
              'alleviationAssociatedSymptoms'
            ]
          },
          {
            label: 'Radiation',
            ehr_list_index: '8',
            items: [
              'radiation'
            ]
          },
          {
            label: 'Precipitating events',
            tableCss: 'hr-table',
            ehr_list_index: '9',
            items: [
              'precipitatingEvents'
            ]
          },
          {
            label: 'Comments',
            tableCss: 'hr-table',
            ehr_list_index: '10',
            items: [
              'comments'
            ]
          },
          {
            label: 'Location',
            ehr_list_index: '12',
            items: [
              'location'
            ]
          },
          {
            label: 'Pain intensity (0-10)',
            ehr_list_index: '13',
            items: [
              'painScale'
            ]
          },
          {
            label: 'Respiratory rate',
            ehr_list_index: '14',
            items: [
              'respiratoryRate'
            ]
          },
          {
            label: 'Onset',
            ehr_list_index: '15',
            items: [
              'onset'
            ]
          },
          {
            label: 'Type',
            ehr_list_index: '16',
            items: [
              'type'
            ]
          },
          {
            label: 'Alleviation & associated symptoms',
            ehr_list_index: '17',
            items: [
              'alleviationAssociatedSymptoms'
            ]
          },
          {
            label: 'Radiation',
            ehr_list_index: '18',
            items: [
              'radiation'
            ]
          },
          {
            label: 'Precipitating events',
            tableCss: 'hr-table',
            ehr_list_index: '19',
            items: [
              'precipitatingEvents'
            ]
          },
          {
            label: 'Comments',
            ehr_list_index: '20',
            items: [
              'comments'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Pain assessment',
          addButtonText: 'Add a pain assessment',
          formOption: 'transpose',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group87',
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
              elementKey: 'ehr_group88',
              label: 'Primary pain site',
              gIndex: '2',
              gChildren: [
                'location',
                'painScale',
                'respiratoryRate',
                'onset',
                'type',
                'alleviationAssociatedSymptoms',
                'radiation',
                'precipitatingEvents'
              ]
            },
            {
              elementKey: 'ehr_group89',
              formCss: 'grid-left-to-right-1 section-divider',
              gIndex: '3',
              gChildren: [
                'comments'
              ]
            },
            {
              elementKey: 'ehr_group90',
              label: 'Secondary pain site',
              gIndex: '4',
              gChildren: [
                'location',
                'painScale',
                'respiratoryRate',
                'onset',
                'type',
                'alleviationAssociatedSymptoms',
                'radiation',
                'precipitatingEvents'
              ]
            },
            {
              elementKey: 'ehr_group91',
              formCss: 'grid-left-to-right-1',
              gIndex: '5',
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
            location: '',
            painScale: '',
            respiratoryRate: '',
            onset: '',
            type: '',
            alleviationAssociatedSymptoms: '',
            radiation: '',
            precipitatingEvents: '',
            comments: ''
          }
        }
      }
    }
  },
  biopsychosocial: {
    pageDataKey: 'biopsychosocial',
    pageTitle: 'Biopsychosocial assessment',
    pIndex: '21',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'biopsychosocial.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'biopsychosocial.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'biopsychosocial.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'biopsychosocial.time'
      },
      {
        elementKey: 'domesticViolence',
        formIndex: '1',
        formCss: 'form_label_long',
        inputType: 'select',
        label: 'From our experience in the hospital, we know that domestic violence can be a problem. Is this a factor in your life?',
        options: [
          {
            key: 'Didn\'t ask',
            text: 'Didn\'t ask'
          },
          {
            key: 'Yes',
            text: 'Yes'
          },
          {
            key: 'No',
            text: 'No'
          }
        ],
        tableColumn: '2',
        tableLabel: 'Domestic violence?',
        fqn: 'biopsychosocial.domesticViolence'
      },
      {
        elementKey: 'requestContact',
        formIndex: '1',
        formCss: 'form_label_long',
        inputType: 'select',
        label: 'Would you like to speak to a social worker?',
        options: [
          {
            key: 'Didn\'t ask',
            text: 'Didn\'t ask'
          },
          {
            key: 'Yes',
            text: 'Yes'
          },
          {
            key: 'No',
            text: 'No'
          }
        ],
        tableColumn: '3',
        tableCss: 'hr-table',
        tableLabel: 'Social worker?',
        fqn: 'biopsychosocial.requestContact'
      },
      {
        elementKey: 'hygieneGrooming',
        formIndex: '1',
        inputType: 'select',
        label: 'Hygiene',
        options: [
          {
            key: 'Good',
            text: 'Good'
          },
          {
            key: 'Requires attention',
            text: 'Requires attention'
          }
        ],
        tableColumn: '4',
        tableLabel: 'Hygiene',
        fqn: 'biopsychosocial.hygieneGrooming'
      },
      {
        elementKey: 'hygieneComments',
        formIndex: '1',
        formCss: 'grid-span-2-columns',
        inputType: 'textarea',
        label: 'Hygiene comments',
        tableColumn: '5',
        tableCss: 'hr-table',
        tableLabel: 'Hygiene comments',
        fqn: 'biopsychosocial.hygieneComments'
      },
      {
        elementKey: 'behaviour',
        formIndex: '1',
        inputType: 'checkset',
        label: 'Behaviour',
        options: [
          {
            key: 'Calm',
            text: 'Calm'
          },
          {
            key: 'Cooperative',
            text: 'Cooperative'
          },
          {
            key: 'Agitated',
            text: 'Agitated'
          },
          {
            key: 'Flat affect',
            text: 'Flat affect'
          },
          {
            key: 'Threatening',
            text: 'Threatening'
          },
          {
            key: 'Physically agressive',
            text: 'Physically agressive'
          },
          {
            key: 'Uncommunicative',
            text: 'Uncommunicative'
          }
        ],
        tableColumn: '6',
        tableCss: 'hr-table',
        tableLabel: 'Behaviour',
        fqn: 'biopsychosocial.behaviour'
      },
      {
        elementKey: 'hallucinations',
        formIndex: '1',
        inputType: 'checkset',
        label: 'Hallucinations',
        options: [
          {
            key: 'None',
            text: 'None'
          },
          {
            key: 'Visual',
            text: 'Visual'
          },
          {
            key: 'Auditory',
            text: 'Auditory'
          },
          {
            key: 'Olafactory',
            text: 'Olafactory'
          }
        ],
        tableColumn: '7',
        tableCss: 'hr-table',
        tableLabel: 'Behaviour',
        fqn: 'biopsychosocial.hallucinations'
      },
      {
        elementKey: 'suicidal',
        formIndex: '1',
        inputType: 'select',
        label: 'Suicidal',
        options: [
          {
            key: 'None',
            text: 'None'
          },
          {
            key: 'Ideation',
            text: 'Ideation'
          },
          {
            key: 'Attempt',
            text: 'Attempt'
          }
        ],
        tableColumn: '8',
        tableLabel: 'Psychological state',
        fqn: 'biopsychosocial.suicidal'
      },
      {
        elementKey: 'homicidal',
        formIndex: '1',
        inputType: 'select',
        label: 'Homicidal',
        options: [
          {
            key: 'None',
            text: 'None'
          },
          {
            key: 'Ideation',
            text: 'Ideation'
          }
        ],
        tableColumn: '9',
        fqn: 'biopsychosocial.homicidal'
      },
      {
        elementKey: 'speech',
        formIndex: '1',
        inputType: 'select',
        label: 'Speech',
        options: [
          {
            key: 'Clear and coherent',
            text: 'Clear and coherent'
          },
          {
            key: 'Other',
            text: 'Other'
          }
        ],
        tableColumn: '10',
        tableCss: 'hr-table',
        fqn: 'biopsychosocial.speech'
      },
      {
        elementKey: 'supportPerson',
        formIndex: '1',
        inputType: 'text',
        label: 'Support person',
        tableColumn: '11',
        tableLabel: 'Support',
        fqn: 'biopsychosocial.supportPerson'
      },
      {
        elementKey: 'supportComments',
        formIndex: '1',
        formCss: 'grid-span-2-columns',
        inputType: 'textarea',
        label: 'Support comments',
        tableColumn: '12',
        tableCss: 'hr-table',
        fqn: 'biopsychosocial.supportComments'
      },
      {
        elementKey: 'securityPolicePresent',
        formIndex: '1',
        inputType: 'text',
        label: 'Security/police present',
        tableColumn: '13',
        tableLabel: 'Security',
        fqn: 'biopsychosocial.securityPolicePresent'
      },
      {
        elementKey: 'securityComments',
        formIndex: '1',
        formCss: 'grid-span-2-columns',
        inputType: 'textarea',
        label: 'Security comments',
        tableColumn: '14',
        tableCss: 'hr-table',
        fqn: 'biopsychosocial.securityComments'
      },
      {
        elementKey: 'patientRestrained',
        formIndex: '1',
        inputType: 'select',
        label: 'Patient restrained',
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
        tableColumn: '15',
        tableLabel: 'Patient restrained',
        fqn: 'biopsychosocial.patientRestrained'
      },
      {
        elementKey: 'restraintDay',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        tableColumn: '16',
        tableLabel: 'Day',
        fqn: 'biopsychosocial.restraintDay'
      },
      {
        elementKey: 'restraintTime',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        tableColumn: '17',
        tableLabel: 'Time',
        fqn: 'biopsychosocial.restraintTime'
      },
      {
        elementKey: 'restraintComments',
        formIndex: '1',
        formCss: 'grid-span-2-columns',
        inputType: 'textarea',
        label: 'Restraint comments',
        tableColumn: '18',
        tableCss: 'hr-table',
        tableLabel: 'Restraint comments',
        fqn: 'biopsychosocial.restraintComments'
      },
      {
        elementKey: 'generalComments',
        formIndex: '1',
        inputType: 'textarea',
        label: 'General comments',
        tableColumn: '19',
        tableLabel: 'General comments',
        fqn: 'biopsychosocial.generalComments'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Biopsychosocial assessment',
        addButtonText: 'Add a biopsychosocial assessment',
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
            label: 'Domestic violence?',
            ehr_list_index: '2',
            items: [
              'domesticViolence'
            ]
          },
          {
            label: 'Social worker?',
            tableCss: 'hr-table',
            ehr_list_index: '3',
            items: [
              'requestContact'
            ]
          },
          {
            label: 'Hygiene',
            ehr_list_index: '4',
            items: [
              'hygieneGrooming'
            ]
          },
          {
            label: 'Hygiene comments',
            tableCss: 'hr-table',
            ehr_list_index: '5',
            items: [
              'hygieneComments'
            ]
          },
          {
            label: 'Behaviour',
            tableCss: 'hr-table',
            ehr_list_index: '6',
            items: [
              'behaviour'
            ]
          },
          {
            label: 'Behaviour',
            tableCss: 'hr-table',
            ehr_list_index: '7',
            items: [
              'hallucinations'
            ]
          },
          {
            label: 'Psychological state',
            ehr_list_index: '8',
            items: [
              'suicidal'
            ]
          },
          {
            ehr_list_index: '9',
            items: [
              'homicidal'
            ]
          },
          {
            tableCss: 'hr-table',
            ehr_list_index: '10',
            items: [
              'speech'
            ]
          },
          {
            label: 'Support',
            ehr_list_index: '11',
            items: [
              'supportPerson'
            ]
          },
          {
            tableCss: 'hr-table',
            ehr_list_index: '12',
            items: [
              'supportComments'
            ]
          },
          {
            label: 'Security',
            ehr_list_index: '13',
            items: [
              'securityPolicePresent'
            ]
          },
          {
            tableCss: 'hr-table',
            ehr_list_index: '14',
            items: [
              'securityComments'
            ]
          },
          {
            label: 'Patient restrained',
            ehr_list_index: '15',
            items: [
              'patientRestrained'
            ]
          },
          {
            label: 'Day',
            ehr_list_index: '16',
            items: [
              'restraintDay'
            ]
          },
          {
            label: 'Time',
            ehr_list_index: '17',
            items: [
              'restraintTime'
            ]
          },
          {
            label: 'Restraint comments',
            tableCss: 'hr-table',
            ehr_list_index: '18',
            items: [
              'restraintComments'
            ]
          },
          {
            label: 'General comments',
            ehr_list_index: '19',
            items: [
              'generalComments'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Biopsychosocial assessment',
          addButtonText: 'Add a biopsychosocial assessment',
          formOption: 'transpose',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group92',
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
              elementKey: 'ehr_group93',
              formCss: 'section-divider grid-left-to-right-2',
              gIndex: '2',
              gChildren: [
                'domesticViolence',
                'requestContact'
              ]
            },
            {
              elementKey: 'ehr_group94',
              formCss: 'section-divider',
              gIndex: '3',
              gChildren: [
                'hygieneGrooming',
                'hygieneComments'
              ]
            },
            {
              elementKey: 'ehr_group95',
              formCss: 'section-divider grid-left-to-right-2',
              gIndex: '4',
              gChildren: [
                'behaviour',
                'hallucinations'
              ]
            },
            {
              elementKey: 'state',
              label: 'Psychological state',
              gIndex: '5',
              gChildren: [
                'suicidal',
                'homicidal',
                'speech'
              ]
            },
            {
              elementKey: 'support',
              label: 'Support',
              gIndex: '6',
              gChildren: [
                'supportPerson',
                'supportComments'
              ]
            },
            {
              elementKey: 'security',
              label: 'Security',
              gIndex: '7',
              gChildren: [
                'securityPolicePresent',
                'securityComments'
              ]
            },
            {
              elementKey: 'restraint',
              label: 'Restraint',
              gIndex: '8',
              gChildren: [
                'patientRestrained',
                'restraintDay',
                'restraintTime',
                'restraintComments'
              ]
            },
            {
              elementKey: 'ehr_group96',
              formCss: 'grid-left-to-right-1',
              gIndex: '9',
              gChildren: [
                'generalComments'
              ]
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            domesticViolence: '',
            requestContact: '',
            hygieneGrooming: '',
            hygieneComments: '',
            behaviour: '',
            hallucinations: '',
            suicidal: '',
            homicidal: '',
            speech: '',
            supportPerson: '',
            supportComments: '',
            securityPolicePresent: '',
            securityComments: '',
            patientRestrained: '',
            restraintDay: '',
            restraintTime: '',
            restraintComments: '',
            generalComments: ''
          }
        }
      }
    }
  },
  nonmedOrders: {
    pageDataKey: 'nonmedOrders',
    pageTitle: 'Orders',
    pIndex: '22',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'nonmedOrders.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'nonmedOrders.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'nonmedOrders.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'nonmedOrders.time'
      },
      {
        elementKey: 'order',
        formIndex: '1',
        formCss: 'grid-span-2-columns',
        inputType: 'text',
        label: 'Order',
        tableColumn: '2',
        tableLabel: 'Order',
        fqn: 'nonmedOrders.order'
      },
      {
        elementKey: 'orderedBy',
        formIndex: '1',
        inputType: 'text',
        label: 'Ordered by',
        mandatory: true,
        tableColumn: '3',
        tableLabel: 'Ordered by',
        fqn: 'nonmedOrders.orderedBy'
      },
      {
        elementKey: 'reason',
        formIndex: '1',
        formCss: 'grid-span-2-columns',
        inputType: 'text',
        label: 'Reason',
        tableColumn: '4',
        tableLabel: 'Reason',
        fqn: 'nonmedOrders.reason'
      },
      {
        elementKey: 'status',
        formIndex: '1',
        inputType: 'select',
        label: 'Status',
        mandatory: true,
        options: [
          {
            key: 'Ordered',
            text: 'Ordered'
          },
          {
            key: 'In process',
            text: 'In process'
          },
          {
            key: 'Cancelled',
            text: 'Cancelled'
          },
          {
            key: 'Completed',
            text: 'Completed'
          },
          {
            key: 'Discontinued',
            text: 'Discontinued'
          }
        ],
        tableColumn: '5',
        tableLabel: 'Status',
        fqn: 'nonmedOrders.status'
      },
      {
        elementKey: 'comment',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Comment',
        tableColumn: '6',
        tableLabel: 'Comment',
        fqn: 'nonmedOrders.comment'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Nonmedical orders',
        addButtonText: 'Add an order',
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
            label: 'Order',
            ehr_list_index: '2',
            items: [
              'order'
            ]
          },
          {
            label: 'Ordered by',
            ehr_list_index: '3',
            items: [
              'orderedBy'
            ]
          },
          {
            label: 'Reason',
            ehr_list_index: '4',
            items: [
              'reason'
            ]
          },
          {
            label: 'Status',
            ehr_list_index: '5',
            items: [
              'status'
            ]
          },
          {
            label: 'Comment',
            ehr_list_index: '6',
            items: [
              'comment'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Nonmedical orders',
          addButtonText: 'Add an order',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group97',
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
              elementKey: 'ehr_group98',
              gIndex: '2',
              gChildren: [
                'order',
                'orderedBy',
                'reason',
                'status'
              ]
            },
            {
              elementKey: 'ehr_group99',
              formCss: 'grid-left-to-right-1',
              gIndex: '3',
              gChildren: [
                'comment'
              ]
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            order: '',
            orderedBy: '',
            reason: '',
            status: '',
            comment: ''
          }
        }
      }
    }
  },
  referrals: {
    pageDataKey: 'referrals',
    pageTitle: 'Referrals to other disciplines',
    pIndex: '23',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'referrals.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'referrals.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'referrals.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'referrals.time'
      },
      {
        elementKey: 'referralName',
        formIndex: '1',
        inputType: 'text',
        label: 'Referral name',
        tableColumn: '2',
        tableLabel: 'Referral name',
        fqn: 'referrals.referralName'
      },
      {
        elementKey: 'referralProfession',
        formIndex: '1',
        inputType: 'text',
        label: 'Referral profession',
        tableColumn: '3',
        tableLabel: 'Referral profession',
        fqn: 'referrals.referralProfession'
      },
      {
        elementKey: 'spacer102',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'referrals.spacer102'
      },
      {
        elementKey: 'appointmentDate',
        formIndex: '1',
        inputType: 'date',
        label: 'Appointment date',
        tableColumn: '4',
        tableLabel: 'Appointment date',
        fqn: 'referrals.appointmentDate'
      },
      {
        elementKey: 'appointmentTime',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Appointment time',
        tableColumn: '5',
        tableLabel: 'Appointment time',
        fqn: 'referrals.appointmentTime'
      },
      {
        elementKey: 'status',
        formIndex: '1',
        inputType: 'select',
        label: 'Status',
        options: [
          {
            key: 'Active',
            text: 'Active'
          },
          {
            key: 'Discharged',
            text: 'Discharged'
          }
        ],
        tableColumn: '6',
        tableLabel: 'Status',
        fqn: 'referrals.status'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Referrals',
        addButtonText: 'Add a referral',
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
            label: 'Referral name',
            ehr_list_index: '2',
            items: [
              'referralName'
            ]
          },
          {
            label: 'Referral profession',
            ehr_list_index: '3',
            items: [
              'referralProfession'
            ]
          },
          {
            label: 'Appointment date',
            ehr_list_index: '4',
            items: [
              'appointmentDate'
            ]
          },
          {
            label: 'Appointment time',
            ehr_list_index: '5',
            items: [
              'appointmentTime'
            ]
          },
          {
            label: 'Status',
            ehr_list_index: '6',
            items: [
              'status'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Referrals',
          addButtonText: 'Add a referral',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group100',
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
              elementKey: 'ehr_group101',
              gIndex: '2',
              gChildren: [
                'referralName',
                'referralProfession',
                'spacer102',
                'appointmentDate',
                'appointmentTime',
                'status'
              ]
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            referralName: '',
            referralProfession: '',
            appointmentDate: '',
            appointmentTime: '',
            status: ''
          }
        }
      }
    }
  },
  labRequisitions: {
    pageDataKey: 'labRequisitions',
    pageTitle: 'Lab requisitions',
    pIndex: '24',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'labRequisitions.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'labRequisitions.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'labRequisitions.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
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
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
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
              elementKey: 'ehr_group112',
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
  },
  medicationOrders: {
    pageDataKey: 'medicationOrders',
    pageTitle: 'Medication orders',
    pIndex: '25',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'medicationOrders.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'medicationOrders.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'medicationOrders.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'medicationOrders.time'
      },
      {
        elementKey: 'medication',
        formIndex: '1',
        formCss: 'grid-span-2-columns',
        inputType: 'lookahead',
        label: '<a href=\'/assets/static-databases/drug.txt\' target=\'_blank\'>Medication</a>',
        tableColumn: '2',
        tableLabel: 'Medication',
        fqn: 'medicationOrders.medication'
      },
      {
        elementKey: 'dose',
        formIndex: '1',
        inputType: 'text',
        label: 'Dose',
        tableColumn: '3',
        tableLabel: 'Dose',
        fqn: 'medicationOrders.dose'
      },
      {
        elementKey: 'route',
        formIndex: '1',
        inputType: 'select',
        label: 'Route',
        options: [
          {
            key: 'Oral',
            text: 'Oral'
          },
          {
            key: 'Sublingual',
            text: 'Sublingual'
          },
          {
            key: 'Inhalation',
            text: 'Inhalation'
          },
          {
            key: 'Nasal',
            text: 'Nasal'
          },
          {
            key: 'Rectal',
            text: 'Rectal'
          },
          {
            key: 'Vaginal',
            text: 'Vaginal'
          },
          {
            key: 'Intravenous',
            text: 'Intravenous'
          },
          {
            key: 'Intramuscular',
            text: 'Intramuscular'
          },
          {
            key: 'Subcutaneous',
            text: 'Subcutaneous'
          }
        ],
        tableColumn: '4',
        tableLabel: 'Route',
        fqn: 'medicationOrders.route'
      },
      {
        elementKey: 'startMeds',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Start day',
        tableColumn: '5',
        tableLabel: 'Start day',
        fqn: 'medicationOrders.startMeds'
      },
      {
        elementKey: 'endMeds',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'End day',
        tableColumn: '6',
        tableCss: 'hr-table',
        tableLabel: 'End day',
        fqn: 'medicationOrders.endMeds'
      },
      {
        elementKey: 'administration',
        defaultValue: 'sched',
        formIndex: '1',
        inputType: 'select',
        label: 'Administration',
        options: [
          {
            key: 'sched',
            text: 'Scheduled'
          },
          {
            key: 'prn',
            text: 'PRN (as needed)'
          },
          {
            key: 'once',
            text: 'Once'
          },
          {
            key: 'stat',
            text: 'Stat'
          },
          {
            key: 'od',
            text: 'OD (Once a Day)'
          },
          {
            key: 'set',
            text: 'Set times'
          }
        ],
        tableColumn: '7',
        tableLabel: 'Administration',
        fqn: 'medicationOrders.administration'
      },
      {
        elementKey: 'scheduled',
        formIndex: '1',
        inputType: 'select',
        label: 'Scheduled',
        options: [
          {
            key: 'BID / q12h',
            text: 'BID / q12h'
          },
          {
            key: 'TID',
            text: 'TID'
          },
          {
            key: 'q8h',
            text: 'q8h'
          },
          {
            key: 'QID',
            text: 'QID'
          },
          {
            key: 'q6h',
            text: 'q6h'
          },
          {
            key: 'q4h',
            text: 'q4h'
          }
        ],
        tableColumn: '9',
        tableLabel: 'Scheduled',
        fqn: 'medicationOrders.scheduled'
      },
      {
        elementKey: 'prn1',
        formIndex: '1',
        inputType: 'text',
        label: 'PRN 1',
        tableColumn: '10',
        validation: 'time24',
        fqn: 'medicationOrders.prn1'
      },
      {
        elementKey: 'prn2',
        formIndex: '1',
        inputType: 'text',
        label: 'PRN 2',
        tableColumn: '11',
        validation: 'time24',
        fqn: 'medicationOrders.prn2'
      },
      {
        elementKey: 'prn3',
        formIndex: '1',
        inputType: 'text',
        label: 'PRN 3',
        tableColumn: '12',
        validation: 'time24',
        fqn: 'medicationOrders.prn3'
      },
      {
        elementKey: 'prn4',
        formIndex: '1',
        inputType: 'text',
        label: 'PRN 4',
        tableColumn: '13',
        validation: 'time24',
        fqn: 'medicationOrders.prn4'
      },
      {
        elementKey: 'prn5',
        formIndex: '1',
        inputType: 'text',
        label: 'PRN 5',
        tableColumn: '14',
        validation: 'time24',
        fqn: 'medicationOrders.prn5'
      },
      {
        elementKey: 'prn6',
        formIndex: '1',
        inputType: 'text',
        label: 'PRN 6',
        tableColumn: '15',
        validation: 'time24',
        fqn: 'medicationOrders.prn6'
      },
      {
        elementKey: 'once',
        formIndex: '1',
        inputType: 'text',
        label: 'Once',
        tableColumn: '10',
        fqn: 'medicationOrders.once'
      },
      {
        elementKey: 'stat',
        formIndex: '1',
        inputType: 'text',
        label: 'Stat',
        tableColumn: '10',
        fqn: 'medicationOrders.stat'
      },
      {
        elementKey: 'instructions',
        formIndex: '1',
        inputType: 'text',
        label: 'Instructions',
        tableColumn: '16',
        tableLabel: 'Instructions',
        fqn: 'medicationOrders.instructions'
      },
      {
        elementKey: 'reason',
        formIndex: '1',
        inputType: 'text',
        label: 'Reason',
        tableColumn: '17',
        tableLabel: 'Reason',
        fqn: 'medicationOrders.reason'
      },
      {
        elementKey: 'notes',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Notes',
        tableColumn: '18',
        tableLabel: 'Notes',
        fqn: 'medicationOrders.notes'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Medication orders',
        addButtonText: 'Add a medication order',
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
            label: 'Medication',
            ehr_list_index: '2',
            items: [
              'medication'
            ]
          },
          {
            label: 'Dose',
            ehr_list_index: '3',
            items: [
              'dose'
            ]
          },
          {
            label: 'Route',
            ehr_list_index: '4',
            items: [
              'route'
            ]
          },
          {
            label: 'Start day',
            ehr_list_index: '5',
            items: [
              'startMeds'
            ]
          },
          {
            label: 'End day',
            tableCss: 'hr-table',
            ehr_list_index: '6',
            items: [
              'endMeds'
            ]
          },
          {
            label: 'Administration',
            ehr_list_index: '7',
            items: [
              'administration'
            ]
          },
          {
            label: 'Scheduled',
            ehr_list_index: '9',
            items: [
              'scheduled'
            ]
          },
          {
            ehr_list_index: '10',
            items: [
              'prn1',
              'once',
              'stat'
            ]
          },
          {
            ehr_list_index: '11',
            items: [
              'prn2'
            ]
          },
          {
            ehr_list_index: '12',
            items: [
              'prn3'
            ]
          },
          {
            ehr_list_index: '13',
            items: [
              'prn4'
            ]
          },
          {
            ehr_list_index: '14',
            items: [
              'prn5'
            ]
          },
          {
            ehr_list_index: '15',
            items: [
              'prn6'
            ]
          },
          {
            label: 'Instructions',
            ehr_list_index: '16',
            items: [
              'instructions'
            ]
          },
          {
            label: 'Reason',
            ehr_list_index: '17',
            items: [
              'reason'
            ]
          },
          {
            label: 'Notes',
            ehr_list_index: '18',
            items: [
              'notes'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Medication orders',
          addButtonText: 'Add a medication order',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group103',
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
              elementKey: 'ehr_group104',
              gIndex: '2',
              gChildren: [
                'medication',
                'dose',
                'route',
                'startMeds',
                'endMeds'
              ]
            },
            {
              elementKey: 'adminGroup',
              gIndex: '3',
              gChildren: [
                'administration'
              ]
            },
            {
              elementKey: 'schedGroup',
              dependentOn: 'visble:administration=sched,prn',
              gIndex: '4',
              gChildren: [
                'scheduled'
              ]
            },
            {
              elementKey: 'prnGroup',
              dependentOn: 'visble:administration=set',
              gIndex: '5',
              gChildren: [
                'prn1',
                'prn2',
                'prn3',
                'prn4',
                'prn5',
                'prn6'
              ]
            },
            {
              elementKey: 'onceGroup',
              dependentOn: 'visble:administration=once',
              gIndex: '6',
              gChildren: [
                'once'
              ]
            },
            {
              elementKey: 'statGroup',
              dependentOn: 'visble:administration=stat',
              gIndex: '7',
              gChildren: [
                'stat'
              ]
            },
            {
              elementKey: 'ehr_group105',
              gIndex: '8',
              gChildren: [
                'instructions',
                'reason',
                'notes'
              ]
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            medication: '',
            dose: '',
            route: '',
            startMeds: '',
            endMeds: '',
            administration: 'sched',
            scheduled: '',
            prn1: '',
            prn2: '',
            prn3: '',
            prn4: '',
            prn5: '',
            prn6: '',
            once: '',
            stat: '',
            instructions: '',
            reason: '',
            notes: ''
          }
        }
      }
    }
  },
  medAdminRec: {
    pageDataKey: 'medAdminRec',
    pageTitle: 'Medication administration records',
    pIndex: '26',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'medStatus',
        formIndex: '1',
        inputType: 'select',
        label: 'Medication status',
        options: [
          {
            key: 'Active',
            text: 'Active'
          },
          {
            key: 'Hold',
            text: 'Hold'
          },
          {
            key: 'Discontinued',
            text: 'Discontinued'
          },
          {
            key: '',
            text: ''
          }
        ],
        tableColumn: '1',
        tableLabel: 'Medication status',
        fqn: 'medAdminRec.medStatus'
      },
      {
        elementKey: 'adminStatus',
        formIndex: '1',
        inputType: 'select',
        label: 'Administration status',
        options: [
          {
            key: 'Administered',
            text: 'Administered'
          },
          {
            key: 'Refused',
            text: 'Refused'
          },
          {
            key: 'Missed',
            text: 'Missed'
          },
          {
            key: 'Skipped',
            text: 'Skipped'
          }
        ],
        tableColumn: '2',
        tableLabel: 'Administration status',
        fqn: 'medAdminRec.adminStatus'
      },
      {
        elementKey: 'medication',
        formIndex: '1',
        inputType: 'text',
        label: 'Medication',
        tableColumn: '3',
        tableLabel: 'Medication',
        fqn: 'medAdminRec.medication'
      },
      {
        elementKey: 'route',
        formIndex: '1',
        inputType: 'text',
        label: 'Route',
        tableColumn: '4',
        tableLabel: 'Route',
        fqn: 'medAdminRec.route'
      },
      {
        elementKey: 'todayPlan',
        formIndex: '1',
        inputType: 'text',
        label: 'Today\'s plan',
        options: [
          {
            key: '[Today\'s day] plan',
            text: '[Today\'s day] plan'
          }
        ],
        tableColumn: '5',
        tableLabel: 'Today\'s plan',
        fqn: 'medAdminRec.todayPlan'
      },
      {
        elementKey: 'todayGiven',
        formIndex: '1',
        inputType: 'text',
        label: 'Today\'s given',
        options: [
          {
            key: '[Today\'s day] given',
            text: '[Today\'s day] given'
          }
        ],
        tableColumn: '6',
        tableLabel: 'Today\'s given',
        fqn: 'medAdminRec.todayGiven'
      },
      {
        elementKey: 'administeredBy',
        formIndex: '1',
        inputType: 'text',
        label: 'Administered by',
        tableColumn: '7',
        tableLabel: 'Administered by',
        fqn: 'medAdminRec.administeredBy'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'text',
        label: 'Profession',
        tableColumn: '8',
        tableLabel: 'Profession',
        fqn: 'medAdminRec.profession'
      },
      {
        elementKey: 'administeredTime',
        formIndex: '1',
        helperText: 'Enter time delivered or say if not delivered.',
        inputType: 'text',
        label: 'Administered time',
        tableColumn: '9',
        tableLabel: 'Administered time',
        fqn: 'medAdminRec.administeredTime',
        helperHtml: '<p>Enter time delivered or say if not delivered.</p>'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: false,
        label: 'Medication administration records',
        addButtonText: 'Administered',
        ehr_list: [
          {
            label: 'Medication status',
            ehr_list_index: '1',
            items: [
              'medStatus'
            ]
          },
          {
            label: 'Administration status',
            ehr_list_index: '2',
            items: [
              'adminStatus'
            ]
          },
          {
            label: 'Medication',
            ehr_list_index: '3',
            items: [
              'medication'
            ]
          },
          {
            label: 'Route',
            ehr_list_index: '4',
            items: [
              'route'
            ]
          },
          {
            label: 'Today\'s plan',
            ehr_list_index: '5',
            items: [
              'todayPlan'
            ]
          },
          {
            label: 'Today\'s given',
            ehr_list_index: '6',
            items: [
              'todayGiven'
            ]
          },
          {
            label: 'Administered by',
            ehr_list_index: '7',
            items: [
              'administeredBy'
            ]
          },
          {
            label: 'Profession',
            ehr_list_index: '8',
            items: [
              'profession'
            ]
          },
          {
            label: 'Administered time',
            ehr_list_index: '9',
            items: [
              'administeredTime'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Medication administration records',
          addButtonText: 'Administered',
          formOption: 'customCode',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group106',
              gIndex: '1',
              gChildren: [
                'medStatus',
                'adminStatus',
                'medication',
                'route',
                'todayPlan',
                'todayGiven',
                'administeredBy',
                'profession',
                'administeredTime'
              ]
            }
          ],
          ehr_data: {
            medStatus: '',
            adminStatus: '',
            medication: '',
            route: '',
            todayPlan: '',
            todayGiven: '',
            administeredBy: '',
            profession: '',
            administeredTime: ''
          }
        }
      }
    }
  },
  dischargeSummary: {
    pageDataKey: 'dischargeSummary',
    pageTitle: 'Discharge summary',
    pIndex: '27',
    hasGridForm: true,
    pageChildren: [
      {
        elementKey: 'admissionDay',
        defaultValue: '0',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Admission day',
        fqn: 'dischargeSummary.admissionDay'
      },
      {
        elementKey: 'dischargingPhysician/np',
        formIndex: '1',
        inputType: 'select',
        label: 'Discharging physician/NP',
        options: [
          {
            key: 'Dr. Notley',
            text: 'Dr. Notley'
          },
          {
            key: 'Dr. Hunicutt',
            text: 'Dr. Hunicutt'
          },
          {
            key: 'Dr. Lee',
            text: 'Dr. Lee'
          },
          {
            key: 'Dr. Malik',
            text: 'Dr. Malik'
          },
          {
            key: 'Dr. Ng',
            text: 'Dr. Ng'
          },
          {
            key: 'Dr. Walker',
            text: 'Dr. Walker'
          },
          {
            key: 'Dr. Brooks',
            text: 'Dr. Brooks'
          }
        ],
        fqn: 'dischargeSummary.dischargingPhysician/np'
      },
      {
        elementKey: 'spacer108',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'dischargeSummary.spacer108'
      },
      {
        elementKey: 'clinicalSummary',
        formIndex: '1',
        formCss: 'grid-span-2-columns section-divider',
        inputType: 'textarea',
        label: 'Clinical summary',
        fqn: 'dischargeSummary.clinicalSummary'
      },
      {
        elementKey: 'dischargeDiagnosis',
        formIndex: '2',
        inputType: 'textarea',
        label: 'Discharge diagnosis',
        fqn: 'dischargeSummary.dischargeDiagnosis'
      },
      {
        elementKey: 'dischargeEducation',
        formIndex: '2',
        inputType: 'textarea',
        label: 'Discharge education',
        fqn: 'dischargeSummary.dischargeEducation'
      },
      {
        elementKey: 'spacer110',
        formIndex: '2',
        inputType: 'spacer',
        fqn: 'dischargeSummary.spacer110'
      },
      {
        elementKey: 'dischargeDay',
        formIndex: '2',
        inputType: 'visitDay',
        label: 'Discharge day',
        fqn: 'dischargeSummary.dischargeDay'
      },
      {
        elementKey: 'dischargeTime',
        formIndex: '2',
        inputType: 'visitTime',
        label: 'Discharge time',
        fqn: 'dischargeSummary.dischargeTime'
      },
      {
        elementKey: 'dischargedTo',
        formIndex: '2',
        inputType: 'select',
        label: 'Discharged to',
        options: [
          {
            key: 'Home',
            text: 'Home'
          },
          {
            key: 'Expired',
            text: 'Expired'
          },
          {
            key: 'Transferred',
            text: 'Transferred'
          }
        ],
        fqn: 'dischargeSummary.dischargedTo'
      },
      {
        elementKey: 'transferedTo',
        formIndex: '2',
        inputType: 'text',
        label: 'Transferred to',
        fqn: 'dischargeSummary.transferedTo'
      },
      {
        elementKey: 'leavingBy',
        formIndex: '2',
        inputType: 'select',
        label: 'Leaving by',
        options: [
          {
            key: 'Taxi',
            text: 'Taxi'
          },
          {
            key: 'Family',
            text: 'Family'
          },
          {
            key: 'Ambulance',
            text: 'Ambulance'
          },
          {
            key: 'Walk out/wheelchair',
            text: 'Walk out/wheelchair'
          }
        ],
        fqn: 'dischargeSummary.leavingBy'
      }
    ],
    pageElements: {
      pageForm: {
        elementKey: 'pageForm',
        formKey: 'pageForm',
        isPageForm: true,
        ehr_groups: [
          {
            elementKey: 'ehr_group107',
            gIndex: '1',
            gChildren: [
              'admissionDay',
              'dischargingPhysician/np',
              'spacer108',
              'clinicalSummary'
            ]
          }
        ]
      },
      pageForm2: {
        elementKey: 'pageForm2',
        formKey: 'pageForm2',
        isPageForm: true,
        ehr_groups: [
          {
            elementKey: 'ehr_group109',
            gIndex: '1',
            gChildren: [
              'dischargeDiagnosis',
              'dischargeEducation',
              'spacer110',
              'dischargeDay',
              'dischargeTime',
              'dischargedTo',
              'transferedTo',
              'leavingBy'
            ]
          }
        ]
      }
    }
  },
  billing: {
    pageDataKey: 'billing',
    pageTitle: 'Billing',
    pIndex: '28',
    hasGridForm: true,
    pageChildren: [
      {
        elementKey: 'paymentType',
        formIndex: '1',
        inputType: 'checkset',
        label: 'Payment type',
        options: [
          {
            key: 'MSP',
            text: 'MSP'
          },
          {
            key: 'Third party',
            text: 'Third party'
          },
          {
            key: 'Federal',
            text: 'Federal'
          }
        ],
        fqn: 'billing.paymentType'
      }
    ],
    pageElements: {
      pageForm: {
        elementKey: 'pageForm',
        formKey: 'pageForm',
        isPageForm: true,
        ehr_groups: [
          {
            elementKey: 'ehr_group111',
            gIndex: '1',
            gChildren: [
              'paymentType'
            ]
          }
        ]
      }
    }
  },
  progressNotes: {
    pageDataKey: 'progressNotes',
    pageTitle: 'Progress notes',
    pIndex: '29',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'progressNotes.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'progressNotes.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'progressNotes.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'progressNotes.time'
      },
      {
        elementKey: 'note',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Encounter note',
        tableColumn: '2',
        tableLabel: 'Encounter note',
        fqn: 'progressNotes.note'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Progress notes',
        addButtonText: 'Add an encounter note',
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
            label: 'Encounter note',
            ehr_list_index: '2',
            items: [
              'note'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Progress notes',
          addButtonText: 'Add an encounter note',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group113',
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
              elementKey: 'ehr_group114',
              formCss: 'grid-left-to-right-1',
              gIndex: '2',
              gChildren: [
                'note'
              ]
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            note: ''
          }
        }
      }
    }
  },
  carePlan: {
    pageDataKey: 'carePlan',
    pageTitle: 'Interprofessional plan of care',
    pIndex: '30',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'carePlan.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'carePlan.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'carePlan.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'carePlan.time'
      },
      {
        elementKey: 'clinical',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Clinical issue',
        tableColumn: '2',
        tableLabel: 'Clinical issue',
        fqn: 'carePlan.clinical'
      },
      {
        elementKey: 'goal',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Goal of care',
        tableColumn: '3',
        tableLabel: 'Goal of care',
        fqn: 'carePlan.goal'
      },
      {
        elementKey: 'interventions',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Intervention',
        tableColumn: '4',
        tableLabel: 'Intervention',
        fqn: 'carePlan.interventions'
      },
      {
        elementKey: 'evaluation',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Evaluation of intervention',
        tableColumn: '5',
        tableLabel: 'Evaluation of intervention',
        fqn: 'carePlan.evaluation'
      },
      {
        elementKey: 'status',
        formIndex: '1',
        inputType: 'select',
        label: 'Status',
        options: [
          {
            key: 'In progress',
            text: 'In progress'
          },
          {
            key: 'Complete',
            text: 'Complete'
          }
        ],
        tableColumn: '6',
        tableLabel: 'Status',
        fqn: 'carePlan.status'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Care plan',
        addButtonText: 'Add a care plan',
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
            label: 'Clinical issue',
            ehr_list_index: '2',
            items: [
              'clinical'
            ]
          },
          {
            label: 'Goal of care',
            ehr_list_index: '3',
            items: [
              'goal'
            ]
          },
          {
            label: 'Intervention',
            ehr_list_index: '4',
            items: [
              'interventions'
            ]
          },
          {
            label: 'Evaluation of intervention',
            ehr_list_index: '5',
            items: [
              'evaluation'
            ]
          },
          {
            label: 'Status',
            ehr_list_index: '6',
            items: [
              'status'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Care plan',
          addButtonText: 'Add a care plan',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group115',
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
              elementKey: 'ehr_group116',
              gIndex: '2',
              gChildren: [
                'clinical',
                'goal',
                'interventions',
                'evaluation',
                'status'
              ]
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            clinical: '',
            goal: '',
            interventions: '',
            evaluation: '',
            status: ''
          }
        }
      }
    }
  },
  consults: {
    pageDataKey: 'consults',
    pageTitle: 'Consults',
    pIndex: '31',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'consults.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'consults.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'consults.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'consults.time'
      },
      {
        elementKey: 'consultReport',
        formIndex: '1',
        inputType: 'ehrFile',
        label: 'Consult Report',
        tableColumn: '2',
        tableLabel: 'Consult Report',
        fqn: 'consults.consultReport'
      },
      {
        elementKey: 'comments',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Comments',
        tableColumn: '3',
        tableLabel: 'Comments',
        fqn: 'consults.comments'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Consults',
        addButtonText: 'Add a consulttion report',
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
            label: 'Consult Report',
            ehr_list_index: '2',
            items: [
              'consultReport'
            ]
          },
          {
            label: 'Comments',
            ehr_list_index: '3',
            items: [
              'comments'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Consults',
          addButtonText: 'Add a consulttion report',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group119',
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
              elementKey: 'ehr_group120',
              gIndex: '2',
              gChildren: [
                'consultReport',
                'comments'
              ]
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            consultReport: '',
            comments: ''
          }
        }
      }
    }
  },
  labResults: {
    pageDataKey: 'labResults',
    pageTitle: 'Laboratory reports',
    pIndex: '32',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'labResults.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'labResults.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'labResults.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'labResults.time'
      },
      {
        elementKey: 'laboratoryReport',
        formIndex: '1',
        inputType: 'ehrFile',
        label: 'Laboratory Report',
        tableColumn: '2',
        tableLabel: 'Laboratory Report',
        fqn: 'labResults.laboratoryReport'
      },
      {
        elementKey: 'comments',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Comments',
        tableColumn: '3',
        tableLabel: 'Comments',
        fqn: 'labResults.comments'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Laboratory reports',
        addButtonText: 'Add a laboratory report',
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
            label: 'Laboratory Report',
            ehr_list_index: '2',
            items: [
              'laboratoryReport'
            ]
          },
          {
            label: 'Comments',
            ehr_list_index: '3',
            items: [
              'comments'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Laboratory reports',
          addButtonText: 'Add a laboratory report',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group121',
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
              elementKey: 'ehr_group122',
              gIndex: '2',
              gChildren: [
                'laboratoryReport',
                'comments'
              ]
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            laboratoryReport: '',
            comments: ''
          }
        }
      }
    }
  },
  medicalImaging: {
    pageDataKey: 'medicalImaging',
    pageTitle: 'Medical imaging',
    pIndex: '33',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'medicalImaging.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'medicalImaging.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'medicalImaging.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'medicalImaging.time'
      },
      {
        elementKey: 'laboratoryReport',
        formIndex: '1',
        inputType: 'ehrFile',
        label: 'Medical imaging',
        tableColumn: '2',
        tableLabel: 'Medical imaging',
        fqn: 'medicalImaging.laboratoryReport'
      },
      {
        elementKey: 'comments',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Comments',
        tableColumn: '3',
        tableLabel: 'Comments',
        fqn: 'medicalImaging.comments'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Medical imaging',
        addButtonText: 'Add a report or image',
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
            label: 'Medical imaging',
            ehr_list_index: '2',
            items: [
              'laboratoryReport'
            ]
          },
          {
            label: 'Comments',
            ehr_list_index: '3',
            items: [
              'comments'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Medical imaging',
          addButtonText: 'Add a report or image',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group123',
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
              elementKey: 'ehr_group124',
              gIndex: '2',
              gChildren: [
                'laboratoryReport',
                'comments'
              ]
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            laboratoryReport: '',
            comments: ''
          }
        }
      }
    }
  },
  operationReports: {
    pageDataKey: 'operationReports',
    pageTitle: 'Operative and anaesthesia records',
    pIndex: '34',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'operationReports.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'operationReports.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'operationReports.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'operationReports.time'
      },
      {
        elementKey: 'laboratoryReport',
        formIndex: '1',
        inputType: 'ehrFile',
        label: 'Operative and anaesthesia records',
        tableColumn: '2',
        tableLabel: 'Operative and anaesthesia records',
        fqn: 'operationReports.laboratoryReport'
      },
      {
        elementKey: 'comments',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Comments',
        tableColumn: '3',
        tableLabel: 'Comments',
        fqn: 'operationReports.comments'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Operative and anaesthesia records',
        addButtonText: 'Add a report',
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
            label: 'Operative and anaesthesia records',
            ehr_list_index: '2',
            items: [
              'laboratoryReport'
            ]
          },
          {
            label: 'Comments',
            ehr_list_index: '3',
            items: [
              'comments'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Operative and anaesthesia records',
          addButtonText: 'Add a report',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group125',
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
              elementKey: 'ehr_group126',
              gIndex: '2',
              gChildren: [
                'laboratoryReport',
                'comments'
              ]
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            laboratoryReport: '',
            comments: ''
          }
        }
      }
    }
  },
  assessmentTools: {
    pageDataKey: 'assessmentTools',
    pageTitle: 'Standardized assessment tools',
    pIndex: '35',
    hasGridForm: true,
    pageChildren: [
      {
        elementKey: 'admissions1_1',
        assetBase: 'standardized-assessment-tools',
        assetName: 'the-canadian-ed-triage-and-acuity-scale.gif',
        formIndex: '1',
        inputType: 'assetLink',
        label: 'Triage scale',
        fqn: 'assessmentTools.admissions1_1'
      },
      {
        elementKey: 'admissions2_1',
        assetBase: 'standardized-assessment-tools',
        assetName: 'patient-health-questionnaire.pdf',
        formIndex: '1',
        inputType: 'assetLink',
        label: 'Patient health questionaire',
        fqn: 'assessmentTools.admissions2_1'
      },
      {
        elementKey: 'admissions3_1',
        assetBase: 'standardized-assessment-tools',
        assetName: 'audit.pdf',
        formIndex: '1',
        inputType: 'assetLink',
        label: 'Alcohol consumption',
        fqn: 'assessmentTools.admissions3_1'
      },
      {
        elementKey: 'painAssessment1_1',
        assetBase: 'standardized-assessment-tools',
        assetName: 'opqrstuv.pdf',
        formIndex: '1',
        inputType: 'assetLink',
        label: 'OPQRSTUV',
        fqn: 'assessmentTools.painAssessment1_1'
      },
      {
        elementKey: 'painAssessment2_1',
        assetBase: 'standardized-assessment-tools',
        assetName: 'numeric-rating-scale.pdf',
        formIndex: '1',
        inputType: 'assetLink',
        label: '0-10 numeric rating scale',
        fqn: 'assessmentTools.painAssessment2_1'
      },
      {
        elementKey: 'neuroAssessment1_1',
        assetBase: 'standardized-assessment-tools',
        assetName: 'glasgow-coma-scale.pdf',
        formIndex: '1',
        inputType: 'assetLink',
        label: 'Glasgow coma scale',
        fqn: 'assessmentTools.neuroAssessment1_1'
      },
      {
        elementKey: 'neuroAssessment2_1',
        assetBase: 'standardized-assessment-tools',
        assetName: 'mini-mental-health-screen.pdf',
        formIndex: '1',
        inputType: 'assetLink',
        label: 'Mini mental state examination',
        fqn: 'assessmentTools.neuroAssessment2_1'
      },
      {
        elementKey: 'neuroAssessment3_1',
        assetBase: 'standardized-assessment-tools',
        assetName: 'richmond-agitation-sedation-scale-rass.pdf',
        formIndex: '1',
        inputType: 'assetLink',
        label: 'Richmond agitation scale',
        fqn: 'assessmentTools.neuroAssessment3_1'
      },
      {
        elementKey: 'fallRisk1_1',
        assetBase: 'standardized-assessment-tools',
        assetName: 'fall-risk-assessment-tool.pdf',
        formIndex: '1',
        inputType: 'assetLink',
        label: 'Fall assessment',
        fqn: 'assessmentTools.fallRisk1_1'
      },
      {
        elementKey: 'fallRisk2_1',
        assetBase: 'standardized-assessment-tools',
        assetName: 'risk-for-falls.png',
        formIndex: '1',
        inputType: 'assetLink',
        label: 'Risk for falls',
        fqn: 'assessmentTools.fallRisk2_1'
      },
      {
        elementKey: 'notes1_1',
        assetBase: 'standardized-assessment-tools',
        assetName: 'consultation-form.pdf',
        formIndex: '1',
        inputType: 'assetLink',
        label: 'Consult and referral note template',
        fqn: 'assessmentTools.notes1_1'
      },
      {
        elementKey: 'educational1_1',
        assetBase: 'standardized-assessment-tools',
        assetName: 'copd-assessment-test.pdf',
        formIndex: '1',
        inputType: 'assetLink',
        label: 'COPD assessment',
        fqn: 'assessmentTools.educational1_1'
      },
      {
        elementKey: 'educational2_1',
        assetBase: 'standardized-assessment-tools',
        assetName: 'bristol-stool-chart.pdf',
        formIndex: '1',
        inputType: 'assetLink',
        label: 'Bristol stool chart',
        fqn: 'assessmentTools.educational2_1'
      },
      {
        elementKey: 'wound1_1',
        assetBase: 'standardized-assessment-tools',
        assetName: 'braden-scale.pdf',
        formIndex: '1',
        inputType: 'assetLink',
        label: 'Braden scale',
        fqn: 'assessmentTools.wound1_1'
      },
      {
        elementKey: 'medication1_1',
        assetBase: 'standardized-assessment-tools',
        assetName: 'best_possible_medication.pdf',
        formIndex: '1',
        inputType: 'assetLink',
        label: 'Best possible medication history',
        fqn: 'assessmentTools.medication1_1'
      }
    ],
    pageElements: {
      pageForm: {
        elementKey: 'pageForm',
        formKey: 'pageForm',
        isPageForm: true,
        ehr_groups: [
          {
            elementKey: 'ehr_group149',
            gIndex: '1',
            gChildren: [
              {
                elementKey: 'admissions',
                label: 'Admissions',
                sgChildren: [
                  'admissions1_1',
                  'admissions2_1',
                  'admissions3_1'
                ]
              },
              {
                elementKey: 'painAssessment',
                label: 'Pain assessment',
                sgChildren: [
                  'painAssessment1_1',
                  'painAssessment2_1'
                ]
              },
              {
                elementKey: 'neuroAssessment',
                label: 'Neurological assessment',
                sgChildren: [
                  'neuroAssessment1_1',
                  'neuroAssessment2_1',
                  'neuroAssessment3_1'
                ]
              },
              {
                elementKey: 'fallRisk',
                label: 'Falls risk',
                sgChildren: [
                  'fallRisk1_1',
                  'fallRisk2_1'
                ]
              },
              {
                elementKey: 'notes',
                label: 'Notes',
                sgChildren: [
                  'notes1_1'
                ]
              },
              {
                elementKey: 'educational',
                label: 'Educational resources',
                sgChildren: [
                  'educational1_1',
                  'educational2_1'
                ]
              },
              {
                elementKey: 'wound',
                label: 'Wound assessment',
                sgChildren: [
                  'wound1_1'
                ]
              },
              {
                elementKey: 'medication',
                label: 'Medication',
                sgChildren: [
                  'medication1_1'
                ]
              }
            ]
          }
        ]
      }
    }
  },
  codeLookup: {
    pageDataKey: 'codeLookup',
    pageTitle: 'Code lookup',
    pIndex: '36',
    hasGridForm: true,
    pageChildren: [
      {
        elementKey: 'snomed',
        formIndex: '1',
        inputType: 'text',
        label: 'SnomedCT',
        fqn: 'codeLookup.snomed'
      },
      {
        elementKey: 'icf',
        formIndex: '1',
        inputType: 'text',
        label: 'ICB',
        fqn: 'codeLookup.icf'
      }
    ],
    pageElements: {
      pageForm: {
        elementKey: 'pageForm',
        formKey: 'pageForm',
        isPageForm: true,
        ehr_groups: [
          {
            elementKey: 'ehr_group150',
            gIndex: '1',
            gChildren: [
              'snomed',
              'icf'
            ]
          }
        ]
      }
    }
  },
  diagnosticCodes: {
    pageDataKey: 'diagnosticCodes',
    pageTitle: 'Diagnostic codes (ICD-10)',
    pIndex: '37',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'diagnosticCodes.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'diagnosticCodes.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'diagnosticCodes.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'diagnosticCodes.time'
      },
      {
        elementKey: 'icd10',
        assetBase: 'static-databases',
        assetName: 'icd-10-medical-diagnosis-codes.pdf',
        formIndex: '1',
        inputType: 'text',
        label: '<a href=\'/assets/static-databases/icd-10-medical-diagnosis-codes.pdf\' target=\'_blank\'>ICD-10 database</a>',
        tableColumn: '2',
        tableLabel: 'ICD-10',
        fqn: 'diagnosticCodes.icd10'
      },
      {
        elementKey: 'condition',
        formIndex: '1',
        inputType: 'text',
        label: 'Condition',
        mandatory: 'yes',
        tableColumn: '3',
        tableLabel: 'Condition',
        fqn: 'diagnosticCodes.condition'
      },
      {
        elementKey: 'code',
        formIndex: '1',
        inputType: 'text',
        label: 'Diagnosis code',
        mandatory: 'yes',
        tableColumn: '4',
        tableLabel: 'Diagnosis code',
        fqn: 'diagnosticCodes.code'
      },
      {
        elementKey: 'type',
        formIndex: '1',
        inputType: 'select',
        label: 'Diagnosis type',
        mandatory: 'yes',
        options: [
          {
            key: 'M',
            text: 'M'
          },
          {
            key: '1',
            text: '1'
          },
          {
            key: '2',
            text: '2'
          },
          {
            key: '3',
            text: '3'
          }
        ],
        tableColumn: '5',
        tableLabel: 'Diagnosis type',
        fqn: 'diagnosticCodes.type'
      },
      {
        elementKey: 'prefix',
        formIndex: '1',
        inputType: 'text',
        label: 'Prefix',
        mandatory: 'no',
        tableColumn: '6',
        tableLabel: 'Prefix',
        fqn: 'diagnosticCodes.prefix'
      },
      {
        elementKey: 'cluster',
        formIndex: '1',
        inputType: 'text',
        label: 'Diagnosis cluster',
        mandatory: 'no',
        tableColumn: '7',
        tableLabel: 'Diagnosis cluster',
        fqn: 'diagnosticCodes.cluster'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Diagnostic codes (ICD-10)',
        addButtonText: 'Add a diagnostic code',
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
            label: 'ICD-10',
            ehr_list_index: '2',
            items: [
              'icd10'
            ]
          },
          {
            label: 'Condition',
            ehr_list_index: '3',
            items: [
              'condition'
            ]
          },
          {
            label: 'Diagnosis code',
            ehr_list_index: '4',
            items: [
              'code'
            ]
          },
          {
            label: 'Diagnosis type',
            ehr_list_index: '5',
            items: [
              'type'
            ]
          },
          {
            label: 'Prefix',
            ehr_list_index: '6',
            items: [
              'prefix'
            ]
          },
          {
            label: 'Diagnosis cluster',
            ehr_list_index: '7',
            items: [
              'cluster'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Diagnostic codes (ICD-10)',
          addButtonText: 'Add a diagnostic code',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group151',
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
              elementKey: 'ehr_group152',
              gIndex: '2',
              gChildren: [
                'icd10',
                'condition',
                'code',
                'type',
                'prefix',
                'cluster'
              ]
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            icd10: '',
            condition: '',
            code: '',
            type: '',
            prefix: '',
            cluster: ''
          }
        }
      }
    }
  },
  interventionCodes: {
    pageDataKey: 'interventionCodes',
    pageTitle: 'Intervention codes',
    pIndex: '38',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'interventionCodes.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'interventionCodes.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'interventionCodes.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'interventionCodes.time'
      },
      {
        elementKey: 'intervention',
        formIndex: '1',
        inputType: 'text',
        label: 'Intervention',
        tableColumn: '2',
        tableLabel: 'Intervention',
        fqn: 'interventionCodes.intervention'
      },
      {
        elementKey: 'status',
        formIndex: '1',
        inputType: 'text',
        label: 'Status',
        tableColumn: '3',
        tableLabel: 'Status',
        fqn: 'interventionCodes.status'
      },
      {
        elementKey: 'laterally',
        formIndex: '1',
        inputType: 'text',
        label: 'Laterally',
        tableColumn: '4',
        tableLabel: 'Laterally',
        fqn: 'interventionCodes.laterally'
      },
      {
        elementKey: 'extent',
        formIndex: '1',
        inputType: 'text',
        label: 'Extent',
        tableColumn: '5',
        tableLabel: 'Extent',
        fqn: 'interventionCodes.extent'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Intervention codes',
        addButtonText: 'Add an intervention code',
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
            label: 'Intervention',
            ehr_list_index: '2',
            items: [
              'intervention'
            ]
          },
          {
            label: 'Status',
            ehr_list_index: '3',
            items: [
              'status'
            ]
          },
          {
            label: 'Laterally',
            ehr_list_index: '4',
            items: [
              'laterally'
            ]
          },
          {
            label: 'Extent',
            ehr_list_index: '5',
            items: [
              'extent'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Intervention codes',
          addButtonText: 'Add an intervention code',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group153',
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
              elementKey: 'ehr_group154',
              formCss: 'grid-left-to-right-1',
              gIndex: '2',
              gChildren: [
                'intervention',
                'status',
                'laterally',
                'extent'
              ]
            },
            {
              elementKey: 'label',
              label: 'Intervention code attributes',
              gIndex: '3',
              gChildren: []
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            intervention: '',
            status: '',
            laterally: '',
            extent: ''
          }
        }
      }
    }
  },
  caseMixGroup: {
    pageDataKey: 'caseMixGroup',
    pageTitle: 'Case mix group',
    pIndex: '39',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'caseMixGroup.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'caseMixGroup.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'caseMixGroup.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'caseMixGroup.time'
      },
      {
        elementKey: 'clinicalCategory',
        formIndex: '1',
        inputType: 'text',
        label: 'Major clinical category',
        tableColumn: '2',
        tableLabel: 'Category',
        fqn: 'caseMixGroup.clinicalCategory'
      },
      {
        elementKey: 'caseMixNumber',
        formIndex: '1',
        inputType: 'text',
        label: 'Case mix number',
        tableColumn: '3',
        tableLabel: 'Case mix number',
        fqn: 'caseMixGroup.caseMixNumber'
      },
      {
        elementKey: 'resourceIntensity',
        formIndex: '1',
        inputType: 'text',
        label: 'Resource intensity weight',
        tableColumn: '4',
        tableLabel: 'Resource intensity weight',
        fqn: 'caseMixGroup.resourceIntensity'
      },
      {
        elementKey: 'expectedStay',
        formIndex: '1',
        inputType: 'text',
        label: 'Expected length of stay',
        tableColumn: '5',
        tableLabel: 'Expected length of stay',
        fqn: 'caseMixGroup.expectedStay'
      },
      {
        elementKey: 'analysis',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Analysis',
        tableColumn: '6',
        tableLabel: 'Analysis',
        fqn: 'caseMixGroup.analysis'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Case mix group',
        addButtonText: 'Add a case mix group',
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
            label: 'Category',
            ehr_list_index: '2',
            items: [
              'clinicalCategory'
            ]
          },
          {
            label: 'Case mix number',
            ehr_list_index: '3',
            items: [
              'caseMixNumber'
            ]
          },
          {
            label: 'Resource intensity weight',
            ehr_list_index: '4',
            items: [
              'resourceIntensity'
            ]
          },
          {
            label: 'Expected length of stay',
            ehr_list_index: '5',
            items: [
              'expectedStay'
            ]
          },
          {
            label: 'Analysis',
            ehr_list_index: '6',
            items: [
              'analysis'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Case mix group',
          addButtonText: 'Add a case mix group',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group155',
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
              elementKey: 'ehr_group156',
              gIndex: '2',
              gChildren: [
                'clinicalCategory',
                'caseMixNumber',
                'resourceIntensity',
                'expectedStay',
                'analysis'
              ]
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            clinicalCategory: '',
            caseMixNumber: '',
            resourceIntensity: '',
            expectedStay: '',
            analysis: ''
          }
        }
      }
    }
  },
  testPage: {
    pageDataKey: 'testPage',
    pageTitle: 'Test Page',
    pIndex: '40',
    hasGridTable: true,
    hasGridForm: true,
    pageChildren: [
      {
        elementKey: 'pform_label',
        formIndex: '1',
        inputType: 'form_label',
        label: '<b>a form <i>label</i></b>',
        fqn: 'testPage.pform_label'
      },
      {
        elementKey: 'pspacer',
        formIndex: '1',
        inputType: 'spacer',
        label: 'spacer',
        fqn: 'testPage.pspacer'
      },
      {
        elementKey: 'name',
        defaultValue: '80',
        formIndex: '1',
        inputType: 'text',
        label: 'weight',
        mandatory: true,
        suffix: 'lb',
        fqn: 'testPage.name'
      },
      {
        elementKey: 'pcheckbox',
        defaultValue: true,
        formIndex: '1',
        helperText: 'a checkbox iinput',
        inputType: 'checkbox',
        label: 'checkbox',
        fqn: 'testPage.pcheckbox',
        helperHtml: '<p>a checkbox iinput</p>'
      },
      {
        elementKey: 'defaultText',
        defaultValue: 'some default',
        dependentOn: 'disable:pcheckbox',
        formIndex: '1',
        helperText: 'a text input',
        inputType: 'text',
        label: 'disabledOnCheck',
        fqn: 'testPage.defaultText',
        helperHtml: '<p>a text input</p>'
      },
      {
        elementKey: 'passetLink',
        assetBase: 'standardized-assessment-tools',
        assetName: 'the-canadian-ed-triage-and-acuity-scale.gif',
        formIndex: '1',
        inputType: 'assetLink',
        label: 'assetLink',
        fqn: 'testPage.passetLink'
      },
      {
        elementKey: 'pselect',
        formIndex: '1',
        inputType: 'select',
        label: 'select',
        options: [
          {
            key: '1=a choice 1',
            text: '1=a choice 1'
          },
          {
            key: '2=b choice 1',
            text: '2=b choice 1'
          },
          {
            key: '3=c choice 1',
            text: '3=c choice 1'
          }
        ],
        passToFunction: 'p-cValue1',
        fqn: 'testPage.pselect'
      },
      {
        elementKey: 'pselect2',
        formIndex: '1',
        inputType: 'select',
        label: 'select',
        options: [
          {
            key: '1=a choice 2',
            text: '1=a choice 2'
          },
          {
            key: '2=b choice 2',
            text: '2=b choice 2'
          },
          {
            key: '3=c choice 2',
            text: '3=c choice 2'
          }
        ],
        passToFunction: 'p-cValue1',
        fqn: 'testPage.pselect2'
      },
      {
        elementKey: 'p-cValue1',
        calculationType: 'sum',
        formIndex: '1',
        helperText: 'a calculated value based on the select \'pselect1\' on this page',
        inputType: 'calculatedValue',
        label: 'calculatedValue',
        fqn: 'testPage.p-cValue1',
        helperHtml: '<p>a calculated value based on the select \'pselect1\' on this page</p>'
      },
      {
        elementKey: 'aFile',
        formIndex: '1',
        inputType: 'ehrFile',
        label: 'A File',
        fqn: 'testPage.aFile'
      },
      {
        elementKey: 'pcheckset',
        defaultValue: 'check1,all',
        formIndex: '1',
        inputType: 'checkset',
        label: 'checkset',
        options: [
          {
            key: 'check1=check option 1',
            text: 'check1=check option 1'
          },
          {
            key: 'check2=check option 2',
            text: 'check2=check option 2'
          },
          {
            key: 'other=another option',
            text: 'other=another option'
          },
          {
            key: 'all=all options are selectable',
            text: 'all=all options are selectable'
          }
        ],
        fqn: 'testPage.pcheckset'
      },
      {
        elementKey: 'dayValue',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        fqn: 'testPage.dayValue'
      },
      {
        elementKey: 'timeValue',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        fqn: 'testPage.timeValue'
      },
      {
        elementKey: 'forCalc',
        formIndex: '1',
        inputType: 'select',
        label: 'select',
        options: [
          {
            key: '1 = Yes',
            text: '1 = Yes'
          },
          {
            key: '2 = No',
            text: '2 = No'
          }
        ],
        passToFunction: 'p-cValue2',
        fqn: 'testPage.forCalc'
      },
      {
        elementKey: 'p-cValue2',
        calculationType: 'sum',
        formIndex: '1',
        inputType: 'calculatedValue',
        label: 'calculatedValue',
        fqn: 'testPage.p-cValue2'
      },
      {
        elementKey: 'pcheckbox2',
        formIndex: '1',
        inputType: 'checkbox',
        label: 'checkbox',
        fqn: 'testPage.pcheckbox2'
      },
      {
        elementKey: 'ptext2',
        dependentOn: 'disable:pcheckbox2',
        formIndex: '1',
        formOption: 'hideLabel',
        inputType: 'text',
        label: 'text',
        fqn: 'testPage.ptext2'
      },
      {
        elementKey: 'pform_labeltest',
        formIndex: '1',
        inputType: 'form_label',
        label: '<b>a NEW <i>label</i></b>',
        fqn: 'testPage.pform_labeltest'
      },
      {
        elementKey: 'pform_label2',
        formIndex: '1',
        inputType: 'form_label',
        label: '<b>a form <i>label</i></b>',
        fqn: 'testPage.pform_label2'
      },
      {
        elementKey: 'pspacer2',
        formIndex: '1',
        inputType: 'spacer',
        label: 'spacer',
        fqn: 'testPage.pspacer2'
      },
      {
        elementKey: 'passetLink2',
        assetBase: 'standardized-assessment-tools',
        assetName: 'the-canadian-ed-triage-and-acuity-scale.gif',
        formIndex: '1',
        inputType: 'assetLink',
        label: 'assetLink',
        fqn: 'testPage.passetLink2'
      },
      {
        elementKey: 'pvisitDay2',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'visitDay',
        fqn: 'testPage.pvisitDay2'
      },
      {
        elementKey: 'name',
        formIndex: '2',
        inputType: 'text',
        label: 'Name',
        tableColumn: '1',
        tableLabel: 'Text 1',
        fqn: 'testPage.name'
      },
      {
        elementKey: 't2',
        formIndex: '2',
        helperText: 'a text input',
        inputType: 'text',
        label: 'Text 2',
        tableColumn: '2',
        tableLabel: 'Text 2',
        fqn: 'testPage.t2',
        helperHtml: '<p>a text input</p>'
      },
      {
        elementKey: 'name',
        formIndex: '3',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'testPage.name'
      },
      {
        elementKey: 'profession',
        formIndex: '3',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        recHeader: true,
        fqn: 'testPage.profession'
      },
      {
        elementKey: 'day',
        formIndex: '3',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        validation: 'visitDay',
        recHeader: true,
        fqn: 'testPage.day'
      },
      {
        elementKey: 'time',
        formIndex: '3',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        validation: 'time24',
        recHeader: true,
        fqn: 'testPage.time'
      },
      {
        elementKey: 'textDate',
        formIndex: '3',
        inputType: 'text',
        label: 'TextDate',
        fqn: 'testPage.textDate'
      },
      {
        elementKey: 'textDateDate',
        formIndex: '3',
        inputType: 'date',
        label: 'TextDate',
        fqn: 'testPage.textDateDate'
      },
      {
        elementKey: 'spacer161',
        formIndex: '3',
        inputType: 'spacer',
        label: 'TextDate',
        fqn: 'testPage.spacer161'
      },
      {
        elementKey: 'name',
        formIndex: '3',
        inputType: 'text',
        label: 'Name',
        fqn: 'testPage.name'
      },
      {
        elementKey: 'place',
        formIndex: '3',
        inputType: 'text',
        label: 'Place',
        fqn: 'testPage.place'
      }
    ],
    pageElements: {
      form1: {
        elementKey: 'form1',
        label: 'Form 1',
        formKey: 'form1',
        isPageForm: true,
        ehr_groups: [
          {
            elementKey: 'ehr_group157',
            label: 'A group label',
            gIndex: '1',
            gChildren: [
              'pform_label',
              'pspacer',
              'name',
              'pcheckbox',
              'defaultText',
              'passetLink',
              'pselect',
              'pselect2',
              'p-cValue1',
              'aFile'
            ]
          },
          {
            elementKey: 'ehr_group158',
            label: 'Second group',
            gIndex: '2',
            gChildren: [
              {
                elementKey: 'subgroup1',
                label: 'subgroup 1',
                sgChildren: [
                  'pcheckset'
                ]
              },
              {
                elementKey: 'subgroup2',
                label: 'subgroup 2',
                sgChildren: [
                  'dayValue',
                  'timeValue',
                  'forCalc',
                  'p-cValue2'
                ]
              },
              {
                elementKey: 'subgroup3',
                label: 'subgroup 3',
                sgChildren: [
                  'pcheckbox2',
                  'ptext2',
                  'pform_labeltest',
                  'pform_label2',
                  'pspacer2',
                  'passetLink2',
                  'pvisitDay2'
                ]
              }
            ]
          }
        ]
      },
      table1: {
        elementKey: 'table1',
        tableKey: 'table1',
        isTable: true,
        hasRecHeader: true,
        label: 'Test table 1',
        addButtonText: 'Add a row to the test table',
        ehr_list: [
          {
            label: 'Text 1',
            ehr_list_index: '1',
            items: [
              'name'
            ]
          },
          {
            label: 'Text 2',
            ehr_list_index: '2',
            items: [
              't2'
            ]
          }
        ],
        form: {
          elementKey: 'table1',
          label: 'Test table 1',
          addButtonText: 'Add a row to the test table',
          formKey: 'table1',
          ehr_groups: [
            {
              elementKey: 'ehr_group159',
              label: 'Group 1',
              gIndex: '1',
              gChildren: [
                'name',
                't2'
              ]
            }
          ],
          ehr_data: {
            name: '80',
            t2: ''
          }
        }
      },
      form2: {
        elementKey: 'form2',
        label: 'Form 2',
        formKey: 'form2',
        isPageForm: true,
        ehr_groups: [
          {
            elementKey: 'ehr_group160',
            label: 'A group label',
            gIndex: '1',
            gChildren: [
              'name',
              'profession',
              'day',
              'time',
              'textDate',
              'textDateDate',
              'spacer161',
              'name',
              'place'
            ]
          }
        ]
      }
    }
  },
  testTable: {
    pageDataKey: 'testTable',
    pageTitle: 'Test Table',
    pIndex: '41',
    hasGridTable: true,
    hasGridForm: true,
    pageChildren: [
      {
        elementKey: 'e1',
        formIndex: '1',
        inputType: 'form_label',
        label: '<b>a form <i>label</i></b>',
        fqn: 'testTable.e1'
      },
      {
        elementKey: 'e2',
        formIndex: '1',
        inputType: 'spacer',
        label: 'spacer',
        fqn: 'testTable.e2'
      },
      {
        elementKey: 'weight',
        defaultValue: '80',
        formIndex: '1',
        inputType: 'text',
        label: 'Weight',
        mandatory: true,
        suffix: 'lb',
        tableColumn: '2',
        tableLabel: 'Wieght',
        fqn: 'testTable.weight'
      },
      {
        elementKey: 'pcheckbox',
        defaultValue: true,
        formIndex: '1',
        helperText: 'a checkbox iinput',
        inputType: 'checkbox',
        label: 'checkbox',
        tableColumn: '1',
        tableLabel: 'A bool',
        fqn: 'testTable.pcheckbox',
        helperHtml: '<p>a checkbox iinput</p>'
      },
      {
        elementKey: 'defaultText',
        defaultValue: 'some default',
        dependentOn: 'disable:pcheckbox',
        formIndex: '1',
        helperText: 'a text input',
        inputType: 'text',
        label: 'text',
        tableColumn: '3',
        tableCss: 'hr-table',
        tableLabel: 'Text',
        fqn: 'testTable.defaultText',
        helperHtml: '<p>a text input</p>'
      },
      {
        elementKey: 'e6',
        assetBase: 'standardized-assessment-tools',
        assetName: 'the-canadian-ed-triage-and-acuity-scale.gif',
        formIndex: '1',
        inputType: 'assetLink',
        label: 'assetLink',
        fqn: 'testTable.e6'
      },
      {
        elementKey: 'e7',
        formIndex: '1',
        inputType: 'select',
        label: 'select',
        options: [
          {
            key: '1=a choice 1',
            text: '1=a choice 1'
          },
          {
            key: '2=b choice 1',
            text: '2=b choice 1'
          },
          {
            key: '3=c choice 1',
            text: '3=c choice 1'
          }
        ],
        passToFunction: 'p-cValue1',
        tableColumn: '5',
        tableLabel: 'Selects',
        fqn: 'testTable.e7'
      },
      {
        elementKey: 'e8',
        formIndex: '1',
        inputType: 'select',
        label: 'select',
        options: [
          {
            key: '1=a choice 2',
            text: '1=a choice 2'
          },
          {
            key: '2=b choice 2',
            text: '2=b choice 2'
          },
          {
            key: '3=c choice 2',
            text: '3=c choice 2'
          }
        ],
        passToFunction: 'p-cValue1',
        tableColumn: '5',
        fqn: 'testTable.e8'
      },
      {
        elementKey: 'p-cValue1',
        calculationType: 'sum',
        formIndex: '1',
        helperText: 'a calculated value based on the select \'pselect1\' on this page',
        inputType: 'calculatedValue',
        label: 'calculatedValue',
        tableColumn: '5',
        fqn: 'testTable.p-cValue1',
        helperHtml: '<p>a calculated value based on the select \'pselect1\' on this page</p>'
      },
      {
        elementKey: 'e10',
        defaultValue: 'check1,other',
        formIndex: '1',
        inputType: 'checkset',
        label: 'checkset',
        options: [
          {
            key: 'check1=check option 1',
            text: 'check1=check option 1'
          },
          {
            key: 'check2=check option 2',
            text: 'check2=check option 2'
          },
          {
            key: 'other=another option',
            text: 'other=another option'
          },
          {
            key: 'all=all options are selectable',
            text: 'all=all options are selectable'
          }
        ],
        tableColumn: '4',
        tableLabel: 'Set',
        fqn: 'testTable.e10'
      },
      {
        elementKey: 'dayValue',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '7',
        tableLabel: 'Day',
        fqn: 'testTable.dayValue'
      },
      {
        elementKey: 'timeValue',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '8',
        tableLabel: 'Time',
        fqn: 'testTable.timeValue'
      },
      {
        elementKey: 'forCalc',
        formIndex: '1',
        inputType: 'select',
        label: 'select',
        options: [
          {
            key: '1 = Yes',
            text: '1 = Yes'
          },
          {
            key: '2 = No',
            text: '2 = No'
          }
        ],
        passToFunction: 'p-cValue2',
        tableColumn: '9',
        tableLabel: 'Source',
        fqn: 'testTable.forCalc'
      },
      {
        elementKey: 'p-cValue2',
        calculationType: 'sum',
        formIndex: '1',
        inputType: 'calculatedValue',
        label: 'calculatedValue',
        tableColumn: '10',
        tableLabel: 'Calculated',
        fqn: 'testTable.p-cValue2'
      },
      {
        elementKey: 'g4',
        formIndex: '1',
        inputType: 'checkbox',
        label: 'checkbox',
        tableColumn: '12',
        tableLabel: 'Bool',
        fqn: 'testTable.g4'
      },
      {
        elementKey: 'g5',
        dependentOn: 'disable:g4',
        formIndex: '1',
        inputType: 'text',
        label: 'text',
        tableColumn: '13',
        tableLabel: 'Text',
        fqn: 'testTable.g5'
      },
      {
        elementKey: 'g6',
        formIndex: '1',
        inputType: 'form_label',
        label: '<b>a form <i>label</i></b>',
        tableColumn: '14',
        tableLabel: 'Lable',
        fqn: 'testTable.g6'
      },
      {
        elementKey: 'g7',
        formIndex: '1',
        inputType: 'spacer',
        label: 'spacer',
        fqn: 'testTable.g7'
      },
      {
        elementKey: 'g8',
        assetBase: 'standardized-assessment-tools',
        assetName: 'the-canadian-ed-triage-and-acuity-scale.gif',
        formIndex: '1',
        inputType: 'assetLink',
        label: 'assetLink',
        fqn: 'testTable.g8'
      },
      {
        elementKey: 'g9',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'visitDay',
        tableColumn: '15',
        tableLabel: 'Date',
        fqn: 'testTable.g9'
      },
      {
        elementKey: 'e11',
        formIndex: '1',
        inputType: 'textarea',
        label: 'textarea',
        tableColumn: '6',
        tableCss: 'hr-table',
        tableLabel: 'Long text',
        fqn: 'testTable.e11'
      },
      {
        elementKey: 'name',
        formIndex: '2',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'testTable.name'
      },
      {
        elementKey: 'profession',
        formIndex: '2',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'testTable.profession'
      },
      {
        elementKey: 'day',
        formIndex: '2',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'testTable.day'
      },
      {
        elementKey: 'time',
        formIndex: '2',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'testTable.time'
      },
      {
        elementKey: 'cd1',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'C D 1',
        tableColumn: '2',
        tableLabel: 'Chk 1',
        fqn: 'testTable.cd1'
      },
      {
        elementKey: 'cd1Date',
        formIndex: '2',
        formOption: 'hideLabel',
        inputType: 'date',
        label: 'C D 1',
        tableColumn: '2',
        tableLabel: 'Chk 1',
        fqn: 'testTable.cd1Date'
      },
      {
        elementKey: 'spacer167',
        formIndex: '2',
        inputType: 'spacer',
        label: 'C D 1',
        tableColumn: '2',
        tableLabel: 'Chk 1',
        fqn: 'testTable.spacer167'
      },
      {
        elementKey: 'cd2',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'C D 2',
        tableColumn: '3',
        tableLabel: 'Chk 2',
        fqn: 'testTable.cd2'
      },
      {
        elementKey: 'cd2Date',
        formIndex: '2',
        formOption: 'hideLabel',
        inputType: 'date',
        label: 'C D 2',
        tableColumn: '3',
        tableLabel: 'Chk 2',
        fqn: 'testTable.cd2Date'
      },
      {
        elementKey: 'spacer168',
        formIndex: '2',
        inputType: 'spacer',
        label: 'C D 2',
        tableColumn: '3',
        tableLabel: 'Chk 2',
        fqn: 'testTable.spacer168'
      },
      {
        elementKey: 'td1',
        formIndex: '2',
        inputType: 'text',
        label: 'TextDate',
        tableColumn: '4',
        tableLabel: 'Txt 1',
        fqn: 'testTable.td1'
      },
      {
        elementKey: 'td1Date',
        formIndex: '2',
        inputType: 'date',
        label: 'TextDate',
        tableColumn: '4',
        tableLabel: 'Txt 1',
        fqn: 'testTable.td1Date'
      },
      {
        elementKey: 'spacer169',
        formIndex: '2',
        inputType: 'spacer',
        label: 'TextDate',
        tableColumn: '4',
        tableLabel: 'Txt 1',
        fqn: 'testTable.spacer169'
      },
      {
        elementKey: 'referralName',
        formIndex: '2',
        inputType: 'text',
        label: 'Referral name',
        tableColumn: '5',
        tableLabel: 'Referral',
        fqn: 'testTable.referralName'
      },
      {
        elementKey: 'referralProfession',
        formIndex: '2',
        inputType: 'text',
        label: 'Referral profession',
        tableColumn: '5',
        fqn: 'testTable.referralProfession'
      },
      {
        elementKey: 'spacer1',
        formIndex: '2',
        inputType: 'spacer',
        label: 'even spacers need a element key',
        fqn: 'testTable.spacer1'
      },
      {
        elementKey: 'appointmentDate',
        formIndex: '2',
        inputType: 'visitDay',
        label: 'Appointment date',
        tableColumn: '6',
        tableLabel: 'Appointment',
        fqn: 'testTable.appointmentDate'
      },
      {
        elementKey: 'appointmentTime',
        formIndex: '2',
        inputType: 'visitTime',
        label: 'Appointment time',
        tableColumn: '6',
        tableLabel: 'Appointment',
        fqn: 'testTable.appointmentTime'
      },
      {
        elementKey: 'status',
        formIndex: '2',
        inputType: 'select',
        label: 'Status',
        options: [
          {
            key: 'Active',
            text: 'Active'
          },
          {
            key: 'Discharged',
            text: 'Discharged'
          }
        ],
        tableColumn: '7',
        tableLabel: 'Status',
        fqn: 'testTable.status'
      },
      {
        elementKey: 'administration',
        defaultValue: 'sched',
        formIndex: '3',
        inputType: 'select',
        label: 'Administration',
        options: [
          {
            key: 'sched',
            text: 'Scheduled'
          },
          {
            key: 'prn',
            text: 'PRN (as needed)'
          },
          {
            key: 'once',
            text: 'Once'
          },
          {
            key: 'stat',
            text: 'Stat'
          }
        ],
        tableColumn: '7',
        tableLabel: 'Administration',
        fqn: 'testTable.administration'
      },
      {
        elementKey: 'scheduled',
        formIndex: '3',
        inputType: 'select',
        label: 'Scheduled',
        options: [
          {
            key: 'QI',
            text: 'QI'
          },
          {
            key: 'BID / q12h',
            text: 'BID / q12h'
          },
          {
            key: 'TID',
            text: 'TID'
          },
          {
            key: 'q8h',
            text: 'q8h'
          },
          {
            key: 'QID',
            text: 'QID'
          },
          {
            key: 'q6h',
            text: 'q6h'
          },
          {
            key: 'q4h',
            text: 'q4h'
          }
        ],
        tableColumn: '9',
        tableLabel: 'Scheduled',
        fqn: 'testTable.scheduled'
      },
      {
        elementKey: 'prn1',
        formIndex: '3',
        inputType: 'text',
        label: 'PRN 1',
        tableColumn: '10',
        fqn: 'testTable.prn1'
      },
      {
        elementKey: 'prn2',
        formIndex: '3',
        inputType: 'text',
        label: 'PRN 2',
        tableColumn: '11',
        fqn: 'testTable.prn2'
      },
      {
        elementKey: 'prn3',
        formIndex: '3',
        inputType: 'text',
        label: 'PRN 3',
        tableColumn: '12',
        fqn: 'testTable.prn3'
      },
      {
        elementKey: 'prn4',
        formIndex: '3',
        inputType: 'text',
        label: 'PRN 4',
        tableColumn: '13',
        fqn: 'testTable.prn4'
      },
      {
        elementKey: 'prn5',
        formIndex: '3',
        inputType: 'text',
        label: 'PRN 5',
        tableColumn: '14',
        fqn: 'testTable.prn5'
      },
      {
        elementKey: 'prn6',
        formIndex: '3',
        inputType: 'text',
        label: 'PRN 6',
        tableColumn: '15',
        fqn: 'testTable.prn6'
      },
      {
        elementKey: 'once',
        formIndex: '3',
        inputType: 'text',
        label: 'Once',
        tableColumn: '10',
        fqn: 'testTable.once'
      },
      {
        elementKey: 'stat',
        formIndex: '3',
        inputType: 'text',
        label: 'Stat',
        tableColumn: '10',
        fqn: 'testTable.stat'
      }
    ],
    pageElements: {
      table1: {
        elementKey: 'table1',
        tableKey: 'table1',
        isTable: true,
        hasRecHeader: true,
        label: 'Test table 1',
        addButtonText: 'Add a row to the test table',
        ehr_list: [
          {
            label: 'A bool',
            ehr_list_index: '1',
            items: [
              'pcheckbox'
            ]
          },
          {
            label: 'Wieght',
            ehr_list_index: '2',
            items: [
              'weight'
            ]
          },
          {
            label: 'Text',
            tableCss: 'hr-table',
            ehr_list_index: '3',
            items: [
              'defaultText'
            ]
          },
          {
            label: 'Set',
            ehr_list_index: '4',
            items: [
              'e10'
            ]
          },
          {
            label: 'Selects',
            ehr_list_index: '5',
            items: [
              'e7',
              'e8',
              'p-cValue1'
            ]
          },
          {
            label: 'Long text',
            tableCss: 'hr-table',
            ehr_list_index: '6',
            items: [
              'e11'
            ]
          },
          {
            label: 'Day',
            ehr_list_index: '7',
            items: [
              'dayValue'
            ]
          },
          {
            label: 'Time',
            ehr_list_index: '8',
            items: [
              'timeValue'
            ]
          },
          {
            label: 'Source',
            ehr_list_index: '9',
            items: [
              'forCalc'
            ]
          },
          {
            label: 'Calculated',
            ehr_list_index: '10',
            items: [
              'p-cValue2'
            ]
          },
          {
            label: 'Bool',
            ehr_list_index: '12',
            items: [
              'g4'
            ]
          },
          {
            label: 'Text',
            ehr_list_index: '13',
            items: [
              'g5'
            ]
          },
          {
            label: 'Lable',
            ehr_list_index: '14',
            items: [
              'g6'
            ]
          },
          {
            label: 'Date',
            ehr_list_index: '15',
            items: [
              'g9'
            ]
          }
        ],
        form: {
          elementKey: 'table1',
          label: 'Test table 1',
          addButtonText: 'Add a row to the test table',
          formKey: 'table1',
          ehr_groups: [
            {
              elementKey: 'ehr_group162',
              label: 'Group 1',
              gIndex: '1',
              gChildren: [
                'e1',
                'e2',
                'weight',
                'pcheckbox',
                'defaultText',
                'e6',
                'e7',
                'e8',
                'p-cValue1'
              ]
            },
            {
              elementKey: 'ehr_group163',
              gIndex: '2',
              gChildren: [
                {
                  elementKey: 'subgroup1',
                  label: 'subgroup 1',
                  sgChildren: [
                    'e10'
                  ]
                },
                {
                  elementKey: 'subgroup2',
                  label: 'subgroup 2',
                  sgChildren: [
                    'dayValue',
                    'timeValue',
                    'forCalc',
                    'p-cValue2'
                  ]
                },
                {
                  elementKey: 'subgroup3',
                  label: 'subgroup 3',
                  sgChildren: [
                    'g4',
                    'g5',
                    'g6',
                    'g7',
                    'g8',
                    'g9'
                  ]
                }
              ]
            },
            {
              elementKey: 'ehr_group164',
              formCss: 'full-width',
              gIndex: '3',
              gChildren: [
                'e11'
              ]
            }
          ],
          ehr_data: {
            weight: '80',
            pcheckbox: true,
            defaultText: 'some default',
            e7: '',
            e8: '',
            'p-cValue1': '',
            e10: 'check1,other',
            dayValue: '',
            timeValue: '',
            forCalc: '',
            'p-cValue2': '',
            g4: '',
            g5: '',
            g9: '',
            e11: ''
          }
        }
      },
      stacked: {
        elementKey: 'stacked',
        tableKey: 'stacked',
        isTable: true,
        hasRecHeader: true,
        label: 'Stacked table',
        addButtonText: 'Add a stacked row',
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
            label: 'Chk 1',
            ehr_list_index: '2',
            items: [
              'cd1',
              'cd1Date',
              'spacer167'
            ]
          },
          {
            label: 'Chk 2',
            ehr_list_index: '3',
            items: [
              'cd2',
              'cd2Date',
              'spacer168'
            ]
          },
          {
            label: 'Txt 1',
            ehr_list_index: '4',
            items: [
              'td1',
              'td1Date',
              'spacer169'
            ]
          },
          {
            label: 'Referral',
            ehr_list_index: '5',
            items: [
              'referralName',
              'referralProfession'
            ]
          },
          {
            label: 'Appointment',
            ehr_list_index: '6',
            items: [
              'appointmentDate',
              'appointmentTime'
            ]
          },
          {
            label: 'Status',
            ehr_list_index: '7',
            items: [
              'status'
            ]
          }
        ],
        form: {
          elementKey: 'stacked',
          label: 'Stacked table',
          addButtonText: 'Add a stacked row',
          formKey: 'stacked',
          ehr_groups: [
            {
              elementKey: 'ehr_group165',
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
              elementKey: 'ehr_group166',
              gIndex: '2',
              gChildren: [
                'cd1',
                'cd1Date',
                'spacer167',
                'cd2',
                'cd2Date',
                'spacer168',
                'td1',
                'td1Date',
                'spacer169'
              ]
            },
            {
              elementKey: 'ehr_group170',
              gIndex: '3',
              gChildren: [
                'referralName',
                'referralProfession',
                'spacer1',
                'appointmentDate',
                'appointmentTime',
                'status'
              ]
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            cd1: '',
            cd1Date: '',
            cd2: '',
            cd2Date: '',
            td1: '',
            td1Date: '',
            referralName: '',
            referralProfession: '',
            appointmentDate: '',
            appointmentTime: '',
            status: ''
          }
        }
      },
      form3: {
        elementKey: 'form3',
        label: 'Form 3',
        formKey: 'form3',
        isPageForm: true,
        ehr_groups: [
          {
            elementKey: 'adminGroup',
            gIndex: '1',
            gChildren: [
              'administration'
            ]
          },
          {
            elementKey: 'schedGroup',
            dependentOn: 'visble:administration=sched',
            gIndex: '2',
            gChildren: [
              'scheduled'
            ]
          },
          {
            elementKey: 'prnGroup',
            dependentOn: 'visble:administration=prn',
            gIndex: '3',
            gChildren: [
              'prn1',
              'prn2',
              'prn3',
              'prn4',
              'prn5',
              'prn6'
            ]
          },
          {
            elementKey: 'onceGroup',
            dependentOn: 'visble:administration=once',
            gIndex: '4',
            gChildren: [
              'once'
            ]
          },
          {
            elementKey: 'statGroup',
            dependentOn: 'visble:administration=stat',
            gIndex: '5',
            gChildren: [
              'stat'
            ]
          }
        ]
      }
    }
  },
  integumentaryAssessment: {
    pageDataKey: 'integumentaryAssessment',
    pageTitle: 'Integumentary assessment',
    pIndex: '42',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'integumentaryAssessment.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'integumentaryAssessment.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'integumentaryAssessment.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'integumentaryAssessment.time'
      },
      {
        elementKey: 'incisionLabel',
        formIndex: '1',
        helperText: 'Enter incision label 1 to 4',
        inputType: 'select',
        label: 'Incision label',
        options: [
          {
            key: 'Incision 1',
            text: 'Incision 1'
          },
          {
            key: 'Incision 2',
            text: 'Incision 2'
          },
          {
            key: 'Incision 3',
            text: 'Incision 3'
          },
          {
            key: 'Incision 4',
            text: 'Incision 4'
          }
        ],
        tableColumn: '2',
        fqn: 'integumentaryAssessment.incisionLabel',
        helperHtml: '<p>Enter incision label 1 to 4</p>'
      },
      {
        elementKey: 'incisionLocation',
        formIndex: '1',
        inputType: 'select',
        label: 'Incision location',
        options: [
          {
            key: 'Head',
            text: 'Head'
          },
          {
            key: 'Face',
            text: 'Face'
          },
          {
            key: 'Neck',
            text: 'Neck'
          },
          {
            key: 'Chest',
            text: 'Chest'
          },
          {
            key: 'Arm (Left)',
            text: 'Arm (Left)'
          },
          {
            key: 'Arm (Right)',
            text: 'Arm (Right)'
          },
          {
            key: 'Hand (Left)',
            text: 'Hand (Left)'
          },
          {
            key: 'Hand (Right)',
            text: 'Hand (Right)'
          },
          {
            key: 'Abdomen',
            text: 'Abdomen'
          },
          {
            key: 'Back',
            text: 'Back'
          },
          {
            key: 'Pelvis',
            text: 'Pelvis'
          },
          {
            key: 'Buttock',
            text: 'Buttock'
          },
          {
            key: 'Leg (Left)',
            text: 'Leg (Left)'
          },
          {
            key: 'Leg (Right)',
            text: 'Leg (Right)'
          },
          {
            key: 'Foot (Left)',
            text: 'Foot (Left)'
          },
          {
            key: 'Foot (Right)',
            text: 'Foot (Right)'
          },
          {
            key: '',
            text: ''
          }
        ],
        tableColumn: '3',
        fqn: 'integumentaryAssessment.incisionLocation'
      },
      {
        elementKey: 'postOpDay',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Post Operative Day',
        tableColumn: '4',
        fqn: 'integumentaryAssessment.postOpDay'
      },
      {
        elementKey: 'opProcedure',
        formIndex: '1',
        inputType: 'text',
        label: 'Operative Procedure',
        tableColumn: '5',
        fqn: 'integumentaryAssessment.opProcedure'
      },
      {
        elementKey: 'closureMethod',
        formIndex: '1',
        inputType: 'checkset',
        label: 'Closure Method',
        options: [
          {
            key: 'Sutures',
            text: 'Sutures'
          },
          {
            key: 'Staples',
            text: 'Staples'
          },
          {
            key: 'Retention Sutures',
            text: 'Retention Sutures'
          },
          {
            key: 'SurgiGlue',
            text: 'SurgiGlue'
          },
          {
            key: 'Steri-Strip',
            text: 'Steri-Strip'
          },
          {
            key: 'Not Applicable',
            text: 'Not Applicable'
          }
        ],
        tableColumn: '6',
        fqn: 'integumentaryAssessment.closureMethod'
      },
      {
        elementKey: 'incisionProfileImage',
        formIndex: '1',
        inputType: 'ehrFile',
        label: 'Image',
        tableColumn: '7',
        fqn: 'integumentaryAssessment.incisionProfileImage'
      },
      {
        elementKey: 'incisionProfileComments',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Comments',
        tableColumn: '8',
        fqn: 'integumentaryAssessment.incisionProfileComments'
      },
      {
        elementKey: 'name',
        formIndex: '2',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'integumentaryAssessment.name'
      },
      {
        elementKey: 'profession',
        formIndex: '2',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'integumentaryAssessment.profession'
      },
      {
        elementKey: 'day',
        formIndex: '2',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'integumentaryAssessment.day'
      },
      {
        elementKey: 'time',
        formIndex: '2',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'integumentaryAssessment.time'
      },
      {
        elementKey: 'incisionLabel',
        formIndex: '2',
        helperText: 'Enter incision label 1 to 4',
        inputType: 'select',
        label: 'Incision label',
        options: [
          {
            key: 'Incision 1',
            text: 'Incision 1'
          },
          {
            key: 'Incision 2',
            text: 'Incision 2'
          },
          {
            key: 'Incision 3',
            text: 'Incision 3'
          },
          {
            key: 'Incision 4',
            text: 'Incision 4'
          }
        ],
        tableColumn: '2',
        fqn: 'integumentaryAssessment.incisionLabel',
        helperHtml: '<p>Enter incision label 1 to 4</p>'
      },
      {
        elementKey: 'incisionStatus',
        formIndex: '2',
        inputType: 'select',
        label: 'Incision Status',
        options: [
          {
            key: 'Approximated',
            text: 'Approximated'
          },
          {
            key: 'Fully Epithelialized',
            text: 'Fully Epithelialized'
          },
          {
            key: 'Tenuous',
            text: 'Tenuous'
          },
          {
            key: 'Gaping',
            text: 'Gaping'
          }
        ],
        tableColumn: '3',
        fqn: 'integumentaryAssessment.incisionStatus'
      },
      {
        elementKey: 'incisionStatusImage',
        formIndex: '2',
        inputType: 'ehrFile',
        label: 'Image',
        tableColumn: '4',
        fqn: 'integumentaryAssessment.incisionStatusImage'
      },
      {
        elementKey: 'closureChanges',
        formIndex: '2',
        inputType: 'text',
        label: 'Change in closure',
        tableColumn: '5',
        fqn: 'integumentaryAssessment.closureChanges'
      },
      {
        elementKey: 'exudateAmount',
        formIndex: '2',
        inputType: 'checkset',
        label: 'Exudate Amount',
        options: [
          {
            key: 'None',
            text: 'None'
          },
          {
            key: 'Small',
            text: 'Small'
          },
          {
            key: 'Moderate',
            text: 'Moderate'
          },
          {
            key: 'Large',
            text: 'Large'
          }
        ],
        tableColumn: '6',
        fqn: 'integumentaryAssessment.exudateAmount'
      },
      {
        elementKey: 'exudateType',
        formIndex: '2',
        inputType: 'checkset',
        label: 'Exudate Type',
        options: [
          {
            key: 'Serous',
            text: 'Serous'
          },
          {
            key: 'Sanguineous',
            text: 'Sanguineous'
          },
          {
            key: 'Purulent',
            text: 'Purulent'
          },
          {
            key: 'Other',
            text: 'Other'
          },
          {
            key: 'Not Applicable',
            text: 'Not Applicable'
          }
        ],
        tableColumn: '7',
        fqn: 'integumentaryAssessment.exudateType'
      },
      {
        elementKey: 'periIncisionSkin',
        formIndex: '2',
        inputType: 'checkset',
        label: 'Peri-Incisional Skin',
        options: [
          {
            key: 'Intact',
            text: 'Intact'
          },
          {
            key: 'Macerated',
            text: 'Macerated'
          },
          {
            key: 'Blisters Erythema less than 2cm',
            text: 'Blisters Erythema less than 2cm'
          },
          {
            key: 'Erythema greater than 2cm',
            text: 'Erythema greater than 2cm'
          },
          {
            key: 'Induration less than 2cm',
            text: 'Induration less than 2cm'
          },
          {
            key: 'Induration greater than 2cm',
            text: 'Induration greater than 2cm'
          },
          {
            key: 'Other',
            text: 'Other'
          }
        ],
        tableColumn: '8',
        fqn: 'integumentaryAssessment.periIncisionSkin'
      },
      {
        elementKey: 'periIncisionSkinOther',
        formIndex: '2',
        inputType: 'text',
        label: 'Other',
        tableColumn: '9',
        fqn: 'integumentaryAssessment.periIncisionSkinOther'
      },
      {
        elementKey: 'incisionStatusComments',
        formIndex: '2',
        inputType: 'textarea',
        label: 'Comments',
        tableColumn: '10',
        tableLabel: 'Comments',
        fqn: 'integumentaryAssessment.incisionStatusComments'
      },
      {
        elementKey: 'name',
        formIndex: '3',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'integumentaryAssessment.name'
      },
      {
        elementKey: 'profession',
        formIndex: '3',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'integumentaryAssessment.profession'
      },
      {
        elementKey: 'day',
        formIndex: '3',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'integumentaryAssessment.day'
      },
      {
        elementKey: 'time',
        formIndex: '3',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'integumentaryAssessment.time'
      },
      {
        elementKey: 'woundLocation',
        formIndex: '3',
        inputType: 'select',
        label: 'Wound location',
        options: [
          {
            key: 'Head',
            text: 'Head'
          },
          {
            key: 'Face',
            text: 'Face'
          },
          {
            key: 'Neck',
            text: 'Neck'
          },
          {
            key: 'Chest',
            text: 'Chest'
          },
          {
            key: 'Arm (Left)',
            text: 'Arm (Left)'
          },
          {
            key: 'Arm (Right)',
            text: 'Arm (Right)'
          },
          {
            key: 'Hand (Left)',
            text: 'Hand (Left)'
          },
          {
            key: 'Hand (Right)',
            text: 'Hand (Right)'
          },
          {
            key: 'Abdomen',
            text: 'Abdomen'
          },
          {
            key: 'Back',
            text: 'Back'
          },
          {
            key: 'Pelvis',
            text: 'Pelvis'
          },
          {
            key: 'Buttock',
            text: 'Buttock'
          },
          {
            key: 'Leg (Left)',
            text: 'Leg (Left)'
          },
          {
            key: 'Leg (Right)',
            text: 'Leg (Right)'
          },
          {
            key: 'Foot (Left)',
            text: 'Foot (Left)'
          },
          {
            key: 'Foot (Right)',
            text: 'Foot (Right)'
          },
          {
            key: '',
            text: ''
          }
        ],
        tableColumn: '2',
        tableLabel: 'Wound location',
        fqn: 'integumentaryAssessment.woundLocation'
      },
      {
        elementKey: 'woundLabel',
        formIndex: '3',
        inputType: 'select',
        label: 'Wound label',
        options: [
          {
            key: 'Wound A',
            text: 'Wound A'
          },
          {
            key: 'Wound B',
            text: 'Wound B'
          },
          {
            key: 'Wound C',
            text: 'Wound C'
          },
          {
            key: 'Wound D',
            text: 'Wound D'
          }
        ],
        tableColumn: '3',
        tableLabel: 'Wound label',
        fqn: 'integumentaryAssessment.woundLabel'
      },
      {
        elementKey: 'woundDayOnset',
        formIndex: '3',
        inputType: 'visitDay',
        label: 'Wound day of onset',
        tableColumn: '4',
        tableLabel: 'Wound day of onset',
        fqn: 'integumentaryAssessment.woundDayOnset'
      },
      {
        elementKey: 'stageType',
        formIndex: '3',
        helperText: 'Pressure Injury Stage 1– Intact skin with localized nonblanchable erythema; darkly pigmented skin may not show visible blanching but will appear different than the colour of surrounding skin.\nPressure Injury Stage 2– Partial thickness wound presenting as a shallow open ulcer with a red / pink wound bed, slough may be present but does not obscure the depth of tissue loss; may also present as an intact or open/ruptured serum-filled or serosanguineous filled blister.\nPressure Injury Stage 3– Full thickness wound; subcutaneous tissue may be visible but bone, tendon and muscle are not exposed; may include undermining and/or sinus tracks; slough or eschar may be present but does not obscure the depth of tissue loss.\nPressure Injury Stage 4– Full thickness wound with exposed bone, tendon or muscle; often includes undermining and/or sinus tracks; slough or eschar may be present on some parts of the wound bed but does not obscure the depth of tissue loss.\nPressure Injury Unstageable – A wound in which the wound bed is covered by sufficient slough and / or eschar to preclude staging.\nPressure Injury Deep Tissue Injury – A localized purple or maroon area of intact skin or a blood filled blister that occur when underlying soft tissue is damaged from friction or shear.\nSurgical Wounds Secondary intention: Incision has dehisced and surgical closure is not possible; wounds must heal by granulation\nSkin Tear: Skin tears are the result of trauma caused by shearing, friction, or blunt force to the skin. Consider risk factors (i.e.: advanced age, immobility, inadequate hydration/nutrition, falls)\nAbscess: A local collection of purulent and/or sanguineous drainage that may be incised and drained.\nBurn: Tissue loss/damage as a result from thermal, chemical, electrical, and radiation sources.\nVenous Ulcer: Caused by venous insufficiency due to valve dysfunction, complete or partial blockage of the deep veins, and / or failure of the calf muscle pump.\nArterial Ulcer: Caused by a disruption to arterial blood flow leading to moderate / severe tissue ischemia.\nMixed Arterial/Venous Ulcer: Caused by both venous insufficiency and disrupted arterial blood flow.\nDiabetic/Neuropathic Ulcers: A result of neuropathy, structural foot changes, and/or altered blood flow related to diabetes mellitus (or alcoholism, renal failure, HIV, late stage syphilis, trauma and surgery).\n',
        inputType: 'checkset',
        label: 'Wound Etiology/Type',
        options: [
          {
            key: 'stage1',
            text: 'Pressure Injury Stage 1'
          },
          {
            key: 'stage2',
            text: 'Pressure Injury Stage 2'
          },
          {
            key: 'stage3',
            text: 'Pressure Injury Stage 3'
          },
          {
            key: 'stage4',
            text: 'Pressure Injury Stage 4'
          },
          {
            key: 'unstageable',
            text: 'Pressure Injury Unstageable'
          },
          {
            key: 'deep',
            text: 'Pressure Injury Deep Tissue Injury'
          },
          {
            key: 'surgical',
            text: 'Surgical Secondary Intent'
          },
          {
            key: 'tear',
            text: 'Skin Tear'
          },
          {
            key: 'abscess',
            text: 'Abscess'
          },
          {
            key: 'burn',
            text: 'Burn'
          },
          {
            key: 'venous',
            text: 'Venous Ulcer'
          },
          {
            key: 'arterial',
            text: 'Arterial Ulcer'
          },
          {
            key: 'mixedUlcer',
            text: 'Mixed Venous/Arterial Ulcer'
          },
          {
            key: 'diabetic',
            text: 'Diabetic/Neuropathic Ulcer'
          },
          {
            key: 'other',
            text: 'Other'
          }
        ],
        tableColumn: '5',
        tableLabel: 'Wound Etiology/Type',
        fqn: 'integumentaryAssessment.stageType',
        helperHtml: '<p>Pressure Injury Stage 1– Intact skin with localized nonblanchable erythema; darkly pigmented skin may not show visible blanching but will appear different than the colour of surrounding skin.</p>\n<p>Pressure Injury Stage 2– Partial thickness wound presenting as a shallow open ulcer with a red / pink wound bed, slough may be present but does not obscure the depth of tissue loss; may also present as an intact or open/ruptured serum-filled or serosanguineous filled blister.</p>\n<p>Pressure Injury Stage 3– Full thickness wound; subcutaneous tissue may be visible but bone, tendon and muscle are not exposed; may include undermining and/or sinus tracks; slough or eschar may be present but does not obscure the depth of tissue loss.</p>\n<p>Pressure Injury Stage 4– Full thickness wound with exposed bone, tendon or muscle; often includes undermining and/or sinus tracks; slough or eschar may be present on some parts of the wound bed but does not obscure the depth of tissue loss.</p>\n<p>Pressure Injury Unstageable – A wound in which the wound bed is covered by sufficient slough and / or eschar to preclude staging.</p>\n<p>Pressure Injury Deep Tissue Injury – A localized purple or maroon area of intact skin or a blood filled blister that occur when underlying soft tissue is damaged from friction or shear.</p>\n<p>Surgical Wounds Secondary intention: Incision has dehisced and surgical closure is not possible; wounds must heal by granulation</p>\n<p>Skin Tear: Skin tears are the result of trauma caused by shearing, friction, or blunt force to the skin. Consider risk factors (i.e.: advanced age, immobility, inadequate hydration/nutrition, falls)</p>\n<p>Abscess: A local collection of purulent and/or sanguineous drainage that may be incised and drained.</p>\n<p>Burn: Tissue loss/damage as a result from thermal, chemical, electrical, and radiation sources.</p>\n<p>Venous Ulcer: Caused by venous insufficiency due to valve dysfunction, complete or partial blockage of the deep veins, and / or failure of the calf muscle pump.</p>\n<p>Arterial Ulcer: Caused by a disruption to arterial blood flow leading to moderate / severe tissue ischemia.</p>\n<p>Mixed Arterial/Venous Ulcer: Caused by both venous insufficiency and disrupted arterial blood flow.</p>\n<p>Diabetic/Neuropathic Ulcers: A result of neuropathy, structural foot changes, and/or altered blood flow related to diabetes mellitus (or alcoholism, renal failure, HIV, late stage syphilis, trauma and surgery).</p>\n<p></p>'
      },
      {
        elementKey: 'stageOther',
        dependentOn: 'visble:stageType=other',
        formIndex: '3',
        inputType: 'text',
        label: 'Other',
        tableColumn: '6',
        tableLabel: 'Other',
        fqn: 'integumentaryAssessment.stageOther'
      },
      {
        elementKey: 'goalOfCare',
        formIndex: '3',
        inputType: 'select',
        label: 'Goal of care',
        options: [
          {
            key: 'To heal',
            text: 'To heal'
          },
          {
            key: 'To maintain',
            text: 'To maintain'
          },
          {
            key: 'To monitor/manage',
            text: 'To monitor/manage'
          }
        ],
        tableColumn: '7',
        tableLabel: 'Goal of care',
        fqn: 'integumentaryAssessment.goalOfCare'
      },
      {
        elementKey: 'woundProfileImage',
        formIndex: '3',
        inputType: 'ehrFile',
        label: 'Image',
        tableColumn: '8',
        tableLabel: 'Image',
        fqn: 'integumentaryAssessment.woundProfileImage'
      },
      {
        elementKey: 'woundProfileComments',
        formIndex: '3',
        inputType: 'textarea',
        label: 'Comments',
        tableColumn: '9',
        tableLabel: 'Comments',
        fqn: 'integumentaryAssessment.woundProfileComments'
      },
      {
        elementKey: 'name',
        formIndex: '4',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'integumentaryAssessment.name'
      },
      {
        elementKey: 'profession',
        formIndex: '4',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'integumentaryAssessment.profession'
      },
      {
        elementKey: 'day',
        formIndex: '4',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'integumentaryAssessment.day'
      },
      {
        elementKey: 'time',
        formIndex: '4',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'integumentaryAssessment.time'
      },
      {
        elementKey: 'woundLabel',
        formIndex: '4',
        inputType: 'select',
        label: 'Wound label',
        options: [
          {
            key: 'Wound A',
            text: 'Wound A'
          },
          {
            key: 'Wound B',
            text: 'Wound B'
          },
          {
            key: 'Wound C',
            text: 'Wound C'
          },
          {
            key: 'Wound D',
            text: 'Wound D'
          }
        ],
        tableColumn: '2',
        tableLabel: 'Wound label',
        fqn: 'integumentaryAssessment.woundLabel'
      },
      {
        elementKey: 'woundAssessmentImage',
        formIndex: '4',
        inputType: 'ehrFile',
        label: 'Image',
        tableColumn: '3',
        tableLabel: 'Image',
        fqn: 'integumentaryAssessment.woundAssessmentImage'
      },
      {
        elementKey: 'length',
        formIndex: '4',
        inputType: 'text',
        label: 'Length cm.mm',
        tableColumn: '4',
        tableLabel: 'Length cm.mm',
        fqn: 'integumentaryAssessment.length'
      },
      {
        elementKey: 'width',
        formIndex: '4',
        inputType: 'text',
        label: 'Width cm.mm',
        tableColumn: '5',
        tableLabel: 'Width cm.mm',
        fqn: 'integumentaryAssessment.width'
      },
      {
        elementKey: 'depth',
        formIndex: '4',
        inputType: 'text',
        label: 'Depth cm.mm',
        tableColumn: '6',
        tableLabel: 'Depth cm.mm',
        fqn: 'integumentaryAssessment.depth'
      },
      {
        elementKey: 'sinusDepth1',
        formIndex: '4',
        inputType: 'text',
        label: 'Sinus/tunnel 1 depth cm.mm',
        tableColumn: '7',
        tableLabel: 'Sinus/tunnel 1 depth cm.mm',
        fqn: 'integumentaryAssessment.sinusDepth1'
      },
      {
        elementKey: 'sinusDepthLocation1',
        formIndex: '4',
        inputType: 'select',
        label: 'Location',
        options: [
          {
            key: '1',
            text: '1'
          },
          {
            key: '2',
            text: '2'
          },
          {
            key: '3',
            text: '3'
          },
          {
            key: '4',
            text: '4'
          },
          {
            key: '5',
            text: '5'
          },
          {
            key: '6',
            text: '6'
          },
          {
            key: '7',
            text: '7'
          },
          {
            key: '8',
            text: '8'
          },
          {
            key: '9',
            text: '9'
          },
          {
            key: '10',
            text: '10'
          },
          {
            key: '11',
            text: '11'
          },
          {
            key: '12',
            text: '12'
          }
        ],
        tableColumn: '8',
        tableLabel: 'Location',
        fqn: 'integumentaryAssessment.sinusDepthLocation1'
      },
      {
        elementKey: 'spacer79',
        formIndex: '4',
        inputType: 'spacer',
        fqn: 'integumentaryAssessment.spacer79'
      },
      {
        elementKey: 'sinusDepth2',
        formIndex: '4',
        inputType: 'text',
        label: 'Sinus/tunnel 2 depth cm.mm',
        tableColumn: '9',
        tableLabel: 'Sinus/tunnel 2 depth cm.mm',
        fqn: 'integumentaryAssessment.sinusDepth2'
      },
      {
        elementKey: 'sinusDepthLocation2',
        formIndex: '4',
        inputType: 'select',
        label: 'Location',
        options: [
          {
            key: '1',
            text: '1'
          },
          {
            key: '2',
            text: '2'
          },
          {
            key: '3',
            text: '3'
          },
          {
            key: '4',
            text: '4'
          },
          {
            key: '5',
            text: '5'
          },
          {
            key: '6',
            text: '6'
          },
          {
            key: '7',
            text: '7'
          },
          {
            key: '8',
            text: '8'
          },
          {
            key: '9',
            text: '9'
          },
          {
            key: '10',
            text: '10'
          },
          {
            key: '11',
            text: '11'
          },
          {
            key: '12',
            text: '12'
          }
        ],
        tableColumn: '10',
        tableLabel: 'Location',
        fqn: 'integumentaryAssessment.sinusDepthLocation2'
      },
      {
        elementKey: 'spacer80',
        formIndex: '4',
        inputType: 'spacer',
        fqn: 'integumentaryAssessment.spacer80'
      },
      {
        elementKey: 'underminingDepth1',
        formIndex: '4',
        inputType: 'text',
        label: 'Undermining 1 depth cm.mm',
        tableColumn: '11',
        tableLabel: 'Undermining 1 depth cm.mm',
        fqn: 'integumentaryAssessment.underminingDepth1'
      },
      {
        elementKey: 'underminingDepthLocation1A',
        formIndex: '4',
        inputType: 'select',
        label: 'Location',
        options: [
          {
            key: '1',
            text: '1'
          },
          {
            key: '2',
            text: '2'
          },
          {
            key: '3',
            text: '3'
          },
          {
            key: '4',
            text: '4'
          },
          {
            key: '5',
            text: '5'
          },
          {
            key: '6',
            text: '6'
          },
          {
            key: '7',
            text: '7'
          },
          {
            key: '8',
            text: '8'
          },
          {
            key: '9',
            text: '9'
          },
          {
            key: '10',
            text: '10'
          },
          {
            key: '11',
            text: '11'
          },
          {
            key: '12',
            text: '12'
          }
        ],
        tableColumn: '12',
        tableLabel: 'Location',
        fqn: 'integumentaryAssessment.underminingDepthLocation1A'
      },
      {
        elementKey: 'underminingDepthLocation1B',
        formIndex: '4',
        inputType: 'select',
        label: 'Location',
        options: [
          {
            key: '1',
            text: '1'
          },
          {
            key: '2',
            text: '2'
          },
          {
            key: '3',
            text: '3'
          },
          {
            key: '4',
            text: '4'
          },
          {
            key: '5',
            text: '5'
          },
          {
            key: '6',
            text: '6'
          },
          {
            key: '7',
            text: '7'
          },
          {
            key: '8',
            text: '8'
          },
          {
            key: '9',
            text: '9'
          },
          {
            key: '10',
            text: '10'
          },
          {
            key: '11',
            text: '11'
          },
          {
            key: '12',
            text: '12'
          }
        ],
        tableColumn: '13',
        tableLabel: 'Location',
        fqn: 'integumentaryAssessment.underminingDepthLocation1B'
      },
      {
        elementKey: 'underminingDepth2',
        formIndex: '4',
        inputType: 'text',
        label: 'Undermining 2 depth cm.mm',
        tableColumn: '14',
        tableLabel: 'Undermining 2 depth cm.mm',
        fqn: 'integumentaryAssessment.underminingDepth2'
      },
      {
        elementKey: 'underminingDepthLocation2A',
        formIndex: '4',
        inputType: 'select',
        label: 'Location',
        options: [
          {
            key: '1',
            text: '1'
          },
          {
            key: '2',
            text: '2'
          },
          {
            key: '3',
            text: '3'
          },
          {
            key: '4',
            text: '4'
          },
          {
            key: '5',
            text: '5'
          },
          {
            key: '6',
            text: '6'
          },
          {
            key: '7',
            text: '7'
          },
          {
            key: '8',
            text: '8'
          },
          {
            key: '9',
            text: '9'
          },
          {
            key: '10',
            text: '10'
          },
          {
            key: '11',
            text: '11'
          },
          {
            key: '12',
            text: '12'
          }
        ],
        tableColumn: '15',
        tableLabel: 'Location',
        fqn: 'integumentaryAssessment.underminingDepthLocation2A'
      },
      {
        elementKey: 'underminingDepthLocation2B',
        formIndex: '4',
        inputType: 'select',
        label: 'Location',
        options: [
          {
            key: '1',
            text: '1'
          },
          {
            key: '2',
            text: '2'
          },
          {
            key: '3',
            text: '3'
          },
          {
            key: '4',
            text: '4'
          },
          {
            key: '5',
            text: '5'
          },
          {
            key: '6',
            text: '6'
          },
          {
            key: '7',
            text: '7'
          },
          {
            key: '8',
            text: '8'
          },
          {
            key: '9',
            text: '9'
          },
          {
            key: '10',
            text: '10'
          },
          {
            key: '11',
            text: '11'
          },
          {
            key: '12',
            text: '12'
          }
        ],
        tableColumn: '16',
        tableLabel: 'Location',
        fqn: 'integumentaryAssessment.underminingDepthLocation2B'
      },
      {
        elementKey: 'pinkred',
        formIndex: '4',
        helperText: 'Superficial (pink/red): Clean, open pink/red area with non-measurable depth',
        inputType: 'select',
        label: '% Superficial (pink/red)',
        options: [
          {
            key: '10',
            text: '10%'
          },
          {
            key: '20',
            text: '20%'
          },
          {
            key: '30',
            text: '30%'
          },
          {
            key: '40',
            text: '40%'
          },
          {
            key: '50',
            text: '50%'
          },
          {
            key: '60',
            text: '60%'
          },
          {
            key: '70',
            text: '70%'
          },
          {
            key: '80',
            text: '80%'
          },
          {
            key: '90',
            text: '90%'
          },
          {
            key: '100',
            text: '100%'
          }
        ],
        passToFunction: 'woundBedCalculation',
        tableColumn: '17',
        tableLabel: '% Superficial (pink/red)',
        fqn: 'integumentaryAssessment.pinkred',
        helperHtml: '<p>Superficial (pink/red): Clean, open pink/red area with non-measurable depth</p>'
      },
      {
        elementKey: 'granulation',
        formIndex: '4',
        helperText: 'Granulation Tissue: Firm, red, moist, pebbled healthy tissue',
        inputType: 'select',
        label: '% Granulation',
        options: [
          {
            key: '10',
            text: '10%'
          },
          {
            key: '20',
            text: '20%'
          },
          {
            key: '30',
            text: '30%'
          },
          {
            key: '40',
            text: '40%'
          },
          {
            key: '50',
            text: '50%'
          },
          {
            key: '60',
            text: '60%'
          },
          {
            key: '70',
            text: '70%'
          },
          {
            key: '80',
            text: '80%'
          },
          {
            key: '90',
            text: '90%'
          },
          {
            key: '100',
            text: '100%'
          }
        ],
        passToFunction: 'woundBedCalculation',
        tableColumn: '18',
        tableLabel: '% Granulation',
        fqn: 'integumentaryAssessment.granulation',
        helperHtml: '<p>Granulation Tissue: Firm, red, moist, pebbled healthy tissue</p>'
      },
      {
        elementKey: 'nongranulated',
        formIndex: '4',
        helperText: 'Nongranulated: Pink to red tissue that is smooth and non-pebbled in appearance.',
        inputType: 'select',
        label: '% Nongranulated',
        options: [
          {
            key: '10',
            text: '10%'
          },
          {
            key: '20',
            text: '20%'
          },
          {
            key: '30',
            text: '30%'
          },
          {
            key: '40',
            text: '40%'
          },
          {
            key: '50',
            text: '50%'
          },
          {
            key: '60',
            text: '60%'
          },
          {
            key: '70',
            text: '70%'
          },
          {
            key: '80',
            text: '80%'
          },
          {
            key: '90',
            text: '90%'
          },
          {
            key: '100',
            text: '100%'
          }
        ],
        passToFunction: 'woundBedCalculation',
        tableColumn: '19',
        tableLabel: '% Nongranulated',
        fqn: 'integumentaryAssessment.nongranulated',
        helperHtml: '<p>Nongranulated: Pink to red tissue that is smooth and non-pebbled in appearance.</p>'
      },
      {
        elementKey: 'slough',
        formIndex: '4',
        helperText: 'Slough: Moist or wet, loose or firmly attached, yellow to brown dead tissue',
        inputType: 'select',
        label: '% Slough',
        options: [
          {
            key: '10',
            text: '10%'
          },
          {
            key: '20',
            text: '20%'
          },
          {
            key: '30',
            text: '30%'
          },
          {
            key: '40',
            text: '40%'
          },
          {
            key: '50',
            text: '50%'
          },
          {
            key: '60',
            text: '60%'
          },
          {
            key: '70',
            text: '70%'
          },
          {
            key: '80',
            text: '80%'
          },
          {
            key: '90',
            text: '90%'
          },
          {
            key: '100',
            text: '100%'
          }
        ],
        passToFunction: 'woundBedCalculation',
        tableColumn: '20',
        tableLabel: '% Slough',
        fqn: 'integumentaryAssessment.slough',
        helperHtml: '<p>Slough: Moist or wet, loose or firmly attached, yellow to brown dead tissue</p>'
      },
      {
        elementKey: 'escharBoggy',
        formIndex: '4',
        helperText: 'Eschar (soft, boggy): Soft necrotic tissue which is black, brown, grey, or tan in color. It may be firmly or loosely attached to the wound edges and wound base; fluctuance and drainage may be present.',
        inputType: 'select',
        label: '% Eschar (soft, boggy)',
        options: [
          {
            key: '10',
            text: '10%'
          },
          {
            key: '20',
            text: '20%'
          },
          {
            key: '30',
            text: '30%'
          },
          {
            key: '40',
            text: '40%'
          },
          {
            key: '50',
            text: '50%'
          },
          {
            key: '60',
            text: '60%'
          },
          {
            key: '70',
            text: '70%'
          },
          {
            key: '80',
            text: '80%'
          },
          {
            key: '90',
            text: '90%'
          },
          {
            key: '100',
            text: '100%'
          }
        ],
        passToFunction: 'woundBedCalculation',
        tableColumn: '21',
        tableLabel: '% Eschar (soft, boggy)',
        fqn: 'integumentaryAssessment.escharBoggy',
        helperHtml: '<p>Eschar (soft, boggy): Soft necrotic tissue which is black, brown, grey, or tan in color. It may be firmly or loosely attached to the wound edges and wound base; fluctuance and drainage may be present.</p>'
      },
      {
        elementKey: 'escharStable',
        formIndex: '4',
        helperText: 'Eschar (dry, stable): Firm, dry necrotic tissue with an absence of drainage, edema, erythema or fluctuance. It is black or brown in color and is attached to the wound edges and wound base',
        inputType: 'select',
        label: '% Eschar (dry, stable)',
        options: [
          {
            key: '10',
            text: '10%'
          },
          {
            key: '20',
            text: '20%'
          },
          {
            key: '30',
            text: '30%'
          },
          {
            key: '40',
            text: '40%'
          },
          {
            key: '50',
            text: '50%'
          },
          {
            key: '60',
            text: '60%'
          },
          {
            key: '70',
            text: '70%'
          },
          {
            key: '80',
            text: '80%'
          },
          {
            key: '90',
            text: '90%'
          },
          {
            key: '100',
            text: '100%'
          }
        ],
        passToFunction: 'woundBedCalculation',
        tableColumn: '22',
        tableLabel: '% Eschar (dry, stable)',
        fqn: 'integumentaryAssessment.escharStable',
        helperHtml: '<p>Eschar (dry, stable): Firm, dry necrotic tissue with an absence of drainage, edema, erythema or fluctuance. It is black or brown in color and is attached to the wound edges and wound base</p>'
      },
      {
        elementKey: 'foreign',
        formIndex: '4',
        helperText: 'Foreign body: Sutures, mesh, hardware',
        inputType: 'select',
        label: '% Foreign body',
        options: [
          {
            key: '10',
            text: '10%'
          },
          {
            key: '20',
            text: '20%'
          },
          {
            key: '30',
            text: '30%'
          },
          {
            key: '40',
            text: '40%'
          },
          {
            key: '50',
            text: '50%'
          },
          {
            key: '60',
            text: '60%'
          },
          {
            key: '70',
            text: '70%'
          },
          {
            key: '80',
            text: '80%'
          },
          {
            key: '90',
            text: '90%'
          },
          {
            key: '100',
            text: '100%'
          }
        ],
        passToFunction: 'woundBedCalculation',
        tableColumn: '23',
        tableLabel: '% Foreign body',
        fqn: 'integumentaryAssessment.foreign',
        helperHtml: '<p>Foreign body: Sutures, mesh, hardware</p>'
      },
      {
        elementKey: 'underlying',
        formIndex: '4',
        helperText: 'Underlying structures: Faschia, tendon, bone',
        inputType: 'select',
        label: '% Underlying structures',
        options: [
          {
            key: '10',
            text: '10%'
          },
          {
            key: '20',
            text: '20%'
          },
          {
            key: '30',
            text: '30%'
          },
          {
            key: '40',
            text: '40%'
          },
          {
            key: '50',
            text: '50%'
          },
          {
            key: '60',
            text: '60%'
          },
          {
            key: '70',
            text: '70%'
          },
          {
            key: '80',
            text: '80%'
          },
          {
            key: '90',
            text: '90%'
          },
          {
            key: '100',
            text: '100%'
          }
        ],
        passToFunction: 'woundBedCalculation',
        tableColumn: '24',
        tableLabel: '% Underlying structures',
        fqn: 'integumentaryAssessment.underlying',
        helperHtml: '<p>Underlying structures: Faschia, tendon, bone</p>'
      },
      {
        elementKey: 'notVisible',
        formIndex: '4',
        helperText: 'Not visible: A portion or all of the open wound bed that cannot be visualized',
        inputType: 'select',
        label: '% Not visible',
        options: [
          {
            key: '10',
            text: '10%'
          },
          {
            key: '20',
            text: '20%'
          },
          {
            key: '30',
            text: '30%'
          },
          {
            key: '40',
            text: '40%'
          },
          {
            key: '50',
            text: '50%'
          },
          {
            key: '60',
            text: '60%'
          },
          {
            key: '70',
            text: '70%'
          },
          {
            key: '80',
            text: '80%'
          },
          {
            key: '90',
            text: '90%'
          },
          {
            key: '100',
            text: '100%'
          }
        ],
        passToFunction: 'woundBedCalculation',
        tableColumn: '25',
        tableLabel: '% Not visible',
        fqn: 'integumentaryAssessment.notVisible',
        helperHtml: '<p>Not visible: A portion or all of the open wound bed that cannot be visualized</p>'
      },
      {
        elementKey: 'other',
        formIndex: '4',
        inputType: 'select',
        label: '% Other',
        options: [
          {
            key: '10',
            text: '10%'
          },
          {
            key: '20',
            text: '20%'
          },
          {
            key: '30',
            text: '30%'
          },
          {
            key: '40',
            text: '40%'
          },
          {
            key: '50',
            text: '50%'
          },
          {
            key: '60',
            text: '60%'
          },
          {
            key: '70',
            text: '70%'
          },
          {
            key: '80',
            text: '80%'
          },
          {
            key: '90',
            text: '90%'
          },
          {
            key: '100',
            text: '100%'
          }
        ],
        passToFunction: 'woundBedCalculation',
        tableColumn: '26',
        tableLabel: '% Other',
        fqn: 'integumentaryAssessment.other'
      },
      {
        elementKey: 'woundBedCalculation',
        calculationType: 'sum',
        defaultValue: '0',
        formIndex: '4',
        inputType: 'calculatedValue',
        label: 'Wound bed calculation',
        tableColumn: '27',
        tableLabel: 'Wound bed calculation',
        validation: 'range(0,100)',
        fqn: 'integumentaryAssessment.woundBedCalculation'
      },
      {
        elementKey: 'exudateAmount',
        formIndex: '4',
        inputType: 'select',
        label: 'Exudate amount',
        options: [
          {
            key: 'None',
            text: 'None'
          },
          {
            key: 'Scant/small',
            text: 'Scant/small'
          },
          {
            key: 'Moderate',
            text: 'Moderate'
          },
          {
            key: 'Large/copious',
            text: 'Large/copious'
          }
        ],
        tableColumn: '28',
        tableLabel: 'Exudate amount',
        fqn: 'integumentaryAssessment.exudateAmount'
      },
      {
        elementKey: 'exudateType',
        formIndex: '4',
        inputType: 'checkset',
        label: 'Exudate type',
        options: [
          {
            key: 'Serous',
            text: 'Serous'
          },
          {
            key: 'Sanguineous',
            text: 'Sanguineous'
          },
          {
            key: 'Purulent',
            text: 'Purulent'
          },
          {
            key: 'Other',
            text: 'Other'
          }
        ],
        tableColumn: '29',
        tableLabel: 'Exudate type',
        fqn: 'integumentaryAssessment.exudateType'
      },
      {
        elementKey: 'odour',
        formIndex: '4',
        inputType: 'select',
        label: 'Odour present after cleansing',
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
        tableColumn: '30',
        tableLabel: 'Odour present after cleansing',
        fqn: 'integumentaryAssessment.odour'
      },
      {
        elementKey: 'woundEdge',
        formIndex: '4',
        helperText: 'Wound Edge: The perimeter of the wound\nDiffuse: Not well defined, indistinct, difficult to clearly define wound outline\nDemarcated: Well defined, distinct, easy to clearly define wound outline\nAttached: Edge appears flush with wound bed or as a “sloping” edge\nNot attached: Edge appears as a “cliff”\nEpithelializing: New, pink to purple, shiny migrating tissue\nRolled: Epithelial wound edge of a cavity wound which rolls under\n\n',
        inputType: 'checkset',
        label: 'Wound edge',
        options: [
          {
            key: 'Diffuse',
            text: 'Diffuse'
          },
          {
            key: 'Demarcated',
            text: 'Demarcated'
          },
          {
            key: 'Attached',
            text: 'Attached'
          },
          {
            key: 'Not attached',
            text: 'Not attached'
          },
          {
            key: 'Epithelialization',
            text: 'Epithelialization'
          },
          {
            key: 'Rolled',
            text: 'Rolled'
          },
          {
            key: '',
            text: ''
          }
        ],
        tableColumn: '31',
        tableLabel: 'Wound edge',
        fqn: 'integumentaryAssessment.woundEdge',
        helperHtml: '<p>Wound Edge: The perimeter of the wound</p>\n<p>Diffuse: Not well defined, indistinct, difficult to clearly define wound outline</p>\n<p>Demarcated: Well defined, distinct, easy to clearly define wound outline</p>\n<p>Attached: Edge appears flush with wound bed or as a “sloping” edge</p>\n<p>Not attached: Edge appears as a “cliff”</p>\n<p>Epithelializing: New, pink to purple, shiny migrating tissue</p>\n<p>Rolled: Epithelial wound edge of a cavity wound which rolls under</p>\n<p></p>\n<p></p>'
      },
      {
        elementKey: 'periWoundSkin',
        formIndex: '4',
        helperText: 'Intact: Unbroken skin\nFragile: Skin that is at risk for breakdown\nMacerated: Wet, white looking skin\nExcoriated/denuded: loss of tissue\nErythema (2cm or less): Redness of the skin; may be intense bright red to dark red that DOES NOT extend 2cm from the wound edge\nIndurated (2cm or less): Abnormal firmness of the tissues with palpable margins that DOES NOT extend 2cm from the wound edge\nErythema (greater than 2cm): Redness of the skin; may be intense bright red to dark red that extends 2cm from the wound edge\nIndurated (greater than 2cm): Abnormal firmness of the tissues with palpable margins that extends 2cm from the wound edge\nIncreased warmth: Increased warmth when compared to skin in adjacent area\n',
        inputType: 'checkset',
        label: 'Peri-wound skin',
        options: [
          {
            key: 'Intact',
            text: 'Intact'
          },
          {
            key: 'Fragile',
            text: 'Fragile'
          },
          {
            key: 'Macerated',
            text: 'Macerated'
          },
          {
            key: 'Excoriated/Denuded',
            text: 'Excoriated/Denuded'
          },
          {
            key: 'Erythema (2cm or less)',
            text: 'Erythema (2cm or less)'
          },
          {
            key: 'Indurated (2cm or less)',
            text: 'Indurated (2cm or less)'
          },
          {
            key: 'Indurated (greater than 2cm)',
            text: 'Indurated (greater than 2cm)'
          },
          {
            key: 'Erythema (greater than 2cm)',
            text: 'Erythema (greater than 2cm)'
          },
          {
            key: 'Increased Warmth',
            text: 'Increased Warmth'
          },
          {
            key: 'Other',
            text: 'Other'
          },
          {
            key: '',
            text: ''
          }
        ],
        tableColumn: '32',
        tableLabel: 'Peri-wound skin',
        fqn: 'integumentaryAssessment.periWoundSkin',
        helperHtml: '<p>Intact: Unbroken skin</p>\n<p>Fragile: Skin that is at risk for breakdown</p>\n<p>Macerated: Wet, white looking skin</p>\n<p>Excoriated/denuded: loss of tissue</p>\n<p>Erythema (2cm or less): Redness of the skin; may be intense bright red to dark red that DOES NOT extend 2cm from the wound edge</p>\n<p>Indurated (2cm or less): Abnormal firmness of the tissues with palpable margins that DOES NOT extend 2cm from the wound edge</p>\n<p>Erythema (greater than 2cm): Redness of the skin; may be intense bright red to dark red that extends 2cm from the wound edge</p>\n<p>Indurated (greater than 2cm): Abnormal firmness of the tissues with palpable margins that extends 2cm from the wound edge</p>\n<p>Increased warmth: Increased warmth when compared to skin in adjacent area</p>\n<p></p>'
      },
      {
        elementKey: 'woundPain',
        formIndex: '4',
        helperText: 'Scored from 10 point analogue Pain Scale\nSee Pain Assessment for details',
        inputType: 'text',
        label: 'Wound pain',
        suffix: '/10',
        tableColumn: '33',
        tableCss: 'hr-table',
        tableLabel: 'Wound pain',
        validation: 'range(0,10)',
        fqn: 'integumentaryAssessment.woundPain',
        helperHtml: '<p>Scored from 10 point analogue Pain Scale</p>\n<p>See Pain Assessment for details</p>'
      },
      {
        elementKey: 'packingOut',
        formIndex: '4',
        helperText: 'Any depth 1cm or greater, count packing pieces',
        inputType: 'text',
        label: 'Packing out',
        tableColumn: '34',
        tableLabel: 'Packing out',
        fqn: 'integumentaryAssessment.packingOut',
        helperHtml: '<p>Any depth 1cm or greater, count packing pieces</p>'
      },
      {
        elementKey: 'packinIn',
        formIndex: '4',
        helperText: 'Any depth 1cm or greater, count packing pieces',
        inputType: 'text',
        label: 'Packing in',
        tableColumn: '35',
        tableLabel: 'Packing in',
        fqn: 'integumentaryAssessment.packinIn',
        helperHtml: '<p>Any depth 1cm or greater, count packing pieces</p>'
      },
      {
        elementKey: 'spacer86',
        formIndex: '4',
        inputType: 'spacer',
        fqn: 'integumentaryAssessment.spacer86'
      },
      {
        elementKey: 'treatmentComplete',
        formIndex: '4',
        inputType: 'select',
        label: 'Treatments as per plan of care',
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
        tableColumn: '36',
        tableCss: 'hr-table',
        tableLabel: 'Treatments as per plan of care',
        fqn: 'integumentaryAssessment.treatmentComplete'
      },
      {
        elementKey: 'woundAssessmentComments',
        formIndex: '4',
        inputType: 'textarea',
        label: 'Comments',
        tableColumn: '1',
        tableLabel: 'Comments',
        fqn: 'integumentaryAssessment.woundAssessmentComments'
      }
    ],
    pageElements: {
      tableIncision: {
        elementKey: 'tableIncision',
        tableKey: 'tableIncision',
        isTable: true,
        hasRecHeader: true,
        label: 'Incision profile',
        addButtonText: 'Add an incision profile',
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
              'incisionLabel'
            ]
          },
          {
            ehr_list_index: '3',
            items: [
              'incisionLocation'
            ]
          },
          {
            ehr_list_index: '4',
            items: [
              'postOpDay'
            ]
          },
          {
            ehr_list_index: '5',
            items: [
              'opProcedure'
            ]
          },
          {
            ehr_list_index: '6',
            items: [
              'closureMethod'
            ]
          },
          {
            ehr_list_index: '7',
            items: [
              'incisionProfileImage'
            ]
          },
          {
            ehr_list_index: '8',
            items: [
              'incisionProfileComments'
            ]
          }
        ],
        form: {
          elementKey: 'tableIncision',
          label: 'Incision profile',
          addButtonText: 'Add an incision profile',
          formKey: 'tableIncision',
          ehr_groups: [
            {
              elementKey: 'ehr_group74',
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
              elementKey: 'incisionLocationGroup',
              label: 'Incision Location',
              formCss: 'section-divider',
              gIndex: '2',
              gChildren: [
                'incisionLabel',
                'incisionLocation',
                'postOpDay',
                'opProcedure',
                'closureMethod',
                'incisionProfileImage',
                'incisionProfileComments'
              ]
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            incisionLabel: '',
            incisionLocation: '',
            postOpDay: '',
            opProcedure: '',
            closureMethod: '',
            incisionProfileImage: '',
            incisionProfileComments: ''
          }
        }
      },
      tableIncisionAssessment: {
        elementKey: 'tableIncisionAssessment',
        tableKey: 'tableIncisionAssessment',
        isTable: true,
        hasRecHeader: true,
        label: 'Incision assessment',
        addButtonText: 'Add an incision assessment',
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
              'incisionLabel'
            ]
          },
          {
            ehr_list_index: '3',
            items: [
              'incisionStatus'
            ]
          },
          {
            ehr_list_index: '4',
            items: [
              'incisionStatusImage'
            ]
          },
          {
            ehr_list_index: '5',
            items: [
              'closureChanges'
            ]
          },
          {
            ehr_list_index: '6',
            items: [
              'exudateAmount'
            ]
          },
          {
            ehr_list_index: '7',
            items: [
              'exudateType'
            ]
          },
          {
            ehr_list_index: '8',
            items: [
              'periIncisionSkin'
            ]
          },
          {
            ehr_list_index: '9',
            items: [
              'periIncisionSkinOther'
            ]
          },
          {
            label: 'Comments',
            ehr_list_index: '10',
            items: [
              'incisionStatusComments'
            ]
          }
        ],
        form: {
          elementKey: 'tableIncisionAssessment',
          label: 'Incision assessment',
          addButtonText: 'Add an incision assessment',
          formOption: 'transpose',
          formKey: 'tableIncisionAssessment',
          ehr_groups: [
            {
              elementKey: 'ehr_group75',
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
              elementKey: 'incisionStatusGroup',
              label: 'Incision',
              formCss: 'section-divider',
              gIndex: '2',
              gChildren: [
                'incisionLabel',
                'incisionStatus',
                'incisionStatusImage',
                'closureChanges'
              ]
            },
            {
              elementKey: 'exudateGroup',
              label: 'Exudate Charateristics',
              formCss: 'section-divider',
              gIndex: '3',
              gChildren: [
                'exudateAmount',
                'exudateType'
              ]
            },
            {
              elementKey: 'periIncisionGroup',
              label: 'Peri-Incisional Skin',
              formCss: 'section-divider',
              gIndex: '4',
              gChildren: [
                'periIncisionSkin',
                'periIncisionSkinOther',
                'incisionStatusComments'
              ]
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            incisionLabel: '',
            incisionStatus: '',
            incisionStatusImage: '',
            closureChanges: '',
            exudateAmount: '',
            exudateType: '',
            periIncisionSkin: '',
            periIncisionSkinOther: '',
            incisionStatusComments: ''
          }
        }
      },
      tableWound: {
        elementKey: 'tableWound',
        tableKey: 'tableWound',
        isTable: true,
        hasRecHeader: true,
        label: 'Wound profile',
        addButtonText: 'Add a wound profile',
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
            label: 'Wound location',
            ehr_list_index: '2',
            items: [
              'woundLocation'
            ]
          },
          {
            label: 'Wound label',
            ehr_list_index: '3',
            items: [
              'woundLabel'
            ]
          },
          {
            label: 'Wound day of onset',
            ehr_list_index: '4',
            items: [
              'woundDayOnset'
            ]
          },
          {
            label: 'Wound Etiology/Type',
            ehr_list_index: '5',
            items: [
              'stageType'
            ]
          },
          {
            label: 'Other',
            ehr_list_index: '6',
            items: [
              'stageOther'
            ]
          },
          {
            label: 'Goal of care',
            ehr_list_index: '7',
            items: [
              'goalOfCare'
            ]
          },
          {
            label: 'Image',
            ehr_list_index: '8',
            items: [
              'woundProfileImage'
            ]
          },
          {
            label: 'Comments',
            ehr_list_index: '9',
            items: [
              'woundProfileComments'
            ]
          }
        ],
        form: {
          elementKey: 'tableWound',
          label: 'Wound profile',
          addButtonText: 'Add a wound profile',
          formKey: 'tableWound',
          ehr_groups: [
            {
              elementKey: 'ehr_group76',
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
              elementKey: 'ehr_group77',
              formCss: 'section-divider',
              gIndex: '2',
              gChildren: [
                'woundLocation',
                'woundLabel',
                'woundDayOnset'
              ]
            },
            {
              elementKey: 'woundTypeGroup',
              formCss: 'section-divider',
              gIndex: '3',
              gChildren: [
                'stageType',
                'stageOther',
                'goalOfCare',
                'woundProfileImage',
                'woundProfileComments'
              ]
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            woundLocation: '',
            woundLabel: '',
            woundDayOnset: '',
            stageType: '',
            stageOther: '',
            goalOfCare: '',
            woundProfileImage: '',
            woundProfileComments: ''
          }
        }
      },
      tableWoundAssessment: {
        elementKey: 'tableWoundAssessment',
        tableKey: 'tableWoundAssessment',
        isTable: true,
        hasRecHeader: true,
        label: 'Wound assessment',
        addButtonText: 'Add a wound assessment',
        ehr_list: [
          {
            label: 'Identification',
            ehr_list_index: '1',
            items: [
              'name',
              'profession',
              'day',
              'time',
              'woundAssessmentComments'
            ]
          },
          {
            label: 'Wound label',
            ehr_list_index: '2',
            items: [
              'woundLabel'
            ]
          },
          {
            label: 'Image',
            ehr_list_index: '3',
            items: [
              'woundAssessmentImage'
            ]
          },
          {
            label: 'Length cm.mm',
            ehr_list_index: '4',
            items: [
              'length'
            ]
          },
          {
            label: 'Width cm.mm',
            ehr_list_index: '5',
            items: [
              'width'
            ]
          },
          {
            label: 'Depth cm.mm',
            ehr_list_index: '6',
            items: [
              'depth'
            ]
          },
          {
            label: 'Sinus/tunnel 1 depth cm.mm',
            ehr_list_index: '7',
            items: [
              'sinusDepth1'
            ]
          },
          {
            label: 'Location',
            ehr_list_index: '8',
            items: [
              'sinusDepthLocation1'
            ]
          },
          {
            label: 'Sinus/tunnel 2 depth cm.mm',
            ehr_list_index: '9',
            items: [
              'sinusDepth2'
            ]
          },
          {
            label: 'Location',
            ehr_list_index: '10',
            items: [
              'sinusDepthLocation2'
            ]
          },
          {
            label: 'Undermining 1 depth cm.mm',
            ehr_list_index: '11',
            items: [
              'underminingDepth1'
            ]
          },
          {
            label: 'Location',
            ehr_list_index: '12',
            items: [
              'underminingDepthLocation1A'
            ]
          },
          {
            label: 'Location',
            ehr_list_index: '13',
            items: [
              'underminingDepthLocation1B'
            ]
          },
          {
            label: 'Undermining 2 depth cm.mm',
            ehr_list_index: '14',
            items: [
              'underminingDepth2'
            ]
          },
          {
            label: 'Location',
            ehr_list_index: '15',
            items: [
              'underminingDepthLocation2A'
            ]
          },
          {
            label: 'Location',
            ehr_list_index: '16',
            items: [
              'underminingDepthLocation2B'
            ]
          },
          {
            label: '% Superficial (pink/red)',
            ehr_list_index: '17',
            items: [
              'pinkred'
            ]
          },
          {
            label: '% Granulation',
            ehr_list_index: '18',
            items: [
              'granulation'
            ]
          },
          {
            label: '% Nongranulated',
            ehr_list_index: '19',
            items: [
              'nongranulated'
            ]
          },
          {
            label: '% Slough',
            ehr_list_index: '20',
            items: [
              'slough'
            ]
          },
          {
            label: '% Eschar (soft, boggy)',
            ehr_list_index: '21',
            items: [
              'escharBoggy'
            ]
          },
          {
            label: '% Eschar (dry, stable)',
            ehr_list_index: '22',
            items: [
              'escharStable'
            ]
          },
          {
            label: '% Foreign body',
            ehr_list_index: '23',
            items: [
              'foreign'
            ]
          },
          {
            label: '% Underlying structures',
            ehr_list_index: '24',
            items: [
              'underlying'
            ]
          },
          {
            label: '% Not visible',
            ehr_list_index: '25',
            items: [
              'notVisible'
            ]
          },
          {
            label: '% Other',
            ehr_list_index: '26',
            items: [
              'other'
            ]
          },
          {
            label: 'Wound bed calculation',
            ehr_list_index: '27',
            items: [
              'woundBedCalculation'
            ]
          },
          {
            label: 'Exudate amount',
            ehr_list_index: '28',
            items: [
              'exudateAmount'
            ]
          },
          {
            label: 'Exudate type',
            ehr_list_index: '29',
            items: [
              'exudateType'
            ]
          },
          {
            label: 'Odour present after cleansing',
            ehr_list_index: '30',
            items: [
              'odour'
            ]
          },
          {
            label: 'Wound edge',
            ehr_list_index: '31',
            items: [
              'woundEdge'
            ]
          },
          {
            label: 'Peri-wound skin',
            ehr_list_index: '32',
            items: [
              'periWoundSkin'
            ]
          },
          {
            label: 'Wound pain',
            tableCss: 'hr-table',
            ehr_list_index: '33',
            items: [
              'woundPain'
            ]
          },
          {
            label: 'Packing out',
            ehr_list_index: '34',
            items: [
              'packingOut'
            ]
          },
          {
            label: 'Packing in',
            ehr_list_index: '35',
            items: [
              'packinIn'
            ]
          },
          {
            label: 'Treatments as per plan of care',
            tableCss: 'hr-table',
            ehr_list_index: '36',
            items: [
              'treatmentComplete'
            ]
          }
        ],
        form: {
          elementKey: 'tableWoundAssessment',
          label: 'Wound assessment',
          addButtonText: 'Add a wound assessment',
          formOption: 'transpose',
          formKey: 'tableWoundAssessment',
          ehr_groups: [
            {
              elementKey: 'ehr_group78',
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
              elementKey: 'woundMeasureGroup',
              formCss: 'section-divider',
              gIndex: '2',
              gChildren: [
                'woundLabel',
                'woundAssessmentImage'
              ]
            },
            {
              elementKey: 'woundMeasureGroup',
              label: 'Wound measurements',
              formCss: 'section-divider',
              gIndex: '3',
              gChildren: [
                'length',
                'width',
                'depth',
                'sinusDepth1',
                'sinusDepthLocation1',
                'spacer79',
                'sinusDepth2',
                'sinusDepthLocation2',
                'spacer80',
                'underminingDepth1',
                'underminingDepthLocation1A',
                'underminingDepthLocation1B',
                'underminingDepth2',
                'underminingDepthLocation2A',
                'underminingDepthLocation2B'
              ]
            },
            {
              elementKey: 'woundBed',
              label: 'Wound bed',
              formCss: 'section-divider',
              gIndex: '4',
              gChildren: [
                'pinkred',
                'granulation',
                'nongranulated',
                'slough',
                'escharBoggy',
                'escharStable',
                'foreign',
                'underlying',
                'notVisible',
                'other',
                'woundBedCalculation'
              ]
            },
            {
              elementKey: 'ehr_group81',
              formCss: 'section-divider',
              gIndex: '5',
              gChildren: [
                'exudateAmount',
                'exudateType'
              ]
            },
            {
              elementKey: 'ehr_group82',
              formCss: 'section-divider',
              gIndex: '6',
              gChildren: [
                'odour'
              ]
            },
            {
              elementKey: 'ehr_group83',
              formCss: 'section-divider',
              gIndex: '7',
              gChildren: [
                'woundEdge',
                'periWoundSkin'
              ]
            },
            {
              elementKey: 'ehr_group84',
              formCss: 'section-divider',
              gIndex: '8',
              gChildren: [
                'woundPain'
              ]
            },
            {
              elementKey: 'ehr_group85',
              label: 'Treatment',
              formCss: 'section-divider',
              gIndex: '9',
              gChildren: [
                'packingOut',
                'packinIn',
                'spacer86',
                'treatmentComplete',
                'woundAssessmentComments'
              ]
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            woundLabel: '',
            woundAssessmentImage: '',
            length: '',
            width: '',
            depth: '',
            sinusDepth1: '',
            sinusDepthLocation1: '',
            sinusDepth2: '',
            sinusDepthLocation2: '',
            underminingDepth1: '',
            underminingDepthLocation1A: '',
            underminingDepthLocation1B: '',
            underminingDepth2: '',
            underminingDepthLocation2A: '',
            underminingDepthLocation2B: '',
            pinkred: '',
            granulation: '',
            nongranulated: '',
            slough: '',
            escharBoggy: '',
            escharStable: '',
            foreign: '',
            underlying: '',
            notVisible: '',
            other: '',
            woundBedCalculation: '0',
            exudateAmount: '',
            exudateType: '',
            odour: '',
            woundEdge: '',
            periWoundSkin: '',
            woundPain: '',
            packingOut: '',
            packinIn: '',
            treatmentComplete: '',
            woundAssessmentComments: ''
          }
        }
      }
    }
  },
  hematology: {
    pageDataKey: 'hematology',
    pageTitle: 'Hematology',
    pIndex: '43',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'hematology.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'hematology.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'hematology.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'hematology.time'
      },
      {
        elementKey: 'patientName',
        formIndex: '1',
        inputType: 'ehrPatientName',
        label: 'Patient Name',
        tableColumn: '2',
        fqn: 'hematology.patientName'
      },
      {
        elementKey: 'patientHealthNumber',
        formIndex: '1',
        inputType: 'ehrPHN',
        label: 'PHN',
        tableColumn: '3',
        fqn: 'hematology.patientHealthNumber'
      },
      {
        elementKey: 'dateOfBirth',
        formIndex: '1',
        inputType: 'ehrDOB',
        label: 'DOB',
        tableColumn: '4',
        fqn: 'hematology.dateOfBirth'
      },
      {
        elementKey: 'dateOfTest',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Date of test',
        tableColumn: '5',
        fqn: 'hematology.dateOfTest'
      },
      {
        elementKey: 'timeOfTest',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time of test',
        tableColumn: '6',
        validation: 'time24',
        fqn: 'hematology.timeOfTest'
      },
      {
        elementKey: 'wbc',
        formIndex: '1',
        helperText: 'White blood cell count',
        inputType: 'number',
        label: 'WBC',
        mandatory: true,
        suffix: '10^9/L',
        tableColumn: '7',
        validation: 'numeric',
        fqn: 'hematology.wbc',
        helperHtml: '<p>White blood cell count</p>'
      },
      {
        elementKey: 'wbc-interp',
        formIndex: '1',
        inputType: 'select',
        label: 'Interpretation',
        options: [
          {
            key: 'low',
            text: 'low'
          },
          {
            key: 'normal',
            text: 'normal'
          },
          {
            key: 'high',
            text: 'high'
          }
        ],
        tableColumn: '8',
        fqn: 'hematology.wbc-interp'
      },
      {
        elementKey: 'aSpacer',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'hematology.aSpacer'
      },
      {
        elementKey: 'rbc',
        formIndex: '1',
        helperText: 'Red blood cell count',
        inputType: 'number',
        label: 'RBC',
        suffix: '10^12/L',
        tableColumn: '9',
        validation: 'numeric',
        fqn: 'hematology.rbc',
        helperHtml: '<p>Red blood cell count</p>'
      },
      {
        elementKey: 'rbc-interp',
        formIndex: '1',
        inputType: 'select',
        label: 'Interpretation',
        options: [
          {
            key: 'low',
            text: 'low'
          },
          {
            key: 'normal',
            text: 'normal'
          },
          {
            key: 'high',
            text: 'high'
          }
        ],
        tableColumn: '10',
        fqn: 'hematology.rbc-interp'
      },
      {
        elementKey: 'aSpacer',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'hematology.aSpacer'
      },
      {
        elementKey: 'hgb',
        formIndex: '1',
        helperText: 'Hemoglobin',
        inputType: 'number',
        label: 'HGB',
        suffix: 'g/L',
        tableColumn: '10',
        validation: 'numeric',
        fqn: 'hematology.hgb',
        helperHtml: '<p>Hemoglobin</p>'
      },
      {
        elementKey: 'hgb-interp',
        formIndex: '1',
        inputType: 'select',
        label: 'Interpretation',
        options: [
          {
            key: 'low',
            text: 'low'
          },
          {
            key: 'normal',
            text: 'normal'
          },
          {
            key: 'high',
            text: 'high'
          }
        ],
        tableColumn: '11',
        fqn: 'hematology.hgb-interp'
      },
      {
        elementKey: 'aSpacer',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'hematology.aSpacer'
      },
      {
        elementKey: 'HCT',
        formIndex: '1',
        helperText: 'Hematocrit',
        inputType: 'number',
        label: 'HCT',
        suffix: 'L/L',
        tableColumn: '11',
        validation: 'numeric',
        fqn: 'hematology.HCT',
        helperHtml: '<p>Hematocrit</p>'
      },
      {
        elementKey: 'HCT-interp',
        formIndex: '1',
        inputType: 'select',
        label: 'Interpretation',
        options: [
          {
            key: 'low',
            text: 'low'
          },
          {
            key: 'normal',
            text: 'normal'
          },
          {
            key: 'high',
            text: 'high'
          }
        ],
        tableColumn: '12',
        fqn: 'hematology.HCT-interp'
      },
      {
        elementKey: 'aSpacer',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'hematology.aSpacer'
      },
      {
        elementKey: 'MCV',
        formIndex: '1',
        helperText: 'Mean Cell Volume',
        inputType: 'number',
        label: 'MCV',
        suffix: 'fL',
        tableColumn: '12',
        validation: 'numeric',
        fqn: 'hematology.MCV',
        helperHtml: '<p>Mean Cell Volume</p>'
      },
      {
        elementKey: 'MCV-interp',
        formIndex: '1',
        inputType: 'select',
        label: 'Interpretation',
        options: [
          {
            key: 'low',
            text: 'low'
          },
          {
            key: 'normal',
            text: 'normal'
          },
          {
            key: 'high',
            text: 'high'
          }
        ],
        tableColumn: '13',
        fqn: 'hematology.MCV-interp'
      },
      {
        elementKey: 'aSpacer',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'hematology.aSpacer'
      },
      {
        elementKey: 'MCH',
        formIndex: '1',
        helperText: 'Mean Cell Hemoglobin',
        inputType: 'number',
        label: 'MCH',
        suffix: 'pg',
        tableColumn: '13',
        validation: 'numeric',
        fqn: 'hematology.MCH',
        helperHtml: '<p>Mean Cell Hemoglobin</p>'
      },
      {
        elementKey: 'MCH-interp',
        formIndex: '1',
        inputType: 'select',
        label: 'Interpretation',
        options: [
          {
            key: 'low',
            text: 'low'
          },
          {
            key: 'normal',
            text: 'normal'
          },
          {
            key: 'high',
            text: 'high'
          }
        ],
        tableColumn: '14',
        fqn: 'hematology.MCH-interp'
      },
      {
        elementKey: 'aSpacer',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'hematology.aSpacer'
      },
      {
        elementKey: 'MCHC',
        formIndex: '1',
        helperText: 'Mean Cell Hemoglobin Concentration',
        inputType: 'number',
        label: 'MCHC',
        suffix: 'g/L',
        tableColumn: '14',
        validation: 'numeric',
        fqn: 'hematology.MCHC',
        helperHtml: '<p>Mean Cell Hemoglobin Concentration</p>'
      },
      {
        elementKey: 'MCHC-interp',
        formIndex: '1',
        inputType: 'select',
        label: 'Interpretation',
        options: [
          {
            key: 'low',
            text: 'low'
          },
          {
            key: 'normal',
            text: 'normal'
          },
          {
            key: 'high',
            text: 'high'
          }
        ],
        tableColumn: '15',
        fqn: 'hematology.MCHC-interp'
      },
      {
        elementKey: 'aSpacer',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'hematology.aSpacer'
      },
      {
        elementKey: 'RDW',
        formIndex: '1',
        helperText: 'Red Cell Distribution Width CV',
        inputType: 'number',
        label: 'RDW',
        suffix: '%',
        tableColumn: '15',
        validation: 'numeric',
        fqn: 'hematology.RDW',
        helperHtml: '<p>Red Cell Distribution Width CV</p>'
      },
      {
        elementKey: 'RDW-interp',
        formIndex: '1',
        inputType: 'select',
        label: 'Interpretation',
        options: [
          {
            key: 'low',
            text: 'low'
          },
          {
            key: 'normal',
            text: 'normal'
          },
          {
            key: 'high',
            text: 'high'
          }
        ],
        tableColumn: '16',
        fqn: 'hematology.RDW-interp'
      },
      {
        elementKey: 'aSpacer',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'hematology.aSpacer'
      },
      {
        elementKey: 'PLT',
        formIndex: '1',
        helperText: 'Platelet Count',
        inputType: 'number',
        label: 'PLT',
        mandatory: true,
        suffix: '10^9/L',
        tableColumn: '16',
        validation: 'numeric',
        fqn: 'hematology.PLT',
        helperHtml: '<p>Platelet Count</p>'
      },
      {
        elementKey: 'PLT-interp',
        formIndex: '1',
        inputType: 'select',
        label: 'Interpretation',
        options: [
          {
            key: 'low',
            text: 'low'
          },
          {
            key: 'normal',
            text: 'normal'
          },
          {
            key: 'high',
            text: 'high'
          }
        ],
        tableColumn: '17',
        fqn: 'hematology.PLT-interp'
      },
      {
        elementKey: 'aSpacer',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'hematology.aSpacer'
      },
      {
        elementKey: 'MPV',
        formIndex: '1',
        helperText: 'Mean Platelet Volume',
        inputType: 'number',
        label: 'MPV',
        suffix: 'fL',
        tableColumn: '17',
        validation: 'numeric',
        fqn: 'hematology.MPV',
        helperHtml: '<p>Mean Platelet Volume</p>'
      },
      {
        elementKey: 'MPV-interp',
        formIndex: '1',
        inputType: 'select',
        label: 'Interpretation',
        options: [
          {
            key: 'low',
            text: 'low'
          },
          {
            key: 'normal',
            text: 'normal'
          },
          {
            key: 'high',
            text: 'high'
          }
        ],
        tableColumn: '18',
        fqn: 'hematology.MPV-interp'
      },
      {
        elementKey: 'aSpacer',
        formIndex: '1',
        inputType: 'spacer',
        fqn: 'hematology.aSpacer'
      },
      {
        elementKey: 'comments',
        formIndex: '1',
        formCss: 'grid-span-2-columns',
        inputType: 'textarea',
        label: 'CBC Comments',
        tableColumn: '18',
        fqn: 'hematology.comments'
      },
      {
        elementKey: 'name',
        formIndex: '2',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'hematology.name'
      },
      {
        elementKey: 'profession',
        formIndex: '2',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'hematology.profession'
      },
      {
        elementKey: 'day',
        formIndex: '2',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'hematology.day'
      },
      {
        elementKey: 'time',
        formIndex: '2',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'hematology.time'
      },
      {
        elementKey: 'patientName',
        formIndex: '2',
        inputType: 'ehrPatientName',
        label: 'Patient Name',
        tableColumn: '2',
        fqn: 'hematology.patientName'
      },
      {
        elementKey: 'patientHealthNumber',
        formIndex: '2',
        inputType: 'ehrPHN',
        label: 'PHN',
        tableColumn: '3',
        fqn: 'hematology.patientHealthNumber'
      },
      {
        elementKey: 'dateOfBirth',
        formIndex: '2',
        inputType: 'ehrDOB',
        label: 'DOB',
        tableColumn: '4',
        fqn: 'hematology.dateOfBirth'
      },
      {
        elementKey: 'dateOfReview',
        formIndex: '2',
        inputType: 'visitDay',
        label: 'Date of review',
        tableColumn: '5',
        fqn: 'hematology.dateOfReview'
      },
      {
        elementKey: 'timeOfReview',
        formIndex: '2',
        inputType: 'visitTime',
        label: 'Time of review',
        tableColumn: '6',
        fqn: 'hematology.timeOfReview'
      },
      {
        elementKey: 'bloodAnalysis',
        formIndex: '2',
        embedRef: 'hematology.tableCbcAnalysis',
        inputType: 'ehr_embedded',
        label: 'CBC Analysis',
        passToFunction: '[wbcAnalysis, pltAnalysis, cellCntSegNeutrophilAbs, cellCntBandCellsAbs, cellCntLymphAbs, cellCntMonoAbs, cellCntEosinAbs, cellCntBasoAbs, cellCntMetaAbs, cellCntMyeloAbs, cellCntPromyeloAbs, cellCntBlastAbs, cellCntReactiveLymphsAbs, cellCntOtherAbs]',
        tableColumn: '7',
        fqn: 'hematology.bloodAnalysis'
      },
      {
        elementKey: 'actionsRequired',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Actions required',
        suffix: '10^9/L',
        tableColumn: '8',
        fqn: 'hematology.actionsRequired'
      },
      {
        elementKey: 'actionsTaken',
        formIndex: '2',
        formCss: 'grid-span-2-columns',
        inputType: 'textarea',
        label: 'Actions taken',
        suffix: '10^12/L',
        tableColumn: '9',
        fqn: 'hematology.actionsTaken'
      },
      {
        elementKey: 'scanComments',
        formIndex: '2',
        formCss: 'grid-span-2-columns',
        inputType: 'textarea',
        label: 'Scan comments',
        suffix: '10^12/L',
        tableColumn: '10',
        fqn: 'hematology.scanComments'
      },
      {
        elementKey: 'wbc-1',
        formIndex: '2',
        inputType: 'number',
        label: 'WBC - 1',
        passToFunction: 'wbcAverage',
        tableColumn: '11',
        validation: 'numeric',
        fqn: 'hematology.wbc-1'
      },
      {
        elementKey: 'wbc-2',
        formIndex: '2',
        inputType: 'number',
        label: 'WBC - 2',
        passToFunction: 'wbcAverage',
        tableColumn: '12',
        validation: 'numeric',
        fqn: 'hematology.wbc-2'
      },
      {
        elementKey: 'wbc-3',
        formIndex: '2',
        inputType: 'number',
        label: 'WBC - 3',
        passToFunction: 'wbcAverage',
        tableColumn: '13',
        validation: 'numeric',
        fqn: 'hematology.wbc-3'
      },
      {
        elementKey: 'wbc-4',
        formIndex: '2',
        inputType: 'number',
        label: 'WBC - 4',
        passToFunction: 'wbcAverage',
        tableColumn: '14',
        validation: 'numeric',
        fqn: 'hematology.wbc-4'
      },
      {
        elementKey: 'wbc-5',
        formIndex: '2',
        inputType: 'number',
        label: 'WBC - 5',
        passToFunction: 'wbcAverage',
        tableColumn: '15',
        validation: 'numeric',
        fqn: 'hematology.wbc-5'
      },
      {
        elementKey: 'wbc-6',
        formIndex: '2',
        inputType: 'number',
        label: 'WBC - 6',
        passToFunction: 'wbcAverage',
        tableColumn: '16',
        validation: 'numeric',
        fqn: 'hematology.wbc-6'
      },
      {
        elementKey: 'wbc-7',
        formIndex: '2',
        inputType: 'number',
        label: 'WBC - 7',
        passToFunction: 'wbcAverage',
        tableColumn: '17',
        validation: 'numeric',
        fqn: 'hematology.wbc-7'
      },
      {
        elementKey: 'wbc-8',
        formIndex: '2',
        inputType: 'number',
        label: 'WBC - 8',
        passToFunction: 'wbcAverage',
        tableColumn: '18',
        validation: 'numeric',
        fqn: 'hematology.wbc-8'
      },
      {
        elementKey: 'wbc-9',
        formIndex: '2',
        inputType: 'number',
        label: 'WBC - 9',
        passToFunction: 'wbcAverage',
        tableColumn: '19',
        validation: 'numeric',
        fqn: 'hematology.wbc-9'
      },
      {
        elementKey: 'wbc-10',
        formIndex: '2',
        inputType: 'number',
        label: 'WBC - 10',
        passToFunction: 'wbcAverage',
        tableColumn: '20',
        validation: 'numeric',
        fqn: 'hematology.wbc-10'
      },
      {
        elementKey: 'wbcFieldFactor',
        defaultValue: '1.8',
        formIndex: '2',
        inputType: 'number',
        label: 'WBC field factor',
        passToFunction: 'wbcEstimate',
        tableColumn: '21',
        validation: 'numeric',
        fqn: 'hematology.wbcFieldFactor'
      },
      {
        elementKey: 'wbcAverage',
        calculationType: 'average',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'WBC average',
        passToFunction: 'wbcEstimate',
        tableColumn: '22',
        validation: 'numeric',
        fqn: 'hematology.wbcAverage'
      },
      {
        elementKey: 'wbcEstimate',
        calculationType: 'product',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'WBC estimate',
        tableColumn: '23',
        validation: 'numeric',
        fqn: 'hematology.wbcEstimate'
      },
      {
        elementKey: 'wbcAnalysis',
        calculationType: 'embedValue(hematology,tableCbcAnalysis,wbc)',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'WBC count',
        passToFunction: '[wbcLowRange, wbcHighRange]',
        tableColumn: '24',
        validation: 'numeric',
        fqn: 'hematology.wbcAnalysis'
      },
      {
        elementKey: 'wbcLowRange',
        calculationType: 'multiplyBy(0.75)',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'WBC acceptable range (low)',
        tableColumn: '25',
        validation: 'numeric',
        fqn: 'hematology.wbcLowRange'
      },
      {
        elementKey: 'wbcHighRange',
        calculationType: 'multiplyBy(1.25)',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'WBC acceptable range (high)',
        tableColumn: '26',
        validation: 'numeric',
        fqn: 'hematology.wbcHighRange'
      },
      {
        elementKey: 'wbcComment',
        formIndex: '2',
        formCss: 'grid-span-2-columns',
        inputType: 'text',
        label: 'Internal WBC comment',
        tableColumn: '27',
        fqn: 'hematology.wbcComment'
      },
      {
        elementKey: 'plt-1',
        formIndex: '2',
        inputType: 'number',
        label: 'PLT - 1',
        passToFunction: 'pltAverage',
        tableColumn: '28',
        validation: 'numeric',
        fqn: 'hematology.plt-1'
      },
      {
        elementKey: 'plt-2',
        formIndex: '2',
        inputType: 'number',
        label: 'PLT - 2',
        passToFunction: 'pltAverage',
        tableColumn: '29',
        validation: 'numeric',
        fqn: 'hematology.plt-2'
      },
      {
        elementKey: 'plt-3',
        formIndex: '2',
        inputType: 'number',
        label: 'PLT - 3',
        passToFunction: 'pltAverage',
        tableColumn: '30',
        validation: 'numeric',
        fqn: 'hematology.plt-3'
      },
      {
        elementKey: 'plt-4',
        formIndex: '2',
        inputType: 'number',
        label: 'PLT - 4',
        passToFunction: 'pltAverage',
        tableColumn: '31',
        validation: 'numeric',
        fqn: 'hematology.plt-4'
      },
      {
        elementKey: 'plt-5',
        formIndex: '2',
        inputType: 'number',
        label: 'PLT - 5',
        passToFunction: 'pltAverage',
        tableColumn: '32',
        validation: 'numeric',
        fqn: 'hematology.plt-5'
      },
      {
        elementKey: 'plt-6',
        formIndex: '2',
        inputType: 'number',
        label: 'PLT - 6',
        passToFunction: 'pltAverage',
        tableColumn: '33',
        validation: 'numeric',
        fqn: 'hematology.plt-6'
      },
      {
        elementKey: 'plt-7',
        formIndex: '2',
        inputType: 'number',
        label: 'PLT - 7',
        passToFunction: 'pltAverage',
        tableColumn: '34',
        validation: 'numeric',
        fqn: 'hematology.plt-7'
      },
      {
        elementKey: 'plt-8',
        formIndex: '2',
        inputType: 'number',
        label: 'PLT - 8',
        passToFunction: 'pltAverage',
        tableColumn: '35',
        validation: 'numeric',
        fqn: 'hematology.plt-8'
      },
      {
        elementKey: 'plt-9',
        formIndex: '2',
        inputType: 'number',
        label: 'PLT - 9',
        passToFunction: 'pltAverage',
        tableColumn: '36',
        validation: 'numeric',
        fqn: 'hematology.plt-9'
      },
      {
        elementKey: 'plt-10',
        formIndex: '2',
        inputType: 'number',
        label: 'PLT - 10',
        passToFunction: 'pltAverage',
        tableColumn: '37',
        validation: 'numeric',
        fqn: 'hematology.plt-10'
      },
      {
        elementKey: 'pltFieldFactor',
        defaultValue: '11.1',
        formIndex: '2',
        inputType: 'number',
        label: 'PLT field factor',
        passToFunction: 'pltEstimate',
        tableColumn: '38',
        validation: 'numeric',
        fqn: 'hematology.pltFieldFactor'
      },
      {
        elementKey: 'pltAverage',
        calculationType: 'average',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'PLT average',
        passToFunction: 'pltEstimate',
        tableColumn: '39',
        validation: 'numeric',
        fqn: 'hematology.pltAverage'
      },
      {
        elementKey: 'pltEstimate',
        calculationType: 'product',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'PLT estimate',
        tableColumn: '40',
        validation: 'numeric',
        fqn: 'hematology.pltEstimate'
      },
      {
        elementKey: 'pltAnalysis',
        calculationType: 'embedValue(hematology,tableCbcAnalysis,PLT)',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'PLT count',
        passToFunction: '[pltLowRange, pltHighRange]',
        tableColumn: '41',
        validation: 'numeric',
        fqn: 'hematology.pltAnalysis'
      },
      {
        elementKey: 'pltLowRange',
        calculationType: 'multiplyBy(0.75)',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'PLT acceptable range (low)',
        tableColumn: '42',
        validation: 'numeric',
        fqn: 'hematology.pltLowRange'
      },
      {
        elementKey: 'pltHighRange',
        calculationType: 'multiplyBy(1.25)',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'PLT acceptable range (high)',
        tableColumn: '43',
        validation: 'numeric',
        fqn: 'hematology.pltHighRange'
      },
      {
        elementKey: 'pltComment',
        formIndex: '2',
        formCss: 'grid-span-2-columns',
        inputType: 'text',
        label: 'Internal PLT comment',
        tableColumn: '44',
        fqn: 'hematology.pltComment'
      },
      {
        elementKey: 'pltNormalMorphology',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Normal',
        tableColumn: '45',
        fqn: 'hematology.pltNormalMorphology'
      },
      {
        elementKey: 'pltAbnormalMorphology',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Abnormal',
        tableColumn: '46',
        fqn: 'hematology.pltAbnormalMorphology'
      },
      {
        elementKey: 'pltMorphology',
        formIndex: '2',
        formCss: 'form_label_short',
        inputType: 'checkset',
        label: 'Type',
        options: [
          {
            key: 'Hypogranular',
            text: 'Hypogranular'
          },
          {
            key: 'Large or Giant Forms',
            text: 'Large or Giant Forms'
          },
          {
            key: 'Megakaryocytic Fragments',
            text: 'Megakaryocytic Fragments'
          },
          {
            key: 'Platelet Clumps',
            text: 'Platelet Clumps'
          },
          {
            key: 'Platelet Satellitism',
            text: 'Platelet Satellitism'
          },
          {
            key: 'Dysplastic',
            text: 'Dysplastic'
          }
        ],
        tableColumn: '47',
        fqn: 'hematology.pltMorphology'
      },
      {
        elementKey: 'cellCntSegNeutrophil',
        formIndex: '2',
        inputType: 'number',
        label: 'Segmented Neutrophil',
        passToFunction: '[ cellCntTotal cellCntSegNeutrophilAbs]',
        tableColumn: '48',
        validation: 'numeric',
        fqn: 'hematology.cellCntSegNeutrophil'
      },
      {
        elementKey: 'cellCntSegNeutrophilAbs',
        calculationType: 'wbcAbs',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'Segmented Neutrophil Abs',
        tableColumn: '49',
        validation: 'numeric',
        fqn: 'hematology.cellCntSegNeutrophilAbs'
      },
      {
        elementKey: 'cellCntBandCells',
        formIndex: '2',
        inputType: 'number',
        label: 'Band Cells',
        passToFunction: '[ cellCntTotal cellCntBandCellsAbs ]',
        tableColumn: '50',
        validation: 'numeric',
        fqn: 'hematology.cellCntBandCells'
      },
      {
        elementKey: 'cellCntBandCellsAbs',
        calculationType: 'wbcAbs',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'Band Cells Abs',
        tableColumn: '51',
        validation: 'numeric',
        fqn: 'hematology.cellCntBandCellsAbs'
      },
      {
        elementKey: 'cellCntLymph',
        formIndex: '2',
        inputType: 'number',
        label: 'Lymph',
        passToFunction: '[ cellCntTotal cellCntLymphAbs ]',
        tableColumn: '52',
        validation: 'numeric',
        fqn: 'hematology.cellCntLymph'
      },
      {
        elementKey: 'cellCntLymphAbs',
        calculationType: 'wbcAbs',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'Lymph Abs',
        tableColumn: '53',
        validation: 'numeric',
        fqn: 'hematology.cellCntLymphAbs'
      },
      {
        elementKey: 'cellCntMono',
        formIndex: '2',
        inputType: 'number',
        label: 'Mono',
        passToFunction: '[ cellCntTotal cellCntMonoAbs ]',
        tableColumn: '54',
        validation: 'numeric',
        fqn: 'hematology.cellCntMono'
      },
      {
        elementKey: 'cellCntMonoAbs',
        calculationType: 'wbcAbs',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'Mono Abs',
        tableColumn: '55',
        validation: 'numeric',
        fqn: 'hematology.cellCntMonoAbs'
      },
      {
        elementKey: 'cellCntEosin',
        formIndex: '2',
        inputType: 'number',
        label: 'Eosin',
        passToFunction: '[ cellCntTotal cellCntEosinAbs ]',
        tableColumn: '56',
        validation: 'numeric',
        fqn: 'hematology.cellCntEosin'
      },
      {
        elementKey: 'cellCntEosinAbs',
        calculationType: 'wbcAbs',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'Eosin Abs',
        tableColumn: '57',
        validation: 'numeric',
        fqn: 'hematology.cellCntEosinAbs'
      },
      {
        elementKey: 'cellCntBaso',
        formIndex: '2',
        inputType: 'number',
        label: 'Baso',
        passToFunction: '[ cellCntTotal cellCntBasoAbs ]',
        tableColumn: '58',
        validation: 'numeric',
        fqn: 'hematology.cellCntBaso'
      },
      {
        elementKey: 'cellCntBasoAbs',
        calculationType: 'wbcAbs',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'Baso Abs',
        tableColumn: '59',
        validation: 'numeric',
        fqn: 'hematology.cellCntBasoAbs'
      },
      {
        elementKey: 'cellCntMeta',
        formIndex: '2',
        inputType: 'number',
        label: 'Meta',
        passToFunction: '[ cellCntTotal cellCntMetaAbs ]',
        tableColumn: '60',
        validation: 'numeric',
        fqn: 'hematology.cellCntMeta'
      },
      {
        elementKey: 'cellCntMetaAbs',
        calculationType: 'wbcAbs',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'Meta Abs',
        tableColumn: '61',
        validation: 'numeric',
        fqn: 'hematology.cellCntMetaAbs'
      },
      {
        elementKey: 'cellCntMyelo',
        formIndex: '2',
        inputType: 'number',
        label: 'Myelo',
        passToFunction: '[ cellCntTotal cellCntMyeloAbs ]',
        tableColumn: '62',
        validation: 'numeric',
        fqn: 'hematology.cellCntMyelo'
      },
      {
        elementKey: 'cellCntMyeloAbs',
        calculationType: 'wbcAbs',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'Myelo Abs',
        tableColumn: '63',
        validation: 'numeric',
        fqn: 'hematology.cellCntMyeloAbs'
      },
      {
        elementKey: 'cellCntPromyelo',
        formIndex: '2',
        inputType: 'number',
        label: 'Promyelo',
        passToFunction: '[ cellCntTotal cellCntPromyeloAbs ]',
        tableColumn: '64',
        validation: 'numeric',
        fqn: 'hematology.cellCntPromyelo'
      },
      {
        elementKey: 'cellCntPromyeloAbs',
        calculationType: 'wbcAbs',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'Promyelo Abs',
        tableColumn: '65',
        validation: 'numeric',
        fqn: 'hematology.cellCntPromyeloAbs'
      },
      {
        elementKey: 'cellCntBlast',
        formIndex: '2',
        inputType: 'number',
        label: 'Blast',
        passToFunction: '[ cellCntTotal cellCntBlastAbs ]',
        tableColumn: '66',
        validation: 'numeric',
        fqn: 'hematology.cellCntBlast'
      },
      {
        elementKey: 'cellCntBlastAbs',
        calculationType: 'wbcAbs',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'Blast Abs',
        tableColumn: '67',
        validation: 'numeric',
        fqn: 'hematology.cellCntBlastAbs'
      },
      {
        elementKey: 'cellCntReactiveLymphs',
        formIndex: '2',
        inputType: 'number',
        label: 'Reactive Lymphs',
        passToFunction: '[ cellCntTotal cellCntReactiveLymphsAbs ]',
        tableColumn: '68',
        validation: 'numeric',
        fqn: 'hematology.cellCntReactiveLymphs'
      },
      {
        elementKey: 'cellCntReactiveLymphsAbs',
        calculationType: 'wbcAbs',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'Reactive Lymphs Abs',
        tableColumn: '69',
        validation: 'numeric',
        fqn: 'hematology.cellCntReactiveLymphsAbs'
      },
      {
        elementKey: 'cellCntOther',
        formIndex: '2',
        inputType: 'number',
        label: 'Other',
        passToFunction: '[ cellCntTotal cellCntOtherAbs ]',
        tableColumn: '70',
        validation: 'numeric',
        fqn: 'hematology.cellCntOther'
      },
      {
        elementKey: 'cellCntOtherAbs',
        calculationType: 'wbcAbs',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'Other Abs',
        tableColumn: '71',
        validation: 'numeric',
        fqn: 'hematology.cellCntOtherAbs'
      },
      {
        elementKey: 'spacer139',
        formIndex: '2',
        inputType: 'spacer',
        fqn: 'hematology.spacer139'
      },
      {
        elementKey: 'cellCntOtherSpecify',
        formIndex: '2',
        inputType: 'text',
        label: 'Specify',
        tableColumn: '72',
        fqn: 'hematology.cellCntOtherSpecify'
      },
      {
        elementKey: 'cellCntTotal',
        calculationType: 'sum',
        formIndex: '2',
        inputType: 'calculatedValue',
        label: 'Total',
        tableColumn: '73',
        fqn: 'hematology.cellCntTotal'
      },
      {
        elementKey: 'cellCntNRBCs',
        formIndex: '2',
        helperText: 'nucleated red blood cells',
        inputType: 'number',
        label: 'NRBCs',
        tableColumn: '74',
        fqn: 'hematology.cellCntNRBCs',
        helperHtml: '<p>nucleated red blood cells</p>'
      },
      {
        elementKey: 'wbcmNormalMorphology',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Normal',
        tableColumn: '75',
        fqn: 'hematology.wbcmNormalMorphology'
      },
      {
        elementKey: 'rcmMicroSpace',
        formIndex: '2',
        inputType: 'spacer',
        fqn: 'hematology.rcmMicroSpace'
      },
      {
        elementKey: 'rcmMicroSpace',
        formIndex: '2',
        inputType: 'spacer',
        fqn: 'hematology.rcmMicroSpace'
      },
      {
        elementKey: 'wbcmAbnormalMorphology',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Abnormal',
        tableColumn: '76',
        fqn: 'hematology.wbcmAbnormalMorphology'
      },
      {
        elementKey: 'wbcmAbnormalTypeMorphology',
        formIndex: '2',
        formCss: 'form_label_short',
        inputType: 'checkset',
        label: 'Type',
        options: [
          {
            key: 'Abnormal Lymphocytes',
            text: 'Abnormal Lymphocytes'
          },
          {
            key: 'Auer Rods',
            text: 'Auer Rods'
          },
          {
            key: 'Dysplastic Cells',
            text: 'Dysplastic Cells'
          },
          {
            key: 'Hairy Cells',
            text: 'Hairy Cells'
          },
          {
            key: 'Hypersegmented Neutrophils',
            text: 'Hypersegmented Neutrophils'
          },
          {
            key: 'Immature Cells',
            text: 'Immature Cells'
          },
          {
            key: 'Increased Reactive Lymphocytes',
            text: 'Increased Reactive Lymphocytes'
          },
          {
            key: 'Necrobiotic Cells',
            text: 'Necrobiotic Cells'
          },
          {
            key: 'Pelger-Huët Cells',
            text: 'Pelger-Huët Cells'
          },
          {
            key: 'Smudge Cells',
            text: 'Smudge Cells'
          }
        ],
        tableColumn: '77',
        fqn: 'hematology.wbcmAbnormalTypeMorphology'
      },
      {
        elementKey: 'rcmMicroSpace',
        formIndex: '2',
        inputType: 'spacer',
        fqn: 'hematology.rcmMicroSpace'
      },
      {
        elementKey: 'wbcmToxicMorphology',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Toxic Signs',
        tableColumn: '78',
        fqn: 'hematology.wbcmToxicMorphology'
      },
      {
        elementKey: 'wbcmToxicTypeMorphology',
        formIndex: '2',
        formCss: 'form_label_short',
        inputType: 'checkset',
        label: 'Type',
        options: [
          {
            key: 'Döhle Bodies',
            text: 'Döhle Bodies'
          },
          {
            key: 'Toxic Granulation',
            text: 'Toxic Granulation'
          },
          {
            key: 'Toxic Vacuolation',
            text: 'Toxic Vacuolation'
          }
        ],
        tableColumn: '79',
        fqn: 'hematology.wbcmToxicTypeMorphology'
      },
      {
        elementKey: 'rcmNormal',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Normal',
        tableColumn: '80',
        fqn: 'hematology.rcmNormal'
      },
      {
        elementKey: 'spacer142',
        formIndex: '2',
        inputType: 'spacer',
        fqn: 'hematology.spacer142'
      },
      {
        elementKey: 'rcmConsistent',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Consistent with indices',
        tableColumn: '81',
        fqn: 'hematology.rcmConsistent'
      },
      {
        elementKey: 'spacer143',
        formIndex: '2',
        inputType: 'spacer',
        fqn: 'hematology.spacer143'
      },
      {
        elementKey: 'rcmAcanthocytes',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Acanthocytes',
        tableColumn: '82',
        fqn: 'hematology.rcmAcanthocytes'
      },
      {
        elementKey: 'rcmAcanthocytesGrading',
        formIndex: '2',
        formCss: 'form_label_long',
        inputType: 'select',
        label: 'Acanthocytes grading',
        options: [
          {
            key: '1+',
            text: '1+'
          },
          {
            key: '2+',
            text: '2+'
          },
          {
            key: '3+',
            text: '3+'
          },
          {
            key: '4+',
            text: '4+'
          }
        ],
        tableColumn: '83',
        fqn: 'hematology.rcmAcanthocytesGrading'
      },
      {
        elementKey: 'rcmCodocytes',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Codocytes (Target Cells)',
        tableColumn: '84',
        fqn: 'hematology.rcmCodocytes'
      },
      {
        elementKey: 'rcmCodocytesGrading',
        formIndex: '2',
        formCss: 'form_label_long',
        inputType: 'select',
        label: 'Codocytes (Target Cells) grading',
        options: [
          {
            key: '1+',
            text: '1+'
          },
          {
            key: '2+',
            text: '2+'
          },
          {
            key: '3+',
            text: '3+'
          },
          {
            key: '4+',
            text: '4+'
          }
        ],
        tableColumn: '85',
        fqn: 'hematology.rcmCodocytesGrading'
      },
      {
        elementKey: 'rcmDacryocytes',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Dacryocytes (Tear Drop Cells)',
        tableColumn: '86',
        fqn: 'hematology.rcmDacryocytes'
      },
      {
        elementKey: 'rcmDacryocytesGrading',
        formIndex: '2',
        formCss: 'form_label_long',
        inputType: 'select',
        label: 'Dacryocytes (Tear Drop Cells) grading',
        options: [
          {
            key: '1+',
            text: '1+'
          },
          {
            key: '2+',
            text: '2+'
          },
          {
            key: '3+',
            text: '3+'
          },
          {
            key: '4+',
            text: '4+'
          }
        ],
        tableColumn: '87',
        fqn: 'hematology.rcmDacryocytesGrading'
      },
      {
        elementKey: 'rcmDrepanocytes',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Drepanocytes (Sickle Cells)',
        tableColumn: '88',
        fqn: 'hematology.rcmDrepanocytes'
      },
      {
        elementKey: 'rcmDrepanocytesGrading',
        formIndex: '2',
        formCss: 'form_label_long',
        inputType: 'select',
        label: 'Drepanocytes (Sickle Cells) grading',
        options: [
          {
            key: '1+',
            text: '1+'
          },
          {
            key: '2+',
            text: '2+'
          },
          {
            key: '3+',
            text: '3+'
          },
          {
            key: '4+',
            text: '4+'
          }
        ],
        tableColumn: '89',
        fqn: 'hematology.rcmDrepanocytesGrading'
      },
      {
        elementKey: 'rcmEchinocytes',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Echinocytes (Burr Cells)',
        tableColumn: '90',
        fqn: 'hematology.rcmEchinocytes'
      },
      {
        elementKey: 'rcmEchinocytesGrading',
        formIndex: '2',
        formCss: 'form_label_long',
        inputType: 'select',
        label: 'Echinocytes (Burr Cells) grading',
        options: [
          {
            key: '1+',
            text: '1+'
          },
          {
            key: '2+',
            text: '2+'
          },
          {
            key: '3+',
            text: '3+'
          },
          {
            key: '4+',
            text: '4+'
          }
        ],
        tableColumn: '91',
        fqn: 'hematology.rcmEchinocytesGrading'
      },
      {
        elementKey: 'rcmOvalocytes',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Elliptocytes/Ovalocytes',
        tableColumn: '92',
        fqn: 'hematology.rcmOvalocytes'
      },
      {
        elementKey: 'rcmOvalocytesGrading',
        formIndex: '2',
        formCss: 'form_label_long',
        inputType: 'select',
        label: 'Elliptocytes/Ovalocytes grading',
        options: [
          {
            key: '1+',
            text: '1+'
          },
          {
            key: '2+',
            text: '2+'
          },
          {
            key: '3+',
            text: '3+'
          },
          {
            key: '4+',
            text: '4+'
          }
        ],
        tableColumn: '93',
        fqn: 'hematology.rcmOvalocytesGrading'
      },
      {
        elementKey: 'rcmMacroOvalocytes',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Macro-ovalocytes',
        tableColumn: '94',
        fqn: 'hematology.rcmMacroOvalocytes'
      },
      {
        elementKey: 'rcmMacroOvalocytesGrading',
        formIndex: '2',
        formCss: 'form_label_long',
        inputType: 'select',
        label: 'Macro-ovalocytes grading',
        options: [
          {
            key: '1+',
            text: '1+'
          },
          {
            key: '2+',
            text: '2+'
          },
          {
            key: '3+',
            text: '3+'
          },
          {
            key: '4+',
            text: '4+'
          }
        ],
        tableColumn: '95',
        fqn: 'hematology.rcmMacroOvalocytesGrading'
      },
      {
        elementKey: 'rcmStomatocytes',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Stomatocytes',
        tableColumn: '96',
        fqn: 'hematology.rcmStomatocytes'
      },
      {
        elementKey: 'rcmStomatocytesGrading',
        formIndex: '2',
        formCss: 'form_label_long',
        inputType: 'select',
        label: 'Stomatocytes grading',
        options: [
          {
            key: '1+',
            text: '1+'
          },
          {
            key: '2+',
            text: '2+'
          },
          {
            key: '3+',
            text: '3+'
          },
          {
            key: '4+',
            text: '4+'
          }
        ],
        tableColumn: '97',
        fqn: 'hematology.rcmStomatocytesGrading'
      },
      {
        elementKey: 'rcmSpherocytes',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Spherocytes',
        tableColumn: '98',
        fqn: 'hematology.rcmSpherocytes'
      },
      {
        elementKey: 'rcmSpherocytesGrading',
        formIndex: '2',
        formCss: 'form_label_long',
        inputType: 'select',
        label: 'Spherocytes grading',
        options: [
          {
            key: '1+',
            text: '1+'
          },
          {
            key: '2+',
            text: '2+'
          },
          {
            key: '3+',
            text: '3+'
          },
          {
            key: '4+',
            text: '4+'
          }
        ],
        tableColumn: '99',
        fqn: 'hematology.rcmSpherocytesGrading'
      },
      {
        elementKey: 'rcmICC',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Irregularly Contracted Cells (ICC)',
        tableColumn: '100',
        fqn: 'hematology.rcmICC'
      },
      {
        elementKey: 'rcmICCGrading',
        formIndex: '2',
        formCss: 'form_label_long',
        inputType: 'select',
        label: 'Irregularly Contracted Cells (ICC) grading',
        options: [
          {
            key: '1+',
            text: '1+'
          },
          {
            key: '2+',
            text: '2+'
          },
          {
            key: '3+',
            text: '3+'
          },
          {
            key: '4+',
            text: '4+'
          }
        ],
        tableColumn: '101',
        fqn: 'hematology.rcmICCGrading'
      },
      {
        elementKey: 'rcmICCBite',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Bite Cells',
        tableColumn: '102',
        fqn: 'hematology.rcmICCBite'
      },
      {
        elementKey: 'rcmICCBiteGrading',
        formIndex: '2',
        formCss: 'form_label_long',
        inputType: 'select',
        label: 'Bite Cells grading',
        options: [
          {
            key: '1+',
            text: '1+'
          },
          {
            key: '2+',
            text: '2+'
          },
          {
            key: '3+',
            text: '3+'
          },
          {
            key: '4+',
            text: '4+'
          }
        ],
        tableColumn: '103',
        fqn: 'hematology.rcmICCBiteGrading'
      },
      {
        elementKey: 'rcmICCHelmut',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Helmet Cells',
        tableColumn: '104',
        fqn: 'hematology.rcmICCHelmut'
      },
      {
        elementKey: 'rcmICCHelmutGrading',
        formIndex: '2',
        formCss: 'form_label_long',
        inputType: 'select',
        label: 'Helmet Cells grading',
        options: [
          {
            key: '1+',
            text: '1+'
          },
          {
            key: '2+',
            text: '2+'
          },
          {
            key: '3+',
            text: '3+'
          },
          {
            key: '4+',
            text: '4+'
          }
        ],
        tableColumn: '105',
        fqn: 'hematology.rcmICCHelmutGrading'
      },
      {
        elementKey: 'rcmICCSchistocytes',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Schistocytes',
        tableColumn: '106',
        fqn: 'hematology.rcmICCSchistocytes'
      },
      {
        elementKey: 'rcmICCSchistocytesGrading',
        formIndex: '2',
        formCss: 'form_label_long',
        inputType: 'select',
        label: 'Grading',
        options: [
          {
            key: '1+',
            text: '1+'
          },
          {
            key: '2+',
            text: '2+'
          },
          {
            key: '3+',
            text: '3+'
          },
          {
            key: '4+',
            text: '4+'
          }
        ],
        tableColumn: '107',
        fqn: 'hematology.rcmICCSchistocytesGrading'
      },
      {
        elementKey: 'rcmBasophilicStippling',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Coarse Basophilic Stippling',
        tableColumn: '108',
        fqn: 'hematology.rcmBasophilicStippling'
      },
      {
        elementKey: 'rcmHowellJollyBodies',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Howell-Jolly Bodies',
        tableColumn: '109',
        fqn: 'hematology.rcmHowellJollyBodies'
      },
      {
        elementKey: 'rcmPappenheimerBodies',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Pappenheimer Bodies',
        tableColumn: '110',
        fqn: 'hematology.rcmPappenheimerBodies'
      },
      {
        elementKey: 'rcmMalaria',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Malaria',
        tableColumn: '111',
        fqn: 'hematology.rcmMalaria'
      },
      {
        elementKey: 'rcmMalariaType',
        formIndex: '2',
        formCss: 'form_label_short',
        inputType: 'checkset',
        label: 'Type',
        options: [
          {
            key: 'Gametocyte',
            text: 'Gametocyte'
          },
          {
            key: 'Ring Form/Trophozoite',
            text: 'Ring Form/Trophozoite'
          },
          {
            key: 'Schizont',
            text: 'Schizont'
          }
        ],
        tableColumn: '112',
        fqn: 'hematology.rcmMalariaType'
      },
      {
        elementKey: 'rbcComments',
        formIndex: '2',
        inputType: 'textarea',
        label: 'Internal RBC comments',
        tableColumn: '112',
        fqn: 'hematology.rbcComments'
      },
      {
        elementKey: 'spacer146',
        formIndex: '2',
        inputType: 'spacer',
        fqn: 'hematology.spacer146'
      },
      {
        elementKey: 'spacer147',
        formIndex: '2',
        inputType: 'spacer',
        fqn: 'hematology.spacer147'
      },
      {
        elementKey: 'referralToHema',
        formIndex: '2',
        inputType: 'checkbox',
        label: 'Referral to hematopathologist',
        tableColumn: '113',
        fqn: 'hematology.referralToHema'
      },
      {
        elementKey: 'explain',
        formIndex: '2',
        inputType: 'textarea',
        label: 'Reason for referral',
        tableColumn: '114',
        fqn: 'hematology.explain'
      }
    ],
    pageElements: {
      tableCbcAnalysis: {
        elementKey: 'tableCbcAnalysis',
        tableKey: 'tableCbcAnalysis',
        isTable: true,
        hasRecHeader: true,
        label: 'CBC analysis',
        addButtonText: 'Add a CBC Report',
        tableAction: 'pbf-review',
        tableActionLabel: 'PBF Review',
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
              'dateOfTest'
            ]
          },
          {
            ehr_list_index: '6',
            items: [
              'timeOfTest'
            ]
          },
          {
            ehr_list_index: '7',
            items: [
              'wbc'
            ]
          },
          {
            ehr_list_index: '8',
            items: [
              'wbc-interp'
            ]
          },
          {
            ehr_list_index: '9',
            items: [
              'rbc'
            ]
          },
          {
            ehr_list_index: '10',
            items: [
              'rbc-interp',
              'hgb'
            ]
          },
          {
            ehr_list_index: '11',
            items: [
              'hgb-interp',
              'HCT'
            ]
          },
          {
            ehr_list_index: '12',
            items: [
              'HCT-interp',
              'MCV'
            ]
          },
          {
            ehr_list_index: '13',
            items: [
              'MCV-interp',
              'MCH'
            ]
          },
          {
            ehr_list_index: '14',
            items: [
              'MCH-interp',
              'MCHC'
            ]
          },
          {
            ehr_list_index: '15',
            items: [
              'MCHC-interp',
              'RDW'
            ]
          },
          {
            ehr_list_index: '16',
            items: [
              'RDW-interp',
              'PLT'
            ]
          },
          {
            ehr_list_index: '17',
            items: [
              'PLT-interp',
              'MPV'
            ]
          },
          {
            ehr_list_index: '18',
            items: [
              'MPV-interp',
              'comments'
            ]
          }
        ],
        form: {
          elementKey: 'tableCbcAnalysis',
          label: 'CBC analysis',
          addButtonText: 'Add a CBC Report',
          formKey: 'tableCbcAnalysis',
          ehr_groups: [
            {
              elementKey: 'ehr_group127',
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
              elementKey: 'ehr_group128',
              gIndex: '2',
              gChildren: [
                'patientName',
                'patientHealthNumber',
                'dateOfBirth',
                'dateOfTest',
                'timeOfTest'
              ]
            },
            {
              elementKey: 'ehr_group129',
              label: 'Automated analyzer',
              gIndex: '3',
              gChildren: [
                'wbc',
                'wbc-interp',
                'aSpacer',
                'rbc',
                'rbc-interp',
                'aSpacer',
                'hgb',
                'hgb-interp',
                'aSpacer',
                'HCT',
                'HCT-interp',
                'aSpacer',
                'MCV',
                'MCV-interp',
                'aSpacer',
                'MCH',
                'MCH-interp',
                'aSpacer',
                'MCHC',
                'MCHC-interp',
                'aSpacer',
                'RDW',
                'RDW-interp',
                'aSpacer',
                'PLT',
                'PLT-interp',
                'aSpacer',
                'MPV',
                'MPV-interp',
                'aSpacer'
              ]
            },
            {
              elementKey: 'ehr_group130',
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
            patientName: '',
            patientHealthNumber: '',
            dateOfBirth: '',
            dateOfTest: '',
            timeOfTest: '',
            wbc: '',
            'wbc-interp': '',
            rbc: '',
            'rbc-interp': '',
            hgb: '',
            'hgb-interp': '',
            HCT: '',
            'HCT-interp': '',
            MCV: '',
            'MCV-interp': '',
            MCH: '',
            'MCH-interp': '',
            MCHC: '',
            'MCHC-interp': '',
            RDW: '',
            'RDW-interp': '',
            PLT: '',
            'PLT-interp': '',
            MPV: '',
            'MPV-interp': '',
            comments: ''
          }
        }
      },
      tablePbfReview: {
        elementKey: 'tablePbfReview',
        tableKey: 'tablePbfReview',
        isTable: true,
        hasRecHeader: true,
        label: 'PBF Review',
        addButtonText: 'NONE',
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
              'dateOfReview'
            ]
          },
          {
            ehr_list_index: '6',
            items: [
              'timeOfReview'
            ]
          },
          {
            ehr_list_index: '7',
            items: [
              'bloodAnalysis'
            ]
          },
          {
            ehr_list_index: '8',
            items: [
              'actionsRequired'
            ]
          },
          {
            ehr_list_index: '9',
            items: [
              'actionsTaken'
            ]
          },
          {
            ehr_list_index: '10',
            items: [
              'scanComments'
            ]
          },
          {
            ehr_list_index: '11',
            items: [
              'wbc-1'
            ]
          },
          {
            ehr_list_index: '12',
            items: [
              'wbc-2'
            ]
          },
          {
            ehr_list_index: '13',
            items: [
              'wbc-3'
            ]
          },
          {
            ehr_list_index: '14',
            items: [
              'wbc-4'
            ]
          },
          {
            ehr_list_index: '15',
            items: [
              'wbc-5'
            ]
          },
          {
            ehr_list_index: '16',
            items: [
              'wbc-6'
            ]
          },
          {
            ehr_list_index: '17',
            items: [
              'wbc-7'
            ]
          },
          {
            ehr_list_index: '18',
            items: [
              'wbc-8'
            ]
          },
          {
            ehr_list_index: '19',
            items: [
              'wbc-9'
            ]
          },
          {
            ehr_list_index: '20',
            items: [
              'wbc-10'
            ]
          },
          {
            ehr_list_index: '21',
            items: [
              'wbcFieldFactor'
            ]
          },
          {
            ehr_list_index: '22',
            items: [
              'wbcAverage'
            ]
          },
          {
            ehr_list_index: '23',
            items: [
              'wbcEstimate'
            ]
          },
          {
            ehr_list_index: '24',
            items: [
              'wbcAnalysis'
            ]
          },
          {
            ehr_list_index: '25',
            items: [
              'wbcLowRange'
            ]
          },
          {
            ehr_list_index: '26',
            items: [
              'wbcHighRange'
            ]
          },
          {
            ehr_list_index: '27',
            items: [
              'wbcComment'
            ]
          },
          {
            ehr_list_index: '28',
            items: [
              'plt-1'
            ]
          },
          {
            ehr_list_index: '29',
            items: [
              'plt-2'
            ]
          },
          {
            ehr_list_index: '30',
            items: [
              'plt-3'
            ]
          },
          {
            ehr_list_index: '31',
            items: [
              'plt-4'
            ]
          },
          {
            ehr_list_index: '32',
            items: [
              'plt-5'
            ]
          },
          {
            ehr_list_index: '33',
            items: [
              'plt-6'
            ]
          },
          {
            ehr_list_index: '34',
            items: [
              'plt-7'
            ]
          },
          {
            ehr_list_index: '35',
            items: [
              'plt-8'
            ]
          },
          {
            ehr_list_index: '36',
            items: [
              'plt-9'
            ]
          },
          {
            ehr_list_index: '37',
            items: [
              'plt-10'
            ]
          },
          {
            ehr_list_index: '38',
            items: [
              'pltFieldFactor'
            ]
          },
          {
            ehr_list_index: '39',
            items: [
              'pltAverage'
            ]
          },
          {
            ehr_list_index: '40',
            items: [
              'pltEstimate'
            ]
          },
          {
            ehr_list_index: '41',
            items: [
              'pltAnalysis'
            ]
          },
          {
            ehr_list_index: '42',
            items: [
              'pltLowRange'
            ]
          },
          {
            ehr_list_index: '43',
            items: [
              'pltHighRange'
            ]
          },
          {
            ehr_list_index: '44',
            items: [
              'pltComment'
            ]
          },
          {
            ehr_list_index: '45',
            items: [
              'pltNormalMorphology'
            ]
          },
          {
            ehr_list_index: '46',
            items: [
              'pltAbnormalMorphology'
            ]
          },
          {
            ehr_list_index: '47',
            items: [
              'pltMorphology'
            ]
          },
          {
            ehr_list_index: '48',
            items: [
              'cellCntSegNeutrophil'
            ]
          },
          {
            ehr_list_index: '49',
            items: [
              'cellCntSegNeutrophilAbs'
            ]
          },
          {
            ehr_list_index: '50',
            items: [
              'cellCntBandCells'
            ]
          },
          {
            ehr_list_index: '51',
            items: [
              'cellCntBandCellsAbs'
            ]
          },
          {
            ehr_list_index: '52',
            items: [
              'cellCntLymph'
            ]
          },
          {
            ehr_list_index: '53',
            items: [
              'cellCntLymphAbs'
            ]
          },
          {
            ehr_list_index: '54',
            items: [
              'cellCntMono'
            ]
          },
          {
            ehr_list_index: '55',
            items: [
              'cellCntMonoAbs'
            ]
          },
          {
            ehr_list_index: '56',
            items: [
              'cellCntEosin'
            ]
          },
          {
            ehr_list_index: '57',
            items: [
              'cellCntEosinAbs'
            ]
          },
          {
            ehr_list_index: '58',
            items: [
              'cellCntBaso'
            ]
          },
          {
            ehr_list_index: '59',
            items: [
              'cellCntBasoAbs'
            ]
          },
          {
            ehr_list_index: '60',
            items: [
              'cellCntMeta'
            ]
          },
          {
            ehr_list_index: '61',
            items: [
              'cellCntMetaAbs'
            ]
          },
          {
            ehr_list_index: '62',
            items: [
              'cellCntMyelo'
            ]
          },
          {
            ehr_list_index: '63',
            items: [
              'cellCntMyeloAbs'
            ]
          },
          {
            ehr_list_index: '64',
            items: [
              'cellCntPromyelo'
            ]
          },
          {
            ehr_list_index: '65',
            items: [
              'cellCntPromyeloAbs'
            ]
          },
          {
            ehr_list_index: '66',
            items: [
              'cellCntBlast'
            ]
          },
          {
            ehr_list_index: '67',
            items: [
              'cellCntBlastAbs'
            ]
          },
          {
            ehr_list_index: '68',
            items: [
              'cellCntReactiveLymphs'
            ]
          },
          {
            ehr_list_index: '69',
            items: [
              'cellCntReactiveLymphsAbs'
            ]
          },
          {
            ehr_list_index: '70',
            items: [
              'cellCntOther'
            ]
          },
          {
            ehr_list_index: '71',
            items: [
              'cellCntOtherAbs'
            ]
          },
          {
            ehr_list_index: '72',
            items: [
              'cellCntOtherSpecify'
            ]
          },
          {
            ehr_list_index: '73',
            items: [
              'cellCntTotal'
            ]
          },
          {
            ehr_list_index: '74',
            items: [
              'cellCntNRBCs'
            ]
          },
          {
            ehr_list_index: '75',
            items: [
              'wbcmNormalMorphology'
            ]
          },
          {
            ehr_list_index: '76',
            items: [
              'wbcmAbnormalMorphology'
            ]
          },
          {
            ehr_list_index: '77',
            items: [
              'wbcmAbnormalTypeMorphology'
            ]
          },
          {
            ehr_list_index: '78',
            items: [
              'wbcmToxicMorphology'
            ]
          },
          {
            ehr_list_index: '79',
            items: [
              'wbcmToxicTypeMorphology'
            ]
          },
          {
            ehr_list_index: '80',
            items: [
              'rcmNormal'
            ]
          },
          {
            ehr_list_index: '81',
            items: [
              'rcmConsistent'
            ]
          },
          {
            ehr_list_index: '82',
            items: [
              'rcmAcanthocytes'
            ]
          },
          {
            ehr_list_index: '83',
            items: [
              'rcmAcanthocytesGrading'
            ]
          },
          {
            ehr_list_index: '84',
            items: [
              'rcmCodocytes'
            ]
          },
          {
            ehr_list_index: '85',
            items: [
              'rcmCodocytesGrading'
            ]
          },
          {
            ehr_list_index: '86',
            items: [
              'rcmDacryocytes'
            ]
          },
          {
            ehr_list_index: '87',
            items: [
              'rcmDacryocytesGrading'
            ]
          },
          {
            ehr_list_index: '88',
            items: [
              'rcmDrepanocytes'
            ]
          },
          {
            ehr_list_index: '89',
            items: [
              'rcmDrepanocytesGrading'
            ]
          },
          {
            ehr_list_index: '90',
            items: [
              'rcmEchinocytes'
            ]
          },
          {
            ehr_list_index: '91',
            items: [
              'rcmEchinocytesGrading'
            ]
          },
          {
            ehr_list_index: '92',
            items: [
              'rcmOvalocytes'
            ]
          },
          {
            ehr_list_index: '93',
            items: [
              'rcmOvalocytesGrading'
            ]
          },
          {
            ehr_list_index: '94',
            items: [
              'rcmMacroOvalocytes'
            ]
          },
          {
            ehr_list_index: '95',
            items: [
              'rcmMacroOvalocytesGrading'
            ]
          },
          {
            ehr_list_index: '96',
            items: [
              'rcmStomatocytes'
            ]
          },
          {
            ehr_list_index: '97',
            items: [
              'rcmStomatocytesGrading'
            ]
          },
          {
            ehr_list_index: '98',
            items: [
              'rcmSpherocytes'
            ]
          },
          {
            ehr_list_index: '99',
            items: [
              'rcmSpherocytesGrading'
            ]
          },
          {
            ehr_list_index: '100',
            items: [
              'rcmICC'
            ]
          },
          {
            ehr_list_index: '101',
            items: [
              'rcmICCGrading'
            ]
          },
          {
            ehr_list_index: '102',
            items: [
              'rcmICCBite'
            ]
          },
          {
            ehr_list_index: '103',
            items: [
              'rcmICCBiteGrading'
            ]
          },
          {
            ehr_list_index: '104',
            items: [
              'rcmICCHelmut'
            ]
          },
          {
            ehr_list_index: '105',
            items: [
              'rcmICCHelmutGrading'
            ]
          },
          {
            ehr_list_index: '106',
            items: [
              'rcmICCSchistocytes'
            ]
          },
          {
            ehr_list_index: '107',
            items: [
              'rcmICCSchistocytesGrading'
            ]
          },
          {
            ehr_list_index: '108',
            items: [
              'rcmBasophilicStippling'
            ]
          },
          {
            ehr_list_index: '109',
            items: [
              'rcmHowellJollyBodies'
            ]
          },
          {
            ehr_list_index: '110',
            items: [
              'rcmPappenheimerBodies'
            ]
          },
          {
            ehr_list_index: '111',
            items: [
              'rcmMalaria'
            ]
          },
          {
            ehr_list_index: '112',
            items: [
              'rcmMalariaType',
              'rbcComments'
            ]
          },
          {
            ehr_list_index: '113',
            items: [
              'referralToHema'
            ]
          },
          {
            ehr_list_index: '114',
            items: [
              'explain'
            ]
          }
        ],
        form: {
          elementKey: 'tablePbfReview',
          label: 'PBF Review',
          addButtonText: 'NONE',
          formKey: 'tablePbfReview',
          ehr_groups: [
            {
              elementKey: 'ehr_group131',
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
              elementKey: 'ehr_group132',
              gIndex: '2',
              gChildren: [
                'patientName',
                'patientHealthNumber',
                'dateOfBirth',
                'dateOfReview',
                'timeOfReview'
              ]
            },
            {
              elementKey: 'ehr_group133',
              label: 'CBC Analysis',
              formCss: 'grid-left-to-right-1',
              gIndex: '3',
              gChildren: [
                'bloodAnalysis'
              ]
            },
            {
              elementKey: 'ehr_group134',
              label: 'Actions',
              formCss: 'grid-left-to-right-1',
              gIndex: '4',
              gChildren: [
                'actionsRequired',
                'actionsTaken',
                'scanComments'
              ]
            },
            {
              elementKey: 'ehr_group135',
              label: 'WBC Estimate',
              formCss: 'grid-left-to-right-4',
              gIndex: '5',
              gChildren: [
                'wbc-1',
                'wbc-2',
                'wbc-3',
                'wbc-4',
                'wbc-5',
                'wbc-6',
                'wbc-7',
                'wbc-8',
                'wbc-9',
                'wbc-10',
                'wbcFieldFactor',
                'wbcAverage',
                'wbcEstimate',
                'wbcAnalysis',
                'wbcLowRange',
                'wbcHighRange',
                'wbcComment'
              ]
            },
            {
              elementKey: 'ehr_group136',
              label: 'PLT Estimate',
              formCss: 'grid-left-to-right-4',
              gIndex: '6',
              gChildren: [
                'plt-1',
                'plt-2',
                'plt-3',
                'plt-4',
                'plt-5',
                'plt-6',
                'plt-7',
                'plt-8',
                'plt-9',
                'plt-10',
                'pltFieldFactor',
                'pltAverage',
                'pltEstimate',
                'pltAnalysis',
                'pltLowRange',
                'pltHighRange',
                'pltComment'
              ]
            },
            {
              elementKey: 'ehr_group137',
              label: 'PLT morphology',
              formCss: 'grid-left-to-right-1',
              gIndex: '7',
              gChildren: [
                'pltNormalMorphology',
                'pltAbnormalMorphology',
                'pltMorphology'
              ]
            },
            {
              elementKey: 'ehr_group138',
              label: 'WBC Differential',
              formCss: 'grid-left-to-right-2',
              gIndex: '8',
              gChildren: [
                'cellCntSegNeutrophil',
                'cellCntSegNeutrophilAbs',
                'cellCntBandCells',
                'cellCntBandCellsAbs',
                'cellCntLymph',
                'cellCntLymphAbs',
                'cellCntMono',
                'cellCntMonoAbs',
                'cellCntEosin',
                'cellCntEosinAbs',
                'cellCntBaso',
                'cellCntBasoAbs',
                'cellCntMeta',
                'cellCntMetaAbs',
                'cellCntMyelo',
                'cellCntMyeloAbs',
                'cellCntPromyelo',
                'cellCntPromyeloAbs',
                'cellCntBlast',
                'cellCntBlastAbs',
                'cellCntReactiveLymphs',
                'cellCntReactiveLymphsAbs',
                'cellCntOther',
                'cellCntOtherAbs',
                'spacer139',
                'cellCntOtherSpecify',
                'cellCntTotal',
                'cellCntNRBCs'
              ]
            },
            {
              elementKey: 'ehr_group140',
              label: 'White Cell Morphology',
              gIndex: '9',
              gChildren: [
                'wbcmNormalMorphology',
                'rcmMicroSpace',
                'rcmMicroSpace',
                'wbcmAbnormalMorphology',
                'wbcmAbnormalTypeMorphology',
                'rcmMicroSpace',
                'wbcmToxicMorphology',
                'wbcmToxicTypeMorphology'
              ]
            },
            {
              elementKey: 'ehr_group141',
              label: 'Red Cell Morphology',
              formCss: 'grid-left-to-right-2',
              gIndex: '10',
              gChildren: [
                'rcmNormal',
                'spacer142',
                'rcmConsistent',
                'spacer143',
                'rcmAcanthocytes',
                'rcmAcanthocytesGrading',
                'rcmCodocytes',
                'rcmCodocytesGrading',
                'rcmDacryocytes',
                'rcmDacryocytesGrading',
                'rcmDrepanocytes',
                'rcmDrepanocytesGrading',
                'rcmEchinocytes',
                'rcmEchinocytesGrading',
                'rcmOvalocytes',
                'rcmOvalocytesGrading',
                'rcmMacroOvalocytes',
                'rcmMacroOvalocytesGrading',
                'rcmStomatocytes',
                'rcmStomatocytesGrading',
                'rcmSpherocytes',
                'rcmSpherocytesGrading',
                'rcmICC',
                'rcmICCGrading',
                'rcmICCBite',
                'rcmICCBiteGrading',
                'rcmICCHelmut',
                'rcmICCHelmutGrading',
                'rcmICCSchistocytes',
                'rcmICCSchistocytesGrading'
              ]
            },
            {
              elementKey: 'ehr_group144',
              label: 'RBC Inclusions',
              gIndex: '11',
              gChildren: [
                'rcmBasophilicStippling',
                'rcmHowellJollyBodies',
                'rcmPappenheimerBodies',
                'rcmMalaria',
                'rcmMalariaType'
              ]
            },
            {
              elementKey: 'ehr_group145',
              formCss: 'grid-left-to-right-1',
              gIndex: '12',
              gChildren: [
                'rbcComments',
                'spacer146',
                'spacer147'
              ]
            },
            {
              elementKey: 'ehr_group148',
              formCss: 'grid-left-to-right-1',
              gIndex: '13',
              gChildren: [
                'referralToHema',
                'explain'
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
            dateOfReview: '',
            timeOfReview: '',
            bloodAnalysis: '',
            actionsRequired: '',
            actionsTaken: '',
            scanComments: '',
            'wbc-1': '',
            'wbc-2': '',
            'wbc-3': '',
            'wbc-4': '',
            'wbc-5': '',
            'wbc-6': '',
            'wbc-7': '',
            'wbc-8': '',
            'wbc-9': '',
            'wbc-10': '',
            wbcFieldFactor: '1.8',
            wbcAverage: '',
            wbcEstimate: '',
            wbcAnalysis: '',
            wbcLowRange: '',
            wbcHighRange: '',
            wbcComment: '',
            'plt-1': '',
            'plt-2': '',
            'plt-3': '',
            'plt-4': '',
            'plt-5': '',
            'plt-6': '',
            'plt-7': '',
            'plt-8': '',
            'plt-9': '',
            'plt-10': '',
            pltFieldFactor: '11.1',
            pltAverage: '',
            pltEstimate: '',
            pltAnalysis: '',
            pltLowRange: '',
            pltHighRange: '',
            pltComment: '',
            pltNormalMorphology: '',
            pltAbnormalMorphology: '',
            pltMorphology: '',
            cellCntSegNeutrophil: '',
            cellCntSegNeutrophilAbs: '',
            cellCntBandCells: '',
            cellCntBandCellsAbs: '',
            cellCntLymph: '',
            cellCntLymphAbs: '',
            cellCntMono: '',
            cellCntMonoAbs: '',
            cellCntEosin: '',
            cellCntEosinAbs: '',
            cellCntBaso: '',
            cellCntBasoAbs: '',
            cellCntMeta: '',
            cellCntMetaAbs: '',
            cellCntMyelo: '',
            cellCntMyeloAbs: '',
            cellCntPromyelo: '',
            cellCntPromyeloAbs: '',
            cellCntBlast: '',
            cellCntBlastAbs: '',
            cellCntReactiveLymphs: '',
            cellCntReactiveLymphsAbs: '',
            cellCntOther: '',
            cellCntOtherAbs: '',
            cellCntOtherSpecify: '',
            cellCntTotal: '',
            cellCntNRBCs: '',
            wbcmNormalMorphology: '',
            wbcmAbnormalMorphology: '',
            wbcmAbnormalTypeMorphology: '',
            wbcmToxicMorphology: '',
            wbcmToxicTypeMorphology: '',
            rcmNormal: '',
            rcmConsistent: '',
            rcmAcanthocytes: '',
            rcmAcanthocytesGrading: '',
            rcmCodocytes: '',
            rcmCodocytesGrading: '',
            rcmDacryocytes: '',
            rcmDacryocytesGrading: '',
            rcmDrepanocytes: '',
            rcmDrepanocytesGrading: '',
            rcmEchinocytes: '',
            rcmEchinocytesGrading: '',
            rcmOvalocytes: '',
            rcmOvalocytesGrading: '',
            rcmMacroOvalocytes: '',
            rcmMacroOvalocytesGrading: '',
            rcmStomatocytes: '',
            rcmStomatocytesGrading: '',
            rcmSpherocytes: '',
            rcmSpherocytesGrading: '',
            rcmICC: '',
            rcmICCGrading: '',
            rcmICCBite: '',
            rcmICCBiteGrading: '',
            rcmICCHelmut: '',
            rcmICCHelmutGrading: '',
            rcmICCSchistocytes: '',
            rcmICCSchistocytesGrading: '',
            rcmBasophilicStippling: '',
            rcmHowellJollyBodies: '',
            rcmPappenheimerBodies: '',
            rcmMalaria: '',
            rcmMalariaType: '',
            rbcComments: '',
            referralToHema: '',
            explain: ''
          }
        }
      }
    }
  },
  dishargeplan: {
    pageDataKey: 'dishargeplan',
    pageTitle: 'Discharge plan',
    pIndex: '44',
    hasGridTable: true,
    pageChildren: [
      {
        elementKey: 'name',
        formIndex: '1',
        inputType: 'practitionerName',
        label: 'Name',
        mandatory: true,
        tableColumn: '1',
        tableLabel: 'Identification',
        recHeader: true,
        fqn: 'dishargeplan.name'
      },
      {
        elementKey: 'profession',
        formIndex: '1',
        inputType: 'practitionerProfession',
        label: 'Profession',
        mandatory: true,
        tableColumn: '1',
        recHeader: true,
        fqn: 'dishargeplan.profession'
      },
      {
        elementKey: 'day',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Day',
        mandatory: true,
        tableColumn: '1',
        validation: 'visitDay',
        recHeader: true,
        fqn: 'dishargeplan.day'
      },
      {
        elementKey: 'time',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Time',
        mandatory: true,
        tableColumn: '1',
        validation: 'time24',
        recHeader: true,
        fqn: 'dishargeplan.time'
      },
      {
        elementKey: 'goal',
        formIndex: '1',
        inputType: 'text',
        label: 'Goal',
        tableColumn: '2',
        tableLabel: 'Goal',
        fqn: 'dishargeplan.goal'
      },
      {
        elementKey: 'interventions',
        formIndex: '1',
        formCss: 'grid-span-3-columns',
        inputType: 'textarea',
        label: 'Intervention',
        tableColumn: '3',
        tableLabel: 'Intervention',
        fqn: 'dishargeplan.interventions'
      },
      {
        elementKey: 'evaluation',
        formIndex: '1',
        formCss: 'grid-span-3-columns',
        inputType: 'textarea',
        label: 'Evaluation of intervention',
        tableColumn: '4',
        tableLabel: 'Evaluation of intervention',
        fqn: 'dishargeplan.evaluation'
      },
      {
        elementKey: 'status',
        formIndex: '1',
        inputType: 'select',
        label: 'Status',
        options: [
          {
            key: 'In progress',
            text: 'In progress'
          },
          {
            key: 'Complete',
            text: 'Complete'
          }
        ],
        tableColumn: '5',
        tableLabel: 'Status',
        fqn: 'dishargeplan.status'
      }
    ],
    pageElements: {
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: true,
        label: 'Discharge plan',
        addButtonText: 'Add a discharge planning note',
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
            label: 'Goal',
            ehr_list_index: '2',
            items: [
              'goal'
            ]
          },
          {
            label: 'Intervention',
            ehr_list_index: '3',
            items: [
              'interventions'
            ]
          },
          {
            label: 'Evaluation of intervention',
            ehr_list_index: '4',
            items: [
              'evaluation'
            ]
          },
          {
            label: 'Status',
            ehr_list_index: '5',
            items: [
              'status'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Discharge plan',
          addButtonText: 'Add a discharge planning note',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group117',
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
              elementKey: 'ehr_group118',
              gIndex: '2',
              gChildren: [
                'goal',
                'interventions',
                'evaluation',
                'status'
              ]
            }
          ],
          ehr_data: {
            name: '',
            profession: '',
            day: '',
            time: '',
            goal: '',
            interventions: '',
            evaluation: '',
            status: ''
          }
        }
      }
    }
  }
}
export default DEFS